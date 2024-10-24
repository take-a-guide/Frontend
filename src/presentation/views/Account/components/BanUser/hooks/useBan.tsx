import { useToast } from '@/core/hooks/useToast';
import { userServices } from '@/core/services/user';

export const useBan = () => {
  const { toast } = useToast();

  const banUser = async (cpf: string) => {
    if (!cpf) {
      toast({
        title: 'CPF inválido',
        type: 'warning',
      });
      return;
    }

    try {
      await userServices.del(cpf);
      toast({
        title: 'Usuário banido com sucesso',
        type: 'success',
      });
    } catch (error) {
      toast({
        title: 'Erro ao banir usuário',
        type: 'error',
      });
    }

    return;
  };

  return {
    banUser,
  };
};
