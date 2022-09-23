import React from 'react';

export interface PropTypes {
	firstRender: boolean;
}

export default function AboutMe(props: PropTypes) {
	const scrollHandler = () => {
		// scroll down the window smoothly until the top of the element is in the middle of the window:
		const viewPortOffSet = document
			.getElementById('about-me-content')
			?.getBoundingClientRect();
		if (viewPortOffSet) {
			window.scrollTo({
				top: viewPortOffSet.top * 0.85 + window.scrollY,
				behavior: 'smooth',
			});
		}
	};

	return (
		<div
			id='about-me'
			className={props.firstRender ? 'empty-content' : 'content'}
		>
			<div className='intro-container'>
				<h1 className='intro-text'>
					<span className='blue-text'>Hi there! I'm </span>
					<span className='orange-text'>Min. </span>
					<span className='wave-emoji'>👋</span>
				</h1>

				<button className='down-button' onClick={scrollHandler}>
					<b className='arrow'>🡳</b>
				</button>
			</div>
			<body className='about-me-content' id='about-me-content'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
				sed eros lorem. Nullam vitae est in ante pellentesque dictum.
				Integer orci metus, consectetur et placerat vel, bibendum vel
				ex. Morbi non eros a libero vestibulum fermentum ut vel orci.
				Donec scelerisque, massa eu ornare congue, lectus orci hendrerit
				turpis, in tincidunt neque sem ullamcorper diam. Proin dignissim
				accumsan laoreet. <br />
				<br />
				Pellentesque viverra metus a sapien gravida, a tincidunt tellus
				tristique. Etiam faucibus in est in dapibus. Praesent fringilla
				nisi et ipsum hendrerit interdum. Fusce non leo scelerisque,
				semper magna non, dictum lacus. Vestibulum congue felis a nibh
				facilisis porta. Class aptent taciti sociosqu ad litora torquent
				per conubia nostra, per inceptos himenaeos. <br />
				<br />
				Fusce felis tellus, scelerisque et vehicula non, pellentesque
				sed nunc. Praesent fringilla vehicula hendrerit. Suspendisse eu
				eros quis justo tempor blandit. Vestibulum at ante enim.
				Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
				posuere cubilia curae; Proin ante ligula, suscipit a imperdiet
				non, malesuada eget felis. <br />
				<br />
				Integer porta feugiat dui, sed convallis justo. Quisque pharetra
				augue et ultrices hendrerit. Vivamus vestibulum velit est,
				sollicitudin faucibus sapien pretium eget. Morbi id molestie
				sem. Sed vitae rhoncus mi. Fusce eu lectus enim. Praesent
				sollicitudin placerat velit ac pellentesque. Pellentesque
				lobortis bibendum nibh, et tempus tortor commodo finibus. <br />
				<br />
				Sed ultrices eros ac sollicitudin tincidunt. Donec sollicitudin
				malesuada magna, vitae dapibus augue feugiat in. Suspendisse nec
				neque vestibulum, ultrices purus non, luctus massa. Quisque a
				elementum magna. Nulla congue blandit tortor sit amet fermentum.{' '}
				<br />
				<br />
				Nam imperdiet augue sit amet ex volutpat, at aliquet orci
				scelerisque. Sed cursus odio velit, in placerat velit
				ullamcorper ut. Phasellus libero nulla, tempus ut fringilla ut,
				consectetur vitae velit. Aliquam erat volutpat. Interdum et
				malesuada fames ac ante ipsum primis in faucibus. Donec
				scelerisque non urna vitae sollicitudin. <br />
				<br />
				In hac habitasse platea dictumst. Pellentesque non suscipit
				sapien. Donec at finibus risus. Pellentesque aliquam sem vitae
				ligula vehicula, sed auctor ligula egestas. Curabitur sit amet
				vulputate felis, sit amet ullamcorper neque. Praesent interdum
				metus velit, non lacinia lacus finibus et. Donec laoreet, velit
				vitae eleifend consequat, est lacus vulputate enim, vitae
				elementum arcu mauris quis mauris. Nunc consequat libero ut
				felis luctus, non iaculis velit suscipit. <br />
				<br />
				Nunc in erat sit amet lacus auctor ullamcorper quis ac enim.
				Pellentesque sit amet laoreet massa. Aenean dignissim vulputate
				mauris. Integer gravida sodales massa vel egestas. Mauris sit
				amet diam vitae nunc dignissim vulputate. Phasellus non ornare
				tellus. Duis consequat convallis dolor et molestie.
			</body>
		</div>
	);
}
