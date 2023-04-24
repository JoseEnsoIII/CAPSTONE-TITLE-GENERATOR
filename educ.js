const firstWords = [
    'Innovative',
    'Effective',
    'Modern',
    'Engaging',
    'Interactive',
    'Dynamic',
    'Adaptive',
    'Transformative'
  ];
  
  const secondWords = [
    'Teaching',
    'Learning',
    'Assessment',
    'Curriculum',
    'Pedagogy',
    'Instruction',
    'E-Learning',
    'Blended Learning'
  ];
  
  const thirdWords = [
    'For Student Engagement',
    'For Personalized Learning',
    'For Effective Assessment',
    'For Blended Learning',
    'For Digital Literacy',
    'For Multimodal Learning',
    'For Inclusive Education',
    'For Social Emotional Learning'
  ];
  
  const descriptions = [
    'This system provides an innovative approach to teaching and learning that engages students and enhances learning outcomes.',
    'Our curriculum design is effective and modern, utilizing the latest research in education to improve student achievement.',
    'By utilizing adaptive learning techniques, this system is able to personalize instruction and improve student outcomes.',
    'Our assessment approach is dynamic and engaging, providing meaningful feedback to support student learning and growth.',
    'This system is designed for blended learning environments, leveraging the benefits of both online and in-person instruction.',
    'Our pedagogical approach is interactive and multimodal, promoting deeper learning and understanding among students.',
    'By using technology to promote inclusive education, this system creates equitable opportunities for all learners.',
    'This system promotes social and emotional learning, supporting the holistic development of students and improving overall well-being.'
  ];
  
  const generateBtn = document.getElementById('generate-btn');
  const title = document.getElementById('title');
  const description = document.getElementById('description');
  
  function generateTitle() {
    const firstWord = firstWords[Math.floor(Math.random() * firstWords.length)];
    const secondWord = secondWords[Math.floor(Math.random() * secondWords.length)];
    const thirdWord = thirdWords[Math.floor(Math.random() * thirdWords.length)];
    const randomDescription = descriptions[Math.floor(Math.random() * descriptions.length)];
  
    title.textContent = `${firstWord} ${secondWord} ${thirdWord}`;
    description.textContent = randomDescription;
  }
  
  generateBtn.addEventListener('click', generateTitle);
  