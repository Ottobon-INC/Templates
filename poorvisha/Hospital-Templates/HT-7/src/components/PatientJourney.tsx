import { motion } from 'framer-motion';
import { Search, CalendarDays, CheckCircle2, Hospital, HeartHandshake } from 'lucide-react';

const PatientJourney = () => {
  const steps = [
    { icon: <Search />, title: "Choose a Doctor", desc: "Find the right specialist for your specific needs." },
    { icon: <CalendarDays />, title: "Select a Time", desc: "Pick a convenient time slot that fits your schedule." },
    { icon: <CheckCircle2 />, title: "Book Appointment", desc: "Confirm your appointment instantly online." },
    { icon: <Hospital />, title: "Visit Hospital", desc: "Experience our state-of-the-art facilities." },
    { icon: <HeartHandshake />, title: "Continue Care", desc: "Ongoing support for your journey to health." },
  ];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-semibold tracking-wider text-hospital-accent uppercase mb-3">Simple Process</h2>
          <h3 className="text-4xl font-bold">Your Journey to Better Health</h3>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-100 -translate-y-1/2 hidden lg:block z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-2xl bg-white border border-gray-100 shadow-soft flex items-center justify-center text-hospital-accent mb-6 group-hover:-translate-y-2 transition-transform duration-300 relative">
                  {step.icon}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-hospital-text text-white flex items-center justify-center text-sm font-bold border-4 border-white">
                    {idx + 1}
                  </div>
                </div>
                <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-gray-500 max-w-[200px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientJourney;
