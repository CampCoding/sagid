// app/providers.js
"use client";

import { LenisProvider } from "../contexts/LenisContext";
import { useRef } from "react";

export function Providers({ children }) {
  return <LenisProvider>{children}</LenisProvider>;
}
