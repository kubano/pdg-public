import { CloudIcon, CodeBracketIcon, GlobeAltIcon, ServerIcon, CircleStackIcon, CubeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Navigation from "@/components/Navigation";

const projects = [
  {
    id: 1,
    title: "Azure E-Commerce Platform",
    description: "A scalable e-commerce solution built with Azure App Service, Azure SQL Database, and Azure Blob Storage. Features real-time inventory management and secure payment processing.",
    technologies: ["Azure App Service", "Azure SQL", "Next.js", "TypeScript"],
    icon: GlobeAltIcon,
    status: "Live",
    category: "E-Commerce",
    duration: "6 months",
    team: "5 engineers"
  },
  {
    id: 2,
    title: "Serverless Analytics Dashboard",
    description: "Real-time analytics dashboard using Azure Functions, Cosmos DB, and Power BI. Processes millions of events daily with automatic scaling.",
    technologies: ["Azure Functions", "Cosmos DB", "Power BI", "React"],
    icon: CloudIcon,
    status: "In Development",
    category: "Analytics",
    duration: "4 months",
    team: "3 engineers"
  },
  {
    id: 3,
    title: "AI-Powered Content Management",
    description: "Content management system with Azure Cognitive Services for automated content moderation, translation, and sentiment analysis.",
    technologies: ["Azure Cognitive Services", "Azure Container Apps", "OpenAI"],
    icon: CodeBracketIcon,
    status: "Completed",
    category: "AI/ML",
    duration: "8 months",
    team: "4 engineers"
  },
  {
    id: 4,
    title: "Azure Landing Zones for Enterprise Apps",
    description: "Enterprise-grade Azure landing zones with governance, security, and compliance frameworks. Implemented multi-subscription architecture with centralized identity and network management.",
    technologies: ["Azure Landing Zones", "Azure Policy", "Azure Blueprints", "Terraform"],
    icon: ServerIcon,
    status: "Live",
    category: "Infrastructure",
    duration: "10 months",
    team: "6 engineers"
  },
  {
    id: 5,
    title: "Azure Static Web Apps Development",
    description: "Modern web applications deployed using Azure Static Web Apps with integrated CI/CD pipelines. Features serverless APIs, global distribution, and automatic SSL certificates.",
    technologies: ["Azure Static Web Apps", "GitHub Actions", "Azure Functions", "React"],
    icon: CubeIcon,
    status: "Completed",
    category: "Web Development",
    duration: "3 months",
    team: "4 engineers"
  },
  {
    id: 6,
    title: "Azure SQL Integrations",
    description: "Comprehensive database solutions using Azure SQL with advanced features like elastic pools, geo-replication, and automated backup strategies for mission-critical applications.",
    technologies: ["Azure SQL Database", "Azure SQL MI", "Azure Data Factory", "Power BI"],
    icon: CircleStackIcon,
    status: "Live",
    category: "Database",
    duration: "5 months",
    team: "3 engineers"
  },
];

function getStatusClass(status: string) {
  if (status === 'Live') return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800';
  if (status === 'In Development') return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800';
  return 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800';
}

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-slate-900 dark:via-blue-900 dark:to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-sky-500/10 dark:from-blue-500/20 dark:to-sky-500/20"></div>
      </div>
      
      {/* Gradient orbs */}
      <div className="absolute top-20 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-20 -right-4 w-72 h-72 bg-sky-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative px-6 pt-12 pb-4 sm:px-8 lg:px-12 min-h-[60vh] flex items-center">
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium bg-gradient-to-r from-blue-600/10 to-sky-600/10 text-blue-600 dark:text-blue-300 border border-blue-500/20 backdrop-blur-sm mb-8 hover:scale-105 transition-transform duration-300">
              <CubeIcon className="w-4 h-4 mr-2" />
              Portfolio Showcase
            </div>
            
            <h1 className="text-6xl font-black tracking-tight sm:text-6xl lg:text-8xl mb-8">
              <span className="block text-gray-900 dark:text-white mb-4">Our</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 mb-4">
                Projects
              </span>
            </h1>
            
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-gray-600 dark:text-gray-300 font-light">
              Showcasing our expertise in building scalable, secure, and innovative solutions on Azure Cloud. 
              From enterprise infrastructure to cutting-edge AI applications.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-slate-600 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-blue-500/50"
              >
                {/* Icon and Status */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-sky-500 group-hover:scale-110 transition-transform duration-300">
                    <project.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border ${getStatusClass(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Title and Category */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {project.category}
                  </p>
                </div>
                
                {/* Description */}
                <p className="text-base leading-7 text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
                    <div className="text-lg font-bold text-gray-900 dark:text-white">{project.duration}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Duration</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
                    <div className="text-lg font-bold text-gray-900 dark:text-white">{project.team}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Team Size</div>
                  </div>
                </div>
                
                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-900/30 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-t border-gray-200 dark:border-slate-600 relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
              Project Success Metrics
            </h2>
            <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
              Delivering results that matter to our clients
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                50+
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                99.9%
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Uptime Achieved</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                6
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Azure Specializations</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                100%
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="mx-auto max-w-xl text-xl leading-8 text-blue-100 mb-10">
              Let&apos;s discuss how we can help you build your next Azure solution with our proven expertise.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105 transform"
              >
                <span className="relative z-10">Start Your Project</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border border-white/30 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
