import { Container } from 'app/components/Container';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';

interface Props {}

export function AboutPage(props: Props) {
  return (
    <>
      <Helmet>
        <title>About page</title>
        <meta name="description" content="Description of AboutPage" />
      </Helmet>
      <Container>
        <h1>About</h1>
        <p>
          This is a web application to show a list of universities from all over
          the world.
        </p>
      </Container>
    </>
  );
}
