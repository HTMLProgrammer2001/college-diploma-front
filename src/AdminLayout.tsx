import React from 'react';

import Header from './common/Header';
import Footer from './common/Footer';
import Sidebar from './common/Sidebar';


const AdminLayout: React.FC<{}> = ({children}) => (
	<div className="d-flex">
		<Sidebar/>

		<div className="w-100">
			<Header/>
			<div className="wrapper">
				<main className="p-3 content d-flex">{children}</main>
				<Footer/>
			</div>
		</div>
	</div>
);

export default AdminLayout;
