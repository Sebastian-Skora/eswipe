import React, { Component } from "react";
import Button from "../../../../smallComponents/Button/Button";
import * as styles from "./WordsSlider.module.scss";

const textContent = [
  {
    mainTitle: "RESPONSYWNOŚĆ",
  },
  {
    mainTitle: "NOWOCZESNE TECHNOLOGIE",
  },
  {
    mainTitle: "MOŻLIWOŚĆ ZARZĄDZANIA TREŚCIĄ",
  },
  {
    mainTitle: "APLIKACJE INTERNETOWE",
  },
];

class WordsSlider extends Component {
  state = {
    currentTextId: 0,
    animationStart: true,
  };

  startCarousel = () => {
    this.animationInterval = setInterval(() => {
      this.setState((prevState) => ({
        animationStart: !prevState.animationStart,
      }));
    }, 1500);
    this.carouselInterval = setInterval(() => {
      if (this.state.currentTextId < textContent.length - 1) {
        this.setState((prevState) => ({
          currentTextId: prevState.currentTextId + 1,
        }));
      } else {
        this.setState(() => ({
          currentTextId: 0,
        }));
      }
    }, 3000);
  };

  componentDidMount() {
    this.startCarousel();
  }
  componentWillUnmount() {
    clearInterval(this.animationInterval);
    clearInterval(this.carouselInterval);
  }

  render() {
    return (
      <div className={styles.mainPage_container}>
        <div>
          <p
            className={
              this.state.animationStart
                ? `${styles.mainTitle} ${styles.animated}`
                : styles.mainTitle
            }
          >
            {textContent[this.state.currentTextId].mainTitle}
          </p>
          <h2 className={styles.subTitle}>
            Usługi tworzenia stron internetowych i aplikacji
          </h2>
        </div>
        <div style={{ marginTop: "30px" }}>
          <Button
            children={"darmowa wycena"}
            secondary={false}
            path={"/kontakt/"}
            router
          ></Button>

          <Button secondary section="technology">
            TECHNOLOGIE
          </Button>
        </div>
      </div>
    );
  }
}

export default WordsSlider;
