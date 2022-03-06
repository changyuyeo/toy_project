import { NextPage } from 'next'
import styled from 'styled-components'

const Container = styled.div`
	font-size: 21px;
	color: gray;
`

const HomePage: NextPage = () => {
	return <Container>Hello Jebong</Container>
}

export default HomePage
