import dynamic from 'next/dynamic'
import type { NextPage } from 'next';

const Earth = dynamic(() => import('../components/Earth'));

const Home: NextPage = () => {
  return <Earth />;
};

export default Home;
