import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Planets from '../components/Planets';
import DwrafPlanets from '../components/DwrafPlanets';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Ash Planetarium | Home</title>
			</Head>

			<section className="text-gray-600 body-font">
				<div className="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
					<Image
						className="object-cover object-center rounded"
						alt="hero"
						src="/SolarSystem.gif"
						height="450"
						width="1200"
					/>
					<div className="text-center mt-10 lg:w-2/3 w-full">
						<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
							Welcome To Ash Planetarium
						</h1>
						<p className="mb-8 leading-relaxed">
							In This Website You Will Find Information Of Our Whole Solar
							System
						</p>
						<div className="flex justify-center">
							<Link href="/explore">
								<a>
									<button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
										Explore
									</button>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</section>

			<hr />

			<Planets title="Explore Planets" paddingY={true} />

			<hr />

			<DwrafPlanets title="Explore Dwraf Planets" paddingY={true} />
		</div>
	);
}
