import { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const InputForm = ({
  label,
  instruction,
  type,
  placeHolder,
  inputRef,
  isValid,
  state,
  setState,
  stateFocus,
  setStateFocus,
}) => {
  const [inputType, setInputType] = useState(type);
  const noSpaceLabel = label.replace(/\s+/g, '');

  const handleShowPass = (e) => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  return (
    <label htmlFor={`${noSpaceLabel}-input`} className="flex flex-col gap-2 relative">
      <div className="flex flex-wrap gap-2 items-center">
        <p className="text-black dark:text-white">{label}</p>
        {type === "password" ? (
          <a className="cursor-pointer" onClick={handleShowPass}>
            {inputType === "password" ? (
              <BsFillEyeSlashFill className="text-muted text-lg" />
            ) : (
              <BsFillEyeFill className="text-muted text-lg text-primary-main" />
            )}
          </a>
        ) : (
          ""
        )}
      </div>
      <input
        className={`text-lg bg-transparent p-2 px-4 flex items-center rounded-xl outline-none border duration-200 text-black dark:text-white ${!isValid && state ? 'border-red-500' : "border-muted dark:border-muted-dark hover:border-primary-main dark:hover:border-primary-main focus:border-primary-main"}`}
        id={noSpaceLabel}
        autoComplete="off"
        type={inputType}
        value={state}
        ref={inputRef || null}
        aria-invalid={isValid ? false : true}
        aria-describedby={`${noSpaceLabel}-note`}
        placeholder={placeHolder}
        onChange={(e) => setState && setState(e.target.value)}
        onFocus={() => setStateFocus && setStateFocus(true)}
        onBlur={() => setStateFocus && setStateFocus(false)}
      />

      <p id={`${noSpaceLabel}-note`} className={`text-red-600 text-sm dark:text-red-500 ${stateFocus && state && !isValid  ? "visible block" : "absolute invisible"}`}>
        {instruction}
      </p>
    </label>
  );
};

export default InputForm;
