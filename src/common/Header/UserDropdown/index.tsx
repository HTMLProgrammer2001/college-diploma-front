import React from 'react';
import {Dropdown} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import cn from 'classnames';
import {useTranslation} from 'react-i18next';

import styles from './styles.module.scss';
import {RootState} from '../../../redux';
import {selectMeInfo} from '../../../redux/me/selectors';
import thunkLogout from '../../../redux/logout/thunks';
import roleCodeToName from '../../../utils/helpers/RoleCodeToName';


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

	const {t} = useTranslation();

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
						className={styles.dropdown__avatar}
						alt={t('common.avatar')}
					/>

					<div>{user.fullName}</div>
					<div>{roleCodeToName(user.role)}</div>
				</div>

				<div className={styles.buttons}>
					<div className="d-flex">
						<Link to="/profile" className={styles.button}>
							{t('layout.header.profile')}
						</Link>

						<Link to="/profile/edit" className={styles.button}>
							<i className="fa fa-cog"/>
						</Link>
					</div>

					<div className={styles.button} onClick={handler}>
						{t('layout.header.exit')}
					</div>
				</div>
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default connected(UserDropdown);
