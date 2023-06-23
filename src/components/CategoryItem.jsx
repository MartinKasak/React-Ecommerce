import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    flex:1;
    margin:3px;
    height:70vh;
    position:relative;

`
const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;    
    ${mobile({height:"30vh"})};

`
const Info = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;


`
const Title = styled.h1`
    color: white;
    text-shadow: 3px 3px 6px #000000;
    margin-bottom: 30px;

`
const Button = styled.button`
    border:none;
    padding:10px;
    cursor:pointer;
    background-color:white;
    color:black;
    font-weight:600;
    outline-style: outset;
    outline-width: thin;
`


const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>VAATA TOOTEID</Button>
        </Info>

    </Container>
  )
}

export default CategoryItem