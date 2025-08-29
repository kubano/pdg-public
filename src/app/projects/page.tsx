import { CloudIcon, CodeBracketIcon, GlobeAltIcon, ServerIcon, CircleStackIcon, CubeIcon, SparklesIcon, CheckCircleIcon, ClockIcon } from "@heroicons/react/24/outline";
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

function getStatusConfig(status: string) {
  if (status === 'Live') return {
    class: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-800',
    icon: CheckCircleIcon
  };
  if (status === 'In Development') return {
    class: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-800',
    icon: ClockIcon
  };
  return {
    class: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800',
    icon: CheckCircleIcon
  };
}

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800 mb-8">
              <SparklesIcon className="w-4 h-4 mr-2" />
              Portfolio Showcase
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Projects</span>
            </h1>
            
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-gray-600 dark:text-gray-300">
              Showcasing our expertise in building scalable, secure, and innovative solutions on Azure Cloud. 
              From enterprise infrastructure to cutting-edge AI applications.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => {
              const statusConfig = getStatusConfig(project.status);
              const StatusIcon = statusConfig.icon;
              
              return (
                <div
                  key={project.id}
                  className="group relative bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/30 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                      <project.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                    </div>
                    <span className={`inline-flex items-center rounded-lg px-3 py-1 text-xs font-medium ${statusConfig.class}`}>
                      <StatusIcon className="w-3 h-3 mr-1" />
                      {project.status}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-3 text-center">
                      <ClockIcon className="w-4 h-4 mx-auto mb-1 text-gray-400" />
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">{project.duration}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Duration</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-3 text-center">
                      <div className="w-4 h-4 mx-auto mb-1 text-gray-400 text-xs font-bold">👥</div>
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">{project.team}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Team Size</div>
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-md bg-gray-100 dark:bg-slate-700 px-2.5 py-1 text-xs font-medium text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Delivering Excellence
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our track record speaks for itself. Here are the metrics that matter most to our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { id: 'projects', value: "50+", label: "Projects Completed" },
              { id: 'uptime', value: "99.9%", label: "Uptime Achieved" },
              { id: 'specializations', value: "6", label: "Azure Specializations" },
              { id: 'satisfaction', value: "100%", label: "Client Satisfaction" }
            ].map((metric) => (
              <div key={metric.id} className="text-center group">
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 relative">
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help you transform your ideas into powerful Azure solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start Your Project
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border border-white/30 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
