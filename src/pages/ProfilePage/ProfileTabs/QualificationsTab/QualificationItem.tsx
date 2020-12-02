import React from 'react';

import {IQualification} from '../../../../interfaces/models/IQualification';
import {Link} from 'react-router-dom';
import categoriesCodeToName from '../../../../utils/helpers/converters/categoriesCodeToName';


type IQualificationItemProps = {
	qualification: IQualification
};

const QualificationItem: React.FC<IQualificationItemProps> = ({qualification}) => (
	<tr>
		<th>{qualification.id}</th>
		<th>{categoriesCodeToName(qualification.name)}</th>
		<th>{qualification.date}</th>
		<th>
			<Link to={`/qualifications/${qualification.id}`}>
				<i className="fa fa-eye"/>
			</Link>
		</th>
	</tr>
);

export default QualificationItem;
