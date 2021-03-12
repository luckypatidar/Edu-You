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
        "lorem ipsum lorem ipsum lorem ipsum lorem sipsu lorme isp sdf djkj ikldjflk sskldfj ldf .df kjlj .",
      title: "#1 Mind Diversity",
    },
    {
      icon: "las la-business-time",
      text:
        "lorem ipsum lorem ipsum lorem ipsum lorem sipsu lorme isp sdf djkj ikldjflk sskldfj ldf .df kjlj .",
      title: "#2 Assurance",
    },
    {
      icon: "las la-file-invoice-dollar",
      text:
        "lorem ipsum lorem ipsum lorem ipsum lorem sipsu lorme isp sdf djkj ikldjflk sskldfj ldf .df kjlj . ",
      title: "#3 Liability",
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
      heading: "Java Tutorial",
      link: "https://www.youtube.com/watch?v=eIrMbAQSU34",
    },
    {
      id: 2,
      heading: "Python Tutorial",
      link: "https://www.youtube.com/watch?v=WGJJIrtnfpk",
    },
    {
      id: 2,
      heading: "Python Tutorial",
      link: "https://www.youtube.com/watch?v=WGJJIrtnfpk",
    },
    {
      id: 2,
      heading: "Python Tutorial",
      link: "https://www.youtube.com/watch?v=WGJJIrtnfpk",
    },
    {
      id: 2,
      heading: "Python Tutorial",
      link: "https://www.youtube.com/watch?v=WGJJIrtnfpk",
    },
    {
      id: 2,
      heading: "Python Tutorial",
      link: "https://www.youtube.com/watch?v=WGJJIrtnfpk",
    },
    {
      id: 2,
      heading: "Python Tutorial",
      link: "https://www.youtube.com/watch?v=WGJJIrtnfpk",
    },
    {
      id: 2,
      heading: "Python Tutorial",
      link: "https://www.youtube.com/watch?v=WGJJIrtnfpk",
    },
    {
      id: 2,
      heading: "Python Tutorial",
      link: "https://www.youtube.com/watch?v=WGJJIrtnfpk",
    },
    {
      id: 2,
      heading: "Python Tutorial",
      link: "https://www.youtube.com/watch?v=WGJJIrtnfpk",
    },
    {
      id: 2,
      heading: "Python Tutorial",
      link: "https://www.youtube.com/watch?v=WGJJIrtnfpk",
    },
    {
      id: 2,
      heading: "Python Tutorial",
      link: "https://www.youtube.com/watch?v=WGJJIrtnfpk",
    },
    {
      id: 2,
      heading: "Python Tutorial",
      link: "https://www.youtube.com/watch?v=WGJJIrtnfpk",
    },
    {
      id: 2,
      heading: "Python Tutorial",
      link: "https://www.youtube.com/watch?v=WGJJIrtnfpk",
    },
    {
      id: 2,
      heading: "Python Tutorial",
      link: "https://www.youtube.com/watch?v=WGJJIrtnfpk",
    },
    {
      id: 2,
      heading: "Python Tutorial",
      link: "https://www.youtube.com/watch?v=WGJJIrtnfpk",
    },
    {
      id: 2,
      heading: "Python Tutorial",
      link: "https://www.youtube.com/watch?v=WGJJIrtnfpk",
    },
    {
      id: 2,
      heading: "Python Tutorial",
      link: "https://www.youtube.com/watch?v=WGJJIrtnfpk",
    },
    {
      id: 2,
      heading: "Python Tutorial",
      link: "https://www.youtube.com/watch?v=WGJJIrtnfpk",
    },
    {
      id: 2,
      heading: "Python Tutorial",
      link: "https://www.youtube.com/watch?v=WGJJIrtnfpk",
    },
    {
      id: 2,
      heading: "Python Tutorial",
      link: "https://www.youtube.com/watch?v=WGJJIrtnfpk",
    },
    {
      id: 2,
      heading: "Python Tutorial",
      link: "https://www.youtube.com/watch?v=WGJJIrtnfpk",
    },
    {
      id: 2,
      heading: "Python Tutorial",
      link: "https://www.youtube.com/watch?v=WGJJIrtnfpk",
    },
    {
      id: 2,
      heading: "Python Tutorial",
      link: "https://www.youtube.com/watch?v=WGJJIrtnfpk",
    },
    {
      id: 2,
      heading: "Python Tutorial",
      link: "https://www.youtube.com/watch?v=WGJJIrtnfpk",
    },
    {
      id: 2,
      heading: "Python Tutorial",
      link: "https://www.youtube.com/watch?v=WGJJIrtnfpk",
    },
  ]
};

Mock.onGet("/api/data").reply((config) => {
  const response = database;
  return [200, response];
});
