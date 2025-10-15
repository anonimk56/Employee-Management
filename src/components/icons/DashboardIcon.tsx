interface IProps {
  onClick?: () => void;
  width?: string;
  height?: string;
  color?: string;
}
const DashboardIcon = ({
  width = "19px",
  height = "16px",
  color = "currentColor",
}: IProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 16H0V0H18V16Z" stroke="#E5E7EB" />
      <g clipPath="url(#clip0_3088_362)">
        <path
          d="M10 7.5V0.51875C10 0.2375 10.2188 0 10.5 0C14.3656 0 17.5 3.13438 17.5 7C17.5 7.28125 17.2625 7.5 16.9813 7.5H10ZM1.5 8.5C1.5 4.70937 4.31562 1.57187 7.96875 1.07187C8.25625 1.03125 8.5 1.2625 8.5 1.55313V9L13.3906 13.8906C13.6 14.1 13.5844 14.4438 13.3438 14.6125C12.1187 15.4875 10.6187 16 9 16C4.85938 16 1.5 12.6438 1.5 8.5ZM17.95 9C18.2406 9 18.4688 9.24375 18.4312 9.53125C18.1906 11.2781 17.35 12.8312 16.1219 13.9781C15.9344 14.1531 15.6406 14.1406 15.4594 13.9563L10.5 9H17.95Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_3088_362">
          <path d="M0.5 0H18.5V16H0.5V0Z" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DashboardIcon;
