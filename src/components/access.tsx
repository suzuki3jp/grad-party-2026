import { MAP_EMBED_URL } from "@/constants/links";
import { Separator } from "./separator";

export function AccessSection() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              アクセス
            </h2>
            <Separator className="w-16 h-1 mx-auto mb-6" />
            <p className="text-lg text-foreground/70">
              大学キャンパス内 学生ホール 2階
            </p>
          </div>
          <div className="aspect-video bg-muted rounded-lg overflow-hidden border border-border">
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="会場地図"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
