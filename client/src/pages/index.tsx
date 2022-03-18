import styled from 'styled-components'
import Test from '@components/Test'

const Container = styled.div`
	font-size: 21px;
	color: gray;
`

const IndexPage = () => {
	return (
		<Container>
			<Test />
		</Container>
	)
}

export default IndexPage
