import React from 'react';
import {WrappedFieldProps} from 'redux-form';
import DatePicker, {ReactDatePickerProps} from 'react-datepicker';
import {FormGroup, FormLabel, FormControl} from 'react-bootstrap';
import moment from 'moment';


const CustomInput: React.FC<any> = ({onChange, placeholder, value, id, onClick}) => (
	<FormControl
		value={value}
		onClick={onClick}
		onChange={onChange}
		placeholder={placeholder}
		id={id}
	/>
);


type IDateElementProps = WrappedFieldProps &
	HTMLInputElement & {label: string} & ReactDatePickerProps;

const DateElement: React.FC<IDateElementProps> = ({meta, input, name, label, className}) => {
	return (
		<FormGroup className="m-1">
			{
				label &&
				<FormLabel column={true}>{label}</FormLabel>
			}

			<DatePicker
				customInput={<CustomInput/>}
				selected={input.value ? moment(input.value).toDate() : null}
				wrapperClassName="w-100"
				dateFormat="dd.MM.yyyy"
				showMonthDropdown={true}
				showYearDropdown={true}
				onChange={(d: Date) => {
					if(d)
						d.setTime(d.getTime() + d.getTimezoneOffset()*60*1000);

					input.onChange(d as any, name)
				}}
			/>

			{
				meta.touched && meta.error &&
				<FormControl.Feedback style={{display: 'block'}} type="invalid">
					{meta.error}
				</FormControl.Feedback>
			}
		</FormGroup>
	);
};

export default DateElement;
