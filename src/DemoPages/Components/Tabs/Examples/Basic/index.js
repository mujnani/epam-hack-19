import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classnames from 'classnames';

import {
    TabContent, TabPane, Nav, NavItem, NavLink,
    Row, Col,
    Card, CardBody, CardHeader,CardFooter,
    CardTitle, Button, ButtonGroup
} from 'reactstrap';

import {
    faCommentDots,
    faBullhorn,
} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default class TabsExample extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1',
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {

        return (
            <Fragment>
            <ReactCSSTransitionGroup
                component="div"
                transitionName="TabsAnimation"
                transitionAppear={true}
                transitionAppearTimeout={0}
                transitionEnter={false}
                transitionLeave={false}>
                <Row>
                    <Col md="4">
                        <Card className="main-card mb-3">
                            <CardHeader>University Debt</CardHeader>
                            <CardBody>
                                <CardTitle>Repay your University Debt</CardTitle>
                                <p>You have XXX RMB university loan from Citi Bank.</p>
                                <p>Clear your debts and improve your Financial Health.</p>
                                <Button color="primary">Talk to Fin Bot</Button>
                            </CardBody>
                            <CardFooter>High</CardFooter>
                        </Card>
                        <Card className="main-card mb-3">
                            <CardHeader>Marriage Expense Planning</CardHeader>
                            <CardBody>
                                <CardTitle>Start saving for your Marriage expenses</CardTitle>
                                <p>Persons of your age group prefer a saving plan for their upcoming marriages.</p>
                                <p>Plan ahead and gain your Financial Freedom.</p>
                                <Button color="primary">Talk to Fin Bot</Button>
                            </CardBody>
                            <CardFooter>Low</CardFooter>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card className="main-card mb-3">
                            <CardHeader>Financial House</CardHeader>
                            <CardBody>
                                <CardTitle>Time to Build your House/Apartment</CardTitle>
                                <p>You have XXX RMB surplus in your HSBC Bank.Usually people in your age group start investing in  house</p>
                                <p>Use money to create money through intelligent investments.</p>
                                <Button color="primary">Talk to Fin Bot</Button>
                            </CardBody>
                            <CardFooter>Average</CardFooter>
                        </Card>
                        <Card className="main-card mb-3">
                            <CardHeader>Vaccation Planning</CardHeader>
                            <CardBody>
                                <CardTitle>Use our Intellginece to save for your next vaccation</CardTitle>
                                <p>Usually people of age group spent  20,000 RMB on vaccations.</p>
                                <p>Plan now and enjoy stressful vaccations.</p>
                                <Button color="primary">Talk to Fin Bot</Button>
                            </CardBody>
                            <CardFooter>High</CardFooter>
                        </Card>
                    </Col>
                </Row>
            </ReactCSSTransitionGroup>
        </Fragment>
        );
    }
}