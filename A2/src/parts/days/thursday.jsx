import React from "react";

const Thursday = () => {
  function calcPercent(x) {
    if (x == 0) {
      return 10;
    }
    return (x * 250) / 100;
  }
  return (
    <section>
      <h2>Thursday</h2>
      <p>
        Sundays are my work days, so most of the day I spend{" "}
        <span className="Working">Working</span> and{" "}
        <span className="Driving">Driving</span>, as it is an important part of
        my work. After work I can spend a little time on{" "}
        <span className="Gaming">Gaming</span> or{" "}
        <span className="Homework">Homework</span> if I still have something
        left to do. I spend the remaining time of my day with my{" "}
        <span className="Family">Family</span> and then go to{" "}
        <span className="Sleeping">Sleep</span>.
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
            y="10"
            width={calcPercent(85)}
            height="10"
            rx="5"
            className="College"
          />
          <rect
            x="10"
            y="32"
            width={calcPercent(25)}
            height="10"
            rx="5"
            className="Driving"
          />
          <rect
            x="10"
            y="54"
            width={calcPercent(50)}
            height="10"
            rx="5"
            className="Homework"
          />
          <rect
            x="10"
            y="76"
            width={calcPercent(0)}
            height="10"
            rx="5"
            className="Gaming"
          />
          <rect
            x="10"
            y="98"
            width={calcPercent(0)}
            height="10"
            rx="5"
            className="Working"
          />
          <rect
            x="10"
            y="120"
            width={calcPercent(75)}
            height="10"
            rx="5"
            className="Sleeping"
          />
          <rect
            x="10"
            y="142"
            width={calcPercent(5)}
            height="10"
            rx="5"
            className="Family"
          />
        </svg>
        <ol>
          <li className="College">8.5 hrs</li>
          <li className="Driving">2.5 hrs</li>
          <li className="Homework">5 hrs</li>
          <li className="Gaming">0 hrs</li>
          <li className="Working">0 hrs</li>
          <li className="Sleeping">7.5 hrs</li>
          <li className="Family">1/2 hr</li>
        </ol>
      </div>
    </section>
  );
};

export default Thursday;
