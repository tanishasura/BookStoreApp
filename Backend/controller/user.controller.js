import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists!" });
    }
    const hashPassword = bcryptjs.hashSync(password, 10);
    const newUser = await new User({
      name,
      email,
      password: hashPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user:{
        _id:newUser._id,
        name:newUser.name,
        email:newUser.email
      }
    });
  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).json({ message: "Internal Server error!" });
  }
};




export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    
    const validPassword = bcryptjs.compareSync(password, user.password);
    
    if (!validPassword) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    res.status(200).json({
      success: true,
      message: "Login Successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).json({ message: "Internal Server error!" });
  }
};

