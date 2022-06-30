import styled from 'styled-components';
import { breakpoints } from '../../lib/style/theme';

export const Grid = styled.div`
  display: grid;
  justify-items: center;
  justify-content: end;
  grid-template-columns: 1fr;
  grid-gap: 32px;

  @media (${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
  }

  @media (${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 992px;
  }
`;

export const GridContent = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;
