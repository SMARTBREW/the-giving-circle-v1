import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Baby,
  BookOpen,
  Building2,
  CircleCheck,
  Eye,
  GraduationCap,
  HeartHandshake,
  HeartPulse,
  Layers,
  Leaf,
  LifeBuoy,
  LineChart,
  Lock,
  MapPin,
  PawPrint,
  Receipt,
  ShieldCheck,
  Trees,
  Users,
} from "lucide-react";
import type { NgosIconName } from "@/constants/ngos";

const ICONS: Record<NgosIconName, LucideIcon> = {
  education: GraduationCap,
  shelter: PawPrint,
  women: HeartHandshake,
  verified: BadgeCheck,
  csr: Building2,
  shield: ShieldCheck,
  check: CircleCheck,
  receipt: Receipt,
  city: MapPin,
  guide: BookOpen,
  healthcare: HeartPulse,
  disaster: LifeBuoy,
  child: Baby,
  environment: Leaf,
  rural: Trees,
  impact: LineChart,
  transparent: Eye,
  causes: Layers,
  secure: Lock,
  community: Users,
};

/** One size for every NGO directory icon — no per-item overrides. */
export default function NgosIcon({ name }: { name: NgosIconName }) {
  const Icon = ICONS[name];
  return (
    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--Green-Tint,#e8f5f3)] text-[var(--Circle-Green,#02938c)] sm:h-16 sm:w-16">
      <Icon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.75} aria-hidden />
    </span>
  );
}
