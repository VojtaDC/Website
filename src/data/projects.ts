export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  slug: string;
  title: string;
  tags: string[];
  shortDescription: string;
  overview?: string;
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
    slug: 'dtu-mlops-project',
    title: 'DTU MLOps Project',
    tags: ['MLOps', 'PyTorch', 'Docker', 'CI/CD', 'FastAPI'],
    shortDescription:
      'Course project applying end-to-end MLOps practices (reproducibility, CI, Docker, deployment, monitoring) to a machine-learning pipeline, with the tabular CNN baseline being replaced by an MLP.',
    overview:
      'Built on the DTU MLOps cookiecutter template with a structured repo (configs, data, dockerfiles, tests, reports, docs). Focused on reproducibility, automated testing, containerized training/inference, and a FastAPI service while migrating the tabular model from CNN to MLP.',
    learned: [
      'Structured an MLOps repository with configs, data splits, tests, reports, and documentation',
      'Set up reproducible environments and dependency management for ML workflows',
      'Versioned data and experiments for traceability and rollback',
      'Built CI pipelines for testing, linting, and coverage',
      'Containerized training and API services with Docker',
      'Designed an inference API with FastAPI for deployment-ready integration',
      'Improved model fit for tabular data by moving from CNN to MLP',
    ],
    coverImage: placeholderCover,
  },
  {
    slug: 'electric-kart-build',
    title: 'De Elektrische Kart',
    tags: ['EV', 'Power Electronics', 'Battery', 'Motor', 'Arduino'],
    shortDescription:
      'Designed and built an electric kart, covering the drivetrain, power electronics, wiring, and testing.',
    overview:
      'Team project focused on sizing the motor, inverter, and battery system, validating performance through simulations and test runs, and documenting the full build process.',
    learned: [
      'Powertrain sizing and integration (motor, inverter, transmission)',
      'Battery selection and state-of-charge measurement (LEM HTFS 400-P)',
      'Wiring diagrams, harness routing, and cable list planning',
      'Performance simulation for speed, acceleration, and energy use',
      'Testing methodology including bench and outdoor runs',
      'Team coordination, documentation, and safety checks',
    ],
    coverImage: placeholderCover,
  },
  {
    slug: 'battery-development-project',
    title: 'Project Leefmilieutechnologie - Batterij',
    tags: ['Batteries', 'Electrochemistry', 'NiZn', 'CuZn', 'Lab Testing'],
    shortDescription:
      'Designed and tested copper-zinc and nickel-zinc batteries with a focus on electrolyte selection and performance evaluation.',
    overview:
      'Researched commercial battery chemistries, selected CuZn and NiZn designs, and iterated on electrolyte formulations and electrode preparation to improve performance.',
    learned: [
      'Battery fundamentals: operation, charging, and key performance metrics',
      'Comparative analysis of commercial chemistries (NiMH, ZnC)',
      'Electrolyte screening and sensitivity testing',
      'Electrode preparation via electrolysis (NiOOH, Ni(OH)2)',
      'Circuit design, switching, and prototype assembly',
      'Lab validation, measurement, and conclusion reporting',
    ],
    coverImage: placeholderCover,
  },
  {
    slug: 'maze-solver-arduino',
    title: 'Maze Solver (Python & Arduino)',
    tags: ['Computer Vision', 'Python', 'Arduino', 'Robotics', 'BFS'],
    shortDescription:
      'Used computer vision to detect a maze, compute a shortest path with BFS, and steer a physical marble maze via Arduino-controlled servos.',
    overview:
      'A camera feed is processed to extract the maze layout, then a breadth-first search determines a path while PID control translates it into tilt commands sent over serial to the Arduino.',
    learned: [
      'Perspective correction and maze extraction from a live camera feed',
      'Breadth-first search pathfinding for shortest routes',
      'Serial communication between Python and Arduino',
      'PID tuning for stable marble control',
      'Robust detection via thresholding and morphological operations',
    ],
    coverImage: placeholderCover,
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
