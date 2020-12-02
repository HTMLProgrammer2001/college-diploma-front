import React from 'react';
import {Link} from 'react-router-dom';
import {Spinner} from 'react-bootstrap';

import {Roles} from '../../../utils/helpers/converters/RoleCodeToName';
import UserCan from '../../../common/UserCan';
import {IQualification} from '../../../interfaces/models/IQualification';
import categoriesCodeToName from '../../../utils/helpers/converters/categoriesCodeToName';


type IQualificationItemProps = {
	qualification: IQualification,
	isDeleting: boolean,
	del: (id: number) => void
};

const QualificationItem: React.FC<IQualificationItemProps> = ({qualification, isDeleting, del}) => (
	<tr>
		<th>{qualification.id}</th>
		<th>{qualification.user.fullName}</th>
		<th>{categoriesCodeToName(qualification.name)}</th>
		<th>{qualification.date}</th>
		<th>
			<UserCan role={Roles.VIEWER}>
				<Link to={`/qualifications/${qualification.id}`}>
					<i className="fa fa-eye"/>
				</Link>
			</UserCan>

			<UserCan role={Roles.MODERATOR}>
				<Link to={`/qualifications/${qualification.id}/edit`}>
					<i className="fa fa-pencil"/>
				</Link>

				{
					isDeleting ?
						<Link to="#">
							<i className="fa fa-close" onClick={() => del(qualification.id)}/>
						</Link>
						:
						<Spinner animation="border" size="sm"/>
				}
			</UserCan>
		</th>
	</tr>
);

export default QualificationItem;

