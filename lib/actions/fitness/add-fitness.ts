'use server'

import connectDB from "@/lib/db"
import { User } from "@/models/User"
import { redirect } from "next/navigation"

// Modify the function to accept FormData and process it
export const addFitness = async (formData: FormData) => {
    // Extract the data using Object.fromEntries
    const { steps, caloriesBurned } = Object.fromEntries(formData);

    console.log("Form Data - steps:", steps);
    console.log("Form Data - caloriesBurned:", caloriesBurned);

    // Convert steps and caloriesBurned to numbers
    const parsedSteps = parseFloat(steps);
    const parsedCaloriesBurned = parseFloat(caloriesBurned);

    // Debugging logs to check if values are parsed correctly
    console.log("Parsed steps:", parsedSteps);
    console.log("Parsed caloriesBurned:", parsedCaloriesBurned);

    // Validate that steps and caloriesBurned are valid numbers
    if (isNaN(parsedSteps) || isNaN(parsedCaloriesBurned)) {
        console.error("Invalid numbers detected", { steps: parsedSteps, caloriesBurned: parsedCaloriesBurned });
        throw new Error("Invalid input: steps and calories must be valid numbers.");
    }

    try {
        await connectDB();  // Connect to the database

        // Find user by userId
        const userId = formData.get("userId") as string; // Assuming userId is passed as part of the FormData
        const user = await User.findById(userId);
        if (!user) {
            throw new Error("User not found");
        }

        // Update fitness data
        user.fitnessData.steps += parsedSteps;  // Add new steps to existing steps
        user.fitnessData.caloriesBurned += parsedCaloriesBurned;  // Add new calories to existing total calories

        await user.save();  // Save the updated user data

        console.log("Fitness data updated successfully 🏃💪");
    } catch (error) {
        console.log("Error: ", error);
        throw new Error("Something went wrong while updating fitness data.");
    }

    redirect("/dashboard");  // Redirect to the dashboard after successfully adding fitness data
};


// 'use server'

// import connectDB from "@/lib/db"
// import { User } from "@/models/User"
// import { redirect } from "next/navigation"

// // Modify the function to accept FormData and process it
// export const addFitness = async (formData: FormData) => {
//     // Extract the data using Object.fromEntries
//     const { steps, caloriesBurned } = Object.fromEntries(formData);

//     console.log("Form Data - steps:", steps);
//     console.log("Form Data - caloriesBurned:", caloriesBurned);

//     // Convert steps and caloriesBurned to numbers
//     let parsedSteps = parseFloat(steps);
//     let parsedCaloriesBurned = parseFloat(caloriesBurned);

//     // Debugging logs to check if values are parsed correctly
//     console.log("Parsed steps:", parsedSteps);
//     console.log("Parsed caloriesBurned:", parsedCaloriesBurned);

//     // Validate that steps and caloriesBurned are valid numbers
//     if (isNaN(parsedSteps) || isNaN(parsedCaloriesBurned)) {
//         console.error("Invalid numbers detected", { steps: parsedSteps, caloriesBurned: parsedCaloriesBurned });
//         throw new Error("Invalid input: steps and calories must be valid numbers.");
//     }

//     try {
//         await connectDB();  // Connect to the database

//         // Find user by userId
//         const userId = formData.get("userId") as string; // Assuming userId is passed as part of the FormData
//         const user = await User.findById(userId);
//         if (!user) {
//             throw new Error("User not found");
//         }

//         // Update fitness data
//         user.fitnessData.steps += parsedSteps;  // Add new steps to existing steps
//         user.fitnessData.caloriesBurned += parsedCaloriesBurned;  // Add new calories to existing total calories

//         await user.save();  // Save the updated user data

//         console.log("Fitness data updated successfully 🏃💪");
//     } catch (error) {
//         console.log("Error: ", error);
//         throw new Error("Something went wrong while updating fitness data.");
//     }

//     redirect("/dashboard");  // Redirect to the dashboard after successfully adding fitness data
// };
