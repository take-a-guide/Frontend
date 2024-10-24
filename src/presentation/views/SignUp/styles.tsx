import styled from '@emotion/styled';
import Image from 'next/image';
import { Grid } from '@mui/material';

const GridContainer = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 3rem;
  background: ${({ theme }) => theme.colors.neutral['white']};
  border-radius: 0.75rem;
  border: 2px solid ${({ theme }) => theme.colors.neutral['gray-1']};
  height: 40rem;
  width: 30rem;

  @media (max-width: 768px) {
    background: transparent;
    border: none;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.secondary['blue']};
  text-align: center;
  margin: 0 0 0 0;
  line-height: 2rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const TagLogo = styled(Image)`
  width: 7rem;
  height: auto;
  object-fit: contain;
`;

const LogoContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Back = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0 0.25rem;
  font-size: 1rem;
  font-weight: 700;
  margin: -0.25rem 0 0.25rem 0;
  color: ${({ theme }) => theme.colors.primary['01']};
  cursor: pointer;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 1rem 0 2rem 0;
  gap: 0.75rem;
`;

const NameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const CheckBoxContainer = styled.div`
  margin: 1rem 0 0 -1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  > div {
    border: none;
    outline: none;
    width: 1.5rem;
    cursor: pointer !important;
  }
`;

export const SignUpStyles = {
  GridContainer,
  Title,
  LogoContainer,
  TagLogo,
  Back,
  Box,
  InputContainer,
  NameContainer,
  CheckBoxContainer,
};
