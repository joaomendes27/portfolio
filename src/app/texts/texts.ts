export const TEXTS = {
  pt: {
    navbar: {
      experiencia: 'Experiência',
      projetos: 'Projetos',
      contato: 'Contato',
    },
    home: {
      titulo: 'Olá! Meu nome é João Mendes',
      subtitulo: 'Desenvolvedor Full-Stack',
      descricao1:
        'Desenvolvedor com experiência em .NET, Angular, JavaScript e RPA.',
      descricao2:
        'Aplicando meus conhecimentos na criação de softwares robustos que atendam às necessidades de negócios e aos padrões do mercado.',
      linkedin: 'Linkedin',
      github: 'GitHub',
      curriculo: 'Currículo',
    },
    experience: {
      titulo: 'Experiência',
      cargo: 'Desenvolvedor de Software',
      empresa: 'Mosten',
      periodo: '(06/2025 – Atualmente)',
      descricao1:
        '• Participação ativa em múltiplos projetos, garantindo qualidade e consistência nas entregas.',
      descricao2:
        '• Atuação com .NET no back-end, utilizando design patterns como CQRS e Clean Architecture para garantir escalabilidade, organização de código e separação de responsabilidades, com foco no desenvolvimento e manutenção de APIs.',
      descricao3:
        '• Desenvolvimento em Angular no front-end, assegurando melhoria contínua da experiência do usuário e da performance das aplicações.',
      descricao4:
        '• Nas automações, interajo diretamente com o cliente mapeando e analisando os processos para garantir soluções de software alinhadas às necessidades do negócio, com o objetivo de trazer ganhos de produtividade, confiabilidade e redução de custos.',
      tecnologias: 'Tecnologias Utilizadas:',
      techs: [
        '.NET',
        'Angular',
        'JavaScript',
        'Node-RED',
        'PostgreSQL',
        'SQL Server',
        'Azure DevOps',
      ],
    },
    projects: {
      titulo: 'Projetos Pessoais',
      detalhes: 'Ver detalhes',
      fechar: 'Fechar',
      tecnologiasTitulo: 'Tecnologias utilizadas:',
      projetos: [
        {
          id: 'financeiro',
          nome: 'Controle Financeiro',
          descricao: [
            'WebApi desenvolvida para controle financeiro pessoal, com o objetivo do usuário ter o controle das suas despesas e receitas mensais de forma simples e eficiente.',
            'Além disso permite a possibilidade de gerar relatórios mensais com as informações coletadas.',
          ],
          tecnologias: [
            'Backend: ASP.NET Core, Entity Framework e Autenticação JWT',
            'Frontend: Angular',
            'Banco de Dados: SQL Server',
          ],
          github: 'https://github.com/joaomendes27/controle-financeiro-webapi',
          imagem: '/assets/projetoControleFinanceiro.png',
        },
        {
          id: 'vendas',
          nome: 'Controle de Vendas',
          descricao: [
            'Sistema CRUD de funcionários, departamentos e vendas, permitindo o gerenciamento eficiente de todos os processos envolvidos.',
          ],
          tecnologias: [
            'Backend: ASP.NET Core MVC, Entity Framework Core',
            'Frontend: Razor Views (ASP.NET Core MVC)',
            'Banco de Dados: SQL Server',
          ],
          github: 'https://github.com/joaomendes27/SalesWebMVC',
          imagem: '/assets/projetoControleVendas.png',
        },
        {
          id: 'portfolio',
          nome: 'Portfolio',
          descricao: [
            'Este portfólio que você está vendo foi desenvolvido utilizando Angular para o frontend, com estilização em SCSS e organização modular de componentes.',
          ],
          tecnologias: ['Frontend: Angular, SCSS', 'Bibliotecas: AOS'],
          github: 'https://github.com/joaomendes27/portfolio',
          imagem: '/assets/projetoPortfolio.png',
        },
      ],
    },
    contact: {
      titulo: 'Contato',
      emailBtn: 'Me envie um e-mail',
      linkedinBtn: 'Contato no Linkedin',
    },
  },
  en: {
    navbar: {
      experiencia: 'Work Experience',
      projetos: 'Projects',
      contato: 'Contact',
    },
    home: {
      titulo: 'Hey! My name is João Mendes',
      subtitulo: 'Full-Stack Developer',
      descricao1:
        'Developer with experience in .NET, Angular, JavaScript and RPA.',
      descricao2:
        'Applying my knowledge to create robust software that meets business needs and market standards.',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      curriculo: 'Resume',
    },
    experience: {
      titulo: 'Work Experience',
      cargo: 'Software Developer',
      empresa: 'Mosten',
      periodo: '(06/2025 – Present)',
      descricao1:
        '• Active participation in multiple projects, ensuring quality and consistency in deliverables.',
      descricao2:
        '• Working with .NET on the backend, using design patterns such as CQRS and Clean Architecture to ensure scalability, code organization, and separation of concerns, focusing on API development and maintenance.',
      descricao3:
        '• Frontend development with Angular, continuously improving user experience and application performance.',
      descricao4:
        '• In automation, I interact directly with clients, mapping and analyzing processes to deliver software solutions aligned with business needs, aiming for productivity gains, reliability, and cost reduction.',
      tecnologias: 'Technologies Used:',
      techs: [
        '.NET',
        'Angular',
        'JavaScript',
        'Node-RED',
        'PostgreSQL',
        'SQL Server',
        'Azure DevOps',
      ],
    },
    projects: {
      titulo: 'Personal Projects',
      detalhes: 'See details',
      fechar: 'Close',
      tecnologiasTitulo: 'Tech stack:',
      projetos: [
        {
          id: 'financeiro',
          nome: 'Finance Control',
          descricao: [
            'WebApi developed for personal finance control, allowing users to manage their monthly expenses and income simply and efficiently.',
            'Also allows generating monthly reports with the collected information.',
          ],
          tecnologias: [
            'Backend: ASP.NET Core, Entity Framework and JWT Authentication',
            'Frontend: Angular',
            'Database: SQL Server',
          ],
          github: 'https://github.com/joaomendes27/controle-financeiro-webapi',
          imagem: '/assets/projetoControleFinanceiro.png',
        },
        {
          id: 'vendas',
          nome: 'Sales Control',
          descricao: [
            'CRUD system for employees, departments and sales, enabling efficient management of all involved processes.',
          ],
          tecnologias: [
            'Backend: ASP.NET Core MVC, Entity Framework Core',
            'Frontend: Razor Views (ASP.NET Core MVC)',
            'Database: SQL Server',
          ],
          github: 'https://github.com/joaomendes27/SalesWebMVC',
          imagem: '/assets/projetoControleVendas.png',
        },
        {
          id: 'portfolio',
          nome: 'Portfolio',
          descricao: [
            'This portfolio  was developed using Angular for the frontend, with SCSS styling and modular component organization.',
          ],
          tecnologias: ['Frontend: Angular, SCSS', 'Libraries: AOS'],
          github: 'https://github.com/joaomendes27/portfolio',
          imagem: '/assets/projetoPortfolio.png',
        },
      ],
    },
    contact: {
      titulo: 'Contact',
      emailBtn: 'Send me an email',
      linkedinBtn: 'Contact on LinkedIn',
    },
  },
};
