import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

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

export const Form = styled.View`
    flex: 1;
    justify-content: space-between;
    width: 100%;
    padding: 24px;
`

export const Fields = styled.View`

`

export const TransactionTypes = styled.View`
    flex-direction: row;
    justify-content: space-between;
`