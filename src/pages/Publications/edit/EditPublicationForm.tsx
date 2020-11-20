import React, {useEffect} from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {Translation} from 'react-i18next';
import {connect, ConnectedProps} from 'react-redux';

import InputElement from '../../../common/formElements/InputElement';
import required from '../../../utils/validators/required';
import DateElement from '../../../common/formElements/DateElement';
import DataListElement from '../../../common/formElements/DataListElement';
import {RootState} from '../../../redux';
import {selectEditPublication} from '../../../redux/publications/edit/selectors';


const mapStateToProps = (state: RootState) => ({
	publication: selectEditPublication(state)
});

const connected = connect(mapStateToProps);

export type IPublicationsEditData = {
	title: string,
	url: string,
	publisher: string,
	date: string,
	authors: number[],
	another_authors: string,
	description?: string
};

type IOwnProps = ConnectedProps<typeof connected>;

type IPublicationsEditFormProps = InjectedFormProps<IPublicationsEditData, IOwnProps> & IOwnProps;
const PublicationsEditForm: React.FC<IPublicationsEditFormProps> = (props) => {
	const {handleSubmit, error, initialize, publication} = props;
	
	useEffect(() => {
		initialize({...publication, date: publication.date_of_publication, authors: null} as any);
	}, []);
	
	return (
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
								label={t('publications.edit.name')}
								validate={[required]}
							/>

							<Field
								component={InputElement}
								type="text"
								name="publisher"
								label={t('publications.edit.publisher')}
								validate={[required]}
							/>

							<Field
								component={InputElement}
								type="text"
								name="url"
								label={t('publications.edit.url')}
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
								label={t('publications.edit.date')}
							/>

							<Field
								component={DataListElement}
								name="authors"
								placeholder={t('publications.edit.authors')}
								url={`${process.env.REACT_APP_SERVER_URL}/search/users`}
								defVal={publication.authorsList}
								multiple
							/>

							<Field
								component={InputElement}
								type="text"
								name="another_authors"
								label={t('publications.edit.anotherAuthors')}
							/>
						</div>
					)}
				</Translation>
			</div>

			<Translation>
				{t => (
					<div className="w-100 mt-2">
						<Field
							component="textarea"
							className="form-control"
							name="description"
							rows={5}
							label={t('publications.edit.description')}
						/>
					</div>
				)}
			</Translation>
		</form>
	);
};

export default connected(
		reduxForm<IPublicationsEditData, IOwnProps>({
			form: 'publicationsEditForm'
		})(PublicationsEditForm)
);
