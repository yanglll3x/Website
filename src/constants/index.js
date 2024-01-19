// import { meta, shopify, starbucks, tesla } from "../assets/images";
// import {
//     ae,
//     ai_logo,
//     arduino_logo,
//     blender_logo,
//     csharp_logo,
//     css_logo,
//     excel_logo,
//     github_logo,
//     html_logo,
//     maya_logo,
//     p5js,
//     unity
// } from "../assets/icons";

import ae from "../assets/icons/ae.svg";
import ai_logo from "../assets/icons/ai_logo.svg";
import arduino_logo from "../assets/icons/arduino_logo.svg";
import blender_logo from "../assets/icons/blender_logo.svg";
import csharp_logo from "../assets/icons/csharp_logo.svg";
import css_logo from "../assets/icons/css_logo.svg";
import excel_logo from "../assets/icons/excel_logo.svg";
import github_logo from "../assets/icons/github_logo.svg";
import html_logo from "../assets/icons/html_logo.svg";
import maya_logo from "../assets/icons/maya_logo.svg";
import p5js from "../assets/icons/p5js.svg";
import unity from "../assets/icons/unity.svg";

import pearlLogo from "../assets/images/pearlLogo.png";
import unswLogo from "../assets/images/unswLogo.png";
import vuwLogo from "../assets/images/vuwLogo.png";
import uoaLogo from "../assets/images/uoaLogo.png";

import PersonalPhoto from '../assets/images/photo.jpg';
import examplePhoto from '../assets/images/example.gif';
import pearlGrid from '../assets/images/pearlGrid.gif';
import mayaGrid from "../assets/images/maya.gif";
import unityGrid from '../assets/images/unity.gif';
import logoGrid from '../assets/images/logo.gif';
import arduinoGrid from '../assets/images/arduino.gif';
import vuw314Grid from '../assets/images/vuw314.gif';
import vuwcodingGrid from '../assets/images/vuwcoding.png';
import gamedesignGrid from '../assets/images/micebreaker.png';


export const skills = [
    {
        imageUrl: maya_logo,
        name: "Maya",
        type: "3D Modelling",
    },
    {
        imageUrl: blender_logo,
        name: "Blender",
        type: "3D Modelling",
    },
    {
        imageUrl: ai_logo,
        name: "Adobe Illustrator",
        type: "Graphics Design",
    },
    {
        imageUrl: ae,
        name: "Adobe After Effect",
        type: "Motion Graphics",
    },
    {
        imageUrl: unity,
        name: "Unity",
        type: "Engine Development",
    },
    {
        imageUrl: github_logo,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: arduino_logo,
        name: "Arduino",
        type: "Prototyping Development",
    },
    {
        imageUrl: html_logo,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css_logo,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: p5js,
        name: "p5.js",
        type: "Creative Coding",
    },
    {
        imageUrl: excel_logo,
        name: "Excel",
        type: "Data Visualization",
    },
    {
        imageUrl: csharp_logo,
        name: "C#",
        type: "Programming",
    }
];

export const experiences = [
    {
        title: "Graphics Designer",
        company_name: "Pearl Standard",
        type: "Outsourced Design Project",
        icon: pearlLogo,
        iconBg: "#accbe1",
        date: "Aug 2021 - Sep 2022",
        task1: "Logo Design",
        points1: [
            "Individually Designed, Conceptualized and created original logo designs tailored to client specifications.",
            "Conducted market research to ensure logos effectively represented brand ethos.",
            "Utilized various design software for logo creation and iteration.",
            "Collaborated closely with clients for feedback and revisions.",
        ],
        task2: "Brand Identity",
        points2: [
            "Individually Designed, Developed comprehensive brand identity guidelines including color palettes, typography, and imagery.",
            "Developed comprehensive brand identity guidelines including color palettes, typography, and imagery.",
            "Worked with marketing teams to align brand identity with overall marketing strategies.",
            "Provided creative direction for promotional materials reflecting brand identity.",
        ],
        task3: "Explainer Video Production",
        points3: [
            "Individually Designed.",
            "Independently conceptualized and created storyboards for explainer videos.",
            "Wrote engaging and informative scripts tailored to the product.",
            "Managed and produced the entire production process, including animation and video editing.",
            "Handled all aspects of sound design, including background music.",
            "Ensured the final product effectively communicated brand values and messages.",
            "Delivered high-quality explainer videos, meeting all project timelines and specifications.",
        ],
    },
];

