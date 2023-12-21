document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");

    // Sample image URLs
    const imageUrls = [
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        // Add more image URLs as needed
    ];

    // Dynamically create and append image elements to the gallery
    imageUrls.forEach((url) => {
        const img = document.createElement("img");
        img.src = url;
        img.classList.add("img-fluid", "m-2");
        gallery.appendChild(img);
    });
});
