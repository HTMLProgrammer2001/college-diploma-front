import React from 'react';
import {Tab, Tabs, Table} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';

import {IUser} from '../../../../interfaces/models/IUser';


type IUserBodyProps = {
	user: IUser
};

const UserBody: React.FC<IUserBodyProps> = ({user}) => {
	const {t} = useTranslation();

	return (
		<Tabs defaultActiveKey="personal" id="userTabs">
			<Tab eventKey="personal" title={t('users.modal.personal')}>
				<Table bordered hover className="mt-3">
					<thead>
						<tr>
							<th>{t('users.modal.fieldName')}</th>
							<th>{t('users.modal.fieldValue')}</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<th>{t('users.modal.fullName')}</th>
							<th>{user.fullName}</th>
						</tr>

						<tr>
							<th>{t('users.modal.email')}</th>
							<th>{user.email}</th>
						</tr>

						<tr>
							<th>{t('users.modal.address')}</th>
							<th>{user.address}</th>
						</tr>

						<tr>
							<th>{t('users.modal.birthday')}</th>
							<th>{user.birthday}</th>
						</tr>

						<tr>
							<th>{t('users.modal.phone')}</th>
							<th>{user.phone}</th>
						</tr>
					</tbody>
				</Table>
			</Tab>

			<Tab eventKey="professional" title={t('users.modal.professional')}>
				<Table bordered hover className="mt-3">
					<thead>
					<tr>
						<th>{t('users.modal.fieldName')}</th>
						<th>{t('users.modal.fieldValue')}</th>
					</tr>
					</thead>

					<tbody>
					<tr>
						<th>{t('users.modal.commission')}</th>
						<th>{user.commission?.name}</th>
					</tr>

					<tr>
						<th>{t('users.modal.department')}</th>
						<th>{user.department?.name}</th>
					</tr>

					<tr>
						<th>{t('users.modal.category')}</th>
						<th>{user.category}</th>
					</tr>

					<tr>
						<th>{t('users.modal.pedagogicalTitle')}</th>
						<th>{user.pedagogicalTitle}</th>
					</tr>

					<tr>
						<th>{t('users.modal.rank')}</th>
						<th>{user.rank?.name}</th>
					</tr>

					<tr>
						<th>{t('users.modal.experience')}</th>
						<th>{user.experience}</th>
					</tr>
					</tbody>
				</Table>
			</Tab>
		</Tabs>
	);
};

export default UserBody;
