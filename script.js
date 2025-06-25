// Navigation functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Survey Questions and Career Classification System
const surveyQuestions = [
    // Personality & Work Style (Questions 1-10)
    {
        question: "How do you prefer to work with others?",
        options: [
            { text: "I enjoy leading and directing teams", category: "administrative", weight: 3 },
            { text: "I prefer collaborative teamwork", category: "clinical", weight: 2 },
            { text: "I work well independently", category: "research", weight: 2 },
            { text: "I like supporting others behind the scenes", category: "support", weight: 2 }
        ]
    },
    {
        question: "How do you handle stressful situations?",
        options: [
            { text: "I remain calm and make quick decisions", category: "clinical", weight: 3 },
            { text: "I analyze the situation thoroughly first", category: "diagnostic", weight: 2 },
            { text: "I follow established protocols", category: "administrative", weight: 2 },
            { text: "I seek support from colleagues", category: "support", weight: 2 }
        ]
    },
    {
        question: "What motivates you most in your work?",
        options: [
            { text: "Helping people directly", category: "clinical", weight: 3 },
            { text: "Solving complex problems", category: "research", weight: 3 },
            { text: "Organizing and improving systems", category: "administrative", weight: 2 },
            { text: "Using technology to innovate", category: "technology", weight: 2 }
        ]
    },
    {
        question: "How do you prefer to learn new things?",
        options: [
            { text: "Hands-on experience and practice", category: "clinical", weight: 2 },
            { text: "Reading and research", category: "research", weight: 3 },
            { text: "Structured training programs", category: "administrative", weight: 2 },
            { text: "Online courses and technology", category: "technology", weight: 2 }
        ]
    },
    {
        question: "What type of environment do you thrive in?",
        options: [
            { text: "Fast-paced, dynamic settings", category: "clinical", weight: 2 },
            { text: "Quiet, focused environments", category: "research", weight: 3 },
            { text: "Structured, organized spaces", category: "administrative", weight: 2 },
            { text: "Modern, tech-forward facilities", category: "technology", weight: 2 }
        ]
    },
    {
        question: "How do you approach problem-solving?",
        options: [
            { text: "I rely on intuition and experience", category: "clinical", weight: 2 },
            { text: "I gather data and analyze systematically", category: "diagnostic", weight: 3 },
            { text: "I follow established procedures", category: "administrative", weight: 2 },
            { text: "I look for innovative technological solutions", category: "technology", weight: 2 }
        ]
    },
    {
        question: "What's your preferred level of patient interaction?",
        options: [
            { text: "High - I want direct patient care", category: "clinical", weight: 3 },
            { text: "Moderate - I want some patient contact", category: "support", weight: 2 },
            { text: "Low - I prefer behind-the-scenes work", category: "diagnostic", weight: 2 },
            { text: "Minimal - I prefer research or admin", category: "research", weight: 2 }
        ]
    },
    {
        question: "How do you feel about working with technology?",
        options: [
            { text: "I'm very comfortable with new technology", category: "technology", weight: 3 },
            { text: "I can learn new systems when needed", category: "clinical", weight: 2 },
            { text: "I prefer traditional methods", category: "clinical", weight: 1 },
            { text: "I enjoy troubleshooting tech issues", category: "technology", weight: 2 }
        ]
    },
    {
        question: "What's your preferred work schedule?",
        options: [
            { text: "Regular business hours", category: "administrative", weight: 2 },
            { text: "Flexible hours with some flexibility", category: "research", weight: 2 },
            { text: "Shift work including nights/weekends", category: "clinical", weight: 2 },
            { text: "On-call availability", category: "clinical", weight: 2 }
        ]
    },
    {
        question: "How do you handle criticism or feedback?",
        options: [
            { text: "I welcome it as a learning opportunity", category: "research", weight: 2 },
            { text: "I take it personally but use it to improve", category: "clinical", weight: 2 },
            { text: "I prefer constructive, structured feedback", category: "administrative", weight: 2 },
            { text: "I focus on the technical aspects", category: "diagnostic", weight: 2 }
        ]
    },

    // Skills & Abilities (Questions 11-20)
    {
        question: "How would you rate your communication skills?",
        options: [
            { text: "Excellent - I can explain complex topics simply", category: "clinical", weight: 3 },
            { text: "Good - I can communicate clearly when needed", category: "support", weight: 2 },
            { text: "Average - I prefer written communication", category: "administrative", weight: 2 },
            { text: "Technical - I communicate best with data", category: "diagnostic", weight: 2 }
        ]
    },
    {
        question: "What's your strongest technical skill?",
        options: [
            { text: "Medical procedures and patient care", category: "clinical", weight: 3 },
            { text: "Laboratory techniques and analysis", category: "diagnostic", weight: 3 },
            { text: "Data analysis and research methods", category: "research", weight: 3 },
            { text: "Healthcare software and systems", category: "technology", weight: 3 }
        ]
    },
    {
        question: "How do you handle detailed, repetitive tasks?",
        options: [
            { text: "I find them satisfying and important", category: "diagnostic", weight: 3 },
            { text: "I can do them but prefer variety", category: "clinical", weight: 2 },
            { text: "I organize them efficiently", category: "administrative", weight: 2 },
            { text: "I automate them when possible", category: "technology", weight: 2 }
        ]
    },
    {
        question: "What's your approach to learning new medical procedures?",
        options: [
            { text: "I learn best by doing", category: "clinical", weight: 3 },
            { text: "I study the theory first", category: "research", weight: 2 },
            { text: "I follow step-by-step protocols", category: "diagnostic", weight: 2 },
            { text: "I prefer simulation training", category: "technology", weight: 2 }
        ]
    },
    {
        question: "How do you stay organized in your work?",
        options: [
            { text: "I use detailed systems and checklists", category: "administrative", weight: 3 },
            { text: "I prioritize by urgency and importance", category: "clinical", weight: 2 },
            { text: "I maintain detailed records", category: "diagnostic", weight: 2 },
            { text: "I use digital tools and apps", category: "technology", weight: 2 }
        ]
    },
    {
        question: "What's your comfort level with medical equipment?",
        options: [
            { text: "Very comfortable - I enjoy using new equipment", category: "clinical", weight: 3 },
            { text: "Comfortable with training", category: "support", weight: 2 },
            { text: "I prefer to understand the technology behind it", category: "technology", weight: 2 },
            { text: "I focus on the data it produces", category: "diagnostic", weight: 2 }
        ]
    },
    {
        question: "How do you approach continuing education?",
        options: [
            { text: "I actively seek out new learning opportunities", category: "research", weight: 3 },
            { text: "I attend required training and conferences", category: "clinical", weight: 2 },
            { text: "I focus on certifications in my specialty", category: "diagnostic", weight: 2 },
            { text: "I stay updated on new technologies", category: "technology", weight: 2 }
        ]
    },
    {
        question: "What's your preferred method of documentation?",
        options: [
            { text: "Detailed written reports", category: "diagnostic", weight: 3 },
            { text: "Electronic health records", category: "technology", weight: 2 },
            { text: "Concise, focused notes", category: "clinical", weight: 2 },
            { text: "Structured forms and templates", category: "administrative", weight: 2 }
        ]
    },
    {
        question: "How do you handle multiple priorities?",
        options: [
            { text: "I triage and handle the most urgent first", category: "clinical", weight: 3 },
            { text: "I create detailed schedules and plans", category: "administrative", weight: 2 },
            { text: "I focus on one task at a time", category: "research", weight: 2 },
            { text: "I use technology to manage workflows", category: "technology", weight: 2 }
        ]
    },
    {
        question: "What's your approach to quality assurance?",
        options: [
            { text: "I double-check everything systematically", category: "diagnostic", weight: 3 },
            { text: "I follow established protocols", category: "clinical", weight: 2 },
            { text: "I implement continuous improvement processes", category: "administrative", weight: 2 },
            { text: "I use automated quality checks", category: "technology", weight: 2 }
        ]
    },

    // Interests & Values (Questions 21-30)
    {
        question: "What aspect of healthcare interests you most?",
        options: [
            { text: "Direct patient care and treatment", category: "clinical", weight: 3 },
            { text: "Understanding disease mechanisms", category: "research", weight: 3 },
            { text: "Improving healthcare systems", category: "administrative", weight: 2 },
            { text: "Developing new medical technologies", category: "technology", weight: 2 }
        ]
    },
    {
        question: "What type of impact do you want to make?",
        options: [
            { text: "Help individual patients directly", category: "clinical", weight: 3 },
            { text: "Advance medical knowledge", category: "research", weight: 3 },
            { text: "Improve healthcare delivery", category: "administrative", weight: 2 },
            { text: "Innovate healthcare solutions", category: "technology", weight: 2 }
        ]
    },
    {
        question: "What's your view on healthcare policy?",
        options: [
            { text: "I want to influence policy decisions", category: "administrative", weight: 3 },
            { text: "I focus on providing care regardless of policy", category: "clinical", weight: 2 },
            { text: "I research policy impacts", category: "research", weight: 2 },
            { text: "I develop policy-compliant solutions", category: "technology", weight: 2 }
        ]
    },
    {
        question: "How do you feel about specialization?",
        options: [
            { text: "I want to be a generalist", category: "clinical", weight: 2 },
            { text: "I want to specialize in a specific area", category: "diagnostic", weight: 2 },
            { text: "I want to be an expert in my field", category: "research", weight: 2 },
            { text: "I want to work across multiple specialties", category: "technology", weight: 2 }
        ]
    },
    {
        question: "What's your preferred work setting?",
        options: [
            { text: "Hospitals and emergency settings", category: "clinical", weight: 3 },
            { text: "Laboratories and research facilities", category: "research", weight: 2 },
            { text: "Offices and administrative centers", category: "administrative", weight: 2 },
            { text: "Technology companies and startups", category: "technology", weight: 2 }
        ]
    },
    {
        question: "How do you view the role of technology in healthcare?",
        options: [
            { text: "It should enhance but not replace human care", category: "clinical", weight: 2 },
            { text: "It's essential for modern healthcare", category: "technology", weight: 3 },
            { text: "It should be evidence-based", category: "research", weight: 2 },
            { text: "It should improve efficiency", category: "administrative", weight: 2 }
        ]
    },
    {
        question: "What's your approach to evidence-based practice?",
        options: [
            { text: "I always follow the latest research", category: "research", weight: 3 },
            { text: "I balance research with clinical experience", category: "clinical", weight: 2 },
            { text: "I implement evidence-based protocols", category: "administrative", weight: 2 },
            { text: "I use technology to access evidence", category: "technology", weight: 2 }
        ]
    },
    {
        question: "How do you feel about healthcare innovation?",
        options: [
            { text: "I want to be part of developing new treatments", category: "research", weight: 3 },
            { text: "I want to use innovative approaches", category: "clinical", weight: 2 },
            { text: "I want to implement innovative systems", category: "administrative", weight: 2 },
            { text: "I want to create innovative solutions", category: "technology", weight: 3 }
        ]
    },
    {
        question: "What's your view on healthcare costs?",
        options: [
            { text: "Patient care comes first", category: "clinical", weight: 2 },
            { text: "We need cost-effective solutions", category: "administrative", weight: 3 },
            { text: "Research can reduce long-term costs", category: "research", weight: 2 },
            { text: "Technology can improve cost efficiency", category: "technology", weight: 2 }
        ]
    },
    {
        question: "How do you approach healthcare disparities?",
        options: [
            { text: "I want to provide care to underserved populations", category: "clinical", weight: 3 },
            { text: "I want to research the causes", category: "research", weight: 2 },
            { text: "I want to develop policies to address them", category: "administrative", weight: 2 },
            { text: "I want to create accessible solutions", category: "technology", weight: 2 }
        ]
    },

    // Career Goals & Aspirations (Questions 31-40)
    {
        question: "What's your long-term career goal?",
        options: [
            { text: "To be a respected clinician", category: "clinical", weight: 3 },
            { text: "To lead research breakthroughs", category: "research", weight: 3 },
            { text: "To manage healthcare organizations", category: "administrative", weight: 3 },
            { text: "To develop healthcare technology", category: "technology", weight: 3 }
        ]
    },
    {
        question: "How do you want to be recognized in your field?",
        options: [
            { text: "As an excellent caregiver", category: "clinical", weight: 3 },
            { text: "As a thought leader", category: "research", weight: 3 },
            { text: "As an effective manager", category: "administrative", weight: 2 },
            { text: "As an innovator", category: "technology", weight: 2 }
        ]
    },
    {
        question: "What type of leadership role interests you?",
        options: [
            { text: "Clinical team leadership", category: "clinical", weight: 2 },
            { text: "Research project leadership", category: "research", weight: 2 },
            { text: "Healthcare administration", category: "administrative", weight: 3 },
            { text: "Technology team leadership", category: "technology", weight: 2 }
        ]
    },
    {
        question: "How do you want to contribute to healthcare?",
        options: [
            { text: "By providing excellent patient care", category: "clinical", weight: 3 },
            { text: "By advancing medical knowledge", category: "research", weight: 3 },
            { text: "By improving healthcare systems", category: "administrative", weight: 2 },
            { text: "By developing new solutions", category: "technology", weight: 2 }
        ]
    },
    {
        question: "What's your preferred level of responsibility?",
        options: [
            { text: "High - I want significant decision-making power", category: "administrative", weight: 3 },
            { text: "Moderate - I want clinical autonomy", category: "clinical", weight: 2 },
            { text: "Focused - I want to be an expert in my area", category: "diagnostic", weight: 2 },
            { text: "Innovative - I want to create new approaches", category: "research", weight: 2 }
        ]
    },
    {
        question: "How do you want to balance work and life?",
        options: [
            { text: "I'm willing to work long hours for patient care", category: "clinical", weight: 2 },
            { text: "I want flexible hours for research", category: "research", weight: 2 },
            { text: "I prefer regular, predictable schedules", category: "administrative", weight: 2 },
            { text: "I want work-life integration", category: "technology", weight: 2 }
        ]
    },
    {
        question: "What type of recognition motivates you?",
        options: [
            { text: "Patient gratitude and outcomes", category: "clinical", weight: 3 },
            { text: "Research publications and citations", category: "research", weight: 3 },
            { text: "Organizational achievements", category: "administrative", weight: 2 },
            { text: "Innovation awards and patents", category: "technology", weight: 2 }
        ]
    },
    {
        question: "How do you want to grow professionally?",
        options: [
            { text: "Through advanced clinical training", category: "clinical", weight: 3 },
            { text: "Through research and academic advancement", category: "research", weight: 3 },
            { text: "Through management and leadership roles", category: "administrative", weight: 2 },
            { text: "Through technical specialization", category: "technology", weight: 2 }
        ]
    },
    {
        question: "What legacy do you want to leave?",
        options: [
            { text: "Improved patient care and outcomes", category: "clinical", weight: 3 },
            { text: "Advancements in medical knowledge", category: "research", weight: 3 },
            { text: "Better healthcare systems", category: "administrative", weight: 2 },
            { text: "Innovative healthcare solutions", category: "technology", weight: 2 }
        ]
    },
    {
        question: "How do you want to impact future healthcare?",
        options: [
            { text: "By training the next generation of clinicians", category: "clinical", weight: 2 },
            { text: "By discovering new treatments", category: "research", weight: 3 },
            { text: "By shaping healthcare policy", category: "administrative", weight: 2 },
            { text: "By developing breakthrough technologies", category: "technology", weight: 3 }
        ]
    }
];

