import User from "../models/User.js";
import jwt from "jsonwebtoken"


export const authorized = async (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith("Bearer")) {
        return res
          .status(401)
          .json({ isAdmin: false, error: "Unauthorized: No token provided" });
      }
  
      const token = authHeader.split(" ")[1];
  
      const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  
     
      const user = await User.findById(decodedData.id);
      if (!user) {
        return res
          .status(401)
          .json({ isAdmin: false, error: "Unauthorized: User not found" });
      }
  
      // Set the user in the request object
      req.user = user;
  
      // Check if the user is an admin
      if (user.isAdmin) {
        return next()
      } else {
        return res.status(403).json({
          error: "Forbidden: You do not have the required permissions",
        });
      }
    } catch (error) {
      if (
        error.name === "JsonWebTokenError" ||
        error.name === "TokenExpiredError"
      ) {
        return res.status(401).json({
          error: "Unauthorized: Invalid or expired token",
        });
      }
      return res.status(500).json({error: "Server Error" });
    }
  };