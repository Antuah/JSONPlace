const BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3000/api';

async function handle(res: Response) {
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.status === 204 ? null : res.json();
}

export const api = {
  get: (path: string) => fetch(`${BASE}${path}`).then(handle),
  post: (path: string, body: unknown) =>
    fetch(`${BASE}${path}`, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(body)
    }).then(handle),
  put: (path: string, body: unknown) =>
    fetch(`${BASE}${path}`, {
      method: 'PUT',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(body)
    }).then(handle),
  patch: (path: string, body: unknown) =>
    fetch(`${BASE}${path}`, {
      method: 'PATCH',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(body)
    }).then(handle),
  del: (path: string) =>
    fetch(`${BASE}${path}`, { method:'DELETE' }).then(handle),
};
