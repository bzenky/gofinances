import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

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

export const Content = styled.ScrollView.attrs({
    contentContainerStyle: {
        flex: 1,
        padding: 24,
    }
})``