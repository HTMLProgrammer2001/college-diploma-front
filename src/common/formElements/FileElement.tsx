import React, {useState} from 'react';
import Dropzone from 'react-dropzone';
import {WrappedFieldProps} from 'redux-form';

import styles from './styles.module.scss';


type IFileElementProps = WrappedFieldProps & {label: string, name: string};
const FileElement: React.FC<IFileElementProps> = ({name, label, input}) => {
	const [file, setFile] = useState<File>(null),
		handler = (acceptedFiles: File[]) => {
			setFile(acceptedFiles[0]);
			input.onChange(acceptedFiles[0] as any, name);
		};

	return (
		<div>
			<Dropzone onDrop={handler}>
				{
					({getRootProps, getInputProps}) => (
						<section style={{position: 'relative'}}>
							<div {...getRootProps()} className={styles.fileDrop}>
								<input {...getInputProps()}/>

								<svg
									className={styles.fileDrop__svg}
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect
										x="0"
										y="0"
										width="100%"
										height="100%"
										className={styles.fileDrop__rect}
									/>

									<rect
										x="0"
										y="0"
										width="100%"
										height="100%"
										className={`${styles.fileDrop__rect} ${styles.fileDrop__rect_2}`}
									/>
								</svg>

								<p className={styles.fileDrop__label}>
									<div>{label}</div>
									<div>{file?.name}</div>
								</p>
							</div>
						</section>
					)
				}
			</Dropzone>
		</div>
	);
}

export default FileElement;

