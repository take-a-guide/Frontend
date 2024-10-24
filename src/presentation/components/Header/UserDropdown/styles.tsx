import styled from '@emotion/styled';

const GeneralContainer = styled.div`
  position: relative;
  width: 10rem;
`;

const ButtonContainer = styled.div<{ $isOpen: boolean | undefined }>`
  position: relative;
  display: flex;
  width: 5rem;
  height: 3rem;
  padding: 0.125rem 0.5rem;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0.75rem;
  background: ${({ theme }) => theme.colors.primary['01']};
  border: 3px solid ${({ theme }) => theme.colors.primary['01']};
  transition: all 0.2s ease;

  > div {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  }

  > span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;

    svg {
      &:nth-of-type(2) {
        transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'unset')};
      }
    }
  }

  &:hover {
    cursor: pointer;
  }
`;

const OptionsContainer = styled.div<{ $isOpen: boolean | undefined }>`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  position: absolute;
  padding: 0.75rem 0.75rem;
  height: fit-content;
  min-width: 11rem;
  color: ${({ theme }) => theme.colors.neutral['white']};
  top: 3.25rem;
  left: 0;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.neutral['white']};
  border: 1px solid ${({ theme }) => theme.colors.neutral['gray-1']};
  color: ${({ theme }) => theme.colors.secondary['blue']};

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    z-index: 100000000;
    gap: 0.5rem;

    > a {
      width: 100%;
      font-size: 0.875rem;
      font-weight: 500;
      padding: 0.25rem 0;
      color: ${({ theme }) => theme.colors.secondary['blue']};
      border-bottom: 1px solid ${({ theme }) => theme.colors.neutral['gray-1']};
      transition: color 0.2s ease;

      &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.primary['01']};
      }
    }

    > h1 {
      color: ${({ theme }) => theme.colors.secondary['blue']};
      font-size: 0.9275rem;
      white-space: nowrap;
      font-style: normal;
      font-weight: 700;
      line-height: 1.25rem;
      margin-bottom: 0.5rem;
    }

    > div {
      > button {
        background: ${({ theme }) => theme.colors.secondary['red']};
      }
    }
  }
`;

export const UserDropdownStyles = {
  GeneralContainer,
  ButtonContainer,
  OptionsContainer,
};
