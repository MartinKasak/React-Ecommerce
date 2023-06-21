import styled from 'styled-components'

const Container = styled.div`
    height:30px;
    background-color:olive;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    font-weight:500;
`

import React from 'react'


export const Announcement = () => {
  return (
    <Container>Tasuta Transport alatest 20$ </Container>
  )
}
