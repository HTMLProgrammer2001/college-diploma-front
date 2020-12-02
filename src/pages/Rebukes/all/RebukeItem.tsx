import React from 'react';
import {Link} from 'react-router-dom';
import {Spinner} from 'react-bootstrap';

import {Roles} from '../../../utils/helpers/converters/RoleCodeToName';
import UserCan from '../../../common/UserCan';
import {IRebuke} from '../../../interfaces/models/IRebuke';


type IRebukeItemProps = {
	rebuke: IRebuke,
	isDeleting: boolean,
	del: (id: number) => void
};

const RebukeItem: React.FC<IRebukeItemProps> = ({rebuke, isDeleting, del}) => (
	<tr>
		<th>{rebuke.id}</th>
		<th>{rebuke.user.fullName}</th>
		<th>{rebuke.title}</th>
		<th>{rebuke.datePresentation}</th>
		<th>
			<UserCan role={Roles.VIEWER}>
				<Link to={`/rebukes/${rebuke.id}`}>
					<i className="fa fa-eye"/>
				</Link>
			</UserCan>

			<UserCan role={Roles.MODERATOR}>
				<Link to={`/rebukes/${rebuke.id}/edit`}>
					<i className="fa fa-pencil"/>
				</Link>

				{
					isDeleting ?
						<Link to="#">
							<i className="fa fa-close" onClick={() => del(rebuke.id)}/>
						</Link>
						:
						<Spinner animation="border" size="sm"/>
				}
			</UserCan>
		</th>
	</tr>
);

export default RebukeItem;
