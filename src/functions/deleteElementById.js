export const deleteElementById = (state, id) => {
  return state.filter((item) => {
    if (item.id === id) {
      return false;
    } else if (item.children && item.children.length > 0) {
      item.children = deleteElementById(item.children, id);
    }
    return true;
  });
};
