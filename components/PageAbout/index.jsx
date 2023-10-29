"use client";
import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";

function index() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <Image src={"/PageAboutBG.jpg"} fill={true} alt="About Us Image" />
      </div>
    </div>
  );
}

export default index;
