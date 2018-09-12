import React from "react";
import { shallow } from "enzyme";
import App from "./App.jsx";

describe("<App />", () => {
  it("should render a <div>", () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});

// describe("<App />", () => {
//   it("renders without crashing", () => {
//     const wrapper = shallow(<App />).dive();
//   });
// });
