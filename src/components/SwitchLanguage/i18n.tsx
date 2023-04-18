import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'uk',
  fallbackLng: 'uk',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        build: 'LETS BUILD SOMETHING TOGETHER',
        mainText:
          'I’m focused on building responsive front-end web applications while learning back-end technologiess.',
        mainHi: 'Hi, I am',
        mainName: 'Yevhenii',
        about: 'About',
        aboutWho: 'Who I am',
        aboutIAm: 'I am developer',
        aboutFirstDescription:
          'I have spent the last 2 years in the freelance. I have always had a knack for technology and working with computers. In 2020 I started working with HTML and CSS to make some minor edits on a small project for my friend .What I thought was just a few small edits turned into a love for programming.',
        aboutSecondDescription:
          'Fascinated with how intricate programming can be I was quickly drawn to learn more. Istarted learning javascript and was even more enthused with making websites interactive.I then started freelancing . I am now spending my time building projects with React JS,TypeScript, Firebase, Next.js and learning new technologies.',
        aboutName: 'Peredrii Yevhenii',
        project: 'Projects',
        projectBuild: 'What I Built',
        skills: 'Skills',
        skillsDo: 'What I Can Do',
        contact: 'Contact ',
        contactGet: 'Get In Touch ',
        contactFullName: 'Peredrii Yevhenii ',
        contactFullNameDescription:
          "I am available for freelance or full-time positions. Contact me and let's talk.",
        contactWithMe: 'CONNECT WITH ME',
        contactName: 'Name',
        contactNumber: 'Phone Number',
        contactEmail: 'Email',
        contactSubject: 'Subject',
        contactMessage: 'Message',
        contactSendMessage: 'Send Message',
      },
    },
    uk: {
      translation: {
        build: 'ДАВАЙТЕ ЩОСЬ СТВОРЮВАТИ РАЗОМ',
        mainText:
          'Я зосереджений на створенні адаптивних зовнішніх веб-додатків, одночасно вивчаючи серверні технології.',
        mainHi: 'Привіт, Я',
        mainName: 'Євгеній',
        about: 'ПРО МЕНЕ',
        aboutWho: 'Хто Я',
        aboutIAm: 'Я розробник',
        aboutFirstDescription:
          'Останні 2 роки я провів на фрілансі. Я завжди мав хист до техніки та роботи з комп’ютером. У 2020 році я почав працювати з HTML і CSS, щоб внести деякі незначні зміни в невеликий проект для мого друга. Те, що я вважав лише кількома невеликими редагуваннями, перетворилося на любов до програмування.',
        aboutSecondDescription:
          'Зачарований тим, наскільки складним може бути програмування, я швидко захотів дізнатися більше. япочав вивчати javascript і ще більше захопився тим, щоб зробити веб-сайти інтерактивними.Тоді я почав займатися фрілансом. Зараз я проводжу свій час, створюючи проекти з React JS,TypeScript, Firebase, Next.js та вивчення нових технологій.',
        aboutName: 'Передрій Євгеній',
        project: 'Проекти',
        projectBuild: 'Що я створив',
        skills: 'Навички',
        skillsDo: 'Які технології я знаю',
        contact: 'Контакт ',
        contactGet: "Будемо на зв'язку",
        contactFullName: 'Передрій Євгеній',
        contactFullNameDescription:
          "Я доступний для позаштатних або повних позицій. Зв'яжіться зі мною і поговоримо.",
        contactWithMe: "ЗВ'ЯЖІТЬСЯ ЗІ МНОЮ",
        contactName: "Ім'я",
        contactNumber: 'Номер телефону',
        contactEmail: 'Електронна пошта',
        contactSubject: 'Тема',
        contactMessage: 'Повідомлення',
        contactSendMessage: 'Відправити повідомлення',
      },
    },
  },
});

export default i18n;
