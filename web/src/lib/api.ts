import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8000";
const GHOST_BASE = import.meta.env.VITE_GHOST_BASE || "http://localhost:8081";

export async function generateMusic(prompt: string, duration: number, use_gpu: boolean) {
  const { data } = await axios.post(`${API_BASE}/generate-music`, { prompt, duration, use_gpu });
  return data;
}
export async function getTask(taskId: string) {
  const { data } = await axios.get(`${API_BASE}/tasks/${taskId}`);
  return data;
}
export async function ghostProcess(job_id: string, style: string, duration: number, use_gpu: boolean) {
  const { data } = await axios.post(`${GHOST_BASE}/jobs/process`, { job_id, style, duration, use_gpu });
  return data;
}
export async function ghostStatus(job_id: string) {
  const { data } = await axios.get(`${GHOST_BASE}/jobs/${job_id}/status`);
  return data;
}