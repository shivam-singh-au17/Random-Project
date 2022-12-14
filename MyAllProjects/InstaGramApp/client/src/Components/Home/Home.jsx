import React from 'react'
import {Posts} from './Posts/Posts'
import { SuggestUser } from './SuggestedUser/SuggestUser'
import styled from "styled-components"
import { Route } from 'react-router-dom'

function Home() {
    return (

        <Wrapper>
            <Container>
                <Posts />
                <SuggestUser/>
            </Container>
        </Wrapper>
    )
}

export default Home

const Wrapper = styled.div`
    padding-top:40px;
    background: #FAFAFA;
`
const Container = styled.div`
    display: flex;
    justify-content:space-between;
    position: relative;
    width:70%;
    margin:auto;
    @media (max-width: 100px) {
        width: 80%;
    }
    @media (max-width: 800px) {
        width: 90%;
    }
`
