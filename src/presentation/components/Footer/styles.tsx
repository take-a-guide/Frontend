import styled from '@emotion/styled';

const Container = styled.div`
  background: ${({ theme }) => theme.colors.neutral['white']};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  height: 12rem;
  box-shadow: -2px -2px 2px -1px rgba(206, 206, 206, 0.75);
`;

const Content = styled.div`
  max-width: 1248px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    gap: 1.5rem;
    color: ${({ theme }) => theme.colors.secondary['blue']};
  }
`;

export const FooterStyles = {
  Container,
  Content,
};
