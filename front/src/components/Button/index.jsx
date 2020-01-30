import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    margin-top: 2rem;
`;

const ButtonItem = styled.button`
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 2.0rem;
    margin-bottom: 0.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top:0.5rem;
    padding-bottom:0.5rem;
    color: #000;
    background: #DDD;
`;

function Button( { onClick} ) {
    return (
        <Container>
            <ButtonItem onClick={onClick}>Отправить</ButtonItem>
        </Container>
    );
}

export default Button;