import { TextField } from '@mui/material';
import { InputStyles } from './styles';

interface IInputProps {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  type?: string;
  name?: string;
  value?: string;
  required?: boolean;
  errorMessage?: string;
  $padding?: string;
}

export const Input: React.FC<IInputProps> = ({
  placeholder,
  onChange,
  onBlur,
  type,
  name,
  required,
  errorMessage,
  $padding,
  value,
}) => {
  return (
    <InputStyles.Container>
      <InputStyles.Input
        placeholder={placeholder}
        // label={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type={type || 'text'}
        required={required}
        $padding={$padding}
      />
      {errorMessage && <span>{errorMessage}</span>}
    </InputStyles.Container>
  );
};
