import React from "react";
import Header from "./Header/Header";
import Counter from "./Counter/Counter";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import Learner from "./Learner/Learner";
import ExtraSection from "./ExtraSection/ExtraSection";
import VideoSection from "./VideoSection/VideoSection";
import Clients from "./Clients/Clients";

const LandingPage = () => {
  return (
    <div>
      <Header></Header>
      <Counter></Counter>
      {/* <Clients></Clients> */}
      <WhatWeDo></WhatWeDo>
      <VideoSection></VideoSection>
      <Learner></Learner>
      {/* <ExtraSection></ExtraSection> */}
    </div>
  );
};

export default LandingPage;
