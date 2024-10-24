import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  border-radius: 0.75rem;
  background: ${({ theme }) => theme.colors.neutral['white']};
  border: 1px solid ${({ theme }) => theme.colors.neutral['gray-2']};
  max-width: 30rem;
  padding: 2rem;
  min-height: 35rem;
  box-shadow: -1px 2px 2px -1px rgba(206, 206, 206, 0.75);

  @media (max-width: 899px) {
    max-width: unset;
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 1.75rem;
  color: ${({ theme }) => theme.colors.secondary['blue']};
`;

const InputsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  gap: 1rem;

  > button {
    background: ${({ theme }) => theme.colors.secondary['green']};
    width: 100%;
  }
`;

export const ChangeUserDataStyles = {
  Container,
  Title,
  InputsContainer,
};
