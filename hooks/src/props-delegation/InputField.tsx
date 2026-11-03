import {
  useId,
  forwardRef,
  type ComponentPropsWithoutRef,
  type Ref
} from 'react';
import s from './InputField.module.css';

type InputFieldProps = ComponentPropsWithoutRef<'input'> & {
  label: string;
};

function InputField(
  { label, id, ...delegated }: InputFieldProps,
  ref: Ref<HTMLInputElement>
) {
  const generatedId = useId();
  const inputId = id || generatedId;

  return (
    <div className={s.field}>
      <label htmlFor={inputId}>{label}</label>
      <input id={inputId} {...delegated} ref={ref} />
    </div>
  );
}

export default forwardRef(InputField);
