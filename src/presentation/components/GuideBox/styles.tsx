import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem 0;
  border-radius: 0.75rem;
  transition: box-shadow 0.2s ease-in;
  width: 18rem;

  @media (max-width: 495px) {
    width: 18rem;
  }
`;

const Content = styled.div`
  width: 100%;

  > img {
    width: 100%;
    height: auto;
    max-height: 18rem;
    border-radius: 0.75rem;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.25rem;
  margin-top: 0.5rem;

  > span {
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.neutral['dark-gray']};
    margin-bottom: 0.5rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.25rem;

    > p {
      font-size: 0.75rem;
      color: ${({ theme }) => theme.colors.neutral['dark-gray']};
    }

    > h1 {
      font-size: 1rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.primary['900']};
    }

    > small {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;
      font-size: 0.75rem;
      color: ${({ theme }) => theme.colors.primary['01']};
      font-weight: 700;

      > img {
        margin-top: -0.075rem;
      }
    }
  }
`;

export const GuideBoxContainer = {
  Container,
  Content,
  Description,
};
