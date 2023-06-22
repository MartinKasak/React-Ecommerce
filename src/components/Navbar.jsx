import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div` 
    height:70px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    align-items:center;
    justify-content: space-between;
` 

const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
`
const Language = styled.span`
    font-size:16px;
    cursor: pointer;
`

const SearchContainer = styled.div`
    border: 0.5px solid gray;
    display: flex;
    align-items: center;
    margin-left: 30px;
    padding: 5px;
`

const Input = styled.input`
    border:none;
`

const Center = styled.div`
    flex:1;
    text-align:center;
`

const Logo = styled.h1`
    font-weight:bold;
`

const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content: flex-end;
`

const MenuItem = styled.div`
    font-size:20px;
    cursor:pointer;
    margin-left:55px;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language style={{fontSize:20}}>EE</Language>
                <SearchContainer>
                    <Input/>
                    <Search style={{color:"gray", fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>
                    |MÖÖBLISHOP|
                </Logo>
            </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                <Badge badgeContent={7} color="primary">
                    <ShoppingCartOutlined />
                </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar