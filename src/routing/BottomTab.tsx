import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import Episodes from '../screens/Episodes'
import Characters from '../screens/Characters'
import Locations from '../screens/Locations'

const bottomTab = createMaterialBottomTabNavigator()

export const BottomTab = () => {
    return (
        <bottomTab.Navigator
            initialRouteName="Characters"
            activeColor="#f1e14d"
            inactiveColor="#d4d4d8"
            barStyle={{
                backgroundColor: '#00afca',
                position: 'absolute',
                shadowColor: '#000',
                borderTopEndRadius: 20,
                borderTopStartRadius: 20,
                height: 60,
                padding: 5,
            }}
        >
            <bottomTab.Screen
                name="Characters"
                component={Characters}
                options={{
                    tabBarLabel: 'Characters',
                    tabBarIcon: ({ color }) => <Ionicons name="person" size={25} color={color} />,
                }}
            />

            <bottomTab.Screen
                name="Locations"
                component={Locations}
                options={{
                    tabBarLabel: 'Locations',
                    tabBarIcon: ({ color }) => <Ionicons name="planet" size={25} color={color} />,
                }}
            />

            <bottomTab.Screen
                name="Episodes"
                component={Episodes}
                options={{
                    tabBarLabel: 'Episodes',
                    tabBarIcon: ({ color }) => <Ionicons name="tv" size={25} color={color} />,
                }}
            />
        </bottomTab.Navigator>
    )
}
