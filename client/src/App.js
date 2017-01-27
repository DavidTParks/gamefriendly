import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Gamefriendly.io</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div classname="Signup-Box">
          <SignUpContainer />
        </div>
      </div>
    );
  }
}
class SignUpContainer extends React.Component {
	render() {
		return (
			<div id='signUpContainer'>
				<SignUpHeader title="Sign Up" />
				<SignUpForm />
			</div>
		)
	}
}

const SignUpHeader = props => (
	<div id='signUpHeader'>
		<div id='signUpHeaderTitle'>
			{props.title}
		</div>
	</div>
);

const FormInput = props => (
	<div className='signUpRow'>
		<input type={props.type} placeholder={props.placeholder} />
	</div>
);

const FormCheckBox = props => (
	<div className='signUpRow'>
		<input id={props.id} type='checkbox' />
		<label htmlFor={props.id}>{props.label}</label>
	</div>
);

const FormButton = props => (
	<div className='signUpRow'>
		<button type='button'>{props.title}</button>
	</div>
);

const SignUpForm = props => (
	<div id='signUpFormContainer'>
		<form id="signUpForm">
			<FormInput type="text" placeholder="email" />
				<FormInput type="password" placeholder="password" />
				<FormInput type="password" placeholder="confirm" />
				<FormCheckBox id="terms" label="I agree to the terms and conditions" />
				<FormButton title="Sign Up" />
		</form>
	</div>
);

export default App;
