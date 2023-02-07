import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BillToPayPage, BillToReceivePage, ConfigPage, CsvPage, HomePage, LogoutPage } from 'pages';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/csv' element={<CsvPage />}/>
        <Route path='/conta_a_pagar' element={<BillToPayPage />}/>
        <Route path='/conta_a_receber' element={<BillToReceivePage />}/>
        <Route path='/config' element={<ConfigPage />}/>
        <Route path='/logout' element={<LogoutPage />}/>
      </Routes>
    </BrowserRouter>
  );
}
