import React from 'react';
import {Link} from 'react-router-dom';
import {Spinner} from 'react-bootstrap';

import {Roles} from '../../../utils/helpers/RoleCodeToName';
import UserCan from '../../../common/UserCan';
import {IEducation} from '../../../interfaces/models/IEducation';


type IEducationItemProps = {
	education: IEducation,
	isDeleting: boolean,
	del: (id: number) => void
};

const EducationItem: React.FC<IEducationItemProps> = ({education, isDeleting, del}) => (
	<tr>
		<th>{education.id}</th>
		<th>{education.user.fullName}</th>
		<th>{education.qualification}</th>
		<th>{education.graduate_year}</th>
		<th>
			<UserCan role={Roles.VIEWER}>
				<Link to={`/educations/${education.id}`}>
					<i className="fa fa-eye"/>
				</Link>
			</UserCan>

			<UserCan role={Roles.MODERATOR}>
				<Link to={`/educations/${education.id}/edit`}>
					<i className="fa fa-pencil"/>
				</Link>

				{
					isDeleting ?
						<Link to="#">
							<i className="fa fa-close" onClick={() => del(education.id)}/>
						</Link>
						:
						<Spinner animation="border" size="sm"/>
				}
			</UserCan>
		</th>
	</tr>
);

export default EducationItem;
