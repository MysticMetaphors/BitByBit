import { Head, router, Link } from '@inertiajs/react';
import { route } from 'ziggy-js';

export default function Welcome() {

    function goToGallery() {
        router.visit(route('gallery'))
    }

    return (
        <>
            <Head title='PixelForge' />
            <div
                className="h-96 bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(to top, #240e46ff, transparent), url('storage/Pixel Art background Violet theme nature.jpg')`,
                }}
            >
                <img src="https://flowbite.com/docs/images/logo.svg" class="w-32 h-32 animate-float absolute top-[200px] left-[100px]" />
                <img src="https://flowbite.com/docs/images/logo.svg" class="w-32 h-32 animate-float absolute top-[300px] right-[100px]" />

                <div className="flex flex-col justify-center items-center h-full pt-[100px]">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"> Helping creators craft their worlds</h1>
                        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-200">
                            At PixelForge we showcase free pixel art assets and AI models shared by their rightful creators, helping developers, artists, and hobbyists craft immersive games and unlock their creative potential.
                        </p>

                        {/* <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                            <form className="max-w-[400px] mx-auto">
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-[10px] pointer-events-none">
                                        <span class="material-symbols-rounded text-gray-500">
                                            search
                                        </span>
                                    </div>
                                    <input type="text" id="email-address-icon" className="bg-black-700 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                                </div>
                            </form>
                        </div> */}
                        <div className="flex justify-center mt-4">
                            <Link
                                href={route('about')}
                                className="bg-violet-900 py-[8px] px-[15px] text-white flex gap-[5px] w-fit items-center"
                            >
                                About Us
                                <span className="material-symbols-rounded text-[18px]">
                                    arrow_forward
                                </span>
                            </Link>
                        </div>


                    </div>
                </div>
            </div>

            <div className='bg-gradient-to-t to-violet-1000 from-violet-1000 flex flex-row flex-wrap gap-[20px] justify-center pt-[100px]'>
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-violet-950 dark:border-gray-700">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Bloxal</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                </div>
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-violet-950 dark:border-gray-700">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Bloxal</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                </div>
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-violet-950 dark:border-gray-700">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Bloxal</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                </div>
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-violet-950 dark:border-gray-700">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Bloxal</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                </div>
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-violet-950 dark:border-gray-700">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Bloxal</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                </div>
            </div>

            <div className="bg-gray-50 relative text-black/50 dark:bg-black bg-violet-1000 dark:text-white/50 h-full pl-auto pr-auto flex flex-col justify-start items-center p-[100px]">
                <img src="https://flowbite.com/docs/images/logo.svg" class="w-32 h-32 animate-float absolute top-[200px] left-[100px]" />
                <img src="https://flowbite.com/docs/images/logo.svg" class="w-32 h-32 animate-float absolute top-[50%] right-[100px]" />
                <img src="https://flowbite.com/docs/images/logo.svg" class="w-32 h-32 animate-float absolute top-[80%] left-[100px]" />
                <div className='w-full flex flex-row gap-5 justify-center flex-wrap'>
                    {Array.from({ length: 9 }, (_, i) => (
                        <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-violet-950 dark:border-gray-700 scale-80">
                            <a href="#">
                                <img className="rounded-t-lg" src='storage/Pixel Art background Violet theme nature (1).jpg' alt="Image" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-[16px] font-bold tracking-tight text-black-500 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                </a>

                                <a href="#" className="inline-flex items-center  text-sm font-medium text-center text-black-500">
                                    Read more
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" alt="test" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}

                </div>
                <button className='mt-[100px] bg-violet-900 py-[8px] px-[15px] text-white' onClick={goToGallery}>See More</button>
            </div>
        </>
    );
}
