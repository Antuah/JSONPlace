type Props = { data: any[]; resource: string };

export default function ResourceTable({ data, resource }: Props) {
  if (!data?.length) return <p>No hay datos.</p>;

  // Heurística: primeras 4 keys para tabla simple
  const keys = Array.from(
    data.reduce<Set<string>>((acc, obj) => {
      Object.keys(obj).forEach(k => acc.add(k));
      return acc;
    }, new Set())
  ).slice(0, 4);

  return (
    <div style={{overflowX:'auto'}}>
      <table style={{borderCollapse:'collapse', width:'100%'}}>
        <thead>
          <tr>
            {keys.map(k => (
              <th key={k} style={{border:'1px solid #ddd', padding:8, textAlign:'left'}}>
                {k}
              </th>
            ))}
            <th style={{border:'1px solid #ddd', padding:8}}>acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row:any) => (
            <tr key={row.id ?? JSON.stringify(row)}>
              {keys.map(k => (
                <td key={k} style={{border:'1px solid #eee', padding:8}}>
                  {/* Vista especial para photos */}
                  {resource === 'photos' && k === 'thumbnailUrl'
                    ? <img src={row[k]} alt={row.title ?? ''} width={50} height={50} loading="lazy" />
                    : String(row[k])
                  }
                </td>
              ))}
              <td style={{border:'1px solid #eee', padding:8}}>
                {row.id && <a href={`/${resource}/${row.id}`}>ver</a>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
