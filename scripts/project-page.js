const projectCatalog = {
  fx10: {
    title: "Markforged FX10",
    eyebrow: "Production Additive Manufacturing",
    lede: "R&D and product development for the FX10's swappable metal printhead, from initial feasibility work through engineering validation.",
    hero: "../assets/projects/fx10/FX10-hero.png",
    heroAlt: "Markforged FX10 platform with metal printhead",
    tags: ["Printhead architecture", "Metal FFF", "Validation", "Manufacturing"],
    facts: [
      ["2x", "Metal X print speed"],
      ["3", "Core R&D questions resolved"],
      ["EVT", "Reached May 2024"],
      ["2025", "Began shipping"]
    ],
    overview: [
      "The FX10 was designed as a modular printer capable of processing both continuous-fiber composites and bound-metal filaments. Those material systems impose very different thermal, extrusion, sensing, and service requirements, making a robust swappable printhead central to the product architecture.",
      "I led the initial R&D for the metal printhead beginning in June 2022, drawing on prior Metal X process-development work and carrying the concept through architecture, prototypes, documentation, subsystem design, and validation."
    ],
    sections: [
      {
        kicker: "Feasibility",
        title: "Answering the questions that shaped the architecture",
        body: [
          "The first phase established whether a Peltier-cooled heatsink was required with second-generation metal filaments, the hot-zone length needed to double print speed, and whether a new extruder and calibration procedure could reduce unit-to-unit variation.",
          "Stock Metal X printheads and modified development assemblies were used to isolate those variables. The results gave the broader engineering team enough confidence to proceed with the first dedicated prototype."
        ]
      },
      {
        kicker: "Development",
        title: "From first layout to engineering validation",
        body: [
          "I created the initial mechanical architecture, owned the 3D CAD and part drawings, and partnered with electrical engineering on the first internal prototype. During the build I also authored manufacturing work instructions and tracked design issues.",
          "As the team expanded, I continued leading subsystem design, assembly documentation, and validation deliverables through a second prototype and the EVT program."
        ]
      }
    ],
    outcome: "The final printhead produces metal parts at roughly twice the speed of the Metal X with improved print quality, lower unit-to-unit variation, automatic material changeover, and richer telemetry for debugging and failure detection.",
    media: [
      ["../assets/projects/fx10/02-def065ceee78.png", "FX10 metal printhead with lower shroud and top cover removed"],
      ["../assets/projects/fx10/03-7b0f59b15173.png", "FX10 metal printhead with the front-plane PCB removed"],
      ["../assets/projects/fx10/04-0e40ee111a89.png", "Development Metal X printhead used to test new extruder architectures"]
    ],
    embed: {
      src: "https://www.youtube.com/embed/_lQjlBVkTAo",
      title: "FX10 metal kit shipping announcement"
    },
    source: "https://peterkellyyy.wixsite.com/peterkelly/fx10"
  },
  px100: {
    title: "Markforged PX100",
    eyebrow: "Metal Binder Jetting",
    lede: "Building the US capability, infrastructure, and validation program for a production-grade metal binder jet platform.",
    hero: "../assets/projects/px100/01-864df172f280.jpg",
    heroAlt: "Markforged PX100 metal binder jet printer",
    tags: ["Lab buildout", "Binder jetting", "System validation", "Operations"],
    facts: [
      ["3 weeks", "Technical training in Sweden"],
      ["2", "Customer systems shipped in Q2 2024"],
      ["1st", "PX100 installation outside Sweden"],
      ["US", "R&D and validation hub"]
    ],
    overview: [
      "The PX100 is a metal binder jet printer developed by Markforged Sweden, formerly Digital Metal. I was responsible for developing binder-jet expertise in the United States and building and managing a dedicated PX100 laboratory at Markforged's Waltham headquarters."
    ],
    sections: [
      {
        kicker: "Knowledge Transfer",
        title: "Learning the complete powder-to-part process",
        body: [
          "The program began with a three-week working visit to Hoganas, Sweden. I learned system operation and maintenance, the full powder-to-part workflow, and the ancillary equipment required to run the process.",
          "Alongside the standard operating workflow, I developed internal tools and methods for debugging mechanical issues, checking printhead health, and evaluating printed parts."
        ]
      },
      {
        kicker: "Implementation",
        title: "Building a dependable US development lab",
        body: [
          "Back in Waltham, I planned the lab infrastructure, equipment layout, commissioning sequence, and test fixtures needed to support printer development. A 3D layout was used to validate access, utilities, and workflow before installation.",
          "The completed lab became the US base for validation testing, revealing installation and commissioning issues before additional systems reached customers."
        ]
      }
    ],
    outcome: "The Waltham installation became a critical proving ground for the PX100 launch and established a reliable US center for binder-jet R&D, testing, troubleshooting, and customer-system readiness.",
    media: [
      ["../assets/projects/px100/02-67148865286f.png", "Example component produced on the PX100"],
      ["../assets/projects/px100/03-e0894cf78f08.png", "3D layout used to plan the Waltham PX100 laboratory"]
    ],
    source: "https://peterkellyyy.wixsite.com/peterkelly/px100"
  },
  "co-parts": {
    title: "Continuous-Fiber Co-parts",
    eyebrow: "Composite Additive Manufacturing",
    lede: "A method for reinforcing multiple load planes by printing interlocking components in individually optimized orientations.",
    hero: "../assets/projects/co-parts/01-e66ed0c40c37.jpg",
    heroAlt: "Continuous-fiber reinforced co-part assembly",
    tags: ["Composite FFF", "Design methodology", "Mechanical testing", "Published research"],
    facts: [
      ["20x", "Potential fiber-to-nylon strength ratio"],
      ["87%+", "Best comparison load retained"],
      ["80k", "Technical video views"],
      ["2023", "Journal publication"]
    ],
    overview: [
      "Markforged printers can print with both a discontinuously reinforced base material and a variety of continuous fiber reinforcement, including carbon fiber. Continuous reinforcement provides a significant improvement, as typical engineering plastics (for example, nylon) will have tensile yield strength near 40MPa in the printed plane where the inlaid continuous carbon fiber will have up to 800MPa yield strength – nearly a 20-fold improvement. However, the composite strength is limited to the XY plane in which the fiber is laid. Consequently, the parts are limited to the strength of their parent plastic in the Z direction – a strength already reduced by the anisotropy inherent to the FFF additive manufacturing process.",
      "The co-part methodology separates features with conflicting load planes into interlocking components. Each component is printed in the orientation best suited to its own loads, then assembled into one functional part."
    ],
    sections: [
      {
        kicker: "Process",
        body: [
          "A tent-pole mounting plate provided a clear test case: four bolts secure the plate while a central pin applies load in a direction that cannot be optimally reinforced with one continuous-fiber print orientation.",
          "The geometry was separated into two co-parts using Boolean subtraction. Both were printed with continuous carbon fiber aligned to their primary loads and assembled with an arbor press."
        ]
      },
      {
        kicker: "Communication",
        body: [
          "The work became a peer-reviewed Rapid Prototyping Journal paper, a Markforged technical article, and an educational video for which I wrote the script and presented the process.",
          "The video reached more than 80,000 views and became the company's strongest organic driver of YouTube views and subscribers at the time."
        ]
      }
    ],
    outcome: "The reinforced co-part retained more than 87% of the maximum load of the next-best monolithic continuous-fiber design while enabling reinforcement in otherwise incompatible planes.",
    media: [
      ["../assets/projects/co-parts/02-c472f6eb6285.png", "Mounting-plate load case with fixed bolts and central applied force"],
      ["../assets/projects/co-parts/03-d21249ca0d41.png", "Monolithic part, assembled co-part, and assembly strategy"],
      ["../assets/projects/co-parts/04-572035ac8eb8.png", "Load-extension results and failure modes"]
    ],
    embed: {
      src: "https://www.youtube.com/embed/VljE9VG1s-s",
      title: "How to improve Z strength with multi-part prints"
    },
    links: [
      ["Read the journal paper", "https://www.emerald.com/rpj/article-pdf/29/11/64/2307484/rpj-12-2022-0415.pdf"]
    ],
    source: "https://peterkellyyy.wixsite.com/peterkelly/co-parts"
  },
  harpy: {
    title: "Legged Robotics Research",
    eyebrow: "Robotics Research Platform",
    lede: "A super-lightweight bipedal robot built to explore thruster-assisted locomotion, dynamic balance, and movement in reduced gravity.",
    hero: "../assets/projects/harpy/harpy leg.png",
    heroAlt: "Harpy leg actuator assembly",
    tags: ["Mechanical design", "Actuation", "Simulation", "Hardware testing"],
    facts: [
      ["6", "Leg actuators"],
      ["2", "Thruster actuators"],
      ["2", "EDF thrusters"],
      ["CF", "Composite structure"]
    ],
    overview: [
      "Harpy was conceived as a hardware platform for developing complex control algorithms for thruster-assisted bipedal locomotion. The twin electric ducted fans can augment balance, improve walking stability, and add impulse for jumping over obstacles.",
      "The platform also creates a practical way to study legged locomotion in reduced-gravity conditions. By using controlled thrust to offset a portion of the robot's weight, experiments can approximate lower effective gravity without changing the leg mechanism."
    ],
    overviewMedia: {
      type: "video",
      src: "../assets/projects/harpy/harpyTurn.webm",
      caption: "Harpy turning simulation",
      aspectRatio: "1 / 1",
      background: "#ffffff",
      autoplay: false,
      loop: false,
      playOnceOnView: true
    },
    sections: [
      {
        kicker: "Architecture",
        body: [
          "Nearly every design decision was driven by the need to minimize weight while preserving stiffness and energy density. Carbon-fiber tubes, sandwich plates, composite 3D printing, and embedded bearings and carbon plates reduced part count while keeping the load paths direct.",
          "Lightweight brushless motors are paired with compact Harmonic Drive component sets. The resulting actuators package high reduction and torque density into composite housings shaped around the robot rather than around conventional gearbox geometry."
        ]
      },
      {
        kicker: "Actuator Design",
        body: [
          "The actuator housing carries bearings, transmission components, motor, and output structure in a tightly integrated assembly. Composite FDM enabled geometry that would be costly to machine while still supporting embedded high-load components."
        ],
        figure: {
          src: "../assets/projects/harpy/actuator-exploded.png",
          alt: "Exploded view of the Harpy actuator architecture",
          caption: "Exploded view of the Harpy actuator architecture"
        }
      },
      {
        kicker: "Simulation",
        body: [
          "A parametric model in Rhino and Grasshopper exposed actuator, thruster, drive, heatsink, battery, and geometry locations to an evolutionary solver. The solver compared each candidate against target center-of-mass and moment-of-inertia values.",
          "Because hardware changes could be folded back into the model, the workflow remained useful as batteries, sensors, cameras, and other components evolved."
        ],
        inlineVideo: {
          src: "../assets/projects/harpy/harpySimscapeJump.webm",
          label: "Harpy Simscape jump simulation",
          caption: "Simulation of Harpy jumping with thruster forces ranging from 0 to 30 N",
          aspectRatio: "1440 / 868",
          background: "#ffffff"
        }
      },
      {
        kicker: "Hardware Validation",
        body: [
          "A t-slot fixture was designed for controlled drop and hop testing. The simplified single-leg setup isolated the sagittal mechanism while preserving the thruster actuator and EDF, making it possible to measure how assisted thrust changed required joint torque and jump performance."
        ]
      }
    ],
    outcome: "This work established the hardware architecture for Harpy: a compact experimental platform where structure, actuation, mass distribution, simulation, and testing were developed as one system.",
    galleryLabel: "Additional Views",
    media: [
      ["../assets/projects/harpy/harpy-back.png", "Rear packaging view showing actuation, electronics, and thrust hardware"]
    ],
    videos: [
      ["../assets/projects/harpy/leg-test.mp4", "../assets/projects/harpy/harpy-back.png", "Leg jumping with and without thruster assistance"]
    ],
    links: [
      ["Read the related thesis", "https://web.archive.org/web/20220826032004id_/https://repository.library.northeastern.edu/files/neu:bz60w8418/fulltext.pdf"]
    ],
    source: "https://peterkellyyy.wixsite.com/peterkelly/harpy"
  },
  finefeatures: {
    title: "Metal X Fine Features",
    eyebrow: "Metal Process Development",
    lede: "Production print settings for finer detail, improved accuracy, smoother surfaces, and stronger metal parts.",
    hero: "../assets/projects/finefeatures/finefeatures-bg.png",
    heroAlt: "Fine Features metal additive manufacturing background",
    tags: ["Print process R&D", "Copper", "17-4PH stainless", "Qualification"],
    facts: [
      ["2", "Qualified material profiles"],
      ["2023", "Copper and stainless launches"],
      ["Multi-system", "Printer-to-furnace validation"],
      ["Production", "Customer slicer settings"]
    ],
    overview: [
      "Fine Features is a set of Metal X slicer settings released for copper and 17-4PH stainless steel. I led development and qualification of the profiles to improve surface finish, dimensional accuracy, minimum feature size, and interlaminar strength relative to the standard process."
    ],
    overviewMedia: {
      type: "video",
      src: "../assets/projects/finefeatures/finefeatures-demo.webm",
      caption: "Fine Features process demonstration"
    },
    sections: [
      {
        kicker: "Exploration",
        title: "Finding detail without sacrificing reliability",
        body: [
          "The project began with smaller nozzle orifices, but particle-size variation created an unacceptable risk of flow restriction and clogging. In parallel, I varied nozzle temperature, print speed, cooling, extrusion width, and other process parameters.",
          "Testing revealed that a carefully tuned profile using the production nozzle delivered much of the detail improvement without the lifetime penalty of a smaller orifice."
        ]
      },
      {
        kicker: "Qualification",
        title: "Validating the entire powder-to-part chain",
        body: [
          "Successful green parts still had to survive solvent debinding, sintering, and predictable shrinkage while maintaining target mechanical properties. Qualification therefore spanned multiple printers, material lots, debinders, and furnaces.",
          "For several print issues I generated machine code directly to test prototype toolpaths, then worked with software engineering to turn those findings into customer-facing slicer parameters."
        ]
      }
    ],
    outcome: "Fine Features launched for copper in March 2023 and for 17-4PH v2 stainless steel in July 2023, expanding customer applications and supporting new system sales.",
    media: [
      ["../assets/projects/finefeatures/02-d477f3d24f5e.png", "Flexible copper dragon printing with Fine Features settings"],
      ["../assets/projects/finefeatures/03-7ed736fc7ae5.jpg", "Sintered copper articulated print"],
      ["../assets/projects/finefeatures/04-665a4d8e0c6c.png", "Fine Features sample component"],
      ["../assets/projects/finefeatures/05-327a1f4d9f29.png", "Fine-detail metal sample"],
      ["../assets/projects/finefeatures/06-5fca1d71ca0f.jpg", "Production-quality Metal X sample"],
      ["../assets/projects/finefeatures/07-ad8564cf98f7.jpg", "Metal X Fine Features application"],
      ["../assets/projects/finefeatures/08-53c31dd3d713.jpg", "Fine-feature stainless component"],
      ["../assets/projects/finefeatures/09-7f1b24bb1932.jpg", "Detailed sintered metal print"],
      ["../assets/projects/finefeatures/10-78d55f234f78.jpg", "Fine-detail production sample"],
      ["../assets/projects/finefeatures/11-09243e101f22.jpg", "Fine Features marketing sample"]
    ],
    source: "https://peterkellyyy.wixsite.com/peterkelly/finefeatures"
  },
  aerobat: {
    title: "Flapping Wing Robotics Research",
    eyebrow: "Bio-inspired Robotics",
    lede: "Flexible and articulated wing mechanisms for a biomimetic flapping robot inspired by the Egyptian fruit bat.",
    hero: "../assets/projects/aerobat/01-b89eff569b16.png",
    heroAlt: "Aerobat biomimetic flapping robot",
    tags: ["Mechanism design", "Parametric CAD", "PolyJet", "Biomimetics"],
    facts: [
      ["2D + 3D", "Wing mechanism concepts"],
      ["Multi-material", "Rigid and flexible PolyJet parts"],
      ["RA-L", "Published design work"],
      ["Grasshopper", "Parametric linkage tuning"]
    ],
    overview: [
      "Aerobat explores flapping flight as a safer alternative to rigid propellers in environments shared with people. My early work centered on the robot's mechanism design and central structure.",
      "The primary wing concept extends during the downstroke and retracts during the upstroke to produce net positive lift while using flexible, bio-inspired joints."
    ],
    sections: [
      {
        kicker: "Mechanism",
        title: "Turning a biological motion into tunable geometry",
        body: [
          "Working with a postdoctoral researcher, I helped develop the initial flexible wing concept, then built a parametric Grasshopper model to tune link lengths and hinge positions.",
          "The mechanism was transferred to SolidWorks and fabricated with multi-material PolyJet printing, integrating rigid members and flexible hinges of different durometers into one assembly."
        ]
      },
      {
        kicker: "Iteration",
        title: "Adding feathering and evaluating flexible joints",
        body: [
          "Additional concepts introduced wing feathering as well as retraction, improving the kinematics for forward flight. High-speed testing and microscopy exposed fatigue and variability in the flexible hinges.",
          "Those findings informed the later transition toward rigid carbon-fiber mechanisms capable of surviving the cycle speed required for useful lift."
        ]
      }
    ],
    outcome: "The flexible wing work was published in IEEE Robotics & Automation Letters and established the kinematic foundation for later, more durable Aerobat mechanisms.",
    media: [
      ["../assets/projects/aerobat/02-965096a48f1d.png", "Front, side, and isometric views of the flexible wing mechanism"]
    ],
    videos: [
      ["../assets/projects/aerobat/video-1.mp4", "../assets/projects/aerobat/03-7fb96911ab0f.jpg", "Parametric flapping-wing mechanism and trajectories"],
      ["../assets/projects/aerobat/video-2.mp4", "../assets/projects/aerobat/04-0756a0b54445.jpg", "Flexible mechanism actuation and hinge microscopy"]
    ],
    links: [
      ["Read the related mechanism paper", "https://par.nsf.gov/servlets/purl/10194913"]
    ],
    source: "https://peterkellyyy.wixsite.com/peterkelly/aerobat"
  },
  "3dtrails": {
    title: "3DTrails",
    eyebrow: "Digital Fabrication",
    lede: "Topographic trail maps that combine geospatial data, sculpted paths, multicolor printing, and a small direct-to-customer business.",
    hero: "../assets/projects/3dtrails/01-d52419b917b1.jpg",
    heroAlt: "Three-dimensional printed topographic trail map",
    tags: ["Blender", "GIS data", "Multicolor FDM", "Product design"],
    facts: [
      ["$15k+", "First-year revenue"],
      ["6 ft", "Largest custom maps"],
      ["~1 m", "High-resolution terrain data"],
      ["2 stores", "Shopify and Etsy"]
    ],
    overview: [
      "3DTrails began at the intersection of hiking, mapmaking, and 3D printing. The project turns recognizable long-distance trails and custom landscapes into physical topographic maps with contrasting route geometry."
    ],
    sections: [
      {
        kicker: "Workflow",
        title: "From terrain data to a printable landscape",
        body: [
          "The core workflow uses Blender with the Blosm plugin to import OpenStreetMap terrain. GPX trail tracks are rebuilt as smooth 3D Bezier curves and projected onto the terrain surface.",
          "For smaller regions requiring more detail, OpenTopography data and QGIS are used to produce high-resolution GeoTIFF terrain. Bambu X1 printers with AMS units handle the final multicolor fabrication."
        ]
      },
      {
        kicker: "Product",
        title: "Scaling a personal workflow into a small business",
        body: [
          "The process supports both catalog designs and custom commissions. Large maps are divided into aligned printable sections while preserving continuous terrain and route geometry.",
          "Commissions have included museum installations and a five-foot John Muir Trail map created for the John Muir Trail Conservancy."
        ],
        bannerVideo: {
          src: "../assets/projects/3dtrails/gliderroute.webm",
          label: "Glider route topographic map animation"
        }
      }
    ],
    outcome: "The project generated more than $15,000 in its first year and continues to grow through organic search, custom work, and an expanding collection of trail designs.",
    media: [],
    links: [
      ["Visit 3DTrails", "https://3d-trails.com"]
    ],
    source: "https://peterkellyyy.wixsite.com/peterkelly/3dtrails"
  },
  "rotary-rf-pcb-manufacturing": {
    title: "Rotary RF PCB Manufacturing System",
    eyebrow: "Special-Purpose Machinery",
    lede: "A robust coating system for developing high-permeability RF PCB materials at substantially larger scale and lower cost.",
    hero: "../assets/projects/rotary-rf-pcb-manufacturing/rotarypcb.png",
    heroAlt: "Rotary RF PCB coating system CAD rendering",
    tags: ["Machine design", "Thermal control", "Sheet metal", "System integration"],
    facts: [
      ["4.3x", "Previous coating area"],
      ["<50%", "Cost of prior systems"],
      ["3 months", "Design through build"],
      ["200 RPM", "Maximum plate speed"]
    ],
    overview: [
      "At Winchester Technologies, I led the design and fabrication of RF PCB material manufacturing systems used to spray aqueous solutions onto heated, rotating substrates.",
      "The implemented machine increased usable substrate diameter from 12 to 25 inches while making the process easier to operate, service, and reproduce."
    ],
    sections: [
      {
        kicker: "Mechanical System",
        title: "Controlling heat, motion, and chemical delivery",
        body: [
          "A brushless DC motor drives the aluminum process plate through a belt and pulley at speeds up to 200 RPM. Flange bearings stabilize the shaft, while a slip ring routes power and thermocouple signals to a heating pad below the rotating plate.",
          "Adjustable nozzle supports, friction-hinged access panels, handles, and lightweight removable parts improve experimentation and make the system practical for a wide range of operators."
        ]
      },
      {
        kicker: "Fabrication",
        title: "Designed around available manufacturing processes",
        body: [
          "I worked directly with local sheet-metal suppliers to match the design to rolling, milling, waterjet, and welding capabilities. Hardware and assembly access were planned up front to reduce tooling and build time.",
          "Prioritizing commercial components and competitive local fabrication brought the completed system below half the cost of earlier machines."
        ]
      }
    ],
    outcome: "The production system was completed in three months and delivered more than four times the coating area of its predecessor with improved robustness, reliability, and operator access.",
    media: [
      ["../assets/projects/rotary-rf-pcb-manufacturing/02-aa8aa9e70347.png", "Internal rotary-system architecture"],
      ["../assets/projects/rotary-rf-pcb-manufacturing/03-87b8176d6ab2.png", "Mechanical detail of the coating system"],
      ["../assets/projects/rotary-rf-pcb-manufacturing/04-a2972591cfaa.jpg", "Fabricated rotary RF PCB manufacturing system"]
    ],
    source: "https://peterkellyyy.wixsite.com/peterkelly/rotary-rf-pcb-manufacturing"
  },
  "morse-corp": {
    title: "MORSE Corp. Mechanical Engineering Co-op",
    eyebrow: "Mechanical Engineering Co-op",
    lede: "Mechanical design, rapid prototyping, integration, and test support for advanced engineering programs.",
    hero: "../assets/jobs/MORSE Corp/Parafoils.png",
    heroAlt: "Parafoils in flight during MORSE Corp engineering work",
    tags: ["Mechanical design", "Rapid prototyping", "Integration", "Test support"],
    facts: [
      ["Jan-Jul", "2019 co-op term"],
      ["MORSE", "Advanced engineering programs"],
      ["CAD", "Design and documentation support"],
      ["Build/Test", "Prototype hardware support"]
    ],
    overview: [
      "At MORSE Corp, I supported mechanical engineering work for advanced engineering programs that needed practical design execution, rapid prototyping, and hardware iteration.",
      "The role emphasized moving quickly from design intent to physical prototypes while keeping fabrication, integration, and test needs visible throughout the process."
    ],
    overviewMedia: {
      src: "../assets/jobs/MORSE Corp/parafoil vertical.jpg",
      caption: "Parafoil test hardware"
    },
    sections: [
      {
        kicker: "Design Support",
        title: "Turning program needs into buildable hardware",
        body: [
          "I supported CAD development, mechanical documentation, and design updates for prototype hardware. The work required balancing speed with enough structure for parts to be fabricated, assembled, and evaluated by a broader technical team.",
          "Because many tasks were tied to active engineering programs, I focused on clear interfaces, accessible hardware, and practical build paths rather than one-off concept models."
        ]
      },
      {
        kicker: "Prototype Integration",
        title: "Keeping fabrication and testing connected",
        body: [
          "I helped bridge design, rapid prototyping, and test activities so hardware could move through build cycles cleanly. That included thinking through assembly access, supplier constraints, and how prototype parts would be handled during integration.",
          "This co-op also produced the rotary RF PCB manufacturing system featured elsewhere in the portfolio, a larger machine-design project completed during the same term."
        ]
      }
    ],
    outcome: "The co-op strengthened my ability to deliver practical mechanical hardware in fast-moving engineering environments, especially where design, fabrication, and testing had to stay tightly connected.",
    media: [],
    links: [
      ["View rotary RF PCB system", "rotary-rf-pcb-manufacturing.html"]
    ]
  },
  irobot: {
    title: "iRobot R&D Robotics Engineering Co-op",
    eyebrow: "R&D Robotics Engineering Co-op",
    lede: "Prototype mechanism design and test hardware support for consumer robotics research and development.",
    hero: "../assets/jobs/iRobot/s9.webp",
    heroAlt: "iRobot robot vacuum",
    tags: ["Robotics R&D", "Mechanism design", "Prototype hardware", "Testing"],
    facts: [
      ["Jan-Jul", "2018 co-op term"],
      ["R&D", "Consumer robotics"],
      ["Mechanisms", "Prototype design support"],
      ["Testing", "Hardware evaluation"]
    ],
    overview: [
      "At iRobot, I worked in an R&D robotics co-op role supporting prototype mechanisms and test hardware for consumer robot development.",
      "The work sat close to the physical behavior of robotic products: how mechanisms package into compact systems, how prototypes survive repeated testing, and how design changes can be evaluated quickly."
    ],
    sections: [
      {
        kicker: "Prototype Mechanisms",
        title: "Designing for compact robotic products",
        body: [
          "I supported mechanism and prototype hardware development for consumer robotics R&D. The work required attention to packaging, motion, durability, and service access inside small electromechanical assemblies.",
          "Design iteration focused on getting useful hardware into test quickly while preserving enough fidelity to reveal real mechanical behavior."
        ]
      },
      {
        kicker: "Testing",
        title: "Learning from hardware instead of speculation",
        body: [
          "Prototype testing helped expose performance limits, assembly details, and reliability questions that are difficult to resolve in CAD alone.",
          "That experience shaped how I approach later robotics work: build enough to learn, test early, and keep design decisions grounded in physical evidence."
        ]
      }
    ],
    outcome: "The co-op deepened my hands-on robotics development experience and gave me early exposure to R&D cycles for high-volume consumer robotic hardware.",
    media: []
  },
  sikorsky: {
    title: "Sikorsky Propulsion Engineering Co-op",
    eyebrow: "Propulsion Engineering Co-op",
    lede: "Propulsion-system mechanical engineering support through design analysis, documentation, and hardware evaluation.",
    hero: "../assets/jobs/Sikorsky/mh60.jpg",
    heroAlt: "Sikorsky MH-60 helicopter",
    tags: ["Aerospace", "Propulsion systems", "Design analysis", "Documentation"],
    facts: [
      ["Jan-Aug", "2017 co-op term"],
      ["Propulsion", "Aerospace systems"],
      ["Analysis", "Engineering support"],
      ["Hardware", "Evaluation and documentation"]
    ],
    overview: [
      "At Sikorsky Aircraft, I supported propulsion-system mechanical engineering through analysis, documentation, and hardware evaluation work.",
      "The role introduced me to the rigor of aerospace engineering environments, where documentation quality, traceability, and careful review are as important as the mechanical design itself."
    ],
    overviewMedia: {
      src: "../assets/jobs/Sikorsky/stratfordfactory.jpg",
      caption: "Sikorsky Stratford factory"
    },
    sections: [
      {
        kicker: "Engineering Support",
        title: "Working inside a high-rigor aerospace process",
        body: [
          "I supported propulsion engineering tasks that required careful documentation, design review, and coordination with established mechanical systems.",
          "The work reinforced the importance of precise communication, configuration awareness, and disciplined follow-through when engineering decisions affect complex aircraft hardware."
        ]
      },
      {
        kicker: "Hardware Evaluation",
        title: "Connecting analysis to physical systems",
        body: [
          "Hardware evaluation and supporting analysis helped connect engineering documentation to real propulsion-system components and constraints.",
          "That early exposure to large, safety-critical mechanical systems became a useful foundation for later robotics and production-hardware work."
        ]
      }
    ],
    outcome: "The co-op built a foundation in disciplined mechanical engineering practice, especially around documentation, review, and physical hardware evaluation in aerospace systems.",
    media: []
  },
  "asthma-inhaler-assistive-device": {
    title: "Asthma Inhaler Assistive Device",
    eyebrow: "Assistive Mechatronics",
    lede: "A breath-triggered, modular inhaler device designed with a user with cerebral palsy to enable independent positioning and actuation.",
    hero: "../assets/projects/asthma-inhaler-assistive-device/01-6375d08b0e61.png",
    heroAlt: "Asthma inhaler assistive device",
    tags: ["Human-centered design", "Embedded electronics", "3D printing", "Capstone"],
    facts: [
      ["Award", "Most Technically Complete"],
      ["2400 mAh", "Rechargeable battery"],
      ["1+ week", "Target battery life"],
      ["3 modules", "Casing, electronics, handle"]
    ],
    overview: [
      "This capstone project created an assistive device for people with limited dexterity and strength. It positions and actuates a standard asthma inhaler while also tracking remaining doses, sleeping automatically to conserve power, and providing a manual backup for a caregiver.",
      "The system is divided into a sealed upper casing, a removable electronics module, and interchangeable handles that can be adapted to an individual user's needs."
    ],
    sections: [
      {
        kicker: "Breath Actuation",
        title: "Timing the dose mechanically and electronically",
        body: [
          "Compression testing showed that a linear servo could provide the force required to actuate the inhaler more reliably than a solenoid. A flexible printed valve at the servo tip keeps the upper casing sealed until the inhaler fires.",
          "A ported pressure sensor detects inhalation through the mouthpiece. Pressure builds while the casing is sealed, then the opening vents as the medication is released, coordinating airflow and dose timing without a hand-operated button."
        ],
        inlineVideo: {
          src: "../assets/projects/asthma-inhaler-assistive-device/inhalerMechanism.webm",
          label: "Inhaler assistive device mechanism animation",
          caption: "Inhaler actuation mechanism",
          aspectRatio: "960 / 742",
          placement: "aside"
        }
      },
      {
        kicker: "Electronics",
        title: "A modular controller built around the user's routine",
        body: [
          "A custom PCB carries an Arduino Pro Micro, pressure sensing, and capacitive-touch circuitry. An OLED provides instructions and dose count, while an external LED, power switch, charging port, and recessed service button support caregivers.",
          "Copper strips inside the handle wake the device when gripped. A spring contact lets handles be exchanged without reconnecting wires, and sleep modes extend the 2400 mAh battery beyond one week."
        ]
      }
    ],
    outcome: "The project participant independently picked up and actuated the final device using breath control. The design won Northeastern's Most Technically Complete capstone award and tied for Biggest Potential Impact.",
    media: [
      ["../assets/projects/asthma-inhaler-assistive-device/02-04a2a8df6013.png", "Rear view and caregiver controls"],
      ["../assets/projects/asthma-inhaler-assistive-device/03-50163ec88682.png", "Exploded modular architecture"],
      ["../assets/projects/asthma-inhaler-assistive-device/05-77055ef20fae.png", "Section view of the electronics module"],
      ["../assets/projects/asthma-inhaler-assistive-device/06-03771f7ed6ce.png", "Custom PCB layout"],
      ["../assets/projects/asthma-inhaler-assistive-device/07-5522deb01194.png", "Assembled PCB rendering"],
      ["../assets/projects/asthma-inhaler-assistive-device/08-89ee8b55e6ca.png", "External controls for a caregiver"]
    ],
    videos: [
      ["../assets/projects/asthma-inhaler-assistive-device/video-1.mp4", "../assets/projects/asthma-inhaler-assistive-device/09-a2f903f51220.jpg", "Prototype wake, automatic actuation, and dose-counter demonstration"]
    ],
    source: "https://peterkellyyy.wixsite.com/peterkelly/asthma-inhaler-assistive-device"
  },
  "cat-treat-dispenser": {
    title: "Cat Treat Dispenser",
    eyebrow: "Embedded Product Design",
    lede: "A cat-operated dispenser combining proximity sensing, a flexible feed paddle, compact electronics, and a four-part printed enclosure.",
    hero: "../assets/projects/cat-treat-dispenser/01-9f1928ae94a8.png",
    heroAlt: "Cat treat dispenser assembly",
    tags: ["Arduino", "Stepper drive", "Proximity sensing", "Desktop FDM"],
    facts: [
      ["120 mm", "Printer bed constraint"],
      ["4", "Interlocking enclosure sections"],
      ["OLED", "Timer and status interface"],
      ["Minutes", "Time required for the cat to learn it"]
    ],
    overview: [
      "The dispenser was designed for a cat to operate by placing a paw into the chute. A human sets the minimum interval between treats, fills the hinged reservoir, and leaves the interaction to the animal."
    ],
    overviewMedia: {
      type: "video",
      src: "../assets/projects/cat-treat-dispenser/frank.webm",
      caption: "The treat dispenser with my test subject, Frank",
      aspectRatio: "1080 / 1400"
    },
    sections: [
      {
        kicker: "Mechanism",
        title: "Sensing a paw and metering irregular treats",
        body: [
          "A proximity sensor detects the paw and an Arduino Feather commands a stepper motor. A flexible paddle advances a small amount of food while tolerating the irregular shape of different treats.",
          "An OLED and single button provide timer and status controls. The enclosure was split into four sections to fit a 120 by 120 mm print bed and assembled with press fits, threaded features, hardware, and adhesive."
        ]
      },
      {
        kicker: "Field Test",
        title: "A successful user test with one unexpected failure mode",
        body: [
          "The motor noise was initially startling, but the cat learned the interaction within minutes. Once comfortable, he began reaching far enough into the chute to block the falling treats.",
          "A second revision would use a fully vertical outlet that keeps the paw away from the dispensing path."
        ]
      }
    ],
    outcome: "The prototype successfully demonstrated animal-initiated dispensing and surfaced a clear geometric improvement for the next version.",
    media: [
      ["../assets/projects/cat-treat-dispenser/02-2d25a1051368.png", "Treat-dispenser mechanism and enclosure"],
      ["../assets/projects/cat-treat-dispenser/03-1bcdeaef09a2.jpg", "Printed dispenser prototype"],
      ["../assets/projects/cat-treat-dispenser/04-64b220ea38be.jpg", "Flexible dispensing paddle"],
      ["../assets/projects/cat-treat-dispenser/05-691a53347e00.jpg", "Completed cat treat dispenser"]
    ],
    embed: {
      src: "https://player.vimeo.com/video/361144485?title=0&byline=0&portrait=0",
      title: "Cat treat dispenser demonstration"
    },
    source: "https://peterkellyyy.wixsite.com/peterkelly/cat-treat-dispenser"
  },
  "audio-variometer": {
    title: "Audio Variometer",
    eyebrow: "Flight Instrumentation",
    lede: "A compact, rechargeable instrument that converts barometric vertical speed into visual and audible guidance for glider pilots.",
    hero: "../assets/projects/audio-variometer/01-bf35d4888dbe.png",
    heroAlt: "Portable audio variometer with OLED display",
    tags: ["Arduino", "Barometric sensing", "Audio interface", "Compact packaging"],
    facts: [
      ["500 mAh", "Rechargeable LiPo"],
      ["5 samples", "Rolling pressure average"],
      ["USB", "Charging"],
      ["OLED", "Altitude and vertical speed"]
    ],
    overview: [
      "An audio variometer lets a glider pilot keep their eyes outside the cockpit while listening for changes in climb or sink rate. Commercial retrofits can be expensive, so this project explored a compact standalone alternative with both audible guidance and an OLED display."
    ],
    sections: [
      {
        kicker: "Electronics",
        title: "Turning pressure changes into an intuitive sound",
        body: [
          "An Arduino Feather reads an MPL3115A2 pressure sensor and calculates altitude and vertical speed. A rolling average of the five most recent readings reduces noise while preserving useful responsiveness.",
          "Sink produces a steady low tone. Climb produces intermittent beeps that increase in pitch and frequency with vertical speed, allowing the pilot to center rising air without watching the screen."
        ]
      },
      {
        kicker: "Packaging",
        title: "A flight-ready instrument in a small enclosure",
        body: [
          "The pressure sensor, 1.3-inch OLED, speaker, microcontroller, and rechargeable battery were packaged in a compact printed case. The tight arrangement made connector access, speaker clearance, charging, and display visibility part of the mechanical design problem."
        ]
      }
    ],
    outcome: "The prototype detects small altitude changes and served as a practical exercise in embedded programming, sensor filtering, audio feedback, and compact electromechanical packaging.",
    media: [
      ["../assets/projects/audio-variometer/02-7cc6fa59fd2a.png", "Audio variometer enclosure and display"],
      ["../assets/projects/audio-variometer/03-e5a00260916c.jpg", "Breadboard electronics prototype"],
      ["../assets/projects/audio-variometer/04-8f5016c8c01b.jpg", "Completed portable variometer"]
    ],
    embed: {
      src: "https://player.vimeo.com/video/343786780?title=0&byline=0&portrait=0",
      title: "Audio and visual variometer demonstration"
    },
    source: "https://peterkellyyy.wixsite.com/peterkelly/audio-variometer"
  }
};

