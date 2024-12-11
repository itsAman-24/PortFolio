import { experiences } from "../../Script";
import styles from "./experience.module.css";
const Experience = () => {
  return (
    <>
      <section id={styles.experience}>
        {experiences.map((e) => {
          return (
            <div className={styles.mainContainer}>
              <div className={styles.container}>
                <span className={styles.spa}>{e.position} at {e.company}</span>
              </div>
              <div className={styles.content}>
                {e.desc.map((des) => {
                  return <li>{des}</li>;
                })}
              </div>
              <div className={styles.label}>({e.year})</div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Experience;
