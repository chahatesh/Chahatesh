const PROJECT_CASES = {
    ion: {
  "title": "Ion Engine",
  "category": "Electronics · Experiment stopped",
  "image": "https://cdn.hackclub.com/01a19786-09c3-7ac7-932f-17a6c999de87/IMG_1346.png",
  "gallery": [
    "https://cdn.hackclub.com/01a19786-0be7-722c-8a15-2c98f14aac9e/IMG_1347.png",
    "https://cdn.hackclub.com/01a19786-0de4-7b35-96c0-6d544df16b69/IMG_1348.png",
    "https://cdn.hackclub.com/01a19786-0f2a-7027-b08c-7da730e1daee/IMG_1349.png"
  ],
  "problem": "I wanted to see if I could move air with electricity instead of a fan. I built a small ion-wind experiment and tried it once.",
  "architecture": [
    "Ion wind",
    "High-voltage module",
    "Advertised as 400 kV",
    "One brief test"
  ],
  "challenges": [
    {
      "title": "How it works, in basic words",
      "text": "A strong electric field can remove electrons from air molecules, leaving charged particles called ions. The field moves these ions toward another electrode. On the way, they bump into other air molecules and push them along. That moving air is called ion wind."
    },
    {
      "title": "Why the high voltage?",
      "text": "The electric field needs to be strong enough to ionize the air. My module was advertised as 400 kilovolts, or 400,000 volts, but I did not measure its actual output. For scale, a normal US wall outlet is about 120 volts. A voltage label alone does not tell you how safe a device is."
    },
    {
      "title": "What about spacecraft ion engines?",
      "text": "Spacecraft ion engines use electricity to accelerate charged propellant, often xenon, out into space. They use propellant very efficiently but make only a small amount of thrust. My build used surrounding air to make wind instead. Professionally engineered systems have safety controls; high voltage itself is not safe."
    },
    {
      "title": "What happened in my test",
      "text": "After I connected everything, I ran one test. While it worked, I felt a very faint breeze, but nothing stronger. Then the module sparked a little and burned out. It was disappointing, and the spark was a little scary."
    },
    {
      "title": "Why I stopped",
      "text": "I decided it was not a safe idea to keep testing this setup. It produced very little airflow and did not seem worth the risk. I did not measure its thrust, power use, or efficiency, so I cannot give it an efficiency rating."
    }
  ],
  "result": "Testing stopped after the module failed. I learned about ion wind, and that deciding when to stop is part of engineering too.",
  "links": [
    {
      "text": "How ion wind works — MIT",
      "href": "https://news.mit.edu/2013/ionic-thrusters-0403"
    },
    {
      "text": "Spacecraft ion propulsion — NASA",
      "href": "https://science.nasa.gov/mission/dawn/technology/ion-propulsion/"
    }
  ]
},
    atlas: {
      title: 'Atlas AI',
      category: 'AI · vision · voice · robotics',
      image: 'assets/atlas.webp',
      problem: 'Most AI helpers forget past chats and cannot touch real machines. Atlas is my fix.',
      architecture: ['AI helpers', 'Memory store', 'Vision system', 'Voice input', 'Tool use', 'Local + cloud AI', 'Robot connection'],
      challenges: [
        { title: 'Too much context', text: 'Long tasks fill the memory. I save the important parts and cut repeats.' },
        { title: 'Passing work', text: 'Helpers lose track of tasks. One main helper keeps the plan.' },
        { title: 'Slow vision', text: 'Camera images are slow to read. I process the useful parts in the background.' }
      ],
      result: 'Still building. Goal: one helper that gets both software and the real world.',
      links: []
    },
    arm: {
      title: '4-DOF Robotic Arm',
      category: 'robotics · CAD · electronics',
      image: 'assets/robot-arm.webp',
      problem: 'Robot arms are expensive and hard to change. I designed and printed my own instead.',
      architecture: ['Onshape CAD', '3D-printed parts', 'MG995 servos', 'Arduino control', 'Movement math', 'Changeable tool mount'],
      challenges: [
        { title: 'Burned servos', text: 'V1 burned three servos — the force was not spread well. V2 got stronger mounts.' },
        { title: 'Finding the angles', text: 'Getting the joint angles right took many tries.' },
        { title: 'Loose joints', text: 'Joints needed bracing to stay accurate after many moves.' }
      ],
      result: 'It works. Gripper, suction tool, or camera can be added later.',
      links: [{ text: 'Files', href: 'https://www.printables.com/model/1784586-mg955-servo-robot-arm' }]
    },
    studypath: {
      title: 'StudyPath',
      category: 'learning app · web app',
      image: 'assets/studypath.webp',
      problem: 'Normal quizzes give everyone the same work. StudyPath adapts to each student.',
      architecture: ['React app', 'Firebase login and data', 'Cloud Functions', 'Review system', 'Teacher dashboard'],
      challenges: [
        { title: 'More students', text: 'At 1,000+ students I made the data faster and saved common results on-device.' },
        { title: 'Slow starts', text: 'Some features were slow on first run. I changed how scores are saved.' },
        { title: 'Smart review', text: 'Questions come back right before a student would forget them.' }
      ],
      result: '1,000+ students practiced STEM with it.',
      links: [
        { text: 'GitHub', href: 'https://github.com/chahatesh/StudyPath' },
        { text: 'Live site', href: 'https://studypath.wasmer.app/' }
      ]
    }
  };
