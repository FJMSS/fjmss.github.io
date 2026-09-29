/* =========================================================
   FJMSS WEBSITE - LATEST POST FIRST SYSTEM
========================================================= */

// DOM সম্পূর্ণ লোড হওয়ার পর JS রান করবে
document.addEventListener("DOMContentLoaded", function () {

    /* =========================================================
       01. ACTIVITIES DATA
    ========================================================= */
    const activityPosts = [
        {
            icon: "📢",
            number: "কার্যক্রম ০৪",
            title: "সচেতনতা কার্যক্রম",
            description: "সামাজিক ও মানবিক বিভিন্ন বিষয়ে মানুষের মধ্যে সচেতনতা তৈরির জন্য প্রচার ও সচেতনতামূলক কার্যক্রম পরিচালনা করা।",
            points: [
                "✓ স্বাস্থ্য সচেতনতা",
                "✓ সামাজিক সচেতনতা",
                "✓ মানবিক মূল্যবোধ ও সহযোগিতার প্রচার"
            ],
            link: "activities/awareness.html"
        },
        {
            icon: "👥",
            number: "কার্যক্রম ০৩",
            title: "স্বেচ্ছাসেবক কার্যক্রম",
            description: "যুব সমাজকে সংগঠিত করে মানবিক ও সামাজিক কাজে অংশগ্রহণের সুযোগ তৈরি করা।",
            points: [
                "✓ স্বেচ্ছাসেবক নিবন্ধন",
                "✓ দলগতভাবে মানবিক কাজে অংশগ্রহণ",
                "✓ স্বেচ্ছাসেবকদের দক্ষতা ও দায়িত্ববোধ বৃদ্ধি"
            ],
            link: "activities/volunteer.html"
        },
        {
            icon: "🤲",
            number: "কার্যক্রম ০২",
            title: "মানবিক সহায়তা",
            description: "জরুরি প্রয়োজনে অসহায় ও সুবিধাবঞ্চিত মানুষের পাশে দাঁড়ানোর জন্য বিভিন্ন মানবিক সহায়তা কার্যক্রম পরিচালনা করা।",
            points: [
                "✓ প্রয়োজনভিত্তিক সহায়তা",
                "✓ খাদ্য ও প্রয়োজনীয় সামগ্রী বিতরণ",
                "✓ দুর্যোগকালীন সহযোগিতার চেষ্টা"
            ],
            link: "activities/humanitarian-support.html"
        },
        {
            icon: "🏥",
            number: "কার্যক্রম ০১",
            title: "অসুস্থ ও অসহায় মানুষের পাশে",
            description: "অসুস্থ ও অসহায় মানুষের প্রয়োজন অনুযায়ী সামর্থ্য ও সংগঠনের সক্ষমতার মধ্যে সহযোগিতা করার চেষ্টা করা।",
            points: [
                "✓ জরুরি মানবিক সহায়তা",
                "✓ চিকিৎসা সংক্রান্ত সহযোগিতার চেষ্টা",
                "✓ প্রয়োজন অনুযায়ী স্বেচ্ছাসেবী সহায়তা"
            ],
            link: "activities/sick-support.html"
        }
    ];


    /* =========================================================
       02. NEWS DATA
    ========================================================= */
    const newsPosts = [
        {
            category: "📢 নোটিশ",
            title: "অসুস্থ ও অসহায় মানুষের পাশে দাঁড়ানোর উদ্যোগ",
            date: "২০২৬",
            description: "অসুস্থ ও অসহায় মানুষের পাশে দাঁড়ানোর লক্ষ্যে আমাদের মানবিক কার্যক্রম।",
            link: "news-post/news-post-01.html"
        },
        {
            category: "📰 সংবাদ",
            title: "স্বেচ্ছাসেবক নিবন্ধন কার্যক্রম",
            date: "২০২৬",
            description: "সংগঠনের মানবিক কার্যক্রমে যুক্ত হতে আগ্রহী স্বেচ্ছাসেবকদের জন্য নিবন্ধন কার্যক্রম।",
            link: "news-post/news-post-02.html"
        },
        {
            category: "📢 ঘোষণা",
            title: "সংগঠনের নতুন কার্যক্রমের পরিকল্পনা",
            date: "২০২৬",
            description: "আগামী দিনের বিভিন্ন মানবিক ও সামাজিক কার্যক্রম নিয়ে আমাদের পরিকল্পনা।",
            link: "news-post/news-post-03.html"
        }
    ];


    /* =========================================================
       03. GALLERY DATA
    ========================================================= */
    const galleryPosts = [
        {
            image: "images/activity-6.jpg",
            title: "মানবতার সেবায় আমরা",
            category: "মানবসেবা",
            link: "gallery-post/gallery-post-06.html"
        },
        {
            image: "images/activity-5.jpg",
            title: "সংগঠনের কার্যক্রম",
            category: "সাংগঠনিক কার্যক্রম",
            link: "gallery-post/gallery-post-05.html"
        },
        {
            image: "images/activity-4.jpg",
            title: "সচেতনতা কার্যক্রম",
            category: "সচেতনতামূলক কার্যক্রম",
            link: "gallery-post/gallery-post-04.html"
        },
        {
            image: "images/activity-3.jpg",
            title: "স্বেচ্ছাসেবক কার্যক্রম",
            category: "স্বেচ্ছাসেবক কার্যক্রম",
            link: "gallery-post/gallery-post-03.html"
        },
        {
            image: "images/activity-2.jpg",
            title: "মানবিক সহায়তা কার্যক্রম",
            category: "মানবিক কার্যক্রম",
            link: "gallery-post/gallery-post-02.html"
        },
        {
            image: "images/activity-1.jpg",
            title: "অসুস্থ মানুষের পাশে দাঁড়ানো",
            category: "মানবিক কার্যক্রম",
            link: "gallery-post/gallery-post-01.html"
        }
    ];


    /* =========================================================
       04. REPORTS DATA
    ========================================================= */
    const reportPosts = [
        {
            category: "📋 স্বেচ্ছাসেবক প্রতিবেদন",
            title: "স্বেচ্ছাসেবক কার্যক্রম",
            date: "২০২৬",
            description: "স্বেচ্ছাসেবকদের অংশগ্রহণ ও বিভিন্ন কার্যক্রমের সংক্ষিপ্ত প্রতিবেদন।",
            link: "reports-post/report-03.html"
        },
        {
            category: "📋 কার্যক্রম প্রতিবেদন",
            title: "মানবিক সহায়তা কার্যক্রম",
            date: "২০২৬",
            description: "সংগঠনের মানবিক সহায়তা কার্যক্রমের বিস্তারিত তথ্য ও কার্যক্রমের বিবরণ।",
            link: "reports-post/report-02.html"
        },
        {
            category: "📋 কার্যক্রম প্রতিবেদন",
            title: "অসুস্থ ও অসহায় মানুষের পাশে দাঁড়ানো",
            date: "২০২৬",
            description: "অসুস্থ ও অসহায় মানুষের পাশে দাঁড়ানোর মানবিক কার্যক্রমের বিস্তারিত প্রতিবেদন।",
            link: "reports-post/report-01.html"
        }
    ];


    /* =========================================================
       05. MOBILE MENU
    ========================================================= */
    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", function () {
            mainNav.classList.toggle("active");
        });
    }

    const navLinks = document.querySelectorAll("#mainNav a");
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (mainNav) {
                mainNav.classList.remove("active");
            }
        });
    });


    /* =========================================================
       06. HOME GALLERY
    ========================================================= */
    const homeGalleryTrack = document.getElementById("homeGalleryTrack");
    if (homeGalleryTrack) {
        galleryPosts.forEach(function (post) {
            const card = document.createElement("a");
            card.href = post.link;
            card.className = "home-gallery-card";
            card.innerHTML = `
                <img src="${post.image}" alt="${post.title}">
                <div class="home-gallery-title">${post.title}</div>
            `;
            homeGalleryTrack.appendChild(card);
        });
    }


    /* =========================================================
       07. HOME GALLERY SLIDER
    ========================================================= */
    const galleryPrev = document.getElementById("galleryPrev");
    const galleryNext = document.getElementById("galleryNext");

    if (homeGalleryTrack && galleryPrev && galleryNext) {
        galleryNext.addEventListener("click", function () {
            homeGalleryTrack.scrollBy({ left: 350, behavior: "smooth" });
        });
        galleryPrev.addEventListener("click", function () {
            homeGalleryTrack.scrollBy({ left: -350, behavior: "smooth" });
        });
    }


    /* =========================================================
       08. NEWS PAGE + HOME NEWS
    ========================================================= */
    const homeNewsGrid = document.getElementById("homeNewsGrid");
    const newsPageGrid = document.getElementById("newsPageGrid");

    function createNewsCard(post) {
        const card = document.createElement("a");
        card.href = post.link;
        card.className = "news-post-card";
        card.innerHTML = `
            <div class="news-post-content">
                <span class="news-category">${post.category}</span>
                <h3>${post.title}</h3>
                <div class="news-date">📅 ${post.date}</div>
                <p>${post.description}</p>
                <strong>বিস্তারিত পড়ুন →</strong>
            </div>
        `;
        return card;
    }

    if (homeNewsGrid) {
        newsPosts.slice(0, 3).forEach(post => homeNewsGrid.appendChild(createNewsCard(post)));
    }

    if (newsPageGrid) {
        newsPosts.forEach(post => newsPageGrid.appendChild(createNewsCard(post)));
    }


    /* =========================================================
       09. REPORTS PAGE + HOME REPORTS
    ========================================================= */
    const homeReportsGrid = document.getElementById("homeReportsGrid");
    const reportsPageGrid = document.getElementById("reportsPageGrid");

    function createReportCard(post) {
        const card = document.createElement("a");
        card.href = post.link;
        card.className = "report-post-card";
        card.innerHTML = `
            <div class="report-post-content">
                <span class="report-category">${post.category}</span>
                <h3>${post.title}</h3>
                <div class="report-date">📅 ${post.date}</div>
                <p>${post.description}</p>
                <strong>প্রতিবেদন দেখুন →</strong>
            </div>
        `;
        return card;
    }

    if (homeReportsGrid) {
        reportPosts.slice(0, 3).forEach(post => homeReportsGrid.appendChild(createReportCard(post)));
    }

    if (reportsPageGrid) {
        reportPosts.forEach(post => reportsPageGrid.appendChild(createReportCard(post)));
    }


    /* =========================================================
       10. ACTIVITIES PAGE
    ========================================================= */
    const activitiesPageGrid = document.getElementById("activitiesPageGrid");
    if (activitiesPageGrid) {
        activityPosts.forEach(function (post) {
            const card = document.createElement("a");
            card.href = post.link;
            card.className = "activity-detail-card";
            card.innerHTML = `
                <div class="activity-detail-icon">${post.icon}</div>
                <div class="activity-detail-content">
                    <span class="activity-number">${post.number}</span>
                    <h3>${post.title}</h3>
                    <p>${post.description}</p>
                    <ul>
                        ${post.points.map(point => `<li>${point}</li>`).join("")}
                    </ul>
                    <strong class="activity-read-more">বিস্তারিত দেখুন →</strong>
                </div>
            `;
            activitiesPageGrid.appendChild(card);
        });
    }


    /* =========================================================
       11. GALLERY PAGE
    ========================================================= */
    const galleryPageGrid = document.getElementById("galleryPageGrid");
    if (galleryPageGrid) {
        galleryPosts.forEach(function (post) {
            const card = document.createElement("a");
            card.href = post.link;
            card.className = "gallery-page-card";
            card.innerHTML = `
                <img src="${post.image}" alt="${post.title}">
                <div class="gallery-page-content">
                    <span>${post.category}</span>
                    <h3>${post.title}</h3>
                    <strong>বিস্তারিত দেখুন →</strong>
                </div>
            `;
            galleryPageGrid.appendChild(card);
        });
    }


    /* =========================================================
       12. COMMITTEE SLIDERS
    ========================================================= */
    const committeeArrows = document.querySelectorAll(".committee-arrow");
    committeeArrows.forEach(function (button) {
        button.addEventListener("click", function () {
            const targetId = button.getAttribute("data-target");
            const slider = document.getElementById(targetId);
            if (!slider) return;

            const direction = button.classList.contains("committee-next") ? 1 : -1;
            slider.scrollBy({ left: direction * 320, behavior: "smooth" });
        });
    });

});

