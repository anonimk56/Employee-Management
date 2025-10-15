interface IProps {
  onClick?: () => void;
  width?: string;
  height?: string;
}
const ArrowUpRedIcon = ({ width = "11px", height = "15px" }: IProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 11 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1359_330)">
        <g clipPath="url(#clip1_1359_330)">
          <path
            d="M5.86794 1.88202C5.52615 1.54022 4.97107 1.54022 4.62927 1.88202L0.254272 6.25702C-0.0875244 6.59882 -0.0875244 7.15389 0.254272 7.49569C0.596069 7.83749 1.15115 7.83749 1.49294 7.49569L4.37498 4.61093V13C4.37498 13.484 4.76599 13.875 5.24998 13.875C5.73396 13.875 6.12498 13.484 6.12498 13V4.61093L9.00701 7.49296C9.3488 7.83475 9.90388 7.83475 10.2457 7.49296C10.5875 7.15116 10.5875 6.59608 10.2457 6.25428L5.87068 1.87928L5.86794 1.88202Z"
            fill="#EF4444"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1359_330">
          <rect
            width="10.5"
            height="14"
            fill="white"
            transform="translate(0 0.75)"
          />
        </clipPath>
        <clipPath id="clip1_1359_330">
          <path d="M0 0.75H10.5V14.75H0V0.75Z" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowUpRedIcon;
