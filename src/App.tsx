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

  const sendMessage = async () => {
    const chatId = '798698474';

    const botToken = import.meta.env.VITE_BOT_TOKEN as string;
    const text = `✅**Results**: ${results}\n 📅**Plans**: ${plans}`;

    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`);
  };

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <div className="flex flex-col gap-2 w-80">
        <div style={gradientText} className="font-extrabold text-4xl">Results:</div>
        <Input value={results} onChange={(e) => setResults(e.target.value)} />
        <div style={gradientText} className="font-extrabold text-4xl">Plans:</div>
        <Input value={plans} onChange={(e) => setPlans(e.target.value)} />
        <button className="h-10 w-full p-10 bg-green flex items-center justify-center text-2xl font-bold rounded" disabled={results.length === 0 || plans.length === 0} onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;