interface IProps {
  onClick?: () => void;
  width?: string;
  height?: string;
}
const ArrowUpGreenIcon = ({ width = "11px", height = "15px" }: IProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 11 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1359_306)">
        <g clipPath="url(#clip1_1359_306)">
          <path
            d="M5.86798 1.88202C5.52618 1.54022 4.9711 1.54022 4.6293 1.88202L0.254303 6.25702C-0.0874939 6.59882 -0.0874939 7.15389 0.254303 7.49569C0.5961 7.83749 1.15118 7.83749 1.49297 7.49569L4.37501 4.61093V13C4.37501 13.484 4.76602 13.875 5.25001 13.875C5.73399 13.875 6.12501 13.484 6.12501 13V4.61093L9.00704 7.49296C9.34883 7.83475 9.90391 7.83475 10.2457 7.49296C10.5875 7.15116 10.5875 6.59608 10.2457 6.25428L5.87071 1.87928L5.86798 1.88202Z"
            fill="#10B981"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1359_306">
          <rect
            width="10.5"
            height="14"
            fill="white"
            transform="translate(0 0.75)"
          />
        </clipPath>
        <clipPath id="clip1_1359_306">
          <path d="M0 0.75H10.5V14.75H0V0.75Z" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowUpGreenIcon;
