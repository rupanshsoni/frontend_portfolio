import thumbnailMedcare from "../../../assets/thumbnails/medcare.png";
import thumbnailYogacentre from "../../../assets/thumbnails/yogacentre.png";

import type { ProjectPreview } from "../../types";

export default [
    {
        title: "MedCare",
        slug: "medcare",
        thumbnail: thumbnailMedcare,
        description: "Healthcare frontend website",
    },
    {
        title: "Yoga Centre",
        slug: "yogacentre",
        thumbnail: thumbnailYogacentre,
        description: "Yoga studio frontend website",
    },
] as const satisfies ProjectPreview[];
