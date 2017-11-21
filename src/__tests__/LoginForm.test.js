import React from "react";
import { shallow } from "enzyme";
import App from "../components/forms/LoginForm";
import "../../setupTests";

describe("LoginPage", () => {
  const loginform = shallow(<App />);

  it("renders without crashing", () => {
    expect(loginform).toMatchSnapshot();
  });

  it("initialises the `state`", () => {
    expect(loginform.state()).toEqual({
      data: {
        email: "",
        password: ""
      },
      loading: false,
      errors: {}
    });
  });
  describe("when typing into the input form field", () => {
    const email = "test@test.com";
    const password = "mySecretPassword";
    const emailEvent = { target: { name: "email", value: email } };
    const passwordEvent = { target: { name: "password", value: password } };

    beforeEach(() => {
      loginform.find("#email").simulate("change", emailEvent);
      loginform.find("#password").simulate("change", passwordEvent);
    });

    it("updates the email value in `state`", () => {
      expect(loginform.state().data.email).toEqual(email);
    });

    it("updates the password value in `state`", () => {
      expect(loginform.state().data.password).toEqual(password);
    });
  });
});
