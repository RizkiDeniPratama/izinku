export interface Testimonial {
  name: string;
  title: string;
  avatar: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Rina Wijaya',
    title: 'CEO, PT Nusantara Kreatif',
    avatar: '/images/testimonial-1.webp',
    quote:
      'Proses pendirian PT bersama IZINKU sangat cepat dan profesional. Tim mereka sabar menjelaskan setiap tahap, dan semua dokumen selesai lebih cepat dari yang saya bayangkan. Sangat direkomendasikan untuk para pelaku UMKM!',
  },
  {
    name: 'Budi Santoso',
    title: 'Owner, CV Makmur Sejahtera',
    avatar: '/images/testimonial-2.webp',
    quote:
      'Saya sangat terbantu dengan layanan retainer bulanan dari IZINKU. Setiap kali ada pertanyaan hukum terkait kontrak dengan supplier, tim mereka selalu responsif dan memberikan solusi yang tepat. Worth every penny!',
  },
];
