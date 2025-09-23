const BASE = process.env.JSONPLACEHOLDER_BASE || 'https://jsonplaceholder.typicode.com';

export async function jpFetch(path, init) {
  const res = await fetch(`${BASE}${path}`, init);
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`Upstream error ${res.status}: ${body}`);
  }
  return res.status === 204 ? null : res.json();
}
