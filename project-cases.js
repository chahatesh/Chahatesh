const PROJECT_CASES = {
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
