import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { homePageActions } from '../slice';
import { selectUniversities } from '../selectors';
import { Button } from 'app/components/Button';

interface Props {}

export function NewsletterButton(props: Props) {
  const universities = useSelector(selectUniversities);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(homePageActions.saveToJSON());
  };

  if (universities.length <= 0) {
    return null;
  }

  return <Button onClick={onClick}>Newsletter</Button>;
}
