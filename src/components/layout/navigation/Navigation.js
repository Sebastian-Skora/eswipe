import React from "react";
import { Link as NavLink } from "gatsby";
import * as styles from "./Navigation.module.scss";
import * as actions from "../../redux/actions/index";
import { connect } from "react-redux";
import DropDownNav from "../../smallComponents/DropDownNav/DropDownNav";

const checkPathForDropdown = (elements) => {
  const url = `/${window.location.href.split("/").at(-2)}/`;
  let result = false;
  elements.filter((el) => {
    if (el === url) {
      result = true;
    }
  });
  return result;
};

const Navigation = () => (
  <ul className={styles.navList}>
    <li className={styles.navItem}>
      <NavLink
        activeClassName={styles.itemLinkActive}
        className={styles.itemLink}
        to="/"
      >
        Strona główna
      </NavLink>
    </li>
    <li className={styles.navItem}>
      <NavLink
        activeClassName={styles.itemLinkActive}
        className={styles.itemLink}
        to="/uslugi/"
      >
        Usługi
      </NavLink>
    </li>
    <DropDownNav pages={["słownik", "blog"]}>
      <li className={styles.navItem}>
        <div
          activeClassName={styles.itemLinkActive}
          className={
            checkPathForDropdown(["/slownik/", "/blog/"])
              ? `${styles.itemLink} ${styles.itemLinkActive}`
              : `${styles.itemLink}`
          }
        >
          Artykuły
        </div>
      </li>
    </DropDownNav>
    <li className={styles.navItem}>
      <NavLink
        className={`${styles.itemLink} ${styles.contact}`}
        to="/kontakt/"
      >
        Kontakt
      </NavLink>
    </li>
  </ul>
);

const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: () => dispatch(actions.onQuotationModal()),
  };
};

export default connect(null, mapDispatchToProps)(Navigation);
