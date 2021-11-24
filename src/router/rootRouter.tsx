import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import Cover from '../screens/cover/Cover';
import PersonList from '../screens/personsList/PersonsList';

function RootNavigator({history}: any) {

	return (
		<ConnectedRouter history={history}>
			<Switch>
				<Route exact path="/" component={Cover} />
				<Route path="/personList" component={PersonList} />
			</Switch>
		</ConnectedRouter>
	)
}

export default RootNavigator;