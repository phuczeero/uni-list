import styled from 'styled-components/macro';
import { ThemeType } from 'styles/theme';

export const TextField = styled.input(({ theme }: { theme: ThemeType }) => ({
  outline: 'none',
  padding: theme.space[2],
  borderRadius: theme.radii.default,
  border: `2px solid ${theme.colors.muted}`,
}));
