import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'     

const Container = styled.div` 
    height:70px;
    ${mobile({height:"50px"})}
`

const Wrapper = styled.div`
    padding: 10px 15px;
    display:flex;
    align-items:center;
    justify-content: space-between;
    ${mobile({padding:"2px 0px"})};

` 

const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    ${mobile({height:"50px"})};

`
const Language = styled.span`
    font-size:16px;
    cursor: pointer;
    ${mobile({display:"none"})};

`

const SearchContainer = styled.div`
    border: 0.5px solid gray;
    display: flex;
    align-items: center;
    margin-left: 30px;
    padding: 5px;
    ${mobile({'margin-left': "5px"})};

`

const Input = styled.input`
    border:none;
    ${mobile({width:"50px"})};
    
`

const Center = styled.div`
    flex:1;
    text-align:center;
`

const Logo = styled.h1`
    font-weight:bold;
    ${mobile({fontSize:"10px"})};
`

const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content: flex-end;
    ${mobile({flex:2,justifyContent:"center"})};

`

const MenuItem = styled.div`
    font-size:20px;
    cursor:pointer;
    margin-left:55px;
    ${mobile({fontSize:"8px", marginLeft:"1px", marginRight:"1px"})};

`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language style={{fontSize:20}}>EE</Language>
                <SearchContainer>
                    <Input placeholder='Search'/>
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