interface IProps {
  onClick?: () => void;
  width?: string;
  height?: string;
}
const PurpleDotIcon = ({ width = "15px", height = "15px" }: IProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0Z"
        fill="#6F2D7A"
      />
      <path
        d="M6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0Z"
        stroke="#E5E7EB"
      />
    </svg>
  );
};

export default PurpleDotIcon;
