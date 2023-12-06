import { Persona } from './persona.model';
import { curso } from "./curso.model";

export interface Asigcurso {
    asigid?: number;
    curso?: curso;
    Persona?: Persona;
    
  }