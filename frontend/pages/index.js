import Link from 'next/link';

const Home = props => (
	<div>
		<p>hello world</p>
		<Link href="/sell">
			<a>Sell</a>
		</Link>	
	</div>	
)

export default Home;