import React, {useEffect, useState} from 'react';
import {toast} from 'react-toastify';
import FileDownload from 'js-file-download';
import {CancelTokenSource} from 'axios';

import {IExample} from '../interfaces/IExample';


type IFileDownloadWrapperProps = {
	load: () => IExample,
	fileName: string,
	children: (props: {isLoading: boolean, load: () => void, cancel: () => void}) => React.ReactElement
}

const FileDownloadWrapper: React.FC<IFileDownloadWrapperProps> = ({load, fileName, children}) => {
	const [isLoading, setLoading] = useState(false),
		[token, setToken] = useState<CancelTokenSource>(null);

	const loadHandler = async () => {
		//change load state
		setLoading(true);

		//set token
		const {cancelToken, response} = load();
		setToken(cancelToken);

		try{
			//download file
			const resp = await response;
			FileDownload(resp.data, fileName);
		}
		catch(e){
			//show error
			console.log('Error');
			toast.error(e.response?.data.message || e.message);
		}
		finally {
			setLoading(false);
		}
	};

	const cancelHandler = () => {
		//stop loading
		setLoading(false);
		setToken(null);
	};

	useEffect(() => {
		return () => {
			//on page destroy stop loading
			if(token)
				token.cancel();
		};
	}, []);

	return children({isLoading, load: loadHandler, cancel: cancelHandler});
};

export default FileDownloadWrapper;
