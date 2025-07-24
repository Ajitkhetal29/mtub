import userModel from "../models/user.js";

const fetchUsers = async (req, res) => {
  console.log("called");
  
  try {
    const users = await userModel.find();
    if (!users) {
      return res
        .status(400)
        .json({ success: false, message: "user could not fetched " });
    }
    res.status(200).json({ success: true, message: "user fetched", users });
  } catch (error) {
    console.log(error);
  }
};

export {fetchUsers}
