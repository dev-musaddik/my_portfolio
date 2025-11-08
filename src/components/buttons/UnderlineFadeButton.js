import React from "react";

// smooth scrolling function
const smoothScrollingFunction = (href) => {
  if (href && href.startsWith("#")) {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }
};

export const UnderlineFadeButton = ({ text, icon: Icon, onClick, href }) => {
  const handleClick = (e) => {
    // smooth scroll for hash links
    if (href && href.startsWith("#")) {
      e.preventDefault();
      smoothScrollingFunction(href);
    }
    if (onClick) onClick(e);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="underline-fade-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold rounded-xl shadow-lg hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-amber-300/50"
    >
      {Icon && <Icon className="w-5 h-5" />}
      <span>{text}</span>
    </a>
  );
};
