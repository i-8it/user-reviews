import React from "react";
import { shallow } from "enzyme";
import App from "./App";

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

// describe("App", () => {
//   it("componentDidMount should fetch, and put resturants in state if ok", async () => {
//     const renderedComponent = await shallow(<App />);
//     await renderedComponent.update();
//     expect(renderedComponent.state("allData").length).toEqual(500);
//   });
// });
