import * as React from 'react'
import { Link } from 'gatsby'
import logoSmall from '../images/logo.png'
import sfPng from '../images/sf.png'

export const Header = () => (
    <div className="bg-white w-full p-4">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row md:items-center justify-between">
            <Link
                to={'/'}
                className="flex items-center uppercase text-royalBlue-500"
            >
                <img
                    className="w-8 mr-2"
                    src={logoSmall}
                    alt=""
                    aria-hidden="true"
                />
                <div>
                    <strong>Royal</strong> Protocol
                </div>
            </Link>
            <nav>
                <ul className="flex flex-col sm:flex-row mt-3 md:mt-0">
                    {[
                        { title: 'Careers', route: '/careers' },
                        { title: 'Litepaper', route: '/litepaper' },
                    ].map((link) => (
                        <li key={link.title}>
                            <Link
                                className="block text-black underline font-bold mr-3"
                                to={link.route}
                            >
                                {link.title}
                            </Link>
                        </li>
                    ))}

                    <li
                        className="flex items-center sm:border-l-2 sm:ml-2 sm:pl-4"
                        key="litepaper"
                    >
                        <a
                            className="block text-black underline font-bold pr-1"
                            href="https://solidity.finance/audits/Roy/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Token Audit
                        </a>
                        <img src={sfPng} className="h-5 w-5" alt="" aria-hidden="true" />
                    </li>
                    {/*<li  
                        className="flex items-center border-l-2 ml-4 pl-4"
                        key="litepaper"
                    >
                        <DocumentDownloadIcon className="h-5 w-5" />
                        <a
                            className="block text-black underline font-bold pl-1"
                            href="/litepaper-v1.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Litepaper PDF
                        </a>
                    </li>*/}
                </ul>
            </nav>
        </div>
    </div>
)
