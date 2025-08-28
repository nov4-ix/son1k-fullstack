import React, { useState } from "react";
import { generateMusic, getTask, ghostProcess, ghostStatus } from "./lib/api";

export default function App() {
  const [prompt, setPrompt] = useState("synthwave neon night ride");
  const [taskId, setTaskId] = useState("");
  const [status, setStatus] = useState("");

  async function submitAPI() {
    const resp = await generateMusic(prompt, 12, true);
    setTaskId(resp.task_id);
    setStatus("queued");
    poll(resp.task_id);
  }
  async function poll(id: string) {
    const interval = setInterval(async () => {
      const res = await getTask(id);
      if (res.state === "SUCCESS") {
        setStatus("done: " + JSON.stringify(res.result));
        clearInterval(interval);
      } else {
        setStatus(res.state);
      }
    }, 2000);
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Son1k Forge UI</h1>
      <textarea value={prompt} onChange={e=>setPrompt(e.target.value)} className="border p-2 w-full mt-4" />
      <button onClick={submitAPI} className="bg-pink-600 px-4 py-2 rounded mt-4 text-white">Generate (API)</button>
      <div className="mt-4">Task: {taskId} — {status}</div>
    </div>
  );
}