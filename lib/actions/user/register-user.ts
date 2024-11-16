'use server'
import { User } from "@/models/User";
import { redirect } from "next/navigation";
import { hashSync } from "bcrypt-ts";
import connectDB from "@/lib/db";
import { z } from "zod"; // Import Zod

// Define the schema for validation using Zod
const registrationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 8 characters long"), // Password length can be adjusted as needed
});

// Register function with Zod validation
const register = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // Validate the form data using Zod
  try {
    registrationSchema.parse({ name, email, password }); // Zod validates the data
  } catch (error) {
    throw new Error(error.errors.map((err: any) => err.message).join(", ")); // Combine error messages if there are validation issues
  }

  await connectDB();

  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("User already exists");

  const hashedPassword = await hashSync(password, 12);

  await User.create({ name, email, password: hashedPassword });
  console.log(`User created successfully 🥂`);
  redirect("/login");
};

export { register };
