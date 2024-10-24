import { api } from '@/configs/rest/api';

import {
  UserData,
  UserLoginData,
  UserSignUpData,
  UserUpdateData,
  UserDeleteData,
} from '@/core/interfaces/user';

const login = async (data: UserLoginData) => {
  const response = await api.post(`/user/login`, data);
  const userData = response.data.user;

  const formattedData: UserData = {
    cpf: userData.cpf,
    email: userData.email,
    name: userData.name,
    phone: userData.phone,
    isLogged: true,
    user_type_id: userData.user_type_id,
    deleted_at: userData.deleted_at,
  };

  return formattedData;
};

const signUp = async (data: UserSignUpData) => {
  const response = await api.post(`/user/create`, data);
  return response;
};

const update = async (data: UserUpdateData) => {
  return await api.put(`/user/change`, data);
};

const del = async (data: String) => {
  return await api.delete(`/user/remove`, { data: { cpf: data } });
};

export const userServices = {
  login,
  signUp,
  update,
  del,
};
