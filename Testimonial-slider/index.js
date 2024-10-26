const testimonials = [
  {
    name: "Lorem ipsum1",
    photoUrl:
      "./images/img1.jpg",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci officiis aliquid illum similique magni. Nihil quos repellendus sed sequi qui?",
  },
  {
    name: "Lorem ipsum2",
    photoUrl:
      "./images/img2.jpg",
    text: "Lorem ipsum dolor,aaaaaaaaaaa sit amet consectetur adipisicing elit. Adipisci officiis aliquid illum similique magni. Nihil quos repellendus sed sequi qui aaaaaaaaaaaa?",
  },
  {
    name: "Lorem ipsum3",
    photoUrl:
      "./images/img3.jpg",
    text: "Lorem ipsum dolor,bbbbbbbbbbbb sit amet consectetur adipisicing elit. Adipisci officiis aliquid illum similique magni. Nihil quos repellendus sed sequi qui bbbbbbbbbbbb?",
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".user-name");

idx = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[idx];
  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;
  idx++;
  if (idx === testimonials.length) {
    idx = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 2000);
}
