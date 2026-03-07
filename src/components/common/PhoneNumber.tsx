import { CSSProperties, FC } from "react";

interface PhoneNumberProps {
  number: string;
  className?: string;
}

const phoneNumberStyle: CSSProperties = {
  direction: "ltr",
  unicodeBidi: "isolate",
  whiteSpace: "nowrap",
  display: "inline-block",
};

export const PhoneNumber: FC<PhoneNumberProps> = ({ number, className }) => {
  return (
    <bdi dir="ltr" className={className} style={phoneNumberStyle}>
      {number}
    </bdi>
  );
};