// Career categories with detailed information
const careerCategories = {
    clinical: {
        name: "Clinical Care",
        icon: "fas fa-stethoscope",
        description: "Direct patient care roles focusing on diagnosis, treatment, and patient management.",
        careers: [
            "Physician (MD/DO)",
            "Nurse Practitioner",
            "Registered Nurse",
            "Physician Assistant",
            "Physical Therapist",
            "Occupational Therapist",
            "Respiratory Therapist",
            "Emergency Medical Technician",
            "Medical Assistant",
            "Phlebotomist"
        ],
        strengths: "Strong interpersonal skills, ability to work under pressure, excellent communication, empathy, quick decision-making",
        nextSteps: "Consider pursuing relevant certifications, gaining clinical experience, and networking with healthcare professionals in your area of interest."
    },
    diagnostic: {
        name: "Diagnostic Services",
        icon: "fas fa-microscope",
        description: "Laboratory, imaging, and diagnostic testing professionals who analyze samples and interpret results.",
        careers: [
            "Medical Laboratory Scientist",
            "Radiologic Technologist",
            "Sonographer",
            "Nuclear Medicine Technologist",
            "Cytotechnologist",
            "Histotechnologist",
            "Medical Technologist",
            "Phlebotomist",
            "EKG Technician",
            "Pathology Assistant"
        ],
        strengths: "Attention to detail, analytical thinking, technical proficiency, accuracy, methodical approach",
        nextSteps: "Focus on obtaining relevant certifications, gaining laboratory experience, and staying updated with the latest diagnostic technologies."
    },
    administrative: {
        name: "Healthcare Administration",
        icon: "fas fa-clipboard-list",
        description: "Management, policy, and healthcare system leadership roles that oversee operations and strategy.",
        careers: [
            "Healthcare Administrator",
            "Health Information Manager",
            "Medical Practice Manager",
            "Healthcare Consultant",
            "Health Policy Analyst",
            "Quality Improvement Manager",
            "Patient Care Coordinator",
            "Medical Office Manager",
            "Healthcare Project Manager",
            "Compliance Officer"
        ],
        strengths: "Leadership abilities, organizational skills, strategic thinking, policy understanding, business acumen",
        nextSteps: "Consider pursuing a Master's in Healthcare Administration (MHA) or related degree, gaining management experience, and developing leadership skills."
    },
    research: {
        name: "Medical Research",
        icon: "fas fa-flask",
        description: "Research, development, and innovation in healthcare, focusing on advancing medical knowledge and treatments.",
        careers: [
            "Medical Researcher",
            "Clinical Research Coordinator",
            "Biomedical Scientist",
            "Epidemiologist",
            "Biostatistician",
            "Medical Writer",
            "Research Nurse",
            "Laboratory Manager",
            "Data Analyst",
            "Research Assistant"
        ],
        strengths: "Analytical thinking, attention to detail, curiosity, persistence, strong research methodology",
        nextSteps: "Consider pursuing advanced degrees in research-related fields, gaining research experience, and building a strong academic network."
    },
    support: {
        name: "Support Services",
        icon: "fas fa-hands-helping",
        description: "Patient support, therapy, and healthcare assistance roles that provide essential care and support services.",
        careers: [
            "Social Worker",
            "Mental Health Counselor",
            "Dietitian",
            "Speech Therapist",
            "Child Life Specialist",
            "Patient Advocate",
            "Health Educator",
            "Case Manager",
            "Rehabilitation Specialist",
            "Home Health Aide"
        ],
        strengths: "Empathy, patience, strong communication, problem-solving, cultural sensitivity",
        nextSteps: "Focus on obtaining relevant licenses and certifications, gaining experience in your chosen specialty, and developing strong interpersonal skills."
    },
    technology: {
        name: "Health Technology",
        icon: "fas fa-laptop-medical",
        description: "IT, informatics, and technology-driven healthcare solutions that improve patient care through innovation.",
        careers: [
            "Health Informatics Specialist",
            "Medical Software Developer",
            "Healthcare Data Analyst",
            "Clinical Systems Analyst",
            "Telemedicine Coordinator",
            "Medical Device Specialist",
            "Healthcare IT Manager",
            "Digital Health Consultant",
            "Medical App Developer",
            "Healthcare Cybersecurity Specialist"
        ],
        strengths: "Technical proficiency, problem-solving, innovation, adaptability, understanding of healthcare workflows",
        nextSteps: "Consider pursuing certifications in health informatics, gaining technical skills, and staying updated with emerging healthcare technologies."
    }
};

