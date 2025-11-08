import React, { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Cloud,
} from "lucide-react";

// smooth scrolling function

const smoothScrollingFunction = (href) => {
  if (href && href.startsWith("#")) {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }
};

// --- Component Definitions (1-40 Existing) ---

//
export const ShineButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="shine-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold text-white bg-indigo-600 rounded-xl shadow-lg hover:bg-indigo-700 active:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

//
export const RippleButton = ({ text, icon: Icon, onClick }) => {
  const [key, setKey] = useState(0);
  const handleClick = (e) => {
    setKey((prev) => prev + 1);
    onClick(e);
  };
  return (
    <button
      key={key}
      className="ripple-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold text-white bg-green-500 rounded-xl shadow-lg hover:text-green-900 focus:outline-none focus:ring-4 focus:ring-green-500/50"
      onClick={handleClick}
    >
      {Icon && <Icon className="w-5 h-5" />}
      <span>{text}</span>
    </button>
  );
};

//
export const Press3DButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="press-3d inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold text-white bg-slate-600 rounded-xl hover:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-slate-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

//
export const NeonGlowButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="neon-glow-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-bold rounded-xl focus:outline-none focus:ring-4 focus:ring-pink-300/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

//
export const FloatingGradientButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="floating-gradient-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold text-white rounded-xl hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-400/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

//
export const RotatingBorderButton = ({ text, icon: Icon, onClick }) => (
  <div className="rotating-border-button rounded-xl hover:shadow-2xl shadow-emerald-500/50">
    <button
      className="rotating-border-content inline-flex items-center justify-center space-x-2 font-semibold text-lg focus:outline-none w-full"
      onClick={onClick}
    >
      {Icon && <Icon className="w-5 h-5 animate-[spin_3s_linear_infinite]" />}
      <span>{text}</span>
    </button>
  </div>
);

//
export const DualStateRevealButton = ({
  defaultText,
  hoverText,
  icon: Icon,
  onClick,
}) => (
  <button
    className="reveal-button inline-flex items-center justify-center w-full px-6 py-3 font-semibold text-white bg-red-600 rounded-xl hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-500/50 shadow-lg reveal-button-base"
    onClick={onClick}
  >
    <div className="default-content space-x-2">
      <span>{defaultText}</span>
    </div>
    <div className="hover-content space-x-2">
      {Icon && <Icon className="w-5 h-5" />}
      <span>{hoverText}</span>
    </div>
  </button>
);

//
export const BlobSquishButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="squish-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold text-cyan-900 bg-cyan-300 rounded-full shadow-lg hover:bg-cyan-200 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

//
export const CutoutRevealButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="cutout-reveal-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5 z-10" />}
    <span className="z-10">{text}</span>
  </button>
);

// 10101
export const SpringyJiggleButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="springy-jiggle-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold text-white bg-yellow-500 rounded-xl shadow-lg hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 11111
export const GlassmorphismButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="glass-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold text-white rounded-xl focus:outline-none focus:ring-4 focus:ring-white/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 13. Text Warp Shadow Button
// 12121
export const TextWarpButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="text-warp-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold text-white bg-gray-700 rounded-xl shadow-lg hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 14. Color Pulse Button
// 13131
export const ColorPulseButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="color-pulse-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold text-white bg-orange-500 rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-500/50 transition-all"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 15. Border Slide In Button
// 14141
export const BorderSlideButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="border-slide-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold rounded-xl focus:outline-none"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 16. Skewed Background Fill Button
// 15151
export const SkewedFillButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="skew-fill-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold bg-gray-600 rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-gray-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 17. Pill Shape Expand Button
// 16161
export const PillExpandButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="pill-expand-button inline-flex items-center justify-start space-x-2 bg-pink-600 text-white rounded-full shadow-lg hover:shadow-pink-400/50 focus:outline-none focus:ring-4 focus:ring-pink-500/50"
    onClick={onClick}
  >
    <div className="icon-part flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full ml-1">
      {Icon && <Icon className="w-5 h-5" />}
    </div>
    <span className="pill-expand-text font-semibold mr-4">{text}</span>
  </button>
);

