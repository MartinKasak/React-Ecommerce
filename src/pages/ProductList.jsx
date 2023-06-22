import styled from "styled-components"
import Navbar from "../components/Navbar"
import { Announcement } from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

const Container = styled.div`
`
const Title = styled.h1`
    margin:20px;
`
const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;
`
const Filter = styled.div`
    margin:20px;

`

const FilterText = styled.span`
    font-size:20px;
    font-weight:600;
    margin-right: 20px;
`

const Select = styled.select`
    padding:10px;
    margin-right:20px;
`
const Option = styled.option``

const ProductList = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Title>Toolid</Title>
        <FilterContainer>
            <Filter><FilterText>Filtreeri tooteid:</FilterText>
            <Select>
                <Option disabled selected>
                    Puidu tüüp
                </Option>
                <Option>Tamm</Option>
                <Option>Kask</Option>
                <Option>Mänd</Option>
                <Option>Kirss</Option>
                <Option>Lepp</Option>
                <Option>Kuusk</Option>
            </Select>
            <Select>
                <Option disabled selected>
                    Suurus
                </Option>
                <Option>Väga väike</Option>
                <Option>Väike</Option>
                <Option>Keskmine</Option>
                <Option>Suur</Option>
                <Option>Väga suur</Option>
                <Option>American Size</Option>
            </Select>
            </Filter>
            <Filter><FilterText>Sorteeri tooteid:</FilterText>
            <Select>
                <Option selected>Uuem</Option>
                <Option>Hind(kasvav)</Option>
                <Option>Hind(Kahanev)</Option>

            </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList