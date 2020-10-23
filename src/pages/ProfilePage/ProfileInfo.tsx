import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Row} from 'react-bootstrap';

import {RootState} from '../../redux';
import {selectMeInfo} from '../../redux/me/selectors';
import roleCodeToName from '../../utils/helpers/RoleCodeToName';


const mapStateToProps = (state: RootState) => ({
	me: selectMeInfo(state)
});

const connected = connect(mapStateToProps, null);

export const ProfileInfo: React.FC<ConnectedProps<typeof connected>> = ({me}) => (
	<Row>
		<div className="col-sm-3 mr-3">
			<img
				src={me.avatar || 'http://127.0.0.1:8000/storage/avatars/default.gif'}
				alt="Avatar"
				style={{width: '100%'}}
			/>
		</div>

		<div>
			<div>Имя: {me.fullName}</div>
			<div>День рождения: {me.birthday || 'Не установлено'}</div>
			<div>Email: {me.email || 'Не установлено'}</div>
			<div>Адрес: {me.address || 'Не установлено'}</div>
			<div>Роль: {roleCodeToName(me.role)}</div>
			<div>Отдел: {me.department?.name || 'Не установлено'}</div>
			<div>Цикловая комиссия: {me.commission?.name || 'Не установлено'}</div>
			<div>Розряд: {me.rank?.name || 'Не установлено'}</div>
			<div>Педагогическое звание: {me.pedagogicalTitle || 'Не установлено'}</div>
			<div>Опыт: {me.experience || 'Не установлено'}</div>
		</div>
	</Row>
);

export default connected(ProfileInfo);
