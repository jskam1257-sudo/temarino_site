export default function WaveDivider({
  fromColor = "transparent",
  toColor = "#E8E0DE",
  flip = false,
}: {
  fromColor?: string;
  toColor?: string;
  flip?: boolean;
}) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: 60, marginTop: -1 }}
    >
      <svg
        viewBox="0 0 1440 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        style={{ transform: flip ? "rotate(180deg)" : undefined }}
      >
        <path
          d={
            flip
              ? "M0 60V20C240 50 480 0 720 20C960 40 1200 0 1440 20V60H0Z"
              : "M0 0V40C240 10 480 60 720 40C960 20 1200 60 1440 40V0H0Z"
          }
          fill={toColor}
        />
      </svg>
    </div>
  );
}