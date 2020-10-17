import React from 'react';
import {WrappedFieldProps} from 'redux-form';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';


type IInputElementProps = WrappedFieldProps & HTMLInputElement & {label: string};
const InputElement: React.FC<IInputElementProps> = ({meta, input, type, name, label, ...props}) => (
	<FormGroup controlId={name}>
		{
			label &&
				<FormLabel column={true}>{label}</FormLabel>
		}

		<FormControl
			type={type}
			name={name}
			value={input.value}
			className={props.className}
			onChange={input.onChange}
			isValid={meta.touched ? meta.valid : undefined}
			isInvalid={meta.touched ? !meta.valid : undefined}
		/>

		{
			meta.error &&
				<FormControl.Feedback type="invalid" style={{display: 'block'}}>
					{meta.touched && meta.error}
				</FormControl.Feedback>
		}
	</FormGroup>
);

export default InputElement;
