import React from "react";
import * as styles from "./Process.module.scss";
import Steps from "./Steps/Steps";
import consulting from "../../../assets/svgs/consulting.svg";
import solution from "../../../assets/svgs/business-idea.svg";
import programming from "../../../assets/svgs/programming.svg";
import test from "../../../assets/svgs/clipboard.svg";
import done from "../../../assets/svgs/thumbs-up.svg";
import Zoom from "react-reveal/Zoom";

const process_items = [
  { id: 1, icon: consulting, text: "konsultacje z klientem" },
  { id: 2, icon: solution, text: "dobór najlepszego rozwiązania" },
  { id: 3, icon: programming, text: "programowanie strony internetowej/aplikacji" },
  { id: 4, icon: test, text: "testy jakości" },
  { id: 5, icon: done, text: "gotowa strona internetowa/aplikacja" },
];

const Process = () => {
  return (
    <section className={styles.process_section}>
      <h2 className={styles.title}>PROCES REALIZACJI</h2>
      <div className={styles.steps_container}>
        {process_items.map((item) => (
          <Zoom><Steps number={item.id} key={item.id} icon={item.icon} text={item.text} /></Zoom>
        ))}
      </div>


    </section>
  );
};

export default Process;
