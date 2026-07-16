/**
 * Datos del sitio — navegación, boletines, directorio, footer y secciones.
 * Centralizado para que el contenido se edite sin tocar los componentes.
 */

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const NAV: NavItem[] = [
  { id: 'home',          label: 'Inicio',         href: '/' },
  { id: 'boletin',       label: 'Boletín',        href: '/boletin' },
  { id: 'directorio',    label: 'Directorio',     href: '/directorio' },
  { id: 'transparencia', label: 'Transparencia',  href: '/transparencia' },
  { id: 'tramites',      label: 'Trámites',       href: '/tramites' },
];

export interface NewsItem {
  slug: string;
  cat: string;
  color: string;
  date: string;
  title: string;
  excerpt: string;
}

export const NEWS: NewsItem[] = [
  { slug: 'acuerdos-plenarios-abril', cat: 'BOLETÍN', color: '#39444B', date: '24 ABR 2026', title: 'Acuerdos plenarios del Tribunal Superior de Justicia', excerpt: 'Publicación de resoluciones correspondientes al mes en curso, con efectos a partir del lunes 28 de abril.' },
  { slug: 'nueva-sede-civil-torreon', cat: 'CIVIL', color: '#323B6B', date: '23 ABR 2026', title: 'Nueva sede del Juzgado Cuarto de lo Civil en Torreón', excerpt: 'La nueva sede abrirá al público el próximo 5 de mayo con horario regular de ventanilla.' },
  { slug: 'protocolo-atencion-familiar', cat: 'FAMILIAR', color: '#5F2D71', date: '22 ABR 2026', title: 'Protocolo de atención a usuarios en materia familiar', excerpt: 'Se actualizan los lineamientos para el acompañamiento a personas en situación de vulnerabilidad.' },
  { slug: 'suspension-labores-1-mayo', cat: 'AVISO', color: '#486238', date: '21 ABR 2026', title: 'Suspensión de labores el 1 de mayo de 2026', excerpt: 'Por conmemoración del Día del Trabajo, no habrá actividad jurisdiccional ni administrativa.' },
  { slug: 'capacitacion-sistema-acusatorio', cat: 'PENAL', color: '#9E3182', date: '20 ABR 2026', title: 'Capacitación continua en el sistema acusatorio', excerpt: 'Inscripciones abiertas para magistrados y personal jurisdiccional del primer distrito judicial.' },
  { slug: 'informe-anual-labores-2025', cat: 'INSTITUCIONAL', color: '#4B5760', date: '18 ABR 2026', title: 'Informe anual de labores 2025', excerpt: 'Disponible para consulta pública en la sección de Transparencia.' },
];

export interface Service {
  title: string;
  desc: string;
  href: string;
}

export const SERVICES: Service[] = [
  { title: 'Consulta de expedientes', desc: 'Acceso a actuaciones por número y año.', href: '/tramites' },
  { title: 'Agenda de audiencias',    desc: 'Horarios y salas por juzgado y distrito.', href: '/tramites' },
  { title: 'Trámites en línea',       desc: 'Solicitudes, copias certificadas y más.', href: '/tramites' },
  { title: 'Transparencia',           desc: 'Información pública, informes y normativa.', href: '/transparencia' },
];

export interface DirectoryEntry {
  name: string;
  role: string;
  head: string;
  loc: string;
}

export const DIRECTORY: DirectoryEntry[] = [
  { name: 'Tribunal Superior de Justicia', role: 'Pleno', head: 'Mag. Miriam Cárdenas Cantú', loc: 'Saltillo' },
  { name: 'Consejo de la Judicatura', role: 'Órgano de gobierno', head: 'Mag. Luis Efrén Ríos Vega', loc: 'Saltillo' },
  { name: 'Primer Distrito Judicial', role: 'Saltillo', head: 'Juez Presidente rotativo', loc: 'Saltillo' },
  { name: 'Segundo Distrito Judicial', role: 'Torreón', head: 'Juez Presidente rotativo', loc: 'Torreón' },
  { name: 'Tercer Distrito Judicial', role: 'Monclova', head: 'Juez Presidente rotativo', loc: 'Monclova' },
  { name: 'Instituto de Especialización Judicial', role: 'Capacitación', head: 'Dirección General', loc: 'Saltillo' },
];

export const TRANSPARENCIA: string[] = [
  'Informe anual 2025', 'Presupuesto y ejercicio', 'Estadística judicial',
  'Nombramientos', 'Normativa interna', 'Aviso de privacidad',
];

export interface FooterColumn {
  title: string;
  items: string[];
}

export const FOOTER_COLS: FooterColumn[] = [
  { title: 'Institución',   items: ['Historia', 'Magistrados', 'Organigrama', 'Normativa', 'Transparencia'] },
  { title: 'Servicios',     items: ['Consulta de expedientes', 'Agenda de audiencias', 'Trámites en línea', 'Peritos', 'Mediadores'] },
  { title: 'Publicaciones', items: ['Boletín judicial', 'Gaceta', 'Acuerdos plenarios', 'Jurisprudencia', 'Informe anual'] },
  { title: 'Contacto',      items: ['Directorio', 'Contraloría', 'Quejas y sugerencias', 'Aviso de privacidad'] },
];
