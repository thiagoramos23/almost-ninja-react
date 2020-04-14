import React from 'react';
import Link from 'next/link';
import YouTubePlayer from 'react-player/lib/players/YouTube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAngleDown, faCheck } from '@fortawesome/free-solid-svg-icons';

export default function Course() {
	return (
		<div>
			<div className="shadow h-auto md:h-48 bg-gray-200">
				<div>
					<p className="px-2 mx-auto pt-6 text-gray-800 text-sm font-thing text-center antialiased tracking-wide leading-relaxed xl:w-1/4">
						You can either enroll for this course to gain access and also to the materials been attached to it online only or you can add to cart for checkout to view offline.
					</p>
					<div className="pb-4 text-center">
						<button className="mt-6 mx-5 rounded-full bg-white px-12 py-4 text-sm font-semibold text-indigo-700 bg-white shadow-md antialiased">Become Premiun</button>
						<button className="mt-6 mx-5 rounded-full bg-white px-12 py-4 text-sm font-semibold text-indigo-700 bg-white shadow-md antialiased">Add Card</button>
					</div>
				</div>
			</div>
			{/* Video Section */}
			<div id="video_section" className="relative w-full h-64 md:h-360">
				<div className="bg-black w-full h-16 flex justify-between items-center">
					<div className="px-8">
						<Link href="/">
							<button className="inline-flex items-center">
								<FontAwesomeIcon icon="angle-double-left" className="h-8 text-indigo-700" />
								<span className="px-4 text-white text-lg font-light antialiased tracking-wider">Courses</span>
							</button>
						</Link>
					</div>
					<div className="px-8 text-white font-light antialiased tracking-wider inline-flex items-center">
						<p className="mr-16 text-lg">Introducing Combine</p>
						<button className="lg:mr-8">
							<FontAwesomeIcon icon='bars' className="h-8 text-white" />
						</button>
					</div>
				</div>
				<div className="h-full w-full">
					<YouTubePlayer width="100%" height="100%" url='https://www.youtube.com/watch?v=YTIz_eV_BsE' controls light/>
				</div>
			</div>

			{/* Instructor section */}
			<div className="flex justify-around bg-gray-100 pt-32 pb-6">
				<div id="instructor_identification" className="border border-gray-300 w-1/6 flex-col items-center">
					<div className="text-center pt-10">
						<span className="text-indigo-700 tracking-wide antialiased font-semibold text-xl">Instrutor</span>
						<img src="/profile-pic.jpg" className="w-40 rounded-full mt-8 mx-auto"/>
						<p className="text-gray-700 tracking-wide antialiased font-semibold text-xl pt-6">Bruno Rocha</p>
						<p className="text-gray-700 font-light text-base antialiased pt-8 w-3/4 mx-auto">Elit laborum labore fugiat eu. Dolore Lorem culpa velit nulla non aliqua incididunt veniam. Commodo incididunt adipisicing quis eu occaecat mollit officia sit occaecat non sunt. Sit pariatur proident ipsum fugiat adipisicing tempor cupidatat elit. Lorem mollit esse consectetur cupidatat.</p>
						<div className="flex justify-evenly pt-10">
							<a href="#">
								<FontAwesomeIcon icon={faYoutube} className="h-12 text-indigo-700"/>
							</a>
							<a href="#">
								<FontAwesomeIcon icon={faTwitter} className="h-12 text-indigo-700"/>
							</a>
							<a href="#">
								<FontAwesomeIcon icon={faInstagram} className="h-12 text-indigo-700"/>
							</a>
						</div>
					</div>
				</div>

				{/* Course Description Section */}
				<div id="course_description" className="border border-gray-300 w-3/6 flex-col items-center">
					<div className="pt-10 w-3/4	mx-auto">
						<span className="text-indigo-700 tracking-wide antialiased font-semibold text-xl">Descrição</span>
						<p className="text-gray-700 antialiased font-light tracking-wide leading-relaxed text-justify pt-10">
							Esse minim nostrud ipsum do eiusmod aute et dolor est. Ipsum laborum consequat cupidatat velit incididunt elit eiusmod nulla laborum tempor eu minim ipsum est. Enim dolore fugiat deserunt in labore ipsum eu et. Fugiat consectetur consectetur occaecat deserunt nisi deserunt incididunt est nulla incididunt quis ullamco commodo. Proident excepteur veniam occaecat eiusmod aliqua minim aute incididunt veniam labore fugiat sit.
							Ea et ipsum excepteur mollit. Aute laborum eu eiusmod commodo deserunt eu quis occaecat mollit. Anim ex et ullamco do consequat elit esse cupidatat sunt anim est anim reprehenderit.
							Ea et ipsum excepteur mollit. Aute laborum eu eiusmod commodo deserunt eu quis occaecat mollit. Anim ex et ullamco do consequat elit esse cupidatat sunt anim est anim reprehenderit.
							Ea et ipsum excepteur mollit. Aute laborum eu eiusmod commodo deserunt eu quis occaecat mollit. Anim ex et ullamco do consequat elit esse cupidatat sunt anim est anim reprehenderit.
							Ea et ipsum excepteur mollit. Aute laborum eu eiusmod commodo deserunt eu quis occaecat mollit. Anim ex et ullamco do consequat elit esse cupidatat sunt anim est anim reprehenderit.
							Ea et ipsum excepteur mollit. Aute laborum eu eiusmod commodo deserunt eu quis occaecat mollit. Anim ex et ullamco do consequat elit esse cupidatat sunt anim est anim reprehenderit.
							Ea et ipsum excepteur mollit. Aute laborum eu eiusmod commodo deserunt eu quis occaecat mollit. Anim ex et ullamco do consequat elit esse cupidatat sunt anim est anim reprehenderit.
							Ea et ipsum excepteur mollit. Aute laborum eu eiusmod commodo deserunt eu quis occaecat mollit. Anim ex et ullamco do consequat elit esse cupidatat sunt anim est anim reprehenderit.
						</p>
						<div className="pt-12 pb-8">
							<div className="flex justify-left mb-4">
								<div className="text-gray-700 font-semibold antialiased">Release:</div>
								<div className="px-20 text-gray-700 font-light antialiased">10/05/2020</div>
							</div>
							<div className="flex justify-left mb-4">
								<div className="text-gray-700 font-semibold antialiased">Duration:</div>
								<div className="px-20 text-gray-700 font-light antialiased">1h 20m</div>
							</div>
							<div className="flex justify-left">
								<div className="text-gray-700 font-semibold antialiased">Tags:</div>
								<div className="px-24">
									<span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#combine</span>
									<span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#swift</span>
									<span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#apple</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Course Modules and Classes Section */}
				<div id="course_classes" className="border border-gray-300 w-1/6">
					<div className="flex items-center justify-around pt-4 pb-4 border-b-2 border-gray-300">
						<p className="font-bold antialiased text-indigo-800 px-4">Module 1</p>
						<button>
							<FontAwesomeIcon icon={faAngleDown} className="h-8 text-gray-800"/>
						</button>
					</div>
					<div className="pt-4 pl-6">
						<ul>
							<li className="py-4 font-light antialiased text-indigo-800 flex justify-around">
								Lesson 1
								<span>
									<FontAwesomeIcon icon={faCheck} className="h-6 font-light text-green-500"/>
								</span>
							</li>
							<li className="py-4 font-light antialiased text-indigo-800 flex justify-around">
								Lesson 2
								<span>
									<FontAwesomeIcon icon={faCheck} className="h-6 font-light text-green-500"/>
								</span>
							</li>
							<li className="py-4 font-light antialiased text-indigo-800 flex justify-around">
								Lesson 3
								<span>
									<FontAwesomeIcon icon={faCheck} className="h-6 font-light text-green-500"/>
								</span>
							</li>
							<li className="py-4 font-light antialiased text-indigo-800 flex justify-around">
								Lesson 4
								<span>
									<FontAwesomeIcon icon={faCheck} className="h-6 font-light text-green-500"/>
								</span>
							</li>
						</ul>
					</div>
					<div className="flex items-center justify-around pt-4 pb-4 border-b-2 border-gray-300">
						<p className="font-semibold antialiased text-indigo-800 px-4">Module 1</p>
						<button>
							<FontAwesomeIcon icon={faAngleDown} className="h-8 text-gray-800"/>
						</button>
					</div>
					<div className="pt-4 pl-6">
						<ul>
							<li className="py-4 font-light antialiased text-indigo-800 flex justify-around">
								Lesson 1
								<span>
									<FontAwesomeIcon icon={faCheck} className="h-6 font-light text-green-500"/>
								</span>
							</li>
							<li className="py-4 font-light antialiased text-indigo-800 flex justify-around">
								Lesson 2
								<span>
									<FontAwesomeIcon icon={faCheck} className="h-6 font-light text-green-500"/>
								</span>
							</li>
							<li className="py-4 font-light antialiased text-indigo-800 flex justify-around">
								Lesson 3
								<span>
									<FontAwesomeIcon icon={faCheck} className="h-6 font-light text-green-500"/>
								</span>
							</li>
							<li className="py-4 font-light antialiased text-indigo-800 flex justify-around">
								Lesson 4
								<span>
									<FontAwesomeIcon icon={faCheck} className="h-6 font-light text-green-500"/>
								</span>
							</li>
						</ul>
					</div>
				</div>

			</div>
		</div>
	)
}