// 로딩 스피너
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.opacity = 0;
    setTimeout(() => (loader.style.display = "none"), 500);
  }
});

// 모바일 메뉴 토글
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  if (menu) menu.classList.toggle("open");
}
window.toggleMenu = toggleMenu; // onclick에서 접근 가능하게 전역 노출

// 맨 위로
const topBtn = document.getElementById("topBtn");
if (topBtn) {
  window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });
  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// index 검색 필터 (index에만 input 존재)
function filterPosts() {
  const inputEl = document.getElementById("searchInput");
  const posts = document.querySelectorAll(".post");
  if (!inputEl || !posts.length) return;

  const keyword = inputEl.value.toLowerCase();
  posts.forEach((post) => {
    const text = post.textContent.toLowerCase();
    post.style.display = text.includes(keyword) ? "flex" : "none";
  });
}
window.filterPosts = filterPosts;
