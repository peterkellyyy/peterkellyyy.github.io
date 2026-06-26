const projectCatalog = {
  fx10: {
    title: "Markforged FX10",
    eyebrow: "Production Additive Manufacturing",
    lede: "R&D and product development for the FX10's swappable metal printhead, from initial feasibility work through engineering validation.",
    hero: "../assets/projects/fx10/01-b94fac15ce02.png",
    heroAlt: "Markforged FX10 metal printhead",
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
      "Continuous fiber can dramatically increase the in-plane strength of a printed part, but conventional FFF still leaves the build direction limited by the parent polymer and interlayer bonding.",
      "The co-part methodology separates features with conflicting load planes into interlocking components. Each component is printed in the orientation best suited to its own loads, then assembled into one functional part."
    ],
    sections: [
      {
        kicker: "Demonstrator",
        title: "Reinforcing a multi-plane mounting plate",
        body: [
          "A tent-pole mounting plate provided a clear test case: four bolts secure the plate while a central pin applies load in a direction that cannot be optimally reinforced with one continuous-fiber print orientation.",
          "The geometry was separated into two co-parts using Boolean subtraction. Both were printed with continuous carbon fiber aligned to their primary loads and assembled with an arbor press."
        ]
      },
      {
        kicker: "Communication",
        title: "Turning research into a repeatable design method",
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
  finefeatures: {
    title: "Metal X Fine Features",
    eyebrow: "Metal Process Development",
    lede: "Production print settings for finer detail, improved accuracy, smoother surfaces, and stronger metal parts.",
    hero: "../assets/projects/finefeatures/01-a4f12fd4b466.jpg",
    heroAlt: "Collection of stainless-steel parts printed with Metal X Fine Features settings",
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
  "husky-carbon": {
    title: "Husky Carbon",
    eyebrow: "Multi-modal Robotics Research",
    lede: "A lightweight legged platform designed to morph into a quadrotor configuration for combined ground and aerial mobility.",
    hero: "../assets/projects/husky-carbon/01-0be0e19d0e5e.png",
    heroAlt: "Husky Carbon lightweight quadruped robot",
    tags: ["Legged robotics", "Carbon composites", "Actuator reliability", "Electrical integration"],
    facts: [
      ["4 legs", "Morphing robot platform"],
      ["CF", "Tubes, plates, and embedded structure"],
      ["PCB", "Integrated motor-drive connections"],
      ["Mobile", "Indoor and outdoor gantry"]
    ],
    overview: [
      "Husky Carbon is a research platform for a multi-modal legged-aerial robot, combining robust ground locomotion with a concept for morphing into a quadrotor.",
      "The structure minimizes weight through carbon-fiber tubes and plates, including composite members embedded directly into printed parts to reduce metal fasteners."
    ],
    sections: [
      {
        kicker: "System Improvements",
        title: "Making an experimental robot easier to operate",
        body: [
          "I redesigned the electrical architecture around a PCB that mounts directly to the motor drives and consolidates encoder, EtherCAT, and USB-debug connections.",
          "I also revised machined actuator components to reduce wear and improve reliability, limiting downtime caused by maintenance."
        ]
      },
      {
        kicker: "Test Infrastructure",
        title: "A gantry that could leave the lab",
        body: [
          "A lightweight aluminum support gantry was designed and fabricated for both benchtop testing and mobile use. It can clamp to a table or mount on wheels, allowing the robot to be tested indoors or outside without changing the support architecture."
        ]
      }
    ],
    outcome: "The mechanical and electrical updates increased reliability and simplified debugging while preserving the low mass required by the multi-modal research concept.",
    media: [
      ["../assets/projects/husky-carbon/02-ec01a23d3dee.jpg", "Reverse view of the Husky Carbon platform"],
      ["../assets/projects/husky-carbon/04-a8f5de47d6dc.png", "Motor-drive interface PCB used on Husky Carbon and Harpy"]
    ],
    videos: [
      ["../assets/projects/husky-carbon/video-1.mp4", "../assets/projects/husky-carbon/03-370191220621.jpg", "Husky Carbon hardware demonstration"]
    ],
    links: [
      ["Read the related paper", "https://arxiv.org/pdf/2104.05834"]
    ],
    source: "https://peterkellyyy.wixsite.com/peterkelly/husky-carbon"
  },
  aerobat: {
    title: "Aerobat",
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
          "Projects have included museum installations and a five-foot John Muir Trail map created for the John Muir Trail Conservancy."
        ]
      }
    ],
    outcome: "The project generated more than $15,000 in its first year and continues to grow through organic search, custom work, and an expanding collection of trail designs.",
    media: [
      ["../assets/projects/3dtrails/02-173eafead229.png", "Appalachian Trail topographic map"],
      ["../assets/projects/3dtrails/03-698510bfbc1b.png", "Tahoe Rim Trail map"],
      ["../assets/projects/3dtrails/04-5bbdf47a5b0a.png", "Close view of multicolor terrain and route detail"],
      ["../assets/projects/3dtrails/05-f30d0653a598.png", "Printed map detail"],
      ["../assets/projects/3dtrails/06-bdaa68104368.png", "Large-format trail-map installation"],
      ["../assets/projects/3dtrails/07-9196dd9bfd43.png", "Three-foot Appalachian Trail map"]
    ],
    links: [
      ["Visit 3DTrails", "https://3d-trails.com"]
    ],
    source: "https://peterkellyyy.wixsite.com/peterkelly/3dtrails"
  },
  "rotary-rf-pcb-manufacturing": {
    title: "Rotary RF PCB Manufacturing System",
    eyebrow: "Special-Purpose Machinery",
    lede: "A robust coating system for developing high-permeability RF PCB materials at substantially larger scale and lower cost.",
    hero: "../assets/projects/rotary-rf-pcb-manufacturing/01-cd3e1ce61825.png",
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
        ]
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
      ["../assets/projects/asthma-inhaler-assistive-device/04-4ff1de3e15ce.jpg", "Upper-casing vent operation during actuation"],
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

const createFigure = (media, className = "") => {
  const figure = el("figure", `archive-media ${className}`.trim());
  const image = el("img");
  image.src = media[0];
  image.alt = media[1];
  image.loading = "lazy";
  figure.append(image, el("figcaption", "", media[1]));
  return figure;
};

const createLink = ([label, href], className = "archive-action") => {
  const link = el("a", className, label);
  link.href = href;
  link.target = "_blank";
  link.rel = "noreferrer";
  return link;
};

const renderFx10CaseStudy = () => {
  document.title = "FX10 Metal Print Head | Peter Kelly";
  document.body.classList.add("fx10-case-study");

  const backLink = document.querySelector(".back-link");
  if (backLink) backLink.textContent = "Back to Projects";

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

  const heroMedia = el("div", "fx10-hero-media");
  const heroImage = el("img");
  heroImage.src = "../assets/projects/fx10/01-b94fac15ce02.png";
  heroImage.alt = "Markforged FX10 metal printhead";
  heroImage.loading = "eager";
  heroMedia.append(heroImage);
  hero.append(heroCopy, heroMedia);
  root.append(hero);

  const overview = el("section", "fx10-overview-section fx10-section");
  const overviewCopy = el("div", "fx10-overview-copy");
  overviewCopy.append(el("p", "fx10-section-kicker", "Overview"));
  addParagraphs(overviewCopy, [
    "From its inception, the FX10 was designed to be a modular printer capable of printing both composite and metal filaments. Those material systems impose different thermal, mechanical, and flow requirements, so the printhead needed a swappable architecture that could support both production performance and serviceability.",
    "Beginning in June 2022, I leveraged prior Metal X and fine-feature process-development experience to lead the initial R&D of the FX10 metal printhead and carry the architecture through engineering validation."
  ]);

  const glance = el("aside", "fx10-glance");
  glance.append(el("h2", "", "At a Glance"));
  [
    ["Role", "Lead Mechanical Engineer"],
    ["Team", "R&D Hardware Team"],
    ["Timeline", "Jun 2022 - May 2024"],
    ["Stage", "EVT"],
    ["Platform", "Markforged FX10"]
  ].forEach(([label, value]) => {
    const row = el("div");
    row.append(el("span", "", label), el("strong", "", value));
    glance.append(row);
  });
  overview.append(overviewCopy, glance);
  root.append(overview);

  const highlights = el("section", "fx10-section");
  highlights.append(el("p", "fx10-section-kicker", "Design Highlights"));
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
  highlights.append(highlightGrid);
  root.append(highlights);

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

  const views = el("section", "fx10-section");
  views.append(el("p", "fx10-section-kicker", "Additional Views"));
  const viewGrid = el("div", "fx10-view-grid");
  project.media.forEach((media) => viewGrid.append(createFigure(media, "fx10-view-media")));
  views.append(viewGrid);
  root.append(views);
};

if (!root || !project) {
  if (root) root.append(el("p", "lede", "Project data could not be loaded."));
} else if (key === "fx10") {
  renderFx10CaseStudy();
} else {
  document.title = `${project.title} | Peter Kelly`;

  const hero = el("section", "archive-project-hero");
  const heroCopy = el("div", "archive-project-hero-copy");
  heroCopy.append(
    el("p", "eyebrow", project.eyebrow),
    el("h1", "", project.title),
    el("p", "lede", project.lede)
  );

  const tags = el("div", "archive-tags");
  project.tags.forEach((tag) => tags.append(el("span", "", tag)));
  heroCopy.append(tags);

  const heroFigure = createFigure([project.hero, project.heroAlt], "archive-hero-media");
  heroFigure.querySelector("img").loading = "eager";
  hero.append(heroCopy, heroFigure);
  root.append(hero);

  const facts = el("div", "archive-facts");
  project.facts.forEach(([value, label]) => {
    const item = el("div");
    item.append(el("strong", "", value), el("span", "", label));
    facts.append(item);
  });
  root.append(facts);

  const overview = el("section", "archive-overview");
  const overviewHeading = el("div", "archive-section-heading");
  overviewHeading.append(el("p", "section-kicker", "Overview"), el("h2", "", "The project"));
  const overviewCopy = el("div", "archive-copy");
  addParagraphs(overviewCopy, project.overview);
  overview.append(overviewHeading, overviewCopy);
  root.append(overview);

  project.sections.forEach((section, index) => {
    const sectionNode = el("section", `archive-story ${index % 2 ? "archive-story-reverse" : ""}`.trim());
    const number = el("span", "archive-story-number", String(index + 1).padStart(2, "0"));
    const copy = el("div", "archive-story-copy");
    copy.append(el("p", "section-kicker", section.kicker), el("h2", "", section.title));
    addParagraphs(copy, section.body);
    sectionNode.append(number, copy);
    root.append(sectionNode);
  });

  if (project.media?.length) {
    const gallery = el("section", "archive-gallery-section");
    const heading = el("div", "archive-gallery-heading");
    heading.append(el("p", "section-kicker", "Project Gallery"), el("h2", "", "Design and development"));
    const grid = el("div", "archive-gallery");
    project.media.forEach((media) => grid.append(createFigure(media)));
    gallery.append(heading, grid);
    root.append(gallery);
  }

  if (project.videos?.length || project.embed) {
    const videoSection = el("section", "archive-video-section");
    const heading = el("div", "archive-gallery-heading");
    heading.append(el("p", "section-kicker", "In Motion"), el("h2", "", "Prototype and process"));
    const grid = el("div", "archive-video-grid");

    project.videos?.forEach(([src, poster, caption]) => {
      const figure = el("figure", "archive-media archive-video");
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
      grid.append(figure);
    });

    if (project.embed) {
      const figure = el("figure", "archive-media archive-video");
      const iframe = el("iframe");
      iframe.src = project.embed.src;
      iframe.title = project.embed.title;
      iframe.loading = "lazy";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      figure.append(iframe, el("figcaption", "", project.embed.title));
      grid.append(figure);
    }

    videoSection.append(heading, grid);
    root.append(videoSection);
  }

  const outcome = el("section", "archive-outcome");
  outcome.append(el("p", "section-kicker", "Outcome"), el("h2", "", "What the work delivered"), el("p", "", project.outcome));
  const actions = el("div", "archive-actions");
  project.links?.forEach((link) => actions.append(createLink(link)));
  actions.append(createLink(["View original archive", project.source], "archive-action archive-action-secondary"));
  outcome.append(actions);
  root.append(outcome);
}
