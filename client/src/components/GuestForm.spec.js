import React from "react";
import GuestForm from "./GuestForm";
import renderer from "react-test-renderer";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("The GuestForm", () => {
  const mockStore = configureStore([thunk]);

  const storeCaseSuccess = mockStore({
    guestForm: { newGuestFormInfo: { success: true } }
  });

  const storeCaseError = mockStore({
    guestForm: { newGuestFormInfo: { success: false } }
  });

  it("renders as expected success store case", () => {
    const tree = renderer
      .create(
        <Provider store={storeCaseSuccess}>
          <GuestForm></GuestForm>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders as expected error store case", () => {
    const tree = renderer
      .create(
        <Provider store={storeCaseError}>
          <GuestForm></GuestForm>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
