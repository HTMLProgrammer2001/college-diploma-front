import React from 'react';


const Footer: React.FC<{}> = () => (
	<footer className="p-3 border-top bg-white">
		<b>Copyright © {new Date().getFullYear()} by <a href="https://htmlprogrammer.ru">Yuri Prisyazhnyy.</a></b>

		&nbsp;
		<span>All rights reserved.</span>
	</footer>
);

export default Footer;
