const Textarea = ({ label, name, register, error, rows = 4, ...props }) => {
  return (
    <div className="space-y-1">
      {label && (
        <label
          htmlFor={name}
          className="text-xs font-semibold text-slate-700"
        >
          {label}
        </label>
      )}
      <textarea
        id={name}
        rows={rows}
        {...register(name)}
        className={`w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white resize-none ${
          error ? "border-red-400" : "border-slate-200"
        }`}
        {...props}
      />
      {error && (
        <p className="text-xs text-red-500">{error.message}</p>
      )}
    </div>
  );
};

export default Textarea;
