import styled from "styled-components"

const Container = styled.div`
    width:100vw;   
    height:100vh;
    background: linear-gradient(
        rgba(255,255,255,0.3),
        rgba(255,255,255,0.3)    
    ),
    url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hirerush.com%2Fblog%2Fwp-content%2Fuploads%2F2016%2F01%2Ffurniture-assembly-tfgru0eg.jpg&f=1&nofb=1&ipt=493d50b784260ede07ca8edcdf593628327b84a640706ded9be5542180c0ce8c&ipo=images")
    center;
    background-size:cover;
    display:flex;
    align-items:center;
    justify-content: center;
            
`;
const Wrapper = styled.div`
    width:40%;
    padding:20px;
    background-color:white;
`	
const Title = styled.h1`
    font-size:44px;
    font-weight:500;
    
`
const Form = styled.form`
    display:flex;
    flex-direction:column;
`
const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:10px 0px;
    padding: 10px;
`
const Button = styled.button`
    width:100%;
    border:thin, teal;
    padding:15px 20px;
    background-color:orange;
    color:black;
    cursor:pointer;
    margin-bottom:10px;
    
`

const Link = styled.a`
    margin:5px 0px;
    font-size:18px;
    text-decoration:underline;
    cursor:pointer;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>LOGI SISSE</Title>
            <Form>
                <Input placeholder="kasutajanimi"/>
                <Input placeholder="password"/>
                <Button>LOGI SISSE</Button>
                <Link>Unustasid salasõna</Link>
                <Link>Loo uus kasutaja</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login