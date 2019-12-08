import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import credit_card from '../../assets/images/credit_card.png';

class Landing extends Component {
  componentDidMount() {
    // If logged in, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboards/basic");
    }
  }

  render() {
    return (
      <div style={{ backgroundColor: '#fff', height: '100vh' }} className="valign-wrapper">
        <div className="container">
        <div className="row">
          <div className="col s12 center-align">
            <img
              src={credit_card}
              style={{ width: "350px" }}
              className="responsive-img credit-card"
              alt="Undraw"
            />
            <h4 className="flow-text">
              <b>We</b> are just not other banking platform, {" "}
              <span style={{ fontFamily: "monospace" }}>We help to CASH your goals</span>
            </h4>
            <br />
            <div className="col s6" style={{display: 'flex', justifyContent: 'center' }}>
              <Link
                to="/auth/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#fff',
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6" style={{display: 'flex', justifyContent: 'center' }}>
              <Link
                to="/auth/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                className="btn btn-large btn-flat waves-effect green black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auths
});

export default connect(mapStateToProps)(Landing);
