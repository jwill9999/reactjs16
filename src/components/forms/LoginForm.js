import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class LoginForm extends Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    loading: false,
    errors: {}
  };

  onChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <Form>
        <Form.Field>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email@test.com"
          />
        </Form.Field>

        <Button primary type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default LoginForm;
