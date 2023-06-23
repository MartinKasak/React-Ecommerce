import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@mui/icons-material"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    display:flex;
    ${mobile({flexDirection:"column"})};

`
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
    margin-left:10%;
    ${mobile({padding:"5px", "margin-left":"5%",'margin-top':"10px",'margin-bottom':"10px" })};

`

const Logo = styled.h1 `
    
`

const Desc = styled.p `
    margin:20px 0px;
    
`

const SocialContainer = styled.div `
    display:flex;
    
`

const SocialIcon = styled.div `
    width:50px;
    height:50px;
    border-radius:50%;
    color:white;
    background-color: #${props=>props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;

`

const Center = styled.div`
    flex:1;
    padding:20px;
    ${mobile({display:"none"})};
    
`

const Title = styled.h3`
    margin-bottom:30px;
    margin-top:10px;
    ${mobile({"margin-left":"2%"})};
    
`

const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
    
`

const ListItem = styled.li`
    width:50%;
    margin-bottom:20px;
    

`

const Right = styled.div`
    flex:1;
    padding:20px;
    ${mobile({backgroundColor:"#e6e7e4"})};
`

const ContactItem = styled.div`
    margin-bottom:10px;
    display:flex;
    align-items:center;
    ${mobile({"margin-left":"2%"})};
`

const Payment = styled.img`
    width:10%;
    ${mobile({"margin-left":"2%"})};
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>MÖÖBLIPOOD</Logo>
            <Desc>Tegemist mockup Mööblipoega mis on koostatud kasutades React</Desc>
            <SocialContainer>
                <SocialIcon color="4267B2">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E1306C">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="1DA1F2">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Kasulikud lingid</Title>
            <List>
                <ListItem>Kodu</ListItem>
                <ListItem>Ostukorv</ListItem>
                <ListItem>Suvepakkumised</ListItem>
                <ListItem>Populaarsed tooted</ListItem>
                <ListItem>Minu Konto</ListItem>
                <ListItem>Toodete jälgimine</ListItem>
                <ListItem>Soovinimekiri</ListItem>
                <ListItem>Tingimused</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Kontaktid</Title>
            <ContactItem>
                <Room style={{marginRight:"20px"}}/> Tartu jaam 4-3 
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"20px"}}/> +372 58551413 
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"20px"}}/> contact@mooblipood.ee 
            </ContactItem>
            <Payment src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.freepik.com%2Ffreie-ikonen%2Fdebitkarte_318-76130.jpg&f=1&nofb=1&ipt=42e1fcaa4c8d006f3b69cc685597ced28291bd7b3a00c4b16be9bcd279896933&ipo=images"/>
        </Right>

    </Container>
  )
}

export default Footer