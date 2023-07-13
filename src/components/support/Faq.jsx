import React, { useState } from "react";

import faq from "../../assets/img/faq.jpg";

const FAQ = [
  {
    id: 1,
    question: "How can I create an account on v9Games?",
    answer: "Click on sign up and fill your information in the form",
  },
  {
    id: 2,
    question: "How can I purchase a game?",
    answer: "From the store add the game to your cart the order it",
  },
  {
    id: 3,
    question: "How can I update my password?",
    answer: "Go to edit password section in your profile and updated it",
  },
  {
    id: 4,
    question: "How can I contact support team?",
    answer: "Contact us on xxxx@ay7aga.com",
  },
];

const closed = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    />
  </svg>
);

const opened = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 15.75l7.5-7.5 7.5 7.5"
    />
  </svg>
);

const Faq = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [active, setActive] = useState(0);

  const arrow = isCollapsed ? closed : opened;

  return (
    <div className="relative h-[87vh] pt-20">
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-60 z-10"></div>
      <img
        src={faq}
        alt=""
        loading="lazy"
        className="absolute w-full h-full top-0 left-0"
      />
      <div className="bg-primary-color text-white mx-2 sm:w-3/4 sm:mx-auto md:w-1/2 px-4 py-3 select-none border-4 border-slate-600 mb-8 relative z-10">
        <h2
          className="text-lg  flex cursor-pointer "
          onClick={() => setIsCollapsed((prev) => !prev)}
        >
          Most Asked Questions <span className="ml-auto">{arrow}</span>
        </h2>
        {!isCollapsed && (
          <ul className="mt-4">
            {FAQ.map((el) => (
              <li key={el.id} className="w-11/12 mx-auto mb-3 p-2 border-4 ">
                <p className="flex justify-between">
                  {el.question}{" "}
                  <span
                    className="cursor-pointer"
                    onClick={() =>
                      setActive((prev) => (prev == el.id ? 0 : el.id))
                    }
                  >
                    {active == el.id ? opened : closed}
                  </span>
                </p>
                {active == el.id && <p className="pl-4 pt-3">{el.answer}</p>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Faq;
