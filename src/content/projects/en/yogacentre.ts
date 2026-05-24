import type { ProjectContent } from "../../types";
import thumbnailYogacentre from "../../../assets/thumbnails/yogacentre.png";

export default {
  title: "Yoga Centre",
  theme: "dark",
  tags: ["html", "css", "javascript"],
  videoBorder: false,
  live: "https://yogafrontendd1.vercel.app/",
  source: "https://github.com/rupanshsoni/Yoga_frontend",
  description:
    "Yoga Centre is an elegant, immersive yoga studio website that follows a dawn-to-dusk visual narrative — guiding visitors through the day's rhythm with breath-led design philosophy.<br/><br/>Built with HTML, CSS, and JavaScript, it leverages GSAP and ScrollTrigger for horizontal-scroll class panels, parallax imagery, kinetic typography, and smooth Lenis scrolling. Features include a video hero with scroll cues, value cards, an editorial quote section, community testimonials, and a warm closing CTA — all wrapped in refined typography and a calm, earthy color palette.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: thumbnailYogacentre,
      },
    },
  ],
} as const satisfies ProjectContent;
