'use client';

import { useState } from 'react';

import { Box, Grid } from '@mui/material';
import Link from 'next/link';

import { Button } from '@/presentation/components/Button/Button';
import { SignUpStyles } from '@/presentation/views/SignUp/styles';
import tagLogoOrange from '@/presentation/assets/tag-logo-orange.png';
import { useSignUp } from './hooks/useSignUp';
import { Input } from '@/presentation/components/Input/Input';

export const SignUp: React.FC = () => {
  const {
    formData,
    errors,
    validateField,
    validateIfPasswordMatch,
    handleInputChange,
    handleFirstStep,
    handleSubmit,
    isFirstStep,
  } = useSignUp();

  const [isChecked, setIsChecked] = useState(false);
  const buttonText = isFirstStep ? 'Continuar' : 'Cadastrar';

  return (
    <SignUpStyles.GridContainer>
      <Grid item justifyContent="center">
        <SignUpStyles.Box>
          <SignUpStyles.LogoContainer>
            <SignUpStyles.TagLogo src={tagLogoOrange} alt="Take a Guide Icon" />

            <SignUpStyles.Title>Faça seu cadastro</SignUpStyles.Title>
          </SignUpStyles.LogoContainer>
          <Box sx={{ mt: 1 }} width="100%">
            <SignUpStyles.InputContainer>
              {isFirstStep ? (
                <>
                  <SignUpStyles.NameContainer>
                    <Input
                      placeholder="Nome"
                      onChange={handleInputChange}
                      onBlur={() => validateField({ name: 'name' })}
                      name="name"
                      required
                      errorMessage={errors.name}
                    />
                    <Input
                      placeholder="Sobrenome"
                      onChange={handleInputChange}
                      onBlur={() => validateField({ name: 'lastName' })}
                      name="lastName"
                      required
                      errorMessage={errors.lastName}
                    />
                  </SignUpStyles.NameContainer>

                  <Input
                    placeholder="CPF"
                    onChange={handleInputChange}
                    onBlur={() => validateField({ name: 'cpf' })}
                    name="cpf"
                    required
                    errorMessage={errors.cpf}
                  />
                </>
              ) : (
                <>
                  <Input
                    placeholder="Email"
                    onChange={handleInputChange}
                    onBlur={() => validateField({ name: 'email' })}
                    name="email"
                    required
                    errorMessage={errors.email}
                  />

                  <Input
                    placeholder="Telefone (xx) xxxxx-xxxx"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onBlur={() => validateField({ name: 'phone' })}
                    name="phone"
                    required
                    errorMessage={errors.phone}
                  />
                  <Input
                    placeholder="Senha"
                    onChange={handleInputChange}
                    onBlur={() => validateField({ name: 'password' })}
                    type="password"
                    name="password"
                    required
                    errorMessage={errors.password}
                  />
                  <Input
                    placeholder="Confirmar Senha"
                    onChange={handleInputChange}
                    onBlur={() => validateIfPasswordMatch()}
                    type="password"
                    name="confirmPassword"
                    required
                    errorMessage={errors.confirmPassword}
                  />

                  <SignUpStyles.CheckBoxContainer
                    onClick={() => {
                      setIsChecked(!isChecked);
                      formData.type = isChecked ? 1 : 2;
                    }}
                  >
                    <Input type="checkbox" />

                    <span>Sou um guia</span>
                  </SignUpStyles.CheckBoxContainer>
                </>
              )}
            </SignUpStyles.InputContainer>
            <Grid item xs={12} marginTop={2}>
              <Button.Primary
                $width="100%"
                onClick={() => {
                  isFirstStep ? handleFirstStep() : handleSubmit();
                }}
              >
                {buttonText}
              </Button.Primary>
            </Grid>

            <Grid
              container
              sx={{ justifyContent: 'center', marginTop: '2rem' }}
            >
              <Grid item>
                Já possui uma conta?
                <Link
                  href="/login"
                  style={{
                    textDecoration: 'underline',
                    marginLeft: '0.25rem',
                  }}
                >
                  {'Login'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </SignUpStyles.Box>
      </Grid>
    </SignUpStyles.GridContainer>
  );
};
