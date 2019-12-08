import React, { Component } from "react";
import PlaidLinkButton from "react-plaid-link-button";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from '../../../actions/auths';
import { getAccounts, addAccount } from '../../../actions/accounts';

import Accounts from "./Accounts";
import Spinner from "./Spinner";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getAccounts();
  }

  // Logout
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  // Add account
  handleOnSuccess = (token, metadata) => {
    const plaidData = {
      public_token: token,
      metadata: metadata
    };

    this.props.addAccount(plaidData);
  };

  render() {
    const { user } = this.props.auths;
    const { accounts, accountsLoading } = this.props.accounts;
    const btnStyle = {
      color: '#fff'
    };

    let dashboardContent;

    if (accounts === null || accountsLoading) {
      dashboardContent = <Spinner />;
    } else if (accounts.length > 0) {
      // User has accounts linked
      dashboardContent = <Accounts user={user} accounts={accounts} />;
    } else {
      // User has no accounts linked
      dashboardContent = (
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Welcome,</b> {user.name && user.name.split(" ")[0]}
            </h4>
            <p className="flow-text grey-text text-darken-1">
              To get started, link your first bank account below
            </p>
            <div>
              <PlaidLinkButton
                buttonProps={{
                  className:
                    "btn btn-large main-btn primary"
                }}
                plaidLinkProps={{
                  clientName: "Test",
                  key: "778c45226d8396e2d2227a0470a79c",
                  env: "sandbox",
                  product: ["transactions"],
                  onSuccess: this.handleOnSuccess
                }}
                onScriptLoad={() => this.setState({ loaded: true })}
              >
                Link Account
              </PlaidLinkButton>
            </div>
          </div>
        </div>
      );
    }

    return <div className="container">{dashboardContent}</div>;
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  getAccounts: PropTypes.func.isRequired,
  addAccount: PropTypes.func.isRequired,
  auths: PropTypes.object.isRequired,
  accounts: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auths: state.auths,
  accounts: state.accounts
});

export default connect(
  mapStateToProps,
  { logoutUser, getAccounts, addAccount }
)(Dashboard);
