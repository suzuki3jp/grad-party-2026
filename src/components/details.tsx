import { Calendar, Clock, type LucideIcon, MapPin, Users } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { Separator } from "./separator";
import { Card } from "./ui/card";

const details: ComponentProps<typeof DetailCard>[] = [
  {
    Icon: Calendar,
    title: "日時",
    secondary: "2026年3月25日（水）",
    content: (
      <>
        <span className="block mt-1">18:00 - 21:00</span>
        <span className="block mt-1 text-sm">受付開始: 17:30</span>
      </>
    ),
  },
  {
    Icon: MapPin,
    title: "会場",
    secondary: "大学キャンパス内",
    content: (
      <>
        <span className="block mt-1">学生ホール 2階 バンケットルーム</span>
        <span className="block mt-2 text-sm">〒100-0001 東京都千代田区...</span>
      </>
    ),
  },
  {
    Icon: Clock,
    title: "プログラム",
    content: (
      <ul className="text-foreground/70 leading-relaxed space-y-1">
        <li>• 歓談・軽食</li>
        <li>• 思い出のスライドショー</li>
        <li>• 表彰式</li>
        <li>• フォトセッション</li>
        <li>• フリータイム</li>
      </ul>
    ),
  },
  {
    Icon: Users,
    title: "参加について",
    secondary: "参加費: 無料",
    content: (
      <>
        <span className="block mt-2">持ち物: 学生証</span>
        <span className="block mt-1">服装: スマートカジュアル</span>
        <span className="block mt-2 text-sm">※途中参加・退出可能です</span>
      </>
    ),
  },
];

export function DetailsSection() {
  return (
    <section id="details" className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              イベント概要
            </h2>
            <Separator className="w-16 h-1 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {details.map((detail) => (
              <DetailCard key={detail.title} {...detail} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DetailCard({
  Icon,
  title,
  secondary,
  content,
}: {
  Icon: LucideIcon;
  title: string;
  secondary?: string;
  content: ReactNode;
}) {
  return (
    <Card className="p-8 border-border hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-display text-2xl font-semibold mb-2">{title}</h3>
          <div className="text-foreground/70 leading-relaxed">
            {secondary && (
              <span className="block font-medium text-foreground">
                {secondary}
              </span>
            )}
            {content}
          </div>
        </div>
      </div>
    </Card>
  );
}
