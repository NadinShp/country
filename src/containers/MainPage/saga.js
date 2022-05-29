import {all, takeLatest, call, put} from 'redux-saga/effects';
import  MainPageService  from './service';
import {getCountries} from './actions';
import helper from './helpers';

export function* getCountriesSaga(){
    try {
        const response = yield call(MainPageService.getCountries);
        const countries = response.data.map(helper);
        yield put(getCountries.success(countries));
    } catch(error) {
        console.log(error);
    };
}

export function*  mainPageWatcherSaga(){
    yield all([
        takeLatest(getCountries.REQUEST, getCountriesSaga),
    ])
}