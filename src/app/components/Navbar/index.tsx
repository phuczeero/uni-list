import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { useLocation } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';

import { Link } from 'app/components/Link';
import { Logo } from './Logo';
import { Button } from '../Button';

export function Navbar(props: any) {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setVisible(false);
  }, [location]);

  return (
    <Wrapper>
      <Logo />
      <NavButton variant="outline" onClick={() => setVisible(!visible)}>
        <HiMenu size={32} />
      </NavButton>

      <MenuWrapper visible={visible}>
        <NavLink to="/">Home page</NavLink>
        <NavLink to="/favorite">My favorite</NavLink>
        <NavLink to="/about">About</NavLink>
      </MenuWrapper>
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

const NavButton = styled(Button)`
  border-color: ${p => p.theme.colors.muted};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    display: none;
  }
`;

const MenuWrapper = styled.div<{ visible: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  right: 0;
  top: ${p => p.theme.sizes.navbar}px;
  background-color: white;
  padding: 8px;
  box-shadow: ${p => p.theme.shadows.card};
  visibility: ${p => (p.visible ? 'visible' : 'hidden')};

  ${NavLink} {
    padding: 8px 16px;
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    position: static;
    flex-direction: row;
    visibility: visible;
    box-shadow: none;
  }
`;
