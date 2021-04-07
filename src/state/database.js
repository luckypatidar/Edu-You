import Mock from "./mock";

const photo = require("../assets/placeholders/photofinal.png");
// const logotype = require("../assets/placeholders/logotype.png");
const icon = require("../assets/placeholders/icon.svg");
const logotype = require("../assets/placeholders/aboutusbg.jpg");
const newbg = require("../assets/placeholders/contact.png");
const videoPoster = require("../assets/placeholders/videoposter.jpg");
const logo = require("../assets/placeholders/logo.png");

const database = {
  fast_links: [
    {
      title: "Homepage",
      url: "/home",
    },
    {
      title: "Startups",
      url: "/startups",
    },
    {
      title: "Team",
      url: "/team",
    },
    {
      title: "Events",
      url: "events",
    },
    {
      title: "Blogs",
      url: "blogs",
    },
  ],
  features2: [
    {
      icon: "las la-brain",
      text:
        "In youtube we have different kind of video which divert our mind into other thing which is not good in stduy.",
      title: "Mind Diversity",
    },
    {
      icon: "las la-business-time",
      text:
        "We track your progress so that we can warn you how much path you have completed or how much is there to achieve.",
      title: "Assurance",
    },
    {
      icon: "las la-file-invoice-dollar",
      text:
        "We think education has to be free. It's a right of every citizen to get education of free of cost. With that intention every thing here is free of cost.",
      title: "Liability",
    },
  ],
  header_bgs: {
    about: newbg,
    about_video_poster: videoPoster,
    contacts: newbg,
    services: newbg,
  },
  menu: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About us",
      url: "/about",
    },
    {
      name: "New",
      url: "/new",
    },
    {
      name: "Contacts",
      url: "/contacts",
    },
  ],

  posts: [
    {
      category_id: 1,
      featured: true,
      full:
        "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities.<p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
      id: "post_0",
      image: photo,
      logo: logo,
      posting_date: "Feb 14, 2020",
      quote:
        "Enthusiastically generate multidisciplinary benefits rather than bricks-and-clicks action items. ",
      short:
        "Flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mout and idea-sharing.",
      title: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
      user_id: "2",
    },
  ],
  youtubelink: [
    {
      id: 1,
      heading: "Lecture-1 (Introduction to Dimensions)",
      link: "https://www.youtube.com/watch?v=UuzZYVRcemY&list=PLF_7kfnwLFCFFKkWI8iRKE2RW7-orWJ2N",
    },
    {
      id: 2,
      heading: "Lecture-2 (Principle of Homogeneity of Dimensions)",
      link: "https://www.youtube.com/watch?v=MxO4q2BLAvM&list=PLF_7kfnwLFCFFKkWI8iRKE2RW7-orWJ2N&index=2",
    },
    {
      id: 3,
      heading: "Lecture-3 (Deriving the Formula of any Physical Quantity)",
      link: "https://www.youtube.com/watch?v=JZ8rc02PG5o&list=PLF_7kfnwLFCFFKkWI8iRKE2RW7-orWJ2N&index=3",
    },
    {
      id: 4,
      heading: "Lecture-4 (Best Questions on Dimensional Analysis)",
      link: "https://www.youtube.com/watch?v=C-3OExIVuGQ&list=PLF_7kfnwLFCFFKkWI8iRKE2RW7-orWJ2N&index=4",
    },
    {
      id: 5,
      heading: "Lecture-5 (Significant Figures)",
      link: "https://www.youtube.com/watch?v=d9PWG1xro68&list=PLF_7kfnwLFCFFKkWI8iRKE2RW7-orWJ2N&index=5",
    },
    {
      id: 6,
      heading: "Lecture-6 (Error Analysis - Part 1)",
      link: "https://www.youtube.com/watch?v=YIUHndbwnZE&list=PLF_7kfnwLFCFFKkWI8iRKE2RW7-orWJ2N&index=6",
    },
    {
      id: 7,
      heading: "Lecture-7 (Error Analysis - Part 2)",
      link: "https://www.youtube.com/watch?v=SvVqfDqFOT8&list=PLF_7kfnwLFCFFKkWI8iRKE2RW7-orWJ2N&index=7",
    },
    {
      id: 8,
      heading: "Lecture-8 (Best Concepts with Basic to Advance Questions)",
      link: "https://www.youtube.com/watch?v=JRv_HJfGXPg&list=PLF_7kfnwLFCFFKkWI8iRKE2RW7-orWJ2N&index=8",
    },
    {
      id: 9,
      heading: "Lecture-9 (Screw Gauge Or Micrometer Screw Gauge)",
      link: "https://www.youtube.com/watch?v=RVqmzuHyCA4&list=PLF_7kfnwLFCFFKkWI8iRKE2RW7-orWJ2N&index=9",
    },

  ]
};

Mock.onGet("/api/data").reply((config) => {
  const response = database;
  return [200, response];
});
