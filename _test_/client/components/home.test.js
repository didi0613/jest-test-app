import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "client/reducers";

import Home from "client/components/home";
import { mount } from "enzyme";

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
    component = mount(<Provider store={store}><Home /></Provider>, container);
  });

  afterEach(() => {
    component.unmount();
  });

  it("has expected content with deep render", () => {
   expect(component).not.toEqual(false);
  });
});
