import { BanUserStyles } from './styles';
import { Input } from '@/presentation/components/Input/Input';
import { Button } from '@/presentation/components/Button/Button';
import { userServices } from '@/core/services/user';
import { ChangeEvent, useState } from 'react';
import { useBan } from './hooks/useBan';

export const BanUser: React.FC = () => {
  const [cpf, setCpf] = useState('');

  const { banUser } = useBan();

  const handleBanUser = () => {
    banUser(cpf).then(() => {
      setCpf('');
    });
  };

  return (
    <BanUserStyles.Container>
      <BanUserStyles.Title>Banir usuário</BanUserStyles.Title>

      <BanUserStyles.InputsContainer>
        <Input
          placeholder="CPF"
          value={cpf}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setCpf(e.target.value);
          }}
        />
        <Button.Primary onClick={handleBanUser}>Banir</Button.Primary>
      </BanUserStyles.InputsContainer>
    </BanUserStyles.Container>
  );
};
