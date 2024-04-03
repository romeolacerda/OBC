import styles from "./styles.module.css";

export default function Card(props) {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <h3 className={styles.name}> {props.name}</h3>
      <div>{props.bio}</div>
      <div>{props.phone}</div>
      <div>{props.email}</div>
      <div className={styles.links}>
        <a href={props.githubUrl} target="_blank">
          GituHub
        </a>
        <a href={props.linkedinUrl} target="_blank">
          Linkedin
        </a>
        <a href={props.twitterUrl} target="_blank">
          Twiter
        </a>
      </div>
    </div>
  );
}
