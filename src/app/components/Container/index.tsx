import styled from 'styled-components/macro';

export const Container = styled.div`
  max-width: 100%;
  margin: auto;
  padding: ${p => p.theme.space[3]}px;

  @media (min-width: ${p => p.theme.breakpoints[0]}) {
    max-width: ${p => p.theme.breakpoints[0]};
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    max-width: ${p => p.theme.breakpoints[1]};
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    max-width: ${p => p.theme.breakpoints[2]};
  }

  @media (min-width: ${p => p.theme.breakpoints[3]}) {
    max-width: ${p => p.theme.breakpoints[3]};
  }
`;
