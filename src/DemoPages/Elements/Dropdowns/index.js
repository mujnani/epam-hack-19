import React, {Fragment} from 'react';

import Tabs from 'react-responsive-tabs';

import PageTitle from '../../../Layout/AppMain/PageTitle';

import image1 from '../../../assets/utils/images/checking.jpg';
import image2 from '../../../assets/utils/images/saving.jpg';

import {
    Row, Col,
    Button,
    CardHeader,
    Card,
    CardBody,
    Progress,
    TabContent,
    TabPane,
} from 'reactstrap';

// Dropdown Examples

import DropdownStyles from './Examples/DropdownStyles';

const tabsContent = [
    {
        title: 'City Bank',
        // content: <DropdownStyles/>
    }
];

function getTabs() {
    return tabsContent.map((tab, index) => ({
        title: tab.title,
        getContent: () => tab.content,
        key: index,
    }));
}

export default class DropdownExamples extends React.Component {

    render() {

        return (
            <Fragment>
                {/* <PageTitle
                    heading="Dropdowns"
                    subheading="Multiple styles, actions and effects are available for the Archited Framework dropdown buttons."
                    icon="pe-7s-umbrella icon-gradient bg-sunny-morning"
                /> */}
                <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={false} showInkBar={true} items={getTabs()}/>
                <Row>
                    <Col md="12" lg="12">
                        <Row>
                            <Col md="6">
                                <Card className="main-card mb-3">
                                    <img className="rounded" src={image1} alt=""/>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card className="main-card mb-3">
                                    <img className="rounded" src={image2} alt=""/>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}