
import React from 'react';
import { Link } from 'react-router-dom';

class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoUser = this.handleDemoUser.bind(this);
  }

  update (field) {
    return (event) => {
      this.setState({[field]: event.target.value});
    };
  }

  componentWillUnmount () {
    this.props.clearErrors();
  }

  handleSubmit (event) {
    event.preventDefault();

    // if (errorLength > 0) {

    // }
    this.props.signUp(this.state); //maybe chain a way to go straight to profile home page
  }

  // componentDidUpdate() {
  //   this.props.clearErrors();
  // }

  handleDemoUser (event) {
    event.preventDefault();
    let user = {username: "dean", password: "password"};
    this.props.login(user);
  }

  // handleErrors (event) {
  //   event.preventDefault();

  // }
 
  render () {
      return (
        <>
        <div className="signupDiv">
          <div className='signup'>

                <div className='name' ><h2>Photogram</h2></div>
              <div className='header-text'>
                <div className='text'>Sign up to see photos and videos from your friends.</div>
              </div>
            <form className='form' onSubmit={this.handleSubmit}>
              <div className="signUpDemoParent">
                  <button className="signUpDemoButton" onClick={this.handleDemoUser} >Demo Log in</button> 
              </div>
                <div className='or-text'>OR</div>
                <div className="inputField">
                  <input 
                    type="text"
                    placeholder="Email"
                    onChange={this.update('email')}
                    />
                </div>
                <div className="inputField">
                  <input 
                    type="text"
                    placeholder="Full Name"
                    onChange={this.update('name')}
                    />
                </div>
                <div className="inputField">
                  <input 
                    type="text"
                    placeholder="Username"
                    onChange={this.update('username')}
                    />
                </div>
                <div className="inputField">
                  <input 
                    type="password"
                    placeholder="Password"
                    onChange={this.update('password')}
                  />
                </div>
              <div className="submitButtonParent">
                <input className="submitButton" type="submit" value="Sign up" />
              </div>
            </form>
                <label className="errors">{this.props.errors.map((error,idx) => <li key={idx}>{error}</li>)}</label>
                <div className="login-footer-parent">
                  <div className='login-footer-text'>
                      By signing up, you agree to our Terms, Data Policy, and Cookies Policy.
                  </div>
                </div>

          </div>
        </div>

        <div className="haveAccountDiv">
          <div className="haveAccount">
            <label className='account'>Have an account?</label>
            <Link to={`/login`}>
              <input className="redirect" type="submit" value="Log in" />
            </Link>
          </div>
        </div>
      </>
    )
  }
}

export default SignUp;

