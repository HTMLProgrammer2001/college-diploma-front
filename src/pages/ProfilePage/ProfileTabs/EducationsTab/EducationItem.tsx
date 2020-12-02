import React from 'react';
import {Link} from 'react-router-dom';

import {IEducation} from '../../../../interfaces/models/IEducation';
import qualificationToName from '../../../../utils/helpers/qualificationToName';


type IEducationItemProps = {
	education: IEducation
};

const EducationItem: React.FC<IEducationItemProps> = ({education}) => (
	<tr>
		<th>{education.id}</th>
		<th>{education.institution}</th>
		<th>{education.graduate_year}</th>
		<th>{qualificationToName(education.qualification)}</th>
		<th>
			<Link to={`/educations/${education.id}`}>
				<i className="fa fa-eye"/>
			</Link>
		</th>
	</tr>	
);

export default EducationItem;
