// 网站数据存储
let websitesData = {
  movies: [],
  music: [],
  books: [],
  tech: [],
  ai: [],
}

// 预设网站数据
const defaultWebsites = {
  movies: [
    {
      name: "Netflix",
      url: "https://www.netflix.com",
      description: "全球领先的流媒体平台",
      tags: ["高清", "在线", "付费"],
      image: "",
    },
    {
      name: "爱奇艺",
      url: "https://www.iqiyi.com",
      description: "中国领先的在线视频平台",
      tags: ["高清", "在线", "免费"],
      image: "",
    },
    {
      name: "腾讯视频",
      url: "https://v.qq.com",
      description: "腾讯旗下视频平台",
      tags: ["高清", "在线", "免费"],
      image: "",
    },
    {
      name: "优酷",
      url: "https://www.youku.com",
      description: "阿里巴巴旗下视频平台",
      tags: ["高清", "在线", "免费"],
      image: "",
    },
    {
      name: "哔哩哔哩",
      url: "https://www.bilibili.com",
      description: "年轻人的文化社区",
      tags: ["免费", "社区", "娱乐"],
      image: "",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com",
      description: "全球最大的视频分享平台",
      tags: ["免费", "在线", "社区"],
      image: "",
    },
    {
      name: "Disney+",
      url: "https://www.disneyplus.com",
      description: "迪士尼官方流媒体服务",
      tags: ["高清", "付费", "在线"],
      image: "",
    },
    {
      name: "HBO Max",
      url: "https://www.hbomax.com",
      description: "HBO官方流媒体平台",
      tags: ["高清", "付费", "在线"],
      image: "",
    },
    {
      name: "Amazon Prime",
      url: "https://www.primevideo.com",
      description: "亚马逊视频服务",
      tags: ["高清", "付费", "在线"],
      image: "",
    },
    {
      name: "Hulu",
      url: "https://www.hulu.com",
      description: "美国流媒体服务",
      tags: ["高清", "付费", "在线"],
      image: "",
    },
  ],
  music: [
    {
      name: "Spotify",
      url: "https://www.spotify.com",
      description: "全球最大的音乐流媒体平台",
      tags: ["免费", "在线", "高清"],
      image: "",
    },
    {
      name: "网易云音乐",
      url: "https://music.163.com",
      description: "网易旗下音乐平台",
      tags: ["免费", "在线", "社区"],
      image: "",
    },
    {
      name: "QQ音乐",
      url: "https://y.qq.com",
      description: "腾讯旗下音乐平台",
      tags: ["免费", "在线", "高清"],
      image: "",
    },
    {
      name: "酷狗音乐",
      url: "https://www.kugou.com",
      description: "中国领先的数字音乐平台",
      tags: ["免费", "在线", "下载"],
      image: "",
    },
    {
      name: "Apple Music",
      url: "https://music.apple.com",
      description: "苹果官方音乐服务",
      tags: ["付费", "高清", "在线"],
      image: "",
    },
    {
      name: "YouTube Music",
      url: "https://music.youtube.com",
      description: "YouTube官方音乐服务",
      tags: ["免费", "在线", "高清"],
      image: "",
    },
    {
      name: "SoundCloud",
      url: "https://soundcloud.com",
      description: "独立音乐人分享平台",
      tags: ["免费", "社区", "在线"],
      image: "",
    },
    {
      name: "Bandcamp",
      url: "https://bandcamp.com",
      description: "独立音乐销售平台",
      tags: ["付费", "下载", "社区"],
      image: "",
    },
    {
      name: "Tidal",
      url: "https://tidal.com",
      description: "高保真音乐流媒体",
      tags: ["付费", "高清", "在线"],
      image: "",
    },
    {
      name: "Deezer",
      url: "https://www.deezer.com",
      description: "法国音乐流媒体平台",
      tags: ["免费", "在线", "高清"],
      image: "",
    },
  ],
  books: [
    {
      name: "Kindle",
      url: "https://www.amazon.com/kindle",
      description: "亚马逊电子书平台",
      tags: ["付费", "下载", "阅读"],
      image: "",
    },
    {
      name: "微信读书",
      url: "https://weread.qq.com",
      description: "腾讯旗下阅读平台",
      tags: ["免费", "在线", "社区"],
      image: "",
    },
    {
      name: "起点中文网",
      url: "https://www.qidian.com",
      description: "中国最大的网络文学平台",
      tags: ["免费", "在线", "付费"],
      image: "",
    },
    {
      name: "豆瓣读书",
      url: "https://book.douban.com",
      description: "豆瓣图书评分平台",
      tags: ["免费", "社区", "评分"],
      image: "",
    },
    {
      name: "Project Gutenberg",
      url: "https://www.gutenberg.org",
      description: "免费电子书图书馆",
      tags: ["免费", "下载", "经典"],
      image: "",
    },
    {
      name: "Google Books",
      url: "https://books.google.com",
      description: "谷歌图书搜索",
      tags: ["免费", "在线", "搜索"],
      image: "",
    },
    {
      name: "Goodreads",
      url: "https://www.goodreads.com",
      description: "全球最大的读书社区",
      tags: ["免费", "社区", "评分"],
      image: "",
    },
    {
      name: "Scribd",
      url: "https://www.scribd.com",
      description: "数字图书馆订阅服务",
      tags: ["付费", "在线", "订阅"],
      image: "",
    },
    {
      name: "Z-Library",
      url: "https://z-lib.org",
      description: "免费电子书下载",
      tags: ["免费", "下载", "学术"],
      image: "",
    },
    {
      name: "Internet Archive",
      url: "https://archive.org",
      description: "互联网档案馆",
      tags: ["免费", "在线", "历史"],
      image: "",
    },
  ],
  tech: [
    {
      name: "GitHub",
      url: "https://github.com",
      description: "全球最大的代码托管平台",
      tags: ["免费", "开源", "社区"],
      image: "",
    },
    {
      name: "Stack Overflow",
      url: "https://stackoverflow.com",
      description: "程序员问答社区",
      tags: ["免费", "社区", "学习"],
      image: "",
    },
    {
      name: "MDN",
      url: "https://developer.mozilla.org",
      description: "Web开发者文档",
      tags: ["免费", "学习", "文档"],
      image: "",
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com",
      description: "算法练习平台",
      tags: ["免费", "学习", "算法"],
      image: "",
    },
    {
      name: "Coursera",
      url: "https://www.coursera.org",
      description: "在线课程平台",
      tags: ["付费", "学习", "认证"],
      image: "",
    },
    {
      name: "freeCodeCamp",
      url: "https://www.freecodecamp.org",
      description: "免费编程学习平台",
      tags: ["免费", "学习", "开源"],
      image: "",
    },
    {
      name: "CodePen",
      url: "https://codepen.io",
      description: "前端代码分享平台",
      tags: ["免费", "社区", "工具"],
      image: "",
    },
    {
      name: "Hacker News",
      url: "https://news.ycombinator.com",
      description: "技术新闻聚合",
      tags: ["免费", "新闻", "社区"],
      image: "",
    },
    { name: "Dev.to", url: "https://dev.to", description: "开发者社区", tags: ["免费", "社区", "博客"], image: "" },
    { name: "GitLab", url: "https://gitlab.com", description: "DevOps平台", tags: ["免费", "开源", "工具"], image: "" },
  ],
  ai: [
    {
      name: "ChatGPT",
      url: "https://chat.openai.com",
      description: "OpenAI的对话AI",
      tags: ["免费", "AI", "对话"],
      image: "",
    },
    {
      name: "Claude",
      url: "https://claude.ai",
      description: "Anthropic的AI助手",
      tags: ["免费", "AI", "对话"],
      image: "",
    },
    {
      name: "Midjourney",
      url: "https://www.midjourney.com",
      description: "AI图像生成工具",
      tags: ["付费", "AI", "图像"],
      image: "",
    },
    {
      name: "Stable Diffusion",
      url: "https://stability.ai",
      description: "开源AI图像生成",
      tags: ["免费", "AI", "开源"],
      image: "",
    },
    {
      name: "Hugging Face",
      url: "https://huggingface.co",
      description: "AI模型社区",
      tags: ["免费", "AI", "开源"],
      image: "",
    },
    {
      name: "Replicate",
      url: "https://replicate.com",
      description: "AI模型API平台",
      tags: ["付费", "AI", "API"],
      image: "",
    },
    {
      name: "RunwayML",
      url: "https://runwayml.com",
      description: "创意AI工具套件",
      tags: ["付费", "AI", "创意"],
      image: "",
    },
    {
      name: "Perplexity",
      url: "https://www.perplexity.ai",
      description: "AI搜索引擎",
      tags: ["免费", "AI", "搜索"],
      image: "",
    },
    {
      name: "Character.AI",
      url: "https://character.ai",
      description: "AI角色对话平台",
      tags: ["免费", "AI", "娱乐"],
      image: "",
    },
    {
      name: "Jasper",
      url: "https://www.jasper.ai",
      description: "AI写作助手",
      tags: ["付费", "AI", "写作"],
      image: "",
    },
  ],
}

