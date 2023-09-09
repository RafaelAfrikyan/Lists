export const processData = (lists, parentId = null) => {
  const result = [];

  for (const item of lists) {
    if (!item.children) {
      item.children = [];
    }
    if (item.parent_id === parentId) {
      const children = processData(lists, item.id);
      if (children.length) {
        item.children = children;
      }
      result.push(item);
    }
  }

  return result;
};
