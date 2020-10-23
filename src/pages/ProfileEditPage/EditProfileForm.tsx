import React from 'react';
import {InjectedFormProps, reduxForm, Field} from 'redux-form';
import {connect, ConnectedProps} from 'react-redux';

import InputElement from '../../common/formElements/InputElement';
import DateElement from '../../common/formElements/DateElement';
import FileElement from '../../common/formElements/FileElement';
import {RootState} from '../../redux';
import {selectMeInfo} from '../../redux/me/selectors';
import required from '../../utils/validators/required';
import email from '../../utils/validators/email';
import lengthIn from '../../utils/validators/lengthIn';
import phone from '../../utils/validators/phone';


const mapStateToProps = (state: RootState) => ({
	user: selectMeInfo(state)
});

const connected = connect(mapStateToProps);

const minMaxPassword = lengthIn(8, 32);

export type IProfileEditData = {
	email: string,
	password: string,
	confirm_password: string,
	phone: string,
	birthday: string,
	address: string,
	avatar: any
};

type IOwnProps = ConnectedProps<typeof connected>;
type IProfileEditFormProps = InjectedFormProps<IProfileEditData, IOwnProps> & IOwnProps;
const ProfileEditForm: React.FC<IProfileEditFormProps> = ({handleSubmit, user}) => (
	<form onSubmit={handleSubmit}>
		<div className="d-md-flex">
			<div className="w-100" style={{marginRight: '10px'}}>
				<Field
					type="text"
					name="email"
					label="Email"
					defaultValue={user.email}
					component={InputElement}
					validate={[required, email]}
				/>

				<Field
					type="password"
					name="password"
					label="Пароль"
					component={InputElement}
					validate={[minMaxPassword]}
				/>

				<Field
					type="password"
					name="confirm_password"
					label="Повторите пароль"
					component={InputElement}
					validate={[minMaxPassword]}
				/>
			</div>

			<div className="w-100" style={{marginLeft: '10px'}}>
				<Field
					type="text"
					name="phone"
					label="Телефон"
					defaultValue={user.phone}
					component={InputElement}
					validate={[phone]}
				/>

				<Field
					type="text"
					name="address"
					label="Адрес"
					defaultValue={user.address}
					component={InputElement}
				/>

				<Field
					name="birthday"
					label="Дата рождения"
					defaultValue={user.birthday}
					component={DateElement}
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

export default connected(reduxForm<IProfileEditData, IOwnProps>({
	form: 'editProfileForm'
})(ProfileEditForm));
