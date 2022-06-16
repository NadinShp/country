import 'modern-normalize/modern-normalize.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import {getCountries} from './containers/MainPage/actions';
import {Suspense, lazy, memo, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, GlobalStyles } from './theme';
import {chooseTheme} from './containers/MainPage/actions';
import Loader from './components/Loader';
import './global/styles/index.css';

const NotFound = lazy(() => import('./containers/NotFound'));
const MainPage = lazy(() => import ('./containers/MainPage'));
const CountryPage = lazy(() => import('./containers/CountryPage'));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries.request());
  }, [dispatch]);

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }
  useEffect(() => {
    dispatch(chooseTheme(chooseTheme(theme)));
  }, [dispatch, setTheme, theme]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header onClick={toggleTheme} isDark={theme==='dark'}/>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path = "/" element = {<MainPage />} />
          <Route path = "/:countryId" element = {<CountryPage />} />
          <Route path = "*" element = {<NotFound />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default memo(App);
