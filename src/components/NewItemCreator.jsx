import styles from "./styles.module.css";

export const NewItemCreator = ({ newListName, setNewListName, addNewList }) => {
  return (
    <div className={styles.item_creator_wrapper}>
      <input
        placeholder="add item title"
        value={newListName}
        onChange={(event) => setNewListName(event.target.value)}
      />
      <button onClick={addNewList}>Add new Item</button>
    </div>
  );
};
