'use server'

import { User } from "@/models/User";
import connectDB from "@/lib/db";

export const getUser = async (id: string) => {
    try {
        await connectDB();
        const user = await User.findById(id);
        return user;  // Return the user object directly
    } catch (error) {
        console.log("Error " + error);
        throw new Error("Failed To Get Single User " + error);
    }
};
