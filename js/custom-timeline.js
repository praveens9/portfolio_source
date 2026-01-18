document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("timeline");

  try {
    const [timelineResponse, highlightsResponse] = await Promise.all([
        fetch("Final_Timeline_Data.json?v=4"),
        fetch("Yearly_Highlights.json?v=4")
    ]);
    
    const data = await timelineResponse.json();
    const highlights = await highlightsResponse.json();

    const MILESTONES = {
        "2022": "Promoted to SDE-2",
        "2019": "Role Change: SDE-1",
        "2016": "Promoted to Principal Software Engineer",
        "2013": "Joined Tesco: Senior Software Engineer",
        "2011": "Promoted to Senior Software Engineer (Infosys)",
        "2009": "Promoted to Software Engineer (Infosys)",
        "2008": "Career Started: Trainee (Infosys)"
    };

    // Learning Journey Data (Key technical evolution points)
    const LEARNING_JOURNEY = {
        "2025": [
            "Active-Active Architecture Strategies",
            "C4 Architecture Views",
            "Large Scale Automation Integration",
            "High-Volume Event Stream Ingestion",
            "Unified Analytics for MFC & FPS"
        ],
        "2024": [
            "Micro-Fulfilment Systems Design",
            "Warehouse Management Systems (WMS)",
            "Build vs Buy Engineering Analysis",
            "CI/CD Pipeline Standardization",
            "Multi-Module Microservice Refactoring"
        ],
        "2022": [
            "State Machine Implementation",
            "Out-of-Order Event Handling",
            "Disaster Recovery (DR) Readiness",
            "Automated Message Replay Systems",
            "Integration with Third-Party Hardware"
        ],
        "2021": [
            "Task Queues & Dynamic Scheduling",
            "Long-Running Process Management",
            "Behavior Driven Development (BDD)",
            "Kubernetes Java SDK / Operators",
            "Idempotent API Design"
        ],
        "2019": [
            "Event Driven Microservices",
            "Domain Driven Design (DDD)",
            "Horizontal Scalability Patterns",
            "Redis Structured Data Storage",
            "Cloud Native Transition (Java/Spring)"
        ],
        "2018": [
            "Microservices Integration Patterns",
            "Non-Relational Databases (NoSQL)",
            "Message-Driven Architecture (Kafka)",
            "Legacy Monolith Decoupling",
            "Secure Identity Integration"
        ],
        "2017": [
            "E2E Application Design",
            "Testability & Automated Testing",
            "Monolith Componentization",
            "Rules Engine Development",
            "Optimizing High-CPU Load Spikes"
        ],
        "2016": [
            "Topaz (Simulated Annealing) Algorithms",
            "Geospatial Data Processing",
            "Dynamic Optimization Logic",
            "Route Planning Efficiency",
            "Distance Matrix Integration"
        ],
        "2015": [
            "On-Demand Task Generation",
            "Complex Rule-Based Orchestration",
            "Performance Engineering",
            "Queue Buffering & Throttling",
            "Van Sequencing Logic"
        ],
        "2014": [
            "Domain Modeling Foundations",
            "Clean Code Principles (SOLID)",
            "Structural Design Patterns",
            "Large Dataset Processing",
            "Algorithm G1: 1-D Path Optimization"
        ],
        "2011": [
            "Full Stack .NET Development",
            "Batch Processing Optimization",
            "Database Design & Stored Procs",
            "Interactive UI Implementation",
            "Mainframe Integration Patterns"
        ]
    };

    // Helper: Parse date string to Date object
    const parseDate = (dateStr) => dateStr ? new Date(dateStr) : null;

    // Sort and group by year of END date (last contribution)
    const sorted = data.sort((a, b) => {
        const dateA = parseDate(a.period.end) || new Date();
        const dateB = parseDate(b.period.end) || new Date();
        return dateB - dateA;
    });

    const grouped = sorted.reduce((acc, entry) => {
      const date = parseDate(entry.period.end);
      const year = date ? date.getFullYear() : "Ongoing";
      if (!acc[year]) acc[year] = [];
      acc[year].push(entry);
      return acc;
    }, {});

    // Merge Years
    const highlightYears = Object.keys(highlights);
    const repoYears = Object.keys(grouped);
    const milestoneYears = Object.keys(MILESTONES);
    const learningYears = Object.keys(LEARNING_JOURNEY);
    const allYears = new Set([...repoYears, ...highlightYears, ...milestoneYears, ...learningYears].filter(y => y !== "Ongoing" && y !== "null"));
    
    // Sort years descending
    const sortedYears = Array.from(allYears).sort((a, b) => parseInt(b) - parseInt(a));

    let timelineHTML = '<div class="timeline-line"></div>';
    let side = "left";

    sortedYears.forEach(year => {
      const entries = grouped[year] || [];
      
      // 1. Render Year Header
      timelineHTML += `<div class="timeline-year">${year}</div>`;

      // 2. Inject Career Milestone
      if (MILESTONES[year]) {
          timelineHTML += `
            <div class="timeline-item ${side} milestone-item">
                <div class="timeline-dot milestone-dot"></div>
                <div class="connector-line milestone-connector"></div>
                <div class="milestone-text-wrapper">
                    <span class="milestone-text-side">${MILESTONES[year]}</span>
                </div>
            </div>
          `;
          side = side === "left" ? "right" : "left";
      }

      // 3. Inject Learning Journey as a subtle card
      if (LEARNING_JOURNEY[year]) {
          const learningsList = LEARNING_JOURNEY[year].slice(0, 3).map(l => `<li>${l}</li>`).join("");
          timelineHTML += `
            <div class="timeline-item ${side} learning-card-item">
                <div class="timeline-dot learning-dot"></div>
                <div class="connector-line"></div>
                <div class="content-box">
                    <ul class="learning-list-inline">${learningsList}</ul>
                </div>
            </div>
          `;
          side = side === "left" ? "right" : "left";
      }

      // 4. Inject Year Summary (Highlight)
      if (highlights[year]) {
          const highlight = highlights[year];
          const summaryText = highlight.summary || "";
          const detailList = highlight.details 
            ? `<ul class="summary-list">${highlight.details.map(pt => `<li>${pt}</li>`).join("")}</ul>`
            : "";

          timelineHTML += `
            <div class="timeline-item ${side} year-summary-item" data-repo="Review-${year}">
              <div class="timeline-dot highlight-dot"></div>
              <div class="connector-line"></div>
              <div class="content-box">
                <span class="type-badge highlight-badge">Year in Review</span>
                <h3 class="repo-name">${year} Highlights</h3>
                <p class="repo-snippet">${summaryText}</p>
              </div>
            </div>
            
            <div class="timeline-card" data-repo="Review-${year}">
              <h3>${year} Highlights</h3>
              <div class="summary">
                <p><strong>${summaryText}</strong></p>
                ${detailList}
              </div>
              <button class="close-card">Close</button>
            </div>
          `;
          side = side === "left" ? "right" : "left"; 
      }

      // 4. Render Project Entries
      entries.forEach(entry => {
        // Extract Data
        const title = entry.project;
        // Role badge removed here as per request
        const summaryArr = Array.isArray(entry.summary) ? entry.summary : [entry.summary];
        const summaryHTML = summaryArr.map(s => `<li>${s}</li>`).join("");
        
        // Generate Tech Chips
        let techHTML = "";
        if (entry.technologies) {
            techHTML = `<div class="tech-stack">`;
            for (const [category, skills] of Object.entries(entry.technologies)) {
                skills.forEach(skill => {
                    techHTML += `<span class="tech-badge ${category.toLowerCase().replace(/\s/g, '-')}">${skill}</span>`;
                });
            }
            techHTML += `</div>`;
        }

        const cardId = title.replace(/\s+/g, '-') + "-" + year;
        let snippet = summaryArr.length > 0 ? summaryArr[0] : "Contributions to the project.";
        if (snippet.length > 120) snippet = snippet.substring(0, 120) + "...";

        timelineHTML += `
          <div class="timeline-item ${side}" data-repo="${cardId}">
              <div class="timeline-dot project-dot"></div>
              <div class="connector-line"></div>
              <div class="content-box">
                  <h3 class="repo-name">${title}</h3>
                  <p class="repo-snippet">${snippet}</p>
                  ${techHTML}
              </div>
            </div>

            <div class="timeline-card" data-repo="${cardId}">
              <h3>${title}</h3>
              <div class="tech-stack-modal">${techHTML}</div>
              <div class="summary">
                <ul>${summaryHTML}</ul>
              </div>
              <button class="close-card">Close</button>
            </div>
        `;
        side = side === "left" ? "right" : "left"; 
      });
    });

    container.innerHTML = timelineHTML;

    // -----------------------------
    // Overlay & Logic
    // -----------------------------
    let overlay = document.getElementById("overlay");
    if (!overlay) {
        overlay = document.createElement("div");
        overlay.id = "overlay";
        document.body.appendChild(overlay);
    }

    container.addEventListener("click", e => {
      const item = e.target.closest(".timeline-item");
      if (item) {
        document.querySelectorAll(".timeline-card").forEach(c => c.classList.remove("active"));
        overlay.classList.remove("active");
        
        const repoName = item.getAttribute("data-repo");
        const card = document.querySelector(`.timeline-card[data-repo="${repoName}"]`);
        if (card) {
          card.classList.add("active");
          overlay.classList.add("active");
        }
      }
    });

    const closeAll = () => {
        overlay.classList.remove("active");
        document.querySelectorAll(".timeline-card").forEach(c => c.classList.remove("active"));
    };

    overlay.addEventListener("click", closeAll);
    document.querySelectorAll(".close-card").forEach(btn => btn.addEventListener("click", (e) => { e.stopPropagation(); closeAll(); }));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeAll(); });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".timeline-item").forEach(item => observer.observe(item));

  } catch (err) {
    console.error("Timeline load error:", err);
    container.innerHTML = "<p class='error'>Unable to load timeline data.</p>";
  }
});
