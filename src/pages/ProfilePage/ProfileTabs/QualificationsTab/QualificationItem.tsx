import React from 'react';

import {IQualification} from '../../../../interfaces/models/IQualification';
import {Link} from 'react-router-dom';


type IQualificationItemProps = {
	qualification: IQualification
};

const QualificationItem: React.FC<IQualificationItemProps> = ({qualification}) => (
	<tr>
		<th>{qualification.id}</th>
		<th>{qualification.name}</th>
		<th>{qualification.date}</th>
		<th>
			<Link to={`/qualifications/${qualification.id}`}>
				<i className="fa fa-eye"/>
			</Link>
		</th>
	</tr>
);

export default QualificationItem;
