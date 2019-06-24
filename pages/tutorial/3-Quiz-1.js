import React from 'react'
import { View, Text } from 'react-native'
import Pager from '../../widgets/Pager'


function Quiz_1 (props) {
    return (
        <View>
            <Text>Quiz!!!</Text>
            <Pager info={props.nav_info} />
        </View>
    )
}


Quiz_1.title = 'Quiz (1)'


export default Quiz_1
