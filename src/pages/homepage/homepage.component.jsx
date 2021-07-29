import React from 'react'
import './homepage.styles.scss'
import Directory from "../../components/directory/directory.component";
import styled from "styled-components"

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;

`

export const HomePage = () => (
    <HomePageContainer>
        <Directory/>
    </HomePageContainer>

)


