import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

import Login from './Login';
import Register from './Register';

// Layout
import AppFooter from '../../Layout/AppFooter/';

const Elements = ({match}) => (
    <Fragment>
        <div className="app-main">
            <div className="app-main__outer">
                <div className="app-main__inner">
                    <Route path={`${match.url}/login`} component={Login}/>
                    <Route path={`${match.url}/register`} component={Register}/>
                </div>
                <AppFooter/>
            </div>
        </div>
    </Fragment>
);

export default Elements;