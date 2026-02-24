"use client";

import { useEffect, useState } from "react";
import { EVENT_END, EVENT_START } from "@/constants/event";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            開催まであと
          </h2>
          <Countdown />
        </div>
      </div>
    </section>
  );
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [status, setStatus] = useState<"before" | "during" | "after">("before");

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft | null => {
      const now = Date.now();
      const startTime = EVENT_START.getTime();
      const endTime = EVENT_END.getTime();

      if (now > endTime) {
        setStatus("after");
        return null;
      } else if (now >= startTime && now < endTime) {
        setStatus("during");
        return null;
      } else {
        setStatus("before");
        const difference = startTime - now;

        if (difference > 0) {
          return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        }
      }
      return null;
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (status === "after") {
    return (
      <div className="text-center py-12">
        <p className="text-3xl md:text-5xl font-display font-semibold text-primary">
          ご参加ありがとうございました
        </p>
      </div>
    );
  }

  if (status === "during") {
    return (
      <div className="text-center py-12">
        <p className="text-4xl md:text-6xl font-display font-bold text-primary animate-pulse">
          ただいま開催中!
        </p>
      </div>
    );
  }

  if (!timeLeft) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
      <TimeUnit value={timeLeft.days} label="日" />
      <TimeUnit value={timeLeft.hours} label="時間" />
      <TimeUnit value={timeLeft.minutes} label="分" />
      <TimeUnit value={timeLeft.seconds} label="秒" />
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  const [prevValue, setPrevValue] = useState(value);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    if (value !== prevValue) {
      setIsChanging(true);
      const timeout = setTimeout(() => {
        setIsChanging(false);
        setPrevValue(value);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [value, prevValue]);

  return (
    <div className="text-center">
      <div
        className={`
          text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary mb-2
          transition-transform duration-300
          ${isChanging ? "scale-110" : "scale-100"}
        `}
      >
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-sm md:text-base font-medium text-foreground/60 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
