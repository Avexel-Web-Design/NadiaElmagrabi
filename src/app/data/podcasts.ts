export interface Podcast {
  id: string;
  title: string;
  hostName: string;
  description: string;
  listenUrl: string;
  platform: 'Spotify' | 'External';
  category: string;
  image?: string;
}

export const podcasts: Podcast[] = [
  {
    id: 'being-a-line-3',
    title: 'Being a Line 3 with Nadia Elmagrabi',
    hostName: 'Paula Fehrmann',
    description: 'It was an honor and delight to be interviewed by Paula in this podcast! We talked about the experience of being a Line 3 in Human Design. Give this eye-opening episode a listen below!',
    listenUrl: 'https://podcasters.spotify.com/pod/show/pferhmann/episodes/Ep-28--Profile-Series--Being-a-Line-3-with-Nadia-Elmagrabi-e2gor6h',
    platform: 'Spotify',
    category: 'Human Design'
  },
  {
    id: 'what-it-means-to-be-generator',
    title: 'What It Really Means to be a Generator',
    hostName: 'Sarah Lynas',
    description: "Let's talk Human Design! In this podcast episode, I speak with Sarah about my experience of being a generator type in human design. We talk about the joys, challenges and freedom it brings, and so much more! Give the episode a listen below.",
    listenUrl: 'https://open.spotify.com/episode/3d8TwCIRpXW8JxkPApeuIv',
    platform: 'Spotify',
    category: 'Human Design'
  },
  {
    id: 'your-past-is-your-power',
    title: 'Your Past is Your Power',
    hostName: 'Terri Messenger',
    description: 'Would you believe me if I told you there is power in your past? In this podcast episode, we dive deep into the importance of feeling safe in your body, how tapping into yourself and listening to your intuition can help you make better decisions, and much more!',
    listenUrl: 'https://open.spotify.com/episode/6XLIHwsi7mzVoovf7Q1Dvg',
    platform: 'Spotify',
    category: 'Past Life Therapy'
  },
  {
    id: 'remembering-past-lives',
    title: 'Remembering Past Lives',
    hostName: 'Ali Marie Long',
    description: 'I found one of my biggest purposes in life when I realized the connection between massage therapy, psychotherapy and how it relates to past lives. Our path to healing is never linear and in this interview shares tools to help us reach our greatest potential, both in the human body and spirit.',
    listenUrl: 'https://www.alimarielong.com/podcast/episode/6f06b8a4/episode-10-remembering-past-lives-or-healing-arts-or-bodymind-connection-with-nadia-elmagrabi',
    platform: 'External',
    category: 'Past Life Therapy'
  },
  {
    id: 'winding-path',
    title: 'Winding Path',
    hostName: 'Ann Fancy',
    description: 'Somewhat unintentionally, there is one role I have kept finding myself in throughout my life: the role of a healer. I have worked as a massage therapist, clinical counselor, and nutrition and wellness coach. And my curiosity continues to lead me to more and more interesting places. Come along as we explore my journey in this podcast episode!',
    listenUrl: 'https://www.annfancy.com/podcast/episode/49090739/nadia-elmagrabi-or-winding-path',
    platform: 'External',
    category: 'Healing Journey'
  },
  {
    id: 'wellness-as-one',
    title: 'Wellness As One',
    hostName: 'Wellness As One',
    description: "Let's talk crystals! This podcast episode focuses on how crystals can be a tool on a person's wellness journey by supporting and amplifying our energy. Check it out below!",
    listenUrl: 'https://creators.spotify.com/pod/show/wellness-as-one/episodes/Wellness-As-One-with-Nadia-Elmagrabi-from-Expanding-Spirits-e36jlt',
    platform: 'Spotify',
    category: 'Wellness & Crystals'
  },
  {
    id: 'stress-less-nurture-you',
    title: 'Stress Less & Nurture You',
    hostName: 'Tanya Penny',
    description: 'Join us in this nourishing episode as we dive into "Stressing Less & Nurturing You" so you can heal your body & receive abundance in all areas of your life!',
    listenUrl: 'https://vibrantbodyabundantlife.podbean.com/e/stress-less-nurture-you-with-nadia-elmagrabi/',
    platform: 'External',
    category: 'Wellness & Self-Care'
  }
];
