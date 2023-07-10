import * as react_jsx_runtime from 'react/jsx-runtime';
import { ComponentType, ImgHTMLAttributes, ReactElement, AnchorHTMLAttributes } from 'react';

type BrandProps = {
    BrandImage: ComponentType<ImgHTMLAttributes<HTMLImageElement>>;
    width?: number;
    height?: number;
};
declare const Brand: ({ BrandImage, width, height }: BrandProps) => react_jsx_runtime.JSX.Element;

type CenteredCTATextProps = {
    title: string;
    description: string;
};
declare const CenteredCTAText: ({ title, description }: CenteredCTATextProps) => react_jsx_runtime.JSX.Element;

type NavHeaderProps = {
    brand: ReactElement<{
        children: ReactElement<{
            props: BrandProps;
        }>;
    }>;
    mobileMenuButtonOnClick: () => void;
    open: boolean;
};
declare const NavHeader: ({ mobileMenuButtonOnClick, open, brand }: NavHeaderProps) => react_jsx_runtime.JSX.Element;

type HeroProps = {
    title: {
        right: string;
        withGradient: string;
        left: string;
    };
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
declare const Hero: ({ title, description, cta1, cta2 }: HeroProps) => react_jsx_runtime.JSX.Element;

type NavBarProps = {
    navHeaderProps: NavHeaderProps;
    navLinkProps: {
        name: string;
        Link: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
    }[];
    authProps: {
        signIn: {
            name: string;
            Link: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
        };
        signUp: {
            name: string;
            Link: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
        };
    };
};
declare const NavBar: ({ navLinkProps, navHeaderProps, authProps }: NavBarProps) => react_jsx_runtime.JSX.Element;

declare const classNames: (...classes: string[]) => string;

export { Brand, BrandProps, CenteredCTAText, Hero, HeroProps, NavBar, NavBarProps, NavHeader, NavHeaderProps, classNames };
