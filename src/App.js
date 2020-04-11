import React from 'react';
import Aux from './hoc/Aux';
import NavigationBar from './components/NavigationBar/NavigationBar';
import CourseCard from './components/Cards/CourseCard';

import '../css/tailwind.css';

function App() {
  return (
		<Aux>
			<NavigationBar />
			<div className="container mx-auto">
				<CourseCard />
			</div>
		</Aux>
  );
}

export default App;
