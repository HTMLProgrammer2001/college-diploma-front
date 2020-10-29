import React from 'react';

import {IRebuke} from '../../../../interfaces/models/IRebuke';
import {Link} from 'react-router-dom';


type IRebukeItemProps = {
	rebuke: IRebuke
};

const RebukeItem: React.FC<IRebukeItemProps> = ({rebuke}) => (
	<tr>
		<th>{rebuke.id}</th>
		<th>{rebuke.title}</th>
		<th>{rebuke.datePresentation}</th>
		<th>
			<Link to={`/rebukes/${rebuke.id}`}>
				<i className="fa fa-eye"/>
			</Link>
		</th>
	</tr>
);

export default RebukeItem;
