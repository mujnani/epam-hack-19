import React, { Component } from "react";
import PropTypes from "prop-types";
import PlaidLinkButton from "react-plaid-link-button";
import { connect } from "react-redux";
import {
  getTransactions,
  addAccount,
  deleteAccount
} from '../../../actions/accounts';
import { logoutUser } from '../../../actions/auths';
import MaterialTable from "material-table"; // https://mbrn.github.io/material-table/#/

class Accounts extends Component {
  componentDidMount() {
    const { accounts } = this.props;
    this.props.getTransactions(accounts);
  }

  // Add account
  handleOnSuccess = (token, metadata) => {
    const { accounts } = this.props;
    const plaidData = {
      public_token: token,
      metadata: metadata,
      accounts: accounts
    };

    this.props.addAccount(plaidData);
  };

  // Delete account
  onDeleteClick = id => {
    const { accounts } = this.props;
    const accountData = {
      id: id,
      accounts: accounts
    };
    this.props.deleteAccount(accountData);
  };

  // Logout
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user, accounts } = this.props;
    const { transactions, transactionsLoading } = this.props.plaid;

    let accountItems = accounts.map(account => (
      <li key={account._id} style={{ marginTop: "1rem" }}>
        <button
          style={{ marginRight: "1rem", padding: 0 }}
          onClick={this.onDeleteClick.bind(this, account._id)}
          className="btn btn-small btn-floating waves-effect waves-light hoverable red accent-3"
        >
          <i className="material-icons">delete</i>
        </button>
        <b>{account.institutionName}</b>
      </li>
    ));

    // Setting up data table
    const transactionsColumns = [
      { title: "Account", field: "account" },
      { title: "Date", field: "date", type: "date", defaultSort: "desc" },
      { title: "Name", field: "name" },
      { title: "Amount", field: "amount", type: "numeric" },
      { title: "Category", field: "category" }
    ];

    let transactionsData = [];
    transactions.forEach(function(account) {
      account.transactions.forEach(function(transaction) {
        transactionsData.push({
          account: account.accountName,
          date: transaction.date,
          category: transaction.category[0],
          name: transaction.name,
          amount: transaction.amount
        });
      });
    });

    return (
      <div className="row">
        <div className="col s12">
          <h5>
            <b>Linked Accounts</b>
          </h5>
          <p className="grey-text text-darken-1">
            Add or remove your bank accounts below
          </p>
          <ul>{accountItems}</ul>
          <PlaidLinkButton
            buttonProps={{
              className:
                "btn btn-large waves-effect waves-light hoverable blue accent-3 main-btn"
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
            Add Account
          </PlaidLinkButton>
          <hr style={{ marginTop: "2rem", opacity: ".2" }} />
          <h5>
            <b>Transactions</b>
          </h5>
          {transactionsLoading ? (
            <p className="grey-text text-darken-1">Fetching transactions...</p>
          ) : (
            <>
              <p className="grey-text text-darken-1">
                You have <b>{transactionsData.length}</b> transactions from your
                <b> {accounts.length}</b> linked
                {accounts.length > 1 ? (
                  <span> accounts </span>
                ) : (
                  <span> account </span>
                )}
                from the past 30 days
              </p>
              <MaterialTable
                columns={transactionsColumns}
                data={transactionsData}
                title="Search Transactions"
              />
            </>
          )}
        </div>
      </div>
    );
  }
}

Accounts.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  getTransactions: PropTypes.func.isRequired,
  addAccount: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  accounts: PropTypes.array.isRequired,
  accounts: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  plaid: state.accounts
});

export default connect(
  mapStateToProps,
  { logoutUser, getTransactions, addAccount, deleteAccount }
)(Accounts);
