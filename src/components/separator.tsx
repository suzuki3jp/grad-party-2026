import { cn } from "@/lib/utils";

export function Separator({ className }: { className?: string }) {
  return <div className={cn("w-full h-px bg-primary", className)} />;
}
