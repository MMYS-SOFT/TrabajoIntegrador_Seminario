import { GeneroUser } from "../models/Genero.js";
import { LocalidadModel } from "../models/Localidad.js";
import { NivelStudioModel } from "../models/NivelStudio.js";
import { Preguntas } from "../models/Preguntas.js";
import { OpcionModel } from "../models/Opciones.js";

export const CtrlGenero = async (req, res) => {
  try {
    const Genero = await GeneroUser.create({
      name: "Masculino",
      name: "Femenino",
    });
  } catch (error) {}
};