// 初始化数据
function initializeData() {
  const savedData = localStorage.getItem("websitesData")
  if (savedData) {
    websitesData = JSON.parse(savedData)
  } else {
    websitesData = { ...defaultWebsites }
    saveData()
  }
}

// 保存数据到本地存储
function saveData() {
  localStorage.setItem("websitesData", JSON.stringify(websitesData))
}

// 获取网站Logo
function getWebsiteLogo(url, name) {
  try {
    const domain = new URL(url).hostname
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`
  } catch {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=667eea&color=fff&size=64`
  }
}

// 创建网站卡片
function createWebsiteCard(website, category) {
  const card = document.createElement("div")
  card.className = "website-card"

  const logoSrc = website.image || getWebsiteLogo(website.url, website.name)

  card.innerHTML = `
        <div class="website-card-actions">
            <button class="card-action-btn" onclick="shareWebsite('${category}', '${website.name}')" title="分享">
                <i class="fas fa-share-alt"></i>
            </button>
        </div>
        <div class="website-header">
            <img class="website-logo" src="${logoSrc}" alt="${website.name}" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(website.name)}&background=667eea&color=fff&size=64'">
            <div class="website-info">
                <h3>${website.name}</h3>
                <div class="website-url">${new URL(website.url).hostname}</div>
            </div>
        </div>
        <div class="website-description">${website.description || "暂无描述"}</div>
        <div class="website-tags">
            ${website.tags.map((tag) => `<span class="website-tag">${tag}</span>`).join("")}
        </div>
    `

  // 添加点击事件记录访问
  card.addEventListener("click", (e) => {
    // 如果点击的是分享按钮，不记录访问
    if (e.target.closest(".card-action-btn")) {
      e.preventDefault()
      return
    }

    recordWebsiteVisit(website, category)
    window.open(website.url, "_blank", "noopener,noreferrer")
  })

  return card
}

