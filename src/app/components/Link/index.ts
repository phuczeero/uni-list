import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';

export const Link = styled(RouterLink)`
  color: ${p => p.theme.colors.primary};
`;