// Survey functionality
let currentQuestion = 0;
let answers = [];

function initializeSurvey() {
    showQuestion(currentQuestion);
    updateProgress();
}

function showQuestion(questionIndex) {
    const question = surveyQuestions[questionIndex];
    const surveyForm = document.getElementById('survey-form');
    
    surveyForm.innerHTML = `
        <div class="question">
            <h3>${question.question}</h3>
            <div class="options">
                ${question.options.map((option, index) => `
                    <label class="option ${answers[questionIndex] === index ? 'selected' : ''}">
                        <input type="radio" name="question${questionIndex}" value="${index}" 
                               ${answers[questionIndex] === index ? 'checked' : ''}>
                        <span>${option.text}</span>
                    </label>
                `).join('')}
            </div>
        </div>
    `;

    // Add event listeners to options
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            const radio = this.querySelector('input[type="radio"]');
            radio.checked = true;
            answers[questionIndex] = parseInt(radio.value);
        });
    });

    // Update navigation buttons
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');

    prevBtn.disabled = questionIndex === 0;
    nextBtn.style.display = questionIndex === surveyQuestions.length - 1 ? 'none' : 'inline-block';
    submitBtn.style.display = questionIndex === surveyQuestions.length - 1 ? 'inline-block' : 'none';
}