const root = document.querySelector("[data-project-root]");
const key = document.body.dataset.project;
const project = projectCatalog[key];

const el = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
};

const addParagraphs = (container, paragraphs) => {
  paragraphs.forEach((copy) => container.append(el("p", "", copy)));
};

const applyMediaPresentation = (video, media = {}) => {
  if (media.aspectRatio) video.style.setProperty("--media-aspect", media.aspectRatio);
  if (media.background) video.style.setProperty("--media-bg", media.background);
};

const playOnceOnView = (video) => {
  if (!("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    if (!entry?.isIntersecting || video.dataset.playedOnce === "true") return;
    video.dataset.playedOnce = "true";
    video.play().catch(() => {});
    observer.disconnect();
  }, { threshold: 0.42 });
  observer.observe(video);
};

const createLink = ([label, href], className = "project-action") => {
  const link = el("a", className, label);
  link.href = href;
  link.target = "_blank";
  link.rel = "noreferrer";
  return link;
};

const moreProjectCards = {
  fx10: {
    href: "fx10.html",
    thumb: "../assets/projects/fx10/fx10 thumbnail.png",
    thumbClass: "portfolio-thumb portfolio-thumb-cover",
    alt: "Markforged FX10 metal printhead thumbnail",
    meta: "Product Development",
    date: "Jun 2022 - Aug 2024",
    title: "Markforged FX10 Metal Printhead",
    summary: "Next-generation swappable metal printhead developed from initial R&D through EVT.",
    company: "Markforged"
  },
  px100: {
    href: "px100.html",
    thumb: "../assets/projects/px100/PX100-Webpage-Header-Image-Full-Printer-2364x2364.png",
    thumbClass: "portfolio-thumb portfolio-thumb-cover",
    alt: "Markforged PX100 binder jet printer",
    date: "Jan 2024 - Aug 2024",
    title: "Markforged PX100",
    summary: "US lab buildout, process knowledge transfer, commissioning, and system validation.",
    company: "Markforged"
  },
  finefeatures: {
    href: "finefeatures.html",
    thumb: "../assets/projects/finefeatures/04-665a4d8e0c6c.png",
    thumbClass: "portfolio-thumb portfolio-thumb-cover",
    alt: "Metal X Fine Features sample parts",
    date: "Oct 2021 - Jul 2023",
    title: "Metal X Fine Features",
    summary: "Qualified copper and stainless profiles for finer, stronger, more accurate metal parts.",
    company: "Markforged"
  },
  "co-parts": {
    href: "co-parts.html",
    thumb: "../assets/projects/co-parts/01-e66ed0c40c37.jpg",
    thumbClass: "portfolio-thumb portfolio-thumb-cover",
    alt: "Continuous-fiber reinforced co-part assembly",
    meta: "Published Research",
    date: "Jan 2023 - May 2023",
    title: "Continuous-Fiber Co-parts",
    summary: "Interlocking printed components optimized for reinforcement across multiple load planes.",
    company: "Markforged"
  },
  harpy: {
    href: "harpy.html",
    thumb: "../assets/projects/harpy/harpy leg.png",
    thumbClass: "harpy-thumb",
    alt: "Harpy leg actuator assembly",
    meta: "Robotics Research",
    date: "May 2020 - May 2021",
    title: "Legged Robotics Research",
    summary: "Lightweight robotic platform for thruster-assisted locomotion and reduced-gravity research.",
    company: "NEU SiliconSynapse Lab"
  },
  aerobat: {
    href: "aerobat.html",
    thumb: "../assets/projects/aerobat/01-b89eff569b16.png",
    thumbClass: "portfolio-thumb portfolio-thumb-cover",
    alt: "Aerobat biomimetic flapping robot",
    meta: "Bio-inspired Robotics",
    date: "Jan 2020 - Sep 2020",
    title: "Flapping Wing Robotics Research",
    summary: "Parametric, flexible wing mechanisms inspired by the flight of fruit bats.",
    company: "NEU SiliconSynapse Lab"
  },
  "rotary-rf-pcb-manufacturing": {
    href: "rotary-rf-pcb-manufacturing.html",
    thumb: "../assets/projects/rotary-rf-pcb-manufacturing/rotarypcb.png",
    thumbClass: "portfolio-thumb portfolio-thumb-cover",
    alt: "Rotary RF PCB material coating system",
    date: "Nov 2018 - Apr 2019",
    title: "Rotary RF PCB System",
    summary: "Large-format heated coating machine delivered at less than half the prior-system cost.",
    company: "MORSE Corp"
  },
  "morse-corp": {
    href: "morse-corp.html",
    thumb: "../assets/jobs/MORSE Corp/Parafoils.png",
    thumbClass: "portfolio-thumb portfolio-thumb-cover",
    alt: "Parafoils in flight during MORSE Corp engineering work",
    date: "Jan 2019 - Jul 2019",
    title: "MORSE Corp. Mechanical Engineering Co-op",
    summary: "Mechanical design, prototyping, integration, and testing support for advanced engineering programs.",
    company: "MORSE Corp"
  },
  irobot: {
    href: "irobot.html",
    thumb: "../assets/jobs/iRobot/s9.webp",
    thumbClass: "portfolio-thumb portfolio-thumb-cover",
    alt: "iRobot robot vacuum",
    date: "Jan 2018 - Jul 2018",
    title: "iRobot R&D Robotics Engineering Co-op",
    summary: "Prototype mechanisms and test hardware for consumer robotics R&D.",
    company: "iRobot"
  },
  sikorsky: {
    href: "sikorsky.html",
    thumb: "../assets/jobs/Sikorsky/mh60.jpg",
    thumbClass: "portfolio-thumb portfolio-thumb-cover",
    alt: "Sikorsky MH-60 helicopter",
    date: "Jan 2017 - Aug 2017",
    title: "Sikorsky Propulsion Engineering Co-op",
    summary: "Propulsion-system engineering support across analysis, documentation, and hardware evaluation.",
    company: "Sikorsky Aircraft"
  },
  "asthma-inhaler-assistive-device": {
    href: "asthma-inhaler-assistive-device.html",
    thumb: "../assets/projects/asthma-inhaler-assistive-device/01-6375d08b0e61.png",
    thumbClass: "portfolio-thumb",
    alt: "Breath-triggered asthma inhaler assistive device",
    meta: "Assistive Mechatronics",
    date: "Sep 2019 - Dec 2019",
    title: "Inhaler Assistive Device",
    summary: "Award-winning breath-triggered device designed for users with limited motor ability.",
    company: "Northeastern University"
  },
  "3dtrails": {
    href: "3dtrails.html",
    thumb: "../assets/projects/3dtrails/angledScene3sq.png",
    thumbClass: "portfolio-thumb portfolio-thumb-cover",
    alt: "Printed topographic trail map",
    meta: "Digital Fabrication",
    date: "Dec 2022 - Present",
    title: "3DTrails",
    summary: "Geospatial data transformed into multicolor printed trail maps and custom installations.",
    company: "Personal Project"
  },
  "audio-variometer": {
    href: "audio-variometer.html",
    thumb: "../assets/projects/audio-variometer/01-bf35d4888dbe.png",
    thumbClass: "portfolio-thumb",
    alt: "Portable audio variometer",
    date: "Jan 2019 - Mar 2019",
    title: "Audio Variometer",
    summary: "Compact barometric instrument translating climb and sink rate into audible guidance.",
    company: "Personal Project"
  },
  "cat-treat-dispenser": {
    href: "cat-treat-dispenser.html",
    thumb: "../assets/projects/cat-treat-dispenser/treatdispenser.jpg",
    thumbClass: "portfolio-thumb",
    alt: "Cat-operated treat dispenser",
    date: "Jun 2019 - Jul 2019",
    title: "Cat Treat Dispenser",
    summary: "Animal-operated dispenser with sensing, stepper actuation, and a compact printed enclosure.",
    company: "Personal Project"
  }
};

