import React, {useEffect} from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {Translation} from 'react-i18next';
import {connect, ConnectedProps} from 'react-redux';

import InputElement from '../../../common/formElements/InputElement';
import required from '../../../utils/validators/required';
import DataListElement from '../../../common/formElements/DataListElement';
import {RootState} from '../../../redux';
import {selectEditEducation} from '../../../redux/educations/edit/selectors';
import positiveNumber from '../../../utils/validators/positiveNumber';


const mapStateToProps = (state: RootState) => ({
	education: selectEditEducation(state)
});

const connected = connect(mapStateToProps);

export type IEducationsEditData = {
	user: number,
	qualification: string,
	institution: string,
	graduateYear: number,
	specialty: string
};

type IOwnProps = ConnectedProps<typeof connected>;

type IEducationsEditFormProps = InjectedFormProps<IEducationsEditData, IOwnProps> & IOwnProps;
const EducationsEditForm: React.FC<IEducationsEditFormProps> = (props) => {
	const {handleSubmit, error, initialize, education} = props;
	
	useEffect(() => {
		initialize({...education, graduateYear: education.graduate_year} as any);
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
								component={DataListElement}
								name="user"
								placeholder={t('educations.edit.user')}
								url={`${process.env.REACT_APP_SERVER_URL}/search/users`}
							/>

							<Field
								component={InputElement}
								type="text"
								name="institution"
								label={t('educations.edit.institution')}
								validate={[required]}
							/>

							<Field
								component={InputElement}
								type="text"
								name="qualification"
								label={t('educations.edit.qualification')}
								validate={[required]}
							/>
						</div>
					)}
				</Translation>

				<Translation>
					{t => (
						<div className="w-100 pl-3">
							<Field
								component={InputElement}
								name="graduateYear"
								label={t('educations.edit.graduateYear')}
								validate={[required, positiveNumber]}
							/>

							<Field
								component={InputElement}
								name="specialty"
								label={t('educations.edit.specialty')}
							/>
						</div>
					)}
				</Translation>
			</div>
		</form>
	);
};

export default connected(
		reduxForm<IEducationsEditData, IOwnProps>({
			form: 'educationsEditForm'
		})(EducationsEditForm)
);
