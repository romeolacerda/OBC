import PropTypes from "prop-types";

TextInput.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
};

export default function TextInput({ id, label, value, setValue }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        name={id}
        id={id}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
}
