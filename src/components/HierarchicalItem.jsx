import { useState } from "react";
import { Card } from "./Card";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import {
  addChildItem,
  deleteItem,
  editItemTitle,
} from "../store/reducers/listReducer/actionCreators";

const HierarchicalItem = ({ item, items }) => {
  const dispatch = useDispatch();
  const [isOpened, setIsOpened] = useState(false);
  const [newItemTitle, setNewItemTitle] = useState("");
  const [addItemSelected, isAddItemSelected] = useState(false);
  const [isEditTitleOpened, setIsEditTitleOpened] = useState(false);

  const handleItemClick = () => {
    setIsOpened(!isOpened);
  };

  const changeItemTitle = (event) => {
    dispatch(editItemTitle(item.id, event.target.value));
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
      <Card
        item={item}
        isOpened={isOpened}
        deleteItem={deleteItem}
        addItemClick={addItemClick}
        addItemSelected={addItemSelected}
        setNewItemTitle={setNewItemTitle}
        handleItemClick={handleItemClick}
        changeItemTitle={changeItemTitle}
        isEditTitleOpened={isEditTitleOpened}
        setIsEditTitleOpened={setIsEditTitleOpened}
      />
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
