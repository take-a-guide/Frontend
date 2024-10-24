import styled from '@emotion/styled';
import { roboto } from '@/configs/styles/globalStyles';
import Image from 'next/image';

const Container = styled.div`
  width: 100vw;
  height: calc(100dvh - 5rem);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${roboto};
  gap: 0 0.5rem;

  @media (max-width: 899px) {
    padding: 2rem 0;
    height: auto;
  }
`;

const TripCoupleImage = styled(Image)`
  max-width: 550px;
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.secondary['blue']};
  font-size: 1.25rem;
`;

export const HeroStyles = {
  Container,
  TripCoupleImage,
  Title,
};
