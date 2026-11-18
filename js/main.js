// =========================================================================
// XỬ LÝ GIAO DIỆN, ÂM THANH & MODAL CHO CẢ 3 TRANG
// =========================================================================
document.addEventListener("DOMContentLoaded", () => {
  const { profile, learningGoal, portfolioGoal, assignments, conclusion } = SITE_DATA;

  // Cập nhật tên thương hiệu & footer chung trên mọi trang
  const navBrand = document.getElementById("navBrandName");
  if (navBrand) navBrand.textContent = profile.fullName;

  const footerText = document.getElementById("footerText");
  if (footerText) {
    footerText.innerHTML = `
      <strong>${profile.fullName}</strong> &nbsp;•&nbsp;
      MSSV: <strong>${profile.studentId}</strong> &nbsp;•&nbsp;
      Mã lớp: <strong>${profile.className}</strong> &nbsp;•&nbsp;
      Học phần: <strong>${profile.courseName}</strong>
    `;
  }

  // -------------------------------------------------------------------------
  // 1. TRANG GIỚI THIỆU – ABOUT ME (index.html)
  // -------------------------------------------------------------------------
  if (document.getElementById("heroName")) {
    document.getElementById("heroGreeting").textContent = profile.greeting;
    document.getElementById("heroName").textContent = profile.fullName;
    document.getElementById("heroYear").textContent = profile.year;
    document.getElementById("heroMajor").textContent = profile.major;
    document.getElementById("photoCaption").textContent = `♪ ${profile.fullName} ♪`;

    if (profile.avatarUrl) {
      document.getElementById("heroPhotoFrame").innerHTML = `<img src="${profile.avatarUrl}" alt="${profile.fullName}">`;
    }
    if (profile.secondPhotoUrl) {
      document.getElementById("aboutPhotoFrame").innerHTML = `<img src="${profile.secondPhotoUrl}" alt="Ảnh cá nhân">`;
    }

    const infoFields = [
      { label: "Họ và tên", value: profile.fullName },
      {label: "MSV", value: profile.studentId},
      { label: "Ngành học", value: profile.major },
      { label: "Trường", value: profile.school },
      { label: "Lớp/Khóa", value: profile.className },
      { label: "Email", value: profile.email },
      
    ];

    document.getElementById("infoList").innerHTML = infoFields.map(item => `
      <div class="info-item">
        <dt>${item.label}</dt>
        <dd>${item.value}</dd>
      </div>
    `).join("");

    document.getElementById("bioQuote").textContent = profile.quote;
    document.getElementById("hobbyTags").innerHTML = profile.hobbies
      .map(h => `<span class="hobby-chip">${h}</span>`)
      .join("");

    // Render Mục tiêu học tập & định hướng phát triển cá nhân
    document.getElementById("learningGoalTitle").textContent = learningGoal.title;
    document.getElementById("learningGoalSummary").textContent = learningGoal.summary;
    document.getElementById("learningGoalPoints").innerHTML = learningGoal.points
      .map(pt => `<li><span class="dot-badge">✦</span><span>${pt}</span></li>`)
      .join("");

    // Render Mục tiêu của Portfolio
    document.getElementById("portfolioGoalTitle").textContent = portfolioGoal.title;
    document.getElementById("portfolioGoalSummary").textContent = portfolioGoal.summary;
    document.getElementById("portfolioGoalPoints").innerHTML = portfolioGoal.points
      .map(pt => `<li><span class="dot-badge">♪</span><span>${pt}</span></li>`)
      .join("");
  }

  // -------------------------------------------------------------------------
  // 2. TRANG 6 BÀI TẬP (du-an.html)
  // -------------------------------------------------------------------------
  const assignmentsGrid = document.getElementById("assignmentsGrid");
  if (assignmentsGrid) {
    assignmentsGrid.innerHTML = assignments.map((item, idx) => {
      const isDone = item.status.toLowerCase().includes("hoàn thành");
      return `
        <article class="task-card" data-index="${idx}">
          <div>
            <div class="task-top">
              <span class="task-num">${item.code}</span>
              <span class="task-status ${isDone ? '' : 'pending'}">${item.status}</span>
            </div>
            <h3>${item.title}</h3>
            <p>${item.shortDesc}</p>
          </div>
          <button class="task-btn" type="button">Xem & điền chi tiết →</button>
        </article>
      `;
    }).join("");

    document.querySelectorAll(".task-card").forEach(card => {
      card.addEventListener("click", () => {
        const idx = Number(card.dataset.index);
        openTaskModal(assignments[idx]);
      });
    });

    // Nếu mở du-an.html kèm ?bai=1..6 từ trang Tổng kết thì tự bật modal bài đó
    const params = new URLSearchParams(window.location.search);
    const baiParam = parseInt(params.get("bai"), 10);
    if (!isNaN(baiParam) && baiParam >= 1 && baiParam <= assignments.length) {
      openTaskModal(assignments[baiParam - 1]);
    }
  }

  // -------------------------------------------------------------------------
  // 3. TRANG TỔNG KẾT – CONCLUSION (tong-ket.html)
  // -------------------------------------------------------------------------
  const conclusionSection = document.getElementById("conclusionContent");
  if (conclusionSection) {
    document.getElementById("expFeelingsText").textContent = conclusion.experienceAndFeelings;
    document.getElementById("keySkillsText").textContent = conclusion.keyKnowledgeAndSkills;
    document.getElementById("highlightChallengesText").textContent = conclusion.highlightAndChallenges;

    const doneCount = assignments.filter(a => a.status.toLowerCase().includes("hoàn thành")).length;
    const progressEl = document.getElementById("progressBadge");
    if (progressEl) {
      progressEl.textContent = `🌟 Tổng kết · Đã hoàn thành ${doneCount}/${assignments.length} bài tập`;
    }

    // Render danh sách đường liên kết dẫn đến các trang bài tập đã hoàn thành
    const linksContainer = document.getElementById("completedLinksList");
    if (linksContainer) {
      linksContainer.innerHTML = assignments.map((item, idx) => {
        const isDone = item.status.toLowerCase().includes("hoàn thành");
        // Ưu tiên link sản phẩm trực tiếp nếu có, không thì dẫn thẳng tới bài đó trên du-an.html
        const targetHref = item.productLink ? item.productLink : `du-an.html?bai=${idx + 1}`;
        const targetAttr = item.productLink ? `target="_blank" rel="noopener"` : "";
        return `
          <a class="completed-link-card" href="${targetHref}" ${targetAttr}>
            <div class="clc-left">
              <span class="clc-badge">${item.code}</span>
              <div>
                <div class="clc-title">${item.title}</div>
                <div class="clc-sub">${isDone ? "✅ Đã hoàn thành" : "⏳ Đang cập nhật"}</div>
              </div>
            </div>
            <span class="clc-arrow">${item.productLink ? "Mở sản phẩm ↗" : "Xem bài →"}</span>
          </a>
        `;
      }).join("");
    }
  }

  // -------------------------------------------------------------------------
  // MODAL CHI TIẾT BÀI TẬP
  // -------------------------------------------------------------------------
  const modal = document.getElementById("taskModal");
  if (modal) {
    document.getElementById("closeModal").addEventListener("click", () => modal.classList.remove("open"));
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("open");
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") modal.classList.remove("open");
    });
  }

  function openTaskModal(task) {
    document.getElementById("modalBadge").textContent = `${task.code} · ${task.status}`;
    document.getElementById("modalTitle").textContent = task.title;
    document.getElementById("modalSubtitle").textContent = task.shortDesc;
    document.getElementById("modalGoal").textContent = task.goal;
    document.getElementById("modalProcess").textContent = task.process;
    document.getElementById("modalTools").textContent = task.toolsUsed
    document.getElementById("modalErrors").textContent = task.errorsAndFix;
    document.getElementById("modalResult").textContent = task.result;

    const linkEl = document.getElementById("modalLink");
    if (task.productLink) {
      linkEl.href = task.productLink;
      linkEl.style.display = "inline-flex";
    } else {
      linkEl.style.display = "none";
    }
    const videoEl = document.getElementById("modalVideoLink");
    if (videoEl) {
      if (task.videoLink) {
        videoEl.href = task.videoLink;
        videoEl.style.display = "inline-flex";
      } else {
        videoEl.style.display = "none";
      }
    }
    modal.classList.add("open");
  }

  // -------------------------------------------------------------------------
  // ÂM THANH KALIMBA & GIAI ĐIỆU NỀN (WEB AUDIO API)
  // -------------------------------------------------------------------------
  let audioCtx = null;
  function getAudioCtx() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === "suspended") audioCtx.resume();
    return audioCtx;
  }

  function playKalimbaNote(freq) {
    const ctx = getAudioCtx();
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const overtone = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, now);

    overtone.type = "triangle";
    overtone.frequency.setValueAtTime(freq * 2, now);

    const overtoneGain = ctx.createGain();
    overtoneGain.gain.setValueAtTime(0.08, now);
    overtoneGain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.24, now + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0008, now + 1.3);

    osc.connect(gain);
    overtone.connect(overtoneGain);
    overtoneGain.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    overtone.start(now);
    osc.stop(now + 1.35);
    overtone.stop(now + 1.35);
  }

  document.querySelectorAll(".k-key").forEach(btn => {
    btn.addEventListener("click", () => {
      const freq = parseFloat(btn.dataset.freq);
      playKalimbaNote(freq);
      btn.classList.add("playing");
      setTimeout(() => btn.classList.remove("playing"), 180);
    });
  });

  let bgmTimer = null;
  const melody = [523.25, 659.25, 783.99, 659.25, 587.33, 783.99, 880.00, 783.99];
  let step = 0;

  const bgmBtn = document.getElementById("bgmToggle");
  if (bgmBtn) {
    bgmBtn.addEventListener("click", () => {
      const icon = document.getElementById("bgmIcon");
      const text = document.getElementById("bgmText");
      if (bgmTimer) {
        clearInterval(bgmTimer);
        bgmTimer = null;
        icon.textContent = "▶";
        text.textContent = "Giai điệu nền";
      } else {
        playKalimbaNote(melody[step % melody.length]);
        step++;
        bgmTimer = setInterval(() => {
          playKalimbaNote(melody[step % melody.length]);
          step++;
        }, 650);
        icon.textContent = "❚❚";
        text.textContent = "Đang phát nhạc";
      }
    });
  }
  // -------------------------------------------------------------------------
  // HIỆU ỨNG RÊ CHUỘT / CHẠM TẠO NỐT NHẠC BAY & TƯƠNG TÁC NỀN
  // -------------------------------------------------------------------------
  const noteIcons = ["♪", "♫", "♬", "♩", "✨"];
  const noteColors = ["#6366F1", "#0EA5E9", "#FB7185", "#10B981", "#8B5CF6"];
  let lastNoteTime = 0;

  function spawnFloatingNote(x, y) {
    const now = Date.now();
    if (now - lastNoteTime < 110) return; // Giới hạn mật độ để mượt máy
    lastNoteTime = now;

    const note = document.createElement("span");
    note.className = "cursor-note";
    note.textContent = noteIcons[Math.floor(Math.random() * noteIcons.length)];
    note.style.left = `${x}px`;
    note.style.top = `${y}px`;
    note.style.color = noteColors[Math.floor(Math.random() * noteColors.length)];
    document.body.appendChild(note);

    setTimeout(() => note.remove(), 1100);
  }

  // Rê chuột trên máy tính -> thả nốt nhạc + đẩy nhẹ 4 sticker nền
  const bgStickers = document.querySelectorAll(".bg-sticker");
  document.addEventListener("mousemove", (e) => {
    spawnFloatingNote(e.clientX, e.clientY);

    const moveX = (e.clientX / window.innerWidth - 0.5) * 24;
    const moveY = (e.clientY / window.innerHeight - 0.5) * 24;
    bgStickers.forEach((st, index) => {
      const factor = index % 2 === 0 ? 1 : -1;
      st.style.marginLeft = `${moveX * factor}px`;
      st.style.marginTop = `${moveY * factor}px`;
    });
  });

  // Chạm tay trên điện thoại -> thả nốt nhạc tại điểm chạm
  document.addEventListener("touchstart", (e) => {
    if (e.touches.length > 0) {
      spawnFloatingNote(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });
  // -------------------------------------------------------------------------
  // HIỆU ỨNG ENTRANCE KHI CUỘN TRANG (SCROLL REVEAL STAGGERED)
  // -------------------------------------------------------------------------
  const revealTargets = document.querySelectorAll(
    ".section-head, .glass-box, .goal-card, .task-card, .summary-card, .sum-item, .completed-link-card"
  );

  revealTargets.forEach((el, index) => {
    el.classList.add("reveal-item");
    // Tạo độ trễ nối tiếp nhẹ (tối đa 0.35s) cho các thẻ đứng cạnh nhau
    const delay = (index % 4) * 0.08;
    el.style.transitionDelay = `${delay}s`;
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          // Xóa transitionDelay sau khi hiện xong để hiệu ứng hover phản hồi tức thì
          setTimeout(() => {
            entry.target.style.transitionDelay = "0s";
          }, 800);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealTargets.forEach((el) => revealObserver.observe(el));
});
