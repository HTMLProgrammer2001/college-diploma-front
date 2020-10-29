import React from 'react';

import styles from './styles.module.scss';


const Loader: React.FC<{}> = () => (
	<div className={styles.loader}>
		<svg width="200px" height="200px"
			 viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
			<circle cx="75" cy="50" fill="#f24421" r="5">
				<animate
					attributeName="r"
					values="3;3;5;3;3"
					//times="0;0.1;0.2;0.3;1"
					dur="1s"
					repeatCount="indefinite"
					begin="-0.9166666666666666s"
				/>

				<animate
					attributeName="fill"
					values="#f24421;#f24421;#ff7357;#f24421;#f24421"
					repeatCount="indefinite"
					//times="0;0.1;0.2;0.3;1"
					dur="1s"
					begin="-0.9166666666666666s"
				/>
			</circle>

			<circle cx="71.65063509461098" cy="62.5" fill="#f24421" r="5">
				<animate
					attributeName="r"
					values="3;3;5;3;3"
					//times="0;0.1;0.2;0.3;1"
					dur="1s"
					repeatCount="indefinite"
					begin="-0.8333333333333334s"
				/>

				<animate
					attributeName="fill"
					values="#f24421;#f24421;#ff7357;#f24421;#f24421"
					repeatCount="indefinite"
					//times="0;0.1;0.2;0.3;1"
					dur="1s"
					begin="-0.8333333333333334s"
				/>
			</circle>

			<circle cx="62.5" cy="71.65063509461096" fill="#f24421" r="5">
				<animate
					attributeName="r"
					values="3;3;5;3;3"
					//times="0;0.1;0.2;0.3;1"
					dur="1s"
					repeatCount="indefinite"
					begin="-0.75s"
				/>

				<animate
					attributeName="fill"
					values="#f24421;#f24421;#ff7357;#f24421;#f24421"
					repeatCount="indefinite"
					//times="0;0.1;0.2;0.3;1"
					dur="1s"
					begin="-0.75s"
				/>
			</circle>

			<circle cx="50" cy="75" fill="#f24421" r="5">
				<animate
					attributeName="r"
					values="3;3;5;3;3"
					//times="0;0.1;0.2;0.3;1"
					dur="1s"
					repeatCount="indefinite"
					begin="-0.6666666666666666s"
				/>

				<animate
					attributeName="fill"
					values="#f24421;#f24421;#ff7357;#f24421;#f24421"
					repeatCount="indefinite"
					//times="0;0.1;0.2;0.3;1"
					dur="1s"
					begin="-0.6666666666666666s"
				/>
			</circle>

			<circle cx="37.50000000000001" cy="71.65063509461098" fill="#f24421" r="5">
				<animate
					attributeName="r"
					values="3;3;5;3;3"
					//times="0;0.1;0.2;0.3;1"
					dur="1s"
					repeatCount="indefinite"
					begin="-0.5833333333333334s"
				/>

				<animate
					attributeName="fill"
					values="#f24421;#f24421;#ff7357;#f24421;#f24421"
					repeatCount="indefinite"
					//times="0;0.1;0.2;0.3;1"
					dur="1s"
					begin="-0.5833333333333334s"
				/>
			</circle>

			<circle cx="28.34936490538903" cy="62.5" fill="#f24421" r="5">
				<animate
					attributeName="r"
					values="3;3;5;3;3"
					//times="0;0.1;0.2;0.3;1"
					dur="1s"
					repeatCount="indefinite"
					begin="-0.5s"
				/>

				<animate
					attributeName="fill"
					values="#f24421;#f24421;#ff7357;#f24421;#f24421"
					repeatCount="indefinite"
					//times="0;0.1;0.2;0.3;1"
					dur="1s" begin="-0.5s"/>
			</circle>

			<circle cx="25" cy="50" fill="#f24421" r="5">
				<animate
					attributeName="r"
					values="3;3;5;3;3"
					//times="0;0.1;0.2;0.3;1"
					dur="1s" repeatCount="indefinite"
					begin="-0.4166666666666667s"/>

				<animate
					attributeName="fill"
					values="#f24421;#f24421;#ff7357;#f24421;#f24421"
					repeatCount="indefinite"
					//times="0;0.1;0.2;0.3;1"
					dur="1s" begin="-0.4166666666666667s"/>
			</circle>

			<circle cx="28.34936490538903" cy="37.50000000000001" fill="#f24421" r="5">
				<animate
					attributeName="r"
					values="3;3;5;3;3"
					//times="0;0.1;0.2;0.3;1"
					dur="1s" repeatCount="indefinite"
					begin="-0.3333333333333333s"/>

				<animate
					attributeName="fill"
					values="#f24421;#f24421;#ff7357;#f24421;#f24421"
					repeatCount="indefinite"
					//times="0;0.1;0.2;0.3;1"
					dur="1s" begin="-0.3333333333333333s"/>
			</circle>

			<circle cx="37.499999999999986" cy="28.349364905389038" fill="#f24421" r="5">
				<animate
					attributeName="r"
					values="3;3;5;3;3"
					//times="0;0.1;0.2;0.3;1"
					dur="1s" repeatCount="indefinite"
					begin="-0.25s"/>

				<animate
					attributeName="fill"
					values="#f24421;#f24421;#ff7357;#f24421;#f24421"
					repeatCount="indefinite"
					//times="0;0.1;0.2;0.3;1"
					dur="1s" begin="-0.25s"/>
			</circle>

			<circle cx="49.99999999999999" cy="25" fill="#f24421" r="5">
				<animate
					attributeName="r"
					values="3;3;5;3;3"
					//times="0;0.1;0.2;0.3;1"
					dur="1s" repeatCount="indefinite"
					begin="-0.16666666666666666s"/>

				<animate
					attributeName="fill"
					values="#f24421;#f24421;#ff7357;#f24421;#f24421"
					repeatCount="indefinite"
					//times="0;0.1;0.2;0.3;1"
					dur="1s" begin="-0.16666666666666666s"/>
			</circle>

			<circle cx="62.5" cy="28.349364905389034" fill="#f24421" r="5">
				<animate
					attributeName="r"
					values="3;3;5;3;3"
					//times="0;0.1;0.2;0.3;1"
					dur="1s" repeatCount="indefinite"
					begin="-0.08333333333333333s"/>

				<animate
					attributeName="fill"
					values="#f24421;#f24421;#ff7357;#f24421;#f24421"
					repeatCount="indefinite"
					//times="0;0.1;0.2;0.3;1"
					dur="1s" begin="-0.08333333333333333s"/>
			</circle>

			<circle cx="71.65063509461096" cy="37.499999999999986" fill="#f24421" r="5">
				<animate
					attributeName="r"
					values="3;3;5;3;3"
					//times="0;0.1;0.2;0.3;1"
					dur="1s"
					repeatCount="indefinite"
					begin="0s"/>
				<animate
					attributeName="fill"
					values="#f24421;#f24421;#ff7357;#f24421;#f24421"
					repeatCount="indefinite"
					//times="0;0.1;0.2;0.3;1"
					dur="1s" begin="0s"/>
			</circle>
		</svg>
	</div>
);

export default Loader;
