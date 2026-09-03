"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
    _fbq: ReturnType<typeof window.fbq> | undefined;
  }
}

const STORAGE_KEY = "fb_pixel_id";

export function getActivePixelId(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(STORAGE_KEY);
}

export function setActivePixelId(pixelId: string) {
  localStorage.setItem(STORAGE_KEY, pixelId);
}

export function removeActivePixelId() {
  localStorage.removeItem(STORAGE_KEY);
}

export default function FacebookPixel() {
  const [pixelId, setPixelId] = useState<string | null>(null);

  useEffect(() => {
    const id = getActivePixelId();
    if (id) {
      setPixelId(id);
      // Initialize pixel if fbq is already loaded
      if (typeof window.fbq === "function") {
        window.fbq("init", id);
        window.fbq("track", "PageView");
      }
    }

    // Listen for storage changes (from admin page in another tab)
    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        const newId = e.newValue;
        setPixelId(newId);
        if (newId && typeof window.fbq === "function") {
          window.fbq("init", newId);
          window.fbq("track", "PageView");
        }
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  if (!pixelId) return null;

  return (
    <>
      <Script
        id="fb-pixel-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
          `,
        }}
      />
      <Script
        id="fb-pixel-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `fbq('init', '${pixelId}'); fbq('track', 'PageView');`,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.net/tr?id=${pixelId}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
