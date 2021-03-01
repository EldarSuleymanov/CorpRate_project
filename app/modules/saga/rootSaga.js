import { spawn } from 'redux-saga/effects';
import { watcherAllUsers } from '../../views/allUsersScreen/saga';
import { watcherForCityList, watcherForRegistration } from '../../views/authenticationScreens/registrationScreen/saga';
import { watcherChangeInfo, watcherSetItem} from '../../views/changeInfoScreen/saga';
import { watcherDataSearch } from '../../views/myRatingScreen/saga';
import { watcherRateOthers } from '../../views/rateOthersScreen/saga';
import { watcherSplash } from '../../views/splashScreen/saga';
import { watcherForStatistics } from '../../views/statisticsScreen/saga';
import { watcherSendInfo } from '../../views/authenticationScreens/logInScreen/saga';
import { watcherSendReview } from '../../views/addReviewScreen/saga';
import { watcherRatingAndComment, watcherRatingAndCommentByDate } from '../../views/rateOtherInDetailScreen/saga';

export default function* rootSaga() {
    yield spawn(watcherSplash);
    yield spawn(watcherForCityList);
    yield spawn(watcherForRegistration);
    yield spawn(watcherForStatistics);
    yield spawn(watcherRateOthers);
    yield spawn(watcherAllUsers);
    yield spawn(watcherSendInfo);
    yield spawn(watcherChangeInfo);
    yield spawn(watcherSetItem);
    yield spawn(watcherDataSearch);
    yield spawn(watcherSendReview);
    yield spawn(watcherRatingAndComment);
    yield spawn(watcherRatingAndCommentByDate);
}
