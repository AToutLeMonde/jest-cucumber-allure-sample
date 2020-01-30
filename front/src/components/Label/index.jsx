import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    margin-top: 0rem;
`;

const Text = styled.p`
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 2.0rem;
    margin-bottom: 0.5rem;
    color: #555;
`;

function Label( {children} ) {
    return (
        <Container>
            <Text>{children}</Text>
        </Container>
    );
}

export default Label;