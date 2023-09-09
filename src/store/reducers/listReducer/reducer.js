import { findElementById } from "../../../functions/findElementById";
import { processData } from "../../../functions/processData";
import {
  ADD_LIST,
  EDIT_LIST_NAME,
  OPEN_CHILD_ELEMENT,
  SET_LIST_ITEM,
} from "./actionTypes";

const initialState = processData([
  {
    id: 101,
    name: "Shirts",
    parent_id: null,
  },
  {
    id: 102,
    name: "Scarves",
    parent_id: null,
  },
  {
    id: 103,
    name: "Jeans",
    parent_id: null,
  },
  {
    id: 1011,
    name: "Long Sleeve",
    parent_id: 101,
  },
  {
    id: 1012,
    name: "Short Sleeve",
    parent_id: 1011,
  },
  {
    id: 1031,
    name: "Wide leg",
    parent_id: 103,
  },
  {
    id: 10121,
    name: "Graphic tee",
    parent_id: 1012,
  },
  {
    id: 10122,
    name: "Button down",
    parent_id: 1012,
  },
]);

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
    default:
      return state;
  }
};
