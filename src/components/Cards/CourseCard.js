import React from 'react';
import MobileIcon from '../Icons/MobileIcon';
import CriptoIcon from '../Icons/CriptoIcon';

const courseCard = (props) => {
	return (
		<div>
			<h1 className="my-5 text-gray-700 text-4xl">Courses</h1>
			<div className="flex flex-wrap justify-center md:justify-evenly items-center mt-4 flex-auto lg:justify-around">
				<div className="max-w-sm rounded overflow-hidden shadow-lg mt-10">
					{/* <img className="w-full" src={require('../../assets/card-top.jpg')} alt="Sunset in the mountains" /> */}
					<MobileIcon />
					<div className="px-6 py-4">
						<div className="font-bold text-xl mb-2">Swift UI & Combine</div>
						<p className="text-gray-700 text-base">
							Learn iOS using SwiftUI with Combine and embrace the power of the new Apple UI Framework
						</p>
					</div>
					<div className="px-6 py-4">
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#apple</span>
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#swiftui</span>
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#combine</span>
					</div>
				</div>

				<div className="max-w-sm rounded overflow-hidden shadow-lg mt-10">
					<CriptoIcon />
					<div className="px-6 py-4">
						<div className="font-bold text-xl mb-2">The Coldest Sunset</div>
						<p className="text-gray-700 text-base">
							Learn Cripto Programming and make money hacking the world
						</p>
					</div>
					<div className="px-6 py-4">
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
					</div>
				</div>

				<div className="max-w-sm rounded overflow-hidden shadow-lg mt-10">
					<MobileIcon />
					<div className="px-6 py-4">
						<div className="font-bold text-xl mb-2">The Coldest Sunset</div>
						<p className="text-gray-700 text-base">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
						</p>
					</div>
					<div className="px-6 py-4">
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
					</div>
				</div>
			</div>
		</div>
	)
};

export default courseCard;