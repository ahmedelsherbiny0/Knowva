import { Icon } from "@iconify/react";

interface EducationProps {
  dimensions: number;
}

export default function Education({ dimensions }: EducationProps) {
  return (
    <Icon
      icon="tdesign:education"
      className={`w-${dimensions} h-${dimensions} text-[#003366]`}
    />
  );
}
