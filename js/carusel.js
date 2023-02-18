const testimonials = [
    { 
    //   job: "CEO, Fashworks",
    //   image: "profile-image-1.png",
      testimonial:
        "I absolutely love these assets!! They are beautiful, well done!",
        name: "Victor Hugo",
    },
    {
      name: "Jason Ferguson",
    //   job: "Developer, TechCrew",
    //   image: "profile-image-2.png",
      testimonial:
        "Huge time saver! Amazing value! Quality Models!",
    },
    {
      name: "Juggie",
    //   job: "UI Designer, Affinity Agency",
    //   image: "profile-image-3.png",
      testimonial:
        "This collection is very nice & high quality. I love them!",
    },
    {
      name: "Punker3d",
    //   job: "CEO,Zeal Wheels",
    //   image: "profile-image-4.png",
      testimonial:
        "Great set of assets! Friendly and helpful Creator makes it even better!",
    },
  ];
  
  //Current Slide
  let i = 0;
  //Total Slides
  let j = testimonials.length;
  
  let testimonialContainer = document.getElementById("testimonial-container");
  let nextBtn = document.getElementById("next");
  let prevBtn = document.getElementById("prev");
  
  nextBtn.addEventListener("click", () => {
    i = (j + i + 1) % j;
    displayTestimonial();
  });
  prevBtn.addEventListener("click", () => {
    i = (j + i - 1) % j;
    displayTestimonial();
  });
  
  let displayTestimonial = () => {
    testimonialContainer.innerHTML = `
        <h3>${testimonials[i].name}</h3>
        <p>${testimonials[i].testimonial}</p>
    `;
    // <img src=${testimonials[i].image}>
    // <h6>${testimonials[i].job}</h6>
  };
  window.onload = displayTestimonial;


  