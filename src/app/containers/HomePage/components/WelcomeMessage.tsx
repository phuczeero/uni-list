import React from 'react';
import styled from 'styled-components/macro';
import { Card } from 'app/components/Card';

interface Props {}

export function WelcomeMessage(props: Props) {
  const content = (
    <Instruction>
      To find your universities by name, enter the keyword to the search box
      above
    </Instruction>
  );

  return (
    <div>
      <h2>Welcome to university list app.</h2>
      <Card content={content} />
    </div>
  );
}

const Instruction = styled.div`
  font-size: ${p => p.theme.fontSizes[5]}px;
  color: ${p => p.theme.colors.muted};
`;
