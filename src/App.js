import { Routes, Route } from "react-router-dom";
import MainPage from './containers/MainPage';
import NotFoundPage from './containers/NotFoundPage';
import CountryPage from './containers/CountryPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/id" element={<CountryPage />}></Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}

export default App;
