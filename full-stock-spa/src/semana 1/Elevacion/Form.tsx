type FormProps = {
  value: string;
  handleChange: (newValue: string) => void;
};

export default function Form({ value, handleChange }: FormProps) {
  return (
    <div>
      <h2>Form component:</h2>
      <input
        type='text'
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}
