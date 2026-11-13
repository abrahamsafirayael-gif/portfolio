/* ==========================================================================
   CONTENIDO DEL PORTFOLIO — ES EL ÚNICO ARCHIVO QUE NECESITÁS EDITAR
   ==========================================================================
   1) Datos generales y links:  bloque "config" (abajo).
   2) Textos en inglés:         bloque "en".
   3) Textos en español:        bloque "es".
   Guardá el archivo, subilo a GitHub y en un minuto el sitio se actualiza.
   Cada texto está escrito entre comillas "así". Si necesitás una comilla
   doble dentro de un texto, escribila como \"  (con barra invertida).
   ========================================================================== */

window.SITE = {

  /* ------------------------ DATOS GENERALES Y LINKS ----------------------- */
  config: {
    email: "abrahamsafirayael@gmail.com",

    github: "https://github.com/abrahamsafirayael-gif/Tester-QA-Soporte_tecnico",
    githubLabel: "GitHub QA",
    linkedin: "https://www.linkedin.com/in/safira-yael-abraham",
    linkedinLabel: "in/safira-yael-abraham",

    // Sitio de Millanel en Tienda Nube (si lo dejás vacío "", se muestra solo como texto)
    tiendaNube: "https://millanelpergamino.mitiendanube.com",

    // Link de cada proyecto (la flecha ↗). Si lo dejás vacío "", usa tu GitHub.
    projectLinks: {
      andina: "https://github.com/abrahamsafirayael-gif/Andina-S.A",
      millanel: "https://github.com/abrahamsafirayael-gif/Tester-QA-Soporte_tecnico",
      postman: "https://fakestoreapi.com",
      selenium: "https://github.com/abrahamsafirayael-gif/Tester-QA-Soporte_tecnico",
      carousel: "https://www.linkedin.com/feed/update/urn:li:activity:7526413678733176832/"
    }
  },

  /* ------------------------------- INGLÉS --------------------------------- */
  en: {
    htmlLang: "en",
    pageTitle: "Safira Yael Abraham | QA Manual & Automation Tester",
    metaDescription:
      "Professional bilingual portfolio of Safira Yael Abraham. Manual QA, Automation Testing, projects and professional experience.",
    switchTo: "ES",
    switchLabel: "Cambiar a español",
    menuLabel: "Main navigation",

    nav: {
      about: "About me",
      how: "How I work",
      why: "Why hire me",
      background: "Background",
      projects: "Projects",
      contact: "Contact"
    },

    topBand: [
      "QA Manual & Automation Junior",
      "REST APIs",
      "SQL",
      "Python & Selenium",
      "Jira, Gherkin, Scrum"
    ],

    hero: {
      location: "Pergamino, Buenos Aires, Argentina",
      hi: "Hi,",
      name: "I'm Safira.",
      tagline:
        "QA Manual & Automation Junior. I test software and verify data so the product works as promised.",
      studying:
        "Studying Cybersecurity and the Technical Degree in Management Information Systems.",
      talk: "Let's talk",
      kicker: "Safira Yael Abraham",
      available: "Available to start immediately, full-time"
    },

    toolsBand: [
      "Postman", "SQL", "Python", "Selenium", "Jira", "Gherkin",
      "Scrum", "Git", "GitHub", "pandas", "Google Colab", "Notion"
    ],

    say: { lead: "I like testing software that", words: ["works well.", "can be reproduced.", "protects the data.", "does what was agreed.", "people can use without trouble."] },

    about: {
      label: "About me",
      title: "From INTA research labs to software testing.",
      paragraphs: [
        "I'm a QA tester and I'm passionate about software and data quality. My journey began in 2023 when I discovered this branch of computer science that I was previously unfamiliar with.",
        "I came from research and development, where I worked in INTA laboratories, and from digital management. These two experiences taught me to be methodical, analytical, and detail-oriented—skills I consider fundamental, not only for work but for life itself.",
        "I continue my training in Cybersecurity (Cisco Networking Academy) and am preparing for a Technical Degree in Management Information Systems (UNL). I incorporate data analysis tools to gain a comprehensive view of each product, as I understand how a technical failure impacts sales, conversion rates, and inventory. Therefore, I don't test code in isolation: I validate products. I use generative AI judiciously to document and streamline quality cycles, without relinquishing judgment.",
        "My particular interest in Cybersecurity grew during my second year as an intern at EEA INTA Paraná. I witnessed a cyberattack that left the institution completely without backups of any of the projects that had taken years of hard work and meticulous measurements. A cybercriminal demanded an exorbitant sum, in dollars, to return the experimental and, in some cases, confidential information.",
        "For all these reasons, and more, I'm looking for dynamic teams where I can contribute my expertise, continue learning, and help ensure technology functions as efficiently as possible, while simultaneously building my career step by step."
      ],
      facts: [
        { label: "Role", value: "QA Manual & Automation Junior" },
        { label: "Location", value: "Pergamino, Buenos Aires" },
        { label: "Languages", value: "Native Spanish, English B1 (technical reading)" },
        { label: "Next step", value: "Technical Degree in Management Information Systems, UNL (starting Feb 2027)" }
      ]
    },

    how: {
      label: "How I work",
      title: "Clear test cases, verified data and bugs you can reproduce.",
      gherkinCaption: "Example test case in Gherkin",
      sqlCaption: "Example SQL query on Northwind",
      skills: [
        { title: "Manual testing", text: "Test case design and execution, Gherkin format, UAT, requirements analysis, defect reports with steps and evidence, MoSCoW prioritization." },
        { title: "REST APIs", text: "Postman to validate endpoints, response codes and JSON bodies." },
        { title: "Databases", text: "SQL queries to validate data and transactions: orders, stock and prices." },
        { title: "Automation", text: "Python, Selenium, pandas and Google Colab. Java at a beginner level." },
        { title: "Version control", text: "Git and GitHub, with all projects versioned." },
        { title: "Methodologies and management", text: "Scrum (ceremonies, roles, sprint planning and dailies), Jira, Excel and Notion for tracking issues." }
      ]
    },

why: {
      label: "Why hire me",
      title: "6 reasons to hire me.",
      items: [
        { n: 1, dark: false, title: "Technical and rigorous profile",
          lines: [
            { k: "Training & execution:", v: "I design complete test scenarios, validate REST services with Postman, run advanced SQL queries and automate key flows with Python and Selenium." },
            { k: "Quality from the root:", v: "I analyze system requirements, write cases in Gherkin format and make sure the product works according to the acceptance criteria." } ],
          tags: ["Selenium", "Postman", "SQL", "Gherkin"] },
        { n: 2, dark: false, title: "Whole-business view",
          lines: [
            { k: "Broad perspective:", v: "My experience in e-commerce operations and commercial management taught me to evaluate software from the end customer's and the business's point of view." },
            { k: "Real impact:", v: "I understand exactly how a technical failure affects sales, conversion and stock. I don't test code in isolation; I validate working products." } ],
          tags: ["E-commerce", "Business judgment", "User experience"] },
        { n: 3, dark: false, title: "Constant growth",
          lines: [
            { k: "Continuous learning:", v: "I question, research and expand my technical skills every day." },
            { k: "Active training:", v: "I'm currently going deeper into Cybersecurity at Cisco Networking Academy and preparing for the Technical Degree in Management Information Systems (UNL). Whatever the project requires me to learn, I learn." } ],
          tags: ["Cisco Cybersecurity", "UNL", "Self-taught"] },
        { n: 4, dark: true, title: "Obsession with detail",
          lines: [
            { k: "Beyond compiling:", v: "I detect fine inconsistencies in functionality, data integration and system usability." },
            { k: "Structured methodology:", v: "I use agile methodologies (Scrum) and prioritize issues with clear matrices such as MoSCoW to deliver immediate value in every sprint." } ],
          tags: ["Scrum", "MoSCoW", "Jira", "Usability"] },
        { n: 5, dark: true, title: "AI used with judgment",
          lines: [
            { k: "Strategic integration:", v: "I responsibly bring generative Artificial Intelligence into development and testing workflows." },
            { k: "Operational efficiency:", v: "I use AI tools to improve documentation, review code snippets and speed up quality assurance cycles." } ],
          tags: ["AI Prompting", "QA productivity", "Documentation"] },
        { n: 6, dark: true, title: "Passion for quality",
          lines: [
            { k: "Effective prevention:", v: "I enjoy finding errors at early stages, before they reach production environments." },
            { k: "Teamwork:", v: "I work closely with development teams to resolve bugs and turn technical rigor into proven stability." } ],
          tags: ["Bug prevention", "Teamwork", "Stability"] }
      ]
    },

    opportunity: {
      title: "I'm looking for an opportunity",
      p1: "To show everything I have to offer, both technically and analytically.",
      p2: "I know there is a road ahead, but I have solid foundations, discipline and a commitment to building reliable software.",
      facts: [
        { label: "Technical base", value: "UTN Master QA" },
        { label: "Repositories", value: "Active GitHub" },
        { label: "Work mode", value: "Remote / Hybrid / On site" }
      ]
    },

    background: {
      label: "Background",
      experienceTitle: "Experience",
      jobs: [
        {
          date: "Oct 2025 – Dec 2025",
          duration: "3 months",
          type: "Full time",
          title: "QA Tester and e-commerce operations",
          org: "Ominim Sorpresería · Pergamino, Buenos Aires · On site",
          bullets: [
            "Designed and ran manual test cases on the Main Solution system and reported defects with steps to reproduce and evidence.",
            "Analyzed requirements and documentation to write test cases in Gherkin (Given/When/Then), using scenario-based techniques and acceptance criteria.",
            "Validated REST APIs with Postman: endpoints, response codes, JSON, and the legitimacy of domains and transactions.",
            "Queried and validated data with SQL to check orders, stock and prices, practicing on databases such as Northwind.",
            "Supported business operations: project planning, franchise management, stock and cash control, and running an internal store."
          ]
        },
        {
          date: "Mar 2022 – Mar 2024",
          duration: "2 years 1 month",
          type: "Part time",
          title: "Research Laboratory Assistant",
          org: "INTA, EEA Paraná · Entre Ríos · Hybrid",
          bullets: [
            "Quality control and testing: ran analytical tests on aggregate stability in vertisol soils under standardized R&D and GLP protocols.",
            "Sampling and traceability: collected field samples, monitored crop trials and kept a systematic digital record to ensure data integrity and consistency.",
            "Technical documentation: wrote and consolidated technical reports and analytical documentation."
          ],
          note: "Method, analysis and traceability: skills I now apply to IT quality assurance."
        }
      ],
      educationTitle: "Education",
      education: [
        { date: "Feb 2027", status: "Admission in progress", title: "Technical University Degree in Management Information Systems", org: "Universidad Nacional del Litoral (UNL)" },
        { date: "Sep 2026 – Ongoing", status: "", title: "Cybersecurity", org: "Cisco Networking Academy" },
        { date: "Aug – Sep 2026", status: "", title: "DataLab", org: "Unicorn Academy" },
        { date: "2024 – 2025", status: "", title: "Professional Testing Master (SQL / API)", org: "Universidad Tecnológica Nacional (UTN)" }
      ]
    },

    projects: {
      label: "Projects",
      title: "What I tested, automated and broke on purpose.",
      items: [
        { id: "andina", name: "Andina S.A.", status: "In progress", tags: ["Python", "pandas", "Google Colab", "SQL"],
          text: "Generator of a 2,000-row sales dataset with injected errors and a reference error log, built to practice data cleaning, SQL and testing. Cleaning, SQL and tests under development." },
        { id: "millanel", name: "Millanel Cosmética", status: "", tags: ["Test plan", "Test cases", "MoSCoW"],
          text: "Test plan and test cases for the online store, with defects reported and prioritized using the MoSCoW method." },
        { id: "postman", name: "Public API with Postman", status: "", tags: ["Postman", "REST", "JSON"],
          text: "Postman collection for fakestoreapi.com, with validated endpoints and checks on response codes and the JSON body." },
        { id: "selenium", name: "Automated purchase flow", status: "", tags: ["Python", "Selenium", "VSCode"],
          text: "Automated tests of an online store's purchase flow with Python and Selenium, run from VSCode." },
        { id: "carousel", name: "LinkedIn Carousel", status: "", tags: ["Gherkin", "Business Criteria", "Scrum", "AI Prompting", "Teamwork"],
          text: "Reasons why you should hire me." }
      ],
      footPrefix: "All the code is on ",
      footGithub: "GitHub",
      footMiddle: ". The site I tested: ",
      footStore: "Millanel on Tienda Nube",
      footSuffix: "."
    },

    marquee: ["Made and forged in Argentina", "Contact me", "Immediate availability. Full-time."],

    contact: {
      label: "Contact",
      pill: "Let's connect?",
      title: "Is there a spot for me on your team?",
      sub: "If you need someone who checks the details, write to me.",
      copy: "Copy email",
      copied: "Copied!",
      send: "<a href=\"mailto:abrahamsafirayael@gmail.com\">Send an email</a>"
    },

    footer: {
      left: "© 2026 Safira Yael Abraham",
      right: "QA Manual & Automation Junior · Pergamino, Argentina"
    }
  },

  /* ------------------------------ ESPAÑOL --------------------------------- */
  es: {
    htmlLang: "es",
    pageTitle: "Safira Yael Abraham | QA Tester",
    metaDescription:
      "Portfolio profesional bilingüe de Safira Yael Abraham. QA Manual, Automation Testing, proyectos y experiencia profesional.",
    switchTo: "EN",
    switchLabel: "Switch to English",
    menuLabel: "Navegación principal",

    nav: {
      about: "Sobre mí",
      how: "Cómo trabajo",
      why: "Por qué yo",
      background: "Trayectoria",
      projects: "Proyectos",
      contact: "Contacto"
    },

    topBand: [
      "QA Manual & Automation Junior",
      "APIs REST",
      "SQL",
      "Python y Selenium",
      "Jira, Gherkin, Scrum"
    ],

    hero: {
      location: "Pergamino, Buenos Aires, Argentina",
      hi: "Hola,",
      name: "Soy Safira.",
      tagline:
        "QA Manual & Automation Junior. Pruebo software y verifico datos para que el producto funcione según lo esperado.",
      studying:
        "Estudiando Ciberseguridad & Tecnicatura en Informática de Gestión.",
      talk: "Hablemos",
      kicker: "Safira Yael Abraham",
      available: "Disponible para incorporación inmediata y full-time"
    },

    toolsBand: [
      "Postman", "SQL", "Python", "Selenium", "Jira", "Gherkin",
      "Scrum", "Git", "GitHub", "pandas", "Google Colab", "Notion"
    ],

    say: { lead: "Me gusta probar software que", words: ["funciona bien.", "se puede reproducir.", "protege los datos.", "cumple lo acordado.", "las personas pueden usar sin problemas."] },

    about: {
      label: "Sobre mí",
      title: "De los laboratorios de investigación del INTA al testing de software.",
      paragraphs: [
        "Soy tester QA y me apasiona la calidad del software y de los datos. Mi recorrido comenzó en 2023, cuando descubrí esta rama de la informática que hasta entonces desconocía.",
        "Vengo de la investigación y el desarrollo, donde trabajé en laboratorios del INTA, y de la gestión digital. Estas dos experiencias me enseñaron a ser metódica, analítica y detallista: habilidades que considero fundamentales, no solo para el trabajo, sino también para la vida.",
        "Continúo mi formación en Ciberseguridad (Cisco Networking Academy) y me preparo para la Tecnicatura en Informática de Gestión (UNL). Incorporo herramientas de análisis de datos para obtener una visión integral de cada producto, porque entiendo cómo una falla técnica impacta en las ventas, las tasas de conversión y el inventario. Por eso, no pruebo código de forma aislada: valido productos. Utilizo IA generativa con criterio para documentar y agilizar los ciclos de calidad, sin delegar mi capacidad de análisis.",
        "Mi interés particular por la Ciberseguridad creció durante mi segundo año como pasante en la EEA INTA Paraná. Presencié un ciberataque que dejó a la institución completamente sin copias de seguridad de proyectos que habían llevado años de trabajo minucioso y mediciones. Un ciberdelincuente exigió una suma exorbitante, en dólares, para devolver la información experimental y, en algunos casos, confidencial.",
        "Por estas razones, y muchas más, busco equipos dinámicos donde pueda aportar mi experiencia, continuar aprendiendo y ayudar a que la tecnología funcione de la manera más eficiente posible, mientras construyo mi carrera paso a paso."
      ],
      facts: [
        { label: "Puesto", value: "QA Manual & Automation Junior" },
        { label: "Ubicación", value: "Pergamino, Buenos Aires" },
        { label: "Idiomas", value: "Español nativo, inglés B1 (lectura técnica)" },
        { label: "Próximo paso", value: "Tecnicatura en Informática de Gestión, UNL (inicio: febrero de 2027)" }
      ]
    },

    how: {
      label: "Cómo trabajo",
      title: "Casos de prueba claros, datos verificados y errores que se pueden reproducir.",
      gherkinCaption: "Ejemplo de caso de prueba en Gherkin",
      sqlCaption: "Consulta SQL de ejemplo sobre Northwind",
      skills: [
        { title: "Testing manual", text: "Diseño y ejecución de casos de prueba, formato Gherkin, UAT, análisis de requisitos, reportes de defectos con pasos y evidencia, priorización MoSCoW." },
        { title: "APIs REST", text: "Uso de Postman para validar endpoints, códigos de respuesta y cuerpos JSON." },
        { title: "Bases de datos", text: "Consultas SQL para validar datos y transacciones: pedidos, stock y precios." },
        { title: "Automatización", text: "Python, Selenium, pandas y Google Colab. Java en nivel inicial." },
        { title: "Control de versiones", text: "Git y GitHub, con todos los proyectos versionados." },
        { title: "Metodologías y gestión", text: "Scrum (ceremonias, roles, planificación de sprints y dailies), Jira, Excel y Notion para el seguimiento de incidencias." }
      ]
    },

why: {
      label: "Por qué yo",
      title: "6 razones para contratarme.",
      items: [
        { n: 1, dark: false, title: "Perfil técnico y riguroso",
          lines: [
            { k: "Formación y ejecución:", v: "Diseño escenarios de prueba completos, valido servicios REST con Postman, ejecuto consultas SQL avanzadas y automatizo flujos clave con Python y Selenium." },
            { k: "Calidad de raíz:", v: "Analizo requerimientos del sistema, redacto casos en formato Gherkin y me aseguro de que el producto funcione según los criterios de aceptación." } ],
          tags: ["Selenium", "Postman", "SQL", "Gherkin"] },
        { n: 2, dark: false, title: "Visión integral del negocio",
          lines: [
            { k: "Perspectiva amplia:", v: "Mi experiencia en operaciones e-commerce y gestión comercial me enseñó a evaluar el software desde la perspectiva del cliente final y del negocio." },
            { k: "Impacto real:", v: "Entiendo perfectamente cómo influye un fallo técnico en las ventas, la conversión y el stock. No pruebo código en aislamiento; valido productos funcionales." } ],
          tags: ["E-commerce", "Criterio de negocio", "Experiencia de usuario"] },
        { n: 3, dark: false, title: "Constante evolución",
          lines: [
            { k: "Aprendizaje continuo:", v: "Cuestiono, investigo y amplío mis capacidades técnicas todos los días." },
            { k: "Formación activa:", v: "Actualmente estoy profundizando en Ciberseguridad en Cisco Networking Academy y preparándome para la Tecnicatura en Sistemas de Información de las Organizaciones (UNL). Lo que el proyecto exija aprender, lo aprendo." } ],
          tags: ["Cisco Cybersecurity", "UNL", "Autodidacta"] },
        { n: 4, dark: true, title: "Obsesión por el detalle",
          lines: [
            { k: "Más allá de compilar:", v: "Detecto inconsistencias finas en la funcionalidad, la integración de datos y la usabilidad del sistema." },
            { k: "Metodología estructurada:", v: "Utilizo metodologías ágiles (Scrum) y priorizo incidencias mediante matrices claras como MoSCoW para aportar valor inmediato en cada sprint." } ],
          tags: ["Scrum", "MoSCoW", "Jira", "Usabilidad"] },
        { n: 5, dark: true, title: "Uso de IA con criterio",
          lines: [
            { k: "Integración estratégica:", v: "Incorporo Inteligencia Artificial generativa de manera responsable en los flujos de trabajo de desarrollo y testing." },
            { k: "Eficiencia operativa:", v: "Empleo herramientas de IA para optimizar la redacción de documentación, revisar fragmentos de código y agilizar los ciclos de aseguramiento de calidad." } ],
          tags: ["AI Prompting", "Productividad QA", "Documentación"] },
        { n: 6, dark: true, title: "Pasión por la calidad",
          lines: [
            { k: "Prevención efectiva:", v: "Disfruto el proceso de identificar errores en etapas tempranas antes de que lleguen a entornos de producción." },
            { k: "Trabajo en equipo:", v: "Colaboro de forma cercana con los equipos de desarrollo para resolver bugs y transformar la rigurosidad técnica en estabilidad comprobada." } ],
          tags: ["Prevención de bugs", "Trabajo en equipo", "Estabilidad"] }
      ]
    },

    opportunity: {
      title: "Busco una oportunidad",
      p1: "Para demostrar todo lo que tengo para aportar, tanto en lo técnico como en lo analítico.",
      p2: "Sé que hay un camino por recorrer, pero cuento con bases sólidas, disciplina y el compromiso de construir software confiable.",
      facts: [
        { label: "Bases técnicas", value: "UTN Master QA" },
        { label: "Repositorios", value: "GitHub activo" },
        { label: "Modalidad", value: "Remoto / Híbrido / Presencial" }
      ]
    },

    background: {
      label: "Trayectoria",
      experienceTitle: "Experiencia",
      jobs: [
        {
          date: "Oct 2025 – Dic 2025",
          duration: "3 meses",
          type: "Jornada completa",
          title: "Tester QA y operaciones de e-commerce",
          org: "Ominim Sorpresería · Pergamino, Buenos Aires · Presencial",
          bullets: [
            "Diseñé y ejecuté casos de prueba manuales en el sistema Main Solution e informé defectos con pasos para reproducirlos y evidencia.",
            "Analicé requisitos y documentación para redactar casos de prueba en Gherkin (Given/When/Then), utilizando técnicas basadas en escenarios y criterios de aceptación.",
            "Validé APIs REST con Postman: endpoints, códigos de respuesta, JSON y legitimidad de dominios y transacciones.",
            "Consulté y validé datos con SQL para comprobar pedidos, stock y precios, practicando con bases de datos como Northwind.",
            "Di soporte a operaciones del negocio: planificación de proyectos, gestión de franquicias, control de stock y caja, y operación de una tienda interna."
          ]
        },
        {
          date: "Mar 2022 – Mar 2024",
          duration: "2 años y 1 mes",
          type: "Media jornada",
          title: "Asistente de laboratorio de investigación",
          org: "INTA, EEA Paraná · Entre Ríos · Híbrido",
          bullets: [
            "Control de calidad y ensayos: realicé pruebas analíticas de estabilidad de agregados en suelos vertisoles, bajo protocolos estandarizados de I+D y BPL.",
            "Muestreo y trazabilidad: recolecté muestras de campo, monitoreé ensayos de cultivos y mantuve un registro digital sistemático para garantizar la integridad y consistencia de los datos.",
            "Documentación técnica: redacté y consolidé informes técnicos y documentación analítica."
          ],
          note: "Método, análisis y trazabilidad: habilidades que hoy aplico al aseguramiento de calidad en IT."
        }
      ],
      educationTitle: "Educación",
      education: [
        { date: "Feb 2027", status: "Ingreso en curso", title: "Tecnicatura en Informática de Gestión", org: "Universidad Nacional del Litoral (UNL)" },
        { date: "Sep 2026 – Actualidad", status: "", title: "Ciberseguridad", org: "Cisco Networking Academy" },
        { date: "Ago – Sep 2026", status: "", title: "DataLab", org: "Unicorn Academy" },
        { date: "2024 – 2025", status: "", title: "Máster Profesional en Testing (SQL / API)", org: "Universidad Tecnológica Nacional (UTN)" }
      ]
    },

    projects: {
      label: "Proyectos",
      title: "Lo que probé, automaticé y rompí a propósito.",
      items: [
        { id: "andina", name: "Andina S.A.", status: "En desarrollo", tags: ["Python", "pandas", "Google Colab", "SQL"],
          text: "Generador de un conjunto de datos de ventas de 2.000 filas con errores inyectados y un registro de errores de referencia, creado para practicar limpieza de datos, SQL y testing. Limpieza, SQL y pruebas en desarrollo." },
        { id: "millanel", name: "Millanel Cosmética", status: "", tags: ["Test plan", "Test cases", "MoSCoW"],
          text: "Plan y casos de prueba para la tienda online, con defectos informados y priorizados mediante el método MoSCoW." },
        { id: "postman", name: "API pública con Postman", status: "", tags: ["Postman", "REST", "JSON"],
          text: "Colección de Postman para fakestoreapi.com, con endpoints validados y verificaciones de códigos de respuesta y del cuerpo JSON." },
        { id: "selenium", name: "Flujo de compra automatizado", status: "", tags: ["Python", "Selenium", "VSCode"],
          text: "Pruebas automatizadas del flujo de compra de una tienda online con Python y Selenium, ejecutadas desde VSCode." },
        { id: "carousel", name: "Carrusel de LinkedIn", status: "", tags: ["Gherkin", "Business Criteria", "Scrum", "AI Prompting", "Teamwork"],
          text: "Motivos por los que deberías contratarme." }
      ],
      footPrefix: "Todo el código está en ",
      footGithub: "GitHub",
      footMiddle: ". El sitio que probé: ",
      footStore: "Millanel en Tienda Nube",
      footSuffix: "."
    },

    marquee: ["Hecha y forjada en Argentina", "Contactame", "Disponibilidad inmediata. Jornada completa."],

    contact: {
      label: "Contacto",
      pill: "¿Conectamos?",
      title: "¿Hay un lugar para mí en tu equipo?",
      sub: "Si necesitás a alguien que revise los detalles, escribime.",
      copy: "Copiar email",
      copied: "¡Copiado!",
      send: "<a href=\"mailto:abrahamsafirayael@gmail.com\">Enviar un email</a>"
    },

    footer: {
      left: "© 2026 Safira Yael Abraham",
      right: "QA Manual & Automation Junior · Pergamino, Argentina"
    }
  }
};
