import Image from "next/image";
import styles from "./page.module.css";
import OS from "@/components/OS/OS";

export default function Home() {
  return (
    <div className={styles.page}>
      <OS/>
    </div>
  );
}
