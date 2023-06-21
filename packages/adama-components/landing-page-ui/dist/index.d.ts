import * as react_jsx_runtime from 'react/jsx-runtime';
import Image from 'next/image';

type BrandProps = React.ComponentProps<typeof Image> & {
    alt: string;
    src: string;
    width?: number;
    height?: number;
};
declare const Brand: ({ src, alt, width, height }: BrandProps) => react_jsx_runtime.JSX.Element;

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
declare const Button: ({ children, ...props }: ButtonProps) => react_jsx_runtime.JSX.Element;

type SectionWrapperProps = {
    children: React.ReactNode;
    className?: string;
} & React.HTMLAttributes<HTMLElement>;
declare const SectionWrapper: ({ children, className }: SectionWrapperProps) => react_jsx_runtime.JSX.Element;

type CenteredCTATextProps = {
    title: string;
    description: string;
};
declare const CenteredCTAText: ({ title, description, }: CenteredCTATextProps) => react_jsx_runtime.JSX.Element;

export { Brand, Button, CenteredCTAText, SectionWrapper };
