import React, {useEffect} from 'react';
import {WrappedFieldProps} from 'redux-form';
import DatePicker, {ReactDatePickerProps} from 'react-datepicker';
import {FormGroup, FormLabel, FormControl} from 'react-bootstrap';
import moment from 'moment';


const CustomInput: React.FC<any> = ({onChange, placeholder, value, id, onClick}) => (
	<input
		className="form-control w-100"
		value={value}
		onClick={onClick}
		onChange={onChange}
		placeholder={placeholder}
		id={id}
	/>
);


type IDateElementProps = WrappedFieldProps &
	HTMLInputElement & {label: string} & ReactDatePickerProps;

const DateElement: React.FC<IDateElementProps> = ({meta, input, name, label}) => {
	useEffect(() => {
		//if it's date then return
		if(!input.value || input.value instanceof Date)
			return;

		//else change to date
		input.onChange(moment(input.value).toDate() as any, name);
	}, [input.value]);

	return (
		<FormGroup>
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
};

export default DateElement;
