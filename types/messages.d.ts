declare interface IntlMessages {
  common: {
    home: string;
    bookAppointment: string;
    medicalCenters: string;
    faq: string;
    login: string;
    register: string;
    medical_booking: string;
    book_appointment: string;
    medical_centers: string;
    sign_in: string;
  };
  home: {
    title: string;
    subtitle: string;
  };
}

declare module '@/messages/*.json' {
  const value: IntlMessages;
  export default value;
} 