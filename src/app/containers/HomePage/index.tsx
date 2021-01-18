import React from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { homePageSaga } from './saga';
import { Container } from 'app/components/Container';
import { SearchForm } from './components/SearchForm';
import { UniversityList } from './components/UniversityList';
import { NewsletterButton } from './components/NewsletterButton';
import { WelcomeMessage } from './components/WelcomeMessage';
import { selectSearchTerm } from './selectors';

interface Props {}

export function HomePage(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: homePageSaga });

  const searchTerm = useSelector(selectSearchTerm);

  return (
    <>
      <Helmet>
        <title>Home page</title>
        <meta name="description" content="Description of HomePage" />
      </Helmet>
      <Container>
        <Toolbar>
          <SearchForm />
          <NewsletterButton />
        </Toolbar>
        {searchTerm.length > 0 ? <UniversityList /> : <WelcomeMessage />}
      </Container>
    </>
  );
}

const Toolbar = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;
