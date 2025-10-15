interface IProps {
  onClick?: () => void;
  width?: string;
  height?: string;
}
const BackupCompletedIcon = ({ width = "32px", height = "32px" }: IProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0Z"
        fill="#DCFCE7"
      />
      <path
        d="M16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0Z"
        stroke="#E5E7EB"
      />
      <path d="M22.125 26H9.875V6H22.125V26Z" stroke="#E5E7EB" />
      <g clipPath="url(#clip0_1359_458)">
        <path
          d="M21.868 10.632C22.2098 10.9738 22.2098 11.5289 21.868 11.8707L14.868 18.8707C14.5262 19.2125 13.9711 19.2125 13.6293 18.8707L10.1293 15.3707C9.78751 15.0289 9.78751 14.4738 10.1293 14.132C10.4711 13.7902 11.0262 13.7902 11.368 14.132L14.25 17.0113L20.632 10.632C20.9738 10.2902 21.5289 10.2902 21.8707 10.632H21.868Z"
          fill="#16A34A"
        />
      </g>
      <defs>
        <clipPath id="clip0_1359_458">
          <path d="M9.875 7.75H22.125V21.75H9.875V7.75Z" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BackupCompletedIcon;
