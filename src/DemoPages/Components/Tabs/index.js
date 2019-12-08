import React, {Fragment} from 'react';

import Tabs from 'react-responsive-tabs';

import PageTitle from '../../../Layout/AppMain/PageTitle';

// Examples
import TabsExample from './Examples/Basic';
import CardTabsExample from './Examples/CardTabs';

const tabsContent = [
    {
        title: 'Manual Goals',
        content: <CardTabsExample/>
    },
    {
        title: 'Life Cycle Goals',
        content: <TabsExample/>
    },
];

function getTabs() {
    return tabsContent.map((tab, index) => ({
        title: tab.title,
        getContent: () => tab.content,
        key: index,
    }));
}

export default class TabExample extends React.Component {

    render() {

        return (
            <Fragment>
                <PageTitle
                    heading="Goals"
                    subheading="Use our platform's intelligence to predict Goals OR set up your Goals manually"
                    icon="pe-7s-drawer icon-gradient bg-happy-itmeo"
                />
                <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={false} showInkBar={true} items={getTabs()}/>
            </Fragment>
        );
    }
}