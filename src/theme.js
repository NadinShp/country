import {createGlobalStyle} from "styled-components";

export const darkTheme = {
    body: '#202c37',
    textColor: '#fff',
    headerBg: '#2b3945',
    search: '#fff',
    information: '#cbd5e1',
  }

export const lightTheme = {
    body: '#f8f8ff',
    textColor: '#000',
    headerBg: '#fff',
    search: '#cacaca',
    information: '#2b3945',
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
  .filterByName {
    background: ${props => props.theme.headerBg};
    color: ${props => props.theme.search};
   }
  .iconSearch {
    fill: ${props => props.theme.search};
    color: ${props => props.theme.search};
   }
  .filterByName.inputSearch {
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
   `