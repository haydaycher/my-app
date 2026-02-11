// import CostItem from "./components/CostItem";
// import "./components/Costs.css";
import React, { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2022, 1, 7),
    description: "Fridge",
    amount: 999.99,
  },
  {
    id: "c2",
    date: new Date(2021, 8, 6),
    description: "Macbook Pro",
    amount: 1245.99,
  },
  {
    id: "c3",
    date: new Date(2020, 11, 1),
    description: "Jeans",
    amount: 189.99,
  },
];

function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts((previousCosts) => [cost, ...previousCosts]);
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
