const words1 = ['Advanced', 'Cutting-Edge', 'Innovative', 'Revolutionary', 'Groundbreaking'];
const words2 = ['Technology', 'Engineering', 'Design', 'Development', 'Research'];
const words3 = ['Project', 'Solution', 'System', 'Application', 'Platform'];
const words4 = ['POS', 'CRM', 'CMS', 'ERP', 'CRUD'];

function generateTitle(systemType) {
  const random1 = Math.floor(Math.random() * words1.length);
  const random2 = Math.floor(Math.random() * words2.length);
  const random3 = Math.floor(Math.random() * words3.length);
  const random4 = Math.floor(Math.random() * words4.length);
  const title = words1[random1] + ' ' + words2[random2] + ' ' + words3[random3] + ' ' + systemType + ' ' + words4[random4];
  document.getElementById('title').innerHTML = title;
}

document.getElementById('generate').addEventListener('click', function() {
  generateTitle('POS'); // replace 'POS' with the desired system type
});
