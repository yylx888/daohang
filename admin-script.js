// 管理后台脚本
let websitesData = {
  movies: [],
  music: [],
  books: [],
  tech: [],
  ai: [],
}

let editingWebsite = null
let editingCategory = null
let editingIndex = null

// 分类映射
const categoryNames = {
  movies: "影视",
  music: "音乐",
  books: "电子书",
  tech: "IT",
  ai: "AI",
}

// 初始化数据
function initializeData() {
  const savedData = localStorage.getItem("websitesData")
  if (savedData) {
    websitesData = JSON.parse(savedData)
  }
}

// 保存数据
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

// 标签管理
class TagManager {
  constructor(containerId, selectedTagsId, customTagInputId) {
    this.container = document.getElementById(containerId)
    this.selectedTagsContainer = document.getElementById(selectedTagsId)
    this.customTagInput = document.getElementById(customTagInputId)
    this.selectedTags = new Set()

    this.initializeEvents()
  }

  initializeEvents() {
    // 预设标签点击事件
    this.container.addEventListener("click", (e) => {
      if (e.target.classList.contains("preset-tag")) {
        const tag = e.target.getAttribute("data-tag")
        this.toggleTag(tag)
        e.target.classList.toggle("selected")
      }
    })

    // 自定义标签输入
    this.customTagInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault()
        const tag = e.target.value.trim()
        if (tag && !this.selectedTags.has(tag)) {
          this.addTag(tag)
          e.target.value = ""
        }
      }
    })
  }

  toggleTag(tag) {
    if (this.selectedTags.has(tag)) {
      this.removeTag(tag)
    } else {
      this.addTag(tag)
    }
  }

  addTag(tag) {
    this.selectedTags.add(tag)
    this.renderSelectedTags()
  }

  removeTag(tag) {
    this.selectedTags.delete(tag)
    this.renderSelectedTags()

    // 更新预设标签状态
    const presetTag = this.container.querySelector(`[data-tag="${tag}"]`)
    if (presetTag) {
      presetTag.classList.remove("selected")
    }
  }

  renderSelectedTags() {
    this.selectedTagsContainer.innerHTML = ""
    this.selectedTags.forEach((tag) => {
      const tagElement = document.createElement("span")
      tagElement.className = "selected-tag"
      tagElement.innerHTML = `
                ${tag}
                <span class="remove-tag" onclick="tagManager.removeTag('${tag}')">&times;</span>
            `
      this.selectedTagsContainer.appendChild(tagElement)
    })
  }

  getTags() {
    return Array.from(this.selectedTags)
  }

  setTags(tags) {
    this.selectedTags.clear()
    tags.forEach((tag) => this.selectedTags.add(tag))
    this.renderSelectedTags()

    // 更新预设标签状态
    this.container.querySelectorAll(".preset-tag").forEach((element) => {
      const tag = element.getAttribute("data-tag")
      element.classList.toggle("selected", this.selectedTags.has(tag))
    })
  }

  clear() {
    this.selectedTags.clear()
    this.renderSelectedTags()
    this.container.querySelectorAll(".preset-tag").forEach((element) => {
      element.classList.remove("selected")
    })
  }
}

// 初始化标签管理器
let tagManager, editTagManager

// 添加网站表单处理
function initializeAddForm() {
  const form = document.getElementById("addWebsiteForm")

  form.addEventListener("submit", (e) => {
    e.preventDefault()

    const formData = new FormData(form)
    const website = {
      name: document.getElementById("siteName").value.trim(),
      url: document.getElementById("siteUrl").value.trim(),
      category: document.getElementById("siteCategory").value,
      image: document.getElementById("siteImage").value.trim(),
      description: document.getElementById("siteDescription").value.trim(),
      tags: tagManager.getTags(),
    }

    // 验证必填字段
    if (!website.name || !website.url || !website.category) {
      alert("请填写所有必填字段！")
      return
    }

    // 验证URL格式
    try {
      new URL(website.url)
    } catch {
      alert("请输入有效的网站链接！")
      return
    }

    // 添加到数据
    if (!websitesData[website.category]) {
      websitesData[website.category] = []
    }

    websitesData[website.category].push(website)
    saveData()

    // 重置表单
    form.reset()
    tagManager.clear()

    // 刷新列表
    renderWebsitesList()

    alert("网站添加成功！")
  })
}

