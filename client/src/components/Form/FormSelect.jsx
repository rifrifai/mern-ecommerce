/* eslint-disable react/prop-types */
function FormSelect({ label, name, list, defaultValue }) {
  return (
    <>
      <div className="form-control">
        <label className="label">
          <span className="capitalize label-text">{label}</span>
        </label>
        <select
          className="select select-bordered"
          name={name}
          defaultValue={defaultValue}
        >
          {list.map((item) => {
            return (
              <option value={item} key={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}

export default FormSelect;
