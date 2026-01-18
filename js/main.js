document.addEventListener("DOMContentLoaded", () => {
  /* Timeline data (sample content; expand as desired) */
  const timelineData = [
    {
      date: "2013",
      title: "Joined Tesco Technology",
      description: "Started as a developer working on internal web tools and operational data processing platforms.",
      tags: ["Java", "Spring", "Data Processing"]
    },
    {
      date: "2015",
      title: "Enterprise Integration",
      description: "Moved into middleware and API engineering; worked on system orchestration and service reliability.",
      tags: ["APIs", "Integration", "Reliability"]
    },
    {
      date: "2017",
      title: "Cloud Migration Design",
      description: "Contributed to migration plans for on‑prem services to AWS, authored initial design documentation.",
      tags: ["AWS", "Migration", "Documentation"]
    },
    {
      date: "2019",
      title: "Microservice Modernization",
      description: "Introduced domain‑driven design and microservice templates improving system modularity.",
      tags: ["DDD", "Microservices", "Templates"]
    },
    {
      date: "2021",
      title: "Solution Design & Architecture",
      description: "Transitioned to design‑heavy role, driving solution patterns and writing architectural docs.",
      tags: ["Architecture", "Design Patterns", "Documentation"]
    },
    {
      date: "2023",
      title: "Technical Leadership",
      description: "Focused on architecture alignment across divisions and initiative‑level design governance.",
      tags: ["Leadership", "Governance", "Cross‑Domain Design"]
    }
  ];

  const container = document.getElementById("timeline-container");
  if (!container) return; // safety check

  timelineData.forEach(item => {
    const node = document.createElement("div");
    node.classList.add("timeline-item");
    node.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <h3>${item.date} — ${item.title}</h3>
        <p>${item.description}</p>
        <div class="tags">${item.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
      </div>
    `;
    container.appendChild(node);
  });
});