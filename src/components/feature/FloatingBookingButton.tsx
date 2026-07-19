import { contactInfo } from "@/mocks/content";

export default function FloatingBookingButton() {
  return (
    <a
      href={contactInfo.timerex}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group md:hidden"
    >
      {/* Shadow layer */}
      <div className="absolute top-2 left-2 w-20 h-20 rounded-full glass-cocoa-shadow" />
      {/* Main button */}
      <div className="relative w-20 h-20 rounded-full glass-cocoa flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300">
        <span className="font-sans text-xs text-white font-medium leading-tight text-center px-1">
          ご予約は<br/>こちら
        </span>
      </div>
    </a>
  );
}