import { dataResume } from '../assets/data'

const Experience = () => {
  return (
    <div className="bg-gray-100 py-16" id="experience">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Work Experience
        </h2>
        <div className="space-y-8">
          {dataResume.work.map((job) => (
            <div key={job.id} className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex flex-col justify-between sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-xl font-semibold">{job.role}</h3>
                  <p className="text-gray-600">{job.company}</p>
                </div>
                <div className="mt-2 text-gray-500 sm:mt-0">
                  {job.startDate} - {job.endDate || 'Present'}
                </div>
              </div>
              <p className="text-gray-600">{job.location}</p>
              <div className="mt-4 text-gray-700">
                {job.description.split('\n').map((item, i) => (
                  <p key={i} className="mb-2">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
