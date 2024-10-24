'use client';

import { Container } from './styles';
import { Header } from '@/presentation/components/Header/Header';
import { Footer } from '@/presentation/components/Footer/Footer';

export const LayoutContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const noHeaderAndFooterPaths = ['/login', '/sign-up'];

  return (
    <Container>
      <Header noHeaderPaths={noHeaderAndFooterPaths} />
      {children}
      <Footer noFooterPaths={noHeaderAndFooterPaths} />
    </Container>
  );
};
