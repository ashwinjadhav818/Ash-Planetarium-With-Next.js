import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
	return (
		<header className="text-gray-600 dark:bg-gray-700 dark:text-white body-font">
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<Link href="/">
					<a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
						<Image
							src="/logo.png"
							alt=""
							className="w-10 h-10 text-white bg-indigo-500 rounded-full"
							width="40"
							height="40"
						/>
						<span className="ml-3 text-xl dark:text-white">
							Ash Planetarium
						</span>
					</a>
				</Link>
				<nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
					<Link href="/">
						<a className="mr-5 hover:text-gray-900 dark:hover:text-gray-300">
							Home
						</a>
					</Link>
					<Link href="/planets">
						<a className="mr-5 hover:text-gray-900 dark:hover:text-gray-300">
							Planets
						</a>
					</Link>
					<Link href="/dwrafplanets">
						<a className="mr-5 hover:text-gray-900 dark:hover:text-gray-300">
							Dwraf Planets
						</a>
					</Link>
					<Link href="/about">
						<a className="mr-5 hover:text-gray-900 dark:hover:text-gray-300">
							About
						</a>
					</Link>
				</nav>
				<label className="md:mr-5 md:mt-0 mt-2.5 switch">
					<input type="checkbox" />
					<span className="slider round"></span>
				</label>
				<Link href="/explore">
					<a>
						<button className="inline-flex items-center bg-gray-100 dark:bg-gray-600 dark:hover:bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
							Explore
							<svg
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								className="w-4 h-4 ml-1"
								viewBox="0 0 24 24"
							>
								<path d="M5 12h14M12 5l7 7-7 7"></path>
							</svg>
						</button>
					</a>
				</Link>
			</div>
		</header>
	);
}
