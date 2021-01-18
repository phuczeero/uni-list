import { University } from 'types/University';

/* --- STATE --- */
export interface HomePageState {
  searchTerm: string;
  loading: boolean;
  universities: University[];
  error: Error | null;
}

export type ContainerState = HomePageState;
