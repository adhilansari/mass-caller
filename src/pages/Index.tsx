
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import StepCard from "@/components/StepCard";
import { features, testimonials, howItWorks, pricing, useCases, faqs } from "@/data/appData";
import { 
  Users, Phone, Megaphone, BarChart3, Cloud, Workflow,
  UserPlus, MessageSquare, PhoneCall
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Helper function to render appropriate icons
const renderIcon = (iconName: string) => {
  switch (iconName) {
    case "contacts":
      return <Users size={24} className="text-caller-blue dark:text-caller-purple" />;
    case "voice":
      return <Megaphone size={24} className="text-caller-blue dark:text-caller-purple" />;
    case "call":
      return <Phone size={24} className="text-caller-blue dark:text-caller-purple" />;
    case "workflow":
      return <Workflow size={24} className="text-caller-blue dark:text-caller-purple" />;
    case "analytics":
      return <BarChart3 size={24} className="text-caller-blue dark:text-caller-purple" />;
    case "cloud":
      return <Cloud size={24} className="text-caller-blue dark:text-caller-purple" />;
    case "group":
      return <UserPlus size={24} className="text-caller-blue dark:text-caller-purple" />;
    default:
      return <Phone size={24} className="text-caller-blue dark:text-caller-purple" />;
  }
};

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-white to-gray-100 dark:from-caller-dark dark:to-caller-darkblue">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Reach 1,000s in Minutes</span>
                <span className="block mt-2">Bulk Calling Made Easy</span>
              </h1>
              <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
                Automate your customer calls, increase engagement, and get real-time confirmations. No setup, no tech skills needed.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="button-primary">
                  🚀 Get Started Instantly
                </Button>
                <Button className="button-secondary">
                  💬 Book a Demo
                </Button>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="flex items-center">
                  <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-1 mr-2">
                    <svg className="h-4 w-4 text-caller-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm">Pay for Answered Calls Only</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-1 mr-2">
                    <svg className="h-4 w-4 text-caller-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm">Instant Activation</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-1 mr-2">
                    <svg className="h-4 w-4 text-caller-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm">Auto Re-Dial</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-1 mr-2">
                    <svg className="h-4 w-4 text-caller-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm">Cloud Dashboard Access</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="relative">
                <div className="w-64 md:w-80 mx-auto rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-caller-darkblue animate-float">
                  <img 
                    src="/lovable-uploads/bd0d6ecd-bf98-4f98-8201-c50ce8dffab8.png" 
                    alt="Instant Reach Caller Dashboard" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 md:right-12 w-48 md:w-56 rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-caller-darkblue">
                  <img 
                    src="/lovable-uploads/3fd98f08-0ce6-470f-8f52-5c65bc1dc9b5.png" 
                    alt="Call Screen" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Problem & Solution Section */}
      <section className="py-16 px-4 bg-white dark:bg-caller-dark">
        <div className="container mx-auto">
          <h2 className="section-heading">
            Why waste time calling one-by-one when your <br className="hidden md:block" />
            <span className="gradient-text">competitors are already automating?</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-caller-red">The Problems</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="text-caller-red mr-2 flex-shrink-0 mt-1">❌</div>
                  <p>Manual calling is slow and inefficient</p>
                </li>
                <li className="flex items-start">
                  <div className="text-caller-red mr-2 flex-shrink-0 mt-1">❌</div>
                  <p>High risk of missed follow-ups</p>
                </li>
                <li className="flex items-start">
                  <div className="text-caller-red mr-2 flex-shrink-0 mt-1">❌</div>
                  <p>No easy way to track confirmations</p>
                </li>
                <li className="flex items-start">
                  <div className="text-caller-red mr-2 flex-shrink-0 mt-1">❌</div>
                  <p>Poor reporting = poor decisions</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 dark:bg-green-900/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-caller-green">Our Solution</h3>
              <p className="mb-4">
                Our app solves all of this with one-click mass calling, smart workflows, and cloud-based analytics – all from your phone or computer.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="text-caller-green mr-2 flex-shrink-0 mt-1">✅</div>
                  <p>Reach thousands of contacts in minutes</p>
                </li>
                <li className="flex items-start">
                  <div className="text-caller-green mr-2 flex-shrink-0 mt-1">✅</div>
                  <p>Automated tracking and reporting</p>
                </li>
                <li className="flex items-start">
                  <div className="text-caller-green mr-2 flex-shrink-0 mt-1">✅</div>
                  <p>Capture responses with IVR workflows</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Who Is It For Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-caller-darkblue">
        <div className="container mx-auto">
          <h2 className="section-heading">Who Is It For?</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: "📣", label: "Marketing & Advertising Agencies" },
              { icon: "🎪", label: "Event Management Teams" },
              { icon: "🏢", label: "Corporate Sales Teams" },
              { icon: "🕌", label: "Community Groups" },
              { icon: "🏫", label: "Education Centers" },
              { icon: "📱", label: "Growing Startups" },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-caller-dark rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-sm font-medium">{item.label}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg font-medium italic">
              "Anyone who needs to reach many people fast – this is your tool."
            </p>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-16 px-4 bg-white dark:bg-caller-dark">
        <div className="container mx-auto">
          <h2 className="section-heading">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <FeatureCard
                key={feature.id}
                icon={renderIcon(feature.icon)}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 bg-gray-50 dark:bg-caller-darkblue">
        <div className="container mx-auto">
          <h2 className="section-heading">
            <span className="gradient-text">Simple Pricing</span> – Only Pay for Answered Calls
          </h2>
          <p className="text-center mb-12 text-gray-600 dark:text-gray-300">
            No hidden fees. No monthly commitment. You only pay when your call is picked up.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan) => (
              <div 
                key={plan.id} 
                className={`bg-white dark:bg-caller-darkblue rounded-xl shadow-lg overflow-hidden border-2 ${
                  plan.isPopular 
                    ? 'border-caller-purple relative transform scale-105' 
                    : 'border-transparent'
                }`}
              >
                {plan.isPopular && (
                  <div className="bg-caller-purple text-white text-center py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.billingPeriod && (
                      <span className="text-gray-500 dark:text-gray-400 text-sm">{plan.billingPeriod}</span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="text-caller-green mr-2 flex-shrink-0 mt-1">✓</div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      plan.isPopular ? 'button-primary' : 'button-secondary'
                    }`}
                  >
                    Choose Plan
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 px-4 bg-white dark:bg-caller-dark">
        <div className="container mx-auto">
          <h2 className="section-heading">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {howItWorks.map((item) => (
              <StepCard
                key={item.id}
                number={item.step}
                title={item.title}
                description={item.description}
                icon={renderIcon(item.icon)}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* App Screenshots */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-caller-darkblue overflow-hidden">
        <div className="container mx-auto">
          <h2 className="section-heading">See It In Action</h2>
          
          <div className="flex flex-nowrap overflow-x-auto pb-8 gap-6 md:justify-center">
            <div className="w-64 flex-shrink-0 rounded-3xl overflow-hidden shadow-lg border-8 border-white dark:border-caller-darkblue transform rotate-2">
              <img 
                src="/lovable-uploads/e9c21c6a-3c37-4d82-a89b-aab5c0bb3332.png" 
                alt="Home Screen" 
                className="w-full h-auto"
              />
            </div>
            <div className="w-64 flex-shrink-0 rounded-3xl overflow-hidden shadow-lg border-8 border-white dark:border-caller-darkblue transform -rotate-1">
              <img 
                src="/lovable-uploads/9f7ba55b-8661-4e50-b3e3-a1f73d33efe3.png" 
                alt="Groups Screen" 
                className="w-full h-auto"
              />
            </div>
            <div className="w-64 flex-shrink-0 rounded-3xl overflow-hidden shadow-lg border-8 border-white dark:border-caller-darkblue transform rotate-1">
              <img 
                src="/lovable-uploads/1645b1cb-198a-4c1d-9dd6-fe97d3f2ff33.png" 
                alt="Call Screen" 
                className="w-full h-auto"
              />
            </div>
            <div className="w-64 flex-shrink-0 rounded-3xl overflow-hidden shadow-lg border-8 border-white dark:border-caller-darkblue transform -rotate-2">
              <img 
                src="/lovable-uploads/f76392f1-4998-4e2c-a1ee-a7277c256f2b.png" 
                alt="Settings Screen" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="text-center mt-8 flex flex-wrap justify-center gap-3">
            <div className="bg-white dark:bg-caller-darkblue px-4 py-2 rounded-full shadow-sm">
              <span className="text-caller-green">✓</span> Intuitive
            </div>
            <div className="bg-white dark:bg-caller-darkblue px-4 py-2 rounded-full shadow-sm">
              <span className="text-caller-green">✓</span> Mobile-Friendly
            </div>
            <div className="bg-white dark:bg-caller-darkblue px-4 py-2 rounded-full shadow-sm">
              <span className="text-caller-green">✓</span> Fast to Navigate
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white dark:bg-caller-dark">
        <div className="container mx-auto">
          <h2 className="section-heading">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                avatarInitial={testimonial.avatarInitial}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-caller-darkblue">
        <div className="container mx-auto max-w-3xl">
          <h2 className="section-heading">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-caller-blue to-caller-purple text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Reach More, Convert Faster, and Build Stronger Relationships?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Join 1,000+ teams already using our smart bulk calling app to save time and grow their business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-caller-blue hover:bg-gray-100 font-semibold text-lg py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              👉 Start Free Trial
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white/20 font-semibold text-lg py-6 px-8 rounded-full shadow-lg">
              💬 Schedule Demo Call
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
