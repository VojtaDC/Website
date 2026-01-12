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
  status?: 'Completed' | 'Coming soon' | 'In progress';
  links?: ProjectLink[];
};

const placeholderCover = '/images/projects/placeholder.svg'; // TODO: Replace with real cover images in public/images/projects/.
const MazeCover = '/images/projects/Maze.png';
const BatteryCover = '/images/projects/Battery.png';
const KartCover = '/images/projects/Kart.png';
const PCBCover = '/images/projects/PCB.png';
const AssemblyCover = '/images/projects/Assembly.png';
const FilterCover = '/images/projects/Filter.png';
const CovidCppCover = '/images/projects/CovidCpp.png';
const MLOpsCover = '/images/projects/MLOps.png';
const JupiterHorizonCover = '/images/projects/JupiterHorizon.png';
const RFAmplifierCover = '/images/projects/RFAmplifier.png';

export const projects: Project[] = [

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
    coverImage: PCBCover,
    status: 'Completed',
  },
  {
    slug: 'plants-vs-zombies-assembly',
    title: 'Assembly x86 - Plants vs Zombies',
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
    coverImage: AssemblyCover,
    status: 'Completed',
  },

  {
    slug: 'filter-design',
    title: 'Filter design',
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
    coverImage: FilterCover,
    status: 'Completed',
  },
  {
    slug: 'maze-solver-arduino',
    title: 'Automated Maze Solver',
    tags: ['Computer Vision', 'Python', 'Arduino', 'PID Control', 'Fusion 360'],
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
    coverImage: MazeCover,
    status: 'Completed',
  },
  {
    slug: 'covid-xray-cpp-inference',
    title: 'C++ System Programming',
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
    coverImage: CovidCppCover,
    status: 'Completed',
  },
  {
    slug: 'dtu-mlops-project',
    title: 'MLOps Project',
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
    coverImage: MLOpsCover,
    status: 'In progress',
  },
  {
    slug: 'jupiter-horizon-investigation-juno-asc',
    title: 'Image Analysis - Jupiter',
    tags: ['Image Analysis', 'Computer Vision', 'Spacecraft Navigation', 'SPICE', 'MATLAB', 'C++'],
    shortDescription:
      'Processed Juno Advanced Stellar Compass images to calibrate/denoise frames, detect Jupiter’s limb, map stars to a catalogue, and estimate camera attitude with validation against SPICE geometry.',
    overview:
      'Built an end-to-end pipeline for 6 Juno ASC frames captured during a perijove pass: radiometric calibration (dark-frame subtraction + column-median bias removal), radiation-speckle mitigation via a gradient-switched median filter, despinning to merge odd/even interleaved fields into a consistent frame, and lens distortion correction (Brown–Conrady 1st-order radial model). On top of the corrected imagery, implemented a custom limb edge-tracking method and robust circle fitting (Hyper fit) to estimate the horizon arc, then performed star detection (dual-mask strategy), centroid extraction, pattern-based catalogue matching, and robust attitude estimation (TRIAD + RANSAC inliers + Wahba/Q-method refinement). Quantitatively compared horizon fits against SPICE-derived limb predictions and discussed the physical offset between the observed optical limb and the 1-bar reference surface.',
    learned: [
      'Radiometric calibration for CCD imagery: dark-frame subtraction and removal of fixed-pattern/column-correlated artifacts',
      'Radiation/cosmic-ray style artifact suppression with conditional (gradient-based) filtering that preserves PSF-like stars and limb edges',
      'Despinning interleaved odd/even fields by modeling spacecraft rotation in the camera frame and remapping via bilinear interpolation',
      'Lens distortion correction using inverse mapping with a first-order radial Brown–Conrady model and pixel aspect ratio handling',
      'Horizon extraction tailored to low-SNR limb arcs (continuity-constrained edge tracking) and robust circle fitting on short arcs (Hyper fit vs. Kåsa bias)',
      'Star detection + centroiding, then catalogue-based pattern recognition and attitude estimation using TRIAD, RANSAC consensus, and Wahba (Davenport Q-method)',
      'Validation mindset: comparing image-derived geometry to SPICE kernel predictions and interpreting systematic discrepancies as physical (atmospheric scattering vs. 1-bar limb)',
      'Performance/feasibility analysis: LUT-based remapping, memory vs. latency trade-offs, and why full-frame processing is impractical onboard a µASC-class processor',
    ],
    coverImage: JupiterHorizonCover,
    status: 'Completed',
  },
  {
    slug: 'electric-kart-build',
    title: 'Electric Kart',
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
    coverImage: KartCover,
    status: 'Completed',
  },
  {
    slug: 'battery-development-project',
    title: 'Battery Design',
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
    coverImage: BatteryCover,
    status: 'Completed',
  },
  {
    slug: '5p4ghz-integrated-small-signal-amplifier',
  title: '5.4 GHz Integrated Linear Small-Signal Amplifier',
  tags: ['RF', 'Microwave', 'GaAs HEMT', 'Impedance Matching', 'ADS'],
  shortDescription:
    'Designed and simulated a 5.4 GHz GaAs HEMT small-signal amplifier with 50 Ω matching, high gain, low noise, and ensured stability.',
  overview:
    'RF amplifier designed in Keysight ADS using a 2×100 µm GaAs HEMT. Includes input/output matching, biasing, and stabilization, targeting WiFi-band operation with narrowband tuning and low power consumption.',
  learned: [
    'S-parameter based input and output matching at 5.4 GHz',
    'Narrowband RF tuning and bandwidth–Q trade-offs',
    'GaAs HEMT biasing for low power and linear operation',
    'Noise figure optimization via source matching',
    'RF stability analysis under mismatched conditions',
  ],
    coverImage: RFAmplifierCover,
    status: 'In progress',
  },
];
