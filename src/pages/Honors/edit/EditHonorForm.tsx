import React, {useEffect} from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {Translation} from 'react-i18next';
import {connect, ConnectedProps} from 'react-redux';

import {RootState} from '../../../redux';
import {selectEditHonor} from '../../../redux/honors/edit/selectors';
import required from '../../../utils/validators/required';
import date from '../../../utils/validators/date';

import InputElement from '../../../common/formElements/InputElement';
import DateElement from '../../../common/formElements/DateElement';
import DataListElement from '../../../common/formElements/DataListElement';


const mapStateToProps = (state: RootState) => ({
	honor: selectEditHonor(state)
});

const connected = connect(mapStateToProps);

export type IHonorsEditData = {
	order: string,
	datePresentation: string,
	title: string,
	user: number
};

type IOwnProps = ConnectedProps<typeof connected>;

type IHonorsEditFormProps = InjectedFormProps<IHonorsEditData, IOwnProps> & IOwnProps;
const HonorsEditForm: React.FC<IHonorsEditFormProps> = (props) => {
	const {handleSubmit, error, initialize, honor} = props;
	
	useEffect(() => {
		initialize({...honor, user: honor.user.id} as any);
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
								label={t('honors.edit.title')}
								validate={[required]}
							/>

							<Field
								component={InputElement}
								type="text"
								name="order"
								label={t('honors.edit.order')}
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
								className="mb-2"
								label={t('honors.edit.date')}
								validate={[required, date]}
							/>

							<Field
								component={DataListElement}
								name="user"
								placeholder={t('honors.edit.user')}
								url={`${process.env.REACT_APP_SERVER_URL}/search/users`}
								defVal={{id: honor.user.id, title: honor.user.fullName}}
								validate={[required]}
							/>
						</div>
					)}
				</Translation>
			</div>
		</form>
	);
};

export default connected(
		reduxForm<IHonorsEditData, IOwnProps>({
			form: 'honorsEditForm'
		})(HonorsEditForm)
);
