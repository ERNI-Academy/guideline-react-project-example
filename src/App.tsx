import 'typeface-roboto';
import React, {FC} from 'react';
import {QueryClientProvider} from 'react-query';
import { Provider } from 'react-redux';
import RootNavigator from './router/rootRouter';
import configureStore, { history } from './store/store';
import {Loading, Modal, SnackbarComponent} from './components';
import {queryClient} from './react-query.config';

const App: FC<{}> = () => {
  const store = configureStore()
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <SnackbarComponent />
        <Modal />
        <Loading />
        <RootNavigator history={history}/>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
