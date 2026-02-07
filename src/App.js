import CostItem from "./components/CostItem";

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
      <CostItem
        date={costs[0].date}
        description={costs[0].description}
        amount={costs[0].amount}
      />
      <CostItem
        date={costs[1].date}
        description={costs[1].description}
        amount={costs[1].amount}
      />
      <CostItem
        date={costs[2].date}
        description={costs[2].description}
        amount={costs[2].amount}
      />
    </div>
  );
}

export default App;
