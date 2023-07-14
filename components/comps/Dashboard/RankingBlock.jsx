"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Components
import Rankers from "./Rankers";
import MainUser from "./MainUser";

// stylesheet
import "../../styles/Dashboard/dashboard.scss";

// Data
import { Users } from "./user";
import Branding from "../landing-page-comps/branding";

const RankingBlock = () => {
  const rankRow = useRef([]);

  // Scroll Animation
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    rankRow.current.forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "bottom 75%",
          // markers: true,
          scrub: true,
        },
        opacity: 0,
        x: -150,
        duration: 0.2,
      });
    });
  }, []);

  return (
    <>
      <div className="md:px-40 px-12 flex flex-col items-center mt-32 mb-16">
        <h1 className="bg_text">
          C{"  "}T{"  "}F{"\n"} CHAMPIONSHIP
        </h1>
        {/* -------- Details Of Login Team */}
        <MainUser />

        {/* -------- Ranking Table */}
        <div className="rankTable w-full mt-12">
          {Users.sort((curr, next) => curr.rank - next.rank).map((user, index) => {
            return (
              <div key={user.rank} className="w-full" ref={(el) => (rankRow.current[index] = el)}>
                <Rankers user={user} />
                <div className="horizon"></div>
                <div className="horizon mt-[8px]"></div>
              </div>
            );
          })}
        </div>
      </div>
      {/* ---- Footer  ----- */}
      <Branding />
    </>
  );
};

export default RankingBlock;
