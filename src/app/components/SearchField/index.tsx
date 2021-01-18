import * as React from 'react';
import styled from 'styled-components/macro';
import { HiOutlineSearch } from 'react-icons/hi';
import { TextField } from '../TextField';

export const SearchField = React.forwardRef((props: any, ref: any) => (
  <Wrapper>
    <SearchIcon />
    <TextField ref={ref} {...props} />
  </Wrapper>
));

const SearchIcon = styled(HiOutlineSearch)`
  position: absolute;
  top: 10px;
  left: 10px;
`;

const Wrapper = styled.div`
  position: relative;

  ${TextField} {
    padding-left: ${p => p.theme.space[4]}px;
  }
`;
