const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition shadow bg-primary text-white hover:bg-sky-500 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