function updateProgress() {
    const progressFill = document.querySelector('.progress-fill');
    const currentQuestionSpan = document.getElementById('current-question');
    const progress = ((currentQuestion + 1) / surveyQuestions.length) * 100;
    
    progressFill.style.width = `${progress}%`;
    currentQuestionSpan.textContent = currentQuestion + 1;
}

function nextQuestion() {
    if (answers[currentQuestion] !== undefined) {
        currentQuestion++;
        if (currentQuestion < surveyQuestions.length) {
            showQuestion(currentQuestion);
            updateProgress();
        }
    } else {
        alert('Please select an answer before proceeding.');
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
        updateProgress();
    }
}

function calculateResults() {
    const scores = {
        clinical: 0,
        diagnostic: 0,
        administrative: 0,
        research: 0,
        support: 0,
        technology: 0
    };

    answers.forEach((answer, index) => {
        if (answer !== undefined) {
            const question = surveyQuestions[index];
            const selectedOption = question.options[answer];
            scores[selectedOption.category] += selectedOption.weight;
        }
    });

    // Convert scores to percentages
    const totalQuestions = surveyQuestions.length;
    const percentages = {};
    Object.keys(scores).forEach(category => {
        percentages[category] = (scores[category] / (totalQuestions * 3)) * 100;
    });

    return percentages;
}

