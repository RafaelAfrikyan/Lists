import "./App.css";
import { useSelector } from "react-redux";
import { selectLists } from "./store/reducers/listReducer/selectors";
import HierarchicalItem from "./components/HierarchicalItem";
function App() {
  const lists = useSelector(selectLists);

  return (
    <div>
      {lists
        .filter((item) => item.parent_id === null)
        .map((item) => (
          <HierarchicalItem key={item.id} item={item} items={lists} />
        ))}
    </div>
  );
}

export default App;
