import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { selectLists } from "./store/reducers/listReducer/selectors";
import HierarchicalItem from "./components/HierarchicalItem";
import { useState } from "react";
import { addItem } from "./store/reducers/listReducer/actionCreators";

function App() {
  const lists = useSelector(selectLists);

  const [newListName, setNewListName] = useState("");
  const dispatch = useDispatch();
  const addNewList = () => {
    if (newListName.trim()) {
      dispatch(addItem(newListName));
      setNewListName("");
    }
  };
  return (
    <div className="wrapper">
      <div>
        <input
          value={newListName}
          onChange={(event) => setNewListName(event.target.value)}
        />
        <button onClick={addNewList}>Add new list</button>
      </div>
      {lists
        .filter((item) => item.parent_id === null)
        .map((item) => (
          <HierarchicalItem key={item.id} item={item} items={lists} />
        ))}
    </div>
  );
}

export default App;
