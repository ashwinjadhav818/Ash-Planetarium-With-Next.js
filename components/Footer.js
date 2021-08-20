import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="text-gray-600 dark:bg-gray-800 dark:text-white body-font">
			<div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
				<div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
					<Link href="/">
						<a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
							<Image
								src="/logo.png"
								alt="Ash Planetarium"
								className="w-10 h-10 text-white bg-indigo-500 rounded-full"
								width="40"
								height="40"
							/>
							<span className="ml-3 text-xl dark:text-white">
								Ash Planetarium
							</span>
						</a>
					</Link>
					<p className="mt-2 text-sm text-gray-500 dark:text-gray-100">
						In This Website You Will Find Information Of Our Whole Solar System
					</p>
				</div>
				<div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
					<div className="lg:w-1/4 md:w-1/2 w-full px-4">
						<h2 className="title-font font-medium text-gray-900 dark:text-white tracking-widest text-sm mb-3">
							Planets
						</h2>
						<nav className="list-none mb-10">
							<li>
								<Link href="planets/mercury">
									<a className="text-gray-600 dark:text-gray-200 hover:text-gray-800">
										Mercury
									</a>
								</Link>
							</li>
							<li>
								<Link href="planets/venus">
									<a className="text-gray-600 dark:text-gray-200 hover:text-gray-800">
										Venus
									</a>
								</Link>
							</li>
							<li>
								<Link href="planets/earth-and-its-moons/earth">
									<a className="text-gray-600 dark:text-gray-200 hover:text-gray-800">
										Earth
									</a>
								</Link>
							</li>
							<li>
								<Link href="planets/mars-and-its-moons/mars">
									<a className="text-gray-600 dark:text-gray-200 hover:text-gray-800">
										Mars
									</a>
								</Link>
							</li>
							<li>
								<Link href="planets/jupiter-and-its-moons/jupiter">
									<a className="text-gray-600 dark:text-gray-200 hover:text-gray-800">
										Jupiter
									</a>
								</Link>
							</li>
							<li>
								<Link href="planets/saturn">
									<a className="text-gray-600 dark:text-gray-200 hover:text-gray-800">
										Saturn
									</a>
								</Link>
							</li>
							<li>
								<Link href="planets/uranus">
									<a className="text-gray-600 dark:text-gray-200 hover:text-gray-800">
										Uranus
									</a>
								</Link>
							</li>
							<li>
								<Link href="planets/neptune">
									<a className="text-gray-600 dark:text-gray-200 hover:text-gray-800">
										Neptune
									</a>
								</Link>
							</li>
						</nav>
					</div>
					<div className="lg:w-1/4 md:w-1/2 w-full px-4">
						<h2 className="title-font font-medium text-gray-900 dark:text-white tracking-widest text-sm mb-3">
							Dwraf Planets
						</h2>
						<nav className="list-none mb-10">
							<li>
								<Link href="/drawfplanet/pluto">
									<a className="text-gray-600 dark:text-gray-200 hover:text-gray-800">
										Pluto
									</a>
								</Link>
							</li>
							<li>
								<Link href="/drawfplanet/eris">
									<a className="text-gray-600 dark:text-gray-200 hover:text-gray-800">
										Eris
									</a>
								</Link>
							</li>
							<li>
								<Link href="/drawfplanet/ceres">
									<a className="text-gray-600 dark:text-gray-200 hover:text-gray-800">
										Ceres
									</a>
								</Link>
							</li>
							<li>
								<Link href="/drawfplanet/makemake">
									<a className="text-gray-600 dark:text-gray-200 hover:text-gray-800">
										Makemake
									</a>
								</Link>
							</li>
							<li>
								<Link href="/drawfplanet/haumea">
									<a className="text-gray-600 dark:text-gray-200 hover:text-gray-800">
										Haumea
									</a>
								</Link>
							</li>
						</nav>
					</div>
				</div>
			</div>
			<div className="bg-gray-100 dark:bg-gray-700">
				<div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
					<p className="text-gray-500 dark:text-white text-sm text-center sm:text-left">
						© 2020 Ash Planetarium —
						<a
							href="https://github.com/ashall-rounder"
							rel="noopener noreferrer"
							className="text-gray-600 dark:text-white ml-1"
							target="_blank"
						>
							Ash All-Rounder
						</a>
					</p>
					<span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
						<a
							href="https://www.youtube.com/channel/UCD313aBTrexHU9JrkqypCsA"
							target="_blank"
							rel="noreferrer"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								style={{ marginRight: '10px' }}
							>
								<path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
							</svg>
						</a>
						<a
							href="https://github.com/ashall-rounder"
							target="_blank"
							rel="noreferrer"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="filter"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								style={{ borderRadius: '50px' }}
							>
								<path d="M0 0v24h24v-24h-24zm14.534 19.59c-.406.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.311-1.588-.824-2.147.083-.202.357-1.016-.079-2.117 0 0-.671-.215-2.198.82-.639-.18-1.323-.267-2.003-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
							</svg>
						</a>
					</span>
				</div>
			</div>
		</footer>
	);
}