// 渲染网站列表
function renderWebsitesList() {
  const container = document.getElementById("websitesList")
  container.innerHTML = ""

  const categoryFilter = document.getElementById("categoryFilter").value
  const searchQuery = document.getElementById("searchInput").value.toLowerCase()

  Object.entries(websitesData).forEach(([category, websites]) => {
    if (categoryFilter && categoryFilter !== category) return

    websites.forEach((website, index) => {
      if (searchQuery && !website.name.toLowerCase().includes(searchQuery)) return

      const item = document.createElement("div")
      item.className = "website-item"

      const logoSrc = website.image || getWebsiteLogo(website.url, website.name)

      item.innerHTML = `
                <div class="website-item-info">
                    <img class="website-item-logo" src="${logoSrc}" alt="${website.name}" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(website.name)}&background=667eea&color=fff&size=64'">
                    <div class="website-item-details">
                        <h4>${website.name}</h4>
                        <p>${website.url}</p>
                        <p>${website.description || "暂无描述"}</p>
                    </div>
                    <span class="website-item-category">${categoryNames[category]}</span>
                    <div class="website-item-actions">
                        <button class="action-btn" onclick="editWebsite('${category}', ${index})" title="编辑">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="action-btn danger" onclick="deleteWebsite('${category}', ${index})" title="删除">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `

      container.appendChild(item)
    })
  })

  if (container.children.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: var(--text-light); padding: 2rem;">暂无网站数据</p>'
  }
}

// 编辑网站
function editWebsite(category, index) {
  const website = websitesData[category][index]
  editingWebsite = website
  editingCategory = category
  editingIndex = index

  // 填充编辑表单
  document.getElementById("editSiteName").value = website.name
  document.getElementById("editSiteUrl").value = website.url
  document.getElementById("editSiteCategory").value = category
  document.getElementById("editSiteImage").value = website.image || ""
  document.getElementById("editSiteDescription").value = website.description || ""

  // 设置标签
  editTagManager.setTags(website.tags || [])

  // 显示模态框
  document.getElementById("editModal").classList.add("active")
}

// 删除网站
function deleteWebsite(category, index) {
  const website = websitesData[category][index]
  if (confirm(`确定要删除网站"${website.name}"吗？`)) {
    websitesData[category].splice(index, 1)
    saveData()
    renderWebsitesList()
  }
}

// 初始化编辑表单
function initializeEditForm() {
  const form = document.getElementById("editWebsiteForm")
  const modal = document.getElementById("editModal")
  const closeBtn = document.getElementById("closeModal")
  const cancelBtn = document.getElementById("cancelEdit")

  // 关闭模态框
  function closeModal() {
    modal.classList.remove("active")
    editingWebsite = null
    editingCategory = null
    editingIndex = null
  }

  closeBtn.addEventListener("click", closeModal)
  cancelBtn.addEventListener("click", closeModal)

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal()
    }
  })

  // 提交编辑表单
  form.addEventListener("submit", (e) => {
    e.preventDefault()

    const updatedWebsite = {
      name: document.getElementById("editSiteName").value.trim(),
      url: document.getElementById("editSiteUrl").value.trim(),
      category: document.getElementById("editSiteCategory").value,
      image: document.getElementById("editSiteImage").value.trim(),
      description: document.getElementById("editSiteDescription").value.trim(),
      tags: editTagManager.getTags(),
    }

    // 验证必填字段
    if (!updatedWebsite.name || !updatedWebsite.url || !updatedWebsite.category) {
      alert("请填写所有必填字段！")
      return
    }

    // 验证URL格式
    try {
      new URL(updatedWebsite.url)
    } catch {
      alert("请输入有效的网站链接！")
      return
    }

    // 如果分类改变了，需要移动到新分类
    if (updatedWebsite.category !== editingCategory) {
      // 从原分类删除
      websitesData[editingCategory].splice(editingIndex, 1)
      // 添加到新分类
      if (!websitesData[updatedWebsite.category]) {
        websitesData[updatedWebsite.category] = []
      }
      websitesData[updatedWebsite.category].push(updatedWebsite)
    } else {
      // 更新原位置
      websitesData[editingCategory][editingIndex] = updatedWebsite
    }

    saveData()
    renderWebsitesList()
    closeModal()

    alert("网站更新成功！")
  })
}

// 数据管理功能
function initializeDataManagement() {
  const exportBtn = document.getElementById("exportBtn")
  const importBtn = document.getElementById("importBtn")
  const importFile = document.getElementById("importFile")
  const clearBtn = document.getElementById("clearBtn")

  // 导出数据
  exportBtn.addEventListener("click", () => {
    const dataStr = JSON.stringify(websitesData, null, 2)
    const dataBlob = new Blob([dataStr], { type: "application/json" })
    const url = URL.createObjectURL(dataBlob)

    const link = document.createElement("a")
    link.href = url
    link.download = `sanwei-bookhouse-data-${new Date().toISOString().split("T")[0]}.json`
    link.click()

    URL.revokeObjectURL(url)
  })

  // 导入数据
  importBtn.addEventListener("click", () => {
    importFile.click()
  })

  importFile.addEventListener("change", (e) => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const importedData = JSON.parse(e.target.result)

        // 验证数据格式
        if (typeof importedData === "object" && importedData !== null) {
          if (confirm("确定要导入数据吗？这将覆盖现有数据！")) {
            websitesData = importedData
            saveData()
            renderWebsitesList()
            alert("数据导入成功！")
          }
        } else {
          alert("无效的数据格式！")
        }
      } catch (error) {
        alert("文件解析失败！请确保文件格式正确。")
      }
    }
    reader.readAsText(file)

    // 重置文件输入
    e.target.value = ""
  })

  // 清空数据
  clearBtn.addEventListener("click", () => {
    if (confirm("确定要清空所有数据吗？此操作不可恢复！")) {
      if (confirm("请再次确认：这将删除所有网站数据！")) {
        websitesData = { movies: [], music: [], books: [], tech: [], ai: [] }
        saveData()
        renderWebsitesList()
        alert("数据已清空！")
      }
    }
  })
}

