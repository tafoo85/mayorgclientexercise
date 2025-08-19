import Image from "next/image";
import styles from "./page.module.css";
import { Grid } from "./Grid";
import arrayData from "../../data/arrayofarray.json";
import delimitedData from "../../data/arrayofdelimited.json";
import objectData from "../../data/arrayofobjects.json";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Grid data={objectData}></Grid>
      </main>
    </div>
  );
}
