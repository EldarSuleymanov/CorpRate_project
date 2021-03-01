import { combineReducers } from 'redux';
import reducerForReview from '../../views/addReviewScreen/redux/reducer';
import { reducerForAllUsers } from '../../views/allUsersScreen/redux';
import reducerForCityCountryGender from '../../views/authenticationScreens/registrationScreen/redux/reducer';
import { reducerForRateOthers } from '../../views/rateOthersScreen/redux';
import reducerSplash from '../../views/splashScreen/redux/reducer';
import reducerForStatistics from '../../views/statisticsScreen/redux/reducer';
import reducerForLogin from '../../views/authenticationScreens/logInScreen/redux/reducer';
import reducerMyRating from '../../views/myRatingScreen/redux/reducer';
import reducerForSettingsScreen from '../../views/settingsScreen/reducer';
import reducerForMyprofile from '../../views/myProfileScreen/redux/reducer';
import reducerChangeInfo from '../../views/changeInfoScreen/redux/reducer';
import reducerForRatingAndComment from '../../views/rateOtherInDetailScreen/redux/reducer';

export const rootReducer = combineReducers({
    reducerSplash,
    reducerForCityCountryGender,
    reducerForReview,
    reducerForStatistics,
    reducerForRateOthers,
    reducerForAllUsers,
    reducerForLogin,
    reducerForMyprofile,
    reducerChangeInfo,
    reducerMyRating,
    reducerForSettingsScreen,
    reducerForRatingAndComment,
});
