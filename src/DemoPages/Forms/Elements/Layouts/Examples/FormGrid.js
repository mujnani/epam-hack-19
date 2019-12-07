import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row,Col, Card, CardBody,
    CardTitle, Button, Form, FormGroup, Label, Input, FormText
} from 'reactstrap';

import {
    faAngleUp,
    faAngleDown,
    faArrowLeft,
    faArrowRight,
    faEllipsisH,

} from '@fortawesome/free-solid-svg-icons';


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


export default class FormGrid extends React.Component {
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
                    <Card className="main-card mb-3">
                        <CardBody>
                            <CardTitle>Watch our Team</CardTitle>
                            <Row>
                            <Col md="4">
                                <div className="card mb-3 bg-primary widget-chart text-white card-border">
                                    <div className="icon-wrapper rounded-circle">
                                        <div className="icon-wrapper-bg bg-white opacity-1"/>
                                        <i className="lnr-graduation-hat text-white"/>
                                    </div>
                                    <div className="widget-numbers">
                                        Wen Wu
                                    </div>
                                    <div className="widget-subheading">
                                        Technologist
                                    </div>
                                    {/* <div className="widget-description text-success">
                                        <FontAwesomeIcon icon={faAngleUp}/>
                                        <span className="pl-1">175.5%</span>
                                    </div> */}
                                </div>
                            </Col>

                            <Col md="4">
                                <div className="card mb-3 bg-primary widget-chart text-white card-border">
                                    <div className="icon-wrapper rounded-circle">
                                        <div className="icon-wrapper-bg bg-white opacity-1"/>
                                        <i className="lnr-graduation-hat text-white"/>
                                    </div>
                                    <div className="widget-numbers">
                                        Miranda
                                    </div>
                                    <div className="widget-subheading">
                                        Technologist
                                    </div>
                                    {/* <div className="widget-description text-success">
                                        <FontAwesomeIcon icon={faAngleUp}/>
                                        <span className="pl-1">175.5%</span>
                                    </div> */}
                                </div>
                            </Col>

                            <Col md="4">
                                <div className="card mb-3 bg-primary widget-chart text-white card-border">
                                    <div className="icon-wrapper rounded-circle">
                                        <div className="icon-wrapper-bg bg-white opacity-1"/>
                                        <i className="lnr-graduation-hat text-white"/>
                                    </div>
                                    <div className="widget-numbers">
                                        Yu Zheng
                                    </div>
                                    <div className="widget-subheading">
                                        Technologist
                                    </div>
                                    {/* <div className="widget-description text-success">
                                        <FontAwesomeIcon icon={faAngleUp}/>
                                        <span className="pl-1">175.5%</span>
                                    </div> */}
                                </div>
                            </Col>

                            <Col md="4">
                                <div className="card mb-3 bg-primary widget-chart text-white card-border">
                                    <div className="icon-wrapper rounded-circle">
                                        <div className="icon-wrapper-bg bg-white opacity-1"/>
                                        <i className="lnr-graduation-hat text-white"/>
                                    </div>
                                    <div className="widget-numbers">
                                        Vignesh
                                    </div>
                                    <div className="widget-subheading">
                                        Technologist
                                    </div>
                                    {/* <div className="widget-description text-success">
                                        <FontAwesomeIcon icon={faAngleUp}/>
                                        <span className="pl-1">175.5%</span>
                                    </div> */}
                                </div>
                            </Col>

                            <Col md="4">
                                <div className="card mb-3 bg-primary widget-chart text-white card-border">
                                    <div className="icon-wrapper rounded-circle">
                                        <div className="icon-wrapper-bg bg-white opacity-1"/>
                                        <i className="lnr-graduation-hat text-white"/>
                                    </div>
                                    <div className="widget-numbers">
                                        Rahul
                                    </div>
                                    <div className="widget-subheading">
                                        Technologist
                                    </div>
                                    {/* <div className="widget-description text-success">
                                        <FontAwesomeIcon icon={faAngleUp}/>
                                        <span className="pl-1">175.5%</span>
                                    </div> */}
                                </div>
                            </Col>
 </Row>
                        <div className="divider mt-0" style={{marginBottom: '30px'}}/>
                        </CardBody>
                    </Card>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}
