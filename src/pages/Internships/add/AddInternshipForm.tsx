import React from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {Translation} from 'react-i18next';

import InputElement from '../../../common/formElements/InputElement';
import required from '../../../utils/validators/required';
import DateElement from '../../../common/formElements/DateElement';
import DataListElement from '../../../common/formElements/DataListElement';
import positiveNumber from '../../../utils/validators/positiveNumber';


export type IInternshipsAddData = {
	user: number,
	category: number,
	title: string,
	from: string,
	to: string,
	place: string,
	hours: number,
	credits?: number,
	code?: string
};

type IInternshipsAddFormProps = InjectedFormProps<IInternshipsAddData>;
const InternshipsAddForm: React.FC<IInternshipsAddFormProps> = ({handleSubmit, error}) => (
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
							component={DataListElement}
							name="user"
							placeholder={t('internships.add.user')}
							url={`${process.env.REACT_APP_SERVER_URL}/search/users`}
						/>

						<Field
							component={DataListElement}
							name="category"
							placeholder={t('internships.add.category')}
							url={`${process.env.REACT_APP_SERVER_URL}/search/internCategories`}
						/>

						<Field
							component={InputElement}
							name="title"
							label={t('internships.add.title')}
							validate={[required]}
						/>

						<Field
							component={InputElement}
							name="place"
							label={t('internships.add.place')}
							validate={[required]}
						/>

						<Field
							component={InputElement}
							name="code"
							label={t('internships.add.code')}
						/>
					</div>
				)}
			</Translation>

			<Translation>
				{t => (
					<div className="w-100 pl-3">
						<Field
							component={DateElement}
							name="from"
							label={t('internships.add.from')}
							validate={[required]}
						/>

						<Field
							component={DateElement}
							name="to"
							label={t('internships.add.to')}
							validate={[required]}
						/>

						<Field
							component={InputElement}
							type="number"
							name="hours"
							label={t('internships.add.hours')}
							validate={[required, positiveNumber]}
						/>

						<Field
							component={InputElement}
							type="number"
							name="credits"
							label={t('internships.add.credits')}
							validate={[positiveNumber]}
						/>
					</div>
				)}
			</Translation>
		</div>
	</form>
);

export default reduxForm<IInternshipsAddData>({
	form: 'internshipsAddForm'
})(InternshipsAddForm);
