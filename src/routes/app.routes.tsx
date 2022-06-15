import React from 'react'
import { Platform } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Dashboard } from '../screens/Dashboard'
import { Register } from '../screens/Register'
import { Resume } from '../screens/Resume'

const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes() {
    const theme = useTheme()

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.secondary,
                tabBarInactiveTintColor: theme.colors.text,
                tabBarLabelPosition: 'beside-icon',
                tabBarStyle: {
                    height: 88,
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                }
            }}
        >
            <Screen
                name="Listagem"
                component={Dashboard}
                options={{
                    tabBarIcon: (({ color, size }) =>
                        <MaterialIcons
                            name="format-list-bulleted"
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
            <Screen
                name="Cadastrar"
                component={Register}
                options={{
                    tabBarIcon: (({ color, size }) =>
                        <MaterialIcons
                            name="attach-money"
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
            <Screen
                name="Resumo"
                component={Resume}
                options={{
                    tabBarIcon: (({ color, size }) =>
                        <MaterialIcons
                            name="pie-chart"
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
        </Navigator>
    )
}
