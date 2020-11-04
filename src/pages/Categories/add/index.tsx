import React, {useEffect} from 'react';
import {Button, Card, Row, Spinner} from 'react-bootstrap';
import {ConnectedProps, connect} from 'react-redux';
import {submit, isSubmitting} from 'redux-form';
import {useTranslation} from 'react-i18next';

import {RootState} from '../../../redux';
import BackButton from '../../../common/BackButton';
import AddCategoryForm from './AddCategoryForm';
import IsUserRoleMore from '../../../utils/HOC/IsUserRoleMore';
import {Roles} from '../../../utils/helpers/RoleCodeToName';


const mapStateToProps = (state: RootState) => ({
	submitting: isSubmitting('categoriesAddForm')(state)
});

const connected = connect(mapStateToProps, {
	add: () => {},
	send: () => submit('categoriesAddForm')
});

type IAddCategoryPageProps = ConnectedProps<typeof connected>;
const AddCategoryPage: React.FC<IAddCategoryPageProps> = ({add, send, submitting}) => {
	const {t} = useTranslation();

	useEffect(() => {
		document.title = t('categories.add.pageTitle');
	}, []);

	return (
		<>
			<div className="title">
				{t('categories.add.pageTitle')}
			</div>

			<Card className="mr-5">
				<Card.Body>
					<AddCategoryForm onSubmit={add}/>
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

export default IsUserRoleMore(Roles.MODERATOR, true)(connected(AddCategoryPage));