export const educations = [
    {
        degreeName: "Master of Simulation and Immersive Technologies",
        uni_name: "University of New South Wales",
        type: " ",
        icon: unswLogo,
        iconBg: "#ffeea4",
        date: "Feb 2023 - present",
        points: [
            "Immersive Design, Narrative and Sensemaking, Models and Systems Design, Solution Design, Managing Immersive Projects, etc.",
        ],
    },
    {
        degreeName: "Graduate Diploma in Design Innovation",
        uni_name: "Victoria University of Wellington",
        type: " in Media Design ",
        icon: vuwLogo,
        iconBg: "#b7e4c7",
        date: "Feb 2021 - Dec 2021",
        points: [
            "Creative Coding, Game Design, Audio Space, Web Design, etc.",
        ],
    },
    {
        degreeName: "Bachelor of Science",
        uni_name: "University of Auckland",
        type: " in Mathematics ",
        icon: uoaLogo,
        iconBg: "#a2d2ff",
        date: "Mar 2017 - Dec 2020",
        points: [
            "Abstract Algebra, ODE, PDE, Algebraic Structures, Python, Modal Logic, etc.",
        ],
    },
];

export const worksGrids = [
    {
        worksName: 'Blooming World',
        worksUrl: mayaGrid,
        link: '/work_9320',
    },
    {
        worksName: 'Whispered Bonds',
        worksUrl: unityGrid,
        link: '/work_9903unity',
    },
    {
        worksName: 'Explainer Video',
        worksUrl: pearlGrid,
        link: '/work_explainer',
    },
    {
        worksName: 'Logo & Brand Identity',
        worksUrl: logoGrid,
        link: '/work_logo',
    },
    {
        worksName: 'Emotional Top Hat',
        worksUrl: arduinoGrid,
        link: '/work_9316arduino',
    },
    // {
    //     worksName: '',
    //     worksUrl: PersonalPhoto,
    // },
];

export const pastGrids = [
    {
        pastName: 'p5.js Creative Coding',
        pastUrl: vuwcodingGrid,
        pastLink: '/work_p5js',
    },
    {
        pastName: 'Audio Visual Work: Wandering',
        pastUrl: vuw314Grid,
        pastLink: '/work_vuwaudio',
    },
    {
        pastName: 'Game Design: Micebreaker',
        pastUrl: gamedesignGrid,
        pastLink: '/work_gamedesign',
    },
];

// export const socialLinks = [
//     {
//         name: 'Contact',
//         iconUrl: contact,
//         link: '/contact',
//     },
//     {
//         name: 'GitHub',
//         iconUrl: github,
//         link: 'https://github.com/YourGitHubUsername',
//     },
//     {
//         name: 'LinkedIn',
//         iconUrl: linkedin,
//         link: 'https://www.linkedin.com/in/YourLinkedInUsername',
//     }
// ];

// export const projects = [
//     {
//         iconUrl: pricewise,
//         theme: 'btn-back-red',
//         name: 'Amazon Price Tracker',
//         description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
//         link: 'https://github.com/adrianhajdin/pricewise',
//     },
//     {
//         iconUrl: threads,
//         theme: 'btn-back-green',
//         name: 'Full Stack Threads Clone',
//         description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
//         link: 'https://github.com/adrianhajdin/threads',
//     },
//     {
//         iconUrl: car,
//         theme: 'btn-back-blue',
//         name: 'Car Finding App',
//         description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
//         link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
//     },
//     {
//         iconUrl: snapgram,
//         theme: 'btn-back-pink',
//         name: 'Full Stack Instagram Clone',
//         description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
//         link: 'https://github.com/adrianhajdin/social_media_app',
//     },
//     {
//         iconUrl: estate,
//         theme: 'btn-back-black',
//         name: 'Real-Estate Application',
//         description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
//         link: 'https://github.com/adrianhajdin/projects_realestate',
//     },
//     {
//         iconUrl: summiz,
//         theme: 'btn-back-yellow',
//         name: 'AI Summarizer Application',
//         description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
//         link: 'https://github.com/adrianhajdin/project_ai_summarizer',
//     }
// ];