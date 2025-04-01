import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "uploads/"); // Ensure the "uploads" directory exists
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname); // Saves file with its original name
    }
});

const upload = multer({ storage });

export default upload;



