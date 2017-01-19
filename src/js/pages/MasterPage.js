import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';

import Header from './Header';

export default class extends React.Component {
  render() {
    return (
      <DocumentTitle title='My React App'>
        <div className='MasterPage'>
          <Header />
          { this.props.children }
        </div>
      </DocumentTitle>
    );
  }
}
