interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const sizes = {
    sm: { svg: 28, text: "text-base" },
    md: { svg: 36, text: "text-xl" },
    lg: { svg: 48, text: "text-3xl" },
  };

  const { svg, text } = sizes[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width={svg}
        height={svg}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Wheat stalk */}
        <line x1="24" y1="44" x2="24" y2="10" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" />
        {/* Main grain head */}
        <ellipse cx="24" cy="8" rx="3.5" ry="5.5" fill="#15803d" />
        {/* Left grains */}
        <ellipse cx="18.5" cy="14" rx="3" ry="4.5" fill="#16a34a" transform="rotate(-25 18.5 14)" />
        <ellipse cx="17" cy="21" rx="3" ry="4.5" fill="#16a34a" transform="rotate(-20 17 21)" />
        <ellipse cx="18" cy="28" rx="2.5" ry="4" fill="#22c55e" transform="rotate(-15 18 28)" />
        {/* Right grains */}
        <ellipse cx="29.5" cy="14" rx="3" ry="4.5" fill="#16a34a" transform="rotate(25 29.5 14)" />
        <ellipse cx="31" cy="21" rx="3" ry="4.5" fill="#16a34a" transform="rotate(20 31 21)" />
        <ellipse cx="30" cy="28" rx="2.5" ry="4" fill="#22c55e" transform="rotate(15 30 28)" />
        {/* Awns (kılçık) */}
        <line x1="24" y1="5" x2="24" y2="1" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="18" y1="11" x2="14" y2="7" stroke="#15803d" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="30" y1="11" x2="34" y2="7" stroke="#15803d" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className={`font-bold text-green-700 ${text} tracking-tight`}>Başak</span>
        <span className="text-xs text-green-600 font-medium tracking-widest uppercase">Kafe</span>
      </div>
    </div>
  );
}
