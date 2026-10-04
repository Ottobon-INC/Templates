import React from 'react';

interface AdmissionsSectionProps {
  onOpenApplyModal: () => void;
  onOpenBrochureModal: () => void;
  onOpenConsultationModal: () => void;
  onExploreProgrammes: () => void;
}

export const AdmissionsSection: React.FC<AdmissionsSectionProps> = () => {
  return (
    <section id="admissions" className="hidden"></section>
  );
};
