import React from 'react';
import {WrappedFieldProps} from 'redux-form';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';


type IInputElementProps = WrappedFieldProps & HTMLInputElement & {label: string, onlyInValid: boolean};
const InputElement: React.FC<IInputElementProps> = ({onlyInValid = true, ...props}) => (
	<FormGroup controlId={props.name}>
		{
			props.label &&
				<FormLabel column={true}>{props.label}</FormLabel>
		}

		<FormControl
			type={props.type}
			name={props.name}
			value={props.input.value}
			className={props.className}
			onChange={props.input.onChange}
			isValid={!onlyInValid && props.meta.touched ? props.meta.valid : undefined}
			isInvalid={props.meta.touched ? !props.meta.valid : undefined}
		/>

		{
			props.meta.error &&
				<FormControl.Feedback type="invalid" style={{display: 'block'}}>
					{props.meta.touched && props.meta.error}
				</FormControl.Feedback>
		}
	</FormGroup>
);

export default InputElement;
