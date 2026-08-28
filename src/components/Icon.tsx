import type { LucideIcon } from "lucide-react";
import {
  Server,
  Monitor,
  Database,
  Settings2,
  Code2,
  Sparkles,
  Briefcase,
  GraduationCap,
  Award,
  Rocket,
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  ShoppingCart,
  Bot,
  MessageSquare,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  server: Server,
  monitor: Monitor,
  database: Database,
  settings: Settings2,
  code: Code2,
  sparkles: Sparkles,
  briefcase: Briefcase,
  graduation: GraduationCap,
  award: Award,
  rocket: Rocket,
  mail: Mail,
  phone: Phone,
  linkedin: Linkedin,
  github: Github,
  "map-pin": MapPin,
  cart: ShoppingCart,
  bot: Bot,
  message: MessageSquare,
};

export function Icon({
  name,
  className,
  color,
}: {
  name: string;
  className?: string;
  color?: string;
}) {
  const Cmp = iconMap[name] ?? Code2;
  return <Cmp className={className} style={color ? { color } : undefined} aria-hidden />;
}
