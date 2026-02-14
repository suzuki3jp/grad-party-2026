import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "./separator";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          // TODO: manus が生成した画像のURLをそのまま貼っているので、差し替える必要がある。（このURLがいつまで有効なのかも未調査）
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/fFMfcgCRSoz05uE4wZR39n/sandbox/e9WnijA56L806Xr1efWVEZ-img-1_1770810773000_na1fn_aGVyby1ncmFkdWF0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZkZNZmNnQ1JTb3owNXVFNHdaUjM5bi9zYW5kYm94L2U5V25pakE1Nkw4MDZYcjFlZldWRVotaW1nLTFfMTc3MDgxMDc3MzAwMF9uYTFmbl9hR1Z5YnkxbmNtRmtkV0YwYVc5dS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=GHHl7ci6wLezwGb-13Y9BotVLU5EgC8JQDS0i0WgIoLQTHCAlyRVN-y~aEoPAfDfaZCNlFnh~Jwxyjyek4jPT4bLRWfPq~Df010l7V7iCCAnIBzLMgz3k2qiakoCWCE5TVfCy6yxSn0-afjEQSMyZTWDjESsX9hwt2qzFS6sY56-nIIKtrHpLAH7-eikkaMTim9A0AOvcmXm0L9JNsXPNEpL2qspsI3d0cA0voW62tErmJVFIzaJr45Yqj124vZVn-cHAj5fA~RJYu4wfGyWBqcXie3e24VYmLGFXWmfwwwRtT3p0E6tlFoufU-hd5D9Tam34~ISVonS1G663~1iIw__')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/70"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl ml-0 lg:ml-16">
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-sm md:text-base font-medium tracking-wider uppercase text-primary/80">
              Class of 2026
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight">
              卒業パーティー
              <br />
              2026
            </h1>
            <Separator className="w-24 h-1" />
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed">
              最高の思い出を、もう一度。
              <br />
              仲間たちと過ごす、最後の特別な夜。
            </p>
            <div className="pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base"
                asChild
              >
                <Link href="#details">詳細を見る</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
