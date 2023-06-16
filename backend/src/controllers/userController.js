const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSignUp = async (req, res) => {
  const {username, email, password} = req.body;

  try {
    const existingUser = await userModel.findOne({email: email});
    //existing user check
    if (existingUser) {
      return res.status(400).json({message: "User already exists"});
    }
    //hashed password
    const hashedPassword = await bcrypt.hash(password, 10);
    //user creation
    const result = await userModel.create({
      email: email,
      password: hashedPassword,
      username: username
    });
    //token generation
    const token = jwt.sign(
      {email: result.email, id: result._id},
      `${process.env.JWT_USER_SECRET_KEY}`
    );
    res.status(201).json({user: result, token: token});
  } catch (error) {
    return res.status(500).json({message: "server error"});
  }
  // res.send("signup");
};

const userSignIn = async (req, res) => {
  const {email, password} = req.body;

  try {
    const existingUser = await userModel.findOne({email: email});
    //existing user check
    if (!existingUser) {
      return res.status(404).json({message: "User not found"});
    }

    const matchPassword = await bcrypt.compare(password, existingUser.password);
    if (!matchPassword) {
      return res.status(404).json({message: "Invalid Credentials"});
    }

    const token = jwt.sign(
      {email: existingUser.email, id: existingUser._id},
      `${process.env.JWT_USER_SECRET_KEY}`
    );
    res.status(201).json({user: existingUser, token: token});
  } catch (error) {
    return res.status(500).json({message: "server error"});
  }
};

const adminSignUp = async (req, res) => {
  const {username, email, password} = req.body;

  try {
    const existingAdmin = await userModel.findOne({
      email: email,
      role: "admin"
    });
    // Check if admin exists
    if (existingAdmin) {
      return res.status(400).json({message: "Admin already exists"});
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new admin
    const result = await userModel.create({
      email: email,
      password: hashedPassword,
      username: username,
      role: "admin"
    });

    const token = jwt.sign(
      {email: result.email, id: result._id, role: "admin"},
      `${process.env.JWT_ADMIN_SECRET_KEY}`
    );

    res.status(201).json({admin: result, token: token});
  } catch (error) {
    return res.status(500).json({message: "Server error"});
  }
};

const adminSignIn = async (req, res) => {
  const {email, password} = req.body;

  try {
    const existingAdmin = await userModel.findOne({
      email: email,
      role: "admin"
    });
    // Check if admin exists
    if (!existingAdmin) {
      return res.status(404).json({message: "Admin not found"});
    }

    const matchPassword = await bcrypt.compare(
      password,
      existingAdmin.password
    );
    // Check if password is correct
    if (!matchPassword) {
      return res.status(401).json({message: "Invalid credentials"});
    }

    const token = jwt.sign(
      {email: existingAdmin.email, id: existingAdmin._id, role: "admin"},
      `${process.env.JWT_ADMIN_SECRET_KEY}`
    );

    res.status(200).json({admin: existingAdmin, token: token});
  } catch (error) {
    return res.status(500).json({message: "Server error"});
  }
};

module.exports = {userSignUp, userSignIn, adminSignUp, adminSignIn};
