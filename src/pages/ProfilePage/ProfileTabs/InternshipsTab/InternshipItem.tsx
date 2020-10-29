import React from 'react';
import {IInternship} from '../../../../interfaces/models/IInternship';
import {Link} from 'react-router-dom';


type IInternshipItemProps = {
	internship: IInternship
};

const InternshipItem: React.FC<IInternshipItemProps> = ({internship}) => (
	<tr>
		<th>{internship.id}</th>
		<th>{internship.category?.name}</th>
		<th>{internship.title}</th>
		<th>{internship.hours}</th>
		<th>{internship.to}</th>
		<th>
			<Link to={`/internships/${internship.id}`}>
				<i className="fa fa-eye"/>
			</Link>
		</th>
	</tr>
);

export default InternshipItem;
