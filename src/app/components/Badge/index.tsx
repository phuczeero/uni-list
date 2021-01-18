import styled from 'styled-components/macro';

export const Badge = styled.div(({ theme }) => ({
  padding: theme.space[1],
  backgroundColor: theme.colors.primary,
  color: 'white',
  fontSize: theme.fontSizes[0],
  borderRadius: theme.radii.circle,
  display: 'inline-block',
  minWidth: 64,
  textAlign: 'center',
}));
