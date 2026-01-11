import { forwardRef } from "react";

const TheInput = forwardRef(function TheInput(
  { textarea, label, ...props },
  ref
) {
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className="form-inputs" {...props} />
      ) : (
        <input {...props} ref={ref} className="form-inputs" />
      )}
    </p>
  );
});

export default TheInput;
