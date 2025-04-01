import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: "prescpito" // ✅ Set DB name here instead of URI
        });

        console.log("Database Connected Successfully ✅");
    } catch (error) {
        console.error("Database Connection Error ❌:", error.message);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
