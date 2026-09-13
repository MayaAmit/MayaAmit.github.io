export const experience = [
  {
    org: 'NASA Jet Propulsion Laboratory',
    role: 'Software and Optical Engineering Intern',
    location: 'Pasadena, California',
    dates: 'June 2026 – August 2026',
    points: [
      'Built an end-to-end simulation and optimization pipeline to design and analyze apodizers — optical elements currently being tested for the Habitable Worlds Observatory (HWO) coronagraph.',
      'Reduced full pipeline runtime from 40–60 hours to roughly 7 by distributing optimization runs across a worker pool and tuning per-worker memory and CPU usage.',
      'Replaced days-to-weeks of manual analysis per design study with automated exploration of thousands of candidate apodizer designs, quantifying trade-offs between starlight suppression, planet-light throughput, and sensitivity to wavefront aberrations.',
      'Delivered Pareto frontiers to HWO principal engineers, informing new apodizer designs for fabrication and testing.',
    ],
  },
  {
    org: 'Northeastern SuperBIT Weak Lensing Group',
    role: 'Astrophysics Research Intern',
    location: 'Boston, Massachusetts',
    dates: 'July 2024 – August 2025',
    points: [
      'Developed a data-analysis pipeline for SuperBIT, a balloon-borne telescope, measuring subtle distortions in galaxy images used to map dark matter in galaxy clusters.',
      'Integrated a novel pixel-based classification method to distinguish nearby from distant galaxies using redshift-calibrated training data, improving detection signal by 30–50% for target clusters.',
      'Built a signal-to-noise map module with Monte Carlo noise realizations to quantify statistical uncertainty in cluster detections.',
    ],
  },
  {
    org: 'Draper',
    role: 'Optical Engineering Intern',
    location: 'Cambridge, Massachusetts',
    dates: 'July 2023 – April 2024',
    points: [
      'Characterized wavelength-dependent coupling efficiency of photonic integrated circuits by aligning a SuperK broadband laser to on-chip waveguides.',
      'Wrote MATLAB scripts to model wavelength-dependent coupling loss and introduced formal uncertainty quantification into the analysis pipeline.',
      'Propagated errors through the loss models, giving the team a more rigorous estimate of waveguide performance and contributing to improved design iterations.',
    ],
  },
]

export const publications = [
  {
    citation:
      'S. Saha, J. E. McCleary, S. W. Everett, M. Amit, et al., "Lensing in the Blue III: Weak Lensing Shape Catalogs of 30 Merging Galaxy Clusters."',
    venue: 'Submitted to AAS',
    link: 'https://arxiv.org/abs/2603.18376',
    linkLabel: 'arXiv:2603.18376',
  },
  {
    citation:
      'S. Saha, M. Amit, et al., "Lensing in the Blue IV: The First Weak Lensing Signal from the Stratosphere."',
    venue: 'In preparation',
  },
  {
    citation:
      '"Foreground–Background Galaxy Separation with Color Information."',
    venue: 'APS New England Section Annual Meeting, Brown University, 2025',
    kind: 'Talk',
  },
  {
    citation:
      'Cerini et al. (contributing member), "Lensing-Reconstructed Dark Matter–Intracluster Medium Coherence as a Probe of Cluster Dynamical State: Application to HSTFF, RELICS, and CLASH Clusters."',
    venue: 'Submitted to AAS',
    link: 'https://arxiv.org/abs/2607.01389',
    linkLabel: 'arXiv:2607.01389',
  },
]
