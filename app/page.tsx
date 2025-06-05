'use client'
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Brain, Users, BarChart3, Zap, Shield, Globe, Play, Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

const HRMSLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Smart Recruitment",
      description: "AI-powered candidate screening and matching. Find the perfect fit for your team with intelligent algorithms that analyze skills, culture fit, and potential.",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Performance Analytics",
      description: "Real-time insights into team performance, productivity metrics, and growth opportunities. Make data-driven decisions with comprehensive reporting.",
      gradient: "from-pink-500 to-red-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Workflow Automation",
      description: "Automate repetitive HR tasks, from onboarding to performance reviews. Focus on strategic initiatives while AI handles the routine work.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "AI Assistant",
      description: "Get instant answers to HR questions, policy clarifications, and process guidance. Your 24/7 intelligent HR companion.",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security with automatic compliance monitoring. Keep your sensitive HR data protected and meet regulatory requirements.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Workforce",
      description: "Manage distributed teams across multiple time zones and regions. Centralized control with local compliance and cultural adaptation.",
      gradient: "from-cyan-500 to-pink-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Companies Trust Us" },
    { number: "10k+", label: "HR Processes Automated" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "AI Support" }
  ];

  const floatingCards = [
    { icon: "📊", text: "Real-time Analytics", position: "top-10 -left-30", delay: "0s" },
    { icon: "🤖", text: "AI Automation", position: "top-26 -right-15", delay: "2s" },
    { icon: "👥", text: "Team Management", position: "top-80 -left-10", delay: "4s" }
  ];
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#0e100c] text-white overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-red-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 left-20 w-48 h-48 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 100 ? 'bg-[#0e100c]/80 backdrop-blur-xl border-b border-white/10' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-pink-400 to-teal-400 bg-clip-text text-transparent">
              HRFlow
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-cyan-400 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-cyan-400 transition-colors">Pricing</a>
              <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">About</a>
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white" onClick={()=>router.push('/dashboard')}>
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/10">
              <div className="flex flex-col space-y-4 pt-4">
                <a href="#features" className="text-gray-300 hover:text-cyan-400 transition-colors">Features</a>
                <a href="#pricing" className="text-gray-300 hover:text-cyan-400 transition-colors">Pricing</a>
                <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">About</a>
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full">
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-6 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 text-cyan-300 border-cyan-500/30">
              ✨ AI-Powered HRMS Solution
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Revolutionize Your
              <span className="block bg-gradient-to-r from-cyan-400 via-pink-400 to-teal-400 bg-clip-text text-transparent">
                HR Management
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Streamline your entire HR workflow with AI-powered automation. 
              Manage teams, optimize processes, and make data-driven decisions effortlessly.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white px-8 py-6 text-lg group">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-6 text-lg group">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>
          
          {/* Floating Cards */}
          {floatingCards.map((card, index) => (
            <Card key={index} className={`absolute hidden lg:block ${card.position} bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-white/20 animate-pulse`} style={{ animationDelay: card.delay }}>
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">{card.icon}</div>
                <div className="text-sm font-semibold">{card.text}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gradient-to-br from-cyan-500/10 to-pink-500/10 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful Features for 
              <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent"> Modern HR</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to manage your workforce efficiently, powered by cutting-edge AI technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-cyan-500/10 to-pink-500/10 border-white/10 backdrop-blur-sm">
            <CardContent className="p-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your
                <span className="block bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                  HR Operations?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of forward-thinking companies who&apoes;ve already revolutionized their HR processes with our AI-powered platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white px-8 py-6 text-lg group">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg">
                  Schedule Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent mb-4">
                HRFlow
              </div>
              <p className="text-gray-400">
                The future of HR management is here. Streamline, automate, and optimize with AI.
              </p>
            </div>
            
            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "API", "Integrations"]
              },
              {
                title: "Company", 
                links: ["About", "Careers", "Press", "Contact"]
              },
              {
                title: "Resources",
                links: ["Documentation", "Support", "Blog", "Community"]
              }
            ].map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2 text-gray-400">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="hover:text-cyan-400 transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 HRFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HRMSLanding;