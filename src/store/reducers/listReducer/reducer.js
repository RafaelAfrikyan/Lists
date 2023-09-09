import { initialState } from "../../../constants/initialState";
import { addItemById } from "../../../functions/addItemById";
import { deleteElementById } from "../../../functions/deleteElementById";
import { findElementById } from "../../../functions/findElementById";

import {
  ADD_CHILD_ITEM,
  ADD_ITEM,
  ADD_LIST,
  DELETE_LIST,
  EDIT_LIST_NAME,
  OPEN_CHILD_ELEMENT,
  SET_LIST_ITEM,
} from "./actionTypes";

export const lists = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST_ITEM:
      return [...state, action.payload.data];
    case EDIT_LIST_NAME:
      const updatedTitleState = state.map((list) => {
        const editedItem = findElementById(list, action.payload.id);
        if (editedItem) {
          editedItem.name = action.payload.title;
        }
        return list;
      });
      return [...updatedTitleState];
    case DELETE_LIST:
      const filteredList = deleteElementById(state, action.payload.id);
      return [...filteredList];
    case ADD_CHILD_ITEM:
      addItemById(state, action.payload);
      return [...state];
    case ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
};
