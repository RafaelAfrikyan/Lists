import { useState } from "react";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { editListTitle } from "../store/reducers/listReducer/actionCreators";
const HierarchicalItem = ({ item, items }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditTitleOpened, setIsEditTitleOpened] = useState(false);
  const dispatch = useDispatch();
  const handleItemClick = () => {
    setIsExpanded(!isExpanded);
  };
  const changeItemTitle = (event) => {
    console.log(event.target.value);
    dispatch(editListTitle(item.id, event.target.value));
  };
  return (
    <div>
      <div className={styles.item_wrapper}>
        <button onClick={handleItemClick}>
          {isExpanded ? "Hide Child" : "Show Child"}
        </button>
        <p>{item.id}</p>
        {!isEditTitleOpened ? (
          <h2>{item.name}</h2>
        ) : (
          <input value={item.name} onChange={changeItemTitle} />
        )}
        {!isEditTitleOpened ? (
          <button onClick={() => setIsEditTitleOpened(!isEditTitleOpened)}>
            Edit
          </button>
        ) : (
          <button onClick={() => setIsEditTitleOpened(!isEditTitleOpened)}>
            Save
          </button>
        )}
      </div>
      {isExpanded && item.children && item.children.length > 0 && (
        <div className={styles.child_items}>
          {item.children.map((child) => (
            <HierarchicalItem key={child.id} item={child} items={items} />
          ))}
        </div>
      )}
    </div>
  );
};
export default HierarchicalItem;
