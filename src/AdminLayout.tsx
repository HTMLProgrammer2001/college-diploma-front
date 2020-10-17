import React from 'react';

import Header from './common/Header';
import Footer from './common/Footer';
import Sidebar from './common/Sidebar';


const AdminLayout: React.FC<{}> = ({children}) => (
	<div className="d-flex">
		<Sidebar/>

		<div className="w-100">
			<Header/>
			<main className="p-3 content">{children}</main>
			<Footer/>
		</div>
	</div>
);

export default AdminLayout;
