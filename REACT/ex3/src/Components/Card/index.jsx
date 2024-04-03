import LinkButton from "../LinkButton";
import Title from "../Title";
import CardSection from "./CardSection";
import styles from "./styles.module.css";

export default function Card(props) {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <Title>
        <span>{props.name}</span>
        <button>Follow</button>
      </Title>
      <CardSection>{props.bio}</CardSection>
      <CardSection>{props.phone}</CardSection>
      <CardSection>{props.email}</CardSection>
      <CardSection
        className={styles.links}
        id="links-section"
        data-test="some value"
        arial-label="social links"
      >
        <LinkButton href={props.githubUrl} target="_blank">
          GituHub
        </LinkButton>
        <LinkButton href={props.linkedinUrl} target="_blank">
          Linkedin
        </LinkButton>
        <LinkButton href={props.twitterUrl} target="_blank">
          Twiter
        </LinkButton>
      </CardSection>
    </div>
  );
}
