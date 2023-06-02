import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loaderContainer}>
      <div class={styles.loader}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