// 渲染网站网格
function renderWebsiteGrid(category) {
  const grid = document.getElementById(`${category}Grid`)
  if (!grid) return

  grid.innerHTML = ""
  const websites = websitesData[category] || []

  websites.forEach((website) => {
    const card = createWebsiteCard(website, category)
    grid.appendChild(card)
  })
}

// 渲染所有分类
function renderAllCategories() {
  Object.keys(websitesData).forEach((category) => {
    renderWebsiteGrid(category)
  })
}

// 获取所有标签
function getAllTags() {
  const allTags = new Set()
  Object.values(websitesData).forEach((websites) => {
    websites.forEach((website) => {
      website.tags.forEach((tag) => allTags.add(tag))
    })
  })
  return Array.from(allTags)
}

// 渲染标签
function renderTags() {
  const tagsContainer = document.getElementById("tagsContainer")
  if (!tagsContainer) return

  const tags = getAllTags()
  tagsContainer.innerHTML = ""

  tags.forEach((tag) => {
    const tagElement = document.createElement("button")
    tagElement.className = "tag"
    tagElement.textContent = tag
    tagElement.addEventListener("click", () => filterByTag(tag))
    tagsContainer.appendChild(tagElement)
  })
}

// 根据标签筛选
function filterByTag(tag) {
  const filteredWebsites = []
  Object.entries(websitesData).forEach(([category, websites]) => {
    websites.forEach((website) => {
      if (website.tags.includes(tag)) {
        filteredWebsites.push({ ...website, category })
      }
    })
  })

  const filteredResults = document.getElementById("filteredResults")
  const filterTitle = document.getElementById("filterTitle")
  const filteredGrid = document.getElementById("filteredGrid")

  if (filteredResults && filterTitle && filteredGrid) {
    filterTitle.textContent = `标签"${tag}"的相关网站`
    filteredGrid.innerHTML = ""

    filteredWebsites.forEach((website) => {
      const card = createWebsiteCard(website)
      filteredGrid.appendChild(card)
    })

    filteredResults.style.display = "block"
    filteredResults.scrollIntoView({ behavior: "smooth" })
  }
}

