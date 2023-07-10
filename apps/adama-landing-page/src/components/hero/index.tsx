'use client';
import { Hero, HeroProps } from '@adama/components-landing-page-ui';
import { customLink } from '../custom-link';

const HeroComponent = ({ title, description, cta1, cta2 }: HeroProps) => {
  return (
    <Hero
      title={title}
      description={description}
      cta1={{
        name: cta1.name,
        navLink: cta1.navLink,
      }}
      cta2={{
        name: cta2.name,
        navLink: cta2.navLink,
      }}
    />
  );
};

export default HeroComponent;

const heroProps: HeroProps = {
  title: { left: 'The fastest way to Increase your', withGradient: 'website traffic', right: '' },
  description: 'The ultimate way to get more website traffic and grow your online business. Start your free trial now.',
  cta1: {
    name: 'Get free trial',
    navLink: customLink('/dd'),
  },
  cta2: {
    name: 'Learn more',
    navLink: customLink('/ee'),
  },
};

export const HeroApp = () => {
  return <Hero {...heroProps} />;
};
