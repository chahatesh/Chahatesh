const PROJECT_CASES = {
    ion: {
  "title": "Ion Engine",
  "category": "Electronics · New module & test videos",
  "image": "https://cdn.hackclub.com/01a19786-09c3-7ac7-932f-17a6c999de87/IMG_1346.png",
  "gallery": [
    "https://cdn.hackclub.com/01a19786-0be7-722c-8a15-2c98f14aac9e/IMG_1347.png",
    "https://cdn.hackclub.com/01a19786-0de4-7b35-96c0-6d544df16b69/IMG_1348.png",
    "https://cdn.hackclub.com/01a19786-0f2a-7027-b08c-7da730e1daee/IMG_1349.png"
  ],
  "problem": "I wanted to see if electricity could move air without a fan.",
  "architecture": [
    "High-voltage module",
    "Advertised as 400 kV",
    "Actual output unmeasured"
  ],
  "challenges": [
    {
      "title": "How ion wind works",
      "text": "Electricity gives some air molecules a charge. Those charged molecules move and bump into other molecules, creating a breeze."
    },
    {
      "title": "The first test",
      "text": "I felt a faint breeze, then the first module sparked and burned out."
    },
    {
      "title": "Testing the replacement",
      "text": "With the connections reversed, I saw the paper pull inward. That movement is hard to see in the video. I shut the setup down when it sparked."
    }
  ],
  "result": "I could move a little air. I stopped the test when the replacement module sparked.",
  "links": [
    {
      "text": "How ion wind works — MIT",
      "href": "https://news.mit.edu/2013/ionic-thrusters-0403"
    },
    {
      "text": "Spacecraft ion propulsion — NASA",
      "href": "https://science.nasa.gov/mission/dawn/technology/ion-propulsion/"
    }
  ],
  "videos": [
    {
      "title": "Testing the replacement module",
      "src": "https://cdn.hackclub.com/01a197e9-a569-7da6-9101-c16ec27accbd/IMG_1350.MOV.mp4",
      "description": "The paper pulled inward during testing, though it’s hard to see in the clip."
    },
    {
      "title": "Sparking, then shutting it down",
      "src": "https://user-cdn.hackclub-assets.com/01a197e9-b1d1-7926-aab8-d119a00ccb67/IMG_1353.MOV.mp4",
      "description": "I shut it down when it sparked."
    }
  ]
},
    atlas: {
      title: 'Atlas AI',
      category: 'AI · vision · voice · robotics',
      image: 'assets/atlas.webp',
      problem: 'I wanted an AI assistant that could remember past chats and control real devices.',
      architecture: ['AI helpers', 'Memory store', 'Vision system', 'Voice input', 'Tool use', 'Local + cloud AI', 'Robot connection'],
      challenges: [
        { title: 'Too much context', text: 'I keep the important parts of long tasks and cut repeats.' },
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
      problem: 'I wanted a robot arm I could afford and change myself.',
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
      problem: 'I built StudyPath so students could practice at their own pace.',
      architecture: ['React app', 'Firebase login and data', 'Cloud Functions', 'Review system', 'Teacher dashboard'],
      challenges: [
        { title: 'More students', text: 'I saved common results on the device so they load faster.' },
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


const JOURNAL_PROJECTS = [
  {
    "title": "BetterBoard",
    "description": "I designed a battery-powered dev board with LEDs that help me spot problems.",
    "alt": "BetterBoard circuit board layout in KiCad",
    "source": "https://github.com/chahatesh/BetterBoard",
    "journal": "https://github.com/chahatesh/BetterBoard/blob/main/JOURNAL.md",
    "cover": "images/betterboard.png"
  },
  {
    "title": "MP3 Player",
    "description": "I designed a pocket music player with a screen, a dial, and a headphone jack.",
    "alt": "Custom MP3 player design",
    "source": "https://github.com/chahatesh/MP3-Player",
    "journal": "https://github.com/chahatesh/MP3-Player/blob/main/JOURNAL.md",
    "cover": "images/mp3-player.png"
  },
  {
    "title": "MIDI Keyboard",
    "description": "I designed a MIDI keyboard with touch keys, sliders, knobs, and lights.",
    "alt": "Custom MIDI keyboard layout",
    "source": "https://github.com/chahatesh/MIDI-Keyboard",
    "journal": "https://github.com/chahatesh/MIDI-Keyboard/blob/main/JOURNAL.md",
    "cover": "images/midi-keyboard.png"
  },
  {
    "title": "Holonomic Drivetrain",
    "description": "I designed a four-wheel robot base that can move sideways without turning.",
    "alt": "Holonomic drivetrain chassis in Onshape",
    "source": "https://github.com/chahatesh/X-drive-holonomic",
    "journal": "https://github.com/chahatesh/X-drive-holonomic/blob/main/JOURNAL.md",
    "cover": "images/holonomic-drivetrain.png"
  }
];

const SHORT_PROJECT_DESCRIPTIONS = {
  "Ion Engine": "I tested a new module and filmed the setup sparking before I shut it down.",
  "My First PCB": "I designed a board with four LEDs and had 30 made for the hackathon I lead.",
  "Rocket flight controller PCB": "A small board that reads motion and air pressure and saves data to a microSD card.",
  "Atlas AI": "I’m building an AI assistant that can remember chats, see, listen, and control robots.",
  "Understand": "An AI helper that uses what’s on my screen to understand what I’m working on.",
  "4-DOF Robotic Arm": "I designed and 3D printed a robot arm powered by servo motors.",
  "Versatile XY Gantry": "A pen plotter that turns digital designs into drawings on paper.",
  "VEX IQ & V5 Robotics": "I competed in VEX IQ and now compete in V5. I learned how different robot lifts work.",
  "StudyPath": "STEM practice that adjusts to each student, with a dashboard for teachers.",
  "WebOS": "A desktop-style interface that runs in your browser.",
  "Asteroid Survivor": "A browser game about dodging asteroids.",
  "Remote Shutter": "A project for triggering a camera from a distance.",
  "Arduino Projects": "Smaller builds from my desk, including a tiny ESP32 display."
};


const ADDITIONAL_PROJECTS = [
  {
    "id": "four-channel-motor-driver",
    "title": "4-Channel Motor Driver",
    "category": "Electronics",
    "description": "I built and tested an ESP32 board that can control four motors."
  },
  {
    "id": "stock-market-practice",
    "title": "Stock Market Practice",
    "category": "Web",
    "description": "I built a website for practicing stock chart patterns and guessing what happens next.",
    "source": "https://market-practice.wasmer.app/study.html",
    "linkText": "Open live site"
  },
  {
    "id": "fielddesk",
    "title": "FieldDesk",
    "category": "Web",
    "description": "A web app project for REC Foundation robotics.",
    "source": "https://fielddesk-recf.wasmer.app/",
    "linkText": "Open live site"
  },
  {
    "id": "motivate",
    "title": "Motivate",
    "category": "Web",
    "description": "A goal tracker for planning the week and keeping up with tasks.",
    "source": "https://motivate.wasmer.app/#today",
    "linkText": "Open live site",
    "cover": "images/motivate-goals.png",
    "alt": "Motivate goal and task dashboard"
  },
  {
    "id": "robotics-match-timer",
    "title": "Robotics Match Timer",
    "category": "Robotics",
    "description": "I made a 60-second timer for robot matches with a starting sound and simple controls."
  },
  {
    "id": "home-nodes",
    "title": "Home Nodes",
    "category": "Electronics",
    "description": "I built an ESP32 prototype that uses a distance sensor to trigger a servo."
  },
  {
    "id": "hush-dictation",
    "title": "Hush",
    "category": "Software",
    "description": "A Windows app I built that turns speech into text. It’s still in testing.",
    "source": "https://github.com/chahatesh/Hushline",
    "linkText": "Source on GitHub",
    "cover": "images/hush-home.png",
    "alt": "Hush dictation app dashboard"
  }
];
