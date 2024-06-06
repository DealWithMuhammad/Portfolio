import React from "react";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import refugeeActImage from "@/public/react.png"
import emailImage from "@/public/email.png"
import acternityImage from "@/public/acertnity.png"
import { TbWorld } from "react-icons/tb";
import { SiDotnet } from "react-icons/si";
import { FaWordpress } from "react-icons/fa6";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experiences",
        hash: "#experience",
    },
    // {
    //     name: "Contact",
    //     hash: "#contact",
    // },
] as const;


export const headerLanguageMap = {
    Home: '首页',
    About: '关于我',
    Projects: '我的项目',
    Skills: '我的技能',
    Experiences: '我的经历',
}

export const experiencesData = [
 
    {
        title: "Web Developer Role at Refugee Action for Change",
        location: "Remote",
        description:
            "Developed Refugee Action for Change (ReAct) NGO's website utilizing Next.js technology. Focused on user-friendly design and accessibility, ensuring information accessibility for all stakeholders. Created a small CMS panel where admin can make small changes like change image and text etc.",
        icon: React.createElement(TbWorld),
        date: "Jan 2024 - 2024 April",
    },
        {
        title: "Create Stunning Landing Page",
        location: "Remote",
        description:
            "Recently crafted a visually engaging landing page for a Fiverr client using Next.js, featuring seamless animations powered by the Acertinty UI library.",
        icon: React.createElement(SiNextdotjs),
        date: "May 2024 - 2024 May",
    },

     {
        title: "FitPlus App",
        location: "Remote | Fiverr",
        description:
            "Developed a fitness app for a client in React Native within 48 hours, featuring a calorie counting section and user authentication with Firebase. Successfully implemented a secure login system with Firebase database integration to store user details.",
        icon: React.createElement(FaReact),
        date: "2024 Feb - 2024 Feb",
    },
    {
        title: "Freelance ASP.NET Developer ",
        location: React.createElement("span", {},
            React.createElement("a", {
                style: { textDecoration: 'underline' },
                target: "_blank"
            }, "Telcan Inc."),
            " Remote"
        ),
        description:
            "Successfully diagnosed and resolved critical bugs in an existing ASP.NET project, enhancing the application's stability and functionality.\n Collaborated with the client to understand specific SQL Server permission requirements and implemented granular access controls to enhance data security and integrity. Provided clear and concise documentation to facilitate the client's understanding of the implemented SQL permissions, enabling them to manage permissions effectively in the future.",
        icon: React.createElement(SiDotnet),
        date: "Mar 2023 - 2023 July",
    },
   
    {
        title: "WordPress Website",
        location: "Remote",
        description:"It was my first ever project made for a client. I developed a customized real estate website for the client using WordPress as the content management system. Leveraged the RealEstate plugin to enhance property listing functionality, enabling the client to showcase properties efficiently. Implemented responsive web design principles to ensure seamless user experiences across various devices, resulting in improved user engagement.",
        icon: React.createElement(FaWordpress),
        date: "2021 Dec - 2022 Jan",
    },

]




export type ProjectTags = typeof projectsData[number]["tags"];

export const projectsData = [
    {
        title: "Refugee Action for Change",
        title_zh: '',
        description:"Developed Refugee Action for Change NGO's website utilizing Next.js technology. Focused on user friendly design and accessibility, ensuring information accessibility for all stakeholders. ",
        desc_zh: "Developed Refugee Action for Change NGO's website utilizing Next.js technology. Focused on user friendly design and accessibility, ensuring information accessibility for all stakeholders. ",
        tags: ["Next.Js", "TypeScript", "Tailwind", 'Chakra UI', "Firebase"],
        imageUrl: refugeeActImage,
        projectUrl: 'https://github.com/DealWithMuhammad/react-NGO',
        demoUrl: 'https://www.reactmalaysia.org/',
    },
    {
        title: "Palazzo Altura",
        title_zh: '游戏枢纽站',
        description:'Developed a contemporary user interface (UI) with animations utilizing Framer Motion and Aeternity UI for a client website built on Next.js.',
        desc_zh: "响应式游戏网格，支持搜索和过滤，使用react query实现无限滚动，使用Zod进行表单验证，Zustand进行状态管理。",
        tags: ["Next.js", "TypeScript", "Framer Motion", "Aeternity UI", "Chakra UI"],
        imageUrl: acternityImage,
        projectUrl: 'https://github.com/DealWithMuhammad/palazzo-altura',
        demoUrl: 'https://palazzo-altura.vercel.app/',


    },
    {
        title: "Py-gmail Automation",
        title_zh: "社交新闻论坛",
        description: 'Automate Interac e-Transfer extraction from Gmail using Python. Retrieve details, process, and store in a MariaDB database. Simple setup and usage. Efficient tracking of Interac transactions.',
        desc_zh: "一个现代化的全栈Reddit克隆",
        tags: ["Python", "Py Mail"],
        imageUrl: emailImage,
        projectUrl: 'https://github.com/DealWithMuhammad/gmail-interac-transfer-automation',
        demoUrl: '',
    },


]

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Next",
    "Git",
    "Github",
    "Tailwind",
    "Chakra UI",
    "Boostrap",
    "Firebase",
    "Framer Motion",
    "C langauge",
    "Wordpress"
] 
