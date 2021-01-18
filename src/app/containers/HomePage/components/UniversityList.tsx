import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import { selectUniversities, selectLoading } from '../selectors';
import { Card } from 'app/components/Card';
import { Badge } from 'app/components/Badge';
import { Spinner } from 'app/components/Spinner';

interface Props {}

export function UniversityList(props: Props) {
  const universities = useSelector(selectUniversities);
  const loading = useSelector(selectLoading);

  if (loading)
    return (
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    );

  if (universities.length === 0) {
    return <NotFound>No results found.</NotFound>;
  }

  return (
    <Wrapper>
      {universities.map((u, index) => (
        <Cell key={`${u.name}_${index}`}>
          <ResCard
            title={u.name}
            content={
              <div>
                <Badge>{u.country}</Badge>
                <h4>Web pages:</h4>
                <ul>
                  {u.web_pages.map(wp => (
                    <li key={wp}>
                      <a href={wp} target="_blank" rel="noreferrer">
                        {wp}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            }
          />
        </Cell>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: ${p => -p.theme.space[2]}px;
  margin-top: ${p => p.theme.space[3]}px;
`;

const ResCard = styled(Card)`
  height: 100%;
`;

const Cell = styled.div`
  width: 100%;
  padding: ${p => p.theme.space[2]}px;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 50%;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 33.33%;
  }
`;

const NotFound = styled.div`
  color: ${p => p.theme.colors.muted};
  font-size: ${p => p.theme.fontSizes[5]}px;
  padding-top: ${p => p.theme.space[4]}px;
`;

const SpinnerWrapper = styled.div`
  text-align: center;
  padding: ${p => p.theme.space[4]}px 0;
`;
