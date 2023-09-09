export const addItemById = (state, newItem) => {
  return state.map((item) => {
    if (item.id === newItem.parent_id) {
      item.children = [...item.children, newItem];
    } else if (item.children && item.children.length > 0) {
      addItemById(item.children, newItem);
    }
    return item;
  });
};
