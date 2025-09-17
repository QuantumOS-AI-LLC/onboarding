import Button from "./Button";

export default function RadioGroupStep({
  title,
  subtitle,
  options,
  name,
  value,
  onChange,
  onNext,
  onPrev,
  type = "radio", // radio or checkbox
  showPrev = true,
  nextLabel = "Next",
  prevLabel = "Back",
}) {
  return (
    <>
      <h2 className="font-display text-[#5072DF] mb-4 text-3xl/tight font-semibold tracking-tight text-balance sm:text-[32px]">
        {title}
      </h2>
      <h3 className="mb-4 text-lg font-semibold">{subtitle}</h3>

      <div className="flex mb-4 flex-col space-y-2 capitalize">
        {options.map((opt) => (
          <label
            key={opt}
            className={`
              flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 ring-1
              ${
                type === "radio"
                  ? "bg-white ring-[#f1f1f1] has-checked:ring-2 has-checked:ring-[#5072DF]"
                  : value.includes(opt)
                  ? "bg-gradient-to-b from-[#E0EBFF] to-[#C6DBFF] ring-2 ring-[#5072DF]"
                  : "bg-white ring-[#f1f1f1]"
              }
              hover:ring-[#dbdbdb] transition-all
            `}
          >
            <input
              type={type === "radio" ? "radio" : "checkbox"}
              name={name}
              value={opt}
              checked={type === "radio" ? value === opt : value.includes(opt)}
              onChange={onChange}
              className="hidden"
            />
            <span className="flex-1">{opt}</span>
          </label>
        ))}
      </div>

      <div className="flex justify-between">
        {showPrev && (
          <Button variant="secondary" onClick={onPrev}>
            {prevLabel}
          </Button>
        )}
        <Button
          onClick={onNext}
          variant="primary"
          disabled={type === "radio" ? !value : value.length === 0}
        >
          {nextLabel}
        </Button>
      </div>
    </>
  );
}