const moreProjectPriority = [
  "fx10",
  "px100",
  "co-parts",
  "3dtrails",
  "finefeatures",
  "harpy",
  "aerobat",
  "asthma-inhaler-assistive-device",
  "cat-treat-dispenser",
  "morse-corp",
  "audio-variometer",
  "rotary-rf-pcb-manufacturing",
  "irobot",
  "sikorsky"
];

const createMoreProjectCard = (card) => {
  const link = el("a", "project-link more-project-card");
  link.href = card.href;
  const figure = el("figure", `thumb ${card.thumbClass}`.trim());
  figure.setAttribute("aria-label", `${card.title} thumbnail`);
  const image = el("img");
  image.src = card.thumb;
  image.alt = card.alt;
  image.loading = "lazy";
  figure.append(image);
  link.append(
    figure,
    el("p", "project-date", card.date),
    el("h3", "project-title", card.title),
    el("p", "project-summary", card.summary),
    el("span", "project-company", card.company)
  );
  return link;
};

const createReturnProjectsCard = () => {
  const link = el("a", "project-link more-project-return");
  link.href = "../index.html#portfolio";
  const icon = el("img", "more-project-return-icon");
  icon.src = "../icons/circle-arrow-right.svg";
  icon.alt = "";
  icon.setAttribute("aria-hidden", "true");
  link.append(
    icon,
    el("h3", "project-title", "Return to Portfolio"),
    el("p", "project-summary", "Head back to the full portfolio grid.")
  );
  return link;
};

