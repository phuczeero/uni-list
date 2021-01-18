import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';

import { Container } from 'app/components/Container';
import { Card } from 'app/components/Card';
import { Button } from 'app/components/Button';

interface Props {}

export function FavoritePage(props: Props) {
  const content = (
    <Content>
      <p>You must login to see your favorite universities</p>
      <Button onClick={() => alert('Coming soon. I need more time :)')}>
        Login
      </Button>
    </Content>
  );

  return (
    <>
      <Helmet>
        <title>Favorite page</title>
        <meta name="description" content="Description of FavoritePage" />
      </Helmet>
      <Container>
        <Card content={content} />
      </Container>
    </>
  );
}

const Content = styled.div`
  text-align: center;
`;
