import Navigation from "./components/Navigation"; 
import styles from "./styles/Home.module.css"; 

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Witaj na mojej stronie!</h1>
      <p>Wybierz jedną z poniższych podstron:</p>
      <Navigation /> {}
    </div>
  );
}
