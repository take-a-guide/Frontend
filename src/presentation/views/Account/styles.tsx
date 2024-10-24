import styled from '@emotion/styled';

const Title = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.2rem;

  h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.secondary['blue']};
  }

  h2 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.secondary['blue']};

    > button {
      width: fit-content;
      height: 2.5rem;
      padding: 0rem 1rem;
    }
  }

  > span {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.neutral['gray-3']};
  }
`;

export const AccountStyles = {
  Title,
};
