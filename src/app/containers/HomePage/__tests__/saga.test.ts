import { put, takeLatest } from 'redux-saga/effects';
import * as slice from '../slice';
import FileSaver from 'file-saver';

import { loadUniversities, homePageSaga, saveToJSON } from '../saga';
import { University } from 'types/University';

jest.mock('file-saver', () => ({ saveAs: jest.fn() }));

describe('loadUniversities Saga', () => {
  let searchTerm: any;
  let universities: any;
  let loadUniversitiesIterator: ReturnType<typeof loadUniversities>;

  beforeEach(() => {
    loadUniversitiesIterator = loadUniversities();

    const selectDescriptor = loadUniversitiesIterator.next().value;
    expect(selectDescriptor).toMatchSnapshot();
  });

  it('should dispatch the loadSuccess action if it requests the data successfully', () => {
    searchTerm = 'test';
    universities = [
      {
        name: 'test',
      },
    ];

    const requestDescriptor = loadUniversitiesIterator.next(searchTerm).value;
    expect(requestDescriptor).toMatchSnapshot();

    const putDescriptor = loadUniversitiesIterator.next(universities).value;
    expect(putDescriptor).toEqual(
      put(slice.homePageActions.loadSuccess(universities)),
    );
  });

  it('should dispatch the response error', () => {
    searchTerm = 'test';
    const error = new Error('some error');

    const requestDescriptor = loadUniversitiesIterator.next(searchTerm).value;
    expect(requestDescriptor).toMatchSnapshot();

    const putDescriptor = loadUniversitiesIterator.throw(error).value;
    expect(putDescriptor).toEqual(put(slice.homePageActions.loadError(error)));
  });
});

describe('saveToJSON Saga', () => {
  const saveToJSONIterator = saveToJSON();

  it('should select universities', () => {
    const selectDescriptor = saveToJSONIterator.next().value;
    expect(selectDescriptor).toMatchSnapshot();
  });

  it('should handle saveAs', () => {
    const universities = [
      {
        name: 'test',
      },
    ] as University[];

    saveToJSONIterator.next(universities);
    expect(FileSaver.saveAs).toBeCalled();
  });
});

describe('homePageSaga Saga', () => {
  const homePageIterator = homePageSaga();
  it('should start task to watch for loadUniversities action', () => {
    const takeLatestDescriptor = homePageIterator.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeLatest(slice.homePageActions.loadUniversities, loadUniversities),
    );
  });

  it('should start task to watch for saveToJSON action', () => {
    const takeLatestDescriptor = homePageIterator.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeLatest(slice.homePageActions.saveToJSON, saveToJSON),
    );
  });
});
