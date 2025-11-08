import React from "react";

const GradientButton = ({ href, children, Icon }) => (
  <a
    href={href}
    target={href?.startsWith("http") ? "_blank" : undefined}
    rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    className="group relative inline-flex items-center gap-2 justify-center rounded-full p-[2px] overflow-hidden transition-transform duration-300 hover:scale-[1.03]"
  >
    {/* Border layer */}
    <span className="absolute inset-0 rounded-full bg-[length:300%_300%] bg-gradient-to-r from-indigo-500 via-orange-500 to-rose-500 bg-[0%_50%] group-hover:animate-border" />

    {/* Inner button */}
    <span className="relative z-10 inline-flex items-center gap-2 rounded-full bg-white/80 dark:bg-gray-950/70 backdrop-blur px-6 py-2 text-sm font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-black/5 dark:ring-white/10">
      {Icon && <Icon className="h-4 w-4" />}
      {children}
    </span>
  </a>
);

export default GradientButton;