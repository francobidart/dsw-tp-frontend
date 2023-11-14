export class User {
  id: number = 0;
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  usuario: string = '';
  clave?: string | null;
  telefono: string = '';
  isAdmin: boolean = false;
  createdAt?: string;
  updatedAt?: string;
  active: boolean = true;
}
