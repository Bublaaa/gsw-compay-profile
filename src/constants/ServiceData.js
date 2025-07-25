import securityService from "../assets/security-service.png";
import administrativeService from "../assets/administration-service.png";
import assistantService from "../assets/assistant-service.png";
import * as LucideIcons from "lucide-react";

export const serviceData = [
  {
    backgroundImage: securityService,
    title: "Security Service",
    description:
      "We offer certified, well-trained security personnel who are fully prepared to serve in diverse industries and dynamic work environments with professionalism and readiness.",
    Icon: LucideIcons.Shield,
  },
  {
    backgroundImage: administrativeService,
    title: "Administrative Officer Services",
    description:
      "Our administrative staff are courteous, detail-oriented, and trained to provide efficient support for day-to-day operations with professionalism and precision.",
    Icon: LucideIcons.BookText,
  },
  {
    backgroundImage: assistantService,
    title: "Office Assistant Services",
    description:
      "We supply disciplined, trustworthy, and proactive office assistants who bring speed, responsibility, and a positive mindset to every task.",
    Icon: LucideIcons.BrushCleaning,
  },
];
