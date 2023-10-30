"use client";
import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";

function index() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <Image
          src={"/LandingBG.png"}
          fill={true}
          alt="background PageIntro"
          priority={true}
        />
      </div>
    </div>
  );
}

export default index;
