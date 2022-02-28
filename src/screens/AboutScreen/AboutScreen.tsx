import type { FC } from "react";

import { Header } from "@/components/Header";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export const AboutScreen: FC = () => {
  return (
    <>
      <Header />
      <About />
      <Footer />
    </>
  )
};