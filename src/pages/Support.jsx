import React, { useLayoutEffect } from "react";
import Faq from "../components/support/Faq";
import Contact from "../components/support/Contact";

const Support = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="grow">
      <Faq />
      <Contact />
    </div>
  );
};

export default Support;
