import {all} from 'redux-saga/effects';
import {mainPageWatcherSaga} from './containers/MainPage/saga';

export default function* rootSaga(){
    yield all([mainPageWatcherSaga()]);
}