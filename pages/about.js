import Image from 'next/image';

export default function about() {
	return (
		<>
			<section className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto flex flex-col">
					<div className="lg:w-4/6 mx-auto">
						<div className="flex flex-col sm:flex-row mt-8 justify-center">
							<div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
								<div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
									<Image
										src="https://yt3.ggpht.com/ytc/AAUvwnh3fAutzMDyxHL3QA-G-uF22RWVCk8t8MNrnY_E=s176-c-k-c0x00ffffff-no-rj"
										alt="Profile"
										className="h-100 w-100 br-50"
										width="80"
										height="80"
									/>
								</div>
								<div className="flex flex-col items-center text-center justify-center">
									<h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
										Ash All-Rounder
									</h2>
									<div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
									<p className="text-base">
										Hello, I Am Ash, I Have Created This Website Using Next.js &
										Tailwind CSS
									</p>
								</div>
							</div>
							<div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left flex items-center">
								<p className="flex flex-row leading-relaxed text-lg mb-4">
									Follow Me On
									<a
										href="https://www.youtube.com/channel/UCD313aBTrexHU9JrkqypCsA"
										target="_blank"
										rel="noreferrer"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											style={{ margin: '4px', marginLeft: '10px' }}
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
											width="24"
											height="24"
											viewBox="0 0 24 24"
											style={{ margin: '4px', borderRadius: '50px' }}
										>
											<path d="M0 0v24h24v-24h-24zm14.534 19.59c-.406.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.311-1.588-.824-2.147.083-.202.357-1.016-.079-2.117 0 0-.671-.215-2.198.82-.639-.18-1.323-.267-2.003-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
										</svg>
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<hr />

			<section className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto">
					<div className="py-6">
						<h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
							Information Form Wikipedia
						</h1>
						<div className="h-1 w-20 bg-indigo-500 rounded mt-1 mb-3"></div>
						<div className="flex-grow flex flex-wrap -mb-10 md:text-left">
							<div className="lg:w-1/4 md:w-1/2 w-full px-4">
								<nav className="list-none mb-10">
									<li>
										<a
											href="https://en.wikipedia.org/wiki/Mercury_(planet)"
											target="_blank"
											rel="noreferrer"
											className="text-gray-600 hover:text-gray-800"
										>
											Mercury
										</a>
									</li>
									<li>
										<a
											href="https://en.wikipedia.org/wiki/Venus"
											target="_blank"
											rel="noreferrer"
											className="text-gray-600 hover:text-gray-800"
										>
											Venus
										</a>
									</li>
									<li>
										<a
											href="/earth"
											target="_blank"
											rel="noreferrer"
											className="text-gray-600 hover:text-gray-800"
										>
											Earth
										</a>
									</li>
									<li>
										<a
											href="/mars"
											target="_blank"
											rel="noreferrer"
											className="text-gray-600 hover:text-gray-800"
										>
											Mars
										</a>
									</li>
									<li>
										<a
											href="/jupiter"
											target="_blank"
											rel="noreferrer"
											className="text-gray-600 hover:text-gray-800"
										>
											Jupiter
										</a>
									</li>
									<li>
										<a
											href="/saturn"
											target="_blank"
											rel="noreferrer"
											className="text-gray-600 hover:text-gray-800"
										>
											Saturn
										</a>
									</li>
									<li>
										<a
											href="/uranus"
											target="_blank"
											rel="noreferrer"
											className="text-gray-600 hover:text-gray-800"
										>
											Uranus
										</a>
									</li>
									<li>
										<a
											href="/neptune"
											target="_blank"
											rel="noreferrer"
											className="text-gray-600 hover:text-gray-800"
										>
											Neptune
										</a>
									</li>
								</nav>
							</div>
						</div>
					</div>
					<div className="py-6">
						<h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
							Images Form Wikipedia
						</h1>
						<div className="h-1 w-20 bg-indigo-500 rounded mt-1 mb-3"></div>
						<div className="lg:w-1/4 md:w-1/2 w-full px-4">
							<nav className="list-none mb-10">
								<li>
									<a
										href="https://en.wikipedia.org/wiki/Mercury_(planet)"
										target="_blank"
										rel="noreferrer"
										className="text-gray-600 hover:text-gray-800"
									>
										Mercury
									</a>
								</li>
								<li>
									<a
										href="https://en.wikipedia.org/wiki/Venus"
										target="_blank"
										rel="noreferrer"
										className="text-gray-600 hover:text-gray-800"
									>
										Venus
									</a>
								</li>
								<li>
									<a
										href="/earth"
										target="_blank"
										rel="noreferrer"
										className="text-gray-600 hover:text-gray-800"
									>
										Earth
									</a>
								</li>
								<li>
									<a
										href="/mars"
										target="_blank"
										rel="noreferrer"
										className="text-gray-600 hover:text-gray-800"
									>
										Mars
									</a>
								</li>
								<li>
									<a
										href="/jupiter"
										target="_blank"
										rel="noreferrer"
										className="text-gray-600 hover:text-gray-800"
									>
										Jupiter
									</a>
								</li>
								<li>
									<a
										href="/saturn"
										target="_blank"
										rel="noreferrer"
										className="text-gray-600 hover:text-gray-800"
									>
										Saturn
									</a>
								</li>
								<li>
									<a
										href="/uranus"
										target="_blank"
										rel="noreferrer"
										className="text-gray-600 hover:text-gray-800"
									>
										Uranus
									</a>
								</li>
								<li>
									<a
										href="/neptune"
										target="_blank"
										rel="noreferrer"
										className="text-gray-600 hover:text-gray-800"
									>
										Neptune
									</a>
								</li>
							</nav>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
