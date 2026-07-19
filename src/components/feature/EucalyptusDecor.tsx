import { useLocation } from "react-router-dom";

interface EucalyptusDecorProps {
  variant?: "header" | "footer" | "section" | "hero";
  className?: string;
}

export default function EucalyptusDecor({ variant, className }: EucalyptusDecorProps) {
  // All eucalyptus decorations completely removed per user request
  return null;
}