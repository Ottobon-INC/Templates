import { PhoneCall } from 'lucide-react';

const Emergency = () => {
  return (
    <section className="py-0">
      <div className="container-custom">
        <div className="bg-red-600 rounded-3xl p-8 lg:p-16 flex flex-col lg:flex-row items-center justify-between shadow-2xl relative overflow-hidden transform -translate-y-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full blur-3xl opacity-50 mix-blend-screen pointer-events-none"></div>
          
          <div className="relative z-10 mb-8 lg:mb-0 max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Need Emergency Help?</h2>
            <p className="text-red-100 text-lg">Our emergency department is open 24/7. For severe or life-threatening symptoms, call immediately or proceed to the nearest emergency room.</p>
          </div>
          
          <div className="relative z-10">
            <a href="tel:911" className="inline-flex items-center justify-center px-8 py-5 rounded-full bg-white text-red-600 font-bold text-xl hover:bg-red-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <PhoneCall className="w-6 h-6 mr-3 animate-pulse" />
              Call Emergency: 911
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Emergency;
