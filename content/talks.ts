import { Talk } from "@/types";

export const Talks: Talk[] = [
  {
    featured: true,
    title: "React Server Components Deep Dive",
    thumbnail: "ReactServerComponentsCourse-oreilly.png",
    date: "August 28, 2024",
    duration: "180min.",
    description:
      " In this live course session of 3 hours with O'Reilly Media we will see how to leverage server-side rendering and Server Components to build efficient web applications",
    presentations: [
      {
        host: "O'Reilly Media",
        hostLink:
          "https://www.oreilly.com/live-events/react-server-components-deep-dive/0642572003766/",
        country: "🌐",
        city: "Online",
      },
    ],
  },
  {
    title: "DevRel and tech talks - Ep #177",
    thumbnail: "geeksblabla-177.jpg",
    date: "April 21, 2024",
    duration: "195min.",
    description:
      "In this episode, we shared our experiences as public speakers. We explained the devrel job, challenges and tips to become a better speaker..",
    presentations: [
      {
        host: "GeeksBlaBla Podcast",
        hostLink: "https://geeksblabla.com/",
        video: "https://www.youtube.com/live/8uKEwWbgRBc",
        country: "🌐",
        city: "Online",
      },
    ],
  },
  {
    featured: true,
    title: "Partial Prerendering: Hype or Innovation?",
    thumbnail: "reactparis-lineup.png",
    date: "March 22, 2024",
    duration: "30min.",
    description:
      "In this rapidly evolving world of web development, Next.js recently introduced Partial Prerendering (PPR), a new rendering model for web applications. But what exactly lies behind this concept?",
    presentations: [
      {
        host: "React Paris",
        hostLink: "https://react.paris/#speakers",
        slides:
          "https://docs.google.com/presentation/d/1ZYtCOUfGCvUO5kFDbFWoGsmJbIJrHGnimuS_4WsKkEI/edit?usp=sharing",
        demoCode: "https://github.com/choubari/partial-prerendering-demo",
        demoLink: "https://partial-pre-rendering.vercel.app/",

        country: "🇫🇷",
        city: "Paris",
      },
    ],
  },
  {
    featured: true,
    title: "React Server Components 101",
    thumbnail: "ReactServerComponents101-devoxxma.jpg",
    date: "October 25, 2024",
    // date: "October 11, 2023",
    duration: "25min.",
    description:
      "React Server Components: an exciting new feature that have huge implications on page load performance, bundle size, and how we write React applications in the near future. We'll explore RSC's architecture and its core concepts, along with practical use-cases illustrating RSC implementation and benefits. You will learn how to write tomorrow's React Applications with Server Components and understand in depth what the React team has been working on.",
    presentations: [
      {
        host: "ReactJS Day",
        hostLink:
          "https://2024.reactjsday.it/schedule/#ReactServerComponents101",
        slides:
          "https://docs.google.com/presentation/d/1f6527uoa7hDLc4f_gT9kYI9xge5qsPx7nMEW8eLxJyI/edit?usp=sharing",
        demoCode:
          "https://github.com/choubari/react-server-components-101-demo",
        demoLink: "https://react-server-components-101-demo.vercel.app/",
        country: "🇮🇹",
        city: "Verona",
      },
      {
        host: "React Paris Meetup",
        hostLink: "https://www.meetup.com/react-paris/events/300756193/",
        country: "🇫🇷",
        city: "Paris",
      },
      {
        host: "Devoxx France",
        hostLink: "https://www.devoxx.fr/schedule/talk/?id=47585",
        slides:
          "https://docs.google.com/presentation/d/1MQTIpdAl9wTceNu2QrZaa-TmRFeng-qPWPCJiDnGzrY/edit?usp=sharing",
        demoCode:
          "https://github.com/choubari/react-server-components-101-demo",
        demoLink: "https://react-server-components-101-demo.vercel.app/",
        country: "🇫🇷",
        city: "Paris",
      },
      {
        host: "Devoxx Morocco",
        hostLink: "https://devoxx.ma/talk/?id=22005",
        slides:
          "https://docs.google.com/presentation/d/1mYwfi_P9fHbgvyEp4WTa6cLGKZX9RTybXERWozZWneE/edit?usp=sharing",
        demoCode:
          "https://github.com/choubari/react-server-components-101-demo",
        demoLink: "https://react-server-components-101-demo.vercel.app/",
        country: "🇲🇦",
        city: "Agadir",
      },
    ],
  },
  {
    title: "Modern Web Development with Next.js 13",
    thumbnail: "nextjs-react-framework-devoxxma.jpg",
    date: "October 11, 2023",
    duration: "120min.",
    description:
      "Vercel created Next.js, built on top of React framework which enables building production ready applications. Join us to learn more about Next.js and create your first ready-to-ship application!",
    presentations: [
      {
        host: "Devoxx Morocco",
        hostLink: "https://devoxx.ma/talk/?id=25435",
        slides:
          "https://docs.google.com/presentation/d/1c8pyShj8qoVipXYH2s2Wc7DT8DetBGpDAGnTlBhscJ4/edit?usp=sharing",
        demoCode: "https://github.com/choubari/RSVP-Event-App",
        demoLink: "https://rsvp.choubari.com/",
        docs: "https://nextjs.choubari.com/",
        country: "🇲🇦",
        city: "Agadir",
      },
    ],
  },
  {
    title: "Next.js 13, what's going on?",
    thumbnail: "nextjs-biztech.jpg",
    date: "May 20, 2023",
    duration: "120min.",
    description:
      "In this workshop, I went through Next.js 13 main features comparing to its prior versions, covering everything from the fundamentals to implementing and deploying a demo solution.",
    presentations: [
      {
        host: "Biztech Morocco",
        hostLink:
          "https://www.linkedin.com/feed/update/urn:li:activity:7065016707844591616?utm_source=share",
        video: "https://www.youtube.com/live/s4sdXK4ApKM?feature=share",
        slides:
          "https://docs.google.com/presentation/d/1fQrKxUaWN14whNxxydmua8DRrhW8etvz4cf_1CuX4EY/edit?usp=share_link",
        demoCode: "https://github.com/choubari/Nextjs13-Demo-App",
        demoLink: "https://nextjs13-demo-app.vercel.app/",
        country: "🌐",
        city: "Online",
      },
    ],
  },
  {
    title: "Back To School - GeeksBlaBla",
    thumbnail: "geeksblabla-backtoschool.jpg",
    date: "September 3, 2023",
    duration: "90min.",
    description:
      "In this episode, we shared our experiences and advice about some paths to follow in order to succeed in your academic year. We showcased how much side projects, open sourced contributions and participation on tech events are important to learn and strengthen your portfolio. Finally we gave advice and checklist to follow for students who are looking for internships.",
    presentations: [
      {
        host: "GeeksBlaBla",
        hostLink: "https://geeksblabla.com/",
        video: "https://www.youtube.com/live/Q688u-Y44tU?si=uHMYPJpnLQ29uFI4",
        country: "🌐",
        city: "Online",
      },
    ],
  },
  {
    title: "GeeksBlaBla - AMA & Tech News #23",
    thumbnail: "geeksblabla-ama-23.jpg",
    date: "March 27, 2023",
    duration: "150min.",
    description:
      "In this AMA session, we discussed our learning plans and productivity levels during Ramadan. Then we shared the latest Tech News (GPT-4, Bard, Copilot, ChatGPT Plugins...), discussing their impacts on education, software development and our future, while answering the audience questions.",
    presentations: [
      {
        host: "GeeksBlaBla",
        hostLink: "https://geeksblabla.com/",
        video: "https://www.youtube.com/live/0x1a-7JK_co?si=XqwXQqOKRKV67w6i",
        country: "🌐",
        city: "Online",
      },
    ],
  },
  {
    title: "Best Practices for Better Accessibility",
    thumbnail: "a11y-devoxxma-footage.jpg",
    date: "October 6, 2022",
    duration: "50min.",
    description:
      "Accessibility is becoming crucial for any programmer to understand. Knowing how to integrate accessibility into development will be soon and should be a core skill for programmers of all types. Delivering apps to disabled people is a big responsibility. That’s why in this session, we will see how to enhance digital accessibility with best practices and universal guidelines that will help you implement it into your project.",
    presentations: [
      {
        host: "Devoxx Morocco",
        hostLink: "https://devoxx.ma/talk/?id=10482",
        slides:
          "https://docs.google.com/presentation/d/1Mnm6vPXKHaKOsHMU-Su3H0IEaU4eGmYLVjcvbLED98s/edit?usp=share_link",
        country: "🇲🇦",
        city: "Agadir",
      },
      {
        host: "ISoc Accessibility Standing Group",
        hostLink: "https://www.a11ysig.org/accessniger/",
        video:
          "https://livestream.com/accounts/686369/events/10680706/videos/233733279",
        slides:
          "https://docs.google.com/presentation/d/1YhI28l_MbckArNvUB1rcoMglVh-FyCUjDULGaqW9-oE/edit?usp=sharing",
        country: "🌐",
        city: "Online",
      },
    ],
  },
  {
    title: `How to make a "perfect" git commit`,
    thumbnail: "gitcommit-devoxxma-footage.jpg",
    date: "October 5, 2022",
    duration: "25min.",
    description:
      "Even if perfect things don't exist, chasing perfection can play an important role to create new and improve existing workflows, optimizing them to our needs and automating recurring tasks. In this session, I will share with you how to set your pre-commit workflow, create guidelines and avoid mistakes so you can have at the end a “perfect” git commit. The session is beginner friendly, it requires some prerequisites in git.",
    presentations: [
      {
        host: "Devoxx Morocco",
        hostLink: "https://devoxx.ma/talk/?id=10481",
        slides:
          "https://docs.google.com/presentation/d/1xgV9YQSQX05gEyEvYpWzwiXRdGCeXHztN57rN3q4yec/edit?usp=share_link",
        country: "🇲🇦",
        city: "Agadir",
        demoCode:
          "https://gist.github.com/choubari/c89b685c334939d581489c537b5bda2f",
      },
      {
        host: "Blabla Conf",
        hostLink: "https://www.blablaconf.com/session/394967",
        slides:
          "https://docs.google.com/presentation/d/14bfZYD1JQni5mBJSB6kh-bIA3mUudwQKJ9wDYMbN-0E/edit?usp=share_link",
        video: "https://youtu.be/-_kW5E4gGHA",
        country: "🌐",
        city: "Online",
      },
    ],
  },
  {
    title: "GeeksBlaBla - AMA & Tech News #15",
    thumbnail: "geeksblabla-ama-15.jpg",
    date: "January 30, 2022",
    duration: "120min.",
    description:
      "Participated in GeeksBlaBla's AMA session #15. During this episode, I talked about how I managed my time as a software engineering student, my learning process, and gave tips for aspiring students. Then we discussed the latest Tech News, and we answered audience questions about programming, community, new technologies, and much more.",
    presentations: [
      {
        host: "GeeksBlaBla",
        hostLink: "https://geeksblabla.com/",
        video: "https://www.youtube.com/live/4_h-lxi3GlU?si=3HSQm7TMOAgsGsoH",
        country: "🌐",
        city: "Online",
      },
    ],
  },
  {
    title: "Introduction Game Dev",
    thumbnail: "gamedev-ittalk.jpg",
    date: "December 2, 2021",
    duration: "60min.",
    description:
      "Participated in the IT Talk podcast to share my experience with Game Development in Unity, from simple academic projects to shipping my side project to the Google Play Store.",
    presentations: [
      {
        host: "ENSIAS IT Club",
        hostLink:
          "https://www.linkedin.com/feed/update/urn:li:activity:6871566461639368704/",
        video: "https://www.youtube.com/live/CforaDN-3Do?feature=share",
        country: "🌐",
        city: "Online",
      },
    ],
  },
  {
    title: "A Guide to Academic Report Writing with LaTeX",
    thumbnail: "latex-ieee.jpg",
    date: "January 14, 2021",
    duration: "120min.",
    description:
      "Organized a LaTex Workshop for IEEE ENSIAS Students to help them explore a new way of writing and typesetting articles and reports.",
    presentations: [
      {
        host: "IEEE ENSIAS Student Branch",
        hostLink:
          "https://twitter.com/EnsiasSb/status/1349696348606652421?t=asi7OMRJUtanYaXag41ncA&s=08",
        slides:
          "https://docs.google.com/presentation/d/1Xumg0GKqeNrrJ-TqYTYnGEOCbI3Gce3ZFwDxE0HtJ2c/edit?usp=share_link",
        country: "🌐",
        city: "Online",
      },
    ],
  },
  {
    title: "Get started with Git & Github",
    thumbnail: "git-ieee.jpg",
    date: "January 12, 2021",
    duration: "120min.",
    description:
      "Organized a Workshop for IEEE ENSIAS Students to teach them the virtual control system Git and how to use it with Github in their projects.",
    presentations: [
      {
        host: "IEEE ENSIAS Student Branch",
        slides:
          "https://docs.google.com/presentation/d/1mB79ojRZ05DWhxx4fUV1gK2z6JW_1Z7gB7xEf_YaTn8/edit?usp=share_link",
        country: "🌐",
        city: "Online",
      },
    ],
  },
];
