export interface UserData {
  cpf: string;
  name: string;
  email: string;
  phone: string;
  isLogged: boolean;
  user_type_id: number;
  deleted_at: string | null;
}

export interface UserLoginData {
  email: string;
  password: string;
}

export interface UserSignUpData {
  cpf: string;
  name: string;
  email: string;
  phone: string;
  password: string;
}

export interface UserUpdateData {
  cpf: string;
  name?: string | null;
  email?: string | null;
  password?: string | null;
  phone?: string | null;
  type?: number | null;
}

export interface UserDeleteData {
  cpf: string;
}
