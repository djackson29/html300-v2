// Create HTML code from JSON data
const profilesJSON = '[{"name": "Paolo Maldini","jobTitle": "Front End Developer","company": "Web Weavers","experience": "3 years","school": "University of Washington","major": "Marketing","email": "paolo@example.com","linkedInUrl": "paolo.linkedinprofile.com","codeLanguages":["HTML", " CSS", " JavaScript", " Node", " Express"]},{"name": "Barbara Bonansea","jobTitle": "Software Engineer","company": "Excellence in the Cloud","experience": "12 years","school": "University of Southern California","major": "Computer Science","email":"barbara@example.com","linkedInUrl": "barbara.linkedinprofile.com","codeLanguages":["HTML", " JavaScript", " C", " Go"]},{"name": "Javier Hernandez","jobTitle": "User Experience Engineer","company": "Websites and More","experience": "5 years","school": "Seattle University","major": "Performing Arts","email": "javier@example.com","linkedInUrl": "javier.linkedinprofile.com","codeLanguages": ["HTML", " CSS"]},{"name": "Maribel Dominguez","jobTitle": "Front End Engineer","company": "Bits and Bytes","experience": "6 years","school": "University of Washington","major": "Mechanical Engineering","email": "maribel@example.com","linkedInUrl": "maribel.linkedinprofile.com","codeLanguages": ["HTML", " CSS", " JavaScript"," React", " Vue", " Redux"]}]'

// parse profilesJSON
const profiles = JSON.parse(profilesJSON)
console.log(profiles)

const container = document.querySelector('.template-hook')

// loop through array and populate index.html page with profilesJSON data
profiles.forEach(function(el){
  
  let card = document.createElement('section')

  // add class name 'card' to section
  card.className += 'card'

  // html template
  card.innerHTML = `
    <article class="card__name">
      <img class="dog-img" src="../img/headshot.jpg" alt="">
      <h1>${el.name}</h1>
      <p class="card__job-title"><em>${el.jobTitle}</em></p>
    </article>
    <article class="card__details">
      <p><strong>Company:</strong> ${el.company}</p>
      <p><strong>Experience:</strong> ${el.experience}</p>
      <p><strong>School:</strong> ${el.school}</p>
      <p><strong>Major:</strong> ${el.major}</p>
      <p><strong>Code Languages:</strong> ${el.codeLanguages}</p>
      <p><strong>Email:</strong> <a href="mailto:${el.email}">${el.email}</a></p>
      <p><a href="#"><img class="linkedin-img" src="../img/linkedin.svg" alt="LinkedIn logo"></a> <a href="#">${el.linkedInUrl}</a></p>
    </article>
  `
  container.append(card)
})
