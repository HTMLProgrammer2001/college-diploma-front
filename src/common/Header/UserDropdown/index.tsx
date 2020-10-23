import React from 'react';
import {Dropdown} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import cn from 'classnames';

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
const UserDropdown: React.FC<IUserDropdownProps> = ({user, logout}) => {
	const history = useHistory(),
		  handler = () => {
				logout().then((result: boolean) => {
					if(result)
						history.push('/login');
				});
		  };

	return (
		<Dropdown>
			<Dropdown.Toggle className={styles.dropNo}>
				<img
					src={user.avatar}
					alt="Avatar"
					className={styles.avatar}
				/>

				<span>{user.fullName}</span>
			</Dropdown.Toggle>

			<Dropdown.Menu className={cn("bg-blue p-0", styles.dropdown)}>
				<div className="center flex-column text-white p-2">
					<img
						src={user.avatar}
						alt="Avatar"
					/>

					<div>{user.fullName}</div>
					<div>{roleCodeToName(user.role)}</div>
				</div>

				<div className={styles.buttons}>
					<Link to="/profile" className={styles.button}>Профиль</Link>
					<div className={styles.button} onClick={handler}>Выйти</div>
				</div>
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default connected(UserDropdown);
