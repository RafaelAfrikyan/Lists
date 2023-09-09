import {
  ADD_LIST,
  EDIT_LIST_NAME,
  OPEN_CHILD_ELEMENT,
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

export const addList = (id, parent_id, name) => ({
  type: ADD_LIST,
  payload: {
    id,
    parent_id,
    name,
  },
});
