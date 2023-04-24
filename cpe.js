const firstWords = [
  'Automated', 
  'Intelligent', 
  'Secure', 
  'Efficient', 
  'Smart', 
  'Real-time', 
  'High-performance',
  'Scalable'
];

const secondWords = [
  'Data Analytics', 
  'Machine Learning', 
  'Computer Vision', 
  'Cybersecurity', 
  'Artificial Intelligence', 
  'Cloud Computing',
  'Internet of Things',
  'Natural Language Processing'
];

const thirdWords = [
  'Using Blockchain Technology', 
  'In a Distributed Environment', 
  'For Predictive Maintenance', 
  'For Anomaly Detection', 
  'With Deep Learning', 
  'In Real-time Systems',
  'Using Edge Computing',
  'For Privacy Preserving'
];

const fourthWords = [
  'Arduino', 
  'Embedded System', 
  'Microcontroller', 
  'Raspberry Pi', 
  'Single-board Computer', 
  'Control System'
];

const farmerWords = [
  'Agricultural Monitoring',
  'Crop Yield Prediction',
  'Soil Quality Analysis',
  'Irrigation Control',
  'Livestock Monitoring'
];

const generateBtn = document.getElementById('generate-btn');
const title = document.getElementById('title');

function generateTitle() {
  const firstWord = firstWords[Math.floor(Math.random() * firstWords.length)];
  const secondWord = secondWords[Math.floor(Math.random() * secondWords.length)];
  const thirdWord = thirdWords[Math.floor(Math.random() * thirdWords.length)];
  const fourthWord = fourthWords[Math.floor(Math.random() * fourthWords.length)];
  const farmerWord = farmerWords[Math.floor(Math.random() * farmerWords.length)];

  title.innerHTML = `${firstWord} ${farmerWord} with ${fourthWord} and ${secondWord} ${thirdWord}`;
}

generateBtn.addEventListener('click', generateTitle);
