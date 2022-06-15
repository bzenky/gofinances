import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

interface ContainerProps {
    color: string
}

export const Container = styled.View<ContainerProps>`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 24px 13px;
    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: 5px;
    border-left-width: 5px;
    border-left-color: ${({ color }) => color};
    margin-bottom: 8px;
`

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(15)}px;
`

export const Amount = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(15)}px;
`