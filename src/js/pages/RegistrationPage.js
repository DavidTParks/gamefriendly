import React from 'react';
import DocumentTitle from 'react-document-title';

export default class RegistrationPage extends React.Component {
  render() {
    return (
      <DocumentTitle title={`Registration`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>Registration</h3>
              <hr />
            </div>
          </div>
          <RegistrationForm />
        </div>
      </DocumentTitle>
    );
  }
}
