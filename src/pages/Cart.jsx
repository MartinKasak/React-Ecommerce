import Navbar from '../components/Navbar'
import { Announcement } from '../components/Announcement'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { Add, Remove } from '@mui/icons-material'
import { mobile } from '../responsive'

const Container = styled.div``

const Wrapper = styled.div`
    padding:20px;    
    ${mobile({padding:"10px"})};

`

const Title = styled.h1`
    font-weight:400;
    text-align:center;
    
`

const Top = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    padding:20px;
`

const TopButton = styled.button`
    padding:20px;
    font-weight:800;
    cursor:pointer;
    border:${(props)=>props.type==="filled" && "none"};
    background-color:${(props) => props.type==="filled" ? "black" : "transparent"};
    color:${(props)=>props.type==="filled" && "white"};

`
const TopTexts = styled.div`
    ${mobile({display:"none"})};

`
const TopText = styled.span`
    text-decoration:underline;
    cursor:pointer;
    margin:0px 15px;

`


const Bottom = styled.div`
    display:flex;
    justify-content:space-between;
    ${mobile({flexDirection:"column"})};

`
const Info = styled.div`

    flex:3;
`

const Product = styled.div`
    display:flex;
    justify-content:space-between;
    ${mobile({flexDirection:"column"})};


`
const ProductDetail = styled.div`
    flex:2;
    display:flex;
    ${mobile({flexDirection:"column", 'text-align':"center"})};

`
const Image = styled.img`
    width:300px;
    ${mobile({padding:"30px"})};
    
`
const Details = styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content: space-around;

`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props=>props.color};

    ${mobile({flexDirection:"column",margin:"5% 5% 5% 47%"})};



`
const ProductSize = styled.span``
const PriceDetail = styled.span`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`

const ProductAmountContainer = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:25px;
`

const ProductAmount = styled.div`
    font-size:30px;
    margin:5px;
    ${mobile({margin:"5px 20px"})};
    
`

const ProductPrice = styled.div`
    font-size:35px;
    font-weight:300;
    ${mobile({marginBottom:"20px", marginRight:"20px"})};

`

const Hr = styled.div`
    background-color:#eee;
    border:none;
    height:5px;
`

const Summary = styled.div`
    flex:1;
    border:0.5px solid gray;
    border-radius:10px;
    padding:20px;
    height:50vh;
`

const SummaryTitle = styled.h1`
    font-weight:250;

`

const SummaryItem = styled.div`
    margin:30px 0px;
    display:flex;
    justify-content:space-between;
    font-weight:${props=>props.type === "total" && "500"};
    font-size:${props=>props.type === "total" && "30px"};

`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
    width:100%;
    padding:10px;
    background-color:black;
    color:white;
    font-weight:650;
`



const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>Ostukorv</Title>
            <Top>
                <TopButton>Jätka Ostmist</TopButton>
                <TopTexts>
                    <TopText>Ostukorv(2)</TopText>
                    <TopText>Soovinimekiri</TopText>
                </TopTexts>
                <TopButton type="filled">Vormista Ost</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.custommade.com%2FjzsMCBGjuRWmlhnav_Q-v2kq2S8%3D%2Fcustommade-photosets%2Fa2a9e875b2e9905_20190511_160554.jpg&f=1&nofb=1&ipt=8074edd455c9e8896d018cd2b4763748717e3c7affbbfbee5092e41a1110d5f5&ipo=images"/>
                            <Details>
                                <ProductName><b>Toode:</b> Tore Laud</ProductName>
                                <ProductId><b>ID:</b> 111235654</ProductId>
                                <ProductColor color = "black"/>
                                <ProductSize><b>Suurus:</b> Suur</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice> $ 499 </ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsecure.img2-fg.wfcdn.com%2Fim%2Fd5ea3c03%2Fresize-h2000-p1-w2000%255Ecompr-r85%2F3332%2F33320250%2FPark%2BAvenue%2BUpholstered%2BPlatform%2BBed.jpg&f=1&nofb=1&ipt=1f1f5a2dcec1e51d9a7c08d728e8d9eee385242cc231102a14d6486ccc7713ce&ipo=images"/>
                            <Details>
                                <ProductName><b>Toode:</b> Mugav Voodi</ProductName>
                                <ProductId><b>ID:</b> 111235654</ProductId>
                                <ProductColor color = "black"/>
                                <ProductSize><b>Suurus:</b> Väga Suur</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice> $ 4999 </ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>Ostukorvi Kokkuvõte</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$5998</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Transport</SummaryItemText>
                        <SummaryItemPrice>$6</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Allahindlus</SummaryItemText>
                        <SummaryItemPrice>$-500</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem  type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$5492</SummaryItemPrice>
                    </SummaryItem>
                    <Button>Vormista Ost Nüüd</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart