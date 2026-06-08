const userData = {
    profile: {
        name: "SHAYANTIKA GHOSH",
        contact: "shayantika.ce.nita@gmail.com | +91-9863849015",
        edu: "B.Tech | Civil Engineering | NIT Agartala | CGPA: 8.69 | SGPA (current): 9.32"
    },
    core: {
        title: "Core Engineering",
        desc: "Specializing in high-rise structural execution and seismic-resistant design.",
        accent: "#B89B82",
        skills: "AutoCAD, Staad.Pro, IS Codes, HEC-RAS, ArcGIS.",
        internships: `
            <b>Summer Intern | National Highway Authority Of India(NHAI)</b> (May 2026 - July 2026)<br>
           Conducted lab material testing and structural load verification for highway components, ROBs, and VUPs while coordinating critical-path connectivity for the Outer Ring Road airport corridor.
            <br><br>
        <b>Winter Intern | Tripura Housing Board</b> (Dec 2025 - Jan 2026)<br>
            Managed execution of a 16-story tower. Focused on seismic resistance design and strict compliance with IS1893 standards.
            <br><br>
            <b>Summer Intern | PWD (Roads & Buildings)</b> (June 2025 - July 2025)<br>
            Monitored concrete casting and material inventory protocols to prevent project delays.
        `,
        projects: `
        <b>Disaster Resilient House</b>: Designed a sustainable, multi-hazard adaptive infrastructure model to enhance the disaster resilience, safety, and long-term climate adaptability of future villages.<br><br>
            <b>Smart Energy Recovery</b>: Structured resource-quantified design using BIM and structural analysis.<br><br>
            <b>Groundwater Recharge System</b>: Integrated permeable pavements and Managed Aquifer Recharge (MAR) with treated wastewater.
        `
    },
    analytics: {
        title: "Data Analytics",
        desc: "Transforming raw data into actionable insights through AI and business intelligence.",
        accent: "#22D3EE",
        skills: "Power BI, Python, SQL, Azure Machine Learning, NLP, LLMs, Statistical Modeling, Trend Analysis.",
        internships: `
            <b>Power BI Intern | Microsoft Elevate</b> (Dec 2025 - Jan 2026)<br>
            Designed interactive dashboards to transform business datasets into structured visual insights.
            <br><br>
            <b>LLM & NLP Intern | VOIS & Edunet</b> (Sep 2025 - Oct 2025)<br>
            Developed NLP workflows for unstructured textual data and conversational analytics.
        `,
        projects: `
            <b>Energy Input-Output Analysis</b>: Multi-variable statistical analysis to evaluate system efficiency.<br><br>
            <b>Groundwater Monitoring Framework</b>: Data-driven system for tracking recharge rates via visualization.
        `
    }
};

function initPortfolio(type) {
    const data = userData[type];
    document.documentElement.style.setProperty('--accent-data', data.accent);
    
    document.getElementById('hero-title').innerText = data.title;
    document.getElementById('hero-desc').innerText = data.desc;
    document.getElementById('dynamic-logo').innerText = type.toUpperCase() + " HUB";
    
    document.getElementById('skills-content').innerText = data.skills;
    document.getElementById('intern-content').innerHTML = data.internships;
    document.getElementById('project-content').innerHTML = data.projects;

    document.getElementById('selector-screen').classList.add('slide-up');
    setTimeout(() => {
        document.getElementById('selector-screen').style.display = 'none';
        document.getElementById('main-content').classList.remove('hidden');
    }, 700);
}

document.addEventListener("DOMContentLoaded", () => {
    const p = userData.profile;
    document.getElementById('user-name').innerText = p.name;
    document.getElementById('user-contact').innerText = p.contact;
    document.getElementById('user-edu').innerText = p.edu;
});
