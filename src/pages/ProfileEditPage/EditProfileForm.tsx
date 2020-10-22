import React from 'react';
import {InjectedFormProps, reduxForm, Field} from 'redux-form';

import InputElement from '../../common/formElements/InputElement';
import DateElement from '../../common/formElements/DateElement';
import FileElement from '../../common/formElements/FileElement';


export type IProfileEditData = {
	email: string,
	password: string,
	confirm_password: string,
	phone: string,
	birthday: string,
	passport: string,
	code: string,
	address: string,
	avatar: any
};

type IProfileEditFormProps = InjectedFormProps<IProfileEditData>;
const ProfileEditForm: React.FC<IProfileEditFormProps> = ({handleSubmit}) => (
	<form onSubmit={handleSubmit}>
		<div className="d-md-flex">
			<div className="w-100" style={{marginRight: '10px'}}>
				<Field
					type="text"
					name="email"
					label="Email"
					component={InputElement}
				/>

				<Field
					type="password"
					name="password"
					label="Пароль"
					component={InputElement}
				/>

				<Field
					type="password"
					name="confirm_password"
					label="Повторите пароль"
					component={InputElement}
				/>

				<Field
					type="text"
					name="phone"
					label="Телефон"
					component={InputElement}
				/>
			</div>

			<div className="w-100" style={{marginLeft: '10px'}}>
				<Field
					name="birthday"
					label="Дата рождения"
					component={DateElement}
					className="mb-2"
				/>

				<Field
					type="text"
					name="passport"
					label="Номер паспорта"
					component={InputElement}
				/>

				<Field
					type="text"
					name="code"
					label="Идентификационный код"
					component={InputElement}
				/>

				<Field
					type="text"
					name="address"
					label="Адресс"
					component={InputElement}
				/>
			</div>
		</div>

		<div className="center w-100">
			<Field
				name="avatar"
				label="Перетащите или выберите аватарку"
				component={FileElement}
			/>
		</div>
	</form>
);

export default reduxForm<IProfileEditData>({
	form: 'editProfileForm'
})(ProfileEditForm);
