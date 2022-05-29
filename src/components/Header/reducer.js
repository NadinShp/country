// import { createReducer } from '@reduxjs/toolkit';
// import {toggle} from './actions';

// const initialState = {
//     isDark: window.matchMedia('(prefers-color-scheme: dark)').matches,
// }

// const theme = createReducer(initialState, {
//     [toggle]: (state, {payload}) => {
//         state.isDark: !state.isDark;
//         document.querySelector('body').classList.toggle('dark-theme');
//     },
// });

// export default theme;


// // const themeSlice = createSlice({
// //   name: 'theme',
// //   initialState: {
// //     isDark: window.matchMedia('(prefers-color-scheme: dark)').matches,
// //   },
// //   reducers: {
// //     toggle(state) {
// //       state.isDark = !state.isDark;
// //       document.querySelector('body').classList.toggle('dark-theme');
// //     },
// //   },
// // });

// // const { reducer: themeReducer, actions: themeActions } = themeSlice;

// // export { themeReducer as default, themeActions };