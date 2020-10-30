import React from 'react';
import {Link} from 'react-router-dom';
import {Spinner} from 'react-bootstrap';

import {IDepartment} from '../../../interfaces/models/IDepartment';
import UserCan from '../../../common/UserCan';
import {Roles} from '../../../utils/helpers/RoleCodeToName';


type IDepartmentItemProps = {
	department: IDepartment,
	isDeleting: boolean,
	del: (id: number) => void
};

const DepartmentItem: React.FC<IDepartmentItemProps> = ({department, isDeleting, del}) => (
	<tr>
		<th>{department.id}</th>
		<th>{department.name}</th>
		<th>
			<UserCan role={Roles.MODERATOR}>
				<Link to={`/departments/${department.id}/edit`}>
					<i className="fa fa-pencil"/>
				</Link>

				{
					isDeleting ?
						<Link to="#">
							<i className="fa fa-close" onClick={() => del(department.id)}/>
						</Link>
						:
						<Spinner animation="border" size="sm"/>
				}
			</UserCan>
		</th>
	</tr>
);

export default DepartmentItem;
