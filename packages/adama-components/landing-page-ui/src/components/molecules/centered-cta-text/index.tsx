import { SectionWrapper } from "../../atoms";

type CenteredCTATextProps = {
  title: string;
  description: string;
};

export const CenteredCTAText = ({ title, description, }: CenteredCTATextProps) => {
  return (
      <SectionWrapper>
          <div className="custom-screen text-center">
              <div className="max-w-xl mx-auto">
                  <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                      {title}
                  </h2>
                  <p className="mt-3 text-gray-600">
                      {description}
                  </p>
              </div>
          </div>
      </SectionWrapper>
  )
}
