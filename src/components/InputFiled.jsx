const InputFiled = ({ placeholder, name, isDeisable, value }) => {
  return (
    <input
      type="number"
      placeholder={placeholder}
      required
      value={value}
      disabled={isDeisable}
      name={name}
      onChange={() => {}}
      className=" px-2 py-2 border border-neutral-300  rounded-[4px] "
    ></input>
  );
};

export default InputFiled;
