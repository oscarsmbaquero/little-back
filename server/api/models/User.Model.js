import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  user: String,
  mail: String,
  password: String,
  idUsuario: Number,
  tienda: String,
  dia: String,
  entrada: {
    hora: String,
    lat: Number,
    lng: Number
  },
  salida: {
    hora: String,
    lat: Number,
    lng: Number
  }
});

const User = mongoose.model('User',userSchema );

export { User }