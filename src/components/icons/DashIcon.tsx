interface IProps {
  onClick?: () => void;
  width?: string;
  height?: string;
}
const DashIcon = ({ width = "13px", height = "15px" }: IProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1359_318)">
        <path d="M12.25 14.75H0V0.75H12.25V14.75Z" stroke="#E5E7EB" />
        <path
          d="M11.8125 7.75C11.8125 8.23398 11.4215 8.625 10.9375 8.625H1.3125C0.828516 8.625 
          0.4375 8.23398 0.4375 7.75C0.4375 7.26602 0.828516 6.875 1.3125 6.875H10.9375C11.4215 6.875 11.8125 7.26602 11.8125 7.75Z"
          fill="#6B7280"
        />
      </g>
      <defs>
        <clipPath id="clip0_1359_318">
          <rect
            width="12.25"
            height="14"
            fill="white"
            transform="translate(0 0.75)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DashIcon;
