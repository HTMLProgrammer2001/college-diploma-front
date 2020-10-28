import React from 'react';
import {Link} from 'react-router-dom';
import {Spinner} from 'react-bootstrap';

import {ICommission} from '../../../interfaces/models/ICommission';


type ICommissionItemProps = {
	commission: ICommission,
	isDeleting: boolean,
	del: (id: number) => void
};

const CommissionItem: React.FC<ICommissionItemProps> = ({commission, isDeleting, del}) => (
	<tr>
		<th>{commission.id}</th>
		<th>{commission.name}</th>
		<th>
			<Link to={`/departments/${commission.id}/edit`}>
				<i className="fa fa-pencil"/>
			</Link>

			{
				isDeleting ?
					<Link to="#">
						<i className="fa fa-close" onClick={() => del(commission.id)}/>
					</Link>
					:
					<Spinner animation="border" size="sm"/>
			}
		</th>
	</tr>
);

export default CommissionItem;
