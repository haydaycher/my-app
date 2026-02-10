// import CostItem from "./components/CostItem";
// import "./components/Costs.css";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

function App() {
  const costs = [
    {
      id: "c1",
      date: new Date(2026, 1, 7),
      description: "холодильник",
      amount: 999.99,
    },
    {
      id: "c2",
      date: new Date(2026, 8, 6),
      description: "Macbook Pro",
      amount: 1245.99,
    },
    {
      id: "c3",
      date: new Date(2026, 11, 1),
      description: "Jeans",
      amount: 189.99,
    },
  ];

  const addCostHandler = (cost) => {
    console.log("In App.js");
    console.log(cost);
  };

  return (
    <div>
      <h1>Start</h1>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
