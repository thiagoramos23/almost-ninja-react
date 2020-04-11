import React from 'react';
import NavigationBar from '../src/components/NavigationBar/NavigationBar';
import CourseCard from '../src/components/Cards/CourseCard';
import Aux from '../src/hoc/Aux';

export default function Index() {
	return (
		<Aux>
			<NavigationBar />
			<div className="container mx-auto">
				<CourseCard/>
			</div>
		</Aux>
	)
}