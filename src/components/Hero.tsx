import { dataResume } from '../assets/data'

const Hero = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">
            {dataResume.userFirstName} {dataResume.userLastName}
          </h1>
          <h2 className="mb-8 text-xl text-gray-300 sm:text-2xl md:text-3xl">
            {dataResume.userHeading}
          </h2>
          <div className="flex flex-col items-center justify-center gap-4 text-gray-300 sm:flex-row">
            <a
              href={`mailto:${dataResume.userEmail}`}
              className="transition-colors hover:text-white"
            >
              <span className="flex items-center gap-2">
                <svg
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {dataResume.userEmail}
              </span>
            </a>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <svg
                className="size-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {dataResume.userAddress}
            </div>
            <span className="hidden sm:inline">•</span>
            <a
              href={`tel:${dataResume.userPhoneNumber}`}
              className="transition-colors hover:text-white"
            >
              <span className="flex items-center gap-2">
                <svg
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {dataResume.userPhoneNumber}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
