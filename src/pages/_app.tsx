import "../styles/global.css";

import { ChallengesProvider } from "../contexts/ChallengesContext";

import type { AppProps } from "next/app";
import { useState } from "react";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
}

export default MyApp;
