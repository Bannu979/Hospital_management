import jwt from 'jsonwebtoken'

const authDoctor = async (req, res, next) => {
    try {
        const tokenHeader = req.headers.authorization; // ✅ Extract from headers
        if (!tokenHeader || !tokenHeader.startsWith("Bearer ")) {
            return res.json({ success: false, message: "Not authorized, login again" });
        }

        const dToken = tokenHeader.split(" ")[1]; // ✅ Extract actual token
        const token_decode = jwt.verify(dToken, process.env.JWT_SECRET);

        req.body.docId = token_decode.id; // ✅ Attach decoded doctor ID
        next();
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Invalid token or expired session" });
    }
};

export default authDoctor;
