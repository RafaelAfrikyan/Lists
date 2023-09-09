export const findElementById = (item, id) => {
  let foundedItem;
  if (item.id === id) {
    foundedItem = item;
  }
  if (item.children) {
    item.children.forEach((childItem) => {
      const foundInChildren = findElementById(childItem, id);
      if (foundInChildren) {
        foundedItem = foundInChildren;
      }
    });
  }

  return foundedItem;
};
