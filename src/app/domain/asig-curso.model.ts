import { Usuario } from './usuario.model';
import { curso } from "./curso.model";

export interface Asigcurso {
    id?: string;
    courseId?: curso;
    userId?: Usuario;
    
  }