const renderMoreProjects = () => {
  const section = el("section", "fx10-section more-projects-section");
  section.append(el("p", "fx10-section-kicker", "More Projects"));
  const grid = el("div", "project-grid more-projects-grid");
  moreProjectPriority
    .filter((projectKey) => projectKey !== key)
    .slice(0, 3)
    .forEach((projectKey) => grid.append(createMoreProjectCard(moreProjectCards[projectKey])));
  grid.append(createReturnProjectsCard());
  section.append(grid);
  root.append(section);
};

const renderFx10CaseStudy = () => {
  document.title = "FX10 Metal Print Head | Peter Kelly";
  document.body.classList.add("fx10-case-study");

  const hero = el("section", "fx10-hero");
  const heroCopy = el("div", "fx10-hero-copy");
  heroCopy.append(
    el("p", "fx10-eyebrow", "Markforged"),
    el("h1", "", "FX10 Metal Print Head"),
    el("p", "fx10-lede", "Next-generation metal printhead enabling high-performance 17-4 PH stainless steel and copper printing for the Markforged FX10 platform.")
  );

  const tags = el("div", "fx10-tags");
  ["Mechanical Design", "Additive Manufacturing", "Electromechanical"].forEach((tag) => tags.append(el("span", "", tag)));
  heroCopy.append(tags);

  const stats = el("div", "fx10-stats");
  [
    ["12+", "Months Development"],
    ["2", "Materials Supported"],
    ["Modular", "Swappable Architecture"],
    ["EVT", "May 2024"]
  ].forEach(([value, label]) => {
    const stat = el("div", "fx10-stat");
    stat.append(el("span", "fx10-stat-icon", ""), el("strong", "", value), el("small", "", label));
    stats.append(stat);
  });
  heroCopy.append(stats);

  const heroMedia = el("div", `fx10-hero-media ${project.heroClass || ""}`.trim());
  const heroImage = el("img");
  heroImage.src = project.hero;
  heroImage.alt = project.heroAlt;
  heroImage.loading = "eager";
  heroMedia.append(heroImage);
  hero.append(heroCopy, heroMedia);
  root.append(hero);

  const overview = el("section", "fx10-overview-section fx10-section");
  const overviewCopy = el("div", "fx10-overview-copy");
  overviewCopy.append(el("p", "fx10-section-kicker", "Overview"));

  const overviewIntro = el("p", "", "From the beginning of the program, the FX10 was conceived as a modular additive manufacturing platform capable of printing both composite and metal filaments. Because those material systems place distinct demands on thermal control, extruder requirements, filament routing, and flow behavior, the printhead required a swappable architecture.");

  const overviewDevelopment = el("p");
  overviewDevelopment.append(
    document.createTextNode("Beginning in June 2022, I leveraged my prior Metal X and "),
    Object.assign(el("a", "", "fine-feature process development"), { href: "finefeatures.html" }),
    document.createTextNode(" experience to lead the initial R&D of the FX10 metal printhead and carry the architecture through engineering validation. I owned the printhead architecture from early feasibility through EVT, translating process and material requirements into mechanical design decisions across the heater block, heat sink, extruder, and filament routing system.")
  );

  overviewCopy.append(
    overviewIntro,
    overviewDevelopment,
    el("p", "", "As the program matured, I developed and released subsystem designs, part drawings, manufacturing fixtures, and work instructions to support builds and validation. I worked closely with electrical, software, materials, manufacturing, and print test teams to integrate the metal printhead into the FX10 platform, debug system-level issues, and advance the design from exploratory R&D into an production ready architecture.")
  );

  const glance = el("figure", "fx10-glance");
  const glanceImage = el("img");
  glanceImage.src = "../assets/projects/fx10/print head.png";
  glanceImage.alt = "Markforged FX10 metal printhead";
  glanceImage.loading = "lazy";
  glance.append(glanceImage, el("figcaption", "", "FX10 metal print head"));
  overview.append(overviewCopy, glance);
  root.append(overview);

  const launchVideo = el("section", "fx10-section fx10-launch-video-section");
  launchVideo.append(el("p", "fx10-section-kicker", "Launch Video"));
  const overviewVideo = el("figure", "fx10-overview-video");
  const iframe = el("iframe");
  const embedUrl = new URL(project.embed.src);
  embedUrl.searchParams.set("origin", window.location.origin);
  iframe.src = embedUrl.href;
  iframe.title = "YouTube video player";
  iframe.width = "560";
  iframe.height = "315";
  iframe.loading = "lazy";
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;
  overviewVideo.append(iframe, el("figcaption", "", "FX10 metal print head shipping announcement video"));
  launchVideo.append(overviewVideo);
  root.append(launchVideo);

  const design = el("section", "fx10-section fx10-design-section");
  design.append(el("p", "fx10-section-kicker", "Design"));
  const designCopy = el("div", "fx10-design-copy");
  designCopy.append(
    el("p", "", "Before starting to lay out the architecture of Markforged's next-gen metal printhead, I set out to answer three major questions:"),
    el("p", "", "Whether a heatsink Peltier cooler is required with Markforged \"V2\" metal filaments"),
    el("p", "", "Required hot zone length for 2x overall print speed"),
    el("p", "", "If unit-to-unit variation could be limited with a new extruder design and calibration procedure"),
    el("p", "", "Using a combination of print testing with stock Metal X print heads, and modified \"Frankenstein\" print heads, I answered all three questions, giving the engineering team the necessary confidence to proceed with the first print head prototype."),
    el("p", "", "After the R&D phase, I laid out the initial architecture of the print head and collaborated with an electrical engineer to design the first prototype for internal testing, owning the 3D CAD and 2D part drawings. During the build process, I also developed the manufacturing work instructions and documented design issues."),
    el("p", "", "As the metal print head team grew and the design later went through a second prototype before proceeding to the EVT design and test phase, I continued to lead the design of various subsystems, create 2D part and assembly drawings, and own validation testing deliverables.")
  );
  design.append(designCopy);
  const highlightGrid = el("div", "fx10-highlight-grid");
  [
    ["../assets/projects/fx10/01-b94fac15ce02.png", "FX10 Metal Print Head", "Compact modular architecture with integrated cooling and electronics enclosure."],
    ["../assets/projects/fx10/02-def065ceee78.png", "Lower Shroud and Top Cover Removed", "Internal architecture revealing PCB, heat sink stack, quick-disconnects, and modular subassemblies for serviceability."],
    ["../assets/projects/fx10/03-7b0f59b15173.png", "Front Plane PCB Removed", "Drive system, filament path components, and structural framework exposed for design review."]
  ].forEach(([src, title, copy]) => {
    const card = el("article", "fx10-highlight-card");
    const image = el("img");
    image.src = src;
    image.alt = title;
    image.loading = "lazy";
    card.append(image, el("h3", "", title), el("p", "", copy));
    highlightGrid.append(card);
  });
  design.append(highlightGrid);
  root.append(design);

  const processVideoSection = el("section", "fx10-section fx10-process-video-section");
  const processVideo = el("video", "fx10-process-video");
  processVideo.src = "../assets/projects/fx10/FX10-metal-process.webm";
  processVideo.autoplay = true;
  processVideo.loop = true;
  processVideo.muted = true;
  processVideo.playsInline = true;
  processVideo.preload = "metadata";
  processVideo.setAttribute("aria-label", "FX10 metal printing process video");
  processVideoSection.append(processVideo);
  root.append(processVideoSection);

  const split = el("section", "fx10-split fx10-section");
  const challenges = el("div", "fx10-list-panel");
  challenges.append(el("p", "fx10-section-kicker", "Key Challenges"));
  [
    ["Material Differences", "Balanced thermal, mechanical, and flow requirements across composite and metal printing."],
    ["Swappable Architecture", "Developed a repeatable docking and electrical interface to enable quick head swaps."],
    ["Thermal Management", "Engineered heat dissipation for consistent performance with high-temperature metals."],
    ["Serviceability", "Designed modular subassemblies for rapid maintenance and replacement."]
  ].forEach(([title, copy]) => {
    const item = el("div", "fx10-list-item");
    item.append(el("span", "fx10-list-icon", ""), el("h3", "", title), el("p", "", copy));
    challenges.append(item);
  });

  const impact = el("div", "fx10-list-panel");
  impact.append(el("p", "fx10-section-kicker", "Impact"));
  [
    "Enabled metal printing on the FX10 platform with 17-4 PH stainless steel and copper.",
    "Delivered next-generation printhead hardware to EVT in May 2024.",
    "Laid groundwork for future material expansion and performance improvements.",
    "Strengthened Markforged's industrial metal additive manufacturing platform."
  ].forEach((copy) => {
    const item = el("div", "fx10-impact-item");
    item.append(el("span", "fx10-check-icon", ""), el("p", "", copy));
    impact.append(item);
  });
  split.append(challenges, impact);
  root.append(split);

  const changeoverBanner = el("section", "fx10-image-banner");
  const changeoverImage = el("img");
  changeoverImage.src = "../assets/projects/fx10/FX10-Printhead-Changeover-Closeup.jpg";
  changeoverImage.alt = "FX10 printhead changeover closeup";
  changeoverImage.loading = "lazy";
  changeoverBanner.append(changeoverImage);
  root.append(changeoverBanner);

  const outcome = el("section", "fx10-section fx10-outcome-section");
  outcome.append(
    el("p", "fx10-section-kicker", "Outcome"),
    el("p", "", "This work helped establish the FX10 as a true multi-material platform rather than a single-material printer, enabling the same machine architecture to support both continuous-fiber composite printing and metal filament printing through a robust, serviceable, and swappable printhead system.")
  );
  root.append(outcome);
  renderMoreProjects();
};

