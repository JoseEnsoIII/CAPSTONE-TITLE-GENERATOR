const firstWords = [
    'Efficient',
    'Robust',
    'Scalable',
    'Intelligent',
    'Secure',
    'Innovative',
    'Advanced',
    'Emerging'
  ];
  
  const secondWords = [
    'Algorithms',
    'Data Structures',
    'Machine Learning',
    'Computer Vision',
    'Natural Language Processing',
    'Parallel Computing',
    'Distributed Systems',
    'Database Systems'
  ];
  
  const thirdWords = [
    'For Cloud Computing',
    'For Edge Computing',
    'With Big Data',
    'With Deep Learning',
    'For Security and Privacy',
    'For Internet of Things',
    'For Cybersecurity',
    'For Social Networks'
  ];
  
  const descriptions = [
    'This system uses the latest algorithms to efficiently process and analyze large datasets in the cloud.',
    'Our approach to data structures allows for fast and scalable access to information in distributed systems.',
    'By utilizing machine learning techniques, this system is able to automatically recognize and classify objects in images and videos.',
    'Our natural language processing system is capable of understanding and generating human-like language.',
    'This system is designed to handle parallel processing of large datasets, enabling efficient computation in high-performance environments.',
    'Our distributed systems approach allows for fault-tolerance and scalability, making it ideal for large-scale applications.',
    'By using advanced database techniques, this system provides fast and secure access to data.',
    'This cybersecurity system is designed to protect against a wide range of threats, including malware, phishing, and social engineering attacks.'
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
  