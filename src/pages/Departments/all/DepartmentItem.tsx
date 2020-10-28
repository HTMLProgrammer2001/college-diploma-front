import React from 'react';
import {Link} from 'react-router-dom';
import {Spinner} from 'react-bootstrap';

import {IDepartment} from '../../../interfaces/models/IDepartment';


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
		</th>
	</tr>
);

export default DepartmentItem;
