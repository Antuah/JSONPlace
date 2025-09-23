import { useEffect, useState } from 'react';
import { api } from '../api/client';

type Post = { id?: number; title: string; body: string; userId: number };

export default function PostsCrud() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [form, setForm] = useState<Post>({ title: '', body: '', userId: 1 });
  const [editId, setEditId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string>();

  const load = () => {
    setLoading(true);
    api.get('/posts')
      .then((d) => setPosts(d))
      .catch((e) => setErr(String(e?.message || e)))
      .finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editId) {
        const updated = await api.patch(`/posts/${editId}`, form);
        // Optimistic-ish: si JSONPlaceholder no persiste, reflejamos localmente
        setPosts(ps => ps.map(p => p.id === editId ? { ...p, ...updated } : p));
        setEditId(null);
      } else {
        const created = await api.post('/posts', form);
        setPosts(ps => [{ ...created }, ...ps]);
      }
      setForm({ title: '', body: '', userId: 1 });
    } catch (e:any) {
      alert(e.message || e);
    }
  };

  const onEdit = (p: Post) => {
    setEditId(p.id!);
    setForm({ title: p.title, body: p.body, userId: p.userId });
  };

  const onDelete = async (id: number) => {
    if (!confirm('¿Eliminar este post?')) return;
    try {
      await api.del(`/posts/${id}`);
      setPosts(ps => ps.filter(p => p.id !== id));
    } catch (e:any) {
      alert(e.message || e);
    }
  };

  if (loading) return <p>Cargando posts…</p>;
  if (err) return <p>Error: {err}</p>;

  return (
    <div>
      <h2>CRUD de Posts</h2>
      <form onSubmit={onSubmit} style={{display:'grid', gap:8, maxWidth:520, margin:'12px 0'}}>
        <input
          placeholder="Título"
          value={form.title}
          onChange={e=>setForm({...form, title:e.target.value})}
          required
        />
        <textarea
          placeholder="Contenido"
          value={form.body}
          onChange={e=>setForm({...form, body:e.target.value})}
          required
        />
        <input
          type="number"
          min={1}
          placeholder="userId"
          value={form.userId}
          onChange={e=>setForm({...form, userId:Number(e.target.value)})}
          required
        />
        <button type="submit">{editId ? 'Actualizar' : 'Crear'}</button>
        {editId && <button type="button" onClick={() => { setEditId(null); setForm({title:'',body:'',userId:1}); }}>Cancelar edición</button>}
      </form>

      <ul style={{listStyle:'none', padding:0}}>
        {posts.slice(0, 20).map(p => (
          <li key={p.id} style={{border:'1px solid #eee', padding:12, borderRadius:8, marginBottom:8}}>
            <b>#{p.id}</b> — {p.title}
            <div style={{marginTop:6, fontSize:14, color:'#444'}}>{p.body}</div>
            <div style={{marginTop:8, display:'flex', gap:8}}>
              <button onClick={()=>onEdit(p)}>Editar</button>
              <button onClick={()=>onDelete(p.id!)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
