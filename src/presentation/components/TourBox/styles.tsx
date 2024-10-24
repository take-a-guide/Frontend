import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 0.75rem;
  background: ${({ theme }) => theme.colors.neutral['white']};
  overflow: hidden;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.neutral['gray-2']};
  box-shadow: -1px 2px 2px -1px rgba(206, 206, 206, 0.75);

  img {
    max-width: 15rem;
    width: 100%;
    height: 9rem;
    z-index: 3;
  }

  &:hover {
    cursor: pointer;
    ${({ theme }) => theme.colors.neutral['gray-3']};
  }

  @media (max-width: 899px) {
    flex-direction: column;
    padding: 0;
    border-radius: 0.75rem;

    > img {
      max-width: 100%;
      width: 100%;
      height: 12rem;
      object-fit: cover;
    }
  }
`;

const RightSide = styled.div`
  padding: 1rem 1rem 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  > span {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondary['blue']};
    gap: 1rem;

    > p {
      color: #6b6b6b;
      font-size: 0.75rem;
      font-weight: 400;
      line-height: 1rem;
      text-transform: none;
    }
  }

  @media (max-width: 899px) {
    padding: 1rem;
  }
`;

export const TourBoxStyles = {
  Container,
  RightSide,
};
