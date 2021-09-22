import * as React from 'react'
import axios from 'axios'
import {
    ArrowSmLeftIcon,
    ArrowSmRightIcon,
    DocumentDownloadIcon,
} from '@heroicons/react/outline'
import { Link } from 'gatsby'

export const GoBack = ({ link }) => {
    return (
        <Link to={`${link}`} className="flex items-center mb-4 font-bold">
            <ArrowSmLeftIcon className="h-6 w-6 mr-2" />
            Litepaper Overview
        </Link>
    )
}
export const PrevNextButtons = ({ prev, next }) => {
    const btnClasses = "px-3 py-1 transition duration-150 ease-in bg-royalBlue-500 hover:bg-blue-500 hover:text-black flex items-center justify-center border rounded-md"
    return (
        <div
            className={`w-full mt-8 flex ${!prev
                    ? 'justify-end'
                    : !next
                        ? 'justify-start'
                        : 'justify-between'
                } items-center `}
        >
            {prev && (
                <Link
                    to={`/litepaper/${prev}`}
                    className={btnClasses}
                >
                    <ArrowSmLeftIcon className="mr-2 w-5 h-5 text-white" />
                    <span className="no-underline text-white">Previous</span>
                </Link>
            )}
            {next && (
                <Link
                    to={`/litepaper/${next}`}
                    className={btnClasses}
                >
                    <span className="no-underline text-white">Next</span>
                    <ArrowSmRightIcon className="ml-2 w-5 h-5 text-white" />
                </Link>
            )}
        </div>
    )
}

export const PdfLitepaper = () => {
    return (
        <div className="inline-flex p-2 items-center text-white bg-royalBlue-500 rounded" key="litepaper">
            <DocumentDownloadIcon className="h-5 w-5" />
            <a
                className="block font-bold pl-1 eject"
                href="/litepaper-v1.pdf"
                target="_blank"
                rel="noopener noreferrer"
            >
                Download Litepaper as PDF
            </a>
        </div>
    )
}
export const ReadMore = ({ text }) => {
    const truncatedText = text.substring(0, 200)
    const [innerText, setinnerText] = React.useState(truncatedText)
    const [isTruncated, setisTruncated] = React.useState(true)
    const toggleReadMore = () => {
        if (isTruncated) {
            setinnerText(text)
            setisTruncated(false)
        } else {
            setinnerText(truncatedText)
            setisTruncated(true)
        }
    }
    return (
        <blockquote>
            {innerText}
            {isTruncated ? '... ' : ' '}{' '}
            <button
                className="underline text-blue-500 font-bold"
                onClick={() => toggleReadMore()}
            >
                {isTruncated ? 'Read More' : 'Hide'}
            </button>
        </blockquote>
    )
}

// TODO: test file upload more than 5MB
// TODO: test various length cover letter
export const ApplyForm = ({ bucketId }) => {
    const [status, setstatus] = React.useState('init')
    const [fileName, setfileName] = React.useState('')
    const form = React.useRef(null)

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(form.current);
        setstatus('loading');
        axios.post(`https://formbucket.com/f/${bucketId}`, data,
            { headers: { 'Origin': 'https://royalprotocol.io' } })
            .then(res => {
                setstatus('success');
            });
    }
    const fileChange = (event) => {
        const fileName = event.target.files[0].name;
        if (fileName.length > 16) {
            setfileName(fileName.substring(0, 16) + '...')
        } else {
            setfileName(fileName)
        }
    }
    React.useEffect(() => { }, [fileName])
    return (
        <div className="box-content p-8 bg-blue-50 border border-blue-300 rounded-lg mb-4 mt-8 relative">
            {status === 'loading' && (
                <div className="absolute z-10 left-0 top-0 text-3xl font-bold text-black w-full h-full flex items-center justify-center">
                    <div className="spin"></div>
                    <h2 className="block mb-1 text-sm font-bold text-royalBlue-500">
                        Sending...
                    </h2>
                </div>
            )}

            {status === 'success' && (
                <div className="absolute z-10 left-0 top-0 text-3xl text-black w-full h-full flex items-center justify-center">
                    <div className=" block mb-1 text-royalBlue-500 text-center">
                        <div className="font-bold text-3xl mb-1">
                            {' '}
                            Thank You
                        </div>
                        <div className="text-xl">We'll be in touch soon</div>
                    </div>
                </div>
            )}

            <form
                method="post"
                className={status !== 'init' ? 'filter blur-sm' : ''}
                ref={form}
                onSubmit={handleSubmit}
                encType="multipart/form-data"
            >
                <div className="grid gap-0 md:gap-3 md:grid-cols-2">
                    <label>
                        <div className="block mb-1 uppercase text-sm font-bold text-royalBlue-500">
                            Name<span className="text-royalPink">*</span>
                        </div>
                        <input
                            className="p-2 shadow-md border-none rounded-md block mb-6 w-full"
                            type="text"
                            name="name"
                            placeholder="Satoshi"
                            required
                        />
                    </label>
                    <label>
                        <div className="block mb-1 uppercase text-sm font-bold text-royalBlue-500">
                            Email<span className="text-royalPink">*</span>
                        </div>

                        <input
                            className="p-2 shadow-md border-none rounded-md block mb-6 w-full"
                            type="email"
                            name="email"
                            placeholder="hire-me@example.com"
                            required
                        />
                    </label>
                </div>
                <label>
                    <div className="block mb-1 uppercase text-sm font-bold text-royalBlue-500">
                        Website / LinkedIn
                    </div>
                    <input
                        className="w-full p-2 shadow-md border-none rounded-md block mb-6"
                        type="text"
                        name="website"
                        placeholder="https://example.com"
                    />
                </label>
                <label>
                    <div className="block uppercase text-sm font-bold text-royalBlue-500">
                        Cover Letter<span className="text-royalPink">*</span>
                    </div>
                    <div className="text-gray-700 italic text-sm mb-1">
                        What makes you a good fit?
                    </div>
                    <textarea
                        style={{ height: '150px' }}
                        className="w-full p-2 shadow-md border-none rounded-md block mb-6"
                        id="coverLetter"
                        name="coverLetter"
                        placeholder="Say something amazing..."
                    ></textarea>
                </label>

                <label>
                    <div className="block mb-1 uppercase text-sm font-bold text-royalBlue-500">
                        Resume/CV<span className="text-royalPink">*</span>
                    </div>

                    <label className="w-full sm:w-64 flex flex-col items-center px-4 py-6 bg-white text-blue-800 rounded-lg shadow-md tracking-wide border border-blue cursor-pointer hover:bg-blue-500 hover:text-white">
                        <svg
                            className="w-8 h-8"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                        </svg>
                        <span className="mt-2 text-base leading-normal text-center">
                            {fileName === ''
                                ? 'Select a file (5MB limit)'
                                : fileName}
                        </span>
                        <input
                            type="file"
                            name="resume"
                            className="hidden"
                            onChange={fileChange}
                        />
                    </label>
                </label>
                <button
                    type="submit"
                    className="w-full sm:w-auto mt-8 cursor-pointer ml-auto px-4 py-2 font-bold text-white bg-blue-500 hover:bg-blue-400 rounded-md block"
                >
                    Apply Now
                </button>
            </form>
        </div>
    )
}
