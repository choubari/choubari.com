import { Talk } from "@/types";

export const Talks: Talk[] = [
  {
    title: "Next.js 13, what's going on?",
    thumbnail: "nextjs-biztech.jpg",
    date: "May 20th, 2023",
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
        demo: "https://github.com/choubari/Nextjs13-Demo-App",
        country: "🌐",
        city: "Online",
      },
    ],
  },
  {
    title: "Best Practices for Better Accessibility",
    thumbnail: "a11y-devoxxma.jpg",
    date: "October 6th, 2022",
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
    thumbnail: "gitcommit-devoxxma.jpg",
    date: "October 5th, 2022",
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
        demo: "https://gist.github.com/choubari/c89b685c334939d581489c537b5bda2f",
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
    title: `Introduction Game Dev`,
    thumbnail: "gamedev-ittalk.jpg",
    date: "December 2nd, 2021",
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
    title: `A Guide to Academic Report Writing with LaTeX`,
    thumbnail: "latex-ieee.jpg",
    date: "January 14th, 2021",
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
    title: `Get started with Git & Github`,
    thumbnail: "git-ieee.jpg",
    date: "January 12nd, 2021",
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
