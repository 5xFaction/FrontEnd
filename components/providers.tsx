"use client";

import dynamic from "next/dynamic";
import { type ReactNode } from "react";

const PrivyProviderWrapper = dynamic(
  () => import("./privy-provider").then((mod) => mod.PrivyProviderWrapper),
  { ssr: false }
);

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <PrivyProviderWrapper>{children}</PrivyProviderWrapper>;
}
