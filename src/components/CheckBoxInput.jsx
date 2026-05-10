export const CheckboxInput = ({
  options,
  name,
  value = [],
  label,
  error,
  onChange,
}) => {
  const handleCheckboxChange = (event) => {
    const { value: val, checked } = event.target;

    let newValue = [];
    if (checked) {
      newValue = [...value, val];
    } else {
      newValue = value.filter((v) => v !== val);
    }

    // Fire the change
    onChange?.(newValue);
  };

  return (
    <div className="relative w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-600 mb-1">
          {label}
        </label>
      )}
      <div className="flex flex-wrap gap-5">
        {options.map((option, index) => {
          const isChecked = value.includes(option.value);

          return (
            <div key={index}>
              <input
                name={name}
                id={`checkbox-${index}`}
                type="checkbox"
                value={option.value}
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="w-5 h-5 text-accent cursor-pointer accent-accent hidden peer"
              />
              <label
                htmlFor={`checkbox-${index}`}
                className={`flex w-fit px-3 py-2 items-center cursor-pointer peer-checked:border-2 hover:bg-gray-100 peer-checked:border-accent border rounded-lg bg-white 
                  ${error ? "border-red-500" : "border-gray-200"}`}
              >
                {option.label && (
                  <span className="text-gray-700">{option.label}</span>
                )}
              </label>
            </div>
          );
        })}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
