import React from 'react';
import {WrappedFieldProps} from 'redux-form';
import DatePicker, {ReactDatePickerProps} from 'react-datepicker';
import {FormGroup, FormLabel, FormControl} from 'react-bootstrap';
import {instanceOf} from 'prop-types';


type IDateElementProps = WrappedFieldProps &
	HTMLInputElement & {label: string} & ReactDatePickerProps;

const DateElement: React.FC<IDateElementProps> = ({meta, input, name, label, className}) => (
	<FormGroup>
		{
			label &&
				<FormLabel column={true}>{label}</FormLabel>
		}

		<DatePicker
			selected={input.value}
			className={className}
			dateFormat="dd.MM.yyyy"
			showMonthDropdown={true}
			showYearDropdown={true}
			onChange={(d: any) => input.onChange(d, name)}
		/>

		{
			meta.touched && meta.error &&
				<FormControl.Feedback style={{display: 'block'}} type="invalid">
					{meta.error}
				</FormControl.Feedback>
		}
	</FormGroup>
);

export default DateElement;
