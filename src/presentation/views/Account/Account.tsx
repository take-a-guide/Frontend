'use client';

import { AccountStyles } from './styles';
import { Grid } from '@mui/material';
import { ChangeUserData } from './components/ChangeUserData/ChangeUserData';
import { BanUser } from './components/BanUser/BanUser';
import { useUserDataState } from '@/core/recoil/states/user';
import { Button } from '@/presentation/components/Button/Button';

export const Account: React.FC = () => {
  const { userData } = useUserDataState();
  const welcomeMessage = `👋 Olá, ${userData.name}! `;

  const getUserTypeText = () => {
    switch (userData.user_type_id) {
      case 2:
        return ' Guia';
      case 3:
        return 'Admin';
      default:
        return 'Contratante';
    }
  };

  const userTypeText = getUserTypeText();

  return (
    <Grid
      container
      padding="3rem 0"
      justifyContent="center"
      flexDirection="column"
    >
      <Grid
        item
        justifyContent="center"
        textAlign="center"
        xs={12}
        padding="2rem 0"
      >
        <AccountStyles.Title>
          <h1>{welcomeMessage}</h1>
          <h2>
            Obrigado por ser nosso{' '}
            <Button.Tertiary>{userTypeText}</Button.Tertiary>
          </h2>
        </AccountStyles.Title>
      </Grid>

      <Grid container padding="2rem 0" justifyContent="center" gap={4}>
        <Grid item md={4.5} xs={12}>
          <ChangeUserData />
        </Grid>

        {userData.user_type_id === 3 && (
          <Grid item md={4.5} xs={12}>
            <BanUser />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};
