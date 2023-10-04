export class User {
  id?: number;
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  usuario: string = '';
  clave?: string | null;
  telefono: string = '';
  isAdmin: boolean = false;
  createdAt?: string;
  updatedAt?: string;
}
