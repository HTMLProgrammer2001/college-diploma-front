import React from 'react';
import {Link} from 'react-router-dom';
import {Spinner} from 'react-bootstrap';
import {useDispatch} from 'react-redux';

import {IUser} from '../../../interfaces/models/IUser';
import UserCan from '../../../common/UserCan';
import {Roles} from '../../../utils/helpers/RoleCodeToName';
import {userModalSetName} from '../../../redux/users/modal/actions';


type IUserItemProps = {
	user: IUser,
	isDeleting: boolean,
	del: (id: number) => void
};

const UserItem: React.FC<IUserItemProps> = ({user, isDeleting, del}) => {
	const dispatch = useDispatch();
	const viewHandler = (name: string) => {
		dispatch(userModalSetName(name));
	};

	return (
		<tr>
			<th>{user.id}</th>
			<th>{user.fullName}</th>
			<th>{user.email}</th>
			<th className="center">
				<img
					src={user.avatar}
					alt="User avatar"
					style={{maxWidth: '100%', width: '200px'}}
				/>
			</th>
			<th>
				<UserCan role={Roles.VIEWER}>
					<Link to={`#${user.id}`} onClick={() => viewHandler(user.fullName)}>
						<i className="fa fa-eye"/>
					</Link>

					<Link to={`/users/${user.id}`}>
						<i className="fa fa-eye"/>
					</Link>
				</UserCan>

				<UserCan role={Roles.MODERATOR}>
					<Link to={`/users/${user.id}/edit`}>
						<i className="fa fa-pencil"/>
					</Link>

					{
						isDeleting ?
							<Link to="#">
								<i className="fa fa-close" onClick={() => del(user.id)}/>
							</Link>
							:
							<Spinner animation="border" size="sm"/>
					}
				</UserCan>
			</th>
		</tr>
	);
}

export default UserItem;
