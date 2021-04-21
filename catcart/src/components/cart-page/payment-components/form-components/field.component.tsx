import styled from 'styled-components';

interface IFieldProps{
    label: string;
    id: string;
    type: string;
    placeholder: string;
    required: boolean;
    autoComplete: string;
    value: any;
    onChange: (value: any) => void;
}

const FormRow = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  border: none;
  background-color: #FFFFFF22;
  transition: 0.3s;
  :focus{
    text-shadow: 0 0 3px white;
  }

    .FormRowLabel {
    width: 15%;
    min-width: 70px;
    padding: 11px 0;
    color: #FFFFFF;
    font-weight: 300;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

    .FormRowInput {
    font-size: 16px;
    width: 100%;
    padding: 11px 15px 11px 10px;
    color: #FFFFFF;
    font-weight: 550;
    border: none;
    background-color: transparent;
    animation: 1ms void-animation-out;
    :focus{
      text-shadow: 0 0 1px white;
    }
  }

  .FormRowInput::placeholder {
    color: #FFFFFF;
  }
`

const Field = ({
  label,
  id,
  type,
  placeholder,
  required,
  autoComplete,
  value,
  onChange
} : IFieldProps) => (
  <FormRow>
    <label htmlFor={id} className="FormRowLabel">
      {label}
    </label>
    <input
      className="FormRowInput"
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
    />
  </FormRow>
);

export default Field;