import { FaJs, FaReact, FaNodeJs, FaPhp, FaDocker, FaAws, FaLinux, FaGithub, FaGlobe } from "react-icons/fa";
import { BiLogoPostgresql, BiLogoMongodb } from "react-icons/bi";
import { CgFigma, CgPerformance } from "react-icons/cg";
import { SiGraphql, SiTailwindcss, SiKubernetes, SiJenkins, SiGooglecampaignmanager360, SiNewrelic, SiRabbitmq, SiJira, SiMysql, SiCodeigniter, SiMagento, SiWordpress, SiGrafana, SiWebpack } from "react-icons/si";
import { MdAccountTree, MdOutlineMiscellaneousServices } from "react-icons/md";
import { VscAzure, VscDebugConsole } from "react-icons/vsc";
import { TbApi, TbBrandLaravel } from "react-icons/tb";
import { DiHeroku, DiResponsive } from "react-icons/di";
import { BsBrowserEdge } from "react-icons/bs";
import { RiCodeSSlashLine, RiSecurePaymentLine } from "react-icons/ri";

export const skills = {
  programmingLanguages: [
    { id: 1, name: "PHP", icon: FaPhp },
    { id: 33, name: "JavaScript", icon: FaJs },
  ],
  frameworksAndLibraries: [
    { id: 2, name: "React.js", icon: FaReact },
    { id: 3, name: "Node.js", icon: FaNodeJs },
    { id: 4, name: "Laravel", icon: TbBrandLaravel },
    { id: 5, name: "CodeIgniter", icon: SiCodeigniter },
    { id: 6, name: "Magento", icon: SiMagento },
    { id: 7, name: "WordPress", icon: SiWordpress },
    { id: 14, name: "GraphQL", icon: SiGraphql },
    { id: 17, name: "TailwindCSS", icon: SiTailwindcss },
  ],
  devOpsAndCloud: [
    { id: 8, name: "Docker", icon: FaDocker },
    { id: 9, name: "AWS", icon: FaAws },
    { id: 10, name: "Microsoft Azure", icon: VscAzure },
    { id: 11, name: "Heroku", icon: DiHeroku },
    { id: 18, name: "Kubernetes", icon: SiKubernetes },
    { id: 19, name: "Jenkins", icon: SiJenkins },
    { id: 23, name: "CI/CD Pipelines", icon: SiGooglecampaignmanager360 },
  ],
  databases: [
    { id: 12, name: "PostgreSQL", icon: BiLogoPostgresql },
    { id: 13, name: "MongoDB", icon: BiLogoMongodb },
    { id: 25, name: "MySQL", icon: SiMysql },
    { id: 28, name: "RabbitMQ", icon: SiRabbitmq },
  ],
  toolsAndPlatforms: [
    { id: 20, name: "Linux (Ubuntu)", icon: FaLinux },
    { id: 26, name: "GitHub, GitLab, Bitbucket", icon: FaGithub },
    { id: 27, name: "New Relic", icon: SiNewrelic },
    { id: 29, name: "Figma", icon: CgFigma },
    { id: 38, name: "Monitoring (Grafana, Papertrail)", icon: SiGrafana },
    { id: 39, name: "Collaboration & Prototyping Tools (Jira, Trello, Slack, LucidChart, Miro)", icon: SiJira },
  ],
  developmentPractices: [
    { id: 15, name: "RESTful API", icon: TbApi },
    { id: 16, name: "SOAP", icon: TbApi },
    { id: 21, name: "Agile & Scrum", icon: SiGooglecampaignmanager360 },
    { id: 22, name: "Microservices", icon: MdOutlineMiscellaneousServices },
    { id: 24, name: "Smarty Templates", icon: FaPhp },
    { id: 30, name: "Performance Optimization", icon: CgPerformance },
    { id: 31, name: "Event-Driven Architecture", icon: MdAccountTree },
    { id: 32, name: "Debugging", icon: VscDebugConsole },
    { id: 37, name: "Jest, PHPUnit, TDD, BDD", icon: RiCodeSSlashLine },
    { id: 40, name: "Solution Architecture", icon: SiWebpack },
    { id: 41, name: "High-Traffic Web Operations", icon: FaGlobe },
  ],
  otherSkills: [
    { id: 34, name: "Responsive Web Applications", icon: DiResponsive },
    { id: 35, name: "Cross-Browser Compatibility", icon: BsBrowserEdge },
    { id: 36, name: "Payment Gateway Integration", icon: RiSecurePaymentLine },
  ],
};