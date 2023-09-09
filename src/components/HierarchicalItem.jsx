import { useState } from "react";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import {
  addChildItem,
  deleteList,
  editListTitle,
} from "../store/reducers/listReducer/actionCreators";

const HierarchicalItem = ({ item, items }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [newItemTitle, setNewItemTitle] = useState("");
  const [isEditTitleOpened, setIsEditTitleOpened] = useState(false);
  const [addItemSelected, isAddItemSelected] = useState(false);

  const dispatch = useDispatch();

  const handleItemClick = () => {
    setIsOpened(!isOpened);
  };

  const changeItemTitle = (event) => {
    dispatch(editListTitle(item.id, event.target.value));
  };

  const addItemClick = () => {
    if (!addItemSelected) {
      isAddItemSelected(true);
    } else {
      dispatch(addChildItem(Date.now(), item.id, newItemTitle));
      isAddItemSelected(false);
    }
  };
  return (
    <div>
      <div className={styles.item_wrapper}>
        <button onClick={handleItemClick}>
          {isOpened ? "Hide Child" : "Show Child"}
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
        <button
          onClick={() => {
            dispatch(deleteList(item.id));
          }}
        >
          Delete
        </button>

        <button onClick={addItemClick}>
          {addItemSelected ? "Save" : "Add item"}
        </button>

        {addItemSelected && (
          <input
            onChange={(event) => setNewItemTitle(event.target.value)}
            placeholder="Add item"
          />
        )}
      </div>
      {isOpened && item.children && item.children.length > 0 && (
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
