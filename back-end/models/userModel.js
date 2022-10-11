const mongoose = require('mongoose');

const usersScheme = new mongoose.Schema(
  {
    name: { type: String, required: [true, "nameIsRequired"], trim: true },
    email: { type: String, required: [true, "nameIsRequired"],unique:true, trim: true },
    password: { type: String, required: [true,"nameIsRequired"], trim: true,unique:true}
  },
  { timestamps: true }
);

export const userModel = mongoose.model("User",usersScheme)