import { select, takeEvery, call, put } from 'redux-saga/effects';
import sendRequest from '../../../services/restApi/sendRequest';
import {requestStringsSecondPart } from '../../../services/utils/utils';
import { SET_DEPT_POSITION} from './actions';
import { setDept, setDeptPosition } from '../redux/actions';
import { getBranchId, getBranchText, getCityId, getUrlFirstPart} from '../../../modules/saga/selectors';
import { filterDepartments, getUniqueDepartments } from '../../authenticationScreens/registrationScreen/logicForRegistration/logic';
import { workerSetItem } from '../../changeInfoScreen/saga';

export function* workerGetDepartments() {
    const cityId = yield select(getCityId);
    const branchId = yield select(getBranchId);
    const branchText = yield select(getBranchText);
    const firstPartOfUrl = yield select(getUrlFirstPart);

    const branchInfo = {
        id: branchId,
        value: branchText,
    };
    const data = yield call(() => sendRequest(
        firstPartOfUrl,
        requestStringsSecondPart.branchDepPosition,
        {city_id: cityId},
    ));

    yield put(setDeptPosition(data));

    const deptList = yield call(() => filterDepartments(data, branchInfo));
    const uniqueDeptList = yield call(() => getUniqueDepartments(deptList));

    yield put(setDept(uniqueDeptList));
    yield call(workerSetItem);
}

export function* watcherDeptPosition() {
    yield takeEvery(SET_DEPT_POSITION, workerGetDepartments);
}
