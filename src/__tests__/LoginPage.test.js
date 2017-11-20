import React from "react";
import { shallow } from "enzyme";
import App from "../components/pages/LoginPage";
import "../../setupTests";

describe("LoginPage", () => {
  const loginPage = shallow(<App />);
  it("renders without crashing", () => {
    expect(loginPage).toMatchSnapshot();
  });
});
