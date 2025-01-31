import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  About,
  HomeLayout,
  Landing,
  Error,
  SinglePageError,
  Qualification,
  Clipboard,
  Dictionary,
  SearchResults
} from './app/modules/views';

import {loader as singleQualificationLoader} from './app/modules/views/Qualification'

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
        path: 'about',
        element: <About />,
        errorElement: <SinglePageError />,
      },
      {
        path: 'clipboard',
        element: <Clipboard />,
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
