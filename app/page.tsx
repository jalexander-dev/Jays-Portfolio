import { Bitcoin, Shield, Wrench, Mail, Phone, MapPin, Award, BookOpen, Briefcase } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Hero Section */}
        <header className="py-12 text-center">
          <h1 className="text-4xl font-bold mb-3">Ronald J. Alexander Jr.</h1>
          <h2 className="text-lg text-gray-300 mb-4">Full Stack Developer & Computer Engineer</h2>
          <div className="flex justify-center space-x-4">
            <Wrench className="w-6 h-6 text-blue-400" />
            <span className="text-gray-400">Liberty PC Repair & Software Development</span>
          </div>
        </header>

        {/* Skills Section */}
        <section className="py-8">
          <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
            <Award className="w-6 h-6 mr-2 text-yellow-500" />
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
              <h3 className="font-bold mb-2 text-blue-400">Technical Skills</h3>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>Custom Database Development</li>
                <li>Windows Server Administration</li>
                <li>Hardware Setup & Maintenance</li>
                <li>Network Configuration</li>
                <li>Microsoft Office Suite</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
              <h3 className="font-bold mb-2 text-blue-400">Machine Operations</h3>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>CNC Lathe Machine Operation</li>
                <li>Break Machine Operation</li>
                <li>Drill Press Operation</li>
                <li>Electric Power Sheer Machine</li>
                <li>Forklift Operation</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
              <h3 className="font-bold mb-2 text-blue-400">Personal Attributes</h3>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>Positive attitude & Self-motivated</li>
                <li>Fast learner & Reliable</li>
                <li>Technical problem-solving</li>
                <li>Customer service focused</li>
                <li>Detail-oriented</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-8">
  <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center">
    <Briefcase className="w-6 h-6 mr-2 text-green-500" />
    Featured Projects
  </h2>
  <div className="space-y-8">
            {/* Bitcoin Tracker Project */}
            <a href="https://bitcoin-tracker-virid.vercel.app/" 
       target="_blank"
       rel="noopener noreferrer"
       className="block group">
              <div className="bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden hover:border-orange-500 transition-colors">
                <div className="p-4 flex items-center">
                  <Bitcoin className="w-8 h-8 text-orange-500 mr-3" />
                  <h3 className="text-xl font-bold">BitJay's Bitcoin Tracker</h3>
                </div>
                <div className="relative h-64 bg-slate-900">
                  <Image 
                    src="/portfolio-bitjays-bitcoin-tracker.jpg"
                    alt="Bitcoin Tracker Preview"
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900">
                    <p className="text-sm text-gray-300">
                      Real-time cryptocurrency tracking with price monitoring, market analysis, and interactive charts
                    </p>
                  </div>
                </div>
              </div>
            </a>

            {/* Armor of God Project */}
            <a href="https://armor-of-god.vercel.app/" 
       target="_blank"
       rel="noopener noreferrer"
       className="block group">
              <div className="bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden hover:border-blue-500 transition-colors">
                <div className="p-4 flex items-center">
                  <Shield className="w-8 h-8 text-blue-500 mr-3" />
                  <h3 className="text-xl font-bold">The Armor of God</h3>
                </div>
                <div className="relative h-64 bg-slate-900">
                  <Image 
                    src="/portfolio-armor-of-god.jpg"
                    alt="Armor of God Preview"
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900">
                    <p className="text-sm text-gray-300">
                      Interactive spiritual application exploring the Armor of God with scripture references
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-8">
          <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
            <BookOpen className="w-6 h-6 mr-2 text-purple-500" />
            Education
          </h2>
          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex flex-col">
                <span className="font-bold text-purple-400">Computer Engineering Technology Level I & II</span>
                <span>Mayland Community College - Honor Roll (2005, 2007)</span>
              </li>
              <li className="flex flex-col">
                <span className="font-bold text-purple-400">Computer Applications</span>
                <span>Surry Community College (2008)</span>
              </li>
              <li className="flex flex-col">
                <span className="font-bold text-purple-400">Information Systems</span>
                <span>Mayland Community College (2004)</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-8 mb-12">
          <h2 className="text-xl font-bold mb-6 text-center">Contact</h2>
          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <div className="flex flex-col items-center space-y-3 text-gray-300">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-red-400" />
                <span>125 W. Swannanoa Ave., Liberty, NC 27298</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-green-400" />
                <span>(743)-337-9506</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-blue-400" />
                <span>alexanderjay70@gmail.com</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
