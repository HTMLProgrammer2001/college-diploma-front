import React from 'react';
import {Link} from 'react-router-dom';
import {Spinner} from 'react-bootstrap';

import {Roles} from '../../../utils/helpers/converters/RoleCodeToName';
import UserCan from '../../../common/UserCan';
import {IInternship} from '../../../interfaces/models/IInternship';


type IInternshipItemProps = {
	internship: IInternship,
	isDeleting: boolean,
	del: (id: number) => void
};

const InternshipItem: React.FC<IInternshipItemProps> = ({internship, isDeleting, del}) => (
	<tr>
		<th>{internship.id}</th>
		<th>{internship.user.fullName}</th>
		<th>{internship.category.name}</th>
		<th>{internship.title}</th>
		<th>{internship.hours}</th>
		<th>{internship.to}</th>
		<th>
			<UserCan role={Roles.VIEWER}>
				<Link to={`/internships/${internship.id}`}>
					<i className="fa fa-eye"/>
				</Link>
			</UserCan>

			<UserCan role={Roles.MODERATOR}>
				<Link to={`/internships/${internship.id}/edit`}>
					<i className="fa fa-pencil"/>
				</Link>

				{
					isDeleting ?
						<Link to="#">
							<i className="fa fa-close" onClick={() => del(internship.id)}/>
						</Link>
						:
						<Spinner animation="border" size="sm"/>
				}
			</UserCan>
		</th>
	</tr>
);

export default InternshipItem;
