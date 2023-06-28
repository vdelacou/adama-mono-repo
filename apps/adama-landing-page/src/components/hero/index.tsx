'use client';
import { Hero, HeroProps } from '@adama/components-landing-page-ui';

const heroProps: HeroProps = {
  title: { left: 'The fastest way to Increase your', withGradient: 'website traffic', right: '' },
  description: 'The ultimate way to get more website traffic and grow your online business. Start your free trial now.',
  cta1: {
    name: 'Get free trial',
    href: '#',
  },
  cta2: {
    name: 'Learn more',
    href: '#',
  },
};

export const HeroApp = () => {
  return <Hero {...heroProps} />;
};
