import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "client/reducers";

import Home from "client/components/home";
import { mount } from "enzyme";

/* eslint-disable no-magic-numbers, no-undef */

describe("Home", () => {
  let component;
  let container;

  beforeEach(() => {
    const initialState = {
      checkBox: { checked: false },
      number: { value: 999 }
    };
    container = document.createElement("div");
    const store = createStore(rootReducer, initialState);
    component = mount(
      <Provider store={store}>
        <Home />
      </Provider>,
      container
    );
  });

  afterEach(() => {
    component.unmount();
  });

  it("has expected content with deep render", () => {
    expect(component).not.toEqual(false);
  });

  it("has 'Electrode' header", () => {
    const text = "Hello from  Electrode ";
    expect(component.find("h2").text()).toEqual(text);
  });

  it("has 3 items inside accordion", () => {
    expect(component.find("h6").length).toEqual(3);

    const item1 = "Demo Managing States with Redux";
    const item2 = "Demo Managing States in Pure Functional Component";
    const item3 = "demo CSS modules with buttons from skeleton";
    const items = component.find("h6");

    expect(items.at(0).text()).toEqual(item1);
    expect(items.at(1).text()).toEqual(item2);
    expect(items.at(2).text()).toEqual(item3);
  });
});

/* eslint-enable */
