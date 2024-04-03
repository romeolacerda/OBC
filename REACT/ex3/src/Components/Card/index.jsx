import Title from "../Title";
import styles from "./styles.module.css";

export default function Card(props) {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <Title>
        <span>{props.name}</span>
        <button>Follow</button>
      </Title>
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
