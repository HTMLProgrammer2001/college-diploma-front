import React from 'react';
import {Link} from 'react-router-dom';
import {Spinner} from 'react-bootstrap';

import {IPublication} from '../../../interfaces/models/IPublication';
import {Roles} from '../../../utils/helpers/RoleCodeToName';
import UserCan from '../../../common/UserCan';


type IPublicationItemProps = {
	publication: IPublication,
	isDeleting: boolean,
	del: (id: number) => void
};

const PublicationItem: React.FC<IPublicationItemProps> = ({publication, isDeleting, del}) => (
	<tr>
		<th>{publication.id}</th>
		<th>{publication.title}</th>
		<th>{publication.authors}</th>
		<th>{publication.date_of_publication}</th>
		<th>
			<UserCan role={Roles.MODERATOR}>
				<Link to={`/publications/${publication.id}`}>
					<i className="fa fa-eye"/>
				</Link>

				<Link to={`/publications/${publication.id}/edit`}>
					<i className="fa fa-pencil"/>
				</Link>

				{
					isDeleting ?
						<Link to="#">
							<i className="fa fa-close" onClick={() => del(publication.id)}/>
						</Link>
						:
						<Spinner animation="border" size="sm"/>
				}
			</UserCan>
		</th>
	</tr>
);

export default PublicationItem;
