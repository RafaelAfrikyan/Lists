import { initialState } from "../../../constants/initialState";
import { addItemById } from "../../../functions/addItemById";
import { deleteElementById } from "../../../functions/deleteElementById";
import { findElementById } from "../../../functions/findElementById";

import {
  ADD_CHILD_ITEM,
  ADD_ITEM,
  DELETE_ITEM,
  EDIT_ITEM_NAME,
  SET_ITEM,
} from "./actionTypes";

export const lists = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEM:
      return [...state, action.payload.data];

    case EDIT_ITEM_NAME:
      const editedTitleState = state.map((list) => {
        const editedItem = findElementById(list, action.payload.id);
        if (editedItem) {
          editedItem.name = action.payload.title;
        }
        return list;
      });
      return [...editedTitleState];

    case DELETE_ITEM:
      const deletedItemState = deleteElementById(state, action.payload.id);
      return [...deletedItemState];

    case ADD_CHILD_ITEM:
      addItemById(state, action.payload);
      return [...state];

    case ADD_ITEM:
      return [...state, action.payload];

    default:
      return state;
  }
};
