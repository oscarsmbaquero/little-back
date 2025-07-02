import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  id: String,
  mail: String,
  password: String,
  idUsuario: Number,
  tienda: String,
  user: String,
  rol: String
});

const User = mongoose.model("User", userSchema);

export { User };
