import React, {useEffect} from 'react';
import {Button, Card, Row, Spinner} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {submit, isSubmitting} from 'redux-form';
import {useTranslation} from 'react-i18next';

import BackButton from '../../common/BackButton';
import ProfileEditForm, {IProfileEditData} from './EditProfileForm';
import {RootState} from '../../redux';
import thunkProfileEdit from '../../redux/profile/edit/thunks';


const mapStateToProps = (state: RootState) => ({
	submitting: isSubmitting('editProfileForm')(state)
});

const connected = connect(mapStateToProps, (dispatch: any) => ({
	sendForm: () => dispatch(submit('editProfileForm')),
	edit: (vals: IProfileEditData) => dispatch(thunkProfileEdit(vals))
}));

type IProfileEditPageProps = ConnectedProps<typeof connected>;
const ProfileEditPage: React.FC<IProfileEditPageProps> = ({sendForm, submitting, edit}) => {
	const {t} = useTranslation();

	useEffect(() => {
		document.head.title = t('profileEdit.pageTitle');
	}, []);

	return (
		<>
			<div className="title">
				{t('profileEdit.pageTitle')}
			</div>

			<Card className="mr-5">
				<Card.Body>
					<ProfileEditForm onSubmit={edit}/>
				</Card.Body>

				<Card.Footer>
					<Row className="justify-content-between p-2">
						<BackButton/>
						<Button variant="warning" onClick={sendForm} disabled={submitting}>
							{
								submitting && <Spinner size="sm" animation="border"/>
							}

							{t('common.save')}
						</Button>
					</Row>
				</Card.Footer>
			</Card>
		</>
	);
};

export default connected(ProfileEditPage);
