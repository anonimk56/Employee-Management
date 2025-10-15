interface IProps {
  onClick?: () => void;
  width?: string;
  height?: string;
}
const CreateRoleIcon = ({ width = "40px", height = "40px" }: IProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="6" fill="#10B981" fillOpacity="0.1" />
      <rect width="40" height="40" rx="6" stroke="#E5E7EB" />
      <path d="M28 32H12V8H28V32Z" stroke="#E5E7EB" />
      <g clipPath="url(#clip0_1359_163)">
        <path
          d="M20 11C20.1438 11 20.2875 11.0313 20.4188 11.0906L26.3031 13.5875C26.9906 13.8781 27.5031 14.5563 27.5 15.375C27.4844 18.475 26.2094 24.1469 20.825 26.725C20.3031 26.975 19.6969 26.975 19.175 26.725C13.7906 24.1469 12.5156 18.475 12.5 15.375C12.4969 14.5563 13.0094 13.8781 13.6969 13.5875L19.5844 11.0906C19.7125 11.0313 19.8563 11 20 11ZM20 13.0875V24.9C24.3125 22.8125 25.4719 18.1906 25.5 15.4187L20 13.0875Z"
          fill="#10B981"
        />
      </g>
      <defs>
        <clipPath id="clip0_1359_163">
          <path d="M12 11H28V27H12V11Z" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CreateRoleIcon;
