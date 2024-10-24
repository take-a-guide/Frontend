import styled from '@emotion/styled';
import { roboto } from '@/configs/styles/globalStyles';

const Container = styled.div`
  width: 100vw;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: ${roboto};
`;

export const HomeStyles = {
  Container,
};
