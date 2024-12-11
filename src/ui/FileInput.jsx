import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import { Label } from "@radix-ui/react-label";

function FileInput({
  label,
  name,
  value,
  dir = "rtl",
  onChange,
  isRequired,
  clasName,
  validationSchema = {},
  errors,
  ...rest
}) {
  return (
    <>
      <Label
        htmlFor="file-upload"
        className={`cursor-pointer border-2 border-primary-900 rounded-lg px-3 py-2 text-primary-900 flex items-center justify-center gap-x-2 ${clasName}`}
      >
        {label}
        <ArrowUpTrayIcon className="w-5 h-5" />
        <input
          id="file-upload"
          type="file"
          className="sr-only"
          name={name}
          dir={dir}
          value={value}
          onChange={onChange}
        />
      </Label>
      {errors && errors[name] && (
        <span className="text-red-600 block text-xs mt-2">
          {errors[name]?.message}
        </span>
      )}
    </>
  );
}

export default FileInput;
