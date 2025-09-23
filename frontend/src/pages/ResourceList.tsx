import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../api/client';
import ResourceTable from '../components/ResourceTable';

export default function ResourceList() {
  const { resource = 'posts' } = useParams<{resource: string}>();
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string>();

  useEffect(() => {
    setLoading(true);
    api.get(`/${resource}`)
      .then((d) => setData(d))
      .catch((e) => setErr(String(e?.message || e)))
      .finally(() => setLoading(false));
  }, [resource]);

  if (loading) return <p>Cargando {resource}…</p>;
  if (err) return <p>Error: {err}</p>;
  return (
    <div>
      <h2 style={{textTransform:'capitalize'}}>{resource}</h2>
      <ResourceTable data={data} resource={resource} />
    </div>
  );
}
