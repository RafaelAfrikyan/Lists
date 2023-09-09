import { processData } from "../functions/processData";

export const initialState = processData([
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
