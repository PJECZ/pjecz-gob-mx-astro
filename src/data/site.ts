/**
 * Datos del sitio — navegación, boletines, directorio, footer y secciones.
 */

export interface SubNavItem {
  label: string;
  href?: string;
  children?: SubNavItem[]; 
}

export interface NavItem {
  id: string;
  title: string;
  href?: string;
  hasDropdown: boolean;
  items?: SubNavItem[];
}

export const NAV: NavItem[] = [
  {
    id: 'conocenos',
    title: 'Conócenos',
    hasDropdown: true,
    items: [
      { label: '¿Quiénes somos?', href: '/conocenos/quienes-somos' },
      { label: 'Estructura', href: '/conocenos/estructura' },
      { label: 'Observatorio Judicial', href: '/conocenos/observatorio-judicial' }
    ]
  },
  {
    id: 'consultas',
    title: 'Consultas',
    hasDropdown: true,
    items: [
      { label: 'Acuerdos del Consejo', href: '#' },
      { label: 'Acuerdos del Pleno', href: '#' },
      { label: 'Agenda de Audiencias', href: '#' },
      { label: 'Citas', href: '#' },
      { label: 'Edictos en Línea', href: '#' },
      { label: 'Listas de Acuerdo', href: '#' },
      { label: 'Poder en línea', href: '#' },
      { label: 'Tesis y Jurisprudencias', href: '#' },
      { label: 'Tramites y servicios', href: '#' },
      { label: 'Versión Pública de Sentencias', href: '#' },
      { label: 'Más...', href: '#' },
    ]
  },
  {
    id: 'prensa',
    title: 'Sala de Prensa',
    hasDropdown: true,
    items: [
      { label: 'Boletines Judiciales', href: '#' },
      { label: 'Calendario de Labores', href: '#' },
      { label: 'Comunicados', href: '#' },
      { label: 'Entrevistas', href: '#' },
      { label: 'Noticias', href: '#' },
      { label: 'News Letters', href: '#' },
      { 
        label: 'Sesiones', 
        href: '#', 
        children: [
          { label: 'Pleno del TSJ', href: '#' },
          { label: 'Sala Civil y Mercantil', href: '#' },
          { label: 'Sala Familiar', href: '#' },
          { label: 'Sala Penal', href: '#' },
          { label: 'Sala Regional', href: '#' },
          { label: 'Tribunal Constitucional', href: '#' },
        ]
      }
    ]
  },

  {
  id: 'transparencia',
  title: 'Transparencia',
  href: '#',
  hasDropdown: true, 
  items: [
    { label: 'Transparencia', href: '#' },
    { label: 'Transparencia Proactiva', href: '#' },
    { label: 'Armonización Contable', href: '#' },
  ]
},

  { id: 'estudiantes', title: 'Estudiantes', href: '#', hasDropdown: false }
];
// 2. Sección de Avisos y Acuerdos
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

// 3. Accesos Directos
export interface Service {
  title: string;
  desc: string;
  href: string;
}

export const SERVICES: Service[] = [
  { title: 'Poder en Línea v2.0', desc: 'Expediente Virtual, Buzón Electrónico, Sistema de Citas y Boletas Electrónicas.', href: 'https://poderenlinea.gob.mx/auth/login' },
  { title: 'Sistema de citas', desc: 'En esta sección puedes agendar tu visita a nuestros órganos jurisdiccionales.', href: 'https://citas.saji.gob.mx/' },
  { title: 'Listas de acuerdo', desc: 'Este apartado muestra el listado en donde se incluyen autos, acuerdos, sentencias...', href: '#/listas-acuerdo' },
  { title: 'Protocolo de acceso', desc: 'De actuación para garantizar el Acceso a la Justicia a las Personas con Discapacidad.', href: '#/protocolo' },
];

// 4. Directorio Institucional
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

// 5. Columnas del Footer
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