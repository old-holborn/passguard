const slider = document.getElementById("slider");
        const overlay = document.getElementById("overlay");
        const container = document.querySelector(".slider-containter");

        let isDragging = false;

        slider.addEventListener("mousedown", () => isDragging = true);
        document.addEventListener("mouseup", () => isDragging = false);
        document.addEventListener("mousemove", (e) => {
            if (!isDragging) return;
            let rect = container.getBoundingClientRect();
            let offsetX = e.clientX - rect.left;
            let percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
            overlay.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
            slider.style.left = percentage + "%";
        });