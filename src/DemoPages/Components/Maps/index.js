import React, {Fragment} from 'react';

import Tabs from 'react-responsive-tabs';

import PageTitle from '../../../Layout/AppMain/PageTitle';

// Examples
import VectorMapsExample from './Examples/VectorMaps';
import GoogleMapsExample from './Examples/GoogleMaps';

const tabsContent = [
    {
        title: 'Global Prints',
        content: <VectorMapsExample/>
    },
    {
        title: 'Local Prints',
        content: <GoogleMapsExample/>
    },
];

function getTabs() {
    return tabsContent.map((tab, index) => ({
        title: tab.title,
        getContent: () => tab.content,
        key: index,
    }));
}

export default class MapsExample extends React.Component {

    render() {
        return (
            <Fragment>
                <PageTitle
                    heading="Financial Prints"
                    subheading="Your global banking presence."
                    icon="pe-7s-map icon-gradient bg-premium-dark"
                />
                <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={false} showInkBar={true} items={getTabs()}/>
            </Fragment>
        );
    }
}