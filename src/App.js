import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { selectLists } from "./store/reducers/listReducer/selectors";
import HierarchicalItem from "./components/HierarchicalItem";
import { useState } from "react";
import { addItem } from "./store/reducers/listReducer/actionCreators";
import { NewItemCreator } from "./components/NewItemCreator";

function App() {
  const [newListName, setNewListName] = useState("");
  const lists = useSelector(selectLists);
  const dispatch = useDispatch();

  const addNewList = () => {
    if (newListName.trim()) {
      dispatch(addItem(newListName));
      setNewListName("");
    }
  };

  return (
    <div className="wrapper">
      <NewItemCreator
        newListName={newListName}
        setNewListName={setNewListName}
        addNewList={addNewList}
      />
      {lists
        .filter((item) => item.parent_id === null)
        .map((item) => (
          <HierarchicalItem key={item.id} item={item} items={lists} />
        ))}
    </div>
  );
}

export default App;
