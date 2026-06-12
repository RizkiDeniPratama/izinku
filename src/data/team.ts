export interface TeamMember {
  name: string;
  title: string;
  photo: string;
  bio: string;
}

export const team: TeamMember[] = [
  {
    name: 'Dr. Ahmad Fauzi, S.H., M.H.',
    title: 'Founder & Managing Partner',
    photo: '/images/founder.webp',
    bio: 'Lebih dari 15 tahun pengalaman di bidang hukum korporasi dan perizinan usaha. Lulusan Fakultas Hukum Universitas Indonesia dengan spesialisasi Hukum Bisnis.',
  },
  {
    name: 'Siti Nurhaliza, S.H.',
    title: 'Senior Legal Consultant',
    photo: '/images/team-1.webp',
    bio: 'Spesialis hukum kontrak dan perjanjian bisnis dengan pengalaman 8 tahun menangani klien dari berbagai industri.',
  },
  {
    name: 'Rizky Pratama, S.H., M.Kn.',
    title: 'Notarial & Corporate Law Specialist',
    photo: '/images/team-2.webp',
    bio: 'Ahli di bidang hukum notaris dan korporasi. Berpengalaman dalam pendirian lebih dari 500 badan usaha.',
  },
];
