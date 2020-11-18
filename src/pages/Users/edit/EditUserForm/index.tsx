import React, {useEffect} from 'react';
import {reduxForm, InjectedFormProps} from 'redux-form';
import {Tabs, Tab} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {useTranslation} from 'react-i18next';

import {RootState} from '../../../../redux';
import {selectEditUser} from '../../../../redux/users/edit/selectors';

import PersonalTab from './PersonalTab';
import ProfessionalTab from './ProfessionalTab';


const mapStateToProps = (state: RootState) => ({
	user: selectEditUser(state)
});

const connected = connect(mapStateToProps);

export type IUsersEditData = {
	fullName: string,
	email: string,
	birthday?: string,
	phone?: string,
	password?: string,
	password_confirmation?: string,
	address?: string,
	avatar?: File,
	department: number,
	commission: number,
	rank?: number,
	role: number,
	hiring_year?: number,
	pedagogical_title?: number,
	experience?: number,
	academic_status?: number,
	academic_status_year?: number,
	scientific_degree?: number,
	scientific_degree_year?: number
};

type IOwnProps = ConnectedProps<typeof connected>;

type IUsersEditFormProps = InjectedFormProps<IUsersEditData, IOwnProps> & IOwnProps;
const UsersEditForm: React.FC<IUsersEditFormProps> = ({handleSubmit, user, initialize}) => {
	useEffect(() => {
		initialize({...user, avatar: null} as any);
	}, []);

	const {t} = useTranslation();

	return (
		<form onSubmit={handleSubmit}>
			<Tabs defaultActiveKey="personal" id="userEdit">
				<Tab eventKey="personal" title={t('users.edit.personal.title')}>
					<PersonalTab/>
				</Tab>

				<Tab eventKey="professional" title={t('users.edit.professional.title')}>
					<ProfessionalTab/>
				</Tab>
			</Tabs>
		</form>
	);
};

export default connected(
	reduxForm<IUsersEditData, IOwnProps>({
		form: 'usersEditForm'
	})(UsersEditForm)
);
