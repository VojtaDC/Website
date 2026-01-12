export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  slug: string;
  title: string;
  tags: string[];
  shortDescription: string;
  learned: string[];
  coverImage: string;
  date?: string;
  status?: 'Completed' | 'Coming soon';
  links?: ProjectLink[];
};

const placeholderCover = '/images/projects/placeholder.svg'; // TODO: Replace with real cover images in public/images/projects/.

export const projects: Project[] = [
  {
    slug: 'plants-vs-zombies-assembly',
    title: 'Plants vs Zombies in Assembly',
    tags: ['Assembly', 'x86', 'DOS'],
    shortDescription:
      'Recreation of Plants vs Zombies-style gameplay in x86 assembly with a focus on performance and low-level control.',
    learned: [
      'Game loop timing and input handling in a low-level environment',
      'Sprite rendering and memory layout optimization',
      'Debugging without modern tooling',
      'Data structures and state management in assembly',
      'Performance trade-offs and DOS-era constraints',
    ],
    coverImage: placeholderCover,
    status: 'Completed',
  },
  {
    slug: 'covid-xray-cpp-inference',
    title: 'Detecting COVID-19 with Chest X-ray (train in Python, run in C++)',
    tags: ['C++', 'Python', 'Deep Learning', 'Qt'],
    shortDescription:
      'Trained a model in Python on X-ray data and ran inference in C++ with a GUI.',
    learned: [
      'Recursive functions',
      'Filesystem',
      'Parsing Text',
      'Memory allocation and avoiding unnecessary copies',
      'Threads and shared memory handling',
      'Threads for buffering',
      'Templates',
      'Inheritance',
      'Interface with pure functions',
      'Virtual destructor',
      'Virtual functions',
      'Export classes',
      'Signals and slots (Qt)',
      'Pointer and memory handling in Qt (avoid leaks)',
      'Flexible UI',
      'Object oriented programming',
      'Working with regex',
      'Enumerators',
      'STL, Boost, Qt',
    ],
    coverImage: placeholderCover,
    status: 'Completed',
  },
  {
    slug: 'buck-boost-pcb',
    title: 'Buck Boost converter (PCB design)',
    tags: ['Power Electronics', 'PCB', 'DC-DC'],
    shortDescription: 'Designed and built a buck-boost converter with PCB layout.',
    learned: [
      'Converter topology and component selection (inductor, switch, diode, feedback)',
      'PCB layout principles: current loops, ground, EMI, thermals',
      'Measurement and iterative debugging (ripple, efficiency)',
      'Safety/robustness and tolerance analysis',
    ],
    coverImage: placeholderCover,
    status: 'Completed',
  },
  {
    slug: 'filter-design',
    title: 'Filter design (see attachment)',
    tags: ['Analog', 'Filters', 'Sallen-Key', 'Electronics'],
    shortDescription:
      'Designed a filter (active/passive) including transfer function, simulation, and evaluation.',
    learned: [
      'Transfer function derivation',
      'Sallen-Key section / filter topology choice (if applicable)',
      'Sensitivity study',
      'Component sizing and tolerance impact',
      'Simulation and validation with measurements',
      'Z-parameters / Cauer synthesis / transformations (if relevant)',
    ],
    coverImage: placeholderCover,
    status: 'Completed',
  },
  {
    slug: 'coming-soon',
    title: 'Coming soon',
    tags: ['Coming soon'],
    shortDescription: 'New projects are on the way.',
    learned: ['TBD'],
    coverImage: placeholderCover,
    status: 'Coming soon',
  },
];
