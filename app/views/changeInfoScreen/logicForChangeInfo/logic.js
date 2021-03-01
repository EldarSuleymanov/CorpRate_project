import { filterName, filterPassword } from '../../../services/utils/filters';

export const filterPasswordMethod = (value) => {
    const regex = filterPassword.test(value);

    if(regex === false) {
        return false;
    }

    return true;

};

export const filterNameMethod = (value) => {
    const regex = filterName.test(value);

    if(regex === false) {
        return false;
    }

    return true;

};
