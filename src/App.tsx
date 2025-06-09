import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import AboutDepartment from './pages/AboutDepartment';
import AboutFest from './pages/AboutFest';
import Blogs from './pages/Blogs';
import MetaMaterial from './pages/MetaMaterial';
import NotFound from './pages/NotFound';
import BlogDetail from './pages/BlogDetail';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-department" element={<AboutDepartment />} />
          <Route path="/about-fest" element={<AboutFest />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/meta-material" element={<MetaMaterial />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;