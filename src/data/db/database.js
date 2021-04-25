import Mock from "../mock";
const birthday = new Date(1998, 3, 28, 12);
const today = new Date();
const age = Math.floor((today - birthday) / 1000 / 60 / 60 / 24 / 365.25);

const database = {
  information: {
    name: 'Аркадий Чиркеев',
    fullname: 'Чиркеев Аркадий Васильевич',
    aboutContent: "Пять лет работаю в сфере разработки электроники. Совместно с командой специализируюсь на полном цикле разработки и производства электрических узлов низковольтного оборудования и различных роботизированных систем.",
    age: age,
    phone: '',
    nationality: 'РФ',
    language: 'Русский - родной; Английский - B1',
    email: '',
    address: '',
    freelanceStatus: '',
    software: 'Altium Designer, Keil uVision, IAR, STM32CubeMX, Atmel Studio, Tina TI, Multisim, MatLab и др.',
    stack: 'Trello, Google Drive, YouTrack, Miro, Github',
    socialLinks: {
      facebook: '',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://ru.linkedin.com/',
      dribbble: '',
      github: 'https://github.com/schemabuilder',
      telegram: "https://t.me/neverluckyguy"
    },
    brandImage: '/images/brand-image.jpg',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/cv.pdf'
  },
  achievements: [
    {
      title: "Управление и организация работы команды",
      icon: "cog",
      details: "Управление полным циклом разработки, отладки и тестирования решения;\n" +
          "работа с Заказчиком, ведение проекта по технической составляющей проекта;\n" +
          "управление рисками."
    },
    {
      title: "Разработка электроники",
      icon: "construction",
      details: "Проектирование решения, архитектуры, структурных схем;\n" +
          "разработка и моделирование принципиальных схем, топологии печатных плат;\n" +
          "расчет и выбор элементной базы;\n" +
          "постановка и сопровождение на производстве;\n" +
          "кастомизация изделия, расширение модельного ряда."
    },
    {
      title: "Документация",
      icon: "notepad",
      details: "Разработка отчетной документации при работе с грантами/тендерами;\n" +
          "разработка сопроводительной, конструкторской документации;\n" +
          "разработка технических заданий, проектирование и упаковка технического решения;\n" +
          "проработка сертификации устройства, патентов."
    }
  ],
  teamCompetence: [
    {
      title: "Разработка электроники",
      icon: 'tab',
      details: "Общее проектирование решения, архитектуры, структурных схем;\n" +
          "разработка электрических схем, проектирование печатных плат;\n" +
          "моделирование электрических процессов (Tina TI, Altium Designer, OrCAD, MatLab и др.);\n" +
          "разработка одноплатных компьютеров;\n" +
          "разработка IoT, автономных и низкопотребляющих устройств;\n" +
          "реверс-инжиниринг и доработка существующих электрических узлов."
    },
    {
      title: "Низкоуровневое ПО",
      icon: 'code',
      details: "Программирование микроконтроллеров и одноплатных компьютеров (AVR, STM32, STM8, NRF24, NRF52, " +
          "MSP430, DSP и Wireless от TI и uBlox, Wireless SoC (ESP, Murata, NXP), i.MX RT, i.MX 6 и выше, Rockchip, " +
          "AllWinner, AmLogic и др.);\n" +
          "разработка драйверов управления различными моторами, систем гироскопической стабилизации;\n" +
          "разработка устройств с использованием FPGA и CPLD (MicroSemi, Dialog Semiconductor, Xilinx, Altera);\n" +
          "разработка одноплатных компьюткров, написание драйверов."
    },
    {
      title: "Производство",
      icon: 'network',
      details: "Изготовление, отладка и тестирование прототипов и опытных серий;\n" +
          "расчет и выбор элементной базы (осн. поставщики - Симметрон, Компэл, Wurth и др., в т.ч. поставщики из Китая);\n" +
          "постановка и сопровождение плат и кабельных изделий на производстве (Резонит, StarLine, jlcpcb, Кабельные Технологии и др.);\n" +
          "проработка логистических необходимостей, упаковки."
    }
  ],
  eventParticipation: [
    {
      title: "Electron TechExpo 2021",
      icon: '',
      details: 'участник от ООО "Омега"'
    },
    {
      title: "GMIS 2019",
      icon: '',
      details: 'участник от ООО "Интелсис"'
    },
    {
      title: "Дни 1С в ГазпромНефть 2019",
      icon: '',
      details: 'технический специалист от ООО "Омега"'
    },
    {
      title: "Фестиваль Света СПб 2018",
      icon: '',
      details: 'технический специалист от ООО "Арт-Технологии"'
    },
    {
      title: "ЛенПолиграфМаш Хакатон 2018",
      icon: '',
      details: 'участник, команда победителей'
    },
    {
      title: "Открытые Инновации в Сколково 2017",
      icon: '',
      details: 'ведущий инженер от Remagic.Studio'
    },
    {
      title: "Хакатон в Квадрате 2017",
      icon: '',
      details: 'участник, победитель'
    },
  ],
  reviews: [
    {
      id: 1,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
      author: {
        name: 'Burdette Turner',
        designation: 'Web Developer, Abc Company'
      }
    },
    {
      id: 2,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: 'Susan Yost',
        designation: 'Client'
      }
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: 'Irving Feeney',
        designation: 'Fiverr Client'
      }
    }
  ],
  skills: [
    {
      title: "Организация работы над проектом",
      value: 80
    },
    {
      title: "Kanban",
      value: 70
    },
    {
      title: "Scrum",
      value: 50
    },
    {
      title: "Цифровая схемотехника",
      value: 80
    },
    {
      title: "Организация производства электроники в РФ",
      value: 90
    },
    {
      title: "Разработка документации",
      value: 70
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://dribbble.com'
    },
    {
      id: 2,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://facebook.com'
    },
    {
      id: 3,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: 'https://pinterest.com'
    },
    {
      id: 4,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: '#'
    },
    {
      id: 5,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"]
    },
    {
      id: 6,
      title: "Pendrive",
      subtitle: "Free pendrive mockup design.",
      imageUrl: "/images/portfolio-image-6.jpg",
      largeImageUrl: ["/images/portfolio-image-6-lg.jpg"]
    },
    {
      id: 7,
      title: "Beautiful Pendrive",
      subtitle: "Pendrive with great design & flexible.",
      imageUrl: "/images/portfolio-image-7.jpg",
      largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
      url: 'https://twitter.com'
    },
    {
      id: 8,
      title: "Sticker",
      subtitle: "Clip sticker mockup design.",
      imageUrl: "/images/portfolio-image-8.jpg",
      largeImageUrl: ["/images/portfolio-image-8-lg.jpg"]
    },
    {
      id: 9,
      title: "Packet",
      subtitle: "Beautiful packet & product design.",
      imageUrl: "/images/portfolio-image-9.jpg",
      largeImageUrl: ["/images/portfolio-image-9-lg.jpg"]
    },
    {
      id: 10,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: '#'
    },
    {
      id: 11,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://facebook.com'
    },
    {
      id: 12,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: 'https://pinterest.com'
    },
    {
      id: 13,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://dribbble.com'
    },
    {
      id: 14,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"]
    },
    {
      id: 15,
      title: "Pendrive",
      subtitle: "Free pendrive mockup design.",
      imageUrl: "/images/portfolio-image-6.jpg",
      largeImageUrl: ["/images/portfolio-image-6-lg.jpg"]
    },
    {
      id: 16,
      title: "Beautiful Pendrive",
      subtitle: "Pendrive with great design & flexible.",
      imageUrl: "/images/portfolio-image-7.jpg",
      largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
      url: 'https://twitter.com'
    },
    {
      id: 17,
      title: "Sticker",
      subtitle: "Clip sticker mockup design.",
      imageUrl: "/images/portfolio-image-8.jpg",
      largeImageUrl: ["/images/portfolio-image-8-lg.jpg"]
    },
    {
      id: 18,
      title: "Packet",
      subtitle: "Beautiful packet & product design.",
      imageUrl: "/images/portfolio-image-9.jpg",
      largeImageUrl: ["/images/portfolio-image-9-lg.jpg"]
    },
    {
      id: 19,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://dribbble.com'
    },
    {
      id: 20,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://facebook.com'
    },
    {
      id: 21,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: 'https://pinterest.com'
    },
    {
      id: 22,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: '#'
    },
    {
      id: 23,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"]
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2021 - н.в.",
        position: "Подрядчик, управление проектом, разработка электроники",
        company: "DragonTreeLabs",
        details: "Организация и управление разработкой системы манипуляторов-рук для Аватара."
      },
      {
        id: 2,
        year: "2020 - н.в.",
        position: "Подрядчик, управление проектом",
        company: 'НИИ "Полюс" имени М.Ф. Стельмаха',
        details: "Организация и управление разработкой электроники для аппарата ЭКМО и для лидарных систем."
      },
      {
        id: 3,
        year: "2020 - н.в.",
        position: "Подрядчик, управление проектом",
        company: "Под NDA",
        details: "Организация и управление разработкой электроники одноплатного компьютера на основе FPGA\n" +
            "MicroSemi и Nvidia Xavier для проприетарной системы заказчика."
      },
      {
        id: 4,
        year: "2018 - н.в.",
        position: "Руководитель отдела электроники и микропроцессорной техники",
        company: "Омега",
        details: "Руководство полным циклом разработки и производства электроники для следующих " +
            "проектов: образовательный пятиосевой манипулятор с техническим зрением, детский " +
            "обучающий робототехнический конструктор с техническим зрением, перчатки-манипуляторы " +
            "для виртуальной и дополненной реальности, автономная система измерения заполненности " +
            "мусорных контейнеров, автомат для приема твердых бытовых отходов, умная камера и " +
            "умная стереокамера, алкозамок."
      },
      {
        id: 5,
        year: "2016 - н.в.",
        position: "Инженер-схемотехник",
        company: "Kobak R&D",
        details: "Разработка различных электрических узлов и модулей на заказ; разработка инсталляций."
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2019",
        graduation: "Бакалавр",
        university: "Санкт-Петербургский национальный исследовательский университет\n" +
            "информационных технологий, механики и оптики",
        details: "Неоконченное высшее"
      },
    ]
  },
  blogs: [
    {
      id: 1,
      title: 'Markdown & Html supported blog.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/markdown-html-supported-blog.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 2,
      title: 'Installing NodeJS on your device.',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/installing-nodejs-on-your-device.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 3,
      title: 'UI/UX design starter with Adobe XD.',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 4,
      title: 'Boost your post for increasing sales.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/boost-your-post-for-increasing-sales.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 5,
      title: 'Difference between GatsbyJS & NextJS.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 6,
      title: 'How to choose javascript framework for project.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/how-to-choose-javascript-framework-for-project.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 7,
      title: 'Web automation with python language.',
      featuredImage: '/images/blog-image-7.jpg',
      filesource: '../../blog/web-automation-with-python-language.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 8,
      title: 'Time to use latest technology for creating a website.',
      featuredImage: '/images/blog-image-8.jpg',
      filesource: '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 9,
      title: 'Think out of the box.',
      featuredImage: '/images/blog-image-9.jpg',
      filesource: '../../blog/think-out-of-the-box.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 10,
      title: 'Trending designs in 2020.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/trending-designs-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 11,
      title: 'How to get 10k instagram followers?',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/how-to-get-10k-instagram-followers.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 12,
      title: 'What NodeJS can do?',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/what-nodejs-can-do.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 13,
      title: 'Futures of javascript.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/future-of-javascript.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 14,
      title: 'Popular javascript library in 2020.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/popular-javascript-library-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 15,
      title: 'Promrammers must read books.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/programmers-must-read-books.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    }
  ],
  contactInfo: {
    phoneNumbers: ['+012-3456-7891', '+012-3456-7892'],
    emailAddress: ['admin.sitename@example.com', 'info.sitename@example.com'],
    address: "121 King Street, Melbourne, Victoria 3000, Australia"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/achievements").reply(config => {
  const response = database.achievements;
  return [200, response];
});

Mock.onGet("/api/teamCompetence").reply(config => {
  const response = database.teamCompetence;
  return [200, response];
});

Mock.onGet("/api/eventParticipation").reply(config => {
  const response = database.eventParticipation;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});