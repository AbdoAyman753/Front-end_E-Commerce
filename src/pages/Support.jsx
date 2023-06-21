import React from "react";
import AppLayout from "../components/AppLayout";
import Faq from "../components/Faq";
import Contact from "../components/Contact";

const Support = () => {
  return (
    <AppLayout className="bg-cyan-100 pt-20">
      <Faq />
      <Contact />
    </AppLayout>
  );
};

export default Support;
