const jwt = require("jsonwebtoken");
const authorizeUser = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (token) {
      token = token.split(" ")[1];
      try {
        const decodedToken = jwt.verify(
          token,
          `${process.env.JWT_ADMIN_SECRET_KEY}`
        );
        if (decodedToken.role === "admin") {
          req.adminId = decodedToken.id;
          req.userId = decodedToken.id;
          next();
        }
      } catch (adminErr) {
        try {
          const decodedToken = jwt.verify(
            token,
            `${process.env.JWT_USER_SECRET_KEY}`
          );
          req.userId = decodedToken.id;
          next();
        } catch (userErr) {
          console.log(userErr);
          res.status(401).json({message: "Unauthorized user"});
        }
      }
    } else {
      res.status(401).json({message: "Unauthorized user"});
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({message: "Unauthorized user"});
  }
};
const authorizeAdmin = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (token) {
      token = token.split(" ")[1];
      const decodedToken = jwt.verify(
        token,
        `${process.env.JWT_ADMIN_SECRET_KEY}`
      );
      if (decodedToken.role === "admin") {
        req.adminId = decodedToken.id;
        req.userId = decodedToken.id;
        next();
      } else {
        res.status(401).json({message: "Unauthorized admin"});
      }
    } else {
      res.status(401).json({message: "Unauthorized admin"});
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({message: "Unauthorized admin"});
  }
};

module.exports = {authorizeUser, authorizeAdmin};
