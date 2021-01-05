const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
dotenv.config();

module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token)
    return res.status(401).send({ error: "Access denied. No token provided." });

  try {
    const payload = jwt.verify(token, process.env.PRIVATE_KEY);
    req.user = payload;
    next();
  } catch (err) {
    res.status(400).send({ error: "Invalid token." });
  }
};
