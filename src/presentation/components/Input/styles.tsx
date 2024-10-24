import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import { roboto } from '@/configs/styles/globalStyles';

interface IInputStyleProps {
  $width?: string;
  $height?: string;
  $fontSize?: string;
  $color?: string;
  $borderColor?: string;
  $borderRadius?: string;
  $padding?: string;
}

const Container = styled.div<IInputStyleProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 0.25rem;

  > span {
    color: ${({ theme }) => theme.colors.secondary['red']};
    font-size: 0.75rem;
  }
`;

const Input = styled(TextField)<IInputStyleProps>`
  width: ${({ $width }) => $width || '100%'};
  padding: ${({ $padding }) => $padding};
  height: ${({ $height }) => $height};
  font-size: ${({ $fontSize }) => $fontSize || '1rem'};
  color: ${({ $color, theme }) => $color || theme.colors.secondary['blue']};
  border-radius: ${({ $borderRadius }) => $borderRadius || '0.75rem'};
  font-family: ${roboto};

  &:focus,
  &:active {
    outline: ${({ theme }) => theme.colors.secondary['blue']};
  }
`;

export const InputStyles = {
  Container,
  Input,
};
