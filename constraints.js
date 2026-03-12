// AI Workshop Project Constants

// Application Configuration
const APP_CONFIG = {
    name: 'AI Workshop Project',
    version: '1.0.0',
    author: 'Workshop Participant'
};

// API Endpoints (if needed)
const API_ENDPOINTS = {
    // Add your API endpoints here
    // Example: BASE_URL: 'https://api.example.com'
};

// UI Constants
const UI_CONSTANTS = {
    ANIMATION_DURATION: 300,
    FADE_DURATION: 200,
    DEBOUNCE_DELAY: 500
};

// GitHub Color Scheme
const COLORS = {
    PRIMARY: '#0969da',        // GitHub blue
    SECONDARY: '#6f42c1',      // GitHub purple
    SUCCESS: '#1a7f37',        // GitHub green
    WARNING: '#d1242f',        // GitHub red
    ERROR: '#cf222e',          // GitHub error red
    INFO: '#0969da',           // GitHub info blue
    BACKGROUND_PRIMARY: '#0d1117',    // GitHub dark background
    BACKGROUND_SECONDARY: '#161b22',  // GitHub secondary dark
    BACKGROUND_TERTIARY: '#21262d',   // GitHub tertiary dark
    BORDER: '#30363d',         // GitHub border color
    TEXT_PRIMARY: '#f0f6fc',   // GitHub primary text
    TEXT_SECONDARY: '#8b949e', // GitHub secondary text
    TEXT_MUTED: '#656d76'      // GitHub muted text
};

// Messages
const MESSAGES = {
    LOADING: 'Loading...',
    ERROR_GENERIC: 'Something went wrong. Please try again.',
    SUCCESS_GENERIC: 'Operation completed successfully!'
};

