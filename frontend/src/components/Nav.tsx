import { NavLink } from 'react-router-dom';

const RESOURCES = ['posts','comments','albums','photos','todos','users'];

export default function Nav() {
  return (
    <nav style={{display:'flex', flexWrap:'wrap', gap:8, margin:'12px 0'}}>
      {RESOURCES.map((r) => (
        <NavLink
          key={r}
          to={`/${r}`}
          style={({isActive}) => ({
            padding:'6px 10px',
            border:'1px solid #ccc',
            borderRadius:8,
            textDecoration:'none',
            background: isActive ? '#e5e7eb' : '#fff',
            color:'#111'
          })}
        >
          {r}
        </NavLink>
      ))}
    </nav>
  );
}
