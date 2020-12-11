import React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import {RootState} from '../redux';
import {selectMeInfo} from '../redux/me/selectors';


const mapStateToProps = (state: RootState) => ({
	user: selectMeInfo(state)
});

const connected = connect(mapStateToProps, null);

type IUserCanProps = {role: number, children: any} & ConnectedProps<typeof connected>;
export const _UserCan: React.FC<IUserCanProps> = ({role, children, user}) => {
	return user.role <= role ? <>{children}</> : null;
};

export default connected(_UserCan);
