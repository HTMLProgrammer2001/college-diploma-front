import React from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {Translation} from 'react-i18next';

import InputElement from '../../../common/formElements/InputElement';
import DataListElement from '../../../common/formElements/DataListElement';
import required from '../../../utils/validators/required';
import email from '../../../utils/validators/email';
import lengthIn from '../../../utils/validators/lengthIn';


export type IUsersAddData = {
	fullName: string,
	email: string,
	password: string,
	password_confirmation: string,
	commission: number,
	department: number
};

const lengthValidator = lengthIn(8, 32);

type IUsersAddFormProps = InjectedFormProps<IUsersAddData>;
const UsersAddForm: React.FC<IUsersAddFormProps> = ({handleSubmit, error}) => (
	<form onSubmit={handleSubmit}>

		{
			error &&
				<div>{error}</div>
		}

		<div className="d-md-flex w-100">
			<Translation>
				{t => (
					<div className="w-100 pr-md-3">
						<Field
							component={InputElement}
							type="text"
							name="fullName"
							label={t('users.add.fullName')}
							validate={[required]}
						/>

						<Field
							component={InputElement}
							type="text"
							name="email"
							label={t('users.add.email')}
							validate={[required, email]}
						/>

						<Field
							component={DataListElement}
							name="commission"
							placeholder={t('users.add.commission')}
							url={`${process.env.REACT_APP_SERVER_URL}/search/commissions`}
						/>
					</div>
				)}
			</Translation>

			<Translation>
				{t => (
					<div className="w-100 pl-md-3">
						<Field
							component={DataListElement}
							name="department"
							placeholder={t('users.add.department')}
							url={`${process.env.REACT_APP_SERVER_URL}/search/departments`}
						/>

						<Field
							component={InputElement}
							type="password"
							name="password"
							label={t('users.add.password')}
							validate={[required, lengthValidator]}
						/>

						<Field
							component={InputElement}
							type="password"
							name="password_confirmation"
							label={t('users.add.confirm')}
							validate={[required, lengthValidator]}
						/>
					</div>
				)}
			</Translation>
		</div>
	</form>
);

export default reduxForm<IUsersAddData>({
	form: 'usersAddForm'
})(UsersAddForm);
