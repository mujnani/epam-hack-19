import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classnames from 'classnames';

import {
    TabContent, TabPane, Nav, NavItem, NavLink,
    Row, Col, CardHeader, CardFooter,CardTitle,
    Card, CardBody,Form, FormGroup, Label, Input, FormFeedback, FormText,
    Button, ButtonGroup,Dropdown, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

export default class CardTabsExample extends React.Component {
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
                    <div>
                        <Row>
                            <Col md="6">
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>Goals Set up</CardTitle>
                                        <Form>
                                            <FormGroup>
                                                <Label for="exampleEmail">Goal Name</Label>
                                                <Input/>
                                                <FormFeedback>You will not be able to see this</FormFeedback>
                                                <FormText>Please provide your goal name.</FormText>
                                            </FormGroup>
                                            <FormGroup>
                                                {/* <Label for="exampleEmail">Goal Tenure</Label> */}
                                                {/* <Input/> */}
                                            <UncontrolledButtonDropdown direction="right" className="mb-2 mr-2">
                                            <Button className="btn-wide" color="primary">Goals  Tenure</Button>
                                            <DropdownToggle className="dropdown-toggle-split" caret color="primary"/>
                                            <DropdownMenu>
                                                <DropdownItem>3 month</DropdownItem>
                                                {/* <DropdownItem header>Header</DropdownItem> */}
                                                <DropdownItem>6 month</DropdownItem>
                                                <DropdownItem>1 year</DropdownItem>
                                                <DropdownItem>2 year</DropdownItem>
                                                <DropdownItem>3 year</DropdownItem>
                                                <DropdownItem>5 year</DropdownItem>
                                                {/* <DropdownItem divider/>
                                                <DropdownItem>Dividers</DropdownItem> */}
                                            </DropdownMenu>
                                        </UncontrolledButtonDropdown>
                                                <FormFeedback>You will not be able to see this</FormFeedback>
                                                <FormText>Please select your goal tenure</FormText>
                                            </FormGroup>

                                            <FormGroup>
                                                <Label for="exampleEmail">Goal Amount</Label>
                                                <Input/>
                                                <FormFeedback>You will not be able to see this</FormFeedback>
                                                <FormText>Please provide your goal amount.</FormText>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="exampleEmail">Goals Monthly Contribution</Label>
                                                <Input/>
                                                <FormFeedback>You will not be able to see this</FormFeedback>
                                                <FormText>Please provide monthly contribution you can spare out.</FormText>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="exampleEmail">Goal Priority</Label>
                                                <Input/>
                                                <FormFeedback>You will not be able to see this</FormFeedback>
                                                <FormText>Please provide your goal priority</FormText>
                                            </FormGroup>

                                            <Button className="mb-2 mr-2 btn-transition"
                                            color="primary">Create Goal</Button>
                                            {/* <FormGroup>
                                                <Label for="exampleEmail">Valid input</Label>
                                                <Input valid/>
                                                <FormFeedback valid>Sweet! that name is available</FormFeedback>
                                                <FormText>Example help text that remains unchanged.</FormText>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="examplePassword">Invalid input</Label>
                                                <Input invalid/>
                                                <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                                                <FormText>Example help text that remains unchanged.</FormText>
                                            </FormGroup> */}
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Col>
                             </Row>
                        <br/><br/><br/><br/><br/><br/>
                        <br/><br/><br/><br/><br/><br/>
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}