"use client";
import { ReactNode, useRef, useEffect, useState } from "react";
import crypotImage from "@/public/compressedape-min.png";
import Image from "next/image";
import arrowPng from "@/public/icons8-arrow-100.png";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import img01 from "@/public/topic-images/image-number-one.png";
import img02 from "@/public/topic-images/image-number-two.jpg";
import img03 from "@/public/topic-images/image-number-three.webp";
import img04 from "@/public/topic-images/image-number-four.jpg";
import img05 from "@/public/topic-images/image-number-five.webp";

import "@/components/styles/landing-page-styles/topicSectionStyles.scss";

let number = 0;
const topicNames = [
  "PWN",
  "Cryptography",
  "Promt injection",
  "Reverse engineering",
  "Web security",
  "Hardware exploration",
];

const topicAssets = [
  {
    id: 1,
    name: "PWN",
    image: crypotImage,
  },
  {
    id: 2,
    name: "Cryptography",
    image: img01,
  },
  {
    id: 3,
    name: "Promt injection",
    image: img02,
  },
  {
    id: 4,
    name: "Reverse engineering",
    image: img03,
  },
  {
    id: 5,
    name: "Web security",
    image: img04,
  },
  {
    id: 6,
    name: "Hardware exploration",
    image: img05,
  },
];
const topicSectionTitle = "{/Topics/]";

interface HoverState {
  active: boolean;
  idx: number;
}

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-90%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-10%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

function Rules() {
  const [isHovered, setIsHovered] = useState<HoverState>({
    active: false,
    idx: 0,
  });
  const modalContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //Move Container
    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.2,
      ease: "power3",
    });
    console.log("isHoverd", isHovered, "index is ", isHovered.idx);
    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.2,
      ease: "power3",
    });
    //Move cursor
    console.log("I have been re rendered", number, "times");
    window.addEventListener("mousemove", (e : MouseEvent) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
    });

    

    return () => {
      window.removeEventListener("mousemove", (e : MouseEvent) => {
        const { pageX, pageY } = e;
        xMoveContainer(pageX);
        yMoveContainer(pageY);
      });
    }
  }, []);

  function mouseEnterInteraction(index: number) {
    setIsHovered({ active: true, idx: index });
    console.log("isHoverd", isHovered, "index is ", index);
  }
  console.log(isHovered);
  //   console.log(isHovered)
  //   console.log("I have been re rendered" , number ,"times")
  function mouseLeaveInteraction(index: number) {
    setIsHovered({ active: false, idx: index });
    console.log("isHoverd", isHovered, "index is ", index);
  }

  return (
    <div className="topicsSection" id="TopicsSection">
      <h1 className="titleOfSection sectionTitle">{topicSectionTitle}</h1>
      {/* <div className="topicContainer">
        <div
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
          ref={parent1Ref}
          className="topicWrapper"
        >
          <div ref={child1Ref} className="topicId">
            001
          </div>
          <div className="topicName">
            <span style={{ opacity: 0 }}>1</span>PWD
          </div>
        </div>
        <div
          ref={parent2Ref}
          onMouseOver={handleHover}
          onMouseLeave={handleMouseLeave}
          className="topicWrapper"
        >
          <div ref={child1Ref} className="topicId">
            002
          </div>
          <div className="topicName">Cryptography</div>
        </div>
        <div
          ref={parent3Ref}
          onMouseOver={handleHover}
          onMouseLeave={handleMouseLeave}
          className="topicWrapper"
        >
          <div ref={child1Ref} className="topicId">
            003
          </div>
          <div className="topicName">Promt injection</div>
        </div>
        <div
          ref={parent4Ref}
          onMouseOver={handleHover}
          onMouseLeave={handleMouseLeave}
          className="topicWrapper"
        >
          <div ref={child1Ref} className="topicId">
            004
          </div>
          <div className="topicName">Reverse engineering</div>
        </div>
        <div
          ref={parent5Ref}
          onMouseOver={handleHover}
          onMouseLeave={handleMouseLeave}
          className="topicWrapper"
        >
          <div ref={child1Ref} className="topicId">
            005
          </div>
          <div className="topicName">Web security</div>
        </div>
        <div
          ref={parent6Ref}
          onMouseOver={handleHover}
          onMouseLeave={handleMouseLeave}
          className="topicWrapper"
        >
          <div ref={child1Ref} className="topicId">
            006
          </div>
          <div className="topicName">Hardware exploration</div>
        </div>
      </div> */}

      <div className="topicContainer">
        {topicNames.map((topicName, index) => {
          return (
            <div
              onMouseEnter={() => {
                setIsHovered({ active: true, idx: index });
              }}
              onMouseLeave={() => {
                setIsHovered({ active: false, idx: index });
              }}
              key={index}
              className="topicWrapper"
            >
              <div className="topicName">{topicName}</div> 
              <div className="topicId">(00{index + 1})</div> 
            </div>
          );
        })}
      </div>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        animate={isHovered ? "enter" : "closed"}
        className="imageContainer"
      >
        <div
          className="someThing"
          style={{ left: isHovered.idx * -200 + "px" }}
        >
          {topicAssets.map((topicAsset, index) => {
            return (
              <div key={index} className={"imageWrapper " + isHovered.idx}>
                <Image
                  src={topicAsset.image}
                  // layout="fill"
                  sizes="120%"
                  // width={200}
                  alt="this is the best"
                />
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
export default Rules;