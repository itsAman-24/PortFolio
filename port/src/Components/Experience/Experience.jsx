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
                {/* <a href={e.link} target="next">
                  <img src={e.companyIcon} alt="company icon" style={{width: '50px'}}/>
                </a> */}
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
