interface CheckIconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

function CheckIcon({ className, size = 14, strokeWidth = 2.5 }: CheckIconProps) {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export { CheckIcon };