// 导航功能
function initializeNavigation() {
  const navLinks = document.querySelectorAll(".nav-link")
  const sections = document.querySelectorAll(".content-section")
  const sidebar = document.getElementById("sidebar")
  const sidebarToggle = document.getElementById("sidebarToggle")
  const mobileOverlay = document.getElementById("mobileOverlay")

  // 导航链接点击事件
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const targetSection = link.getAttribute("data-section")

      // 更新活动状态
      navLinks.forEach((l) => l.classList.remove("active"))
      link.classList.add("active")

      sections.forEach((s) => s.classList.remove("active"))
      const targetElement = document.getElementById(targetSection)
      if (targetElement) {
        targetElement.classList.add("active")
      }

      // 移动端关闭侧边栏
      if (window.innerWidth <= 768) {
        sidebar.classList.remove("active")
        mobileOverlay.classList.remove("active")
      }

      // 隐藏筛选结果
      const filteredResults = document.getElementById("filteredResults")
      if (filteredResults && targetSection === "home") {
        filteredResults.style.display = "none"
      }
    })
  })

  // 移动端侧边栏切换
  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", () => {
      sidebar.classList.toggle("active")
      mobileOverlay.classList.toggle("active")
    })
  }

  // 移动端遮罩层点击关闭
  if (mobileOverlay) {
    mobileOverlay.addEventListener("click", () => {
      sidebar.classList.remove("active")
      mobileOverlay.classList.remove("active")
    })
  }

  // 窗口大小改变时的处理
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      sidebar.classList.remove("active")
      mobileOverlay.classList.remove("active")
    }
  })
}

// 平滑滚动动画
function addScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // 观察所有网站卡片
  document.querySelectorAll(".website-card").forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(card)
  })
}

