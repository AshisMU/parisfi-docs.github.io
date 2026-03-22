// Documentation Sidebar Injector

const NAVIGATION = [
    {
        title: "Getting Started",
        items: [
            { id: "index", label: "Introduction & Settings", href: "index.html" }
        ]
    },
    {
        title: "Core Features",
        items: [
            { id: "dashboard", label: "Dashboard & Uploads", href: "dashboard.html" },
            { id: "viewer", label: "Document Viewer", href: "viewer.html" },
            { id: "knowledge", label: "Knowledge Base", href: "knowledge.html" },
            { id: "collections", label: "Collections", href: "collections.html" },
            { id: "taxonomy", label: "Taxonomy", href: "taxonomy.html" },
            { id: "audit", label: "Audit Log", href: "audit.html" },
            { id: "activity-log", label: "Activity Log", href: "activity-log.html" }
        ]
    },
    {
        title: "Advanced Capabilities",
        items: [
            { id: "prompts", label: "Prompt Library", href: "prompts.html" },
            { id: "tools", label: "Agent Tool Factory", href: "tools.html" },
            { id: "schemas", label: "JSON Schemas", href: "schemas.html" },
            { id: "workspaces", label: "Workspaces (Linear)", href: "workspaces.html" },
            { id: "orchestration", label: "Orchestration Pipelines", href: "orchestration.html" },
            { id: "templates", label: "Template Fill Engine", href: "templates.html" },
            { id: "variable-register", label: "Variable Register", href: "variable-register.html" },
            { id: "fallbacks", label: "System Fallbacks", href: "fallbacks.html" }
        ]
    },
    {
        title: "Best Practices",
        items: [
            { id: "workflows", label: "Professional Workflows", href: "workflows.html" },
            { id: "troubleshooting", label: "Troubleshooting", href: "troubleshooting.html" },
            { id: "tutorials", label: "Tutorials", href: "tutorials.html" },
            { id: "glossary", label: "Glossary", href: "glossary.html" }
        ]
    }
];

function initSidebar(activeId) {
    const container = document.getElementById('sidebar-container');
    if (!container) return; // Exit if not present

    // Build Header
    let html = `
        <div class="sidebar-header">
            <a href="../index.html" style="display: flex; align-items: center; gap: 0.5rem; text-decoration: none;">
                <i class="fas fa-layer-group text-blue-400" style="font-size: 1.5rem;"></i>
                <h1>Parsifi</h1>
            </a>
        </div>
        <div class="sidebar-nav">
    `;

    // Build Sections
    NAVIGATION.forEach(section => {
        html += `<div class="nav-section">`;
        html += `<div class="nav-section-title">${section.title}</div>`;

        section.items.forEach(item => {
            const isActive = item.id === activeId ? 'active' : '';
            html += `<a href="${item.href}" class="nav-item ${isActive}">
                        ${item.label}
                     </a>`;
        });

        html += `</div>`;
    });

    html += `
        </div>
        <div style="padding: 1.5rem; text-align: center; border-top: 1px solid rgba(255,255,255,0.05);">
            <a href="../index.html" class="text-sm text-gray-400 hover:text-white transition" style="text-decoration: none;">
                <i class="fas fa-arrow-left mr-2"></i> Back to Marketing Site
            </a>
        </div>
    `;

    container.innerHTML = html;

    // Build Page Nav (Next/Prev) if container exists
    buildPageNavigation(activeId);
}

function buildPageNavigation(activeId) {
    const container = document.getElementById('page-navigation');
    if (!container) return;

    // Flatten items
    const flatItems = NAVIGATION.flatMap(sec => sec.items);
    const currentIndex = flatItems.findIndex(item => item.id === activeId);

    if (currentIndex === -1) return;

    let html = '';

    // Prev Button
    if (currentIndex > 0) {
        const prev = flatItems[currentIndex - 1];
        html += `
            <a href="${prev.href}" class="prev">
                <i class="fas fa-arrow-left"></i>
                <div>
                    <span class="nav-label">Previous</span>
                    <span class="nav-title">${prev.label}</span>
                </div>
            </a>
        `;
    } else {
        html += `<div></div>`; // Spacer
    }

    // Next Button
    if (currentIndex < flatItems.length - 1) {
        const next = flatItems[currentIndex + 1];
        html += `
            <a href="${next.href}" class="next">
                <div>
                    <span class="nav-label">Next</span>
                    <span class="nav-title">${next.label}</span>
                </div>
                <i class="fas fa-arrow-right"></i>
            </a>
        `;
    }

    container.innerHTML = html;
}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('mobile-menu-btn');
    const sidebar = document.getElementById('sidebar-container');

    if (btn && sidebar) {
        btn.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }
});
