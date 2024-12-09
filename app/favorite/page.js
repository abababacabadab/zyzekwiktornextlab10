import styles from "../styles/Favorite.module.css";

export default function Favorite() {
  return (
    <div className={styles.favoriteContainer}>
      <h1>Ulubiony film lub gra</h1>
      <p>Moim ulubionym filmem jest...</p>
    </div>
  );
}
