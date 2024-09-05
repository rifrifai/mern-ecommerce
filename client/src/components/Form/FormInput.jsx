/* eslint-disable react/prop-types */
function FormInput({ label, name, type, defaultValue }) {
  return (
    <label className="form-control">
      <label className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className="input input-bordered"
      />
    </label>
  );
}

export default FormInput;
