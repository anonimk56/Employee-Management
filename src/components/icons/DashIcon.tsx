interface IProps {
  onClick?: () => void;
  width?: string;
  height?: string;
}
const DashIcon = ({ width = "12px", height = "15px" }: IProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.8125 1.75C11.8125 2.23398 11.4215 2.625 10.9375 2.625H1.3125C0.828516 2.625 0.4375 2.23398 0.4375 1.75C0.4375 1.26602 0.828516 0.875 1.3125 0.875H10.9375C11.4215 0.875 11.8125 1.26602 11.8125 1.75Z"
        fill="#6B7280"
      />
    </svg>
  );
};

export default DashIcon;
