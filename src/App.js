import Count from "./components/Count";
import "./styles.css";
import { useDispatch } from "react-redux";
export default function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={(e) => dispatch({ type: "increment" })}>increase</button>
      <Count />
      <button onClick={(e) => dispatch({ type: "decrement" })}>decrease</button>
    </div>
  );
}
