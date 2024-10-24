import { useUserDataState } from '@/core/recoil/states/user';
import { ChangeEvent, useState } from 'react';
import { userServices } from '@/core/services/user';
import { useToast } from '@/core/hooks/useToast';

interface ChangeUserData {
  cpf: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  password: string | null;
}

export const useChangeUserData = () => {
  const { userData, setUserData } = useUserDataState();
  const { toast } = useToast();
  const [isFirstStep, setIsFirstStep] = useState(true);
  const [firstStepPassword, setFirstStepPassword] = useState<string>('');

  const [dataToBeSent, setDataToBeSent] = useState<ChangeUserData>({
    cpf: userData.cpf,
    name: null,
    email: null,
    phone: null,
    password: null,
  });

  const handlePasswordForFirstStep = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstStepPassword(e.target.value);
  };

  const handleFirstStepValidation = async () => {
    try {
      await userServices.login({
        email: userData.email,
        password: firstStepPassword,
      });
      setIsFirstStep(false);
    } catch (error) {
      toast({
        title: 'Senha inválida',
        type: 'error',
      });

      return;
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setDataToBeSent(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await userServices.update(dataToBeSent);

      const loginData = {
        email:
          dataToBeSent.email !== null ? dataToBeSent.email : userData.email,
        password:
          dataToBeSent.password !== null
            ? dataToBeSent.password
            : firstStepPassword,
      };

      const updatedUserData = await userServices.login(loginData);
      setUserData(updatedUserData);

      toast({
        title: 'Dados alterados com sucesso',
        type: 'success',
      });
    } catch (error) {
      toast({
        title: 'Erro ao alterar dados',
        type: 'error',
      });
      return;
    }
  };

  return {
    handleInputChange,
    handleSubmit,

    isFirstStep,
    handleFirstStepValidation,
    handlePasswordForFirstStep,
  };
};
