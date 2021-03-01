import { filterName, filterPassword } from '../../../../services/utils/filters';
import { selectedDepartment } from '../redux/actions';


export const filterData = (data, selectedCountry) => {
    const list = [];

    data?.city?.map(item => {
        data?.country?.map(element => {
            if (item.country_id === element.country_id && element.country_text === selectedCountry.value) {
                list.push({ label: item.city_text, id: item.city_id, value: item.city_text });
            }
        });
    });
    return list;
};

export const filterBranches = (dataBranch, keywordId, keywordText) => {
    const list = [];

    const branchIdList = dataBranch.authData.map(item => item[keywordId]);
    const uniqueBranchIdList = Array.from(new Set(branchIdList));

    const branchNamesList = dataBranch.authData.map(item => item[keywordText]);
    const uniqueBranchNamesList = Array.from(new Set(branchNamesList));

    for (let counter = 0;counter < uniqueBranchIdList.length;counter++) {
        list.push({
            id: uniqueBranchIdList[counter],
            label: uniqueBranchNamesList[counter],
            value: uniqueBranchNamesList[counter],
        });
    }

    return list;
};


export const filerPasswordMethod = (value) => {
    let regex = filterPassword.test(value);
    if(regex === false){
        return false;
    }else {
        return true;
    }
}

export const filterNameMethod = (value) => {
    let regex = filterName.test(value);
    if(regex === false){
        return false;
    }
    else {
        return true;
    }
}

export const filterDepartments = (dataBranch, selectedBranch) => {
    const list = [];

    dataBranch?.authData?.map(item => {
        if (item.branch_id === selectedBranch.id && item.branch_text === selectedBranch.value) {
            list.push({
                id: item.dept_id,
                value: item.dept_text,
            });
        }
    });

    return list;
};

export const getUniqueDepartments = list => {
    const deptList = [];

    const deptIds = list.map(item => item.id);
    const uniqueDeptIdList = Array.from(new Set(deptIds));

    const deptValues = list.map(item => item.value);
    const uniqueDeptValuesList = Array.from(new Set(deptValues));

    for (let counter = 0;counter < uniqueDeptIdList.length;counter++) {
        deptList.push({
            id: uniqueDeptIdList[counter],
            label: uniqueDeptValuesList[counter],
            value: uniqueDeptValuesList[counter],
        });
    }

    return deptList;
};

export const filterPositions = (data, selectedDepartment) => {
    const positionList = [];

    data.authData.map(item => {
        if (item.dept_id === selectedDepartment.id && item.dept_text === selectedDepartment.value) {
            positionList.push({
                id: item.position_id,
                label: item.position_text,
                value: item.position_text,
            });
        }
    });

    return positionList;
};
