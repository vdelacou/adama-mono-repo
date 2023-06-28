import * as react_jsx_runtime from 'react/jsx-runtime';
import Image from 'next/image';

type BrandProps = React.ComponentProps<typeof Image> & {
    alt: string;
    src: string;
    width?: number;
    height?: number;
};
declare const Brand: ({ src, alt, width, height }: BrandProps) => react_jsx_runtime.JSX.Element;

interface NavLinkProps {
    children: React.ReactNode;
    href: string;
    className?: string;
    scroll?: boolean;
}
declare const NavLink: ({ children, href, className, scroll }: NavLinkProps) => react_jsx_runtime.JSX.Element;

type SectionWrapperProps = {
    children: React.ReactNode;
    className?: string;
} & React.HTMLAttributes<HTMLElement>;
declare const SectionWrapper: ({ children, className }: SectionWrapperProps) => react_jsx_runtime.JSX.Element;

type CenteredCTATextProps = {
    title: string;
    description: string;
};
declare const CenteredCTAText: ({ title, description }: CenteredCTATextProps) => react_jsx_runtime.JSX.Element;

type HeroProps = {
    title: {
        right: string;
        withGradient: string;
        left: string;
    };
    description: string;
    cta1: {
        name: string;
        href: string;
    };
    cta2: {
        name: string;
        href: string;
    };
};
declare const Hero: ({ title, description, cta1, cta2 }: HeroProps) => react_jsx_runtime.JSX.Element;

type NavHeaderProps = {
    mobileMenuButtonOnClick: () => void;
    open: boolean;
    brandProps: BrandProps;
};
declare const NavHeader: ({ mobileMenuButtonOnClick, open, brandProps }: NavHeaderProps) => react_jsx_runtime.JSX.Element;

type NavBarProps = {
    navHeaderProps: NavHeaderProps;
    navLinkProps: {
        name: string;
        href: string;
    }[];
    authProps: {
        signIn: {
            name: string;
            href: string;
        };
        signUp: {
            name: string;
            href: string;
        };
    };
};
declare const NavBar: ({ navLinkProps, navHeaderProps, authProps }: NavBarProps) => react_jsx_runtime.JSX.Element;

declare const classNames: (...classes: string[]) => string;

export { Brand, BrandProps, CenteredCTAText, Hero, HeroProps, NavBar, NavBarProps, NavHeader, NavHeaderProps, NavLink, NavLinkProps, SectionWrapper, classNames };
