import React, { useEffect } from "react";
import Footer from "./Footer/Footer";
import Header from "./header/Header";
import PhoneCall from "../PhoneCall";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { connect } from "react-redux";

const isBrowser = () => typeof window !== "undefined";

const Layout = ({ children, disableContact, openMessengerRedux }) => {
  return (
    <>
      <Header />

      {children}
      <Footer />

      {openMessengerRedux && (
        <MessengerCustomerChat
          pageId="104782821734352"
          appId="589168405818513"
          htmlRef={isBrowser() && window.location.pathname}
          language="pl_PL"
        />
      )}
      {!disableContact && <PhoneCall />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    openMessengerRedux: state.openMessenger,
  };
};

export default connect(mapStateToProps, null)(Layout);
