import styles from "./styles.module.css";

export default function CardSection(porps) {
  return <div className={styles.wrapper}>{porps.children}</div>;
}
