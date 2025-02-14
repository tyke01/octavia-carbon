import React, { SVGProps } from "react";

interface ArrowIconProps extends SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  className?: string;
}

export const ArrowIcon: React.FC<ArrowIconProps> = ({
  className,
  width = 256,
  height = 256,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Layer_1"
    width={width}
    height={height}
    stroke="currentColor"
    strokeWidth="0.003"
    fill="currentColor"
    version="1.1"
    viewBox="0 0 330 330"
    className={className}
    {...props}
  >
    <g id="SVGRepo_iconCarrier">
      <path
        id="XMLID_27_"
        d="M15 180h263.787l-49.394 49.394c-5.858 5.857-5.858 15.355 0 21.213C232.322 253.535 236.161 255 240 255s7.678-1.465 10.606-4.394l75-75c5.858-5.857 5.858-15.355 0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213 0s-5.858 15.355 0 21.213L278.787 150H15c-8.284 0-15 6.716-15 15s6.716 15 15 15z"
      ></path>
    </g>
  </svg>
);
