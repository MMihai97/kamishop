document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById("slider");
    const content = document.getElementById("content");
    const arrowsLeft = document.querySelector(".arrows-left");
    const arrowsRight = document.querySelector(".arrows-right");
    let isDragging = false;
    let startX;
    let sliderLeft = 0;

    const originalContent = content.innerHTML;
    const newContent = `
        <h1>ShopOnline</h1>
        <p>Acesta este un alt conținut afișat când tragi slider-ul în dreapta.</p>
    `;

    slider.addEventListener("mousedown", startDragging);
    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", stopDragging);

    // Suport pentru dispozitive tactile
    slider.addEventListener("touchstart", startDragging);
    document.addEventListener("touchmove", drag);
    document.addEventListener("touchend", stopDragging);

    function startDragging(e) {
        isDragging = true;
        startX = (e.type === "touchstart") ? e.touches[0].clientX : e.clientX;
    }

    function drag(e) {
        if (!isDragging) return;

        const clientX = (e.type === "touchmove") ? e.touches[0].clientX : e.clientX;
        const sliderContainer = slider.parentElement;
        const maxLeft = sliderContainer.offsetWidth - slider.offsetWidth;
        let newLeft = sliderLeft + (clientX - startX);

        // Limitează mișcarea slider-ului
        if (newLeft < 0) newLeft = 0;
        if (newLeft > maxLeft) newLeft = maxLeft;

        slider.style.left = newLeft + "px";

        // Schimbă conținutul și săgețile în funcție de poziție
        if (newLeft > maxLeft / 2) {
            content.innerHTML = newContent;
            arrowsLeft.style.visibility = "visible"; // Arată săgețile spre stânga
            arrowsRight.style.visibility = "hidden"; // Ascunde săgețile spre dreapta
        } else {
            content.innerHTML = originalContent;
            arrowsLeft.style.visibility = "hidden"; // Ascunde săgețile spre stânga
            arrowsRight.style.visibility = "visible"; // Arată săgețile spre dreapta
        }
    }

    function stopDragging() {
        if (isDragging) {
            isDragging = false;
            sliderLeft = parseInt(slider.style.left) || 0;
        }
    }
});