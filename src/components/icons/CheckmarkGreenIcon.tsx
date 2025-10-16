interface IProps {
  onClick?: () => void;
  width?: string;
  height?: string;
}
const CheckmarkGreenIcon = ({ width = "13px", height = "10px" }: IProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9929 0.632019C12.3347 0.973816 12.3347 1.52889 11.9929 1.87069L4.99294 8.87069C4.65115 9.21249 4.09607 9.21249 3.75427 8.87069L0.254272 5.37069C-0.0875244 5.02889 -0.0875244 4.47382 0.254272 4.13202C0.596069 3.79022 1.15115 3.79022 1.49294 4.13202L4.37498 7.01132L10.757 0.632019C11.0988 0.290222 11.6539 0.290222 11.9957 0.632019H11.9929Z"
        fill="#10B981"
      />
    </svg>
  );
};

export default CheckmarkGreenIcon;
