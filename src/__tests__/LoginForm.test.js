import React from "react";
import { shallow } from "enzyme";
import App from "../components/forms/LoginForm";
import "../../setupTests";

describe("LoginPage", () => {
  const loginform = shallow(<App />);
  it("renders without crashing", () => {
    expect(loginform).toMatchSnapshot();
  });
});
