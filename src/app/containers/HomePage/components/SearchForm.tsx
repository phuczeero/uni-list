import React, { FormEvent, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { homePageActions } from '../slice';
import { SearchField } from 'app/components/SearchField';
import { ErrorMessage } from './ErrorMessage';

const MIN_LENGTH = 3;

interface Props {}

export function SearchForm(props: Props) {
  const dispatch = useDispatch();
  const ref = useRef<HTMLInputElement>(null!);
  const [invalid, setInvalid] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const searchTerm = ref.current.value;
    const invalid = searchTerm.length < MIN_LENGTH;
    setInvalid(invalid);
    if (!invalid) {
      dispatch(homePageActions.loadUniversities(searchTerm));
    }
  };

  const onClose = () => {
    setInvalid(false);
    ref.current.focus();
  };

  const errorMessage = (
    <ErrorMessage
      message="Please enter at least 3 characters to search."
      onClose={onClose}
    />
  );

  return (
    <form onSubmit={onSubmit}>
      <SearchField ref={ref} placeholder="Search universities" />
      {invalid && errorMessage}
    </form>
  );
}
