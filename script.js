const faqs = document.querySelectorAll(".faq__card");

faqs.forEach((faq) =>
    faq.addEventListener("click", () => {
        const buttonImg = faq.querySelector("img");

        faq.classList.toggle("active");

        if (buttonImg.className == "closed") {
            buttonImg.src = "./assets/images/icon-minus.svg";
            buttonImg.className = "open";
        } else {
            buttonImg.src = "./assets/images/icon-plus.svg";
            buttonImg.className = "closed";
        }
    })
);
