import { Fichajes } from "../models/Fichaje.Model.js";
//import { User } from "../models/User.Model";

const createFichaje = async (req, res) => {
  try {
    const { idUsuario, dia, entrada, salida } = req.body;
    const newFichaje = new Fichajes({ idUsuario, dia, entrada, salida });
    await newFichaje.save();
    res.status(201).json(newFichaje);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getFichajesByUser = async (req, res) => {
  try {
    const { idUsuario } = req.params;
    let fichajes = await Fichajes.find({ idUsuario: idUsuario });
    res.status(200).json(fichajes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createFichaje, getFichajesByUser };