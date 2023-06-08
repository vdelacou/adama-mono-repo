import Image from "next/image";

type BrandProps = React.ComponentProps<typeof Image>;

export const Brand = ({ ...props }: BrandProps) => (
    <Image
        {...props}
        src="/split.svg"
        alt="Split logo"
        width={86}
        height={48}
        priority
    />
)
export default Brand