// 18. Icon Hover Scale Button
// 17171
export const IconScaleButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="icon-scale-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold text-white bg-blue-600 rounded-xl shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
    onClick={onClick}
  >
    <div className="icon-part">{Icon && <Icon className="w-5 h-5" />}</div>
    <span>{text}</span>
  </button>
);

// 19. Subtle Noise Texture Button
// 18181
export const NoiseTextureButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="noise-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-bold text-gray-900 bg-gray-200 rounded-xl shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-gray-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5 z-10" />}
    <span className="z-10">{text}</span>
  </button>
);

// 20. Depth Hover Lift Button
// 19191
export const DepthLiftButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="depth-lift-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold text-white bg-gray-900 rounded-xl focus:outline-none"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 21. Spotlight Hover Button
// 20202
export const SpotlightButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="spotlight-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold text-white bg-blue-700 rounded-xl shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 22. Slide-Out Icon Button
// 21212
export const SlideOutIconButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="slide-icon-button inline-flex items-center justify-center w-full px-6 py-3 font-semibold text-white bg-gray-700 rounded-xl shadow-lg hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-500/50"
    onClick={onClick}
  >
    <span className="content text-part">{text}</span>
    <div className="content icon-part absolute right-4">
      {Icon && <Icon className="w-5 h-5" />}
    </div>
  </button>
);

// 23. Wavy Underline Button
// 22222
export const WavyUnderlineButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="wavy-underline-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold text-blue-300 bg-gray-700 rounded-xl shadow-lg hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 24. Text Shadow Drop Button
// 23232
export const TextShadowDropButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="shadow-drop-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold text-gray-900 bg-yellow-400 rounded-xl focus:outline-none focus:ring-4 focus:ring-yellow-500/50"
    onClick={onClick}
  >
    <div className="content inline-flex items-center space-x-2">
      {Icon && <Icon className="w-5 h-5" />}
      <span>{text}</span>
    </div>
  </button>
);

// 25. Gradient Border Pulse Button
// 24242
export const GradientBorderPulseButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="gradient-pulse-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold text-white rounded-xl shadow-lg focus:outline-none"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 26. Shatter Effect Button
// 25252
export const ShatterButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="shatter-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold text-white bg-teal-500 rounded-xl shadow-lg hover:bg-teal-400 focus:outline-none focus:ring-4 focus:ring-teal-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 27. Inner Glow Button
// 26262
export const InnerGlowButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="inner-glow-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold text-white bg-pink-700 rounded-xl shadow-lg hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 28. Vertical Slice Button
// 27272
export const VerticalSliceButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="vertical-slice-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold text-white rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5 z-10" />}
    <span className="z-10">{text}</span>
  </button>
);

// 29. Skew Transform Pulse Button
// 28282
export const SkewPulseButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="skew-pulse-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold text-gray-900 bg-amber-400 rounded-xl shadow-lg hover:bg-amber-300 focus:outline-none focus:ring-4 focus:ring-amber-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 30. Hollow Fill Button
// 29292
export const HollowFillButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="hollow-fill-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold rounded-xl shadow-lg focus:outline-none"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5 z-10" />}
    <span className="z-10">{text}</span>
  </button>
);

// 31. Pop-out Text Button
// 30303
export const PopoutTextButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="popout-text-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold text-white bg-cyan-500 rounded-xl focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
    onClick={onClick}
  >
    <div className="text-content inline-flex items-center space-x-2">
      {Icon && <Icon className="w-5 h-5" />}
      <span>{text}</span>
    </div>
  </button>
);

// 32. Rotating Bevel Button
// 31313
export const RotatingBevelButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="bevel-rotate-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold text-white rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 33. Isometric Push Button
// 32323
export const IsometricPushButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="iso-push-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold text-white bg-blue-700 rounded-xl hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 34. Liquid Edge Button
// 33333
export const LiquidEdgeButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="liquid-edge-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-red-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5 z-10" />}
    <span className="z-10">{text}</span>
  </button>
);

