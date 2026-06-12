export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'Beranda', href: '/' },
  { label: 'Layanan', href: '/layanan' },
  { label: 'Tentang', href: '/tentang' },
  { label: 'Blog', href: '/blog' },
  { label: 'Kontak', href: '/kontak' },
];
