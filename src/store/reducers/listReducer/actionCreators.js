import {
  ADD_CHILD_ITEM,
  ADD_ITEM,
  DELETE_LIST,
  EDIT_LIST_NAME,
  SET_LIST_ITEM,
} from "./actionTypes";

export const setListItem = (data) => ({
  type: SET_LIST_ITEM,
  payload: {
    data,
  },
});

export const editListTitle = (id, title) => ({
  type: EDIT_LIST_NAME,
  payload: {
    id,
    title,
  },
});

export const deleteList = (id) => ({
  type: DELETE_LIST,
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
