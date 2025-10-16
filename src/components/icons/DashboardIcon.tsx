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
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 7.5V0.51875C9 0.2375 9.21875 0 9.5 0C13.3656 0 16.5 3.13438 16.5 7C16.5 7.28125 16.2625 7.5 15.9813 7.5H9ZM0.5 8.5C0.5 
4.70937 3.31562 1.57187 6.96875 1.07187C7.25625 1.03125 7.5 1.2625 7.5 1.55313V9L12.3906 
13.8906C12.6 14.1 12.5844 14.4438 12.3438 14.6125C11.1187 15.4875 9.61875 16 8 16C3.85938 
16 0.5 12.6438 0.5 8.5ZM16.95 9C17.2406 9 17.4688 9.24375 17.4312 9.53125C17.1906 11.2781 16.35 12.8312 15.1219 13.9781C14.9344 14.1531
14.6406 14.1406 14.4594 13.9563L9.5 9H16.95Z"
        fill={color}
      />
    </svg>
  );
};

export default DashboardIcon;