// Portfolio Data
const PORTFOLIO_DATA = {
    // Projects Data
    projects: [
        {
            id: 1,
            title: 'AI Portfolio',
            description: 'A modern, responsive portfolio website showcasing my skills and projects with dynamic content rendering and beautiful animations.',
            image: 'fas fa-robot',
            tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
            links: {
                live: '#',
                github: '#'
            },
            featured: true
        },
        {
            id: 2,
            title: 'Placement Recruitment Platform',
            description: 'Full stack placement recruitment platform with comprehensive backend API, user authentication, and modern frontend interface.',
            image: 'fas fa-briefcase',
            tech: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
            links: {
                live: '#',
                github: '#'
            },
            featured: true
        },
        {
            id: 3,
            title: 'Employee Leave Management System',
            description: 'A digital solution that enables easy leave application, approval, and tracking, improving efficiency and transparency within the organization.',
            image: 'fas fa-user-check',
            tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
            links: {
                live: '#',
                github: '#'
            },
            featured: true
        },
        {
            id: 4,
            title: 'E-Commerce Platform',
            description: 'Complete e-commerce solution with product management, shopping cart, payment integration, and admin dashboard.',
            image: 'fas fa-shopping-cart',
            tech: ['Java', 'Spring Framework', 'React', 'MySQL', 'REST API'],
            links: {
                live: '#',
                github: '#'
            },
            featured: false
        },
        {
            id: 5,
            title: 'Bus Booking Management System',
            description: 'Created an online booking solution that streamlines bus ticket reservations through an intuitive and efficient interface..',
            image: 'fas fa-tasks',
            tech: ['Microsoft SQL', 'HTML', 'MongoDB', 'CSS', 'JavaScript'],
            links: {
                live: '#',
                github: '#'
            },
            featured: false
        }
    ],

    // Experience & Education Data
    experience: [
    
        {
            id: 2,
            type: 'education',
            title: 'Bachelor of Engineering in Computer Science',
            company: 'S L N College of Engineering',
            location: 'Karnataka,India',
            duration: '2021 - 2025',
            description: 'Strong foundation in computer science fundamentals, programming concepts, data structures, algorithms, and software engineering principles.',
            skills: ['Programming Fundamentals', 'Operating Systems', 'Data Structures', 'Algorithms', 'Database Systems', 'Software Engineering'],
            current: false
        },
        {
            id: 3,
            type: 'project',
            title: 'Application Developer - Web & Mobile Virtual Internship',
            company: 'ROOMAN Technologies',
            location: 'Remote',
            duration: '2024 - 2025',
            description: 'Training in Web and Mobile Application Development, gaining hands-on experience in designing, building, and deploying responsive, user-friendly applications across both web and mobile platforms.Developed strong proficiency in modern development tools, frameworks, and best practices to deliver efficient, scalable, and high-quality applications.',
            skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Java', 'Python', 'Flutter', 'React Native', 'MySQL', 'MongoDB', 'Firebase', 'REST APIs', 'Git'],
            current: false
        },
        {
            id: 4,
            type: 'project',
            title: 'Hand Gesture Detection',
            company: 'Personal Development',
            location: 'Remote',
            duration: '2024 - 2025',
            description: 'Developed a real-time hand gesture recognition system using Python, OpenCV, and ML and Implemented machine learning algorithms to classify gestures with 90% accuracy',
            skills: ['Python', 'Machine Learning', 'OpenCV', 'Data Analysis', 'Computer Vision'],
            current: false

        }
    ],

    // Skills Data
    skills: [
        {
            id: 1,
            name: 'Java',
            icon: 'fab fa-java',
            level: 85,
            category: 'backend'
        },
        {
            id: 2,
            name: 'Spring Boot',
            icon: 'fas fa-leaf',
            level: 80,
            category: 'backend'
        },
        {
            id: 3,
            name: 'HTML5',
            icon: 'fab fa-html5',
            level: 90,
            category: 'frontend'
        },
        {
            id: 4,
            name: 'CSS3',
            icon: 'fab fa-css3-alt',
            level: 85,
            category: 'frontend'
        },
        {
            id: 5,
            name: 'JavaScript',
            icon: 'fab fa-js-square',
            level: 80,
            category: 'frontend'
        },
        {
            id: 6,
            name: 'MySQL',
            icon: 'fas fa-database',
            level: 75,
            category: 'database'
        },
        {
            id: 7,
            name: 'Python',
            icon: 'fab fa-python',
            level: 70,
            category: 'backend'
        },
        {
            id: 8,
            name: 'Git',
            icon: 'fab fa-git-alt',
            level: 75,
            category: 'tools'
        },
        {
            id: 9,
            name: 'REST APIs',
            icon: 'fas fa-exchange-alt',
            level: 80,
            category: 'backend'
        },
        {
            id: 10,
            name: 'Responsive Design',
            icon: 'fas fa-mobile-alt',
            level: 85,
            category: 'frontend'
        }
    ],

    // Contact Information
    contact: {
        personal: {
            name: 'Praveen Kumar',
            title: 'Full Stack Java Developer',
            email: 'praveenpavan26@gmail.com',
            phone: '7483122858',
            location: 'India',
            availability: 'Available for opportunities'
        },
        social: [
            {
                id: 1,
                name: 'LinkedIn',
                icon: 'fab fa-linkedin',
                url: 'https://linkedin.com/in/praveen-pavan',
                username: '@praveen-pavan'
            },
            {
                id: 2,
                name: 'GitHub',
                icon: 'fab fa-github',
                url: 'https://github.com/Praveen-Mallesh',
                username: '@praveen-mallesh'
            },
            {
                id: 3,
                name: 'Twitter',
                icon: 'fab fa-twitter',
                url: 'https://twitter.com/saidurgarao',
                username: '@saidurgarao'
            },
            {
                id: 4,
                name: 'Instagram',
                icon: 'fab fa-instagram',
                url: 'https://instagram.com/_.praveen._21',
                username: '@_.praveen._21'
            }
        ],
        resume: {
            url: 'file:///C:/Users/Probook1/Downloads/Praveen_resume%20(2)%20(1).pdf',
            filename: 'praveen_resume.pdf'
        }
    }
};