import { Link } from "@inertiajs/react"
import { route } from "ziggy-js"
import Dropdown from "./Dropdown"

export default function Navigation() {
    function toggleDropdown(e) {
        const el = e.target;
        const elp = el.parentElement;
        const parent = elp.parentElement;

        const droplinks = parent.querySelector('#dropdownNavbar')
        console.log(droplinks)
        droplinks.classList.toggle('hidden')
    }


    return (
        <>
            <nav className="border-gray-200 bg-white dark:bg-black-800">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="storage/BitByBit.png" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PixelForge</span>
                    </a>
                    <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
                            <li>
                                <Link href={route('home')} className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white md:dark:bg-transparent" aria-current="page">Home</Link>
                            </li>
                            <li className="relative">
                                <button
                                    className="flex gap-[4px] items-center justify-between w-full py-2 px-3 text-gray-900 md:border-0 md:p-0 md:w-auto dark:text-white"
                                >
                                    <Link href={route('gallery')}>Gallery</Link>
                                    <span class="material-symbols-rounded"
                                    onClick={toggleDropdown}
                                    >
                                        keyboard_arrow_down
                                    </span>
                                </button>

                                <div
                                    id="dropdownNavbar"
                                    className="z-10 hidden absolute left-0 mt-2 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-violet-1000 dark:divide-gray-600"
                                >
                                    <ul
                                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                    >
                                        <li>
                                            <Link
                                                href={route("gallery")}
                                                className="block py-2 px-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Sprites
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={route("gallery")}
                                                className="block py-2 px-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Tilesets
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={route("gallery")}
                                                className="block py-2 px-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Backgrounds
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={route("gallery")}
                                                className="block py-2 px-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                AI Models
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link href={route('creators')} className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white md:dark:bg-transparent" aria-current="page">Creators</Link>
                            </li>
                            <li>
                                <Link href={route('ai')} className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white md:dark:bg-transparent" aria-current="page">AI Models</Link>
                            </li>
                            <li>
                                <Link href={route('fonts')} className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white md:dark:bg-transparent" aria-current="page">Fonts</Link>
                            </li>
                            <li>
                                <Link href={route('about')} className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white md:dark:bg-transparent" aria-current="page">About</Link>
                            </li>
                            {/* <li>
                                    <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                    </svg></button>
                                    <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
                                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                            </li>
                                            <li aria-labelledby="dropdownNavbarLink">
                                                <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dropdown<svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                                </svg></button>
                                                <div id="doubleDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                                                        <li>
                                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Overview</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">My downloads</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Billing</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Rewards</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                            </li>
                                        </ul>
                                        <div className="py-1">
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                        </div>
                                    </div>
                                </li> */}

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
