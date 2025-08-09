export const randomColor = () => {
  const colors = [
    "red", "orange", "amber", "yellow", "lime", "green", "emerald",
    "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia",
    "pink", "rose"
  ];
  const shades = ["500", "600", "700", "800", "900"];
  
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomShade = shades[Math.floor(Math.random() * shades.length)];
  
  return `${randomColor}-${randomShade}`;
}