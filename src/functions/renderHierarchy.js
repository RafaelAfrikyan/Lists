// import { ParentElementComponent } from "../components/ParentElementComponent";

export const renderHierarchy = (items, parentId = null) => {
  return (
    <div>
      {items
        .filter((item) => item.parent_id === parentId)
        .map((item) => (
          <div key={item.id}>
            <p>{item.id}</p>
            <h2>{item.name}</h2>

            {renderHierarchy(items, item.id)}
          </div>
        ))}
    </div>
  );
};
