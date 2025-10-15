interface IProps {
  onClick?: () => void;
  width?: string;
  height?: string;
}
const TestPermissionIcon = ({ width = "40px", height = "40apx" }: IProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="6" fill="#F59E0B" fillOpacity="0.1" />
      <rect width="40" height="40" rx="6" stroke="#E5E7EB" />
      <path d="M27 32H13V8H27V32Z" stroke="#E5E7EB" />
      <g clipPath="url(#clip0_1359_167)">
        <path
          d="M22 11H18H17C16.4469 11 16 11.4469 16 12C16 12.5531 16.4469 13 17 13V17.15C17 17.5188 16.8969 17.8844 16.7031 18.1969L13.3219 23.6938C13.1125 24.0375 13 24.4281 13 24.8313C13 26.0281 13.9719 27 15.1688 27H24.8313C26.0281 27 27 26.0281 27 24.8313C27 24.4313 26.8875 24.0375 26.6781 23.6938L23.2969 18.2C23.1031 17.8844 23 17.5219 23 17.1531V13C23.5531 13 24 12.5531 24 12C24 11.4469 23.5531 11 23 11H22ZM19 17.15V13H21V17.15C21 17.8906 21.2063 18.6156 21.5938 19.2469L22.6719 21H17.3281L18.4062 19.2469C18.7937 18.6156 19 17.8906 19 17.15Z"
          fill="#F59E0B"
        />
      </g>
      <defs>
        <clipPath id="clip0_1359_167">
          <path d="M13 11H27V27H13V11Z" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default TestPermissionIcon;
