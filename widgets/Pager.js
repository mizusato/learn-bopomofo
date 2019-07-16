import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import g from '../styles/global'


function ReloadButton (props) {
    let Wrapped = withNavigation(props => {
        function reload () {
            props.navigation.replace(props.navigation.state.routeName)
        }
        return (
            <View style={g('next_button')}>
              <TouchableOpacity onPress={reload}>
                <Text style={g('next_button_text')}>
                  { props.children }
                </Text>
              </TouchableOpacity>
            </View>
        )
    })
    return <Wrapped>{ props.children }</Wrapped>
}


function Pager (props) {
    function previous () {
        props.navigation.replace(String(props.info.previous.index))
    }
    function next () {
        props.navigation.replace(String(props.info.next.index))
    }
    if (props.onlyNext) {
        if (props.info.next == null) {
            return <View></View>
        }
        return (
            <View style={g('next_button')}>
                <TouchableOpacity onPress={next}>
                    <Text style={g('next_button_text')}>
                        繼續學習下一節：
                    </Text>
                    <Text style={g('next_button_text')}>
                        { props.info.next.title }
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={g('pager')}>
            { (props.info.previous != null)? (
                <View style={g('horizontal')}>
                    <TouchableOpacity onPress={previous}>
                        <Text style={g('pager_text', 'pager_link')}>
                            上一節
                        </Text>
                    </TouchableOpacity>
                    <Text style={g('pager_text', 'pager_separator')}>
                        |
                    </Text>
                </View>
            ): <View></View> }
            { (props.info.next != null)? (
                <View style={g('shrink')}>
                    <TouchableOpacity onPress={next}>
                        <Text style={g('pager_text', 'pager_link')}
                                numberOfLines={1}>
                            <Text>下一節：</Text>
                            <Text>{props.info.next.title}</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            ): <View><Text style={g('pager_text')}>THE END</Text></View> }
        </View>
    )
}


export { ReloadButton }
export default withNavigation(Pager)
