import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LogoNavLink = styled(NavLink)`
  z-index: 10;
`;

export const LogoText = styled.p`
  font-family: ${({ theme }) => theme.fonts.logo};
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  letter-spacing: 0.07em;
  color: ${({ theme }) => theme.palette.primary};
  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    margin-right: 80px;
  }
`;

export const LogoAccent = styled.span`
  color: ${({ theme }) => theme.palette.accent};
`;
