import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div>
      <h1>JSONPlaceholder Viewer (PWA)</h1>
      <p>Selecciona un recurso en la barra superior.</p>
      <p><Link to="/posts-crud">Ir al CRUD de Posts</Link></p>
    </div>
  );
}
