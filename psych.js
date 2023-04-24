const topics = [
    "Language Acquisition",
    "Media Violence and Children",
    "Learning Disabilities",
    "Gender Roles",
    "Child Abuse",
    "Prenatal Development",
    "Parenting Styles",
    "Aspects of the Aging Process"
  ];
  
  function generateTitle() {
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    const title = `Investigating the Relationship between ${randomTopic} and Human Development`;
    document.getElementById('title').innerHTML = title;
  }
  
  generateTitle();
  document.getElementById('generate-btn').addEventListener('click', generateTitle);
  