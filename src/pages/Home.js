import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BgImage from '../assets/images/twitterHomeImage.png';
import { FaTwitter } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Home = () => {
	return (
		<MainRow>
			<ImageCol>
				<Image src={BgImage} alt='Twitter' />
			</ImageCol>
			<TextCol>
				<InnerContainer>
					<IconContext.Provider
						value={{ color: 'rgb(29, 155, 240)', size: '3rem' }}
					>
						<BrandLogo>
							<FaTwitter />
						</BrandLogo>
					</IconContext.Provider>
					<Title>Happening Now</Title>
					<SubTitle>Join Twitter Today</SubTitle>
					<Button>Sign up with Google</Button>
					<Button>Sign up with Apple</Button>
					<p>or</p>
					<Button></Button>
					<p>
						By signing up, you agree to the <Link to='#'>Terms of Service</Link>{' '}
						and <Link to='#'>Privacy Policy</Link>, including{' '}
						<Link to='#'>Cookie Use.</Link>
					</p>
					<div>
						<h3>Already have an account?</h3>
						<Button>Sign in with Phone Number or Email</Button>
					</div>
				</InnerContainer>
			</TextCol>
		</MainRow>
	);
};

export default Home;

const MainRow = styled.div`
	display: flex;

	@media screen and (max-width: 1028px) {
		flex-direction: column-reverse;
	}
`;

const Image = styled.img`
	max-width: 100%;
	height: calc(100vh - 60px);
`;

const ImageCol = styled.div`
	flex: 1 1 0px;
`;

const TextCol = styled.div`
	flex: 1 1 0px;
	width: 100%;
`;

const InnerContainer = styled.article`
	display: flex;
	flex-direction: column;
	max-width: 300px;
`;

const BrandLogo = styled.div``;

const Title = styled.h1``;

const SubTitle = styled.h2``;

const Button = styled.button``;
