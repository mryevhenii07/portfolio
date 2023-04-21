import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        modalEmail: 'The text is copied to the clipboard.',
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
          'Fascinated with how intricate programming can be I was quickly drawn to learn more. Istarted learning javascript and was even more enthused with making websites interactive.I then started freelancing . I am now spending my time building projects with JavaScript,TypeScript and learning new technologies.',
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
        projectsWalletApp: 'Wallet App',
        projectsGidOnline: 'Gid Online',
        projectsSearchEvent: 'Search Event',
        projectsPizzaKing: 'Pizza King',
        projectsCryptoApp: 'Crypto App',
        projectsIceCream: 'Ice Cream',
        projectItemMore: 'More Info',
        pagesDemo: 'DEMO',
        pagesCode: 'CODE',
        pagesOverview: 'Overview',
        pageBack: 'Back',
        pagesTechnologies: 'Technologies',
        pagesProject: 'Project',
        pagesDescriptionWallet:
          'This is a team project,made page translation and form validation section, in this project I used dependencies: i18next, react, react-dom, react-icons, react-router-dom, react-sparklines and devDependencies: autoprefixer, eslint, husky, lint-staged, postcss, prettier and .For them install used npm. Starting of the project-CREATE REACT APP.',
        pagesDescriptionPizza:
          '   This is my own project, in this project I used dependencies:redux-toolkit,animalCss,SASS react-pagination, react-skeleton, axios, gh-pages, react, react-dom, react-icons,react-router-dom and devDependencies: autoprefixer, eslint, husky, lint-staged, postcss,prettier .For them install used npm. Starting of the project-CREATE REACT APP.',
        pagesDescriptionGidOnline:
          '  This is my own project, in this project I used dependencies: Axios, Fuse.js, gh-pages,React, react-dom, react-icons, react-router-dom, react-pagination and devDependencies: autoprefixer, eslint, husky, lint-staged, postcss, prettier and .For them install used npm. Starting of the project-CREATE REACT APP.',
        pagesDescriptionEvent:
          ' This is a team project,I made a pagination and a footer, in this project I useddependencies: SCSS, react, and devDependencies: autoprefixer, eslint, husky,lint-staged, postcss, prettier and .For them install used npm. Starting of theproject-CREATE REACT APP.',
        pagesDescriptionIceCream:
          '  This is a team project,I was Team Lead responsible for organizing, creating a project onGidHub, connecting fonts, building Parcel libraries, participating in all developmentblocks and sleeping five hours a day, in this project I used dependencies: HTML, SASSand more time.',
        pagesDescriptionCrypto:
          '   This is my own project, in this project I used dependencies: axios, dompurify, firebase,gh-pages, react, react-dom, react-icons, react-router-dom@6, react-sparklines anddevDependencies: autoprefixer, eslint, husky, lint-staged, postcss, prettier andtailwindcss.For them install used npm. Starting of the project-CREATE REACT APP.',
      },
    },
    ua: {
      translation: {
        modalEmail: 'Текст скопійовано в буфер обміну',
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
          'Зачарований тим, наскільки складним може бути програмування, я швидко захотів дізнатися більше. япочав вивчати javascript і ще більше захопився тим, щоб зробити веб-сайти інтерактивними.Тоді я почав займатися фрілансом. Зараз я проводжу свій час, створюючи проекти з JavaScript,TypeScript та вивчення нових технологій.',
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
        projectsWalletApp: 'Гаманець',
        projectsGidOnline: 'Гід Онлайн',
        projectsSearchEvent: ' Пошук події',
        projectsPizzaKing: 'Піца Кінг',
        projectsCryptoApp: 'Крипта',
        projectsIceCream: 'Морозиво',
        projectItemMore: 'Більше Інфо',
        pagesDemo: 'ДЕМО',
        pagesCode: 'КОД',
        pagesOverview: 'Огляд',
        pageBack: 'Назад',
        pagesTechnologies: 'Технології',
        pagesProject: 'Проект',
        pagesDescriptionWallet:
          'Це командний проект, зроблений переклад сторінки та розділ валідації форми, у цьому проекті я використовував залежності: i18next, react, react-dom, react-icons, react-router-dom react-sparklines і devDependencies: autoprefixer, eslint, husky , lint-staged, postcss, prettier і . Для їх інсталяції використовувався npm. Початок проекту CREATE REACT APP.',
        pagesDescriptionPizza:
          'Це мій власний проект, у якому я використовував залежності:redux-toolkit,animalCss,SASS react-pagination, react-skeleton, axios, gh-pages, react, react-dom, react-icons,react-router-dom і devDependencies: autoprefixer, eslint, husky, lint-staged, postcss,красивіше. Для них встановіть використаний npm. Початок проекту CREATE REACT APP.',
        pagesDescriptionGidOnline:
          '  Це мій власний проект, у якому я використовував залежності: Axios, Fuse.js, gh-pages, React, react-dom, react-icons, react-router-dom, react-pagination і devDependencies: autoprefixer, eslint, husky, lint-staged, postcss, prettier та . Для них використовується інсталяція npm. Початок проекту CREATE REACT APP.',
        pagesDescriptionEvent:
          'Це командний проект, я зробив розмітку сторінок і нижній колонтитул, які використовував у цьому проектізалежності: SCSS, react і devЗалежності: autoprefixer, eslint, husky,lint-staged, postcss, prettier і . Для їх встановлення використовувався npm. Починаючи зproject-CREATE REACT APP.',
        pagesDescriptionIceCream:
          'Це командний проект, я був керівником команди, відповідальним за організацію та створення проекту GidHub, підключення шрифтів, створення бібліотек Parcel, участь у всіх розробках блоків  , в цьому проекті я використовував залежності: HTML, SASS.',
        pagesDescriptionCrypto:
          'Це мій власний проект, у якому я використовував залежності: axios, dompurify, firebase,gh-pages, react, react-dom, react-icons, react-router-dom@6, react-sparklines та devDependencies: autoprefixer, eslint, husky, lint-staged, postcss, prettier іtailwindcss. Для них інсталюйте використаний npm. Початок проекту CREATE REACT APP.',
      },
    },
  },
});

export default i18n;
