import React from "react";

import Accordion from "../components/Accordion";

const AccordionPage = () => {
  const items = [
    {
      id: "1",
      label: "Quote-1",
      content:
        "Famous soccer athlete, Pele who appeared to be born with plenty of natural talent, continues this quote by adding “It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing.",
    },
    {
      id: "2",
      label: "Quote-2",
      content:
        "Another great quote by Muhammad Ali. As a founder of a company it is wise to try and de-risk your venture by learning as much as you can and testing as much as you can, step by step. Yet, at some point you will have to take calculated risks. That doesn’t mean you won’t have to deal with fear or doubt. You just have to act anyway.",
    },
    {
      id: "3",
      label: "Quote-3",
      content:
        "Don’t worry so much about how long you’ve been doing it. Make today count. Focus on what you can do right now. That advice seemed to work well for Muhammed Ali. It can serve you well too, by keeping you in motion and not worrying about the past or future, of which you have no control over.",
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default AccordionPage;
