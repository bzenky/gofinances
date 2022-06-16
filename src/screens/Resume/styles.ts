import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background}
`

export const Header = styled.View`
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: ${RFValue(113)}px;
    padding-bottom: 19px;
    background-color: ${({ theme }) => theme.colors.primary}
`

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.shape};
`

export const Content = styled.ScrollView``

export const ChartContainer = styled.View`
    width: 100%;
    align-items: center;
`

export const Month = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(20)}px;
`

export const MonthSelect = styled.View`
    flex-direction: row;
    margin-top: 24px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`

export const MonthSelectButton = styled.TouchableOpacity``

export const MonthSelectIcon = styled(Feather)`
font-size: ${RFValue(24)}px;
`

export const LoadContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`
