import React from 'react';

import {IHonor} from '../../../../interfaces/models/IHonor';
import {Link} from 'react-router-dom';


type IHonorItemProps = {
	honor: IHonor
};

const HonorItem: React.FC<IHonorItemProps> = ({honor}) => (
	<tr>
		<th>{honor.id}</th>
		<th>{honor.title}</th>
		<th>{honor.datePresentation || 'Дата не установлена'}</th>
		<th>
			<Link to={`/honors/${honor.id}`}>
				<i className="fa fa-eye"/>
			</Link>
		</th>
	</tr>
);

export default HonorItem;

