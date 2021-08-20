import Image from 'next/image';
import Link from 'next/link';
import planets from '../constants/planets';

export default function Planets({ title, paddingY }) {
	return (
		<section className="text-gray-600 body-font">
			<div
				className={
					paddingY === true
						? 'container px-5 py-24 mx-auto'
						: 'container px-5 mx-auto'
				}
			>
				<div>
					<div className="py-6 mb-12">
						<h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
							{title}
						</h1>
						<div className="h-1 w-20 bg-indigo-500 rounded mt-1"></div>
					</div>
				</div>
				<div className="flex flex-wrap flex-col lg:flex-row justify-center sm:-m-4 -mx-4 -mb-10 -mt-4">
					{planets.map((planet, index) => (
						<div
							className="bg-gray-100 m-4 p-4 lg:w-1/3 sm:mb-0 rounded-lg"
							key={index}
						>
							<div className="overflow-hidden">
								<Image
									alt={planet.name + ' Image'}
									className="object-cover object-center h-full w-full rounded-lg"
									src={planet.img}
									height="700"
									width="900"
								/>
							</div>
							<h2 className="text-xl font-medium title-font text-gray-900 mt-5">
								{planet.name}
							</h2>
							<p className="text-base leading-relaxed mt-2">
								{planet.description}
							</p>
							<Link href={'/planet' + planet.route}>
								<a className="text-indigo-500 inline-flex items-center mt-3">
									Learn More
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-4 h-4 ml-2"
										viewBox="0 0 24 24"
									>
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</a>
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
