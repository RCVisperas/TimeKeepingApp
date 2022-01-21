import React, { useState, useEffect } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../src/createEmotionCache";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
const LighTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#e34423",
    },
    secondary: {
      main: "#042c62",
    },
    error: {
      main: "#f93138",
    },
    success: {
      main: "#0ba20b",
    },
  },

  typography: {
    fontFamily: "Arial",
    fontSize: 14,
  },
});
const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#e34423",
    },
    secondary: {
      main: "#042c62",
    },
    error: {
      main: "#f93138",
    },
    success: {
      main: "#0ba20b",
    },
  },

  typography: {
    fontFamily: "Arial",
    fontSize: 14,
  },
});
const getActiveTheme = (themeMode: "light" | "dark") => {
  return themeMode === "light" ? LighTheme : DarkTheme;
};
export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [activeTheme, setActiveTheme] = useState(LighTheme);
  const [selected, setSelectedTheme] = useState<"light" | "dark">("light");

  const ToogleTheme = () => {
    const desiredTheme = selected === "light" ? "dark" : "light";
    setSelectedTheme(desiredTheme);
    setActiveTheme(desiredTheme === "light" ? LighTheme : DarkTheme);
  };
  useEffect(() => {
    setActiveTheme(getActiveTheme(selected));
    console.log({ selected });
  });
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={activeTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} ToogleTheme={ToogleTheme} />
      </ThemeProvider>
    </CacheProvider>
  );
}