// 初始化筛选功能
function initializeFilters() {
  const categoryFilter = document.getElementById("categoryFilter")
  const searchInput = document.getElementById("searchInput")

  categoryFilter.addEventListener("change", renderWebsitesList)
  searchInput.addEventListener("input", renderWebsitesList)
}

// 管理后台统计功能
function renderAdminStats() {
  const statsData = JSON.parse(localStorage.getItem("websiteStats")) || {
    totalVisits: 0,
    categoryVisits: { movies: 0, music: 0, books: 0, tech: 0, ai: 0 },
    websiteVisits: {},
    dailyVisits: {},
  }

  // 计算基本统计
  const totalWebsites = Object.values(websitesData).reduce((sum, websites) => sum + websites.length, 0)
  const today = new Date().toISOString().split("T")[0]
  const todayVisits = statsData.dailyVisits[today] || 0

  // 找出最热门的分类
  const popularCategory = Object.entries(statsData.categoryVisits).reduce((a, b) =>
    statsData.categoryVisits[a[0]] > statsData.categoryVisits[b[0]] ? a : b,
  )[0]

  // 更新统计卡片
  document.getElementById("adminTotalWebsites").textContent = totalWebsites
  document.getElementById("adminTotalVisits").textContent = statsData.totalVisits
  document.getElementById("adminTodayVisits").textContent = todayVisits
  document.getElementById("adminPopularCategory").textContent = categoryNames[popularCategory] || "-"

  // 渲染分类统计
  const categoryStatsContainer = document.getElementById("adminCategoryStats")
  categoryStatsContainer.innerHTML = ""

  Object.entries(websitesData).forEach(([category, websites]) => {
    const visits = statsData.categoryVisits[category] || 0
    const websiteCount = websites.length

    const statItem = document.createElement("div")
    statItem.className = "admin-category-stat"
    statItem.innerHTML = `
            <div class="admin-category-name">${categoryNames[category]}</div>
            <div class="admin-category-count">
                <span class="admin-category-visits">${visits} 访问</span>
                <span class="admin-category-websites">${websiteCount}</span>
            </div>
        `
    categoryStatsContainer.appendChild(statItem)
  })

  // 渲染最近访问
  const recentVisitsContainer = document.getElementById("adminRecentVisits")
  recentVisitsContainer.innerHTML = ""

  const recentWebsites = Object.values(statsData.websiteVisits)
    .sort((a, b) => b.visits - a.visits)
    .slice(0, 5)

  if (recentWebsites.length === 0) {
    recentVisitsContainer.innerHTML =
      '<p style="text-align: center; color: var(--text-light); padding: 1rem;">暂无访问记录</p>'
    return
  }

  recentWebsites.forEach((website) => {
    const visitItem = document.createElement("div")
    visitItem.className = "admin-recent-visit"
    visitItem.innerHTML = `
            <div class="admin-recent-icon">
                <i class="fas fa-globe"></i>
            </div>
            <div class="admin-recent-info">
                <div class="admin-recent-name">${website.name}</div>
                <div class="admin-recent-time">${categoryNames[website.category]}</div>
            </div>
            <div class="admin-recent-visits">${website.visits} 次</div>
        `
    recentVisitsContainer.appendChild(visitItem)
  })
}

// 页面加载完成后初始化
document.addEventListener("DOMContentLoaded", () => {
  initializeData()

  // 初始化标签管理器
  tagManager = new TagManager("presetTags", "selectedTags", "customTag")
  editTagManager = new TagManager("editPresetTags", "editSelectedTags", "editCustomTag")

  initializeAddForm()
  initializeEditForm()
  initializeDataManagement()
  initializeFilters()

  renderWebsitesList()
  renderAdminStats()

  // 定期更新统计信息
  setInterval(renderAdminStats, 30000) // 每30秒更新一次
})

// 全局函数（供HTML调用）
window.editWebsite = editWebsite
window.deleteWebsite = deleteWebsite
window.tagManager = tagManager
window.editTagManager = editTagManager
