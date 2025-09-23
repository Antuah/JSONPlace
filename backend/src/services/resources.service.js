import { jpFetch } from '../http/jsonplaceholder.client.js';

export const ResourcesService = {
  list: (resource) => jpFetch(`/${resource}`),
  getById: (resource, id) => jpFetch(`/${resource}/${id}`),

  // NUEVO:
  create: (resource, body) =>
    jpFetch(`/${resource}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }),

  update: (resource, id, body, method = 'PUT') =>
    jpFetch(`/${resource}/${id}`, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }),

  remove: (resource, id) =>
    jpFetch(`/${resource}/${id}`, { method: 'DELETE' })
};
