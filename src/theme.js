import {createGlobalStyle} from 'styled-components';

export const darkTheme = {
    body: '#202c37',
    textColor: '#fff',
    headerBg: '#2b3945',
    search: '#fff',
    information: '#cbd5e1',
    hover: '#64748b',
  }

export const lightTheme = {
    body: '#f8f8ff',
    textColor: '#000',
    headerBg: '#fff',
    search: '#cacaca',
    information: '#2b3945',
    hover: 'rgb(0 0 0 / 5%)',
  }

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${props => props.theme.body};
    color: ${props => props.theme.textColor};
    transition: .3s ease;
  }
  a {
    color: ${props => props.theme.textColor};
  }
  header{
    background: ${props => props.theme.headerBg};
  }
  button {
    color: ${props => props.theme.textColor}
  }
  .iconSearch {
    fill: ${props => props.theme.search};
    color: ${props => props.theme.search};
   }
  .inputSearch::placeholder {
    color: ${props => props.theme.textColor};
  }
  .itemCountry {
    background: ${props => props.theme.headerBg};
   }
  .countryInfo {
    color:${props => props.theme.information};
  }
  .backBtn {
    background: ${props => props.theme.headerBg};
  }
  .borderBtn {
    background: ${props => props.theme.headerBg};
    color:${props => props.theme.information};
  }
  .detailInfo {
    color:${props => props.theme.information};
  }
  .formControl {
    background: ${props => props.theme.headerBg};
  }
  .selectControl {
    color: ${props => props.theme.textColor};
    background: ${props => props.theme.headerBg};
  }
  .filterInput {
    color: ${props => props.theme.textColor};
    background: ${props => props.theme.headerBg};
  }
  .selectBox, .selectHeader {
    color: ${props => props.theme.information};
    background: ${props => props.theme.headerBg};
  }
  .option:hover, option-focus {
    background: ${props => props.theme.hover}
  }
   `