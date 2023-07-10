import { ComponentType, ImgHTMLAttributes } from 'react';

export type BrandProps = {
  BrandImage: ComponentType<ImgHTMLAttributes<HTMLImageElement>>;
  width?: number;
  height?: number;
};

export const Brand = ({ BrandImage, width = 86, height = 48 }: BrandProps) => <BrandImage width={width} height={height} />;
