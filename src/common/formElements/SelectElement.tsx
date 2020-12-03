import React from 'react';
import {WrappedFieldProps} from 'redux-form';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';


type ISelectElementProps = WrappedFieldProps & HTMLSelectElement & {label: string, onlyInValid: boolean};
const SelectElement: React.FC<ISelectElementProps> = ({onlyInValid = true, ...props}) => (
	<FormGroup controlId={props.name} className="m-1">
		{
			props.label &&
			<FormLabel column={true}>{props.label}</FormLabel>
		}

		<FormControl
			name={props.name}
			as="select"
			value={props.input.value}
			className={props.className}
			onChange={props.input.onChange}
			isValid={!onlyInValid && props.meta.touched ? props.meta.valid : undefined}
			isInvalid={props.meta.touched ? !props.meta.valid : undefined}
			custom
		>
			{props.children}
		</FormControl>

		{
			props.meta.error &&
			<FormControl.Feedback type="invalid" style={{display: 'block'}}>
				{props.meta.touched && props.meta.error}
			</FormControl.Feedback>
		}
	</FormGroup>
);

export default SelectElement;
