import React from 'react';
import {WrappedFieldProps} from 'redux-form';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';


type ISelectElementProps = WrappedFieldProps & HTMLSelectElement & {label: string};
const SelectElement: React.FC<ISelectElementProps> = ({meta, input, name, label, children, ...props}) => (
	<FormGroup controlId={name}>
		{
			label &&
			<FormLabel column={true}>{label}</FormLabel>
		}

		<FormControl
			name={name}
			as="select"
			value={input.value}
			className={props.className}
			onChange={input.onChange}
			isValid={meta.touched ? meta.valid : undefined}
			isInvalid={meta.touched ? !meta.valid : undefined}
			custom
		>
			{children}
		</FormControl>

		{
			meta.error &&
			<FormControl.Feedback type="invalid" style={{display: 'block'}}>
				{meta.touched && meta.error}
			</FormControl.Feedback>
		}
	</FormGroup>
);

export default SelectElement;
