import React, {useEffect} from 'react';
import {Button, Card, Row, Spinner} from 'react-bootstrap';
import {ConnectedProps, connect} from 'react-redux';
import {submit, isSubmitting} from 'redux-form';
import {useTranslation} from 'react-i18next';
import {compose} from 'redux';

import {RootState} from '../../../redux';
import BackButton from '../../../common/BackButton';
import AddInternshipForm, {IInternshipsAddData} from './AddInternshipForm';

import IsUserRoleMore from '../../../utils/HOC/IsUserRoleMore';
import {Roles} from '../../../utils/helpers/converters/RoleCodeToName';
import thunkAddInternship from '../../../redux/internships/add/thunks';


const mapStateToProps = (state: RootState) => ({
	submitting: isSubmitting('internshipsAddForm')(state)
});

const mapDispatchToProps = (dispatch: any) => ({
	add(vals: IInternshipsAddData){
		dispatch(thunkAddInternship(vals));
		return;
	},
	send: () => dispatch(submit('internshipsAddForm'))
});

const connected = connect(mapStateToProps, mapDispatchToProps);

type IAddPublicationPageProps = ConnectedProps<typeof connected>;
const AddPublicationPage: React.FC<IAddPublicationPageProps> = ({add, send, submitting}) => {
	const {t} = useTranslation();

	useEffect(() => {
		document.title = t('internships.add.pageTitle');
	}, []);

	return (
		<>
			<div className="title">
				{t('internships.add.pageTitle')}
			</div>

			<Card className="mr-5">
				<Card.Body>
					<AddInternshipForm onSubmit={add}/>
				</Card.Body>

				<Card.Footer>
					<Row className="justify-content-between p-2">
						<BackButton/>

						<Button
							variant="success"
							onClick={send}
							disabled={submitting}
						>
							{submitting && <Spinner size="sm" animation="border"/>}
							{t('common.add')}
						</Button>
					</Row>
				</Card.Footer>
			</Card>
		</>
	);
};

export default compose<React.FC<IAddPublicationPageProps>>(
	IsUserRoleMore(Roles.MODERATOR, true),
	connected
)(AddPublicationPage);
