import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SURVEY_URL } from "@/constants/links";
import { Separator } from "./separator";

export function SurveySection() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            卒業後アンケート
          </h2>
          <Separator className="w-16 h-1 mb-8 mx-auto" />
          <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
            卒業式を終えた皆さんの声をお聞かせください。
            <br />
            今後のイベント企画の参考にさせていただきます。
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 text-base"
            asChild
          >
            <Link href={SURVEY_URL} target="_blank" rel="noopener noreferrer">
              アンケートに回答する
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
