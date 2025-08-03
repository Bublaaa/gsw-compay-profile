import securityService from "../assets/security-service.png";
import administrativeService from "../assets/administration-service.png";
import assistantService from "../assets/assistant-service.png";
import * as LucideIcons from "lucide-react";

export const serviceData = [
  {
    backgroundImage: securityService,
    title: "Security Service",
    description:
      "Certified, adaptable security personnel delivering reliable protection with professionalism.",
    Icon: LucideIcons.Shield,
  },
  {
    backgroundImage: administrativeService,
    title: "Administrative Officer Services",
    description:
      "Courteous, detail-oriented staff ensuring efficient daily operations.",
    Icon: LucideIcons.BookText,
  },
  {
    backgroundImage: assistantService,
    title: "Office Assistant Services",
    description:
      "Disciplined, proactive assistants supporting tasks with speed and reliability.",
    Icon: LucideIcons.BrushCleaning,
  },
];
