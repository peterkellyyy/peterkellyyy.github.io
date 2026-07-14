// All portfolio content data in one place:
//   projectCatalog  - case-study body content (media, sections, tags) for each
//                     project page. The hero's eyebrow/title/lede are NOT here;
//                     they come from moreProjectCards so the hero and the
//                     portfolio cards always show the same text.
//   moreProjectCards - single source of truth for portfolio card text: company,
//                     title, summary, date. Drives the "More projects" rail and
//                     the project-page hero (see project-page.js). The static
//                     homepage cards in index.html mirror these values.
//   projectOrder    - site-wide project ordering (homepage grid + "More projects" rail)
//   temporarilyHiddenPortfolioCards - cards hidden from the homepage grid
// Load this file before portfolio-order.js (homepage) or project-page.js (project pages).
const projectCatalog = {
  "berkshire-grey": {
    hero: "../assets/jobs/Berkshire Grey/carouselai.jpg",
    heroAlt: "Berkshire Grey robotic manipulation cell",
    heroClass: "portfolio-thumb-cover",
    tags: ["Robot-learning hardware", "End effectors", "Automated validation"],
    overview: [
      "At Berkshire Grey I lead mechanical R&D for robotic manipulation: end effectors for challenging SKUs, Universal Manipulation Interface (UMI) data collection hardware, automated validation fixtures, and bimanual pick cells. On each program I carry the hardware from ambiguous research requirements through mechanism architecture, detailed CAD, fabrication, integration, validation, and deployment.",
      "Much of this work is unreleased. The write-ups below focus on engineering decisions, system scope, and measured outcomes, and deliberately omit proprietary geometry, internal test methods, and program details."
    ],
    overviewMedia: {
      type: "video",
      src: "../assets/jobs/Berkshire Grey/versa.webm",
      caption: "Public Berkshire Grey footage of the deployment environment. The unreleased systems described below are not shown.",
      aspectRatio: "1400 / 1080",
      fit: "contain"
    },
    sections: [
      {
        kicker: "Robot-Learning Hardware",
        title: "Human demonstration collection at production scale",
        body: [
          "I architected, built, and deployed 11 ergonomic UMI grippers and the data acquisition cells around them, translating fast-changing research requirements into hardware that operators rely on all day, every day."
        ],
        bullets: [
          "Integrated haptic feedback, tool balancing, 6-DoF OptiTrack pose tracking, onboard cameras, controls, and compute into complete operator-facing systems",
          "Owned the full delivery path: cell layout, structure designs, cable routing, drawings, supplier coordination, build, commissioning, and deployment",
          "The deployed fleet sustains collection of more than 70,000 robot-learning episodes per week"
        ]
      },
      {
        kicker: "Robot Cells",
        title: "Seven bimanual cells in six months",
        body: [
          "I led mechanical design, hands-on build, and commissioning for seven bimanual robot-learning cells, taking each from layout to running hardware on a research timeline."
        ],
        bullets: [
          "Owned structural and guarding design, fabrication drawings, supplier execution, cell integration, and deployment",
          "Designed modular guarding and interfaces for assembly (DFA), cutting per-cell installation from multiple days to three to four hours",
          "Delivered a gravity-compensated GELLO teleoperation arm, with matching URDF, in four days to unblock a fast-moving research need"
        ]
      },
      {
        kicker: "End Effectors",
        title: "Mechanisms for difficult, variable SKUs",
        body: [
          "I develop end effectors for object classes that conventional fixed-geometry tooling cannot handle, balancing grasp force and compliance against mass, reach, collision loads, cycle life, tolerances, and serviceability."
        ],
        bullets: [
          "Invented and validated pneumatic and pinch mechanisms for orientation-independent handling of books and shoeboxes, and for singulating folded garments from clutter without losing the fold",
          "Carried each mechanism through architecture, detailed CAD, rapid fabrication, mechatronic integration, bench testing, and failure analysis"
        ]
      },
      {
        kicker: "Validation",
        title: "Instrumented testing instead of subjective iteration",
        body: [
          "I build automated test hardware that turns grasp performance and durability into repeatable data, so competing concepts are ranked by measurement and regressions are caught before robot-cell integration."
        ],
        bullets: [
          "Designed a modular gripper-evaluation fixture with linear actuators, load cells, swappable mechanisms, and automatic reset of test SKUs between trials",
          "Used the resulting data to rank concepts, expose failure modes, and focus design effort before committing to full system builds"
        ]
      }
    ],
    media: []
  },
  fx10: {
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
              ["../assets/projects/fx10/01-b94fac15ce02.png", "FX10 Metal Print Head", ""],
              ["../assets/projects/fx10/02-def065ceee78.png", "Lower Shroud and Top Cover Removed", ""],
              ["../assets/projects/fx10/03-7b0f59b15173.png", "Front Plane PCB Removed", ""]
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
              { icon: "circuit-board", title: "Electrical Integration", copy: "A front plane PCB tightly integrates sensors, motor drivers, load cell ADCs, among many other components. Flexible flat cables for the load cell and fan PCB make cable routing reliable and assembly simple." },
              { icon: "refresh-cw", title: "Swappable Architecture", copy: "Printhead is able to be swapped with just two screws and fits within the same volume as the FX10 composite printhead." },
              { icon: "flame", title: "Thermal Management", copy: "I designed the heatsink, heater block, and fan architecture to maintain stable hot-end temperatures while keeping the cool zone of the material path below 60 °C." },
              { icon: "wrench", title: "Serviceability", copy: "Designed modular subassemblies for rapid maintenance and replacement." }
            ]
          },
          {
            kind: "splitPanel",
            panelClass: "fx10-list-panel",
            kicker: "Impact",
            itemClass: "fx10-impact-item",
            iconClass: "fx10-check-icon",
            items: [
              { icon: "check", copy: "Enabled metal printing on the FX10 platform with 17-4 PH stainless steel, 316L stainless, steel, and copper." },
              { icon: "check", copy: "Brought printhead hardware to EVT in May 2024 on schedule for August 2024 announcement." },
              { icon: "check", copy: "Increased print speed by 2x relative to previous generation hardware." },
              { icon: "check", copy: "Significantly improved print quality, user experience, serviceability, and lower unit-to-unit variation." },
              { icon: "check", copy: "Supports automatic material changeover for swapping between filament spools." }
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
              "This work helped establish the FX10 as a true multi-material platform rather than a single-material printer, enabling the same machine architecture to support both continuous-fiber composite printing and metal filament printing through a robust, serviceable, and swappable printhead system.",
              "The FX10 metal print head achieves ~2x print speed of the Metal X with significantly improved print quality, lower unit-to-unit variation and better UX. The print head also supports auto material changeover and provides significantly more telemetry (integrated load cells, hall effect sensors) for debugging and print failure detection. The metal print head for the FX10 was announced in August 2024 and began shipping in March 2025."
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
    hero: "../assets/projects/px100/production_screws.jpg",
    heroAlt: "Metal screws produced with the PX100 binder jet process",
    heroClass: "center-hero-media",
    tags: ["Lab buildout", "Metal binder jetting", "System validation"],
    overview: [
      "The PX100 is a metal binder jet printer developed by Markforged Sweden (formerly Digital Metal), which was acquired by Markforged in 2022. I was responsible for developing and bringing binder jetting expertise, in addition to building out and managing the PX100 lab at the Markforged headquarters in Waltham, MA."
    ],
    overviewMedia: {
      src: "../assets/projects/px100/px100.png",
      caption: "Markforged PX100 metal binder jetting 3D printer"
    },
    sections: [
      {
        kicker: "Process",
        body: [
          "My time on the PX100 program began with a 3 week trip to Hoganas, Sweden, where I worked closely with the Markforged Sweden team to learn how to operate and maintain the PX100 system, the powder to part process, and all ancillary equipment. During this period, I not only mastered the operational aspects of the PX100 but also took the initiative to develop internal tools and processes that would streamline debugging mechanical issues, testing print head health, and evaluating printed parts.",
          "Upon returning to the United States, I began planning a dedicated PX100 lab at the Markforged headquarters in Waltham, MA. This involved meticulous planning and execution to ensure the lab was equipped with the necessary infrastructure, equipment, and test fixtures to support the development of the printer ensuring that the lab could serve as a reliable hub for ongoing US-based R&D and testing.",
          "In addition to setting up the lab, I am actively managing US-based validation testing of the PX100 to verify the performance and reliability of the system. This rigorous testing phase was crucial in identifying potential improvements and ensuring that the printer met the high standards expected by Markforged customers."
        ],
        asideFigure: {
          src: "../assets/projects/px100/03-e0894cf78f08.png",
          alt: "3D layout used to plan the Waltham PX100 laboratory",
          caption: "3D layout used to plan the Waltham PX100 laboratory"
        }
      }
    ],
    outcomeLabel: "Results",
    outcome: "Two PX100 systems were shipped to customers in Q2 of 2024, and the first installation of a PX100 (outside of Markforged Sweden) in the Markforged office in Waltham served as a critical point to discover issues in the installation/commissioning process, in addition to identifying potential issues prior to other printers reaching customers. For me personally, the combination of hands-on learning in Sweden and practical implementation in Waltham has provided me with invaluable experience in bring up and managing production-grade additive manufacturing technologies.",
    source: "https://peterkellyyy.wixsite.com/peterkelly/px100"
  },
  "co-parts": {
    hero: "../assets/projects/co-parts/01-e66ed0c40c37.jpg",
    heroAlt: "Continuous-fiber reinforced co-part assembly",
    tags: ["Composite design", "Process development", "Mechanical testing"],
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
              "Continuous carbon fiber can make an FFF part exceptionally strong in the print plane, but it cannot reinforce features oriented through the layers. Parts with critical loads in multiple directions therefore force a compromise: orient one feature well and leave another dependent on weaker interlayer bonds.",
              "I developed and experimentally validated a co-part design method to remove that constraint. A monolithic model is decomposed into interlocking components, each component is printed in the orientation best suited to its primary load, and the assembly transfers load across reinforced interfaces. The method works on standard three-axis printers without hardware changes, increased ultimate load by as much as 6.4× over equivalent plastic-only parts, and was published with two colleagues in the Rapid Prototyping Journal."
            ]
          },
          {
            kind: "imageFigure",
            figureClass: "co-parts-figure co-parts-overview-image",
            src: "../assets/projects/co-parts/co-part assembly.png",
            alt: "Monolithic mounting plate, assembled co-part, and co-part assembly strategy",
            caption: "From monolithic part to an assembly reinforced across perpendicular load planes"
          },
          {
            kind: "youtube",
            figureClass: "fx10-overview-video co-parts-overview-video",
            caption: "I wrote and presented this explanation of the co-part method; it has reached more than 80,000 views"
          }
        ]
      },
      {
        sectionClass: "fx10-section co-parts-process-section",
        parts: [
          {
            kind: "copy",
            copyClass: "fx10-design-copy fx10-generic-design-copy co-parts-process-copy",
            kicker: "Design Method",
            paragraphs: [
              "The method targets parts whose critical features need incompatible build orientations: perpendicular bosses, thin protrusions in different planes, high-aspect-ratio features, or any geometry loaded across layer lines. A tent-pole mounting plate made the conflict clear. Its four mounting holes carry in-plane loads while the central boss is pulled perpendicular to the plate, so no single build orientation can place continuous fiber around both load paths.",
              {
                figureGroup: {
                  groupClass: "co-parts-break-pair",
                  figures: [
                    { figureClass: "co-parts-figure co-parts-break", src: "../assets/projects/co-parts/break1.png", alt: "Printed mounting plate co-parts before assembly", caption: "The mounting plate separated into two co-parts" },
                    { figureClass: "co-parts-figure co-parts-break", src: "../assets/projects/co-parts/break2.png", alt: "Mounting plate co-part interface detail", caption: "The co-part interface, where load pulls one part against the other" }
                  ]
                }
              },
              "I separated the geometry with a Boolean subtraction, oriented each co-part for its own load case, and routed continuous fiber along both primary load paths. The interface was designed so the applied force seats a flared base against a reinforced pocket instead of relying on interlayer adhesion. The zero-clearance parts were press-fit with an arbor press; geometries with reversing or multidirectional loads can instead use adhesive or mechanically locking interfaces."
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
                  "The workflow begins by orienting the largest critical feature in the strong XY plane. Any remaining feature loaded across the layers becomes a candidate co-part. In CAD, I define the mating interface on that feature and use Boolean subtraction to generate its matching pocket in the parent geometry.",
                  "Each co-part is then oriented and reinforced independently in the slicer, printed in the same build, and assembled. Because iteration is concentrated at the interface, fit can be tuned quickly with small test coupons before committing to a complete print. This makes the method practical for standard engineering workflows rather than a one-off demonstration."
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
            caption: "Separating the mounting plate into complementary co-parts in SOLIDWORKS"
          }
        ]
      },
      {
        sectionClass: "fx10-section fx10-design-section co-parts-testing-section",
        kicker: "Experimental Validation",
        parts: [
          {
            kind: "copy",
            copyClass: "fx10-design-copy fx10-generic-design-copy",
            paragraphs: [
              "I compared four fabrication strategies where applicable: a monolithic plastic control, plastic-only co-parts, a monolithic part with continuous fiber in one plane, and fiber-reinforced co-parts. Three specimens were tested per condition, with every sample vacuum-dried for 48 hours beforehand to control moisture-dependent variation.",
              "I designed custom fixtures that reproduced each part's intended loading and tested every specimen to failure on an Instron 3369 with a 50 kN load cell. Two complete demonstration parts evaluated system-level behavior, while snap-fit, cylindrical-post, and loop coupons isolated features that are commonly weakened by an unfavorable build orientation."
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
              "The experiments showed that co-part decomposition can overcome a fundamental limitation of three-axis composite FFF without changing the printer. Fiber-reinforced co-parts sustained up to 6.4× the ultimate load of equivalent plastic-only parts while placing reinforcement in otherwise incompatible planes.",
              "The method and validation results were published open access in the Rapid Prototyping Journal. I also translated the research into an educational video viewed more than 80,000 times, making the workflow accessible to engineers outside the original study."
            ],
            actions: [
              ["Read the open-access paper", "https://www.emerald.com/rpj/article-pdf/29/11/64/2307484/rpj-12-2022-0415.pdf"],
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
    hero: "../assets/projects/harpy/harpy leg.png",
    heroAlt: "Harpy leg actuator assembly",
    tags: ["Research robotics", "Actuator design", "Multibody simulation", "Hardware validation", "Composite fabrication"],
    overview: [
      "For my master's thesis at Northeastern's SiliconSynapse Lab, I developed the electromechanical architecture for Harpy, a bipedal research robot with six leg actuators, two thrust-vectoring actuators, and two electric ducted fans. Inspired by birds that coordinate their wings and legs to jump, Harpy was built to study how controllable thrust could improve balance, reduce impact loads, and extend the capabilities of legged locomotion.",
      "I owned actuator selection and packaging, composite housings, carbon fiber leg structures, thruster integration, support electronics, multibody simulation, and physical leg testing. The design balanced three system-level constraints: thrust greater than the robot's weight, legs robust to repeated free-fall impacts, and modular hardware that researchers could revise, test, and service quickly."
    ],
    overviewMedia: {
      src: "../assets/projects/harpy/harpy-render.png",
      caption: "Harpy robot render",
    },
    sections: [
      {
        kicker: "Leg Design",
        body: [
          "Each three-DoF leg combined sagittal hip, frontal hip, and knee actuation in a pantograph mechanism that used actuator torque efficiently while avoiding knee inversion and singular configurations. I designed the surrounding pelvis interface, knee assembly, and carbon fiber tube-and-plate structure. Oval tubes concentrated bending stiffness in the high-load sagittal plane, reducing mass relative to round tubes of equivalent stiffness.",
          "To isolate the transmissions from ground impacts, I placed a passive shock absorber in series with the pantograph control rod. A preloaded spring kept the leg rigid during normal walking, then compressed under peak loads to protect the drivetrain and return energy during a jump. Interchangeable 1.0 to 10.5 N/mm springs and adjustable preload allowed compliance to be tuned between experiments without redesigning the leg."
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
          "Because actuators dominated the robot's mass budget, I began with a system-level trade study. I compared direct drive, planetary, spur, belt, and strain-wave transmissions across torque density, backdrivability, and backlash, then evaluated more than 40 brushless motors. The selected 30:1 Harmonic Drive and T-Motor Antigravity 4006 delivered 8.5 Nm of peak torque in a complete 270 g leg actuator.",
          "I designed the integrated housing around the motor, bearings, transmission, and output structure. I used 316 stainless at wear-critical bearing interfaces and 7075 aluminum for the remaining machined structure, balancing durability, stiffness, and mass. FEA verified the output flange at twice the transmission's rated peak torque, while composite FDM enabled lightweight geometry for alignment, packaging, and load transfer.",
          "I developed an embedded-fabrication process for the high-load printed assemblies. Bearings, heat-set inserts, and carbon fiber plates were placed during paused prints, allowing the printed geometry to locate structural elements while the reinforced material—not an adhesive joint—carried pullout loads."
        ],
        figure: {
          src: "../assets/projects/harpy/actuator-exploded.png",
          alt: "Exploded view of the Harpy actuator architecture",
          caption: "Exploded leg joint actuator architecture"
        },
        afterFigureBody: [
          "Continuous carbon fiber layers turned the printed housings into composite sandwich structures: stiff across the critical bending paths and light elsewhere. I used the same repeatable print-and-pause process for the leg and thruster actuators, combining precise printed alignment features with metal and composite elements at the load-bearing interfaces."
        ],
        fullWidthFigure: {
          src: "../assets/projects/harpy/embedThruster.png",
          alt: "Embedded fabrication process for Harpy thruster actuator housing",
          caption: "Embedded composite-printing process used for high-load actuator housings"
        },
        bottomAsideBody: [
          "I also designed a motor-drive interface PCB providing EtherCAT, safe-torque-off, USB, and encoder connections, then packaged the drives, ESCs, heatsinks, and wiring for straightforward assembly, debugging, and service."
        ],
        bottomAsideFigure: {
          src: "../assets/projects/harpy/ampPCB.png",
          alt: "Harpy amplifier PCB",
          caption: "Amplifier PCB used in the Harpy electronics stack"
        }
      },
      {
        kicker: "Thrusters",
        body: [
          "A thrust-to-weight ratio above one required at least 68 N of total thrust. Open propellers would have required unsafe 25+ cm blade diameters, while gas turbines were too heavy, hot, and slow to respond. I selected enclosed 80 mm Schuebeler electric ducted fans, each capable of 53 N, providing control authority with protected blades for ground testing.",
          "I selected gimballed thrusters over control flaps for their efficiency and wider steering range, then adapted the leg-actuator architecture to vector each fan. A dual-bearing output isolated the transmission from sustained thruster bending loads so the Harmonic Drive carried torque rather than acting as a structural bearing."
        ],
        fullWidthFigure: {
          src: "../assets/projects/harpy/upperBody.png",
          alt: "Harpy upper body with electric ducted fan thrusters",
          caption: "Harpy upper body with electric ducted fan thrusters"
        }
      },
      {
        kicker: "Simulation",
        className: "harpy-simulation-section",
        body: [
          "Before committing to full-system hardware, I built a MATLAB Simscape Multibody model to estimate joint torques and test how shock-absorber stiffness and thruster force affected drops and hops. The model connected design parameters to actuator loads and quantified how passive compliance and thrust reduced impact peaks.",
          "I swept spring stiffness from 4 to 8 N/mm and thrust from 0 to 40 N. The results identified the knee and sagittal hip as the dominant load paths, with negligible frontal-hip torque in the tested motion; that finding simplified the physical fixture. I then evaluated commanded hop trajectories across thrust levels before running the same experiments on hardware."
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
          "The controls architecture linked a Simulink Real-Time target to eight Elmo motor drives over 10 kHz EtherCAT, while a daisy-chained Nucleo microcontroller commanded the thruster ESCs. The platform supported a tethered 30 V lab supply or untethered 8S LiPo, and a hardware emergency stop removed both motor-drive torque and fan PWM commands.",
          "I designed the mechanical and electrical packaging around the controls stack, including a carbon fiber rack that kept all eight drives on the torso and thermally isolated from the actuator motors. Accessible interfaces and modular assemblies gave the controls team a lightweight platform that could be instrumented, debugged, and reconfigured between experiments."
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
          "I designed a single-leg fixture with an 80 cm linear rail, isolating the highest-load sagittal mechanism for repeatable drop and hop tests before full-robot integration.",
          "The fixture retained the vectoring actuator and ducted fan, enabling direct comparison of assisted and unassisted motion. Hardware tests demonstrated survival of a 55 cm fall, a 16 cm hop, and 10 cm cyclic foot motion at 13 Hz, providing a physical check on the simulated behavior."
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
          "To optimize full-robot component placement, I built a parametric Harpy model in Grasshopper and connected it to an evolutionary solver. Actuator, fan, motor-drive, heatsink, and battery locations became design variables; a fitness function scored each candidate against target center-of-mass and body moment-of-inertia values.",
          "The solver returned families of feasible layouts and could be rerun as hardware changed. This converted mass allocation into a repeatable optimization problem and gave the controls team a direct way to shape the robot's mass properties before mechanical packaging was finalized."
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
    outcome: "Harpy progressed from a research concept to an integrated, buildable platform with defined actuation, fabrication, electronics, controls interfaces, and safety systems. Simulation-guided hardware tests validated the highest-load leg subsystem and established a repeatable path for full-robot integration and future locomotion experiments.",
    media: [],
    outcomeFigures: [
      {
        src: "../assets/projects/harpy/harpyjump.gif",
        alt: "Harpy jump simulation animation",
        caption: "Full Harpy robot being tested at Caltech"
      }
    ],
    hideSourceAction: true,
    source: "https://peterkellyyy.wixsite.com/peterkelly/harpy"
  },
  finefeatures: {
    hero: "../assets/projects/finefeatures/finefeatures-bg.png",
    heroAlt: "Fine-featured copper and stainless steel parts produced on the Markforged Metal X",
    tags: ["Process R&D", "Metal FFF", "Copper", "17-4PH stainless", "Qualification"],
    overview: [
      "Fine Features is a pair of production-ready Metal X print profiles released through Eiger with no hardware changes. I led process development and qualification for pure copper and 17-4PH v2 stainless steel, taking the work from exploratory toolpaths through cross-system validation and customer release.",
      "The profiles improved surface finish, dimensional accuracy, minimum feature size, and interlaminar strength relative to the standard process. The work connected hands-on printing, materials behavior, machine code, and software implementation across the complete print, debind, and sinter workflow."
    ],
    overviewMedia: {
      type: "video",
      src: "../assets/projects/finefeatures/finefeatures-demo.webm",
      caption: "Fine Features process demonstration",
      aspectRatio: "1080 / 1400",
      background: "transparent",
      fit: "contain"
    },
    sections: [
      {
        kicker: "Process Development",
        title: "Finding detail without sacrificing reliability",
        body: [
          "The intuitive first move was a smaller nozzle. I evaluated reduced orifices alongside nozzle temperature, print speed, cooling, extrusion width, and geometry-dependent offsets. Smaller nozzles sharpened detail, but particle-size variation introduced an unacceptable risk of restricted flow and clogging.",
          "Testing showed that a carefully tuned profile using the production nozzle captured much of the detail improvement without the lifetime and reliability penalty of a smaller orifice. Purpose-built coupons and demanding parts exposed minimum holes, pins, walls, gaps, overhangs, and articulated geometry."
        ],
        asideFigure: {
          src: "../assets/projects/finefeatures/05-327a1f4d9f29.png",
          alt: "Copper feature test coupon held in tweezers",
          caption: "Test coupon for holes, pins, slots, walls, and overhangs"
        },
        fullWidthFigure: {
          src: "../assets/projects/finefeatures/02-d477f3d24f5e.png",
          alt: "Metal X print head depositing an intricate articulated copper dragon",
          caption: "Prototype profile printing an articulated copper dragon"
        }
      },
      {
        kicker: "Qualification",
        title: "Validating the complete powder-to-part process",
        body: [
          "A successful green part was only the beginning. The released profile had to survive solvent debinding, sintering, and predictable shrinkage while maintaining dimensional and mechanical targets. Qualification therefore spanned multiple printers, material lots, debinders, and furnaces.",
          "For issues the production slicer could not yet express, I generated machine code directly to test prototype toolpaths. I then worked with software engineering to translate those findings into customer-facing Eiger parameters and repeatable qualification builds."
        ],
        asideFigure: {
          src: "../assets/projects/finefeatures/03-7ed736fc7ae5.jpg",
          alt: "Sintered articulated pure copper dragon held in a hand",
          caption: "Detail retained after debinding and sintering"
        },
        fullWidthFigure: {
          src: "../assets/projects/finefeatures/01-a4f12fd4b466.jpg",
          alt: "Collection of small fine-featured 17-4PH stainless steel components beside a metric ruler",
          caption: "Qualified 17-4PH geometry at useful production scale"
        }
      },
      {
        kicker: "Customer Release",
        title: "One installed platform, two new material capabilities",
        body: [
          "Fine Features for pure copper launched in March 2023. In exchange for roughly 30% longer print time, it delivered smoother surfaces, improved dimensional accuracy, smaller feature sizes, and stronger layer-to-layer bonding without a special nozzle.",
          "The 17-4PH v2 profile followed in July 2023. Its 0.085 mm post-sinter layer height improved fine parts that previously printed with defects and enabled small solid-infill geometry that had not been printable on the system."
        ],
        figures: [
          {
            src: "../assets/projects/finefeatures/06-5fca1d71ca0f.jpg",
            alt: "Fine-featured pure copper radial heat sink",
            caption: "Pure copper: thin radial fins and narrow channels"
          },
          {
            src: "../assets/projects/finefeatures/10-78d55f234f78.jpg",
            alt: "Small fine-featured 17-4PH stainless steel bracket beside a ruler",
            caption: "17-4PH v2: compact bracket with thin ribs and small holes"
          }
        ]
      }
    ],
    outcome: "Fine Features expanded what customers could make on Metal X hardware they already owned. The project moved from experimental process development to two released alloy profiles, demonstrating end-to-end ownership across print testing, failure analysis, qualification, and collaboration with materials, software, and product teams.",
    outcomeFigures: [
      {
        src: "../assets/projects/finefeatures/08-53c31dd3d713.jpg",
        alt: "Collection of intricate pure copper Fine Features parts",
        caption: "Fine Features copper application set"
      },
      {
        src: "../assets/projects/finefeatures/09-7f1b24bb1932.jpg",
        alt: "Miniature stainless assembly beside a ruler",
        caption: "Small articulated stainless assembly"
      }
    ],
    links: [
      ["Read the copper launch", "https://markforged.com/resources/blog/introducing-fine-features-for-pure-copper-on-the-metal-x"],
      ["Read the 17-4PH launch", "https://markforged.com/resources/blog/introducing-fine-features-turbo-mode-for-17-4ph-stainless-steel"]
    ],
    hideSourceAction: true
  },
  aerobat: {
    hero: "../assets/projects/aerobat/wing-mirror.jpg",
    heroAlt: "Aerobat biomimetic flapping robot",
    tags: ["Mechanism design", "Parametric CAD", "PolyJet", "Biomimetics"],
    overview: [
      "Aerobat explores flapping flight as a safer, collision-tolerant alternative to rigid propellers in environments shared with people. Bats are the model: they extend their wings during the downstroke and retract them during the upstroke, maximizing net positive lift within each wingbeat. My early work centered on the robot's bat-inspired armwing mechanism and central structure.",
      "Each armwing packs 12 links and 17 joints into a monolithic structure of rigid members and flexible living hinges, with humerus and radius link lengths dimensioned from the Egyptian fruit bat. Because a single motor drives the wing through coupled crank and four-bar stages, extension and retraction are mechanically slaved to the flapping motion. Morphology does the work that would otherwise require additional actuators and feedback control."
    ],
    overviewMedia: {
      src: "../assets/projects/aerobat/wing-stages.png",
      caption: "One wingbeat of the printed armwing: frames 1–2 show the downstroke/extension motion, frames 3–4 the upstroke/retraction"
    },
    sections: [
      {
        kicker: "Mechanism",
        title: "Turning a biological motion into tunable geometry",
        body: [
          "Working with a postdoctoral researcher, I helped develop the initial flexible armwing concept, then built a parametric Grasshopper model to tune link lengths and hinge positions against the target gait (full wingspan at mid-downstroke, retraction through the upstroke), with the entire drive mechanism constrained to a 50 mm diameter capsule at the robot's core.",
          "The mechanism was transferred to SolidWorks and fabricated as a single multi-material PolyJet print, integrating rigid members and flexible living hinges into a 7-gram armwing. Trajectory optimization of 30 linkage parameters then refined the geometry to closely track the target shoulder and elbow angles, eliminating the elbow hyperextension present in the initial layout."
        ],
        inlineVideo: {
          src: "../assets/projects/aerobat/aerobat-wing.mp4",
          label: "Aerobat wing mechanism video",
          caption: "Flexible wing mechanism prototype",
          controls: true,
          aspectRatio: "16 / 9",
          background: "transparent",
          fit: "contain"
        }
      },
      {
        kicker: "Iteration",
        title: "Adding feathering and evaluating flexible joints",
        body: [
          "Additional concepts introduced wing feathering as well as retraction, improving the kinematics for forward flight. A hinge trade study across Shore 50A–85A durometers and 1.3–2 mm thicknesses showed the softest hinges collapsing torsionally and the stiffest turning brittle; 1.3 mm hinges at 70A–85A gave the best balance of articulation and off-axis stiffness, with hyperelastic FEA confirming peak strains of 43% against the material's 120–140% elongation at break.",
          "Even the best flexible hinges showed fatigue and cycle-to-cycle variability under high-speed testing and microscopy. Those findings informed the later transition toward rigid carbon fiber mechanisms capable of surviving the roughly 10 Hz flapping rate needed for useful lift."
        ],
        asideVideo: {
          src: "../assets/projects/aerobat/flap.webm",
          label: "Aerobat flapping wing mechanism",
          caption: "Parametric Grasshopper wing mechanism demonstrating both wing feathering and retraction on upstroke",
          aspectRatio: "1400 / 900",
          background: "transparent",
          fit: "contain"
        }
      }
    ],
    outcome: {
      parts: [
        "This armwing work was published in ",
        { text: "IEEE Robotics & Automation Letters", href: "https://par.nsf.gov/servlets/purl/10194913" },
        " and became the basis for the Aerobat hardware that followed: the optimized kinematics and hinge findings carried directly into the more durable carbon-fiber mechanisms of the complete flying robot, shown below in outdoor flight testing."
      ]
    },
    outcomeFigures: [
      {
        type: "video",
        src: "../assets/projects/aerobat/aerobat-flight.webm",
        label: "Aerobat tethered flight test",
        caption: "Aerobat outdoor test flight",
        fit: "cover"
      }
    ],
    source: "https://peterkellyyy.wixsite.com/peterkelly/aerobat",
    hideSourceAction: true
  },
  "3dtrails": {
    hero: "../assets/projects/3dtrails/3dtrails-banner.png",
    heroAlt: "Three-dimensional printed topographic trail map",
    heroClass: "center-hero-media",
    tags: ["Blender", "GIS data", "Multicolor 3D printing", "Product design"],
    overview: [
      "I spend a large portion of my free time hiking and backpacking, and also love maps of all kinds and 3D printing. It was only a matter of time until I merged all of these interests into what became a new hobby of mine: 3D printing topographic trail maps.",
      "The project combines terrain data, trail geometry, color planning, and print-process tuning to turn familiar routes into physical objects that feel both decorative and geographically specific."
    ],
    overviewMedia: {
      src: "../assets/projects/3dtrails/AT.png",
      caption: "Appalachian Trail 3D topographic map"
    },
    sections: [
      {
        kicker: "Design",
        body: [
          "After quickly realizing this wasn't practical in any CAD software, I began to get familiar with using Blender and collecting the plugins needed to optimize the map-making workflow. I primarily use the plugin \"Blosm\", which allows topographic data from OpenStreetMap to be imported into the software. From there, I take .gpx tracks of trails and manually create a clean, fluid 3D bezier curve that is projected onto the terrain.",
          "Currently, the process of creating the bezier curves is artisanal and manual, but I've been looking into ways to automate it (e.g. a python script to automatically smoothen .gpx track data and export an automatically generated 3D bezier curve).",
          "For maps of smaller areas requiring higher resolution topographic data than what's available on OpenStreetMap, I use OpenTopography data and QGIS to create GeoTIFFs of specific areas in high (~1m) resolution.",
          "The maps are printed using Bambu X1 printers with the AMS, which can automatically swap between colors to produce multicolor maps."
        ],
        asideFigure: {
          src: "../assets/projects/3dtrails/map-closeup.png",
          alt: "Closeup of a multicolor 3D printed topographic map",
          caption: "Closeup of one of my multicolor 3D printed maps"
        },
        processSteps: [
          {
            image: "../assets/projects/3dtrails/2b.png",
            alt: "Standalone 3D track model",
            title: "1. 3D track",
            copy: "A high resolution 3D track is generated based on the trail or route data."
          },
          {
            image: "../assets/projects/3dtrails/2c.png",
            alt: "3D track projected onto terrain",
            title: "2. Terrain",
            copy: "Terrain data is imported and shaped into a printable topographic surface."
          },
          {
            image: "../assets/projects/3dtrails/3b.png",
            alt: "Terrain map with forest and water features",
            title: "3. Forests and water",
            copy: "Forest and water features are added into the map."
          },
          {
            image: "../assets/projects/3dtrails/4b.png",
            alt: "Finished framed 3D topographic map",
            title: "4. Fabrication",
            copy: "After approval of the design, the 3D map is printed and framed."
          }
        ],
        bannerVideo: {
          src: "../assets/projects/3dtrails/gliderroute.webm",
          label: "Glider route topographic map animation"
        }
      }
    ],
    outcome: "I now have Shopify and Etsy stores where I sell my designs, in addition to doing custom orders. In my first year alone, I've generated over $15,000 in revenue and continue to expand my portfolio of designs. I've made custom maps up to 6ft in length for a variety of customers, including small museums and the John Muir Trail Conservancy. For my Shopify store, I've had success with growing organic traffic, but I'm also working on experimenting with driving sales through social media advertising.",
    media: [],
    links: [
      ["Visit 3DTrails", "https://3d-trails.com"]
    ],
    source: "https://peterkellyyy.wixsite.com/peterkelly/3dtrails"
  },
  soaring: {
    hero: "../assets/projects/soaring/PXL_20260628_160316457.jpg",
    heroAlt: "View from a sailplane cockpit under summer cumulus clouds",
    heroClass: "portfolio-thumb-cover soaring-hero-media",
    overview: [
      "Soaring has been a long-running personal pursuit since 2013. I received by private pilot rating in 2015 with the Civil Air Patrol and have since flown more than 150 glider flights and spent over 80 hours in the air, including thermal and ridge soaring, flights longer than five hours, and climbs above 10,000 feet. I intially joined Aero Club Albatross in New Jersey, and have since joined the Greater Boston Soaring Club in 2019, where I am currently a member.",
      "Flying sailplanes for long distances means finding lift without an engine: reading clouds, terrain features, and wind while constantly managing energy and landing options. Soaring has shaped how I think about weather, risk, thinking under stress, and learning difficult things."
    ],
    logoStrip: [
      {
        src: "../assets/projects/soaring/cap-logo.svg",
        alt: "Civil Air Patrol logo"
      },
      {
        src: "../assets/projects/soaring/aca-logo.png",
        alt: "Aero Club Albatross logo"
      },
      {
        src: "../assets/projects/soaring/gbsc-logo.png",
        alt: "Greater Boston Soaring Club logo"
      }
    ],
    overviewMedia: {
      src: "../assets/projects/soaring/PXL_20230903_141346021.MP.jpg",
      caption: "ASW-19 glider at Franconia Airport before a ridge flight"
    },
    sections: [
      {
        kicker: "What is soaring?",
        body: [
          "A sailplane flight is a live optimization problem. Every decision depends on altitude, wind, terrain, landing options, cloud shape, sun angle, and what the aircraft is quietly telling you through sound and stick pressure.",
          "That is what keeps the sport fascinating to me: the aircraft is simple and honest, but the atmosphere is never the same twice. Good flights come from preparation, restraint, and the ability to keep making good decisions as conditions change.",
          "After moving to Boston, I began flying with the Greater Boston Soaring Club in Sterling, Massachusetts. I had my first solo ridge soaring flight along Kinsman Ridge in the White Mountains during a glider encampment, and in July 2024 completed my silver-distance flight: a 50 km out-and-return cross-country task.",
          "Outside the cockpit, I help the club with glider maintenance, glider assembly/disassembly, and flight line operations. My long term goal is to become a flight instructor so I can keep passing the art of soaring to new pilots."
        ],
        asideFigure: {
          src: "../assets/projects/soaring/tow.jpg",
          alt: "Glider relocation flight on tow",
          caption: "Getting towed from Pennsylvania to Vermont on a glider relocation flight",
          figureClass: "fx10-glance soaring-flight-glance"
        },
        appendFlightEmbed: true
      }
    ],
    flightEmbed: {
      src: "https://www.weglide.org/embedded/flight/448659?baro=true&bbox=",
      title: "Silver-distance flight on WeGlide",
      body: [
        "In July 2024 I completed my “silver distance” flight, which is a minimum 50 km out and return cross country flight. I ended up flying roughly 80km in total from Sterling, MA to Orange, MA and back. This was the culmination of years of practicing thermalling, reading clouds and weather, and practicing navigation in simulators. After 11 years of flying, I was a bit of a late bloomer to cross country flight, but now that I have the confidence to go out of range of my home airport, soaring has become much more rewarding and exciting. My next goal is 300km flight."
      ]
    },
    galleryLabel: "Gallery",
    galleryIntro: "Some of the photos I've taken during my time flying gliders out of Sterling, MA and Franconia, NH:",
    media: [
      ["../assets/projects/soaring/PXL_20230903_161103435.MP.jpg", "Flying next to Cannon Mountain ski area"],
      ["../assets/projects/soaring/PXL_20241005_181141339.MP.jpg", "Sitting in the back seat of a club member's glider during an aerotow"],
      ["../assets/projects/soaring/PXL_20251005_202241658.jpg", "View from the cockpit during an autumn soaring flight"],
      ["../assets/projects/soaring/PXL_20260628_160316457.jpg", "At cloud base in the ASW-19 glider"],
      ["../assets/projects/soaring/d09169_68014352c67e49b7839e4f75c047979c~mv2.avif", "After landing an SGS 1-34 in Franconia"],
      ["../assets/projects/soaring/d09169_d4e0201c132c4cf587bc35ed216297de~mv2.avif", "Flying along North and South Kinsman in the White Mountains"]
    ],
    links: [],
    hideSourceAction: true,
    source: "https://peterkellyyy.wixsite.com/peterkelly/soaring"
  },
  "rotary-rf-pcb-manufacturing": {
    hero: "../assets/projects/rotary-rf-pcb-manufacturing/rotarypcb.png",
    heroAlt: "Rotary RF PCB coating system CAD rendering",
    tags: ["Machine design", "Sheet metal design", "Motor/heater integration"],
    overview: [
      "As a part-time mechanical engineer at Winchester Technologies while studying for my undergradute degree, I led the design and fabrication of RF PCB manufacturing systems, which have sucessfully been fabricated and put to use by materials researchers. These systems are designed to coat a variety of substrates to eventually be made into extremely high electrical permeability RF PCBs. The basic idea behind these devices is that a set of aqueous solutions are sprayed onto a heated plate in order to progressively coat a mounted substrate."
    ],
    overviewFigures: [
      {
        src: "../assets/projects/rotary-rf-pcb-manufacturing/rotary-section1.png",
        alt: "Rotary RF PCB manufacturing system section view",
        caption: "CAD rendering of opened system"
      },
      {
        src: "../assets/projects/rotary-rf-pcb-manufacturing/rotary-section2.png",
        alt: "Rotary RF PCB manufacturing system mechanical section detail",
        caption: "Isometric section view of system"
      }
    ],
    sections: [
      {
        kicker: "Design",
        body: [
          "In order to make operating this system simple, I included a motor potentiometer, motor RPM indicator, and heater temperature controller in the front plate. A brushless DC motor drives a belt and pulley which rotates an aluminum shaft and plate at up to 200 RPM. Two flange bearings ensure that the shaft remains straight and stable. A slip ring feeds wires and a thermocouple to a heating pad sandwiched under the spinning plate to heat it to a specified temperature required for the chemical reaction to occur.",
          "I added multiple holes and thumbscrews so that the height of the nozzles above the spinning plate could be adjusted in order to find the best possible nozzle height. The weight of each movable part was also kept in mind so that anyone, regardless of their strength, can handle them when operating the system. I added handles throughout the system to make testing faster and easier to move the relatively large parts, in addition to friction hinges on a plate on the system in order to make accessing the internal parts simple and quick. I also planned every piece of hardware in advance to make assembly very simple with limited tools."
        ],
        asideFigure: {
          src: "../assets/projects/rotary-rf-pcb-manufacturing/rotary-pcb-parts.jpg",
          alt: "Rotary RF PCB manufacturing system parts laid out for assembly",
          caption: "Sheet metal parts from sheet metal manufacturer laid out prior to assembly"
        }
      }
    ],
    outcome: "I worked with multiple local sheet metal manufactures, getting quotes and assessing their ability to manufacture the parts needed based on the tools they had available, such as sheet metal rollers, CNC mills, waterjet cutters, in addition to welding. I was able to get costs down to under 50% of the cost of previous systems by prioritizing the use of COTS parts as much as possible and finding a manufacturer that offered a very competitive quote. From start to finish including design, manufacture, and build, I completed the project in 3 months. As the lead engineer, I was able to complete the project while also taking a full undergraduate course load. This rotary RF PCB manufacturing system is capable of coating a substrate over four times the size of the previous system (12 inch to 25 inch diameter, ~4.3x area) while being much more robust and reliable.",
    outcomeAsideFigure: {
      src: "../assets/projects/rotary-rf-pcb-manufacturing/rotarypcb.png",
      alt: "Fully assembled rotary RF PCB manufacturing system",
      caption: "Fully assembled rotary RF PCB manufacturing system"
    },
    hideSourceAction: true,
    source: "https://peterkellyyy.wixsite.com/peterkelly/rotary-rf-pcb-manufacturing"
  },
  "morse-corp": {
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
    hero: "../assets/projects/asthma-inhaler-assistive-device/inhaler-desktop.png",
    heroAlt: "Asthma inhaler assistive device",
    tags: ["Human-centered design", "Embedded electronics", "3D printing"],
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
    hero: "../assets/projects/cat-treat-dispenser/treatdispenser.jpg",
    heroAlt: "Cat treat dispenser assembly",
    tags: ["Arduino", "Stepper drive", "Proximity sensing", "3D printing"],
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
    hero: "../assets/projects/audio-variometer/vario-desktop.png",
    heroAlt: "Portable audio variometer with OLED display",
    tags: ["Arduino", "Electronics packaging", "3D printing"],
    overview: [
      "Glider pilots use variometers to find rising air while keeping their attention outside the cockpit. I designed and built this compact, standalone instrument as an affordable alternative to commercial retrofit systems, combining audible climb-and-sink cues with an OLED display."
    ],
    overviewMedia: {
      src: "../assets/projects/audio-variometer/variometer-render.png",
      alt: "Portable audio variometer with OLED display",
      caption: "CAD render of audio variometer"
    },
    sections: [
      {
        kicker: "Sensing & Feedback",
        body: [
          "An MPL3115A2 barometric pressure sensor feeds an Arduino Feather, which converts pressure readings into altitude and vertical speed. I applied a five-sample rolling average to suppress sensor noise without making the instrument feel sluggish.",
          "I translated vertical speed into an audio pattern a pilot can interpret without looking down: a steady low tone indicates sink, while climb produces intermittent beeps that rise in pitch and frequency as lift strengthens. The OLED provides altitude and vertical-speed data when a visual reference is useful."
        ],
        asideFigure: {
          src: "../assets/projects/audio-variometer/03-e5a00260916c.jpg",
          alt: "Breadboard electronics prototype",
          caption: "Breadboard electronics prototype",
          figureClass: "audio-variometer-breadboard-figure"
        }
      },
      {
        kicker: "Compact Packaging",
        body: [
          "I designed a 3D-printed enclosure around the pressure sensor, 1.3-inch OLED, speaker, microcontroller, and rechargeable battery. Within the compact footprint, the layout preserves speaker clearance, charging-port access, display visibility, and room to assemble and service the electronics."
        ],
        fullWidthFigure: {
          src: "../assets/projects/audio-variometer/variometer-parts.png",
          alt: "Audio variometer printed enclosure parts and electronics",
          caption: "Variometer CAD render with top casing removed",
          figureClass: "audio-variometer-parts-figure"
        }
      }
    ],
    outcome: "The finished prototype detects small altitude changes and converts them into clear visual and audible feedback. It brought sensing, signal filtering, interface design, and compact electromechanical packaging together in a functional flight instrument.",
    videoAfterOutcome: true,
    videos: [
      {
        src: "../assets/projects/audio-variometer/audio_visual_variometer.mp4",
        caption: "Audio and visual variometer demonstration",
        aspectRatio: "16 / 9",
        fit: "contain"
      }
    ],
    hideSourceAction: true,
    source: "https://peterkellyyy.wixsite.com/peterkelly/audio-variometer"
  }
};

const moreProjectCards = {
  "berkshire-grey": {
    href: "berkshire-grey.html",
    thumb: "../assets/jobs/Berkshire Grey/carouselai.jpg",
    thumbClass: "portfolio-thumb portfolio-thumb-cover",
    alt: "Berkshire Grey robotic manipulation cell",
    date: "Oct 2024 – Present",
    title: "Robotic Manipulation R&D",
    summary: "End effectors for difficult SKUs, gripper validation fixtures, and robot learning data collection hardware sustaining 70,000+ episodes per week.",
    company: "Berkshire Grey"
  },
  fx10: {
    href: "fx10.html",
    thumb: "../assets/projects/fx10/fx10 thumbnail.png",
    thumbClass: "portfolio-thumb portfolio-thumb-cover",
    alt: "Markforged FX10 metal printhead thumbnail",
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
    summary: "Lab buildout, process knowledge transfer, commissioning, and system validation.",
    company: "Markforged"
  },
  finefeatures: {
    href: "finefeatures.html",
    thumb: "../assets/projects/finefeatures/04-665a4d8e0c6c.png",
    thumbClass: "portfolio-thumb portfolio-thumb-cover finefeatures-thumb-lower",
    alt: "Metal X Fine Features sample parts",
    date: "Oct 2021 - Jul 2023",
    title: "Metal X Fine Features",
    summary: "Developed copper and stainless steel printing profiles for finer, stronger, more accurate 3D printed metal parts.",
    company: "Markforged"
  },
  "co-parts": {
    href: "co-parts.html",
    thumb: "../assets/projects/co-parts/01-e66ed0c40c37.jpg",
    thumbClass: "portfolio-thumb portfolio-thumb-cover",
    alt: "Continuous-fiber reinforced co-part assembly",
    date: "Jan 2023 - May 2023",
    title: "Continuous-Fiber Co-parts",
    summary: "Published composite-design method enabling reinforcement across multiple load planes and up to 6.4× the load of plastic-only parts.",
    company: "Markforged"
  },
  harpy: {
    href: "harpy.html",
    thumb: "../assets/projects/harpy/harpy leg.png",
    thumbClass: "harpy-thumb harpy-thumb-upper",
    alt: "Harpy leg actuator assembly",
    date: "May 2020 - May 2021",
    title: "Thruster-Assisted Bipedal Robot",
    summary: "Research biped integrating custom actuators, thrust vectoring, real-time control, multibody simulation, and hardware validation.",
    company: "SiliconSynapse Lab"
  },
  aerobat: {
    href: "aerobat.html",
    thumb: "../assets/projects/aerobat/wing-still.png",
    thumbClass: "portfolio-thumb portfolio-thumb-cover aerobat-thumb-lower",
    alt: "Aerobat biomimetic flapping robot",
    date: "Jan 2020 - Sep 2020",
    title: "Flapping Wing Robotics Research",
    summary: "Parametric, flexible wing mechanisms inspired by the anatomy of fruit bats.",
    company: "SiliconSynapse Lab"
  },
  "rotary-rf-pcb-manufacturing": {
    href: "rotary-rf-pcb-manufacturing.html",
    thumb: "../assets/projects/rotary-rf-pcb-manufacturing/rotarypcb.png",
    thumbClass: "portfolio-thumb portfolio-thumb-cover",
    alt: "Rotary RF PCB material coating system",
    date: "Nov 2018 - Apr 2019",
    title: "Rotary RF PCB System",
    summary: "Large-format heated coating machine delivered at less than half the prior-system cost at 4x total area.",
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
    company: "Co-op"
  },
  irobot: {
    href: "irobot.html",
    thumb: "../assets/jobs/iRobot/s9.webp",
    thumbClass: "portfolio-thumb portfolio-thumb-cover",
    alt: "iRobot robot vacuum",
    date: "Jan 2018 - Jul 2018",
    title: "iRobot R&D Robotics Engineering Co-op",
    summary: "Prototype mechanisms and test hardware for consumer robotics R&D.",
    company: "Co-op"
  },
  sikorsky: {
    href: "sikorsky.html",
    thumb: "../assets/jobs/Sikorsky/mh60.jpg",
    thumbClass: "portfolio-thumb portfolio-thumb-cover",
    alt: "Sikorsky MH-60 helicopter",
    date: "Jan 2017 - Aug 2017",
    title: "Sikorsky Propulsion Engineering Co-op",
    summary: "Propulsion-system engineering support across analysis, documentation, and hardware evaluation.",
    company: "Co-op"
  },
  "asthma-inhaler-assistive-device": {
    href: "asthma-inhaler-assistive-device.html",
    thumb: "../assets/projects/asthma-inhaler-assistive-device/inhaler-desktop.png",
    thumbClass: "portfolio-thumb portfolio-thumb-cover",
    alt: "Breath-triggered asthma inhaler assistive device",
    date: "Jul 2019 - Dec 2019",
    title: "Asthma Inhaler Assistive Device",
    summary: "A breath-triggered asthma inhaler assistive device designed for users with limited motor ability.",
    company: "Capstone project"
  },
  "3dtrails": {
    href: "3dtrails.html",
    thumb: "../assets/projects/3dtrails/angledScene3sq.png",
    thumbClass: "portfolio-thumb portfolio-thumb-cover",
    alt: "Printed topographic trail map",
    date: "Dec 2022 - Present",
    title: "3DTrails",
    summary: "Side business designing and 3D printing multicolor topographic hiking and flight trail maps.",
    company: "Side business"
  },
  soaring: {
    href: "soaring.html",
    thumb: "../assets/projects/soaring/asw19.jpg",
    thumbClass: "portfolio-thumb portfolio-thumb-cover",
    alt: "ASW-19B glider in flight",
    date: "July 2013 - Present",
    title: "Soaring",
    summary: "Sailplane flying, cross-country decision-making, and a lifelong love of engineless flight.",
    company: "Hobby"
  },
  "audio-variometer": {
    href: "audio-variometer.html",
    thumb: "../assets/projects/audio-variometer/vario-desktop.png",
    thumbClass: "portfolio-thumb",
    alt: "Portable audio variometer",
    date: "Jan 2019 - Mar 2019",
    title: "Audio Variometer",
    summary: "Compact barometric instrument translating climb and sink rate into audible guidance for glider pilots.",
    company: "Personal Project"
  },
  "cat-treat-dispenser": {
    href: "cat-treat-dispenser.html",
    thumb: "../assets/projects/cat-treat-dispenser/treatdispenser.jpg",
    thumbClass: "portfolio-thumb",
    alt: "Cat-operated treat dispenser",
    date: "Jun 2019 - Jul 2019",
    title: "Cat Treat Dispenser",
    summary: "Cat-operated dispenser with proximity sensing, automatic dispensing, and an OLED display.",
    company: "Personal Project"
  }
};

// Site-wide ordering: drives the homepage portfolio grid and the
// "More projects" rail on project pages.
const projectOrder = [
  "berkshire-grey",
  "fx10",
  "harpy",
  "aerobat",
  "co-parts",
  "finefeatures",
  "px100",
  "3dtrails",
  "asthma-inhaler-assistive-device",
  "cat-treat-dispenser",
  "rotary-rf-pcb-manufacturing",
  "morse-corp",
  "irobot",
  "sikorsky",
  "audio-variometer",
  "soaring"
];

// Cards temporarily hidden from the homepage grid (their pages remain
// reachable by direct link).
const temporarilyHiddenPortfolioCards = new Set([
  "finefeatures",
  "morse-corp",
  "irobot",
  "sikorsky"
]);
