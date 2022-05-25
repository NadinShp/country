import {all, takeLatest, call} from 'redux-saga/effects';
import  MainPageService  from './service';
import * as actions from './actions';

export function* getCountriesSaga(){
    try {
        const response = yield call(MainPageService.getCountries);
        console.log(response);
    // yield put(actions.getMainPageData.success(mappedData))
    } catch(error) {
        console.log(error);
    };
}

export function*  mainPageWatcherSaga(){
    yield all([
        takeLatest(actions.getMainPageData.REQUEST, getCountriesSaga),
    ])
}