export default function Button({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${className} px-6 py-2 rounded focus:outline-none disabled:opacity-50 transition-all`}
    >
      {children}
    </button>
  );
}
