import React from "react";
import DisplayContent from "../src/components/DisplayContent";
import { Content } from "../src/types";

const ExploreJs = () => {
  const content: Content = {
    title: "JavaScript/Css Mentorship & Community",
    date: "",
    slug: "explore-js",
    data: [
      {
        alt: "Explore JS ",
        type: "image",
        src: "/img/EXPLORE_JS.png",
      },
      {
        type: "p",
        text: "Interested in JavaScript and Css problem solving/ advancing your skills? With others?",
      },
      {
        type: "a",
        href: "https://explorejs.com",
        text: "Join us @ Explore JS !",
      },
      {
        type: "p",
        text: "I am not a 10x engineer, maybe 1.0x ? :-) Nevertheless I have been enjoying mentoring via the Coding Coach and Exercism.io platforms and I have a dozen regular mentees and growing interest. I have found that short messages (slack) doesn’t work so well and email with full code sandbox/gh is better, but really the more efficient use of my time and the mentees is connecting for a 30 min - 1 hour screen share. This of course does not scale so well and I find myself sending similar follow up emails with resources and going over similar topics with each person. Some mentees have voiced idea to hire me for tutoring once they have extra funds, or that I should launch video series with short 5 mins videos.",
      },
    ],
    status: "published",
    tags: ["mentoring", "JavaScript"],
    thumbNail: "/img/EXPLORE_JS.png",
  };
  return <DisplayContent content={content} />;
};

export default ExploreJs;
