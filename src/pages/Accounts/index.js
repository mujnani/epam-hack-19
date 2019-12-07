import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

import OnBoard from './OnBoard/';

// Layout
import AppHeader from '../../Layout/AppHeader/';
import AppSidebar from '../../Layout/AppSidebar/';
import AppFooter from '../../Layout/AppFooter/';

const Elements = ({match}) => (
    <Fragment>
        <AppHeader/>
        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">
                    <Route path={`${match.url}/onboard`} component={OnBoard}/>
                    <Route path={`${match.url}/financial-footprints`} component={OnBoard}/>
                    <Route path={`${match.url}/fin-bot`} component={OnBoard}/>
                </div>
                <AppFooter/>
            </div>
        </div>
    </Fragment>
);

export default Elements;