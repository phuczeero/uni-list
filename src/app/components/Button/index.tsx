import styled from 'styled-components/macro';
import { ThemeType } from 'styles/theme';

interface Props {
  variant?: 'primary' | 'outline';
  theme: ThemeType;
}

export const Button = styled.button<any>(
  ({ variant = 'primary', theme }: Props) => ({
    outline: 'none',
    padding: theme.space[2],
    backgroundColor:
      variant === 'outline' ? 'transparent' : theme.colors.primary,
    color: variant === 'outline' ? theme.colors.primary : 'white',
    borderRadius: theme.radii.default,
    border: `2px solid ${theme.colors.primary}`,

    ':hover,:focus': {
      backgroundColor:
        variant === 'outline'
          ? theme.colors.blues.light
          : theme.colors.blues.dark,
      borderColor:
        variant === 'outline' ? theme.colors.primary : theme.colors.blues.dark,
    },
  }),
);
