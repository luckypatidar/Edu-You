import { useState, useEffect } from "react";
import axios from "axios";

let listeners = [];

let state = {
  data: null,
  error: null,
  sidebar: false,
  modal: false,
  video: false,
  request: {
    modal: false,
    text: "",
  },
};

const actions = {
  fetch: async () => {
    try {
      const response = await axios.get(
        // Change with your database path
        "/api/data"
      );
      state = { ...state, data: response.data };
    } catch (err) {
      state = { ...state, error: err };
    }

    for (const listener of listeners) {
      listener(state);
    }
  },
  toogleSidebar: () => {
    state = { ...state, sidebar: !state.sidebar };

    for (const listener of listeners) {
      listener(state);
    }
  },
  toogleModal: () => {
    state = { ...state, modal: !state.modal };

    for (const listener of listeners) {
      listener(state);
    }
  },
  toogleRequest: (payload) => {
    state = {
      ...state,
      request: { modal: !state.request.modal, text: payload },
    };

    for (const listener of listeners) {
      listener(state);
    }
  },
  toogleVideo: () => {
    state = { ...state, video: !state.video };

    for (const listener of listeners) {
      listener(state);
    }
  },
};

export const useCustomState = () => {
  const setState = useState(state)[1];

  useEffect(() => {
    listeners.push(setState);

    return () => {
      listeners = listeners.filter((li) => li !== setState);
    };
  }, [setState]);

  return [state, actions];
};
