import React from 'react';
import {Link} from 'react-router-dom';
import {Spinner} from 'react-bootstrap';

import UserCan from '../../../common/UserCan';
import {Roles} from '../../../utils/helpers/RoleCodeToName';
import {ICategory} from '../../../interfaces/models/ICategory';


type ICategoryItemProps = {
	category: ICategory,
	isDeleting: boolean,
	del: (id: number) => void
};

const CategoryItem: React.FC<ICategoryItemProps> = ({category, isDeleting, del}) => (
	<tr>
		<th>{category.id}</th>
		<th>{category.name}</th>
		<th>
			<UserCan role={Roles.MODERATOR}>
				<Link to={`/categories/${category.id}/edit`}>
					<i className="fa fa-pencil"/>
				</Link>

				{
					isDeleting ?
						<Link to="#">
							<i className="fa fa-close" onClick={() => del(category.id)}/>
						</Link>
						:
						<Spinner animation="border" size="sm"/>
				}
			</UserCan>
		</th>
	</tr>
);

export default CategoryItem;
