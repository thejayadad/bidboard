'use server'

import connectDB from "@/lib/db"
import { User } from "@/models/User"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

interface UpdateUserWeightFormData {
  weight: FormDataEntryValue;
  id: FormDataEntryValue;
}

export const updateUserWeight = async (formData: FormData) => {
  // Explicitly typing the result of Object.fromEntries
  const { weight, id } = Object.fromEntries(formData) as unknown as UpdateUserWeightFormData;

  try {
    await connectDB();

    const updateFields: { weight?: string; id: string } = {
      weight: weight as string, // Cast to string since `FormDataEntryValue` can be string or File
      id: id as string, // Cast to string
    };

    // Clean up fields that are empty or undefined
    Object.keys(updateFields).forEach((key) => {
      if (updateFields[key as keyof typeof updateFields] === "" || updateFields[key as keyof typeof updateFields] === undefined) {
        delete updateFields[key as keyof typeof updateFields];
      }
    });

    // Update the user document
    await User.findByIdAndUpdate(id, updateFields);

  } catch (error) {
    console.log("Error Updating " + error);
    throw new Error("Failed To Update Weight " + error);
  }

  // Revalidate the path and redirect
  revalidatePath("/dashboard");
  redirect("/dashboard");
};
