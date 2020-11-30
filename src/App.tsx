import React, {useState} from 'react';
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import {I18nextProvider} from 'react-i18next';

import store from './redux/';
import i18n from './translate';

import MenuContext, {IMenuContextData} from './utils/contexts/MenuContext';
import DownloadContext, {IDownloadContextData} from './utils/contexts/DownloadContext';
import MainRouter from './MainRouter';


const App = () => {
	//initialize contexts
	const [isMenuOpen, changeMenuOpen] = useState(false),
		menuContextData: IMenuContextData = {
			isOpen: isMenuOpen,
			changeOpen: changeMenuOpen
		};

	const [downloadEvent, setDownloadEvent] = useState<any>(null),
		downloadContextData: IDownloadContextData = {
			event: downloadEvent,
			setEvent: setDownloadEvent
		};

	window.addEventListener('beforeinstallprompt', (e) => {
		//prevent download window and set context
		e.preventDefault();
		setDownloadEvent(e);
	});

	return (
		<Provider store={store}>
			<MenuContext.Provider value={menuContextData}>
				<DownloadContext.Provider value={downloadContextData}>
					<I18nextProvider i18n={i18n}>
						<MainRouter/>
					</I18nextProvider>
				</DownloadContext.Provider>
			</MenuContext.Provider>

			<ToastContainer/>
		</Provider>
	);
};

export default App;
