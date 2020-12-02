import React from 'react';
import {Tab, Tabs, Table} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';

import {IUser} from '../../../../interfaces/models/IUser';
import pageConvert from '../../../../utils/helpers/converters/pageConvert';
import pedagogicalToName from '../../../../utils/helpers/converters/pedagogicalToName';
import academicToName from '../../../../utils/helpers/converters/academicToName';
import scientificToName from '../../../../utils/helpers/converters/scientificToName';


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
							<th>{user.address || t('common.notSetted')}</th>
						</tr>

						<tr>
							<th>{t('users.modal.birthday')}</th>
							<th>{user.birthday || t('common.notSetted')}</th>
						</tr>

						<tr>
							<th>{t('users.modal.phone')}</th>
							<th>{user.phone || t('common.notSetted')}</th>
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
						<th>{user.commission?.name || t('common.notSetted')}</th>
					</tr>

					<tr>
						<th>{t('users.modal.department')}</th>
						<th>{user.department?.name || t('common.notSetted')}</th>
					</tr>

					<tr>
						<th>{t('users.modal.category')}</th>
						<th>{user.category || t('common.notSetted')}</th>
					</tr>

					<tr>
						<th>{t('users.modal.pedagogicalTitle')}</th>
						<th>{pageConvert(user.pedagogicalTitle, pedagogicalToName)}</th>
					</tr>

					<tr>
						<th>{t('users.modal.rank')}</th>
						<th>{user.rank?.name || t('common.notSetted')}</th>
					</tr>

					<tr>
						<th>{t('users.modal.experience')}</th>
						<th>{user.experience || t('common.notSetted')}</th>
					</tr>

					<tr>
						<th>{t('users.modal.academicStatus')}</th>
						<th>{pageConvert(user.academicStatus, academicToName)}</th>
					</tr>

					<tr>
						<th>{t('users.modal.academicStatusYear')}</th>
						<th>{user.academicStatusYear || t('common.notSetted')}</th>
					</tr>

					<tr>
						<th>{t('users.modal.scientificDegree')}</th>
						<th>{pageConvert(user.scientificDegree, scientificToName)}</th>
					</tr>

					<tr>
						<th>{t('users.modal.scientificDegreeYear')}</th>
						<th>{user.scientificDegreeYear || t('common.notSetted')}</th>
					</tr>
					</tbody>
				</Table>
			</Tab>
		</Tabs>
	);
};

export default UserBody;
