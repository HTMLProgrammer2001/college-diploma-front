import React from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {Translation} from 'react-i18next';

import InputElement from '../../../common/formElements/InputElement';
import required from '../../../utils/validators/required';
import DateElement from '../../../common/formElements/DateElement';
import DataListElement from '../../../common/formElements/DataListElement';


export type IHonorsAddData = {
	order: string,
	datePresentation: string,
	title: string,
	user: number
};

type IHonorsAddFormProps = InjectedFormProps<IHonorsAddData>;
const HonorsAddForm: React.FC<IHonorsAddFormProps> = ({handleSubmit, error}) => (
	<form onSubmit={handleSubmit}>

		{
			error &&
				<div>{error}</div>
		}
		
		<div className="d-md-flex w-100">
			<Translation>
				{t => (
					<div className="w-100 pr-3">
						<Field
							component={InputElement}
							type="text"
							name="title"
							label={t('honors.add.title')}
							validate={[required]}
						/>

						<Field
							component={InputElement}
							type="text"
							name="order"
							label={t('honors.add.order')}
							validate={[required]}
						/>
					</div>
				)}
			</Translation>

			<Translation>
				{t => (
					<div className="w-100 pl-3">
						<Field
							component={DateElement}
							name="datePresentation"
							label={t('honors.add.date')}
						/>

						<Field
							component={DataListElement}
							name="user"
							placeholder={t('honors.add.user')}
							url={`${process.env.REACT_APP_SERVER_URL}/search/users`}
						/>
					</div>
				)}
			</Translation>
		</div>
	</form>
);

export default reduxForm<IHonorsAddData>({
	form: 'honorsAddForm'
})(HonorsAddForm);
