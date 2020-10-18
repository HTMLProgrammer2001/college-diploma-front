import React from 'react';
import {WrappedFieldProps} from 'redux-form';
import DatePicker, {ReactDatePickerProps} from 'react-datepicker';
import {FormGroup, FormLabel, FormControl} from 'react-bootstrap';


type IDateElementProps = WrappedFieldProps &
	HTMLInputElement & {label: string} & ReactDatePickerProps;

const DateElement: React.FC<IDateElementProps> = ({meta, input, name, label, dateFormat}) => (
	<FormGroup>
		{
			label &&
				<FormLabel column={true}>{label}</FormLabel>
		}

		<DatePicker
			selected={input.value}
			dateFormat={dateFormat}
			onChange={(date: any) => input.onChange(date, name)}
		/>

		{
			meta.touched && meta.error &&
				<FormControl.Feedback style={{display: 'block'}}>
					{meta.error}
				</FormControl.Feedback>
		}
	</FormGroup>
);

export default DateElement;
