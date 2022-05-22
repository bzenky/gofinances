import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

interface CategoryProps {
    isActive: boolean
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`

export const Header = styled.View`
    width: 100%;
    height: ${RFValue(113)}px;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 19px;
    background-color: ${({ theme }) => theme.colors.primary};
`

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.shape};
`

export const Category = styled.TouchableOpacity<CategoryProps>`
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: ${RFValue(15)}px;

    background-color: ${({ theme, isActive }) => isActive ? theme.colors.secondary_light : theme.colors.background};
`

export const Icon = styled(Feather)`
    margin-right: 16px;
    font-size: ${RFValue(20)}px;
`

export const Name = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`

export const Separator = styled.View`
    width: 100%;
    height: 1px;
    color: ${({ theme }) => theme.colors.primary};
`

export const Footer = styled.View`
    width: 100%;
    padding: 24px;
`
