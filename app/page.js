"use client";
import { useEffect } from "react";
import NavBar from "../components/NavBar/index";
import styles from "./page.module.scss";
import PageIntro from "../components/PageIntro";
import PageAbout from "../components/PageAbout";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
        lenisOptions: {
          duration: 1.5,
        },
      });
    })();
  }, []);

  return (
    <main className={styles.container}>
      <NavBar />
      <PageIntro />
      <PageAbout />
    </main>
  );
}
