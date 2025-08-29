import { CloudIcon, CodeBracketIcon, CpuChipIcon, SparklesIcon, ArrowRightIcon, PlayIcon, StarIcon } from "@heroicons/react/24/outline";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-sky-50/50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-sky-500/10 dark:from-blue-400/20 dark:to-purple-400/20"></div>
      </div>
      
      {/* Gradient orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 dark:from-blue-400/40 dark:to-cyan-400/40 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-pink-400/20 dark:from-purple-400/40 dark:to-pink-400/40 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 dark:from-indigo-400/40 dark:to-blue-400/40 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '4s'}}></div>
      
      <Navigation />
      
      {/* Hero Section */}
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen pt-20 flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("/hero-bg.jpg")',
          }}
        ></div>
        
        {/* Subtle Dark Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30 dark:from-black/40 dark:via-black/20 dark:to-black/50"></div>
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium bg-white/20 dark:bg-white/10 text-white border border-white/30 dark:border-white/20 backdrop-blur-md mb-8 hover:scale-105 hover:bg-white/25 dark:hover:bg-white/15 transition-all duration-300 shadow-lg">
              <SparklesIcon className="w-4 h-4 mr-2" />
              Azure Cloud Specialists
            </div>
            
            <h1 className="text-6xl font-black tracking-tight sm:text-7xl lg:text-8xl">
              <span className="block text-white mb-2 drop-shadow-lg">Product</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 dark:from-cyan-300 dark:via-blue-300 dark:to-purple-300 drop-shadow-lg">
                Development
              </span>
              <span className="block text-white mt-2 drop-shadow-lg">Group</span>
            </h1>
            
            <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-gray-50 dark:text-gray-100 font-light drop-shadow-md">
              Elite software engineers crafting next-generation applications for the Azure Cloud. 
              Where innovation meets exceptional engineering.
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="/projects"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/25 dark:bg-white/20 border border-white/40 dark:border-white/30 rounded-full backdrop-blur-md hover:bg-white/35 dark:hover:bg-white/30 transition-all duration-300 hover:scale-105 transform shadow-2xl hover:shadow-white/25"
              >
                <span className="relative z-10">Explore Our Work</span>
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
              </a>
              
              <button className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-black/25 dark:bg-black/20 border border-white/25 dark:border-white/20 rounded-full backdrop-blur-md hover:bg-black/35 dark:hover:bg-black/30 hover:border-white/35 dark:hover:border-white/30 transition-all duration-300 shadow-xl">
                <PlayIcon className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </button>
            </div>
            
            {/* Stats */}
            <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="text-center group hover:scale-105 transition-transform duration-300 bg-white/15 dark:bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/25 dark:border-white/20 hover:bg-white/20 dark:hover:bg-white/15">
                <div className="text-4xl font-bold text-white drop-shadow-lg">50+</div>
                <div className="text-sm text-gray-100 dark:text-gray-200 mt-1">Projects Delivered</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300 bg-white/15 dark:bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/25 dark:border-white/20 hover:bg-white/20 dark:hover:bg-white/15">
                <div className="text-4xl font-bold text-white drop-shadow-lg">99.9%</div>
                <div className="text-sm text-gray-100 dark:text-gray-200 mt-1">Uptime</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300 bg-white/15 dark:bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/25 dark:border-white/20 hover:bg-white/20 dark:hover:bg-white/15">
                <div className="text-4xl font-bold text-white drop-shadow-lg">24/7</div>
                <div className="text-sm text-gray-100 dark:text-gray-200 mt-1">Support</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300 bg-white/15 dark:bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/25 dark:border-white/20 hover:bg-white/20 dark:hover:bg-white/15">
                <div className="text-4xl font-bold text-white drop-shadow-lg">5★</div>
                <div className="text-sm text-gray-100 dark:text-gray-200 mt-1">Client Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Azure Excellence */}
      <section id="about" className="py-24 bg-gray-50 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 text-gray-900 dark:text-white">
              Azure Excellence
            </h2>
            <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
              Cutting-edge solutions built with Azure&apos;s most advanced services
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
              
              {/* Cloud Native Card */}
              <div className="group bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-200 dark:border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 mb-4 text-gray-900 dark:text-white">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 group-hover:scale-110 transition-transform duration-300">
                    <CloudIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  Cloud Native
                </dt>
                <dd className="text-base leading-7 text-gray-700 dark:text-gray-300">
                  <p>
                    Building cloud-native applications with Azure App Service, Functions, and Container Apps for maximum scalability and performance.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 rounded-full">App Service</span>
                    <span className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 rounded-full">Functions</span>
                    <span className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 rounded-full">Container Apps</span>
                  </div>
                </dd>
              </div>
              
              {/* Modern Stack Card */}
              <div className="group bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-200 dark:border-slate-700 hover:border-sky-500/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 mb-4 text-gray-900 dark:text-white">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 group-hover:scale-110 transition-transform duration-300">
                    <CodeBracketIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  Modern Stack
                </dt>
                <dd className="text-base leading-7 text-gray-700 dark:text-gray-300">
                  <p>
                    Leveraging Next.js, TypeScript, and modern frameworks to create responsive, accessible web applications.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs bg-sky-100 dark:bg-sky-900 text-sky-900 dark:text-sky-100 rounded-full">Next.js</span>
                    <span className="px-3 py-1 text-xs bg-sky-100 dark:bg-sky-900 text-sky-900 dark:text-sky-100 rounded-full">TypeScript</span>
                    <span className="px-3 py-1 text-xs bg-sky-100 dark:bg-sky-900 text-sky-900 dark:text-sky-100 rounded-full">React</span>
                  </div>
                </dd>
              </div>
              
              {/* AI Integration Card */}
              <div className="group bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-200 dark:border-slate-700 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 mb-4 text-gray-900 dark:text-white">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 group-hover:scale-110 transition-transform duration-300">
                    <CpuChipIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  AI Integration
                </dt>
                <dd className="text-base leading-7 text-gray-700 dark:text-gray-300">
                  <p>
                    Integrating Azure AI services and OpenAI to create intelligent, data-driven applications.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-900 dark:text-indigo-100 rounded-full">Azure AI</span>
                    <span className="px-3 py-1 text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-900 dark:text-indigo-100 rounded-full">OpenAI</span>
                    <span className="px-3 py-1 text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-900 dark:text-indigo-100 rounded-full">ML</span>
                  </div>
                </dd>
              </div>
              
            </dl>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4">
              Powered by Innovation
            </h2>
            <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
              The technologies that drive our exceptional solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {[
              { name: 'Azure', icon: '☁️', color: 'from-blue-500 to-blue-600' },
              { name: 'Next.js', icon: '⚡', color: 'from-gray-700 to-gray-800' },
              { name: 'TypeScript', icon: 'TS', color: 'from-blue-600 to-blue-700' },
              { name: 'Tailwind', icon: '🎨', color: 'from-sky-500 to-sky-600' },
              { name: 'AI/ML', icon: '🤖', color: 'from-indigo-500 to-indigo-600' },
            ].map((tech) => (
              <div key={tech.name} className="group text-center hover:scale-110 transition-all duration-300">
                <div className={`mx-auto h-16 w-16 flex items-center justify-center rounded-2xl bg-gradient-to-r ${tech.color} shadow-2xl group-hover:shadow-xl transition-shadow duration-300`}>
                  <span className="text-white font-bold text-lg">{tech.icon}</span>
                </div>
                <p className="mt-4 text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-white transition-colors duration-300">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-100 dark:bg-slate-900/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4">
              Client Success Stories
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "PDG transformed our legacy system into a modern Azure cloud solution. The results exceeded all expectations.",
                author: "Sarah Chen",
                role: "CTO, TechCorp",
                rating: 5
              },
              {
                quote: "Their expertise in Azure and modern development practices is unmatched. Delivered ahead of schedule.",
                author: "Michael Rodriguez",
                role: "VP Engineering, StartupXYZ",
                rating: 5
              },
              {
                quote: "Working with PDG was seamless. They understood our vision and brought it to life beautifully.",
                author: "Emily Johnson",
                role: "Product Manager, Enterprise Inc",
                rating: 5
              }
            ].map((testimonial) => (
              <div key={testimonial.author} className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-white/10 hover:border-blue-500/30 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={`star-${testimonial.author}-${i}`} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              Ready to Transform Your Vision?
            </h2>
            <p className="mx-auto max-w-xl text-xl leading-8 text-blue-100 mb-10">
              Let&apos;s collaborate on your next Azure project and bring your ideas to life with beautiful, scalable applications.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105 transform"
              >
                <span className="relative z-10">Start Your Project</span>
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border border-white/30 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
