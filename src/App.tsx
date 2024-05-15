import { useState } from "react";
import Input from "./components/Input";

function App() {
  const [results, setResults] = useState("");
  const [plans, setPlans] = useState("");

  const gradientText = {
    background: "linear-gradient(to left, #9FCC2E, #52FFEE)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <div className="flex flex-col gap-2 w-80">
        <div style={gradientText} className="font-extrabold text-4xl">Results:</div>
        <Input value={results} onChange={(e) => setResults(e.target.value)} />
        <div style={gradientText} className="font-extrabold text-4xl">Plans:</div>
        <Input value={plans} onChange={(e) => setPlans(e.target.value)} />
      </div>
    </div>
  );
}

export default App;