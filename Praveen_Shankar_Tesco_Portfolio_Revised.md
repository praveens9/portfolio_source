# Praveen Shankar | Engineering Portfolio
**Distributed Systems Engineer | Customer Fulfilment (DMS, FPS, MFC)**
[github.dev.global.tesco.org/pages/in22904092/portfolio-page/](https://github.dev.global.tesco.org/pages/in22904092/portfolio-page/)

---

## 1. Professional Summary
Backend Software Engineer with over **13 years of experience** working on Tesco's Customer Fulfilment platforms. I have contributed to the system's evolution from the early monolithic implementations (DMS) to the current distributed, event-driven architecture (FPS) and the Micro-Fulfilment Centre (MFC) integration.

My primary focus is on **System Continuity and Integration Integrity**. I work on solving domain problems in picking, resource management, and optimization, ensuring that the software remains stable and aligned with warehouse operations.

---

## 2. Key Domain Contributions

### Micro-Fulfilment & Automation (2022–Present)
*   **MFC Integration:** Performed the initial technical analysis for onboarding automation vendors (Vanderlande) and integrating warehouse robotics with the legacy order stream.
*   **Resilience (FPS-CFC Adaptor):** Designed a microservice state machine to handle coordination between FPS and Vanderlande. Addressed out-of-order message scenarios to ensure idempotency and data consistency.
*   **Architectural Analysis:** Conducted a feasibility study for **Active-Active multi-region deployment**, identifying the data sharding strategies required for high availability.

### In-Store Picking & Execution (2020–2024)
*   **Picking Service:** Designed the backend for the in-store Picking App. Implemented a hybrid architecture using **Kafka** for asynchronous planning and **Synchronous APIs** for real-time device interactions.
*   **Tray Identifier:** Led the implementation of the post-pick Tray Identifier system, improving the tracking and auditability of physical logistic units.
*   **Buffer Management:** Redesigned internal buffer logic to separate "Planning" from "Execution," resolving race conditions that caused issues during peak trading.

### Resource Optimization & Algorithms (2014–2020)
*   **Crystal Algorithm (2020):** Integrated the "Crystal" optimization algorithm into the legacy DMS Task Queue. Managed its 60-second runtime by introducing preemptive buffering to prevent operational blocking.
*   **Topaz Algorithm (2016):** Collaborated with Data Science to implement the **Simulated Annealing** algorithm for trolley generation, using distance matrices to reduce picker travel time.
*   **Picking Algorithm G1 (2014):** Implemented early 1-D path improvements and "Aisle Flipping" logic to improve routing efficiency.

---

## 3. System Evolution

### Phase 1: The Monolith & Componentization (2013–2018)
*   **Componentization (2017):** Worked on decoupling the "Picking Component" from the core .NET monolith (DMS), a key step for independent scaling and cloud migration.
*   **Load Management:** Engineered logic for "PureGroup" creation and "Pre-creation of Picktrips," helping to smooth out load spikes at the start of the day.

### Phase 2: Cloud-Native Transition (FPS) (2019–2021)
*   **Service Design:** Designed the **Logistic Unit Service**, one of the first event-driven microservices in FPS. Helped establish patterns for scalability and **Redis** usage.
*   **Infrastructure:** Set up initial Azure IaC patterns (Terraform/Helm) to automate deployments.
*   **Operational Automation:** Built **PickAdmin**, a service using the Kubernetes Java SDK to manage CronJobs dynamically, reducing manual support tasks.

### Phase 3: Resilience & Recoverability (2022–Present)
*   **DLQ Recovery:** Worked on modernizing the Dead Letter Queue (DLQ) processor to ensure message replay capability, improving the system's ability to recover from transient failures.
*   **Observability:** Enhanced monitoring to identify high-activity, risky code paths ("Burning Platforms"), aiding in refactoring prioritization.

---

## 4. Technical Innovation & Lab
*Exploring new technologies to improve engineering workflows.*

*   **System Topology Mapper:** A visualization tool that scans microservice YAML configurations to map dependency graphs (Neo4j/D3.js).
*   **Code Navigation Agent (Lab):** An experimental agent using **LangChain** and **Azure OpenAI** to explore semantic search on codebases.
*   **EmbeddingWorker (Lab):** A dual-pipeline service testing embedding strategies using **QDrant**.
*   **Code Panopticon (Lab):** A dashboard visualizing technical debt by correlating Git churn with complexity.

---

## 5. Summary
I bridge the gap between architectural design and the reality of physical logistics. My work has defined by taking ownership of complex problems—whether it's integrating long-running algorithms, handling distributed message ordering, or ensuring stability for daily warehouse operations.