// 35. Sliding Door Button
// 34343
export const SlidingDoorButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="sliding-door-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold text-white rounded-xl shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-emerald-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5 z-10" />}
    <span className="z-10">{text}</span>
  </button>
);

// 36. Tilt Perspective Button
// 35353
export const TiltPerspectiveButton = ({ text, icon: Icon, onClick }) => (
  <div className="tilt-perspective-button">
    <button
      className="tilt-perspective-content inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold text-white bg-purple-600 rounded-xl hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
      onClick={onClick}
    >
      {Icon && <Icon className="w-5 h-5" />}
      <span>{text}</span>
    </button>
  </div>
);

// 37. Squash & Stretch Button
// 36363
export const SquashStretchButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="squash-stretch-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold text-white bg-indigo-500 rounded-xl shadow-lg hover:bg-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 38. Retro Block Push Button
// 37373
export const RetroBlockPushButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="retro-push-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold text-white bg-pink-500 rounded-xl hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 39. Wobbly Border Button
// 38383
export const WobblyBorderButton = ({ text, icon: Icon, onClick }) => (
  <div className="wobbly-button-wrapper">
    <div className="wobbly-button-border"></div>
    <button
      className="wobbly-button-content inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold text-white bg-gray-700 rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-500/50"
      onClick={onClick}
    >
      {Icon && <Icon className="w-5 h-5" />}
      <span>{text}</span>
    </button>
  </div>
);

// 40. Multi-Layer Shadow Button
// 39393
export const MultiLayerShadowButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="multi-shadow-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold text-white bg-gray-700 rounded-xl hover:bg-gray-600 focus:outline-none"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// --- New Component Definitions (41-50) ---

// 41. Inverse 3D Flip Button
// 40404
export const Inverse3DFlipButton = ({ text, icon: Icon, onClick }) => (
  <div className="flip-container">
    <div className="flipper">
      <button
        className="front inline-flex items-center justify-center space-x-2 shadow-lg"
        onClick={() => onClick("Flip Button (Front)")}
      >
        {Icon && <Icon className="w-5 h-5" />}
        <span>{text}</span>
      </button>
      <button
        className="back inline-flex items-center justify-center space-x-2 shadow-lg"
        onClick={() => onClick("Flip Button (Back)")}
      >
        <span>Flip Back</span>
      </button>
    </div>
  </div>
);

// 42. Corner Curl Button
// 41414
export const CornerCurlButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="corner-curl-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold rounded-xl focus:outline-none focus:ring-4 focus:ring-gray-400/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 43. Light Sweep Button
// 42424
export const LightSweepButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="light-sweep-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold text-white rounded-xl shadow-lg hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 44. Floating Bubble Grid Button
// 43434
export const FloatingBubbleButton = ({ text, icon: Icon, onClick }) => {
  // Generates small bubbles with random positions and delays for the background animation
  const bubbles = Array(10)
    .fill()
    .map((_, i) => (
      <div
        key={i}
        className="bubble"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 1.5}s`,
          width: `${Math.random() * 8 + 5}px`,
          height: `${Math.random() * 8 + 5}px`,
        }}
      />
    ));

  return (
    <button
      className="bubble-grid-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold text-white rounded-xl shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
      onClick={onClick}
    >
      {bubbles}
      <span className="z-20">{text}</span>
      {Icon && <Icon className="w-5 h-5 z-20" />}
    </button>
  );
};

// 45. Neumorphism Press Button
// 44444
export const NeumorphismButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="neumorphism-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold focus:outline-none"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 46. Depth Shadow Rotation Button
// 45454
export const DepthShadowRotateButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="shadow-rotate-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold text-white rounded-xl shadow-lg hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-violet-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 47. Text Underline Fade Button

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

// 48. Vaporwave Glitch Button
// 47474
export const VaporwaveGlitchButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="glitch-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold uppercase rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 49. Press Inset Button
// 48484
export const PressInsetButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="press-inset-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold text-white bg-teal-600 rounded-xl hover:bg-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 50. Skewed Tab Focus Button
// 49494
export const SkewedTabButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="skewed-tab-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold text-white bg-sky-600 rounded-xl hover:bg-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);
