import React from 'react';
import {Dropdown} from 'react-bootstrap';

import styles from './styles.module.scss';


const UserDropdown: React.FC<{}> = () => (
	<Dropdown>
		<Dropdown.Toggle className={styles.dropNo}>
			<img
				src="http://127.0.0.1:8000/storage/avatars/default.gif"
				alt="Avatar"
				className={styles.avatar}
			/>

			<span>Yuri Prisyazhnyy</span>
		</Dropdown.Toggle>

		<Dropdown.Menu className="bg-blue p-2">
			<div className="center flex-column text-white">
				<img
					src="http://127.0.0.1:8000/storage/avatars/default.gif"
					alt="Avatar"
				/>

				<div>Yuri Prisyazhnyy, Administrator</div>
			</div>
		</Dropdown.Menu>
	</Dropdown>
);

export default UserDropdown;
