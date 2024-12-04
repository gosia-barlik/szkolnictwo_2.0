import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  RelatedApps,
  HomeLayout,
  Landing,
  Error,
  SinglePageError,
  Qualification,
  Favorites,
  Dictionary
} from './pages';
import SearchResults from './components/SearchResults';

import {loader as singleQualificationLoader} from './pages/Qualification'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
       
      },
      {
        path: 'qualification/:id',
        errorElement: <SinglePageError />,
        loader: singleQualificationLoader(queryClient),
        element: <Qualification />,
      },
      {
        path: 'related_apps',
        element: <RelatedApps />,
        errorElement: <SinglePageError />,
      },
      {
        path: 'favorites',
        element: <Favorites />,
        errorElement: <SinglePageError />,
      },
      {
        path: 'dictionary',
        element: <Dictionary />,
        errorElement: <SinglePageError />,
      },
      {
        path: 'search_results',
        element: <SearchResults />,
        errorElement: <SinglePageError />,
      },
  
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
