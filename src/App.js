// import CostItem from "./components/CostItem";
// import "./components/Costs.css";
import Costs from "./components/Costs/Costs";

function App() {
  const costs = [
    {
      date: new Date(2026, 1, 7),
      description: "холодильник",
      amount: 999.99,
    },
    {
      date: new Date(2026, 8, 6),
      description: "Macbook Pro",
      amount: 1245.99,
    },
    {
      date: new Date(2026, 11, 1),
      description: "Jeans",
      amount: 189.99,
    },
  ];

  return (
    <div>
      <h1>Start</h1>
      <Costs costs={costs} />
    </div>
  );
}

export default App;
