import React from 'react';

import {IPublication} from '../../../../interfaces/models/IPublication';
import {Link} from 'react-router-dom';


type IPublicationItemProps = {
	publication: IPublication
};

const PublicationItem: React.FC<IPublicationItemProps> = ({publication}) => (
	<tr>
		<th>{publication.id}</th>
		<th>{publication.title}</th>
		<th>{publication.authors}</th>
		<th>{publication.date_of_publication}</th>
		<th>
			<Link to={`/publications/${publication.id}`}>
				<i className="fa fa-eye"/>
			</Link>
		</th>
	</tr>
);

export default PublicationItem;
