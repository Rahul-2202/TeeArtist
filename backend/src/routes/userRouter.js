const express = require("express");
const {
  userSignUp,
  userSignIn,
  adminSignUp,
  adminSignIn
} = require("../controllers/userController");
const userRouter = express.Router();

userRouter.post("/signUp", userSignUp);
userRouter.post("/signIn", userSignIn);
userRouter.post("/signUp/admin", adminSignUp);
userRouter.post("/signIn/admin", adminSignIn);

module.exports = userRouter;
