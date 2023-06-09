addEventListener("load", () => {
  const textArray = "Я хочу поведать вам историю своих картин...",
        typedTextSpan = document.querySelector(".typing-container__typed-text"),
        cursorSpan = document.querySelector(".typing-cursor"),
        typingDelay = 60;

  let charIndex = 0;
  
  function type() {
    if (charIndex < textArray.length) {
      if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent += textArray.charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } 
    else {
      cursorSpan.classList.remove("typing");
    }
  }
  let started = false;
  addEventListener("scroll", () => {
    if(scrollY > 58 && !started) {
      type();
      started = true;
    }
  });
})