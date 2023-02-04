import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConfigPage, CsvPage, DashboardPage, LogoutPage } from 'pages';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashboardPage />} />
        <Route path='/csv' element={<CsvPage />}/>
        <Route path='/config' element={<ConfigPage />}/>
        <Route path='/logout' element={<LogoutPage />}/>
      </Routes>
    </BrowserRouter>
  );
}
