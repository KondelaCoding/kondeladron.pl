import React from "react";

interface SeperatorProps {
  to: string;
}

const Seperator: React.FC<SeperatorProps> = ({ to }) => {
  return (
    <div
      className={`max-h-[200px] overflow-hidden bg-[${to === "white" ? "var(--background)" : "var(--white-color)"}]`}
    >
      <div
        className={`h-[200px] -skew-y-6 translate-y-[90px] bg-[${
          to === "white" ? "var(--white-color)" : "var(--background)"
        }]`}
      ></div>
    </div>
  );
};

export default Seperator;
