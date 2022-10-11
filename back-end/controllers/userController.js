import { userModel } from "../models/userModel";
export const userController = {
  createNewUser: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const newUser = new userModel({ name, email, password });
      await newUser.save();
      res.status(200).json({msg:"User successfully created"})
    } catch (error) {
        return res.status(500).json({msg:error.message})
    }
  },
  login: async (req, res) => {
    try {
    } catch (error) {}
  },
  logout: async (req, res) => {
    try {
    } catch (error) {}
  },
};