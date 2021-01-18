import React from 'react';
import styled from 'styled-components/macro';

import { Link } from 'app/components/Link';
import { Logo } from './Logo';

export function Navbar(props: any) {
  return (
    <Wrapper>
      <Logo />
      <div>
        <NavLink to="/">Home page</NavLink>
        <NavLink to="/">My favorite</NavLink>
        <NavLink to="/">About</NavLink>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div(({ theme }) => ({
  paddingLeft: theme.space[3],
  paddingRight: theme.space[3],
  borderBottom: `1px solid ${theme.colors.muted}`,
  top: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: theme.sizes.navbar,
}));

const NavLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: ${p => p.theme.colors.text};

  &:not(:last-child) {
    margin-right: ${p => p.theme.space[3]}px;
  }

  &:hover {
    color: ${p => p.theme.colors.primary};
  }
`;
