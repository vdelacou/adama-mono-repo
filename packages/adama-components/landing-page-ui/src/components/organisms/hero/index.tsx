import { AnchorHTMLAttributes, ComponentType } from 'react';
import { GradientWrapper } from '../../wrapper/gradient-wrapper';

export type HeroProps = {
  title: { right: string; withGradient: string; left: string };
  description: string;
  cta1: {
    name: string;
    navLink: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
  };
  cta2: {
    name: string;
    navLink: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
  };
};

export const Hero = ({ title, description, cta1, cta2 }: HeroProps) => (
  <section>
    <GradientWrapper wrapperClassName="inset-0" className="mx-auto max-w-screen-xl px-4 text-gray-600 md:px-8">
      <div className="mx-auto max-w-4xl space-y-5 text-center">
        <h1 className="mx-auto text-4xl font-extrabold text-gray-800 sm:text-6xl">
          {title.left} <span className=" bg-gradient-to-r from-[#9867F0] to-[#ED4E50] bg-clip-text text-transparent">{title.withGradient}</span> {title.right}
        </h1>
        <p className="mx-auto max-w-xl">{description}</p>
        <div className="flex items-center justify-center gap-x-3 text-sm font-medium">
          <cta1.navLink>
            <div className="flex items-center gap-x-2 rounded-full bg-blue-600 px-4 py-2.5 text-center text-white hover:bg-blue-500 active:bg-blue-700">
              {cta1.name}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </cta1.navLink>
          <cta2.navLink>
            <div className="flex items-center gap-x-2 rounded-full px-4 py-2.5 text-center text-gray-700 hover:text-gray-900">
              {cta2.name}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </cta2.navLink>
        </div>
      </div>
    </GradientWrapper>
  </section>
);
