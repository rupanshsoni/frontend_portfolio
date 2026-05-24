import type { ProjectContent } from "../../types";
import thumbnailMedcare from "../../../assets/thumbnails/medcare.png";

export default {
  title: "MedCare",
  theme: "light",
  tags: ["html", "css", "javascript"],
  videoBorder: true,
  live: "https://med-frontendd1.vercel.app/",
  source: "https://github.com/rupanshsoni/Med_frontend",
  description:
    "MedCare is a comprehensive healthcare frontend website designed to deliver a premium, trust-building user experience for a medical practice.<br/><br/>Built with vanilla HTML, CSS, and JavaScript, it features a cinematic video hero section, scroll-triggered reveal animations, a holistic care approach layout, specialist schedules, interactive anatomy hotspots with floating cards, patient testimonials, and a full-screen footer CTA — all crafted with a focus on clean typography, smooth transitions, and responsive design.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: thumbnailMedcare,
      },
    },
  ],
} as const satisfies ProjectContent;
