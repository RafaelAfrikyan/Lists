import { useDispatch } from "react-redux";
import styles from "./styles.module.css";
import DeleteIcon from "./../assets/icons/delete.svg";
import EditIcon from "./../assets/icons/edit.svg";
import AddIcon from "./../assets/icons/add.svg";
import ApplyIcon from "./../assets/icons/apply.jpg";
import Arrow from "./../assets/icons/arrow.svg";

export const Card = ({
  item,
  isOpened,
  deleteItem,
  addItemClick,
  addItemSelected,
  handleItemClick,
  setNewItemTitle,
  changeItemTitle,
  isEditTitleOpened,
  setIsEditTitleOpened,
}) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.item_wrapper}>
      <img
        className={isOpened ? styles.arrow_up : styles.arrow_down}
        onClick={handleItemClick}
        src={Arrow}
        alt="sorry"
      />

      <p>{item.id}</p>
      {!isEditTitleOpened ? (
        <h3 className={styles.item_name}>{item.name}</h3>
      ) : (
        <input
          className={styles.input_title}
          value={item.name}
          onChange={changeItemTitle}
        />
      )}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {!isEditTitleOpened ? (
          <img
            className={styles.button}
            onClick={() => setIsEditTitleOpened(!isEditTitleOpened)}
            src={EditIcon}
            alt="sorry"
          />
        ) : (
          <img
            src={ApplyIcon}
            className={styles.button}
            onClick={() => setIsEditTitleOpened(!isEditTitleOpened)}
          />
        )}

        <img
          className={styles.button}
          onClick={() => {
            dispatch(deleteItem(item.id));
          }}
          src={DeleteIcon}
          alt="sorry"
        />
        {addItemSelected && (
          <input
            className={styles.input}
            onChange={(event) => setNewItemTitle(event.target.value)}
            placeholder="Add item"
          />
        )}

        <img
          className={styles.button}
          onClick={addItemClick}
          src={addItemSelected ? ApplyIcon : AddIcon}
          alt="sorry"
        />
      </div>
    </div>
  );
};
