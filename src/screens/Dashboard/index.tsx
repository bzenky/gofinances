import React from 'react';

import {
    Container,
    Header,
    UserInfo,
    UserWrapper,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon
} from './styles';

export function Dashboard() {
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo
                            source={{ uri: 'https://www.github.com/bzenky.png' }}
                        />
                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Zenky</UserName>
                        </User>
                    </UserInfo>

                    <Icon name="power" />
                </UserWrapper>
            </Header>
        </Container>
    );
}