"use client";

import { useEffect, useState } from "react";

interface TypedRolesProps {
  roles: string[];
}

/**
 * Terminal-style typing effect that cycles through `roles`, typing and
 * deleting each one. Mirrors the mockup's hero animation. Restarts cleanly
 * when the roles change (e.g. on language switch).
 */
const TypedRoles = ({ roles }: TypedRolesProps) => {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    if (!roles.length) return;
    let role = 0;
    let char = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const full = roles[role];
      if (!deleting) {
        char++;
        if (char >= full.length) {
          setDisplay(full);
          deleting = true;
          timer = setTimeout(tick, 1700);
          return;
        }
      } else {
        char--;
        if (char <= 0) {
          deleting = false;
          role = (role + 1) % roles.length;
        }
      }
      setDisplay(full.slice(0, Math.max(0, char)));
      timer = setTimeout(tick, deleting ? 38 : 72);
    };

    tick();
    return () => clearTimeout(timer);
  }, [roles]);

  return (
    <>
      <span className="text-foreground">{display}</span>
      <span
        aria-hidden
        className="ml-0.5 inline-block h-[1.05em] w-[9px] translate-y-[2px] bg-primary align-baseline animate-blink"
      />
    </>
  );
};

export default TypedRoles;
