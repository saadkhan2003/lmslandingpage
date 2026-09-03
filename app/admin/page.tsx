"use client";

import { useState, useEffect, FormEvent } from "react";
import {
  getActivePixelId,
  setActivePixelId,
  removeActivePixelId,
} from "@/components/facebook-pixel";

export default function AdminPage() {
  const [pixelId, setPixelId] = useState("");
  const [activePixel, setActivePixel] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    setActivePixel(getActivePixelId());
  }, []);

  const handleSave = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = pixelId.trim();
    if (!trimmed) return;
    setActivePixelId(trimmed);
    setActivePixel(trimmed);
    setSaved(true);
    setRemoved(false);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleRemove = () => {
    removeActivePixelId();
    setActivePixel(null);
    setPixelId("");
    setRemoved(true);
    setSaved(false);
    setTimeout(() => setRemoved(false), 2000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8">
        <div className="mb-6 text-center">
          <h1 className="text-xl font-bold text-white sm:text-2xl">
            Facebook Pixel Admin
          </h1>
          <p className="mt-1 text-sm text-white/50">
            Manage your Facebook Pixel ID
          </p>
        </div>

        {activePixel && (
          <div className="mb-6 rounded-lg border border-green-500/20 bg-green-500/10 p-3 text-center text-sm text-green-400">
            Active Pixel: <span className="font-mono font-bold">{activePixel}</span>
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label
              htmlFor="pixelId"
              className="mb-1.5 block text-sm font-medium text-white/70"
            >
              Pixel ID
            </label>
            <input
              id="pixelId"
              type="text"
              value={pixelId}
              onChange={(e) => setPixelId(e.target.value)}
              placeholder="e.g. 1234567890123456"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-white/30 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-500"
            >
              {saved ? "Saved!" : "Save Pixel"}
            </button>
            {activePixel && (
              <button
                type="button"
                onClick={handleRemove}
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/10"
              >
                {removed ? "Removed!" : "Remove"}
              </button>
            )}
          </div>
        </form>

        <div className="mt-6 rounded-lg border border-white/5 bg-white/5 p-3 text-xs text-white/40">
          <p className="font-medium text-white/60">How it works:</p>
          <ul className="mt-1 list-inside list-disc space-y-0.5">
            <li>Enter your Facebook Pixel ID and click Save</li>
            <li>The pixel activates instantly on the site</li>
            <li>Changes persist across page reloads (localStorage)</li>
            <li>Open this page in another tab to switch pixels</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
