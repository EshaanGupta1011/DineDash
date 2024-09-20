import userModel from "../models/usermodel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// login user

const loginUser = async (req, res) => {};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// register user

const registerUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    // checking user existence
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "Account already exists" });
    }

    // validating email and password

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Invalid email id" });
    }

    if (password.length < 8) {
      return res.json({ success: false, message: "Enter a strong password" });
    }

    // hashing user password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save();
  } catch (error) {}
};

export { loginUser, registerUser };
