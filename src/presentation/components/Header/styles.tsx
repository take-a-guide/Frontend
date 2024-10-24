import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

interface IHeaderProps {
  $isHamburgerOpen: boolean;
}

const Container = styled.div`
  position: relative;
  z-index: 1000;
  background: ${({ theme }) => theme.colors.neutral['white']};
  box-shadow: -1px 2px 2px -1px rgba(206, 206, 206, 0.75);
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1248px;
  padding: 0 1rem;
  height: 5rem;
  margin: 0 auto;

  @media (max-width: 899px) {
    padding: 0;
  }
`;

const TagLogo = styled(Image)`
  width: 6.5rem;
  height: auto;
  object-fit: contain;

  @media (max-width: 899px) {
    padding-left: 1rem;
  }
`;

const ItemsContainer = styled.div<IHeaderProps>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.5rem;
  width: 100%;

  @media (max-width: 899px) {
    display: ${({ $isHamburgerOpen }) => ($isHamburgerOpen ? 'flex' : 'none')};
    position: absolute;
    top: 5rem;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem 1rem;
    height: auto;
    background: ${({ theme }) => theme.colors.neutral['white']};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const Item = styled(Link)`
  color: ${({ theme }) => theme.colors.secondary['blue']};
  font-weight: 500;
  font-size: 0.875rem;
  transition: color 0.2s ease;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary['01']};
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-left: 1rem;

  @media (max-width: 899px) {
    margin-left: unset;
  }
`;

const HamburgerContainer = styled.div`
  > svg {
    display: none;
    position: absolute;
    top: 2rem;
    right: 1rem;

    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 899px) {
    > svg {
      display: block;
    }
  }
`;

export const HeaderStyles = {
  Container,
  TagLogo,
  Content,
  ItemsContainer,
  Item,
  HamburgerContainer,
  ButtonsContainer,
};
