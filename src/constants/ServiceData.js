import * as LucideIcons from "lucide-react";
import securityBg from "../assets/security-bg.png";
import adminBg from "../assets/admin-bg.png";
import assistantBg from "../assets/assistant-bg.png";

export const serviceData = [
  {
    service: "security",
    title: "Security Service",
    description:
      "Certified, adaptable security personnel delivering reliable protection with professionalism.",
    Icon: LucideIcons.Shield,
    backgroundImage: securityBg,
  },
  {
    service: "admin",
    title: "Administrative Officer Services",
    description:
      "Courteous, detail-oriented staff ensuring efficient daily operations.",
    Icon: LucideIcons.BookText,
    backgroundImage: adminBg,
  },
  {
    service: "assistant",
    title: "Office Assistant Services",
    description:
      "Disciplined, proactive assistants supporting tasks with speed and reliability.",
    Icon: LucideIcons.BrushCleaning,
    backgroundImage: assistantBg,
  },
];
