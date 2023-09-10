import {
  ADD_CHILD_ITEM,
  ADD_ITEM,
  DELETE_ITEM,
  EDIT_ITEM_NAME,
  SET_ITEM,
} from "./actionTypes";

export const setItem = (data) => ({
  type: SET_ITEM,
  payload: {
    data,
  },
});

export const editItemTitle = (id, title) => ({
  type: EDIT_ITEM_NAME,
  payload: {
    id,
    title,
  },
});

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  payload: {
    id,
  },
});
export const addChildItem = (id, parent_id, name) => ({
  type: ADD_CHILD_ITEM,
  payload: {
    id,
    parent_id,
    name,
    children: [],
  },
});

export const addItem = (name) => ({
  type: ADD_ITEM,
  payload: {
    id: Date.now(),
    parent_id: null,
    children: [],
    name,
  },
});
