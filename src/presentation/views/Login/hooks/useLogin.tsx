import { useState } from 'react';
import { useUserDataState } from '@/core/recoil/states/user';
import { userServices } from '@/core/services/user';
import { useRouter } from 'next/navigation';
import { useToast } from '@/core/hooks/useToast';

export const useLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const router = useRouter();
  const { toast } = useToast();
  const { setUserData, defaultUserData } = useUserDataState();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const data = await userServices.login(formData);
      if (data.deleted_at !== null) {
        return toast({
          title: 'Usuário banido',
          type: 'error',
        });
      }

      setUserData(data);

      console.log('userData', data);
      router.push('/');
    } catch (error) {
      console.log('errorToSend', error);
      toast({
        title: 'Erro ao fazer login, dados incorretos',
        type: 'error',
      });
      return;
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleLogout = () => {
    setUserData(defaultUserData);
    localStorage.removeItem('userData');
    router.push('/');
  };

  return {
    formData,
    handleSubmit,
    handleInputChange,
    handleLogout,
  };
};