// 搜索功能
function initializeSearch() {
  const searchInput = document.createElement("input")
  searchInput.type = "text"
  searchInput.placeholder = "搜索网站..."
  searchInput.className = "search-input"
  searchInput.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 0.75rem 1rem;
        border: 2px solid var(--border-color);
        border-radius: 2rem;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        font-size: 0.9rem;
        width: 250px;
        z-index: 999;
        transition: var(--transition);
    `

  document.body.appendChild(searchInput)

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim()
    if (query.length === 0) {
      document.getElementById("filteredResults").style.display = "none"
      return
    }

    const searchResults = []
    Object.entries(websitesData).forEach(([category, websites]) => {
      websites.forEach((website) => {
        if (
          website.name.toLowerCase().includes(query) ||
          website.description.toLowerCase().includes(query) ||
          website.tags.some((tag) => tag.toLowerCase().includes(query))
        ) {
          searchResults.push({ ...website, category })
        }
      })
    })

    const filteredResults = document.getElementById("filteredResults")
    const filterTitle = document.getElementById("filterTitle")
    const filteredGrid = document.getElementById("filteredGrid")

    if (filteredResults && filterTitle && filteredGrid) {
      filterTitle.textContent = `搜索"${query}"的结果 (${searchResults.length}个)`
      filteredGrid.innerHTML = ""

      searchResults.forEach((website) => {
        const card = createWebsiteCard(website)
        filteredGrid.appendChild(card)
      })

      filteredResults.style.display = "block"
    }
  })

  // 响应式处理
  function handleSearchResponsive() {
    if (window.innerWidth <= 768) {
      searchInput.style.cssText += `
                position: relative;
                top: auto;
                right: auto;
                width: 100%;
                margin: 1rem;
                display: block;
            `
      document.querySelector(".hero-section").appendChild(searchInput)
    }
  }

  window.addEventListener("resize", handleSearchResponsive)
  handleSearchResponsive()
}

// 网站访问统计
let websiteStats = {
  totalVisits: 0,
  categoryVisits: {
    movies: 0,
    music: 0,
    books: 0,
    tech: 0,
    ai: 0,
  },
  websiteVisits: {},
  dailyVisits: {},
  lastVisit: null,
}

// 初始化统计数据
function initializeStats() {
  const savedStats = localStorage.getItem("websiteStats")
  if (savedStats) {
    websiteStats = { ...websiteStats, ...JSON.parse(savedStats) }
  }
}

// 保存统计数据
function saveStats() {
  localStorage.setItem("websiteStats", JSON.stringify(websiteStats))
}

// 记录网站访问
function recordWebsiteVisit(website, category) {
  const websiteKey = `${category}_${website.name}`
  const today = new Date().toISOString().split("T")[0]

  // 更新总访问量
  websiteStats.totalVisits++

  // 更新分类访问量
  websiteStats.categoryVisits[category]++

  // 更新网站访问量
  if (!websiteStats.websiteVisits[websiteKey]) {
    websiteStats.websiteVisits[websiteKey] = {
      name: website.name,
      category: category,
      visits: 0,
      url: website.url,
    }
  }
  websiteStats.websiteVisits[websiteKey].visits++

  // 更新每日访问量
  if (!websiteStats.dailyVisits[today]) {
    websiteStats.dailyVisits[today] = 0
  }
  websiteStats.dailyVisits[today]++

  // 更新最后访问时间
  websiteStats.lastVisit = new Date().toISOString()

  saveStats()
}

// 分享网站功能
let currentShareWebsite = null

function shareWebsite(category, websiteName) {
  const website = websitesData[category].find((w) => w.name === websiteName)
  if (!website) return

  currentShareWebsite = { ...website, category }

  // 填充分享信息
  const shareInfo = document.getElementById("shareWebsiteInfo")
  const logoSrc = website.image || getWebsiteLogo(website.url, website.name)

  shareInfo.innerHTML = `
        <img class="share-website-logo" src="${logoSrc}" alt="${website.name}" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(website.name)}&background=667eea&color=fff&size=64'">
        <div class="share-website-details">
            <h4>${website.name}</h4>
            <p>${website.description || "暂无描述"}</p>
            <p style="font-size: 0.8rem; color: var(--text-light);">${website.url}</p>
        </div>
    `

  // 显示分享模态框
  document.getElementById("shareModal").classList.add("active")
}

// 初始化分享功能
function initializeShare() {
  const shareModal = document.getElementById("shareModal")
  const closeShareModal = document.getElementById("closeShareModal")
  const shareButtons = document.querySelectorAll(".share-btn")

  // 关闭分享模态框
  function closeShare() {
    shareModal.classList.remove("active")
    currentShareWebsite = null
  }

  closeShareModal.addEventListener("click", closeShare)

  shareModal.addEventListener("click", (e) => {
    if (e.target === shareModal) {
      closeShare()
    }
  })

  // 分享按钮事件
  shareButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const platform = btn.getAttribute("data-platform")
      handleShare(platform)
    })
  })
}

// 处理分享
function handleShare(platform) {
  if (!currentShareWebsite) return

  const website = currentShareWebsite
  const shareText = `推荐一个不错的网站：${website.name} - ${website.description || "值得一看"}`
  const shareUrl = website.url

  switch (platform) {
    case "wechat":
      // 微信分享（显示二维码或复制链接）
      copyToClipboard(shareUrl)
      showToast("链接已复制，可在微信中分享")
      break

    case "weibo":
      const weiboUrl = `https://service.weibo.com/share/share.php?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`
      window.open(weiboUrl, "_blank", "width=600,height=400")
      break

    case "qq":
      const qqUrl = `https://connect.qq.com/widget/shareqq/index.html?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`
      window.open(qqUrl, "_blank", "width=600,height=400")
      break

    case "twitter":
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`
      window.open(twitterUrl, "_blank", "width=600,height=400")
      break

    case "facebook":
      const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
      window.open(facebookUrl, "_blank", "width=600,height=400")
      break

    case "copy":
      copyToClipboard(`${shareText}\n${shareUrl}`)
      showToast("链接已复制到剪贴板")
      break
  }

  // 关闭分享模态框
  document.getElementById("shareModal").classList.remove("active")
}

// 复制到剪贴板
function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text)
  } else {
    // 兼容旧浏览器
    const textArea = document.createElement("textarea")
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand("copy")
    document.body.removeChild(textArea)
  }
}

// 显示提示消息
function showToast(message) {
  const toast = document.createElement("div")
  toast.className = "toast"
  toast.textContent = message
  toast.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        z-index: 9999;
        font-size: 0.9rem;
        backdrop-filter: blur(10px);
        animation: fadeInOut 2s ease-in-out;
    `

  // 添加动画样式
  const style = document.createElement("style")
  style.textContent = `
        @keyframes fadeInOut {
            0%, 100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
            20%, 80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
    `
  document.head.appendChild(style)

  document.body.appendChild(toast)

  setTimeout(() => {
    document.body.removeChild(toast)
    document.head.removeChild(style)
  }, 2000)
}

