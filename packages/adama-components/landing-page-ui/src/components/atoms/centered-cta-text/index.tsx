import { SectionWrapper } from '../../wrapper';

type CenteredCTATextProps = {
  title: string;
  description: string;
};

export const CenteredCTAText = ({ title, description }: CenteredCTATextProps) => {
  return (
    <SectionWrapper>
      <div className="text-center">
        <div className="mx-auto max-w-xl">
          <h2 className="text-3xl font-semibold text-gray-800 sm:text-4xl">{title}</h2>
          <p className="mt-3 text-gray-600">{description}</p>
        </div>
      </div>
    </SectionWrapper>
  );
};
