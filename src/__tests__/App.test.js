import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import "../../setupTests";

describe("App", () => {
  const app = shallow(<App />);
  it("renders without crashing", () => {
    expect(app).toMatchSnapshot();
  });
});
