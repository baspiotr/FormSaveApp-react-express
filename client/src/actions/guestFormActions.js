import { NEW_GUEST_FORM } from "./types";

import config from "../config";

export const createNewGuestForm = data => dispatch => {
  const url = config.apiURL + "/api/v1/guest-forms";

  fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      dispatch({
        type: NEW_GUEST_FORM,
        payload: res
      });
    });
};
