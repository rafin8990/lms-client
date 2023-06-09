import React from "react";
import Header from "./Header/Header";
import Counter from "./Counter/Counter";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import Learner from "./Learner/Learner";
import ExtraSection from "./ExtraSection/ExtraSection";
import Question from "./Question/Question";
import VideoSection from "./VideoSection/VideoSection";

const LandingPage = () => {
  return (
    <div>
      <Header></Header>
      <Counter></Counter>
      <WhatWeDo></WhatWeDo>
      <VideoSection></VideoSection>
      <Learner></Learner>
      <ExtraSection></ExtraSection>
      <Question></Question>
    </div>
  );
};

export default LandingPage;
