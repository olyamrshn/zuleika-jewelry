export function UserIcon() {
  return (
    <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
      <circle
        cx="12"
        cy="8"
        r="3.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      ></circle>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6.8475 19.25H17.1525C18.2944 19.25 19.174 18.2681 18.6408 17.2584C17.8563 15.7731 16.068 14 12 14C7.93201 14 6.14367 15.7731 5.35924 17.2584C4.82597 18.2681 5.70558 19.25 6.8475 19.25Z"
      ></path>
    </svg>
  )
}

export function HeartIcon() {
  return (
    <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export function SearchIcon() {
  return (
    <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
      ></path>
    </svg>
  )
}

export function BagIcon({ count }: { count?: number }) {
  return (
    <div className="relative">
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M16.5843 17.662L18.25 9.75H5.75L7.41569 17.662C7.61053 18.5875 8.42701 19.25 9.37279 19.25H14.6272C15.573 19.25 16.3895 18.5875 16.5843 17.662Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M8.75 9.5V7.75C8.75 6.09315 10.0931 4.75 11.75 4.75H12.25C13.9069 4.75 15.25 6.09315 15.25 7.75V9.5"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19.25 9.75H4.75"
        ></path>
      </svg>
      {count && count > 0 ? (
        <span className="absolute -top-2 -right-2 zuleika-bg text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
          {count}
        </span>
      ) : null}
    </div>
  )
}

export function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className="zuleika-text-color"
    >
      <path
        d="M10 4L6 8L10 12"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
      />
    </svg>
  )
}

export function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M 3.75 3 A 0.750075 0.750075 0 1 0 3.75 4.5 L 20.25 4.5 A 0.750075 0.750075 0 1 0 20.25 3 L 3.75 3 z M 3.75 11 A 0.750075 0.750075 0 1 0 3.75 12.5 L 20.25 12.5 A 0.750075 0.750075 0 1 0 20.25 11 L 3.75 11 z M 3.75 18.5 A 0.750075 0.750075 0 1 0 3.75 20 L 20.25 20 A 0.750075 0.750075 0 1 0 20.25 18.5 L 3.75 18.5 z"></path>
    </svg>
  )
}
