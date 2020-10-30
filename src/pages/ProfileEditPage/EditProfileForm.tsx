import React, {useEffect} from 'react';
import {InjectedFormProps, reduxForm, Field} from 'redux-form';
import {connect, ConnectedProps} from 'react-redux';
import {Translation} from 'react-i18next';

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
const ProfileEditForm: React.FC<IProfileEditFormProps> = ({handleSubmit, user, initialize}) => {
	useEffect(() => {
		initialize({
			email: user.email,
			phone: user.phone,
			birthday: user.birthday
		});
	}, []);

	return (
		<form onSubmit={handleSubmit}>
			<Translation>
				{t => (
					<div className="d-md-flex">
						<div className="w-100 mr-md-3">
							<Field
								type="text"
								name="email"
								label="Email"
								defaultValue={user.email}
								component={InputElement}
								validate={[required, email]}
								autocomplete={false}
							/>

							<Field
								type="password"
								name="password"
								label={t('profileEdit.password')}
								component={InputElement}
								validate={[minMaxPassword]}
								autocomplete={false}
							/>

							<Field
								type="password"
								name="confirm_password"
								label={t('profileEdit.confirmPassword')}
								component={InputElement}
								validate={[minMaxPassword]}
							/>
						</div>

						<div className="w-100 ml-md-3">
							<Field
								type="text"
								name="phone"
								label={t('profileEdit.phone')}
								defaultValue={user.phone}
								component={InputElement}
								validate={[phone]}
							/>

							<Field
								type="text"
								name="address"
								label={t('profileEdit.address')}
								defaultValue={user.address}
								component={InputElement}
							/>

							<Field
								name="birthday"
								label={t('profileEdit.birthday')}
								defaultValue={user.birthday}
								component={DateElement}
							/>
						</div>
					</div>
				)}
			</Translation>

			<Translation>
				{t => (
					<div className="center w-100">
						<Field
							name="avatar"
							label={t('profileEdit.avatar')}
							component={FileElement}
						/>
					</div>
				)}
			</Translation>
		</form>
	);
};

export default connected(reduxForm<IProfileEditData, IOwnProps>({
	form: 'editProfileForm'
})(ProfileEditForm));
