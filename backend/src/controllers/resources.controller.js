import { ResourcesService } from '../services/resources.service.js';

const allowed = new Set(['posts','comments','albums','photos','todos','users']);

function ensureAllowed(resource, res) {
  if (!allowed.has(resource)) {
    res.status(404).json({ error: 'Not found' });
    return false;
  }
  return true;
}

export async function list(req, res, next) {
  try {
    const { resource } = req.params;
    if (!ensureAllowed(resource, res)) return;
    const data = await ResourcesService.list(resource);
    res.json(data);
  } catch (e) { next(e); }
}

export async function detail(req, res, next) {
  try {
    const { resource, id } = req.params;
    if (!ensureAllowed(resource, res)) return;
    const data = await ResourcesService.getById(resource, id);
    res.json(data);
  } catch (e) { next(e); }
}

export async function createOne(req, res, next) {
  try {
    const { resource } = req.params;
    if (!ensureAllowed(resource, res)) return;
    const created = await ResourcesService.create(resource, req.body);
    res.status(201).json(created);
  } catch (e) { next(e); }
}

export async function updateOne(req, res, next) {
  try {
    const { resource, id } = req.params;
    if (!ensureAllowed(resource, res)) return;
    const method = req.method; // PUT o PATCH
    const updated = await ResourcesService.update(resource, id, req.body, method);
    res.json(updated);
  } catch (e) { next(e); }
}

export async function deleteOne(req, res, next) {
  try {
    const { resource, id } = req.params;
    if (!ensureAllowed(resource, res)) return;
    await ResourcesService.remove(resource, id);
    res.status(204).send();
  } catch (e) { next(e); }
}
