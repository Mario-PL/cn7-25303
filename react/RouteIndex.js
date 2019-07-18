import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { inject } from 'mobx-react';
import { asyncRouter, nomatch } from '@choerodon/boot';

const Role1 = asyncRouter(() => import('./role/role1.js'));
const Role2 = asyncRouter(() => import('./role/role2.js'));
@inject('AppState')
class RouteIndex extends React.Component {
    render() {
        const { match, AppState } = this.props;
        return (
            <Switch>
                <Route path={`${match.url}/role1`} component={Role1} ></Route>
                <Route path={`${match.url}/role2`} component={Role2} ></Route>

                <Route path="*" component={nomatch} />
            </Switch>
        );
    }
}

export default RouteIndex;