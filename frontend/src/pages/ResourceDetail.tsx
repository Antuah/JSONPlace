import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../api/client';

export default function ResourceDetail() {
  const { resource = 'posts', id = '' } = useParams<{resource: string, id: string}>();
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string>();

  useEffect(() => {
    setLoading(true);
    api.get(`/${resource}/${id}`)
      .then((d) => setData(d))
      .catch((e) => setErr(String(e?.message || e)))
      .finally(() => setLoading(false));
  }, [resource, id]);

  if (loading) return <p>Cargando {resource} #{id}…</p>;
  if (err) return <p>Error: {err}</p>;
  return (
    <div>
      <p><Link to={`/${resource}`}>← Volver a {resource}</Link></p>
      <h2 style={{textTransform:'capitalize'}}>{resource} #{id}</h2>
      <pre style={{whiteSpace:'pre-wrap'}}>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
