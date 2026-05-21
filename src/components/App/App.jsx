import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/routes/Component/Layout';
import NotFoundPage from '@/routes/Pages/NotFoundPage';
// import RegisterPage from '@/routes/Pages/RegisterPage';
import style from './App.module.css';

const Home = lazy(() => import('@/routes/Pages/Home'));
const PhonebookDetails = lazy(() => import('@/routes/Pages/PhonebookDetails'));
const Description = lazy(() => import('@/routes/Component/Description'));
const LoginPage = lazy(() => import('@/routes/Pages/LoginPage'));

export default function App() {
  return (
    <div className={style.app}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          {/* <Route path="register" element={<RegisterPage />} /> */}

          <Route path="phonebook" element={<PhonebookDetails />}>
            <Route path="description" element={<Description />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}
