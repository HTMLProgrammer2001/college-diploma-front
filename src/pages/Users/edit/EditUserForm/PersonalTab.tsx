import React from 'react';
import {Translation} from 'react-i18next';
import {Field} from 'redux-form';

import InputElement from '../../../../common/formElements/InputElement';
import DateElement from '../../../../common/formElements/DateElement';
import FileElement from '../../../../common/formElements/FileElement';

import required from '../../../../utils/validators/required';
import email from '../../../../utils/validators/email';
import phone from '../../../../utils/validators/phone';


const PersonalTab: React.FC<{}> = () => (
	<div>
		<div className="mt-3 d-flex flex-column flex-md-row">
			<Translation>
				{t => (
					<div className="w-100 mr-md-3">
						<Field
							component={InputElement}
							type="text"
							name="fullName"
							label={t('users.edit.fullName')}
							validate={[required]}
						/>

						<Field
							component={InputElement}
							type="text"
							name="email"
							label={t('users.edit.email')}
							validate={[required, email]}
						/>

						<Field
							component={DateElement}
							name="birthday"
							label={t('users.edit.birthday')}
						/>

						<Field
							component={InputElement}
							name="phone"
							label={t('users.edit.phone')}
							validate={[phone]}
						/>
					</div>
				)}
			</Translation>

			<Translation>
				{t => (
					<div className="w-100 mr-ml-3">
						<Field
							component={InputElement}
							type="password"
							name="password"
							label={t('users.edit.password')}
						/>

						<Field
							component={InputElement}
							type="password"
							name="password_confirmation"
							label={t('users.edit.confirm')}
						/>

						<Field
							component={InputElement}
							name="address"
							label={t('users.edit.address')}
						/>
					</div>
				)}
			</Translation>
		</div>

		<Translation>
			{t => (
				<div className="center w-100">
					<Field
						name="avatar"
						label={t('users.edit.avatar')}
						component={FileElement}
					/>
				</div>
			)}
		</Translation>
	</div>
);

export default PersonalTab;
