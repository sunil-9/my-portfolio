import { dataResume } from '../assets/data'

const Certifications = () => {
  return (
    <div className="bg-gray-100 py-16" id="certifications">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold">Certifications</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {dataResume.certifications.map((cert) => (
            <div key={cert.id} className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-2 text-xl font-semibold">{cert.description}</h3>
              <p className="mb-4 text-gray-600">Issued by: {cert.issuedBy}</p>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 transition-colors hover:text-blue-800"
              >
                View Certificate
                <svg
                  className="ml-2 size-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Certifications
