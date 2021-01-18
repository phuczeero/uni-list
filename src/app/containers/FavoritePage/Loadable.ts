/**
 *
 * Asynchronously loads the component for FavoritePage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const FavoritePage = lazyLoad(
  () => import('./index'),
  module => module.FavoritePage,
);
