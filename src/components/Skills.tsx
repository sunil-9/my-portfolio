import { dataResume } from '../assets/data'

const Skills = () => {
  const skillCategories = dataResume.skills.reduce(
    (acc, skill) => {
      acc[skill.skillType] = skill.skillValues
      return acc
    },
    {} as Record<string, string[]>
  )

  return (
    <div className="bg-white py-16" id="skills">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold">Skills</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="rounded-lg bg-gray-100 p-6">
              <h3 className="mb-4 text-xl font-semibold capitalize">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-white px-3 py-1 text-sm text-gray-700 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
