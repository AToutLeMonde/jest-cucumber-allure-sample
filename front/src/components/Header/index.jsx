import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    margin-top: 2rem;
`;

const H1 = styled.h1`
    font-weight: 600;
    font-size: 2.2rem;
    line-height: 2.8rem;    
`;

function Header( {children} ) {
    return (
        <Container>
            <H1>{children}</H1>
        </Container>
    );
}

export default Header;