// 统计功能
function initializeStatsModal() {
  const statsFab = document.getElementById("statsFab")
  const statsModal = document.getElementById("statsModal")
  const closeStatsModal = document.getElementById("closeStatsModal")

  // 打开统计模态框
  statsFab.addEventListener("click", () => {
    renderStats()
    statsModal.classList.add("active")
  })

  // 关闭统计模态框
  function closeStats() {
    statsModal.classList.remove("active")
  }

  closeStatsModal.addEventListener("click", closeStats)

  statsModal.addEventListener("click", (e) => {
    if (e.target === statsModal) {
      closeStats()
    }
  })
}

// 渲染统计信息
function renderStats() {
  const statsContent = document.getElementById("statsContent")

  // 计算统计数据
  const totalWebsites = Object.values(websitesData).reduce((sum, websites) => sum + websites.length, 0)
  const totalCategories = Object.keys(websitesData).length
  const mostVisitedCategory = Object.entries(websiteStats.categoryVisits).reduce((a, b) =>
    websiteStats.categoryVisits[a[0]] > websiteStats.categoryVisits[b[0]] ? a : b,
  )[0]

  // 获取最受欢迎的网站
  const popularWebsites = Object.values(websiteStats.websiteVisits)
    .sort((a, b) => b.visits - a.visits)
    .slice(0, 5)

  // 获取最近7天的访问数据
  const last7Days = []
  for (let i = 6; i >= 0; i--) {
    const date = new Date()
    date.setDate(date.getDate() - i)
    const dateStr = date.toISOString().split("T")[0]
    last7Days.push({
      date: dateStr,
      visits: websiteStats.dailyVisits[dateStr] || 0,
    })
  }

  // Define categoryNames
  const categoryNames = {
    movies: "电影",
    music: "音乐",
    books: "书籍",
    tech: "科技",
    ai: "人工智能",
  }

  statsContent.innerHTML = `
        <div class="stats-grid">
            <div class="stats-card">
                <div class="stats-card-icon">
                    <i class="fas fa-globe"></i>
                </div>
                <div class="stats-card-value">${totalWebsites}</div>
                <div class="stats-card-label">收录网站</div>
            </div>
            <div class="stats-card">
                <div class="stats-card-icon">
                    <i class="fas fa-mouse-pointer"></i>
                </div>
                <div class="stats-card-value">${websiteStats.totalVisits}</div>
                <div class="stats-card-label">总访问量</div>
            </div>
            <div class="stats-card">
                <div class="stats-card-icon">
                    <i class="fas fa-layer-group"></i>
                </div>
                <div class="stats-card-value">${totalCategories}</div>
                <div class="stats-card-label">网站分类</div>
            </div>
            <div class="stats-card">
                <div class="stats-card-icon">
                    <i class="fas fa-star"></i>
                </div>
                <div class="stats-card-value">${categoryNames[mostVisitedCategory] || "暂无"}</div>
                <div class="stats-card-label">热门分类</div>
            </div>
        </div>

        <div class="stats-chart">
            <h4><i class="fas fa-chart-bar"></i> 分类访问统计</h4>
            ${Object.entries(websiteStats.categoryVisits)
              .map(([category, visits]) => {
                const percentage = websiteStats.totalVisits > 0 ? (visits / websiteStats.totalVisits) * 100 : 0
                return `
                    <div class="chart-bar">
                        <div class="chart-label">${categoryNames[category]}</div>
                        <div class="chart-progress">
                            <div class="chart-fill" style="width: ${percentage}%"></div>
                        </div>
                        <div class="chart-value">${visits}</div>
                    </div>
                `
              })
              .join("")}
        </div>

        <div class="stats-chart">
            <h4><i class="fas fa-calendar-alt"></i> 最近7天访问趋势</h4>
            ${last7Days
              .map((day) => {
                const maxVisits = Math.max(...last7Days.map((d) => d.visits), 1)
                const percentage = (day.visits / maxVisits) * 100
                const date = new Date(day.date)
                const dateLabel = `${date.getMonth() + 1}/${date.getDate()}`
                return `
                    <div class="chart-bar">
                        <div class="chart-label">${dateLabel}</div>
                        <div class="chart-progress">
                            <div class="chart-fill" style="width: ${percentage}%"></div>
                        </div>
                        <div class="chart-value">${day.visits}</div>
                    </div>
                `
              })
              .join("")}
        </div>

        ${
          popularWebsites.length > 0
            ? `
            <div class="popular-websites">
                <h4><i class="fas fa-fire"></i> 热门网站排行</h4>
                ${popularWebsites
                  .map(
                    (website, index) => `
                    <div class="popular-website-item">
                        <div class="popular-website-rank">${index + 1}</div>
                        <div class="popular-website-info">
                            <div class="popular-website-name">${website.name}</div>
                            <div class="popular-website-visits">${website.visits} 次访问</div>
                        </div>
                    </div>
                `,
                  )
                  .join("")}
            </div>
        `
            : ""
        }
    `
}

