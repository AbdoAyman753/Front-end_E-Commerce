import React, { useState } from "react";

const FAQ = [
  {
    id: 1,
    question: "what is ...?",
    answer: "its nsjsjsjhdh j hdjhjhdj  hdjhjh jhd dhj hjdh sbhdhgh kjdjhfjhj ",
  },
  {
    id: 2,
    question: "what is ...?",
    answer: "its nsjsjsjhdh j hdjhjhdj  hdjhjh jhd dhj hjdh sbhdhgh kjdjhfjhj ",
  },
  {
    id: 3,
    question: "what is ...?",
    answer: "its nsjsjsjhdh j hdjhjhdj  hdjhjh jhd dhj hjdh sbhdhgh kjdjhfjhj ",
  },
  {
    id: 4,
    question: "what is ...?",
    answer: "its nsjsjsjhdh j hdjhjhdj  hdjhjh jhd dhj hjdh sbhdhgh kjdjhfjhj ",
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
    <div className="bg-cyan-600 text-white mx-2 sm:w-3/4 sm:mx-auto md:w-1/2 px-4 py-3 select-none border-4 border-cyan-700 mb-8">
      <h2
        className="text-lg  flex cursor-pointer "
        onClick={() => setIsCollapsed((prev) => !prev)}
      >
        Most Asked Questions <span className="ml-auto">{arrow}</span>
      </h2>
      {!isCollapsed && (
        <ul className="mt-4">
          {FAQ.map((el) => (
            <li
              key={el.id}
              className="w-11/12 mx-auto mb-3 p-2 border-4 border-cyan-700"
            >
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
  );
};

export default Faq;
