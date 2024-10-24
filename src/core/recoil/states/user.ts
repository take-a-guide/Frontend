import { atom, useRecoilState } from 'recoil';
import { UserData } from '@/core/interfaces/user';

const saveUserDataToLocalStorage = (userData: UserData) => {
  localStorage.setItem('userData', JSON.stringify(userData));
};

const defaultUserData: UserData = {
  cpf: '',
  name: '',
  email: '',
  phone: '',
  user_type_id: 1,
  isLogged: false,
  deleted_at: null,
};

const loadUserDataFromLocalStorage = (): UserData => {
  const storedData = localStorage.getItem('userData');
  return storedData ? JSON.parse(storedData) : defaultUserData;
};

const userAtom = atom<UserData>({
  key: 'user',
  default: loadUserDataFromLocalStorage(),
});

export const useUserDataState = () => {
  const [userData, setUserData] = useRecoilState(userAtom);

  const setPersistedUserData = (newUserData: UserData) => {
    setUserData(newUserData);
    saveUserDataToLocalStorage(newUserData);
  };

  return { defaultUserData, userData, setUserData: setPersistedUserData };
};
