'use client';

import styled from '@emotion/styled';

export interface IButtonProps {
  $width?: string;
  $height?: string;
  $fontSize?: string;
  children: React.ReactNode;
  onClick?: (() => void) | ((e: React.MouseEvent<HTMLButtonElement>) => void);
}

const Primary = styled.button<IButtonProps>`
  color: ${({ theme }) => theme.colors?.neutral['white']};
  font-size: ${({ $fontSize }) => $fontSize || '1rem'};
  font-style: normal;
  font-weight: 700;
  white-space: nowrap;
  display: flex;
  width: ${({ $width }) => $width || '11.75rem'};
  height: ${({ $height }) => $height || '2.75rem'};
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors?.primary['01']};
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;

  &:hover {
    filter: brightness(1.03);
  }

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;

const Secondary = styled.button<IButtonProps>`
  color: ${({ theme }) => theme.colors?.primary['01']};
  font-size: ${({ $fontSize }) => $fontSize || '1rem'};
  font-style: normal;
  font-weight: 700;
  white-space: nowrap;
  display: flex;
  width: ${({ $width }) => $width || '11.75rem'};
  height: ${({ $height }) => $height || '2.75rem'};
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  background: transparent;
  cursor: pointer;
  border: 3px solid ${({ theme }) => theme.colors?.primary['01']};
  transition: all 0.2s ease;

  &:hover {
    filter: brightness(1.03);
  }

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;

const Tertiary = styled.button<IButtonProps>`
  color: ${({ theme }) => theme.colors?.neutral['white']};
  font-size: ${({ $fontSize }) => $fontSize || '1rem'};
  font-style: normal;
  font-weight: 700;
  white-space: nowrap;
  display: flex;
  width: ${({ $width }) => $width || '11.75rem'};
  height: ${({ $height }) => $height || '2.75rem'};
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors?.secondary['blue']};
  border: 0.1rem solid ${({ theme }) => theme.colors?.primary['01']};
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;

  &:hover {
    filter: brightness(1.03);
  }

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;

export const ButtonStyles = {
  Primary,
  Secondary,
  Tertiary,
};
