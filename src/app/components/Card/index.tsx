import * as React from 'react';
import styled from 'styled-components/macro';

export interface CardProps {
  title?: string;
  content: React.ReactNode;
}

export function Card({ title, content, ...props }: CardProps) {
  return (
    <Wrapper {...props}>
      {title && <Title>{title}</Title>}
      <div>{content}</div>
    </Wrapper>
  );
}

const Wrapper = styled.div(({ theme }) => ({
  padding: theme.space[3],
  boxShadow: theme.shadows.card,
}));

const Title = styled.div`
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: bold;
`;
