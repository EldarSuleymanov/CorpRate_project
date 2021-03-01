import React from 'react';
import { Text, ScrollView, View } from 'react-native';
import { styles } from './styles';
import { constStrings } from '../../localization';
import AccordionList from '../../components/accordionList';
import { useSelector } from 'react-redux';
import { getMonthName, getTopLastUsers, getYesterdayTop } from './logicForStatistics/logic';
import {getMyAvgToday, getMyAvgCurrentMonth, getMyAvgLastMonth, getLastMonthAvgRating, getYesterdayAvgRating} from '../../modules/saga/selectors';
import Star from '../../assets/svg/StarSvg';
import { colors } from '../../services/config/config';

const StatisticsScreen = () => {

    const myAvgToday = useSelector(getMyAvgToday);
    const myAvgCurrentMonth = useSelector(getMyAvgCurrentMonth);
    const myAvgLastMonth = useSelector(getMyAvgLastMonth);
    const myAvgData = [myAvgToday, myAvgCurrentMonth, myAvgLastMonth];

    const lastMonthAvgRating = useSelector(getLastMonthAvgRating);
    const yesterdayAvgRating = useSelector(getYesterdayAvgRating);

    const topUserData = getTopLastUsers(lastMonthAvgRating, 1, 2, 3);
    const firstFromEnd = lastMonthAvgRating.data?.length;
    const secondFromEnd = lastMonthAvgRating.data?.length - 1;
    const thirdFromEnd = lastMonthAvgRating.data?.length - 2;
    const lastUserData = getTopLastUsers(lastMonthAvgRating, firstFromEnd, secondFromEnd, thirdFromEnd);
    const yesterdayTopList = getYesterdayTop(yesterdayAvgRating);

    const combinedArray = [myAvgData, topUserData, lastUserData, yesterdayTopList];
    const {myAvgRate, today, votes, top3Users, last3Users, yesterdayTop, currentMonth, lastMonth} = constStrings;
    const titles = [myAvgRate, top3Users, last3Users, yesterdayTop];
    const myAvgDataTime = [today, currentMonth, lastMonth];

    const getStars = rateValue => {
        const starsArray = [1, 2, 3, 4, 5];

        return <View style={styles.starsContainer}>
            {
                starsArray.map((item, index) => (
                    <View
                        key={index}
                    >
                        {rateValue < item
                            ? <Star margin={5} color={colors.gray} width = {28} height = {28}/>
                            : <Star margin={5} color={colors.yellow} width = {28} height = {28}/>}
                    </View>
                ))
            }
        </View>;
    };

    return(
        <ScrollView contentContainerStyle={styles.innerContainer} style={styles.container}>
            <View style={styles.innerContainerEmptySpace}></View>
            <View style={styles.accordionListWrapper}>
                {combinedArray.map((item, index) => <AccordionList
                    key={index}
                    title={titles[index]}
                    content={
                        item?.map((element, innerIndex) => {
                            const userName = index !== 0 ? combinedArray[index][innerIndex]?.full_name : myAvgDataTime[innerIndex];
                            const monthName = (index === 0 && innerIndex !== 0) ? `(${getMonthName(myAvgData[innerIndex]?.rate_date)})` : '';
                            const averageRate = Number(combinedArray[index][innerIndex]?.avg_rate).toFixed(1);
                            const voteCount = `${combinedArray[index][innerIndex]?.count_votes})\n`;

                            return (<Text key={innerIndex}>
                                {userName} {monthName} : {averageRate}
                                {votes}: {voteCount}
                                {getStars(averageRate)} {'\n'}
                            </Text>);
                        })}
                />) }
            </View>
        </ScrollView>
    );

};

export default StatisticsScreen;
