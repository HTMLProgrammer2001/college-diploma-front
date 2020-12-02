import React from 'react';
import {Link} from 'react-router-dom';
import {Spinner} from 'react-bootstrap';

import {IRank} from '../../../interfaces/models/IRank';
import {Roles} from '../../../utils/helpers/converters/RoleCodeToName';
import UserCan from '../../../common/UserCan';


type IRankItemProps = {
	rank: IRank,
	isDeleting: boolean,
	del: (id: number) => void
};

const RankItem: React.FC<IRankItemProps> = ({rank, isDeleting, del}) => (
	<tr>
		<th>{rank.id}</th>
		<th>{rank.name}</th>
		<th>
			<UserCan role={Roles.MODERATOR}>
				<Link to={`/ranks/${rank.id}/edit`}>
					<i className="fa fa-pencil"/>
				</Link>

				{
					isDeleting ?
						<Link to="#">
							<i className="fa fa-close" onClick={() => del(rank.id)}/>
						</Link>
						:
						<Spinner animation="border" size="sm"/>
				}
			</UserCan>
		</th>
	</tr>
);

export default RankItem;
