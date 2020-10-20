import React from 'react';
import {Dropdown} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';

import styles from './styles.module.scss';
import {RootState} from '../../../redux';
import {selectMeInfo} from '../../../redux/me/selectors';
import roleCodeToName from '../../../utils/helpers/RoleCodeToName';
import thunkLogout from '../../../redux/logout/thunks';


const mapStateToProps = (state: RootState) => ({
	user: selectMeInfo(state)
});

const connected = connect(mapStateToProps, {
	logout: thunkLogout
});

type IUserDropdownProps = ConnectedProps<typeof connected>;
const UserDropdown: React.FC<IUserDropdownProps> = ({user}) => (
	<Dropdown>
		<Dropdown.Toggle className={styles.dropNo}>
			<img
				src={user.avatar}
				alt="Avatar"
				className={styles.avatar}
			/>

			<span>{user.fullName}</span>
		</Dropdown.Toggle>

		<Dropdown.Menu className="bg-blue p-2">
			<div className="center flex-column text-white">
				<img
					src={user.avatar}
					alt="Avatar"
				/>

				<div>{user.fullName}</div>
				<div>{roleCodeToName(user.role)}</div>
			</div>
		</Dropdown.Menu>
	</Dropdown>
);

export default connected(UserDropdown);
