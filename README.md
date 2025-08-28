# 🎶 Son1k Fullstack

Stack completo para generación musical por IA: **API (FastAPI)** + **Celery/Redis** (workers CPU/GPU) + **Ghost Backend** + **Frontend React (Vite)**.

> Manifiesto: “No compongo para encajar… Creo canciones como se forjan espadas…”

---

## 🚀 Quickstart (Docker)

> macOS: instala [Docker Desktop](https://docs.docker.com/desktop/install/mac/) (en Mac no hay CUDA; el worker GPU real corre en una VM con NVIDIA o RunPod. El stub funciona localmente).

```bash
# Clona y entra
git clone https://github.com/nov4-ix/son1k-fullstack
cd son1k-fullstack

# Variables de entorno
cp son1k/.env.example son1k/.env
cp ghost-studio/backend/.env.example ghost-studio/backend/.env
cp web/.env.example web/.env

# Levantar servicios base (redis, api, worker CPU, flower, ghost, web)
docker compose up --build -d

# (Opcional) worker GPU: en Mac se usa STUB; para GPU real usa una VM con NVIDIA
docker compose --profile gpu up --build -d worker-gpu
