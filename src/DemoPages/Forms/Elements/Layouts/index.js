import React, {Fragment} from 'react'

import Tabs from 'react-responsive-tabs';

import PageTitle from '../../../../Layout/AppMain/PageTitle';

// Examples

import FormGrid from './Examples/FormGrid';
import FormGridFormRow from './Examples/FormGridFormRow';

const tabsContent = [
    {
        title: 'Our Work ',
        content: <FormGridFormRow/>
    },
    {
        title: 'Our Team',
        content: <FormGrid/>
    }


];

function getTabs() {
    return tabsContent.map((tab, index) => ({
        title: tab.title,
        getContent: () => tab.content,
        key: index,
    }));
}

class FormElementsLayouts extends React.Component {

    render() {
        return (
            <Fragment>
                <PageTitle
                    heading="Healthy Banking"
                    subheading="We work seamlessly to give you a healthy banking experience."
                    icon="pe-7s-graph text-success"
                />
                <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={false} showInkBar={true} items={getTabs()}/>
            </Fragment>
        )
    }
}

export default FormElementsLayouts;



