"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { useLocale, useTranslations } from "next-intl";

export default function About() {
  const { ref } = useSectionInView("About");
  const t = useTranslations("AboutSection");
  const sectionLan = useTranslations("SectionName");
  const activeLocale = useLocale();

  return (
    <motion.section
      ref={ref}
      className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{sectionLan("about")}</SectionHeading>
      {activeLocale == "zh" ? (
        <p>{t("desc")}</p>
      ) : (
        <>
          <p className="mb-3">
            My journey in coding started when I was 15 years old. I didn&#39;t
            know anything about coding, and I hadn&#39;t used a computer or
            laptop much in my life up until then. I had used them, but not
            extensively enough to become proficient. One of my cousins is a{" "}
            <span className="font-medium italic">Software Developer</span> so I
            asked him what I should learn. He told me to learn HTML. I taught
            myself HTML from{" "}
            <span className="italic underline">
              <a href="https://www.w3schools.com/">W3Schools</a>
            </span>{" "}
            and then learned CSS and after that I was like: ———
            <span className="font-medium italic">
              literally, you can build anything you envision with code.
            </span>
          </p>
          <p className="mb-3">
            The first project I started working on was to upload all the school
            books so that students who didn&#39;t have the books could access
            them on my website. One of my friends told me that I had done a
            great job, which gave me more motivation and increased my interest
            in the field of programming because I like to help others, so it was
            one of the thing that If I learn it I can solve problems of others.
          </p>
          <p className="mb-3">
            {" "}
            Then, I created a courier website for a client who really liked my
            work I don't know how because now when I see it it's like one of the
            worst website I've ever made lmao. Anyway, that client suggested me
            that I should learn React. I started learning React on my own from
            YouTube. It's been over two years now, and I'm still in the field of
            programming.
          </p>
          <p className="mb-3">
            I recently joined{" "}
            <span className="italic underline">
              <a href="https://42kl.edu.my/" target="_blank">
                Sunway 42KL
              </a>{" "}
            </span>
            , where we only do coding. The projects at 42KL are all related to
            the C language. There is only Peer to Peer study so I got Working
            closely with developers, designers, testers, together to make our
            projects better. I&#39;m currently working on the Core program
            there, and after that, I plan to pursue a bachelor&#39;s degree in
            computer science also from 42KL.
          </p>
          <p className="mb-3">
            I thrive on programming challenges and enjoy working with teams to
            solve complex problems. I specialize in technologies such as
            <span className="font-medium italic">
              {" "}
              React, React Native and Next.js
            </span>
            , and have a solid understanding of{" "}
            <span className="font-medium italic">JavaScript, and HTML/CSS</span>
            .{" "}
          </p>
          <p>
            In my spare time, I enjoy exploring new technologies and building
            interesting projects. I also teach coding to some students for free,
            where I share all my knowledge with them. As{" "}
            <b>Margaret Fuller said:</b>{" "}
            <span className="font-medium italic underline">
              &quot;If you have knowledge, let others light their candles in
              it.&quot;
            </span>{" "}
            And when I&#39;m not at the computer, you&#39;ll find me{" "}
            <span className="font-medium italic">
              going out, catching a movie, or keeping fit with regular workouts.
            </span>
          </p>
        </>
      )}
    </motion.section>
  );
}
