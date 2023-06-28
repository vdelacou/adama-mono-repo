import { Metadata } from 'next';
import { HeroApp } from '../components/hero';
import { NavbarApp } from '../components/nav-bar';

export const metadata: Metadata = {
  title: 'Adama - Landing Page',
};

const Home = () => {
  return (
    <>
      <NavbarApp />
      <HeroApp />
    </>
  );
};

export default Home;
