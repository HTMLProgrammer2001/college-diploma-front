import React, {useEffect} from 'react';
import {WrappedFieldProps} from 'redux-form';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';


type IInputElementProps = WrappedFieldProps & HTMLInputElement & {label: string, onlyInValid: boolean};
const InputElement: React.FC<IInputElementProps> = ({onlyInValid = true, ...props}) => {
	// useEffect(() => {
	// 	if(!props.meta.touched && props.defaultValue)
	// 		props.input.onChange(props.defaultValue as any, props.name);
	// }, []);

	return (
		<FormGroup controlId={props.name} className="m-1">
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
			onFocus={props.input.onFocus}
			onBlur={props.input.onBlur}
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
};

export default InputElement;
