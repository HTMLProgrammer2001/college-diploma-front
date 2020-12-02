import React from 'react';
import {Link} from 'react-router-dom';
import {Spinner} from 'react-bootstrap';

import {Roles} from '../../../utils/helpers/converters/RoleCodeToName';
import UserCan from '../../../common/UserCan';
import {IHonor} from '../../../interfaces/models/IHonor';


type IHonorItemProps = {
	honor: IHonor,
	isDeleting: boolean,
	del: (id: number) => void
};

const HonorItem: React.FC<IHonorItemProps> = ({honor, isDeleting, del}) => (
	<tr>
		<th>{honor.id}</th>
		<th>{honor.user.fullName}</th>
		<th>{honor.title}</th>
		<th>{honor.datePresentation}</th>
		<th>
			<UserCan role={Roles.VIEWER}>
				<Link to={`/honors/${honor.id}`}>
					<i className="fa fa-eye"/>
				</Link>
			</UserCan>

			<UserCan role={Roles.MODERATOR}>
				<Link to={`/honors/${honor.id}/edit`}>
					<i className="fa fa-pencil"/>
				</Link>

				{
					isDeleting ?
						<Link to="#">
							<i className="fa fa-close" onClick={() => del(honor.id)}/>
						</Link>
						:
						<Spinner animation="border" size="sm"/>
				}
			</UserCan>
		</th>
	</tr>
);

export default HonorItem;
