import {constStrings} from '../../../localization';

export const getMonthName = monthName => {
    switch(monthName) {
    case 'January':
        return constStrings.monthNames.january;
    case 'February':
        return constStrings.monthNames.february;
    case 'March':
        return constStrings.monthNames.march;
    case 'April':
        return constStrings.monthNames.april;
    case 'May':
        return constStrings.monthNames.may;
    case 'June':
        return constStrings.monthNames.june;
    case 'July':
        return constStrings.monthNames.july;
    case 'August':
        return constStrings.monthNames.august;
    case 'September':
        return constStrings.monthNames.september;
    case 'October':
        return constStrings.monthNames.october;
    case 'November':
        return constStrings.monthNames.november;
    case 'December':
        return constStrings.monthNames.december;
    default:
        return '';
    }
};

export const getTopLastUsers = ({ data }, firstPosition, secondPosition, thirdPosition) => {
    let userList = [];

    if (data?.length >= 1) {
        userList = data.filter(item => item.position === firstPosition);
        if (data.length >= 2) {
            data.map(item => {
                item.position === secondPosition ? userList.push(item) : 'do nothing!';
            });
            if (data.length >= 3) {
                data.map(item => {
                    item.position === thirdPosition ? userList.push(item) : 'do nothing!';
                });
            }
        }
    }
    return userList;
};

export const getYesterdayTop = ({ data }) => {
    const yesterdayTop = [];

    if (data?.length > 0) {
        data.map(item => {
            item.position === 1 ? yesterdayTop.push(item) : 'do nothing!';
        });
    }

    return yesterdayTop;
};