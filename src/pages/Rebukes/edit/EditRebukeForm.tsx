import React, {useEffect} from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {Translation} from 'react-i18next';
import {connect, ConnectedProps} from 'react-redux';

import InputElement from '../../../common/formElements/InputElement';
import required from '../../../utils/validators/required';
import DateElement from '../../../common/formElements/DateElement';
import DataListElement from '../../../common/formElements/DataListElement';
import {RootState} from '../../../redux';
import {selectEditRebuke} from '../../../redux/rebukes/edit/selectors';


const mapStateToProps = (state: RootState) => ({
	rebuke: selectEditRebuke(state)
});

const connected = connect(mapStateToProps);

export type IRebukesEditData = {
	order: string,
	datePresentation: string,
	title: string,
	user: number
};

type IOwnProps = ConnectedProps<typeof connected>;

type IRebukesEditFormProps = InjectedFormProps<IRebukesEditData, IOwnProps> & IOwnProps;
const RebukesEditForm: React.FC<IRebukesEditFormProps> = (props) => {
	const {handleSubmit, error, initialize, rebuke} = props;
	
	useEffect(() => {
		initialize({...rebuke, datePresentation: null} as any);
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
								label={t('rebukes.edit.title')}
								validate={[required]}
							/>

							<Field
								component={InputElement}
								type="text"
								name="order"
								label={t('rebukes.edit.order')}
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
								label={t('rebukes.edit.date')}
							/>

							<Field
								component={DataListElement}
								name="user"
								placeholder={t('rebukes.edit.user')}
								url={`${process.env.REACT_APP_SERVER_URL}/search/users`}
							/>
						</div>
					)}
				</Translation>
			</div>
		</form>
	);
};

export default connected(
		reduxForm<IRebukesEditData, IOwnProps>({
			form: 'rebukesEditForm'
		})(RebukesEditForm)
);