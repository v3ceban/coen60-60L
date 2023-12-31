import React from "react";

const Tuesday = () => {
  function calcPercent(x) {
    if (x == 0) {
      return 10;
    }
    return (x * 250) / 100;
  }
  return (
    <section>
      <h2>Tuesday</h2>
      <p>
        On Tuesdays, I spend most of my time in{" "}
        <span className="College">College</span> and doing{" "}
        <span className="Homework">Homework</span>. I also need to{" "}
        <span className="Driving">Drive</span> a lot because I have to drop off
        and pick up my wife from her classes. In the evenings I tend to do some{" "}
        <span className="Working">Work</span> and spend the rest of my day with
        my <span className="Family">Wife</span>. After a long day, I get about
        7.5 hours of <span className="Sleeping">Sleep</span>.
      </p>
      <div className="infographics">
        <ol>
          <li className="College">College</li>
          <li className="Driving">Driving</li>
          <li className="Homework">Homework</li>
          <li className="Gaming">Gaming</li>
          <li className="Working">Working</li>
          <li className="Sleeping">Sleeping</li>
          <li className="Family">Family</li>
        </ol>
        <svg
          width="270"
          height="162"
          viewBox="0 0 270 162"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="10"
            y="11"
            width={calcPercent(70)}
            height="10"
            rx="5"
            className="College"
          >
            <title>College: 7 hours (29.2%)</title>
          </rect>
          <rect
            x="10"
            y="33"
            width={calcPercent(15)}
            height="10"
            rx="5"
            className="Driving"
          >
            <title>Driving: 1.5 hours (6.25%)</title>
          </rect>
          <rect
            x="10"
            y="55"
            width={calcPercent(55)}
            height="10"
            rx="5"
            className="Homework"
          >
            <title>Homework: 5.5 hours (22.9%)</title>
          </rect>
          <rect
            x="10"
            y="77"
            width={calcPercent(0)}
            height="10"
            rx="5"
            className="Gaming"
          >
            <title>Gaming: 0 hours (0.00%)</title>
          </rect>
          <rect
            x="10"
            y="99"
            width={calcPercent(10)}
            height="10"
            rx="5"
            className="Working"
          >
            <title>Working: 1 hour (4.17%)</title>
          </rect>
          <rect
            x="10"
            y="122"
            width={calcPercent(75)}
            height="10"
            rx="5"
            className="Sleeping"
          >
            <title>Sleeping: 7.5 hours (31.3%)</title>
          </rect>
          <rect
            x="10"
            y="144"
            width={calcPercent(15)}
            height="10"
            rx="5"
            className="Family"
          >
            <title>Family: 1.5 hours (6.24%)</title>
          </rect>
        </svg>
        <ol>
          <li className="College">7 hrs</li>
          <li className="Driving">1.5 hrs</li>
          <li className="Homework">5.5 hrs</li>
          <li className="Gaming">0 hrs</li>
          <li className="Working">1 hr</li>
          <li className="Sleeping">7.5 hrs</li>
          <li className="Family">1.5 hrs</li>
        </ol>
      </div>
    </section>
  );
};

export default Tuesday;
