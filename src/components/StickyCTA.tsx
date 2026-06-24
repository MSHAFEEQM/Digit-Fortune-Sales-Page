import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function StickyCTA() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!visible) {
      const timer = setTimeout(() => setVisible(true), 20000);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 px-3 pb-3 sm:px-4 sm:pb-4 pointer-events-none">
      <div className="pointer-events-auto mx-auto max-w-5xl glass-strong rounded-2xl  shadow-card items-center gap-1 p-3 sm:p-4 relative flex flex-col sm:flex-row justify-between relative">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold">
            <span className="rounded-md bg-accent/20 text-accent px-2 py-0.5">🔥 95% OFF</span>
            <span className="text-muted-foreground hidden sm:inline">Limited Time</span>
          <div className="mt-0 inline-flex items-center gap-1 glass rounded-xl px-1 py-0 blink-div" > 
                <div className="text-sm">
                  Use coupon{" "}
                  <span className="font-mono font-bold text-primary tracking-widest">SAVE30</span>{" "}
                  for an extra <span className="font-semibold">30% OFF</span>
                </div>
              </div>
          </div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-muted-foreground line-through text-sm">₹9,999</span>
            <span className="text-xl sm:text-2xl font-display font-bold text-primary">₹499</span>
          </div>
        </div>
        <a href="https://superprofile.bio/vp/1-million--digital-assets-mega-bundle" target="_blank" rel="noopener noreferrer" className="btn-primary rounded-xl px-4 sm:px-6 py-3 text-sm sm:text-base whitespace-nowrap ">
          📥 Get Lifetime Access
        </a>
        <button
          onClick={() => setVisible(false)}
          className="h-8 w-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors shrink-0 cursor-pointer absolute top-1 right-1"
          aria-label="Close banner "
        >
          <X className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
}