const createCaseStudyImage = (src, alt, caption, className = "") => {
  const figure = el("figure", `co-parts-figure ${className}`.trim());
  const image = el("img");
  image.src = src;
  image.alt = alt;
  image.loading = "lazy";
  figure.append(image, el("figcaption", "", caption));
  return figure;
};

const createYoutubeFigure = (embed, caption, className = "") => {
  const figure = el("figure", `fx10-overview-video ${className}`.trim());
  const iframe = el("iframe");
  const embedUrl = new URL(embed.src);
  embedUrl.searchParams.set("origin", window.location.origin);
  iframe.src = embedUrl.href;
  iframe.title = embed.title;
  iframe.loading = "lazy";
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;
  figure.append(iframe, el("figcaption", "", caption || embed.title));
  return figure;
};

const renderCoPartsCaseStudy = () => {
  document.title = `${project.title} | Peter Kelly`;
  document.body.classList.add("fx10-case-study");
  root.closest(".project-main")?.classList.add("fx10-project-main");

  const hero = el("section", "fx10-hero");
  const heroCopy = el("div", "fx10-hero-copy");
  heroCopy.append(
    el("p", "fx10-eyebrow", project.eyebrow),
    el("h1", "", project.title),
    el("p", "fx10-lede", project.lede)
  );
  const tags = el("div", "fx10-tags");
  project.tags.forEach((tag) => tags.append(el("span", "", tag)));
  heroCopy.append(tags);
  const stats = el("div", "fx10-stats");
  project.facts.forEach(([value, label]) => {
    const stat = el("div", "fx10-stat");
    stat.append(el("span", "fx10-stat-icon", ""), el("strong", "", value), el("small", "", label));
    stats.append(stat);
  });
  heroCopy.append(stats);

  const heroMedia = el("div", `fx10-hero-media ${project.heroClass || ""}`.trim());
  const heroImage = el("img");
  heroImage.src = project.hero;
  heroImage.alt = project.heroAlt;
  heroImage.loading = "eager";
  heroMedia.append(heroImage);
  hero.append(heroCopy, heroMedia);
  root.append(hero);

  const overview = el("section", "fx10-overview-section fx10-section co-parts-overview-section");
  const overviewCopy = el("div", "fx10-overview-copy");
  overviewCopy.append(el("p", "fx10-section-kicker", "Overview"));
  addParagraphs(overviewCopy, project.overview);
  overview.append(
    overviewCopy,
    createCaseStudyImage(
      "../assets/projects/co-parts/separate parts.jpg",
      "Separate printed co-parts before assembly",
      "Example co-parts",
      "co-parts-overview-image"
    ),
    createYoutubeFigure(project.embed, project.embed.title, "co-parts-overview-video")
  );
  root.append(overview);

  const process = el("section", "fx10-section co-parts-process-section");
  const processCopy = el("div", "fx10-design-copy fx10-generic-design-copy co-parts-process-copy");
  processCopy.append(el("p", "fx10-section-kicker", "Process"));
  addParagraphs(processCopy, project.sections[0].body);
  process.append(
    processCopy,
    createCaseStudyImage(
      "../assets/projects/co-parts/load case.png",
      "Mounting plate load case with fixed bolts and applied pin force",
      "Load case of the mounting plate example part, where the blue bolts represent how it is fixed to the ground and the green pin represents where force is applied",
      "co-parts-load-case"
    ),
    createCaseStudyImage(
      "../assets/projects/co-parts/co-part assembly.png",
      "Monolithic mounting plate, assembled co-part, and co-part assembly strategy",
      "(a) Monolithic plastic mounting plate part (b) assembled co-part (c) assembly strategy",
      "co-parts-assembly"
    )
  );
  root.append(process);

  const outcome = el("section", "fx10-section co-parts-outcome-section");
  const outcomeCopy = el("div", "fx10-outcome-section co-parts-outcome-copy");
  outcomeCopy.append(el("p", "fx10-section-kicker", "Outcome"), el("p", "", project.outcome));
  const actions = el("div", "project-actions");
  project.links?.forEach((link) => actions.append(createLink(link)));
  outcomeCopy.append(actions);
  outcome.append(
    outcomeCopy,
    createCaseStudyImage(
      "../assets/projects/co-parts/co-part load.png",
      "Co-part load testing results and failed samples",
      "(a) Load vs extension curves for the control, single plane fiber and continuous carbon fiber reinforced co-parts, photographs of (b) monolithicplastic mounting plate after failure, which delaminated between layers in areas of low cross-sectional area, (c) CFR Orientation 1 mounting plate afterfailure, which cracked in two locations along layer lines, (d) continuous carbon fiber reinforced co-part mounting plate after failure, where one of the co-parts pulled through the other",
      "co-parts-load-results"
    )
  );
  root.append(outcome);
  renderMoreProjects();
};

