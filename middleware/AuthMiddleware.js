import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export const verifytoken = (req, res, next) => {
  const authHeader =  req.headers["authorization"]

  if(!authHeader) {
    console.log("authorization header not found")
    return res.status(403).json({
      msg: "no token provided",
    })
  }

  const token = authHeader.startsWith("Bearer ")
    ? authHeader.substring(7, authHeader.length)
    : authHeader;

    if(!token) {
      console.log("token not found in header")
      return res.status(403).json({
        msg: "token missing"
      })
    }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "SECRETBEBAS")
    console.log("token decoded", decoded)
    req.user = decoded;
    next();
  } catch (error) {
    console.log("token verification failed", error.message)
    return res.status(401).json({
      msg: "unauthorized or invalid token"
    })
  }
}