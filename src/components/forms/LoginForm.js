import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Button } from "semantic-ui-react";
import Validator from "validator";
import InLineError from "../messages/errors/InlineError";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        email: "",
        password: ""
      },
      loading: false,
      errors: {}
    };
  }

  onChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  };

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data);
    }
  };

  validate = data => {
    const errors = {};
    if (!data.password) errors.password = "Please enter a valid password";
    if (!Validator.isEmail(data.email))
      errors.email = "Invalid email configuration";
    return errors;
  };

  disableSubmitButton = () => {
    const { email, password } = this.state.data;
    return !email || !password;
  };

  render() {
    const { data, errors } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email@test.com"
            value={data.email}
            onChange={e =>
              this.setState({
                data: { ...this.state.data, [e.target.name]: e.target.value }
              })
            }
          />
          {errors.email && <InLineError text={errors.email} />}
        </Form.Field>
        <Form.Field error={!!errors.password}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={this.onChange}
          />
          {errors.password && <InLineError text={errors.password} />}
        </Form.Field>
        <Button disabled={this.disableSubmitButton()} primary type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default LoginForm;
