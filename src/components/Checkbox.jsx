const Checkbox = ({ label, value, isDeisable, checked }) => {
  return (
    <div className="flex items-center gap-2 mb-1">
      <input
        type="checkbox"
        value={value}
        id={value}
        name={value}
        disabled={isDeisable}
        checked={checked}
        onChange={() => {}}
      ></input>
      <label for={value}>{label}</label>
      <br></br>
    </div>
  );
};

export default Checkbox;
