import { dataResume } from '../assets/data'

const Education = () => {
  return (
    <div className="bg-white py-16" id="education">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold">Education</h2>
        <div className="space-y-8">
          {dataResume.education.map((edu) => (
            <div key={edu.id} className="rounded-lg bg-gray-100 p-6">
              <div className="mb-4 flex flex-col justify-between sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-xl font-semibold">{edu.institution}</h3>
                  <p className="text-gray-600">{edu.studyType}</p>
                </div>
                <div className="mt-2 text-gray-500 sm:mt-0">
                  {edu.startDate} - {edu.completionDate}
                </div>
              </div>
              <p className="text-gray-600">{edu.location}</p>
              {edu.score && (
                <p className="mt-2 text-gray-700">
                  {edu.scoreType}: {edu.score}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education
