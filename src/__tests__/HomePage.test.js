import React from "react";
import { shallow } from "enzyme";
import App from "../components/pages/HomePage";
import "../../setupTests";

describe("LoginPage", () => {
  const homePage = shallow(<App />);
  it("renders without crashing", () => {
    expect(homePage).toMatchSnapshot();
  });
});
