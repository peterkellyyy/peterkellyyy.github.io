const projectCatalog = {
  "berkshire-grey": {
    title: "Robotic Manipulation R&D",
    eyebrow: "Berkshire Grey",
    lede: "R&D mechanical engineering for robotic manipulation, end effectors, robot data infrastructure, and production-ready automation hardware.",
    hero: "../assets/jobs/Berkshire Grey/carouselai.jpg",
    heroAlt: "Berkshire Grey robotic manipulation cell",
    heroClass: "portfolio-thumb-cover",
    tags: ["Robotic manipulation", "End effectors", "Hardware R&D", "Automation"],
    overview: [
      "At Berkshire Grey, I work on mechanical R&D for robotic manipulation systems and the hardware that supports embodied intelligence in industrial automation.",
      "The role sits at the intersection of mechanism design, end-effector development, robot data infrastructure, evaluation hardware, and production-minded implementation."
    ],
    sections: [
      {
        kicker: "Hardware R&D",
        title: "Building mechanisms for intelligent automation",
        body: [
          "My work focuses on robotic hardware that has to operate reliably in real automation environments: mechanisms, end effectors, fixtures, and supporting equipment that connect robot behavior to physical objects.",
          "That means moving from ambiguous requirements into practical designs that can be built, tested, iterated, and handed off with enough structure for broader engineering teams to use."
        ]
      },
      {
        kicker: "Validation",
        title: "Keeping design decisions grounded in robot performance",
        body: [
          "I support hardware development through prototyping, evaluation, and refinement so mechanical decisions are tied to observed robot behavior rather than isolated CAD assumptions.",
          "The work builds on my earlier robotics and production-hardware experience, with an emphasis on making experimental systems robust enough to produce useful data and scale toward deployment."
        ]
      }
    ],
    outcome: "The role extends my robotics hardware work into high-performance manipulation systems, where mechanical design, robot learning, data collection, validation, and production readiness all have to reinforce each other.",
    media: []
  },
  fx10: {
    title: "FX10 Metal Print Head",
    eyebrow: "Markforged",
    lede: "Next-generation metal printhead enabling high-performance 17-4 PH stainless steel and copper printing for the Markforged FX10 platform.",
    hero: "../assets/projects/fx10/FX10-hero.png",
    heroAlt: "Markforged FX10 platform with metal printhead",
    tags: ["Mechanical Design", "Additive Manufacturing", "Electromechanical"],
    embed: {
      src: "https://www.youtube.com/embed/_lQjlBVkTAo",
      title: "FX10 metal kit shipping announcement"
    },
    blocks: [
      {
        sectionClass: "fx10-overview-section fx10-section",
        parts: [
          {
            kind: "copy",
            copyClass: "fx10-overview-copy",
            kicker: "Overview",
            paragraphs: [
              "From the beginning of the program, the FX10 was conceived as a modular additive manufacturing platform capable of printing both composite and metal filaments. Because those material systems place distinct demands on thermal control, extruder requirements, filament routing, and flow behavior, the printhead required a swappable architecture.",
              {
                parts: [
                  "Beginning in June 2022, I leveraged my prior Metal X and ",
                  { text: "fine-feature process development", href: "finefeatures.html" },
                  " experience to lead the initial R&D of the FX10 metal printhead and carry the architecture through engineering validation. I owned the printhead architecture from early feasibility through EVT, translating process and material requirements into mechanical design decisions across the heater block, heat sink, extruder, and filament routing system."
                ]
              }
            ]
          },
          {
            kind: "imageFigure",
            figureClass: "fx10-glance",
            src: "../assets/projects/fx10/fx10-metal-printhead-square.png",
            alt: "Markforged FX10 metal printhead",
            caption: "FX10 metal print head"
          }
        ]
      },
      {
        sectionClass: "fx10-section fx10-launch-video-section",
        parts: [
          {
            kind: "youtube",
            figureClass: "fx10-overview-video",
            iframeTitle: "YouTube video player",
            sized: true,
            caption: "FX10 metal print head shipping announcement video"
          }
        ]
      },
      {
        sectionClass: "fx10-section fx10-design-section",
        kicker: "Design",
        parts: [
          {
            kind: "copy",
            copyClass: "fx10-design-copy",
            paragraphs: [
              "Before starting to lay out the architecture of Markforged's next-gen metal printhead, I focused the initial R&D around thermal control, hot-zone length, extruder consistency, and calibration.",
              "Using a combination of print testing with stock Metal X print heads, and modified \"Frankenstein\" print heads, I answered all three questions, giving the engineering team the necessary confidence to proceed with the first print head prototype.",
              "After the R&D phase, I laid out the initial architecture of the print head and collaborated with an electrical engineer to design the first prototype for internal testing, owning the 3D CAD and 2D part drawings. During the build process, I also developed the manufacturing work instructions and documented design issues."
            ]
          },
          {
            kind: "grid",
            gridClass: "fx10-highlight-grid fx10-printhead-grid",
            cards: [
              ["../assets/projects/fx10/01-b94fac15ce02.png", "FX10 Metal Print Head", "Compact modular architecture with integrated cooling and electronics enclosure."],
              ["../assets/projects/fx10/02-def065ceee78.png", "Lower Shroud and Top Cover Removed", "Internal architecture revealing PCB, heat sink stack, quick-disconnects, and modular subassemblies for serviceability."],
              ["../assets/projects/fx10/03-7b0f59b15173.png", "Front Plane PCB Removed", "Drive system, filament path components, and structural framework exposed for design review."]
            ]
          },
          {
            kind: "copy",
            copyClass: "fx10-design-copy fx10-generic-design-copy fx10-design-followup",
            paragraphs: [
              "As the program matured, I developed and released subsystem designs, part drawings, manufacturing fixtures, and work instructions to support builds and validation. I worked closely with electrical, software, materials, manufacturing, and print test teams to integrate the metal printhead into the FX10 platform, debug system-level issues, and advance the design from exploratory R&D into an production ready architecture.",
              "As the metal print head team grew and the design later went through a second prototype before proceeding to the EVT design and test phase, I continued to lead the design of various subsystems, create 2D part and assembly drawings, and own validation testing deliverables."
            ]
          }
        ]
      },
      {
        sectionClass: "fx10-section fx10-process-video-section",
        parts: [
          {
            kind: "video",
            videoClass: "fx10-process-video",
            src: "../assets/projects/fx10/FX10-metal-process.webm",
            ariaLabel: "FX10 metal printing process video"
          }
        ]
      },
      {
        sectionClass: "fx10-split fx10-section",
        parts: [
          {
            kind: "splitPanel",
            panelClass: "fx10-list-panel",
            kicker: "Key Challenges",
            itemClass: "fx10-list-item",
            iconClass: "fx10-list-icon",
            items: [
              { title: "Material Differences", copy: "Balanced thermal, mechanical, and flow requirements across composite and metal printing." },
              { title: "Swappable Architecture", copy: "Developed a repeatable docking and electrical interface to enable quick head swaps." },
              { title: "Thermal Management", copy: "Engineered heat dissipation for consistent performance with high-temperature metals." },
              { title: "Serviceability", copy: "Designed modular subassemblies for rapid maintenance and replacement." }
            ]
          },
          {
            kind: "splitPanel",
            panelClass: "fx10-list-panel",
            kicker: "Impact",
            itemClass: "fx10-impact-item",
            iconClass: "fx10-check-icon",
            items: [
              { copy: "Enabled metal printing on the FX10 platform with 17-4 PH stainless steel and copper." },
              { copy: "Delivered next-generation printhead hardware to EVT in May 2024." },
              { copy: "Laid groundwork for future material expansion and performance improvements." },
              { copy: "Strengthened Markforged's industrial metal additive manufacturing platform." }
            ]
          }
        ]
      },
      {
        sectionClass: "fx10-image-banner",
        parts: [
          {
            kind: "image",
            src: "../assets/projects/fx10/FX10-Printhead-Changeover-Closeup.jpg",
            alt: "FX10 printhead changeover closeup"
          }
        ]
      },
      {
        sectionClass: "fx10-section fx10-outcome-section fx10-outcome-with-image",
        parts: [
          {
            kind: "copy",
            copyClass: "fx10-outcome-copy",
            kicker: "Outcome",
            paragraphs: [
              "This work helped establish the FX10 as a true multi-material platform rather than a single-material printer, enabling the same machine architecture to support both continuous-fiber composite printing and metal filament printing through a robust, serviceable, and swappable printhead system."
            ]
          },
          {
            kind: "imageFigure",
            figureClass: "fx10-outcome-figure",
            src: "../assets/projects/fx10/fx10-dark.jpg",
            alt: "FX10 3D printer",
            caption: "FX10 3D printer"
          }
        ]
      }
    ]
  },
  px100: {
    title: "Markforged PX100",
    eyebrow: "Metal Binder Jetting",
    lede: "Building the US capability, infrastructure, and validation program for a production-grade metal binder jet platform.",
    hero: "../assets/projects/px100/01-864df172f280.jpg",
    heroAlt: "Markforged PX100 metal binder jet printer",
    tags: ["Lab buildout", "Binder jetting", "System validation", "Operations"],
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
    embed: {
      src: "https://www.youtube.com/embed/VljE9VG1s-s",
      title: "How to improve Z strength with multi-part prints"
    },
    blocks: [
      {
        sectionClass: "fx10-overview-section fx10-section co-parts-overview-section",
        parts: [
          {
            kind: "copy",
            copyClass: "fx10-overview-copy",
            kicker: "Overview",
            paragraphs: [
              "Markforged printers combine a chopped-carbon-fiber nylon base material with inlaid continuous carbon fiber, raising in-plane yield strength from roughly 40 MPa to up to 800 MPa, nearly a 20x improvement. The limitation is that fiber can only be routed in the XY print plane, so Z-direction strength remains governed by the weaker bonding between FFF layers. When a part has features whose ideal print orientations conflict, a single build orientation unavoidably compromises the final part.",
              "To overcome this, I developed a co-part methodology, published in the Rapid Prototyping Journal with two Markforged colleagues. Conflicting features are functionally separated into co-parts by Boolean subtraction, printed simultaneously in their ideal orientations with continuous fiber aligned to each primary load, and then assembled into a composite part. The strategy runs on standard three-axis FFF printers with no hardware modifications, and fiber-reinforced co-part assemblies held up to 6.4x the ultimate load of equivalent plastic-only parts."
            ]
          },
          {
            kind: "imageFigure",
            figureClass: "co-parts-figure co-parts-overview-image",
            src: "../assets/projects/co-parts/co-part assembly.png",
            alt: "Monolithic mounting plate, assembled co-part, and co-part assembly strategy",
            caption: "(a) Monolithic plastic mounting plate part (b) assembled co-part (c) assembly strategy"
          },
          {
            kind: "youtube",
            figureClass: "fx10-overview-video co-parts-overview-video",
            caption: "The educational video I wrote and presented on the co-part process, which reached over 80,000 views"
          }
        ]
      },
      {
        sectionClass: "fx10-section co-parts-process-section",
        parts: [
          {
            kind: "copy",
            copyClass: "fx10-design-copy fx10-generic-design-copy co-parts-process-copy",
            kicker: "Process",
            paragraphs: [
              "Candidate parts are those with competing feature optimizations: perpendicular cylindrical features, thin protrusions that do not lie in a common plane, high-aspect-ratio features, or loads applied across printed layers. A tent-pole mounting plate provided a clear test case. Four bolts secure the plate to the ground while the central boss is loaded perpendicular to the mounting surface, a direction that cannot be optimally reinforced with one continuous-fiber print orientation.",
              {
                figureGroup: {
                  groupClass: "co-parts-break-pair",
                  figures: [
                    { figureClass: "co-parts-figure co-parts-break", src: "../assets/projects/co-parts/break1.png", alt: "Printed mounting plate co-parts before assembly", caption: "The mounting plate separated into two co-parts" },
                    { figureClass: "co-parts-figure co-parts-break", src: "../assets/projects/co-parts/break2.png", alt: "Mounting plate co-part interface detail", caption: "The co-part interface, where load pulls one part against the other" }
                  ]
                }
              },
              "The geometry was separated into two co-parts using Boolean subtraction, and each was printed in its strongest orientation with continuous carbon fiber aligned to its primary load. Load transfer between the co-parts drove the interface design: the parts are arranged so that applied load attempts to pull one co-part through the other, seating a flared base against a fiber-reinforced pocket. Printed with zero gap allowance, the co-parts were press-fit together with an arbor press. Adhesives or dovetail-style joinery can be used instead when loads act in multiple directions."
            ]
          },
          {
            kind: "contentPair",
            pairClass: "co-parts-process-flow",
            parts: [
              {
                kind: "copy",
                copyClass: "fx10-design-copy fx10-generic-design-copy co-parts-flow-copy",
                paragraphs: [
                  "The decomposition follows a repeatable workflow. First, select the build orientation that places the largest critical features in the XY plane, where printed strength is highest and continuous fiber can be routed. Next, identify critical features left with poor local orientation, such as loading across layer lines, and separate them into co-parts in CAD, detailing only the mating interface before the Boolean operation.",
                  "Each co-part is then individually oriented in the slicer and reinforced with continuous fiber along its principal load path. Finally, the collection of co-parts is printed in a single build and assembled by press fitting. Because only the interface geometry changes, the process can be iterated quickly. Small unit-test prints of just the interface are an efficient way to tune the fit for a particular printer and material."
                ]
              },
              {
                kind: "imageFigure",
                figureClass: "co-parts-figure co-parts-flowchart",
                src: "../assets/projects/co-parts/co-part-flowchart.png",
                alt: "Flowchart of the co-part decomposition process",
                caption: "Co-part decomposition flowchart"
              }
            ]
          },
          {
            kind: "video",
            figureClass: "co-parts-process-video-figure",
            videoClass: "co-parts-process-video",
            src: "../assets/projects/co-parts/example part.webm",
            ariaLabel: "Co-part example assembly animation",
            caption: "Separating a mounting plate into co-parts using Solidworks"
          }
        ]
      },
      {
        sectionClass: "fx10-section fx10-design-section co-parts-testing-section",
        kicker: "Testing",
        parts: [
          {
            kind: "copy",
            copyClass: "fx10-design-copy fx10-generic-design-copy",
            paragraphs: [
              "Each demonstration part was printed in up to four strategies: a monolithic plastic control, plastic-only co-parts, single-plane continuous fiber reinforcement, and fiber-reinforced co-parts. Three samples were tested per cohort, dried for 48 hours under vacuum before testing to control for environmental variability.",
              "All samples were loaded to failure on an Instron 3369 with a 50 kN load cell, using custom fixtures designed so the applied forces mimicked each part's real-world use case. Beyond the two full parts, three unit tests isolated common weak features that are often forced into poor print orientations by the rest of a part: a snap-fit clip, a cylindrical post, and a loop."
            ]
          },
          {
            kind: "figurePair",
            figures: [
              {
                src: "../assets/projects/co-parts/copart-instron1.jpg",
                alt: "Pole clip co-part assembly under tensile load in the Instron fixture",
                caption: "Pole clip co-part assembly under tensile load in the Instron fixture"
              },
              {
                src: "../assets/projects/co-parts/copart-instron2.jpg",
                alt: "Mounting plate co-part fixtured for boss pull-through testing",
                caption: "Mounting plate co-part fixtured for boss pull-through testing"
              }
            ]
          }
        ]
      },
      {
        sectionClass: "fx10-section co-parts-outcome-section",
        parts: [
          {
            kind: "copy",
            copyClass: "fx10-outcome-section co-parts-outcome-copy",
            kicker: "Outcome",
            paragraphs: [
              "Co-part assembly proved to be a practical way to sidestep FFF anisotropy without new printer hardware. Fiber-reinforced co-parts held up to 6.4x the ultimate load of equivalent plastic-only parts and enabled reinforcement in otherwise incompatible planes.",
              "The work was published open-access in the Rapid Prototyping Journal. The same decomposition strategy can extend beyond strength to stiffness, accuracy, surface finish, and conductivity."
            ],
            actions: [
              ["Read the journal paper", "https://www.emerald.com/rpj/article-pdf/29/11/64/2307484/rpj-12-2022-0415.pdf"],
              ["Read the blog post", "https://markforged.com/resources/blog/using-co-part-assemblies-and-continuous-fibers-to-print-stronger-parts"]
            ]
          },
          {
            kind: "imageFigure",
            figureClass: "co-parts-figure co-parts-load-results",
            src: "../assets/projects/co-parts/co-part load.png",
            alt: "Co-part load testing results and failed samples",
            caption: "Load testing results and failed mounting plate samples"
          }
        ]
      }
    ]
  },
  harpy: {
    title: "Legged Robotics Research",
    eyebrow: "Robotics Research Platform",
    lede: "A lightweight thruster-assisted bipedal robot developed as my master's thesis hardware platform.",
    hero: "../assets/projects/harpy/harpy leg.png",
    heroAlt: "Harpy leg actuator assembly",
    tags: ["Mechanical design", "Composite fabrication", "Actuation", "Simulation", "Testing"],
    overview: [
      "Harpy was my master's thesis project at Northeastern's SiliconSynapse Lab: a bipedal robot with six leg actuators, two vectoring thruster actuators, and two electric ducted fans. Inspired by the Jackson's Widowbird, which uses its wings and legs together to jump many times its body length, the platform was designed to support research in thruster-assisted legged locomotion, where thrust can help stabilize balance, soften impacts, and increase jump performance.",
      "My work covered the electromechanical architecture of the robot: actuator selection and packaging, composite 3D printed housings, carbon-fiber leg structures, embedded fabrication methods, thruster integration, electrical layout, simulation, and physical leg testing.",
      "Three constraints drove every design decision: a thrust-to-weight ratio greater than one, legs that could survive repeated free-fall impacts, and modular actuators that could be revised or repaired quickly without rebuilding printed structure."
    ],
    overviewMedia: {
      src: "../assets/projects/harpy/harpy-render.png",
      caption: "Harpy robot render",
    },
    sections: [
      {
        kicker: "Leg Design",
        body: [
          "The leg layout used a pantograph-style mechanism with sagittal hip, frontal hip, and knee actuation. The pantograph made efficient use of actuator torque while preventing knee inversion and singular configurations, and I designed the carbon-fiber tube and plate structure, pelvis interface, and knee assembly around it. Oval cross-section carbon-fiber tubes concentrated bending stiffness in the sagittal plane, where walking and jumping loads are highest, saving weight over round tubes of equivalent stiffness.",
          "To decouple the actuators from ground impacts, I designed a passive shock absorber in series with the pantograph control rod. A preloaded spring keeps the leg rigid during normal walking but compresses under large peak loads, protecting the transmissions and storing energy for subsequent jumps. Interchangeable springs from 1.0 to 10.5 N/mm and an adjustable preload nut let stiffness be tuned between tests without any redesign."
        ],
        asideFigure: {
          src: "../assets/projects/harpy/harpyLegDOF.png",
          alt: "Harpy leg degrees of freedom",
          caption: "Leg degrees of freedom and thruster placement"
        },
        fullWidthFigure: {
          src: "../assets/projects/harpy/shockAbsorber.png",
          alt: "Harpy adjustable leg shock absorber",
          caption: "Adjustable leg shock absorber"
        }
      },
      {
        kicker: "Actuation and Fabrication",
        body: [
          "Actuators dominate the mass budget of a legged robot, so component selection came first. I traded direct drive, planetary, spur, belt, and harmonic transmissions against torque density, backdrivability, and backlash, then compared more than 40 brushless motors on power- and torque-to-weight. The result paired a 30:1 Harmonic Drive component set with a T-motor Antigravity 4006, giving each complete leg joint actuator 8.5 Nm of peak torque at just 270 g.",
          "I designed the integrated actuator housings around bearings, motor mounting, transmission support, and output structure. Machined interfaces used 316 stainless where bearing surfaces demanded precision and 7075 aluminum where they didn't, and FEA verified the output flange at twice the transmission's rated peak torque. Composite FDM made it possible to create high-complexity housings while keeping mass low.",
          "A major part of the work was fabrication strategy. Bearings, heat-set inserts, and carbon-fiber plates were embedded into printed parts mid-print, allowing printed geometry to locate and support stiffer structural elements instead of relying on plastic alone — with pullout strength set by the surrounding carbon-fiber-reinforced material rather than an adhesive bond."
        ],
        figure: {
          src: "../assets/projects/harpy/actuator-exploded.png",
          alt: "Exploded view of the Harpy actuator architecture",
          caption: "Exploded leg joint actuator architecture"
        },
        afterFigureBody: [
          "By sandwiching printed thermoplastic between layers of continuous carbon fiber, the housings behaved like composite sandwich panels: stiff where bending loads demanded it, light everywhere else. The same print-and-pause process built the thruster and leg actuator housings, letting printed parts provide complex alignment and packaging features while carbon-fiber and bearing elements carried the high loads."
        ],
        fullWidthFigure: {
          src: "../assets/projects/harpy/embedThruster.png",
          alt: "Embedded fabrication process for Harpy thruster actuator housing",
          caption: "Embedded composite-printing process used for high-load actuator housings"
        }
      },
      {
        kicker: "Thrusters and Electronics",
        body: [
          "Hitting a thrust-to-weight ratio above one required 68 N of total thrust. Propellers would have needed 25+ cm blade diameters — unsafe and impractical on a walking robot — and gas turbines were too heavy, hot, and slow to respond. I selected carbon-fiber Schuebeler EDFs instead, each producing 53 N from a housed 80 mm duct that keeps blades protected during ground operation.",
          "For thrust vectoring, I chose gimballed thrusters over control flaps for their efficiency and far larger range of motion, and designed the actuator that steers each EDF by adapting the leg joint architecture with a smaller motor and harmonic drive. Two output bearings support the EDF coupling so the transmission sees pure torque despite sustained bending loads from the thrusters.",
          "I also designed support electronics, including a motor-drive interface PCB that provides EtherCAT, safe-torque-off, USB, and encoder connections for each motor drive, and packaged the drives, ESCs, heatsinks, and wiring so the system could be assembled, tested, and serviced."
        ],
        figures: [
          {
            src: "../assets/projects/harpy/edfActuator.jpg",
            alt: "Harpy electric ducted fan thruster actuator assembly",
            caption: "Vectoring electric ducted fan actuator assembly"
          },
          {
            src: "../assets/projects/harpy/ampPCB.png",
            alt: "Harpy amplifier PCB",
            caption: "Amplifier PCB used in the Harpy electronics stack"
          }
        ]
      },
      {
        kicker: "Simulation",
        className: "harpy-simulation-section",
        body: [
          "Before building the complete robot, I created a MATLAB Simscape Multibody model to estimate joint torque requirements and compare how shock absorber stiffness and thruster force affected falls and hops. The simulation showed how passive compliance and thrust could reduce peak actuator loads during impact.",
          "Drop cases swept shock absorber stiffnesses from 4 to 8 N/mm and thruster forces from 0 to 40 N, showing that the knee and sagittal hip dominate torque requirements while the frontal hip load is negligible — a result that later simplified the leg test fixture. Commanded hop trajectories were then evaluated across thrust levels before committing to hardware tests."
        ],
        asideFigure: {
          src: "../assets/projects/harpy/harpyThrusterPlot.png",
          alt: "Harpy drop simulation plots comparing thruster force",
          caption: "Drop simulation comparing joint loads across thruster force levels"
        },
        inlineVideo: {
          src: "../assets/projects/harpy/harpySimscapeJump2.webm",
          label: "Harpy Simscape jump simulation",
          caption: "Simulation of Harpy jumping with thruster forces ranging from 0 to 30 N",
          aspectRatio: "auto",
          background: "transparent",
          fit: "contain"
        }
      },
      {
        kicker: "System Architecture",
        body: [
          "The robot architecture connected a Simulink Real-Time target PC to Elmo Gold Twitter motor drives over EtherCAT at 10 kHz, with a daisy-chained Nucleo microcontroller commanding the thruster ESCs. Power came from a tethered 30 V supply in the lab or an 8S LiPo untethered, and a hardware emergency stop cut both the safe-torque-off signal to the drives and the PWM to the EDFs.",
          "I designed the mechanical packaging around that architecture — including a carbon-fiber motor-drive rack holding all eight drives on the torso, keeping drive mass off the legs and thermally isolated from the actuator motors — so the robot could stay light while leaving the controls team a practical research platform."
        ],
        fullWidthFigure: {
          src: "../assets/projects/harpy/robotArchitecture.png",
          alt: "Harpy robot electrical and control architecture",
          caption: "Electrical and control architecture used for Harpy testing"
        }
      },
      {
        kicker: "Testing",
        className: "harpy-testing-section",
        body: [
          "I designed a T-slot single-leg test fixture with an 80 cm linear rail so the leg could be drop-tested and commanded through hops while isolating the most demanding sagittal-plane mechanism.",
          "The test setup preserved the thruster actuator and EDF above the leg, making it possible to compare assisted and unassisted behavior. Tests included a 55 cm fall, a 16 cm hop, and high-speed foot motion of 10 cm per cycle at 13 Hz."
        ],
        asideVideo: {
          src: "../assets/projects/harpy/legFixture.mp4",
          label: "Harpy single-leg test fixture",
          caption: "Single-leg test fixture on the linear rail",
          aspectRatio: "auto",
          background: "#ffffff",
          fit: "contain"
        },
        inlineVideo: {
          src: "../assets/projects/harpy/thrusterComparison.mp4",
          label: "Harpy leg test video",
          caption: "Leg jumping with and without thruster assistance",
          aspectRatio: "1920 / 1370",
          background: "#ffffff",
          fit: "contain",
          controls: true
        }
      },
      {
        kicker: "Generative Design",
        body: [
          "To help finalize component placement on the full robot, I built a parametric model of Harpy in Grasshopper and connected it to an evolutionary solver. Actuator, EDF, motor drive, heatsink, and battery locations were exposed as parameters, and a fitness function scored each candidate on how closely it hit target center-of-mass and body moment-of-inertia values.",
          "The solver produced families of viable placements that could be re-run whenever the design changed, turning a tedious manual balancing exercise into a repeatable optimization and giving the controls team direct influence over the robot's mass properties."
        ],
        asideVideo: {
          src: "../assets/projects/harpy/generativeFinal.webm",
          label: "Harpy generative mass allocation model",
          caption: "Evolutionary solver exploring component placements on the parametric Harpy model",
          aspectRatio: "auto",
          background: "transparent",
          fit: "contain"
        }
      }
    ],
    outcome: "The thesis established Harpy's core hardware architecture and validated the most demanding leg subsystem through simulation and physical testing. The work turned the robot from a research concept into a buildable platform with defined actuation, fabrication, electronics, simulation, and test methods.",
    media: [],
    outcomeFigures: [
      {
        src: "../assets/projects/harpy/harpyjump.gif",
        alt: "Harpy jump simulation animation",
        caption: "Harpy jump animation"
      }
    ],
    hideSourceAction: true,
    source: "https://peterkellyyy.wixsite.com/peterkelly/harpy"
  },
  finefeatures: {
    title: "Metal X Fine Features",
    eyebrow: "Metal Process Development",
    lede: "Production print settings for finer detail, improved accuracy, smoother surfaces, and stronger metal parts.",
    hero: "../assets/projects/finefeatures/finefeatures-bg.png",
    heroAlt: "Fine Features metal additive manufacturing background",
    tags: ["Print process R&D", "Copper", "17-4PH stainless", "Qualification"],
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
    eyebrow: "Side business",
    lede: "Topographic trail maps that combine geospatial data, sculpted paths, multicolor printing, and a small direct-to-customer business.",
    hero: "../assets/projects/3dtrails/01-d52419b917b1.jpg",
    heroAlt: "Three-dimensional printed topographic trail map",
    tags: ["Blender", "GIS data", "Multicolor FDM", "Product design"],
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
  soaring: {
    title: "Soaring",
    eyebrow: "Hobby",
    lede: "Sailplane flying, cross-country decision-making, aviation mentorship, and a lifelong love of flight.",
    hero: "../assets/projects/soaring/asw19.jpg",
    heroAlt: "ASW-19B glider in flight",
    heroClass: "portfolio-thumb-cover soaring-hero-media",
    tags: ["Sailplanes", "Aviation", "Mentorship", "Cross-country flying"],
    overview: [
      "Soaring has been a long-running personal pursuit since 2013. Flying sailplanes combines weather reading, energy management, decision-making, and a particular kind of hands-on mechanical intuition that has shaped how I think about engineering and risk."
    ],
    sections: [
      {
        kicker: "Flight",
        title: "Finding lift without an engine",
        body: [
          "Sailplane flying is built around reading the sky, understanding terrain and wind, and making careful decisions with limited energy. It rewards preparation, patience, and constant attention to what the aircraft and atmosphere are telling you."
        ]
      },
      {
        kicker: "Community",
        title: "Sharing aviation with curious people",
        body: [
          "One of my favorite parts of soaring is sharing flight and aviation with people who are brave enough to climb into an airplane without an engine. It is a rare mix of adventure, technical curiosity, and trust."
        ]
      }
    ],
    outcome: "Soaring remains one of the clearest through-lines in my life outside engineering: a way to stay close to flight, weather, craft, and people who love learning difficult things.",
    media: []
  },
  "rotary-rf-pcb-manufacturing": {
    title: "Rotary RF PCB Manufacturing System",
    eyebrow: "Special-Purpose Machinery",
    lede: "A robust coating system for developing high-permeability RF PCB materials at substantially larger scale and lower cost.",
    hero: "../assets/projects/rotary-rf-pcb-manufacturing/rotarypcb.png",
    heroAlt: "Rotary RF PCB coating system CAD rendering",
    tags: ["Machine design", "Thermal control", "Sheet metal", "System integration"],
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
    eyebrow: "Co-op",
    lede: "Mechanical design, rapid prototyping, integration, and test support for advanced engineering programs.",
    hero: "../assets/jobs/MORSE Corp/Parafoils.png",
    heroAlt: "Parafoils in flight during MORSE Corp engineering work",
    tags: ["Mechanical design", "Rapid prototyping", "Integration", "Test support"],
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
    eyebrow: "Co-op",
    lede: "Prototype mechanism design and test hardware support for consumer robotics research and development.",
    hero: "../assets/jobs/iRobot/s9.webp",
    heroAlt: "iRobot robot vacuum",
    tags: ["Robotics R&D", "Mechanism design", "Prototype hardware", "Testing"],
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
    eyebrow: "Co-op",
    lede: "Propulsion-system mechanical engineering support through design analysis, documentation, and hardware evaluation.",
    hero: "../assets/jobs/Sikorsky/mh60.jpg",
    heroAlt: "Sikorsky MH-60 helicopter",
    tags: ["Aerospace", "Propulsion systems", "Design analysis", "Documentation"],
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
    eyebrow: "Capstone project",
    lede: "A breath-triggered, modular inhaler device designed with a user with cerebral palsy to enable independent positioning and actuation.",
    hero: "../assets/projects/asthma-inhaler-assistive-device/01-6375d08b0e61.png",
    heroAlt: "Asthma inhaler assistive device",
    tags: ["Human-centered design", "Embedded electronics", "3D printing", "Capstone"],
    overview: [
      "This capstone project created an assistive device for people with limited dexterity and strength. It positions and actuates a standard asthma inhaler while also tracking remaining doses, sleeping automatically to conserve power, and providing a manual backup for a caregiver.",
      "The system is divided into a sealed upper casing, a removable electronics module, and interchangeable handles that can be adapted to an individual user's needs."
    ],
    overviewMedia: {
      type: "imagePair",
      images: [
        {
          src: "../assets/projects/asthma-inhaler-assistive-device/inhaler.png",
          alt: "Asthma inhaler assistive device"
        },
        {
          src: "../assets/projects/asthma-inhaler-assistive-device/inhaler-transparent.png",
          alt: "Transparent view of asthma inhaler assistive device"
        }
      ]
    },
    featureBreakdown: [
      {
        title: "Upper Casing",
        image: "../assets/projects/asthma-inhaler-assistive-device/casing.png",
        alt: "Upper casing module for asthma inhaler assistive device",
        bullets: [
          "Linear servo actuates inhaler when pressure difference is detected inside mouthpiece",
          "Top button allows aide to administer inhaler in the case battery is not charged",
          "Upper casing remains completely sealed until dose from inhaler is being administered, saving lung capacity of the user and timing",
          "Removable acrylic back plate allows standard asthma inhaler to be inserted"
        ]
      },
      {
        title: "Electronics Module",
        image: "../assets/projects/asthma-inhaler-assistive-device/electronics-module.png",
        alt: "Electronics module for asthma inhaler assistive device",
        bullets: [
          "Custom PCB with Arduino Pro Micro, ported pressure sensor, and capacitive touch sensor",
          "OLED display acts as dosage counter and displays instructions to aide",
          "Low battery warning LED, hard on/off switch, and button to activate \"inhaler swap mode\"",
          "Rechargeable through external micro-USB port"
        ]
      },
      {
        title: "Handle",
        image: "../assets/projects/asthma-inhaler-assistive-device/handle.png",
        alt: "Interchangeable handle for asthma inhaler assistive device",
        bullets: [
          "Completely modular and swappable to accommodate different users' preferences",
          "Copper strips inside handle act as capacitive touch surfaces to automatically wake device out of sleep mode after being gripped by user",
          "Additional length makes positioning device much easier for users with limited motor abilities",
          "Polyethylene cover enhances grip of handle"
        ]
      }
    ],
    designSpread: {
      intro: [
        "The primary tasks I led in this project were the software and electrical design, 3D printing of components, conceptual design of the device, and the management of tasks and overall timeline of the project. One of the first objectives was to identify the actuation method of the inhaler. I was initially between a solenoid and a linear servo, but after conducting compression testing with a standard inhaler, the group and I decided that a linear servo would be the best solution since a solenoid cannot provide a sufficient amount of force to reliably actuate an inhaler. Linear servos are much slower, but I found a reliable, mechanical solution to this problem. By sealing the upper casing of the device and attaching a flexible 3D-printed part to the tip of the linear servo, the upper casing can be unsealed during the actuation of the inhaler and sealed again when the servo retracts through vents on the side of the upper casing. This allows the user to save their breath, and perfectly times the inhaler dose since the user builds up some pressure by sucking through the mouthpiece. The vaporized medicine is then automatically breathed into the lungs when air starts flowing through the vents.",
        "The method of triggering the actuator I chose was a ported pressure sensor, which connects to a silicone tube and a hole in the mouthpiece of the outer casing. This allows the user to be able to actuate their inhaler without worrying about a button or any fine motor movements. Also, in order to make the 2400 mAh lithium ion battery last over one week without being recharged, the microcontroller by default puts the system into a sleep mode, dramatically extending battery life. In order to wake up the device without the user having to worry about a button or switch, there is a capacitive touch sensor on the PCB that connects to copper strips mounted in the handle. Even through the polyethylene grip and 3D printed material, the change in capacitance from a human hand gripping the handle can be sensed 100% of the time. The bridge between the electronics module and handle is formed by a conductive spring in the handle and a copper pad on the bottom of the electronics module. This ensures that handles can be swapped without needing to manually connect any wires."
      ],
      sideFigures: [
        {
          type: "video",
          src: "../assets/projects/asthma-inhaler-assistive-device/inhalerMechanism.webm",
          caption: "Unsealing of upper casing vents during inhaler actuation",
          aspectRatio: "960 / 742"
        },
        {
          src: "../assets/projects/asthma-inhaler-assistive-device/05-77055ef20fae.png",
          alt: "Section view of inhaler electronics module",
          caption: "Section view of inhaler electronics module"
        }
      ],
      pcbIntro: "The PCB was designed in Autodesk EAGLE and is mounted into slots in the electronics module. Components like the OLED display, button, and LED are connected through external wires and connectors. The lithium ion battery is boosted from 3.7 V to 5 V in order to run the linear servo with a boost board that doubles as a charger, and connects to the external micro-USB input.",
      pcbFigures: [
        {
          src: "../assets/projects/asthma-inhaler-assistive-device/06-03771f7ed6ce.png",
          alt: "2D PCB layout for asthma inhaler assistive device"
        },
        {
          src: "../assets/projects/asthma-inhaler-assistive-device/07-5522deb01194.png",
          alt: "3D render of assembled asthma inhaler assistive device PCB"
        }
      ],
      pcbCaption: "2D unassembled and 3D render of assembled PCB",
      outro: "The low battery warning LED is illuminated once the battery voltage drops below 3.2 V, alerting the user to charge the device as soon as possible. Pressing the \"inhaler swap mode\" pushbutton retracts the linear servo and displays a set of instructions on the OLED display for an aide to remove the back cover and replace the inhaler. Once the button is pressed again, the dosage counter is reset and the linear servo returns to its original position. The button is partially recessed in order to prevent unintentional activation. The hard on/off switch physically disconnects the battery from the microcontroller. This is to be used by an aide if the device needs to be off for an extended period of time."
    },
    sections: [],
    outcome: "The project participant independently picked up and actuated the final device using breath control. The design won Northeastern's Most Technically Complete capstone award and tied for Biggest Potential Impact.",
    media: [],
    videos: [
      ["../assets/projects/asthma-inhaler-assistive-device/video-1.mp4", "../assets/projects/asthma-inhaler-assistive-device/09-a2f903f51220.jpg", "Prototype wake, automatic actuation, and dose-counter demonstration"]
    ],
    source: "https://peterkellyyy.wixsite.com/peterkelly/asthma-inhaler-assistive-device"
  },
  "cat-treat-dispenser": {
    title: "Cat Treat Dispenser",
    eyebrow: "Embedded Product Design",
    lede: "A cat-operated dispenser combining proximity sensing, a flexible feed paddle, compact electronics, and a four-part printed enclosure.",
    hero: "../assets/projects/cat-treat-dispenser/treatdispenser.jpg",
    heroAlt: "Cat treat dispenser assembly",
    tags: ["Arduino", "Stepper drive", "Proximity sensing", "Desktop FDM"],
    overview: [
      "This device is intended to be controlled by a cat (specifically my roommate's cat), which can be trained to put its paw into the chute in exchange for a treat. Most cat food/treats can be loaded into the chute using the hinged lid and be left to the cat to decide when it wants a treat once it figures out how to control the device. A timer to limit how often a treat can be dispensed can be controlled by the human user.",
      {
        parts: [
          "This was an early introduction to integrating sensors, buttons, screens, microcontrollers, and stepper motors into 3D printed parts for me back in 2019. It was also a fun and unique experiment since the end user is not a human, but instead an animal. I was lucky to have such a smart and attentive cat to test out my project. This work directly led to the success I had with my undergraduate capstone project, where I used similar electrical hardware and made my first PCB design for an ",
          {
            text: "asthma inhaler assistive device",
            href: "asthma-inhaler-assistive-device.html"
          },
          "."
        ]
      }
    ],
    overviewMedia: {
      type: "video",
      src: "../assets/projects/cat-treat-dispenser/frank.webm",
      caption: "The treat dispenser with my test subject, Frank",
      aspectRatio: "1080 / 1400"
    },
    sections: [
      {
        kicker: "Design",
        body: [
          "The treat dispenser uses a proximity sensor to detect the presence of the paw in addition to a stepper motor and flexible paddle that dispenses the treats. There is a small screen that displays information in addition to a button for basic controls, such as how often a treat can be dispensed. The program runs on an Arduino Feather microcontroller and is powered by a micro-USB cable. The OLED display was programmed using the U8glib graphics library. All parts for this project were 3D printed on a Monoprice Select Mini, which has a relatively small 120 x 120 mm print bed. The major challenge was having to split the design into four print in small sections and fasten everything together. I used a combination of press fits, fasteners, threaded holes, and Loctite gel glue to make everything securely fit together."
        ],
        figures: [
          {
            src: "../assets/projects/cat-treat-dispenser/treat-dispenser-render.png",
            alt: "Cat treat dispenser rendering",
            caption: "Render of cat feeder design"
          },
          {
            src: "../assets/projects/cat-treat-dispenser/treat-dispenser-sectoin.png",
            alt: "Cat treat dispenser section view",
            caption: "Section view of cat feeder design"
          }
        ]
      }
    ],
    outcome: "My biggest fear was that Frank, the cat, would be too afraid of the noise made by the stepper motor to interact with the treat dispenser. However, once he realized there was food inside, he put his nose into the chute and was rewarded with a few treats. Although the noise of the motor scared him a bit at first, he quickly figured out if he put his paw near the proximity sensor the same result would occur. Within a few minutes he had learned how to operate the device. The biggest issue I discovered was that after the cat became comfortable with the device, he would become a bit aggressive and shove his paw as far as he could up the chute, blocking the treats from fully coming out, causing the chute to clog. If I were to make a second revision of this I'd ensure that the treats could not be blocked by making the chute completely vertical instead of sloped.",
    videoAfterOutcome: true,
    hideSourceAction: true,
    videos: [
      {
        src: "../assets/projects/cat-treat-dispenser/cat_treat_dispenser.mp4",
        poster: "../assets/projects/cat-treat-dispenser/cat-treat-dispenser-poster-8s.png",
        caption: "Cat treat dispenser demonstration",
        aspectRatio: "16 / 9",
        fit: "contain"
      }
    ],
    source: "https://peterkellyyy.wixsite.com/peterkelly/cat-treat-dispenser"
  },
  "audio-variometer": {
    title: "Audio Variometer",
    eyebrow: "Flight Instrumentation",
    lede: "A compact, rechargeable instrument that converts barometric vertical speed into visual and audible guidance for glider pilots.",
    hero: "../assets/projects/audio-variometer/01-bf35d4888dbe.png",
    heroAlt: "Portable audio variometer with OLED display",
    tags: ["Arduino", "Barometric sensing", "Audio interface", "Compact packaging"],
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
    videos: [
      {
        src: "../assets/projects/audio-variometer/audio_visual_variometer.mp4",
        caption: "Audio and visual variometer demonstration",
        aspectRatio: "16 / 9",
        fit: "contain"
      }
    ],
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
  paragraphs.forEach((copy) => {
    if (typeof copy === "string") {
      container.append(el("p", "", copy));
      return;
    }

    const paragraph = el("p");
    copy.parts?.forEach((part) => {
      if (typeof part === "string") {
        paragraph.append(document.createTextNode(part));
        return;
      }

      const link = el("a", "", part.text);
      link.href = part.href;
      paragraph.append(link);
    });
    container.append(paragraph);
  });
};

const applyMediaPresentation = (video, media = {}) => {
  if (media.aspectRatio) video.style.setProperty("--media-aspect", media.aspectRatio);
  if (media.background) video.style.setProperty("--media-bg", media.background);
  if (media.fit) video.style.setProperty("--media-fit", media.fit);
};

// Wraps a controllable <video> in a shell with a large custom play-button overlay
// so paused videos clearly invite playback while native controls handle scrubbing.
const decorateWithPlayOverlay = (figure, video, media = {}) => {
  figure.classList.add("local-video-player");
  const shell = el("div", "local-video-shell");
  const playButton = el("button", "local-video-play-button");
  playButton.type = "button";
  playButton.setAttribute("aria-label", `Play ${media.caption || media.label || "video"}`);
  playButton.append(el("span", "local-video-play-icon", ""));
  playButton.addEventListener("click", () => {
    video.play().catch(() => {});
  });
  video.addEventListener("play", () => figure.classList.add("is-video-started"));
  video.addEventListener("pause", () => figure.classList.remove("is-video-started"));
  video.addEventListener("ended", () => figure.classList.remove("is-video-started"));
  shell.append(video, playButton);
  return shell;
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
  "berkshire-grey": {
    href: "berkshire-grey.html",
    thumb: "../assets/jobs/Berkshire Grey/carouselai.jpg",
    thumbClass: "portfolio-thumb portfolio-thumb-cover",
    alt: "Berkshire Grey robotic manipulation cell",
    date: "Oct 2024 - Present",
    title: "Robotic Manipulation R&D",
    summary: "End effectors, robot data infrastructure, and production-ready hardware for intelligent automation.",
    company: "Berkshire Grey"
  },
  fx10: {
    href: "fx10.html",
    thumb: "../assets/projects/fx10/fx10 thumbnail.png",
    thumbClass: "portfolio-thumb portfolio-thumb-cover",
    alt: "Markforged FX10 metal printhead thumbnail",
    date: "Jun 2022 - Aug 2024",
    title: "Markforged FX10 Metal Printhead",
    summary: "Next-generation swappable metal printhead I developed from initial R&D through EVT.",
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
    thumbClass: "portfolio-thumb portfolio-thumb-cover finefeatures-thumb-lower",
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
    date: "Jan 2023 - May 2023",
    title: "Continuous-Fiber Co-parts",
    summary: "Interlocking printed components optimized for reinforcement across multiple load planes.",
    company: "Markforged"
  },
  harpy: {
    href: "harpy.html",
    thumb: "../assets/projects/harpy/harpy leg.png",
    thumbClass: "harpy-thumb harpy-thumb-upper",
    alt: "Harpy leg actuator assembly",
    date: "May 2020 - May 2021",
    title: "Legged Robotics Research",
    summary: "Lightweight robotic platform for thruster-assisted locomotion and reduced-gravity research.",
    company: "SiliconSynapse Lab"
  },
  aerobat: {
    href: "aerobat.html",
    thumb: "../assets/projects/aerobat/wing-still.png",
    thumbClass: "portfolio-thumb portfolio-thumb-cover aerobat-thumb-lower",
    alt: "Aerobat biomimetic flapping robot",
    date: "Jan 2020 - Sep 2020",
    title: "Flapping Wing Robotics Research",
    summary: "Parametric, flexible wing mechanisms inspired by the flight of fruit bats.",
    company: "SiliconSynapse Lab"
  },
  "rotary-rf-pcb-manufacturing": {
    href: "rotary-rf-pcb-manufacturing.html",
    thumb: "../assets/projects/rotary-rf-pcb-manufacturing/rotarypcb.png",
    thumbClass: "portfolio-thumb portfolio-thumb-cover",
    alt: "Rotary RF PCB material coating system",
    date: "Nov 2018 - Apr 2019",
    title: "Rotary RF PCB System",
    summary: "Large-format heated coating machine delivered at less than half the prior-system cost.",
    company: "Winchester Technologies"
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
    thumb: "../assets/projects/asthma-inhaler-assistive-device/inhaler-desktop.png",
    thumbClass: "portfolio-thumb portfolio-thumb-cover",
    alt: "Breath-triggered asthma inhaler assistive device",
    date: "Jul 2019 - Dec 2019",
    title: "Inhaler Assistive Device",
    summary: "Award-winning breath-triggered device designed for users with limited motor ability.",
    company: "Northeastern University"
  },
  "3dtrails": {
    href: "3dtrails.html",
    thumb: "../assets/projects/3dtrails/angledScene3sq.png",
    thumbClass: "portfolio-thumb portfolio-thumb-cover",
    alt: "Printed topographic trail map",
    date: "Dec 2022 - Present",
    title: "3DTrails",
    summary: "Geospatial data transformed into multicolor printed trail maps and custom installations.",
    company: "Personal Project"
  },
  soaring: {
    href: "soaring.html",
    thumb: "../assets/projects/soaring/asw19.jpg",
    thumbClass: "portfolio-thumb portfolio-thumb-cover",
    alt: "ASW-19B glider in flight",
    date: "July 2013 - Present",
    title: "Soaring",
    summary: "Sailplane flying, cross-country decision-making, aviation mentorship, and a lifelong love of flight.",
    company: "Personal Project"
  },
  "audio-variometer": {
    href: "audio-variometer.html",
    thumb: "../assets/projects/audio-variometer/vario-desktop.png",
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
  "berkshire-grey",
  "fx10",
  "harpy",
  "co-parts",
  "finefeatures",
  "px100",
  "3dtrails",
  "aerobat",
  "asthma-inhaler-assistive-device",
  "cat-treat-dispenser",
  "rotary-rf-pcb-manufacturing",
  "morse-corp",
  "irobot",
  "sikorsky",
  "audio-variometer",
  "soaring"
];

const appendHeroDate = (container) => {
  const date = moreProjectCards[key]?.date;
  if (date) container.append(el("p", "fx10-project-date", date));
};

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

// Renders a project whose layout is described entirely by a `blocks` array in
// the catalog. Each block is a <section>; each part inside it is a direct child
// (copy column, figure, grid, video, etc.). This keeps bespoke case-study
// layouts (FX10, co-parts) fully data-driven from projectCatalog.
const buildBlockPart = (part) => {
  switch (part.kind) {
    case "copy": {
      const copy = el("div", part.copyClass);
      if (part.kicker) copy.append(el("p", "fx10-section-kicker", part.kicker));
      // Entries are paragraphs (string / { parts }) or an inline figure
      // ({ figure: {...} }), rendered in order so images can sit between paragraphs.
      part.paragraphs?.forEach((entry) => {
        if (entry && entry.figure) {
          copy.append(buildBlockPart({ kind: "imageFigure", ...entry.figure }));
        } else if (entry && entry.figureGroup) {
          copy.append(buildBlockPart({ kind: "figureGroup", ...entry.figureGroup }));
        } else {
          addParagraphs(copy, [entry]);
        }
      });
      if (part.actions) {
        const actions = el("div", "project-actions");
        part.actions.forEach((link) => actions.append(createLink(link)));
        copy.append(actions);
      }
      return copy;
    }
    case "imageFigure": {
      const figure = el("figure", part.figureClass);
      const image = el("img");
      image.src = part.src;
      image.alt = part.alt;
      image.loading = "lazy";
      figure.append(image);
      if (part.caption) figure.append(el("figcaption", "", part.caption));
      return figure;
    }
    case "figureGroup": {
      const group = el("div", part.groupClass);
      part.figures?.forEach((figureData) => {
        group.append(buildBlockPart({ kind: "imageFigure", ...figureData }));
      });
      return group;
    }
    case "youtube": {
      const figure = el("figure", part.figureClass);
      const iframe = el("iframe");
      const embedUrl = new URL(project.embed.src);
      embedUrl.searchParams.set("origin", window.location.origin);
      iframe.src = embedUrl.href;
      iframe.title = part.iframeTitle || project.embed.title;
      if (part.sized) {
        iframe.width = "560";
        iframe.height = "315";
      }
      iframe.loading = "lazy";
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      figure.append(iframe, el("figcaption", "", part.caption || project.embed.title));
      return figure;
    }
    case "video": {
      const video = el("video", part.videoClass);
      video.src = part.src;
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.setAttribute("aria-label", part.ariaLabel || "");
      if (part.caption || part.figureClass) {
        const figure = el("figure", part.figureClass);
        figure.append(video);
        if (part.caption) figure.append(el("figcaption", "", part.caption));
        return figure;
      }
      return video;
    }
    case "contentPair": {
      const pair = el("div", part.pairClass);
      part.parts?.forEach((childPart) => pair.append(buildBlockPart(childPart)));
      return pair;
    }
    case "figurePair": {
      const pair = el("div", "standard-section-figure-pair");
      part.figures.forEach((figureData) => {
        const figure = el("figure", "standard-section-paired-figure");
        const image = el("img");
        image.src = figureData.src;
        image.alt = figureData.alt || figureData.caption || "";
        image.loading = "lazy";
        figure.append(image);
        if (figureData.caption) figure.append(el("figcaption", "", figureData.caption));
        pair.append(figure);
      });
      return pair;
    }
    case "grid": {
      const grid = el("div", part.gridClass);
      part.cards.forEach(([src, title, copy]) => {
        const card = el("article", "fx10-highlight-card");
        const image = el("img");
        image.src = src;
        image.alt = title;
        image.loading = "lazy";
        card.append(image, el("h3", "", title), el("p", "", copy));
        grid.append(card);
      });
      return grid;
    }
    case "splitPanel": {
      const panel = el("div", part.panelClass);
      panel.append(el("p", "fx10-section-kicker", part.kicker));
      part.items.forEach((item) => {
        const itemEl = el("div", part.itemClass);
        itemEl.append(el("span", part.iconClass, ""));
        if (item.title) itemEl.append(el("h3", "", item.title));
        itemEl.append(el("p", "", item.copy));
        panel.append(itemEl);
      });
      return panel;
    }
    case "image": {
      const image = el("img");
      image.src = part.src;
      image.alt = part.alt;
      image.loading = "lazy";
      return image;
    }
    default:
      return document.createComment(`unknown block part: ${part.kind}`);
  }
};

const buildBlockSection = (block) => {
  const section = el("section", block.sectionClass);
  if (block.kicker) section.append(el("p", "fx10-section-kicker", block.kicker));
  block.parts.forEach((part) => section.append(buildBlockPart(part)));
  return section;
};

const renderBlockProject = () => {
  document.title = `${project.title} | Peter Kelly`;
  document.body.classList.add("fx10-case-study");
  root.closest(".project-main")?.classList.add("fx10-project-main");

  const hero = el("section", "fx10-hero");
  const heroCopy = el("div", "fx10-hero-copy");
  heroCopy.append(
    el("p", "fx10-eyebrow", project.eyebrow),
    el("h1", "", project.title)
  );
  appendHeroDate(heroCopy);
  heroCopy.append(el("p", "fx10-lede", project.lede));

  const tags = el("div", "fx10-tags");
  project.tags?.forEach((tag) => tags.append(el("span", "", tag)));
  heroCopy.append(tags);

  const heroMedia = el("div", `fx10-hero-media ${project.heroClass || ""}`.trim());
  const heroImage = el("img");
  heroImage.src = project.hero;
  heroImage.alt = project.heroAlt;
  heroImage.loading = "eager";
  heroMedia.append(heroImage);
  hero.append(heroCopy, heroMedia);
  root.append(hero);

  project.blocks.forEach((block) => root.append(buildBlockSection(block)));
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
    el("h1", "", project.title)
  );
  appendHeroDate(heroCopy);
  heroCopy.append(el("p", "fx10-lede", project.lede));

  const tags = el("div", "fx10-tags");
  project.tags?.forEach((tag) => tags.append(el("span", "", tag)));
  heroCopy.append(tags);

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
    const glance = el(project.overviewMedia.type === "mediaGrid" ? "div" : "figure", "fx10-glance");
    if (project.overviewMedia.type === "mediaGrid") {
      const mediaGrid = el("div", "overview-media-grid");
      project.overviewMedia.items.forEach((mediaData) => {
        const mediaItem = el("figure", "overview-media-item");
        if (mediaData.type === "video") {
          const video = el("video");
          video.src = mediaData.src;
          video.autoplay = mediaData.autoplay !== false && !mediaData.playOnceOnView;
          video.loop = mediaData.loop !== false && !mediaData.playOnceOnView;
          video.muted = true;
          video.playsInline = true;
          video.preload = "metadata";
          video.setAttribute("aria-label", mediaData.caption || "");
          applyMediaPresentation(video, mediaData);
          mediaItem.append(video);
          if (mediaData.playOnceOnView) playOnceOnView(video);
        } else {
          const image = el("img");
          image.src = mediaData.src;
          image.alt = mediaData.alt || mediaData.caption || "";
          image.loading = "lazy";
          applyMediaPresentation(image, mediaData);
          mediaItem.append(image);
        }
        if (mediaData.caption) mediaItem.append(el("figcaption", "", mediaData.caption));
        mediaGrid.append(mediaItem);
      });
      glance.append(mediaGrid);
    } else if (project.overviewMedia.type === "video") {
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
    } else if (project.overviewMedia.type === "imagePair") {
      const pair = el("div", "fx10-glance-image-pair");
      project.overviewMedia.images.forEach((imageData) => {
        const image = el("img");
        image.src = imageData.src;
        image.alt = imageData.alt || project.overviewMedia.caption || "";
        image.loading = "lazy";
        pair.append(image);
      });
      glance.append(pair);
    } else {
      const glanceImage = el("img");
      glanceImage.src = project.overviewMedia.src;
      glanceImage.alt = project.overviewMedia.caption || "";
      glanceImage.loading = "lazy";
      glance.append(glanceImage);
    }
    if (project.overviewMedia.caption) glance.append(el("figcaption", "", project.overviewMedia.caption));
    if (project.overviewMedia.figures?.length) {
      const figurePair = el("div", "standard-section-figure-pair overview-supplemental-figures");
      project.overviewMedia.figures.forEach((figureData) => {
        const figure = el("figure", "standard-section-paired-figure");
        const image = el("img");
        image.src = figureData.src;
        image.alt = figureData.alt || figureData.caption || "";
        image.loading = "lazy";
        figure.append(image);
        if (figureData.caption) figure.append(el("figcaption", "", figureData.caption));
        figurePair.append(figure);
      });
      glance.append(figurePair);
    }
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

  if (project.featureBreakdown?.length) {
    const breakdown = el("section", "fx10-section module-breakdown-section");
    project.featureBreakdown.forEach((item) => {
      const row = el("article", "module-breakdown-row");
      const image = el("img", "module-breakdown-image");
      image.src = item.image;
      image.alt = item.alt || item.title;
      image.loading = "lazy";
      const copy = el("div", "module-breakdown-copy");
      copy.append(el("h2", "", item.title));
      const list = el("ul", "module-breakdown-list");
      item.bullets.forEach((bullet) => list.append(el("li", "", bullet)));
      copy.append(list);
      row.append(image, copy);
      breakdown.append(row);
    });
    root.append(breakdown);
  }

  if (project.designSpread) {
    const designSpread = el("section", "fx10-section asthma-design-spread");
    designSpread.append(el("p", "fx10-section-kicker", "Design"));

    const topGrid = el("div", "asthma-design-top");
    const introCopy = el("div", "asthma-design-copy");
    addParagraphs(introCopy, project.designSpread.intro || []);
    const sideFigures = el("div", "asthma-design-side-figures");
    project.designSpread.sideFigures?.forEach((figureData) => {
      const figure = el("figure", "asthma-design-figure");
      if (figureData.type === "video") {
        const video = el("video");
        video.src = figureData.src;
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.playsInline = true;
        video.preload = "metadata";
        video.setAttribute("aria-label", figureData.caption || "");
        applyMediaPresentation(video, figureData);
        figure.append(video);
      } else {
        const image = el("img");
        image.src = figureData.src;
        image.alt = figureData.alt || figureData.caption || "";
        image.loading = "lazy";
        figure.append(image);
      }
      if (figureData.caption) figure.append(el("figcaption", "", figureData.caption));
      sideFigures.append(figure);
    });
    topGrid.append(introCopy, sideFigures);
    designSpread.append(topGrid);

    if (project.designSpread.pcbIntro) {
      designSpread.append(el("p", "asthma-design-copy asthma-design-wide-copy", project.designSpread.pcbIntro));
    }

    if (project.designSpread.pcbFigures?.length) {
      const pcbFigure = el("figure", "asthma-pcb-figure");
      const pcbGrid = el("div", "asthma-pcb-grid");
      project.designSpread.pcbFigures.forEach((figureData) => {
        const image = el("img");
        image.src = figureData.src;
        image.alt = figureData.alt || project.designSpread.pcbCaption || "";
        image.loading = "lazy";
        pcbGrid.append(image);
      });
      pcbFigure.append(pcbGrid);
      if (project.designSpread.pcbCaption) pcbFigure.append(el("figcaption", "", project.designSpread.pcbCaption));
      designSpread.append(pcbFigure);
    }

    if (project.designSpread.outro) {
      designSpread.append(el("p", "asthma-design-copy asthma-design-wide-copy", project.designSpread.outro));
    }

    root.append(designSpread);
  }

  project.sections?.forEach((section) => {
    const design = el("section", `fx10-section fx10-design-section ${section.className || ""}`.trim());
    design.append(el("p", "fx10-section-kicker", section.kicker));
    const designCopy = el("div", "fx10-design-copy fx10-generic-design-copy");
    if (section.title) designCopy.append(el("h2", "", section.title));
    addParagraphs(designCopy, section.body || []);
    design.append(designCopy);
    if (section.asideFigure) {
      const figure = el("figure", "standard-section-paired-figure standard-section-aside-figure");
      const image = el("img");
      image.src = section.asideFigure.src;
      image.alt = section.asideFigure.alt || section.asideFigure.caption || "";
      image.loading = "lazy";
      figure.append(image);
      if (section.asideFigure.caption) figure.append(el("figcaption", "", section.asideFigure.caption));
      design.classList.add("fx10-design-section-with-media");
      design.append(figure);
    }
    if (section.asideVideo) {
      const figure = el("figure", "fx10-overview-video standard-section-video standard-section-aside-video");
      const video = el("video");
      video.src = section.asideVideo.src;
      video.autoplay = !section.asideVideo.controls;
      video.loop = !section.asideVideo.controls;
      video.muted = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.controls = !!section.asideVideo.controls;
      if (section.asideVideo.poster) video.poster = section.asideVideo.poster;
      video.setAttribute("aria-label", section.asideVideo.label || section.asideVideo.caption || "");
      applyMediaPresentation(video, section.asideVideo);
      if (section.asideVideo.controls) {
        figure.append(decorateWithPlayOverlay(figure, video, section.asideVideo));
      } else {
        figure.append(video);
      }
      if (section.asideVideo.caption) figure.append(el("figcaption", "", section.asideVideo.caption));
      design.classList.add("fx10-design-section-with-media");
      design.append(figure);
    }
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
    if (section.afterFigureBody?.length) {
      const afterCopy = el("div", "fx10-design-copy fx10-generic-design-copy standard-section-after-figure-copy");
      addParagraphs(afterCopy, section.afterFigureBody);
      design.append(afterCopy);
    }
    if (section.fullWidthFigure) {
      const figure = el("figure", "fx10-overview-video standard-section-figure standard-section-full-figure");
      const image = el("img");
      image.src = section.fullWidthFigure.src;
      image.alt = section.fullWidthFigure.alt || section.fullWidthFigure.caption || "";
      image.loading = "lazy";
      figure.append(image);
      if (section.fullWidthFigure.caption) figure.append(el("figcaption", "", section.fullWidthFigure.caption));
      design.append(figure);
    }
    if (section.figures?.length) {
      const figurePair = el("div", "standard-section-figure-pair");
      section.figures.forEach((figureData) => {
        const figure = el("figure", "standard-section-paired-figure");
        const image = el("img");
        image.src = figureData.src;
        image.alt = figureData.alt || figureData.caption || "";
        image.loading = "lazy";
        figure.append(image);
        if (figureData.caption) figure.append(el("figcaption", "", figureData.caption));
        figurePair.append(figure);
      });
      design.append(figurePair);
    }
    if (section.inlineVideo) {
      const figure = el("figure", "fx10-overview-video standard-section-video");
      const video = el("video");
      video.src = section.inlineVideo.src;
      video.autoplay = !section.inlineVideo.controls;
      video.loop = !section.inlineVideo.controls;
      video.muted = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.controls = !!section.inlineVideo.controls;
      if (section.inlineVideo.poster) video.poster = section.inlineVideo.poster;
      video.setAttribute("aria-label", section.inlineVideo.label || section.inlineVideo.caption || "");
      applyMediaPresentation(video, section.inlineVideo);
      if (section.inlineVideo.controls) {
        figure.append(decorateWithPlayOverlay(figure, video, section.inlineVideo));
      } else {
        figure.append(video);
      }
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

  const appendVideoContent = (container) => {
    project.videos?.forEach((entry) => {
      const videoData = Array.isArray(entry)
        ? { src: entry[0], poster: entry[1], caption: entry[2] }
        : entry;
      const figure = el("figure", "fx10-overview-video");
      const video = el("video");
      video.controls = true;
      video.playsInline = true;
      video.preload = "metadata";
      if (videoData.poster) video.poster = videoData.poster;
      applyMediaPresentation(video, videoData);
      video.setAttribute("aria-label", videoData.label || videoData.caption || "");
      const source = el("source");
      source.src = videoData.src;
      source.type = "video/mp4";
      video.append(source);
      figure.append(decorateWithPlayOverlay(figure, video, videoData), el("figcaption", "", videoData.caption));
      container.append(figure);
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
      container.append(figure);
    }
  };

  const appendVideoSection = () => {
    if (!project.videos?.length && !project.embed) return;
    const videoSection = el("section", "fx10-section fx10-launch-video-section");
    videoSection.append(el("p", "fx10-section-kicker", "In Motion"));
    appendVideoContent(videoSection);

    root.append(videoSection);
  };

  if (!project.videoAfterOutcome) appendVideoSection();

  const outcome = el("section", "fx10-section fx10-outcome-section");
  outcome.append(el("p", "fx10-section-kicker", "Outcome"), el("p", "", project.outcome));
  if (project.videoAfterOutcome) appendVideoContent(outcome);
  if (project.outcomeFigures?.length) {
    const figurePair = el("div", "standard-section-figure-pair outcome-supplemental-figures");
    project.outcomeFigures.forEach((figureData) => {
      const figure = el("figure", "standard-section-paired-figure");
      const image = el("img");
      image.src = figureData.src;
      image.alt = figureData.alt || figureData.caption || "";
      image.loading = "lazy";
      figure.append(image);
      if (figureData.caption) figure.append(el("figcaption", "", figureData.caption));
      figurePair.append(figure);
    });
    outcome.append(figurePair);
  }
  if (project.links?.length || (project.source && !project.hideSourceAction)) {
    const actions = el("div", "project-actions");
    project.links?.forEach((link) => actions.append(createLink(link)));
    if (project.source && !project.hideSourceAction) actions.append(createLink(["View original page", project.source], "project-action project-action-secondary"));
    outcome.append(actions);
  }
  root.append(outcome);
  renderMoreProjects();
};

if (!root || !project) {
  if (root) root.append(el("p", "lede", "Portfolio item data could not be loaded."));
} else if (project.blocks) {
  renderBlockProject();
} else {
  renderStandardProject();
}