// 更新渲染网站网格函数
function renderWebsiteGrid(category) {
  const grid = document.getElementById(`${category}Grid`)
  if (!grid) return

  grid.innerHTML = ""
  const websites = websitesData[category] || []

  websites.forEach((website) => {
    const card = createWebsiteCard(website, category)
    grid.appendChild(card)
  })
}

// 移动端优化：添加触摸手势支持
function initializeMobileOptimizations() {
  let touchStartX = 0
  let touchStartY = 0

  // 侧边栏滑动手势
  document.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX
    touchStartY = e.touches[0].clientY
  })

  document.addEventListener("touchmove", (e) => {
    if (!touchStartX || !touchStartY) return

    const touchEndX = e.touches[0].clientX
    const touchEndY = e.touches[0].clientY

    const diffX = touchStartX - touchEndX
    const diffY = touchStartY - touchEndY

    // 水平滑动距离大于垂直滑动距离
    if (Math.abs(diffX) > Math.abs(diffY)) {
      const sidebar = document.getElementById("sidebar")
      const mobileOverlay = document.getElementById("mobileOverlay")

      // 从左边缘向右滑动打开侧边栏
      if (touchStartX < 20 && diffX < -50) {
        sidebar.classList.add("active")
        mobileOverlay.classList.add("active")
      }
      // 向左滑动关闭侧边栏
      else if (diffX > 50 && sidebar.classList.contains("active")) {
        sidebar.classList.remove("active")
        mobileOverlay.classList.remove("active")
      }
    }

    touchStartX = 0
    touchStartY = 0
  })

  // 优化移动端点击体验
  document.addEventListener("touchend", (e) => {
    // 防止双击缩放
    e.preventDefault()
  })

  // 移动端搜索优化
  const searchInput = document.querySelector(".search-input")
  if (searchInput && window.innerWidth <= 768) {
    searchInput.addEventListener("focus", () => {
      // 滚动到搜索框
      searchInput.scrollIntoView({ behavior: "smooth", block: "center" })
    })
  }
}

// 添加键盘快捷键支持
function initializeKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    // Ctrl/Cmd + K 打开搜索
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault()
      const searchInput = document.querySelector(".search-input")
      if (searchInput) {
        searchInput.focus()
      }
    }

    // Esc 关闭模态框
    if (e.key === "Escape") {
      const activeModal = document.querySelector(".modal.active, .stats-modal.active, .share-modal.active")
      if (activeModal) {
        activeModal.classList.remove("active")
      }
    }

    // 数字键快速导航
    if (e.key >= "1" && e.key <= "6") {
      const navLinks = document.querySelectorAll(".nav-link")
      const index = Number.parseInt(e.key) - 1
      if (navLinks[index]) {
        navLinks[index].click()
      }
    }
  })
}

// 更新页面加载完成后的初始化
document.addEventListener("DOMContentLoaded", () => {
  initializeData()
  initializeStats()
  renderAllCategories()
  renderTags()
  initializeNavigation()
  initializeSearch()
  initializeShare()
  initializeStatsModal()
  initializeMobileOptimizations()
  initializeKeyboardShortcuts()

  // 延迟添加动画，确保内容已渲染
  setTimeout(() => {
    addScrollAnimations()
  }, 100)
})

// 全局函数
window.shareWebsite = shareWebsite
