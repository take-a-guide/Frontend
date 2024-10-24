'use client';

import { ChangeUserDataStyles } from './styles';
import { Input } from '@/presentation/components/Input/Input';
import { Button } from '@/presentation/components/Button/Button';
import { useUserDataState } from '@/core/recoil/states/user';
import { useChangeUserData } from './hooks/useChangeUserData';
import { ChangeEvent } from 'react';

export const ChangeUserData: React.FC = () => {
  const { userData } = useUserDataState();
  const {
    handleInputChange,
    handleSubmit,
    isFirstStep,
    handleFirstStepValidation,
    handlePasswordForFirstStep,
  } = useChangeUserData();

  const buttonText = isFirstStep ? 'Continuar' : 'Salvar';

  return (
    <ChangeUserDataStyles.Container>
      <ChangeUserDataStyles.Title>Alterar dados</ChangeUserDataStyles.Title>

      <ChangeUserDataStyles.InputsContainer>
        {isFirstStep ? (
          <Input
            placeholder="Digite sua senha para alterar seus dados"
            name="passwordForFirstStep"
            type="password"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handlePasswordForFirstStep(e)
            }
          />
        ) : (
          <>
            <Input
              placeholder={userData.name}
              name="name"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleInputChange(e)
              }
            />
            <Input
              placeholder={userData.email}
              type="email"
              name="email"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleInputChange(e)
              }
            />
            <Input
              placeholder={userData.phone}
              name="phone"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleInputChange(e)
              }
            />
            <Input
              placeholder="********"
              name="password"
              type="password"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleInputChange(e)
              }
            />
          </>
        )}

        <Button.Primary
          onClick={
            isFirstStep
              ? () => handleFirstStepValidation()
              : () => handleSubmit()
          }
        >
          {buttonText}
        </Button.Primary>
      </ChangeUserDataStyles.InputsContainer>
    </ChangeUserDataStyles.Container>
  );
};
