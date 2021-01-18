import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export function Logo() {
  return (
    <Link to="/">
      <Img
        alt="Logo"
        src="https://logoipsum.com/logo/logo-12.svg"
        height={64}
      />
    </Link>
  );
}

const Img = styled.img`
  vertical-align: middle;
`;
