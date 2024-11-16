import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, select: false },
  bio: { type: String },
  weight: { type: String },
  public: { type: Boolean, default: false },
  goal: { type: String },
  height: { type: String },
  image: { type: String },
  authProviderId: { type: String },

  fitnessData: {
    steps: { type: Number, default: 0 },  // Total steps for the day
    caloriesBurned: { type: Number, default: 0 },  // Total calories burned for the day
    workouts: [
      {
        type: String, // Type of workout (Cardio, Strength, etc.)
        duration: { type: Number, default: 0 }, // Duration in minutes
        date: { type: Date, default: Date.now },  // Date for the workout
      }
    ],
    date: { type: Date, default: Date.now },  // The date for the fitness data (steps, calories burned, etc.)
  },

  dailyCalories: {
    breakfast: { type: Number, default: 0 },  // Calories consumed at breakfast
    lunch: { type: Number, default: 0 },  // Calories consumed at lunch
    dinner: { type: Number, default: 0 },  // Calories consumed at dinner
    snacks: { type: Number, default: 0 },  // Calories consumed from snacks
    totalCalories: { type: Number, default: 0 },  // Total calories consumed in a day (sum of breakfast, lunch, dinner, and snacks)
    date: { type: Date, default: Date.now },  // The date for the daily calories tracking
  },
});

const User = mongoose.models?.User || mongoose.model("User", userSchema);

export { User };
