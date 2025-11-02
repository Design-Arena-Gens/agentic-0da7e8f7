'use client';

import { ThemeProvider } from "next-themes";
import { SWRConfig } from "swr";
import type { ReactNode } from "react";

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <SWRConfig value={{ provider: () => new Map(), revalidateOnFocus: false }}>
        {children}
      </SWRConfig>
    </ThemeProvider>
  );
}
