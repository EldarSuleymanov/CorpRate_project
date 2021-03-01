import React, { useState, useRef } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Transition, Transitioning } from 'react-native-reanimated';
import {styles} from './styles';
import {Plus} from '../../assets/svg/plusSvg';
import {Minus} from '../../assets/svg/minusSvg';

const AccordionList = ({ title, content}) => {
    const [currentIndex, setCurrentIndex] = useState(null);
    const ref = useRef();
    const [open, setOpen] = useState(false);

    const transition = (
        <Transition.Together>
            <Transition.In type='fade' durationMs={900} />
            <Transition.Change />
            <Transition.Out type='fade' durationMs={200} />
        </Transition.Together>
    );

    const data = [
        {
            category: title,
            subCategories: [
                content,
            ],
        },
    ];

    return (
        <Transitioning.View
            ref={ref}
            transition={transition}
            style={[styles.container,
                open ? styles.listBodyOpen : styles.listBodyClose,
            ]}
        >
            {data.map(({ category, subCategories }, index) => (
                <View key={category}>
                    <View style={styles.card}>
                        <View style={styles.accordionListHeader}>
                            <Text style={styles.accordionListHeaderText}>{category}</Text>
                            <TouchableOpacity onPress={() => {
                                ref.current.animateNextTransition();
                                setOpen(!open);
                                setCurrentIndex(index === currentIndex ? null : index);
                            }}>
                                {open ? <Minus marginTop={5} /> : <Plus marginTop={5}/>}
                            </TouchableOpacity>
                        </View>

                        {index === currentIndex && (
                            <View style={styles.subCategoriesList}>
                                {subCategories.map((subCategory, subIndex) => (
                                    <Text key={subIndex} style={styles.body}>
                                        {subCategory}
                                    </Text>
                                ))}
                            </View>
                        )}
                    </View>
                </View>
            ))}
        </Transitioning.View>
    );
};

export default AccordionList;