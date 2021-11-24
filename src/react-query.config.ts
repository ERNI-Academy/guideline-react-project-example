import {QueryClient} from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000,
      retry: false,
    },
    mutations: {
      // mutation options
    },
  },
});

export {
  queryClient
};
