import Container from '../ui/Container';
import Card from '../ui/Card';
import { experiences } from '../../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Work Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-blue-600 dark:text-blue-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 font-medium mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
                  {exp.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}