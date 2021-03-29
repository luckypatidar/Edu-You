import React from 'react'
import './Card.css'
import YoutubeVideo from '../YoutubeVideo/YoutubeVideo';
import { useCustomState } from "../../../state/state";
const App = () => {
	const state = useCustomState()[0];
	return (
		<>

			<div class="course">
				{/* <div class="course-preview">
					<h6>Course</h6>
					<h2>Course Fundamentals</h2>
					<a href="#">View all chapters <i class="fas fa-chevron-right"></i></a>
				</div> */}
				<div class="course-info">
					{/* <div class="progress-container">
						<div class="progress"></div>
						<span class="progress-text">
							6/9 Challenges
				</span>
					</div>
					<h6>Chapter 4</h6>
					<h2>Callbacks & Closures</h2>
					<button class="btn">Continue</button> */}

					{/* <YoutubeVideo /> */}
					<YoutubeVideo data={state.data.youtubelink} />

				</div>
			</div>


		</>
	)
}
export default App;