import styled from "styled-components"
import { Announcement } from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Add, Remove } from "@mui/icons-material"
import { mobile } from "../responsive"

const Container = styled.div``
const Wrapper = styled.div`
    padding:50px;
    display:flex;
    ${mobile({padding:"10px", flexDirection:"column"})};

`
const ImageContainer = styled.div`
    flex:1;

`
const Image = styled.img`
    width:100%;
    height:90vh;
    object-fit:cover;
    ${mobile({height:"40vh"})};


`
const InfoContainer = styled.div`
    flex:1;
    padding:0px 75px;
    ${mobile({padding:"10px"})};

`
const Title = styled.h1`
    font-weight:200;

`
const Desc = styled.p`
    margin:25px 0px;
`

const Price = styled.span`
    font-weight:100;
    font-size:40px;
    
`

const FilterContainer = styled.div`
    width:70%;
    margin:20px 0px;
    display:flex;
    justify-content:space-between;
    ${mobile({width:"100%"})};

`
const Filter = styled.div`
    display:flex;
    align-items:center;
    ${mobile({flexDirection:"column"})};


`
const FilterTitle = styled.span`
    font-size:20px;
    font-weight:250;
`
const FilterColor = styled.div`
    width:30px;
    height:30px;
    border-radius:50%;
    background-color:${props=>props.color};   
    margin:0px 10px;
    cursor:pointer; 
    ${mobile({padding:"10px", flexDirection:"column"})};


`

const FilterSize = styled.select`
    margin-left:15px;
    padding:10px;    
    
`
const FilterSizeOption = styled.option`
`

const AddContainer = styled.div`
    width:70%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    ${mobile({width:"100%"})};
    ${mobile({padding:"0px", flexDirection:"column"})};

`

const AmountContainer = styled.div`
    display:flex;
    align-items:center;
    font-weight:1000; 
    
    
`
const Amount = styled.span`
    width:40px;
    height:40px;
    border-radius:10px;
    display:flex;
    border:1px solid black;
    align-items:center;
    justify-content:center;
    margin:0px 5px;
    

`
const Button = styled.button`
    padding:15px;
    border:1px solid green;
    background-color:white;
    cursor:pointer;
    font-weight:500;

    &:hover{
        background-color:green;
    }
    ${mobile({width:"100%"})};
`


const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImageContainer>
                <Image src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.furnituredealer.net%2Fimg%2Fproducts%2Friverside_furniture%2Fcolor%2Fperspectives-1831789821_28030-b1.jpg&f=1&nofb=1&ipt=81a003e9bfec736c3f9346ea3a91b903002539284668a29140f2489f3e54fc08&ipo=images"/>
            </ImageContainer>
            <InfoContainer>
                <Title>Kirsiõie kirjutuslaud</Title>
                <Desc>See elegantne puidust laud on täiuslik segu funktsionaalsusest ja stiilist.
                    Kvaliteetsest puidust valmistatud see kiirgab sooja ja kutsuvat veetlust, 
                    mis kindlasti muljet avaldab. Hästi kujundatud disaini, keerukate detailide 
                    ja rohkete panipaikadega laual on kõik, mida vajate, et püsida korrastatud 
                    ja produktiivsena, lisades samal ajal oma kodule või kontorile veidi keerukust.</Desc>
                <Price>499 $</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>
                            Puidu Värv
                        </FilterTitle>
                        <FilterColor color="#DFD7C8"/>
                        <FilterColor color="#d72842"/>
                        <FilterColor color="#D8B589"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Suurus</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>Väga väike</FilterSizeOption>
                            <FilterSizeOption>Väike</FilterSizeOption>
                            <FilterSizeOption>Keskmine</FilterSizeOption>
                            <FilterSizeOption>Suur</FilterSizeOption>
                            <FilterSizeOption>Väga suur</FilterSizeOption>
                            <FilterSizeOption>American Size</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>Lisa korvi</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product