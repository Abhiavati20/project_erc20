/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/Minters.module.css";
import { useWalletContext } from "../context/walletContext";
import { formatAddress } from "../helpers/constants";
import Copy from "./Copy";

export default function Minters() {
  const { minters } = useWalletContext();

  return (
    <div className={styles.container}>
      <h2 id="heading">Token Holders</h2>
      <div className={styles.content}>
        {minters.length > 3 && <div id={styles.gry5} />}
        {minters
          .filter((minter) => minter.token)
          .map((minter) => (
            <Card key={minter._id} minter={minter} />
          ))}
      </div>
    </div>
  );
}

function Card({ minter }) {
  return (
    <div className={styles.cardContainer}>
      {/* // TODO Integrate */}
      <div id={styles.gry4} />
      <div id={styles.gry2} />
      <div id={styles.gry3} />
      <div id={styles.gry1} />
      <div className={styles.card}>
        <div className={styles.cardLeft}>
          <h3>Ethereum</h3>
          <h2>{minter.token} AAA</h2>
          <p className="address">
            {formatAddress(minter.address)} <Copy address={minter.address} />
          </p>
        </div>
        <div className={styles.cardRight}>
          <img src="ethereum-icon.svg" alt="ethereum" />
        </div>
      </div>
    </div>
  );
}