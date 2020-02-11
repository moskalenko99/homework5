import React from 'react';
import './style.css'

class Login extends React.Component {

    state = {
      login: '',
      password: '',
    }

    handleLogin = (event) => {
      this.setState({ login: event.target.value })
    }

    handlePassword = (event) => {
      this.setState({ password: event.target.value })
    }

    handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.state);
      
    }


    render = () => {
        return (
          <form action="" className="form" onSubmit={this.handleSubmit}>
            <h1>{this.props.title}</h1>
            <div className="login">
                <input type="text" name="login" id="login" className="js-Login"  value={this.state.login} onChange={this.handleLogin} />
            </div>
            <div className="password">
                <input type="password" name="password" id="password"   value={this.state.password} onChange={this.handlePassword} />
            </div>
            <div className="button">
                <button className="btn">Войти</button>
            </div>
          </form>
        );
    };
}

export default Login
