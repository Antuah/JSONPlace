import { Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import ResourceList from './pages/ResourceList';
import ResourceDetail from './pages/ResourceDetail';
import PostsCrud from './pages/PostsCrud';

export default function App() {
  return (
    <div style={{padding:16, maxWidth:1200, margin:'0 auto'}}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<ResourceList />} />
        <Route path="/posts/:id" element={<ResourceDetail />} />
        <Route path="/posts-crud" element={<PostsCrud />} /> {/* NUEVO */}
        <Route path="/:resource" element={<ResourceList />} />
        <Route path="/:resource/:id" element={<ResourceDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
