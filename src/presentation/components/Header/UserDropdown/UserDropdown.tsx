import React from 'react';

import Link from 'next/link';
import { Button } from '@/presentation/components/Button/Button';

import { Profile } from '@/presentation/assets/Profile';
import { ArrowDown } from '@/presentation/assets/ArrowDown';
import { UserDropdownStyles } from './styles';
import { useLogin } from '@/presentation/views/Login/hooks/useLogin';

interface IUserDropdownProps {
  $ref: React.RefObject<HTMLDivElement>;
  $isOpen?: boolean | undefined;
  onClick: () => void;
  $userName: string;
}

export const UserDropdown: React.FC<IUserDropdownProps> = ({
  $isOpen,
  $ref,
  onClick,
  $userName,
}) => {
  const { handleLogout } = useLogin();
  const welcomeMessage = `Olá, ${$userName}`;

  return (
    <UserDropdownStyles.GeneralContainer ref={$ref}>
      <UserDropdownStyles.ButtonContainer $isOpen={$isOpen} onClick={onClick}>
        <span>
          <Profile />

          <ArrowDown />
        </span>
      </UserDropdownStyles.ButtonContainer>
      <UserDropdownStyles.OptionsContainer $isOpen={$isOpen}>
        <div>
          <h1>{welcomeMessage}</h1>

          <Link href="/account">Conta</Link>
          <Link href="profile">Perfil</Link>

          <div>
            <Button.Primary onClick={handleLogout}>Sair</Button.Primary>
          </div>
        </div>
      </UserDropdownStyles.OptionsContainer>
    </UserDropdownStyles.GeneralContainer>
  );
};
