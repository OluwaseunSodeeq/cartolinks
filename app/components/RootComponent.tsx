import React from "react";

import { ReactNode } from "react";

export default function RootComponent({ children }: { children: ReactNode }) {
  return (
    <div className={`dark:bg-black dark:text-mainBg font-montserrat`}>
      {children}
    </div>
  );
}
