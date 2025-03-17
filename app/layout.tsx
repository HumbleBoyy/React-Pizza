"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/query";
import { Provider } from 'react-redux'
import { store } from "../store/store";
import { ContextProvider } from "@/context/context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Pizza</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Provider store={store}>
        <ContextProvider>
          <ReactQueryProvider>
              {children}
          </ReactQueryProvider>
        </ContextProvider>
      </Provider>
      </body>
    </html>
  );
}
