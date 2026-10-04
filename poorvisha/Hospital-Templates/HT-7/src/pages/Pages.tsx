const GenericPage = ({ title, description }: { title: string, description?: string }) => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-[#FAF9F6] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-hospital-text mb-4">{title}</h1>
      <p className="text-gray-600 max-w-2xl text-lg">
        {description || `This is the placeholder page for ${title}. Content for this section will be added here.`}
      </p>
    </div>
  );
};

export const DoctorsPage = () => <GenericPage title="Our Doctors" description="Meet our world-class medical team of experienced specialists." />;
export const DepartmentsPage = () => <GenericPage title="Departments" description="Browse through our specialized departments and comprehensive care units." />;
export const ServicesPage = () => <GenericPage title="Medical Services" description="Explore the full range of healthcare services we offer." />;
export const PatientInfoPage = () => <GenericPage title="Patient Information" description="Everything you need to know before, during, and after your visit." />;
export const AboutPage = () => <GenericPage title="About AuraCare" description="Learn about our legacy, mission, and commitment to healthcare excellence." />;
export const ContactPage = () => <GenericPage title="Contact Us" description="Get in touch with our team for inquiries and support." />;
export const PortalLoginPage = () => <GenericPage title="Patient Portal Login" description="Securely access your medical records and upcoming appointments." />;
export const BookAppointmentPage = () => <GenericPage title="Book an Appointment" description="Schedule a visit with one of our specialists at a time that works for you." />;
