import Image from 'next/image';

export type BrandProps = React.ComponentProps<typeof Image> & {
  alt: string;
  src: string;
  width?: number;
  height?: number;
};

export const Brand = ({ src, alt, width, height }: BrandProps) => <Image src={src} alt={alt} width={width ?? 86} height={height ?? 48} priority />;
