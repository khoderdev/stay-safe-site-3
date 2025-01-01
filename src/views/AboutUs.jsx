import React, { lazy } from "react";

const StaySafeBot = lazy(() => import("../components/bot/ChatBot"));
const CodeOfConduct = lazy(() => import("../components/CodeOfConduct/CodeOfConduct"));

const AboutUsPage = () => {
  return (
    <div className="flex justify-center pt-10">
      <div className="">
        <CodeOfConduct />
      </div>
      {/* <StaySafeBot /> */}
    </div>
  );
};

export default AboutUsPage;