const renderStandardProject = () => {
  document.title = `${project.title} | Peter Kelly`;
  document.body.classList.add("fx10-case-study");
  root.closest(".project-main")?.classList.add("fx10-project-main");

  const hero = el("section", "fx10-hero");
  const heroCopy = el("div", "fx10-hero-copy");
  heroCopy.append(
    el("p", "fx10-eyebrow", project.eyebrow),
    el("h1", "", project.title),
    el("p", "fx10-lede", project.lede)
  );

  const tags = el("div", "fx10-tags");
  project.tags?.forEach((tag) => tags.append(el("span", "", tag)));
  heroCopy.append(tags);

  const stats = el("div", "fx10-stats");
  project.facts?.forEach(([value, label]) => {
    const stat = el("div", "fx10-stat");
    stat.append(el("span", "fx10-stat-icon", ""), el("strong", "", value), el("small", "", label));
    stats.append(stat);
  });
  heroCopy.append(stats);

  const heroMedia = el("div", `fx10-hero-media ${project.heroClass || ""}`.trim());
  const heroImage = el("img");
  heroImage.src = project.hero;
  heroImage.alt = project.heroAlt;
  heroImage.loading = "eager";
  heroMedia.append(heroImage);
  hero.append(heroCopy, heroMedia);
  root.append(hero);

  const overview = el("section", "fx10-overview-section fx10-section");
  const overviewCopy = el("div", "fx10-overview-copy");
  overviewCopy.append(el("p", "fx10-section-kicker", "Overview"));
  addParagraphs(overviewCopy, project.overview || []);
  overview.append(overviewCopy);

  if (project.overviewMedia) {
    const glance = el("figure", "fx10-glance");
    if (project.overviewMedia.type === "video") {
      const video = el("video", "fx10-glance-video");
      video.src = project.overviewMedia.src;
      video.autoplay = project.overviewMedia.autoplay !== false && !project.overviewMedia.playOnceOnView;
      video.loop = project.overviewMedia.loop !== false && !project.overviewMedia.playOnceOnView;
      video.muted = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.setAttribute("aria-label", project.overviewMedia.caption || "");
      applyMediaPresentation(video, project.overviewMedia);
      glance.append(video);
      if (project.overviewMedia.playOnceOnView) playOnceOnView(video);
    } else {
      const glanceImage = el("img");
      glanceImage.src = project.overviewMedia.src;
      glanceImage.alt = project.overviewMedia.caption || "";
      glanceImage.loading = "lazy";
      glance.append(glanceImage);
    }
    if (project.overviewMedia.caption) glance.append(el("figcaption", "", project.overviewMedia.caption));
    overview.append(glance);
  } else if (project.media?.[0]) {
    const glance = el("figure", "fx10-glance");
    const glanceImage = el("img");
    glanceImage.src = project.media[0][0];
    glanceImage.alt = project.media[0][1];
    glanceImage.loading = "lazy";
    glance.append(glanceImage, el("figcaption", "", project.media[0][1]));
    overview.append(glance);
  }
  root.append(overview);

  project.sections?.forEach((section) => {
    const design = el("section", "fx10-section fx10-design-section");
    design.append(el("p", "fx10-section-kicker", section.kicker));
    const designCopy = el("div", "fx10-design-copy fx10-generic-design-copy");
    if (section.title) designCopy.append(el("h2", "", section.title));
    addParagraphs(designCopy, section.body || []);
    design.append(designCopy);
    if (section.figure) {
      const figure = el("figure", "fx10-overview-video standard-section-figure");
      const image = el("img");
      image.src = section.figure.src;
      image.alt = section.figure.alt || section.figure.caption || "";
      image.loading = "lazy";
      figure.append(image);
      if (section.figure.caption) figure.append(el("figcaption", "", section.figure.caption));
      design.append(figure);
    }
    if (section.inlineVideo) {
      const figure = el("figure", "fx10-overview-video standard-section-video");
      const video = el("video");
      video.src = section.inlineVideo.src;
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.setAttribute("aria-label", section.inlineVideo.label || section.inlineVideo.caption || "");
      applyMediaPresentation(video, section.inlineVideo);
      figure.append(video);
      if (section.inlineVideo.caption) figure.append(el("figcaption", "", section.inlineVideo.caption));
      if (section.inlineVideo.placement === "aside") {
        design.classList.add("fx10-design-section-with-media");
        design.append(figure);
      } else {
        design.append(figure);
      }
    }
    root.append(design);

    if (section.bannerVideo) {
      const videoBanner = el("section", "fx10-image-banner standard-video-banner");
      const video = el("video");
      video.src = section.bannerVideo.src;
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.setAttribute("aria-label", section.bannerVideo.label || "");
      videoBanner.append(video);
      root.append(videoBanner);
    }
  });

  if (project.media?.length) {
    const gallery = el("section", "fx10-section fx10-gallery-section");
    gallery.append(el("p", "fx10-section-kicker", project.galleryLabel || "Design"));
    const highlightGrid = el("div", "fx10-highlight-grid");
    project.media.forEach(([src, caption]) => {
      const card = el("article", "fx10-highlight-card");
      const image = el("img");
      image.src = src;
      image.alt = caption;
      image.loading = "lazy";
      card.append(image, el("h3", "", caption));
      highlightGrid.append(card);
    });
    gallery.append(highlightGrid);
    root.append(gallery);
  }

  if (project.videos?.length || project.embed) {
    const videoSection = el("section", "fx10-section fx10-launch-video-section");
    videoSection.append(el("p", "fx10-section-kicker", "In Motion"));

    project.videos?.forEach(([src, poster, caption]) => {
      const figure = el("figure", "fx10-overview-video");
      const video = el("video");
      video.controls = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.poster = poster;
      const source = el("source");
      source.src = src;
      source.type = "video/mp4";
      video.append(source);
      figure.append(video, el("figcaption", "", caption));
      videoSection.append(figure);
    });

    if (project.embed) {
      const figure = el("figure", "fx10-overview-video");
      const iframe = el("iframe");
      const embedUrl = new URL(project.embed.src);
      embedUrl.searchParams.set("origin", window.location.origin);
      iframe.src = embedUrl.href;
      iframe.title = project.embed.title;
      iframe.loading = "lazy";
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      figure.append(iframe, el("figcaption", "", project.embed.title));
      videoSection.append(figure);
    }

    root.append(videoSection);
  }

  const outcome = el("section", "fx10-section fx10-outcome-section");
  outcome.append(el("p", "fx10-section-kicker", "Outcome"), el("p", "", project.outcome));
  if (project.links?.length || project.source) {
    const actions = el("div", "project-actions");
    project.links?.forEach((link) => actions.append(createLink(link)));
    if (project.source) actions.append(createLink(["View original page", project.source], "project-action project-action-secondary"));
    outcome.append(actions);
  }
  root.append(outcome);
  renderMoreProjects();
};

if (!root || !project) {
  if (root) root.append(el("p", "lede", "Portfolio item data could not be loaded."));
} else if (key === "fx10") {
  renderFx10CaseStudy();
} else if (key === "co-parts") {
  renderCoPartsCaseStudy();
} else {
  renderStandardProject();
}
