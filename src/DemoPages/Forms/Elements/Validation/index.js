import React, {Fragment} from 'react'

import Tabs from 'react-responsive-tabs';

import PageTitle from '../../../../Layout/AppMain/PageTitle';

// Examples

import FormsFeedback from './Examples/Feedback';

const tabsContent = [
    {
        title: 'Details',
        content: <FormsFeedback/>
    },

];

function getTabs() {
    return tabsContent.map((tab, index) => ({
        title: tab.title,
        getContent: () => tab.content,
        key: index,
    }));
}

class FormElementsValidation extends React.Component {

    render() {
        return (
            <Fragment>
                <PageTitle
                    heading="Write to us !"
                    subheading="We welcome your suggestions & concerns with top priority, Fill form below"
                    icon="lnr-picture text-danger"
                />
                <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={false} showInkBar={true} items={getTabs()}/>
            </Fragment>
        )
    }
}

export default FormElementsValidation;



