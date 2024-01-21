export const useRandomColors = () => {
  const colors = [
    "bg-teal-300",
    "bg-orange-400",
    "bg-slate-100",
    "bg-red-200",
    "bg-blue-500",
    "bg-purple-300",
    "bg-yellow-200",
    "bg-amber-400",
    "bg-lime-300",
    "bg-cyan-400",
    "bg-indigo-300",
    "bg-pink-100",
    "bg-rose-400",
    "bg-sky-600",
    "bg-fuchsia-200",
    "bg-violet-300",
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
};
