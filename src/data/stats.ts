export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 1500, suffix: '+', label: 'Client UMKM Terlayani' },
  { value: 99, suffix: '%', label: 'Kepuasan Klien' },
  { value: 24, suffix: ' Jam', label: 'Waktu Respons' },
  { value: 200, suffix: '+', label: 'Izin Usaha Diterbitkan' },
];
