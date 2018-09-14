import React from "react";
import { shallow } from "enzyme";
import App from "./App.jsx";
import axios from "axios";

describe("<App />", () => {
  it("renders correctly", () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });

  it("get restaurants on #componentDidMount", async () => {
    const renderedComponent = await shallow(<App />);
    renderedComponent.instance().componentDidMount();
  });
});
