import React, { lazy } from "react";

const CodeOfConduct = lazy(() => import("../components/CodeOfConduct/CodeOfConduct"));


const AboutUsPage = () => {
  return (
    <div className="flex justify-center pt-10">
      <div className="">
        <CodeOfConduct />
      </div>
    </div>
  );
};

export default AboutUsPage;
