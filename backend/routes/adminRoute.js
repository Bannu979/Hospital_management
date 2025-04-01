import express from "express";
import upload from "../middleware/multer.js"; // Ensure the correct path
import { addDoctor,allDoctors,loginAdmin, appointmentsAdmin,appointmentCancel, adminDashboard  } from "../controller/adminController.js";
import authAdmin from "../middleware/authAdmin.js";
import { changeAvailability } from "../controller/doctorController.js";

const router = express.Router();

// Ensure "imageFile" matches the key name in Postman
router.post("/add-doctor", authAdmin,upload.single("image"), addDoctor);
router.post("/login", loginAdmin);
router.post("/all-doctors",authAdmin, allDoctors);
router.post("/change-availability",authAdmin, changeAvailability);
router.get("/appointments",authAdmin,appointmentsAdmin)
router.post("/cancel-appointment",authAdmin,appointmentCancel)
router.get("/dashboard",authAdmin,adminDashboard)


export default router;
