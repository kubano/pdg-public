import Link from "next/link";
import Navigation from "@/components/Navigation";

const getStatusStyles = (status: string) => {
  switch (status) {
    case "Featured":
      return "bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10";
    case "Live":
      return "bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20";
    case "Completed":
      return "bg-gray-50 text-gray-600 ring-1 ring-inset ring-gray-500/10";
    default:
      return "bg-yellow-50 text-yellow-800 ring-1 ring-inset ring-yellow-600/20";
  }
};

const projects = [
  {
    id: 1,
    title: "Data Acquisition Portal (D.A.P.)",
    description: "Data Acquisition Portal (D.A.P.) is an enterprise-grade platform for meter test data acquisition and field services work order management, designed to streamline operations for utility and contractor companies.",
    technologies: [".NET 9", "Azure App Service", "Azure SQL", "Azure Functions", "Azure Blob Storage", "Azure DevOps"],
    category: "Enterprise Platform",
    status: "Featured"
  },
  {
    id: 2,
    title: "PHA Web Presence",
    description: "PHA Web Presence is a modern, custom web application and CMS designed specifically for Public Housing Authorities, delivering secure, accessible, and easy-to-manage Marketing Websites and Resident Portals hosted on the Azure cloud.",
    technologies: [".NET 8", "Azure App Service", "Azure SQL", "Azure Functions", "Azure Blob Storage", "Azure DevOps"],
    category: "Web Applications",
    status: "Featured"
  },
  {
    id: 3,
    title: "PHA Applications Monger",
    description: "PHA Applications Monger is a comprehensive suite of web application solutions for Public Housing Authorities, offering modules such as Audit Portal, Monthly Property Inspections, Internal Invoice Management, and flexible a la carte options to maximize value for PHAs.",
    technologies: [".NET 8", "Azure App Service", "Azure SQL", "Azure Web Jobs", "Azure Blob Storage", "Azure DevOps"],
    category: "Enterprise Suite",
    status: "Featured"
  },
  {
    id: 4,
    title: "Utility Compliance Manager",
    description: "Regulatory compliance tracking and reporting system for utility companies, ensuring adherence to federal and state regulations with automated documentation and audit trails.",
    technologies: [".NET 8", "Azure App Service", "Azure SQL", "Azure Functions", "Power BI"],
    category: "Compliance Platform",
    status: "Live"
  },
  {
    id: 5,
    title: "Property Management Portal",
    description: "Integrated property management system for residential and commercial properties, featuring tenant management, maintenance tracking, financial reporting, and automated communications.",
    technologies: [".NET 8", "Azure App Service", "Azure SQL", "Azure Service Bus", "Azure Blob Storage"],
    category: "Property Management",
    status: "Live"
  },
  {
    id: 6,
    title: "Municipal Services Dashboard",
    description: "Citizen engagement platform for municipal governments, providing online service requests, permit applications, payment processing, and community announcements.",
    technologies: [".NET 8", "Azure Container Apps", "Azure SQL", "Azure Functions", "Azure API Management"],
    category: "Government Platform",
    status: "Completed"
  },
  {
    id: 7,
    title: "Healthcare Provider Network",
    description: "Provider network management system for healthcare organizations, managing credentialing, compliance tracking, performance metrics, and provider communications.",
    technologies: [".NET 8", "Azure App Service", "Azure SQL", "Azure Active Directory", "Azure Key Vault"],
    category: "Healthcare Platform",
    status: "Completed"
  },
  {
    id: 8,
    title: "Educational Resource Hub",
    description: "Learning management system for educational institutions, featuring course management, student tracking, assignment submission, and progress reporting.",
    technologies: [".NET 8", "Azure App Service", "Azure SQL", "Azure Blob Storage", "Azure CDN"],
    category: "Education Platform",
    status: "Completed"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation variant="light" />

      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-8">
              <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                Our Portfolio
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Featured <span className="text-blue-600">Projects</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore our portfolio of Microsoft Azure-powered solutions that have helped 
              businesses transform their digital presence and achieve scalable, secure, 
              and reliable cloud infrastructure.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-4">
              <div className="flex items-center text-sm text-gray-500">
                <div className="h-2 w-2 bg-green-400 rounded-full mr-2"></div>
                8 Projects Delivered
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <div className="h-2 w-2 bg-blue-400 rounded-full mr-2"></div>
                100% Azure Cloud
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <div className="h-2 w-2 bg-purple-400 rounded-full mr-2"></div>
                .NET Expertise
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.id}
                  className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-300"></div>
                  
                  {project.status === "Featured" && (
                    <div className="absolute top-6 right-6 z-10">
                      <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-1 text-xs font-medium text-white shadow-lg">
                        ⭐ Featured
                      </span>
                    </div>
                  )}
                  
                  <div className="relative z-10">
                    {/* Category Badge */}
                    <div className="mb-4">
                      <span className="inline-flex items-center rounded-lg bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
                        {project.category}
                      </span>
                    </div>
                    
                    {/* Project Title */}
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                      {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Status and CTA */}
                    <div className="flex items-center justify-between">
                      <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${getStatusStyles(project.status)}`}>
                        {project.status}
                      </span>
                      
                      <button className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500 group-hover:translate-x-1 transition-all duration-200">
                        Learn More 
                        <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-8">
              <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                Proven Results
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Project Success <span className="text-blue-600">Metrics</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our track record speaks for itself with consistently delivered enterprise solutions.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              
              <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-t-2xl"></div>
                <dt className="flex items-center text-lg font-bold text-gray-900 mb-3">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  99.9% Uptime Achieved
                </dt>
                <dd className="text-base leading-7 text-gray-600">
                  Our Azure-hosted applications consistently deliver enterprise-grade reliability with minimal downtime.
                </dd>
              </div>

              <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-t-2xl"></div>
                <dt className="flex items-center text-lg font-bold text-gray-900 mb-3">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  </div>
                  50% Cost Reduction
                </dt>
                <dd className="text-base leading-7 text-gray-600">
                  Average infrastructure cost savings achieved through Azure cloud optimization and modern architecture.
                </dd>
              </div>

              <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-t-2xl"></div>
                <dt className="flex items-center text-lg font-bold text-gray-900 mb-3">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                    <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  3x Performance Improvement
                </dt>
                <dd className="text-base leading-7 text-gray-600">
                  Average performance gains from legacy system modernization and Azure cloud migration.
                </dd>
              </div>

            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
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
