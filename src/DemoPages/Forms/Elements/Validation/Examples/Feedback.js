import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Card, CardBody, Row, Col,Button,ButtonGroup,
    CardTitle, Form, FormGroup, Label, Input, FormFeedback, FormText
} from 'reactstrap';

export default class FormsFeedback extends React.Component {
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
                            <Col md="12">
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>Contact us</CardTitle>
                                        <Form>
                                            <FormGroup>
                                                <Label for="exampleEmail">Name</Label>
                                                <Input/>
                                                <FormFeedback>You will not be able to see this</FormFeedback>
                                                <FormText>Please provide your name.</FormText>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="exampleEmail">Email</Label>
                                                <Input/>
                                                <FormFeedback>You will not be able to see this</FormFeedback>
                                                <FormText>Please share your email</FormText>
                                            </FormGroup>

                                            <FormGroup>
                                                <Label for="exampleEmail">Mobile No.</Label>
                                                <Input/>
                                                <FormFeedback>You will not be able to see this</FormFeedback>
                                                <FormText>Please drop your contact number.</FormText>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="exampleEmail">CYG Account Id</Label>
                                                <Input/>
                                                <FormFeedback>You will not be able to see this</FormFeedback>
                                                <FormText>Please enter CYG acc ID.</FormText>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="exampleEmail">Concerns</Label>
                                                <Input/>
                                                <FormFeedback>You will not be able to see this</FormFeedback>
                                                <FormText>Please write detailed description here.</FormText>
                                            </FormGroup>

                                            <Button className="mb-2 mr-2" color="dark">Submit</Button>
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
