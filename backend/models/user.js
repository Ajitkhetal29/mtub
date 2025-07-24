import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  contact: { type: String, required: true },
  website: { type: String, required: true },
  profileImage: { type: String, required: true },
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
