import styled from "styled-components"

const Container = styled.div`
    width:100vw;   
    height:100vh;
    background: linear-gradient(
        rgba(255,255,255,0.3),
        rgba(255,255,255,0.3)    
    ),
    url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thespruce.com%2Fthmb%2FxsDPGTYC0N31csFo7hUYtqZx7dw%3D%2F2882x1921%2Ffilters%3Afill(auto%2C1)%2Fopps-assembly-ikea-furniture-via-smallspaces.about.com-57c5db6b5f9b5855e5e34635.jpg&f=1&nofb=1&ipt=2f6215ce4be9e008f15c9b707fe297952598c1463e9dd4e00cd5ddc013a54ca0&ipo=images")
    center;
    background-size:cover;
    display:flex;
    align-items:center;
    justify-content: center;
            
`;

const Wrapper = styled.div`
    padding:20px;
    width:50%;
    background-color:white;
`	

const Title = styled.h1`
    font-size:44px;
    font-weight:500;
    
`

const Form = styled.form`
    display:flex;
    flex-wrap:wrap;
    
`
const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:30px 10px 0px 0px;
    padding: 15px;
`
const Agreement = styled.span`
    font-size:20px;
    margin:20px 0px;
  `
const Button = styled.button`
    width:100%;
    border:thin, teal;
    padding:15px 20px;
    background-color:orange;
    color:black;
    cursor:pointer;
    
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>LOO UUS KONTO</Title>
            <Form>
                <Input placeholder="nimi"/>
                <Input placeholder="perenimi"/>
                <Input placeholder="email"/>
                <Input placeholder="kasutajanimi"/>
                <Input placeholder="password"/>
                <Input placeholder="kinnita password"/>
                <Agreement>
                    Konto loomisega, nõustute andmete kasutamisele vastavalt meie 
                    <b> privaatsus poliitikaga </b>
                </Agreement>
                <Button>LOO KASUTAJA</Button>
            </Form>
        </Wrapper>
    </Container>
  );
};

export default Register