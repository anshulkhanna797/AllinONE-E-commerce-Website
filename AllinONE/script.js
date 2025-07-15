

// Smooth scroll for anchor links
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

        // Update URL hash without jump
        history.pushState(null, null, "#" + targetId);
      }
    });
  });
});

// Close mobile menu when link is clicked
document.querySelectorAll(".menu-items a").forEach(function (link) {
  link.addEventListener("click", function () {
    const checkbox = document.getElementById("checkbox");
    if (checkbox) {
      checkbox.checked = false;
    }
  });
});