function displayResults() {
    const percentages = calculateResults();
    
    // Sort categories by score
    const sortedCategories = Object.entries(percentages)
        .sort(([,a], [,b]) => b - a);

    const primaryCategory = sortedCategories[0][0];
    const secondaryCategories = sortedCategories.slice(1, 4);

    // Display primary result
    const primaryCareer = document.getElementById('primary-career');
    const category = careerCategories[primaryCategory];
    primaryCareer.innerHTML = `
        <i class="${category.icon}"></i>
        <h4>${category.name}</h4>
        <p>${Math.round(percentages[primaryCategory])}% Match</p>
    `;

    // Display secondary results
    const secondaryCareers = document.getElementById('secondary-careers');
    secondaryCareers.innerHTML = secondaryCategories.map(([categoryKey, percentage]) => {
        const category = careerCategories[categoryKey];
        return `
            <div class="secondary-career">
                <i class="${category.icon}"></i>
                <h4>${category.name}</h4>
                <p>${Math.round(percentage)}% Match</p>
            </div>
        `;
    }).join('');

    // Display detailed analysis
    const analysisContent = document.getElementById('analysis-content');
    analysisContent.innerHTML = `
        <p><strong>Primary Match:</strong> ${careerCategories[primaryCategory].description}</p>
        <p><strong>Your Strengths:</strong> ${careerCategories[primaryCategory].strengths}</p>
        <h4>Recommended Career Paths:</h4>
        <ul>
            ${careerCategories[primaryCategory].careers.map(career => `<li>${career}</li>`).join('')}
        </ul>
    `;

    // Display next steps
    const nextStepsContent = document.getElementById('next-steps-content');
    nextStepsContent.innerHTML = `
        <p>${careerCategories[primaryCategory].nextSteps}</p>
        <h4>Additional Recommendations:</h4>
        <ul>
            <li>Research specific roles within your matched category</li>
            <li>Connect with professionals in your area of interest</li>
            <li>Consider relevant certifications or advanced degrees</li>
            <li>Gain practical experience through internships or volunteer work</li>
            <li>Stay updated with industry trends and developments</li>
        </ul>
    `;

    // Show results section
    document.getElementById('survey').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    
    // Scroll to results
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}

function retakeSurvey() {
    currentQuestion = 0;
    answers = [];
    document.getElementById('results').style.display = 'none';
    document.getElementById('survey').style.display = 'block';
    initializeSurvey();
    document.getElementById('survey').scrollIntoView({ behavior: 'smooth' });
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    initializeSurvey();
    
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    document.getElementById('prev-btn').addEventListener('click', prevQuestion);
    document.getElementById('submit-btn').addEventListener('click', displayResults);
    document.getElementById('retake-survey').addEventListener('click', retakeSurvey);

    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.backdropFilter = 'none';
    }
}); 