import React from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {Translation} from 'react-i18next';

import InputElement from '../../../common/formElements/InputElement';
import required from '../../../utils/validators/required';
import DateElement from '../../../common/formElements/DateElement';
import DataListElement from '../../../common/formElements/DataListElement';


export type IPublicationsAddData = {
	title: string,
	url: string,
	publisher: string,
	date: string,
	authors: number,
	another_authors: string
};

type IPublicationsAddFormProps = InjectedFormProps<IPublicationsAddData>;
const PublicationsAddForm: React.FC<IPublicationsAddFormProps> = ({handleSubmit, error}) => (
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
							label={t('publications.add.name')}
							validate={[required]}
						/>

						<Field
							component={InputElement}
							type="text"
							name="publisher"
							label={t('publications.add.publisher')}
							validate={[required]}
						/>

						<Field
							component={InputElement}
							type="text"
							name="url"
							label={t('publications.add.url')}
						/>
					</div>
				)}
			</Translation>

			<Translation>
				{t => (
					<div className="w-100 pl-3">
						<Field
							component={DateElement}
							name="date"
							className="mb-2"
							label={t('publications.add.date')}
						/>

						<Field
							component={DataListElement}
							name="authors"
							placeholder={t('publications.add.authors')}
							url={`${process.env.REACT_APP_SERVER_URL}/users`}
							multiple
						/>

						<Field
							component={InputElement}
							type="text"
							name="another_authors"
							label={t('publications.add.anotherAuthors')}
						/>
					</div>
				)}
			</Translation>
		</div>
	</form>
);

export default reduxForm<IPublicationsAddData>({
	form: 'publicationsAddForm'
})(PublicationsAddForm);
