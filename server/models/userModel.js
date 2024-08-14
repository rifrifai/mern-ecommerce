// mongoose => schema
import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  }, // String is shorthand for {type: String}
  email: {
    type: String,
    required: [true, "Please add an email"],
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
  },
});

const User = mongoose.model("User", userSchema);
export default User;
