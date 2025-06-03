import React from "react";
import BreadCrumb from "../../components/common/BreadCrumb";
import ServiceSectionOne from "./Sections/ServiceSectionOne";
import ServiceSectionTwo from "./Sections/ServiceSectionTwo";

const Service = () => {
  return (
    <div>
      <BreadCrumb />
      <ServiceSectionTwo />
      <ServiceSectionOne />
    </div>
  );
};

export default Service;
