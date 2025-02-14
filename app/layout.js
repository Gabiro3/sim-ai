import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";
import Image from 'next/image';
import Logo from '../public/rw.jpg';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Career Coach",
  description: "",
};


const MadeInRwanda = () => {
  return (
    <div className="container mx-auto px-4 text-center text-gray-200 flex items-center justify-center">
      <p className="mr-2">Made in Rwanda</p> {/* Adds some space between the text and flag */}
      
      {/* Rwandan Flag */}
      <Image
        src={Logo}
        alt="Rwandan Flag"
        width={50}  // Adjust the width as needed
        height={30}  // Adjust the height as needed
      />
    </div>
  );
};



export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <MadeInRwanda />
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
