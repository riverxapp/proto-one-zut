<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>CRM Dashboard</title>
  <meta name="description" content="Internal CRM dashboard — contacts, deals, and activity overview." />
  <style>
    :root{
      --bg:#f8fafc;
      --card:#ffffff;
      --muted:#6b7280;
      --accent:#0ea5a4;
      --glass: rgba(255,255,255,0.6);
      --radius:12px;
      --shadow: 0 6px 18px rgba(16,24,40,0.06);
      --success:#059669;
      --danger:#dc2626;
      --max-width:1200px;
      --sidebar-width:280px;
      --text:#0f172a;
    }
    @media (prefers-color-scheme:dark){
      :root{
        --bg:#0b1220;
        --card:#071022;
        --muted:#9aa3b2;
        --accent:#06b6d4;
        --glass: rgba(10,14,20,0.6);
        --shadow: 0 8px 30px rgba(2,6,23,0.6);
        --text:#e6eef7;
      }
    }

    html,body{height:100%;margin:0;font-family:Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; background:var(--bg); color:var(--text); -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale;}
    *{box-sizing:border-box}
    a{color:inherit;text-decoration:none}
    .container{max-width:var(--max-width);margin:0 auto;padding:20px;}
    .layout{display:flex;gap:20px;align-items:stretch;min-height:100vh;padding-bottom:20px;}

    /* Sidebar */
    .sidebar{
      width:var(--sidebar-width);
      background:linear-gradient(180deg, rgba(255,255,255,0.8), rgba(255,255,255,0.6));
      border-radius:12px;
      padding:18px;
      box-shadow:var(--shadow);
      position:relative;
      min-height:420px;
      flex-shrink:0;
    }
    @media (prefers-color-scheme:dark){
      .sidebar{background:linear-gradient(180deg, rgba(7,16,34,0.6), rgba(7,16,34,0.45));}
    }
    .brand{display:flex;align-items:center;gap:10px;margin-bottom:14px}
    .brand h1{font-size:18px;margin:0}
    .badge{background:#eef2ff;color:#3730a3;font-weight:600;padding:4px 8px;border-radius:999px;font-size:12px}
    @media (prefers-color-scheme:dark){
      .badge{background:#0f172a;color:#7dd3fc;}
    }

    nav ul{list-style:none;padding:0;margin:0}
    nav li{margin:6px 0}
    .nav-link{
      display:flex;align-items:center;gap:12px;padding:10px;border-radius:10px;color:var(--muted);font-weight:600;transition:background .18s,color .18s;
    }
    .nav-link svg{width:18px;height:18px;flex-shrink:0;opacity:0.9}
    .nav-link:hover{background:rgba(99,102,241,0.06);color:var(--text)}
    @media (prefers-color-scheme:dark){
      .nav-link:hover{background:rgba(15,23,42,0.5);color:var(--text)}
      .nav-link{color:var(--muted)}
    }
    .separator{height:1px;background:rgba(15,23,42,0.06);margin:12px 0;border-radius:2px}
    @media (prefers-color-scheme:dark){
      .separator{background:rgba(255,255,255,0.03)}
    }

    /* Main column */
    .main{
      flex:1;
      min-height:80vh;
      display:flex;
      flex-direction:column;
      gap:16px;
      width:100%;
    }
    header.topbar{
      display:flex;align-items:center;justify-content:space-between;padding:14px;border-radius:12px;
      background:var(--card);box-shadow:var(--shadow);
    }
    .top-left{display:flex;align-items:center;gap:12px}
    .title{line-height:1}
    .title h2{margin:0;font-size:18px}
    .title p{margin:0;color:var(--muted);font-size:13px}
    .actions{display:flex;align-items:center;gap:8px}
    .search{
      display:flex;align-items:center;gap:8px;background:var(--glass);padding:8px;border-radius:10px;border:1px solid rgba(15,23,42,0.04);
      min-width:220px;
    }
    .search input{border:0;background:transparent;outline:0;font-size:14px;width:100%}
    .btn{padding:8px 12px;border-radius:10px;border:0;background:#eef2ff;color:var(--text);font-weight:600;cursor:pointer}
    .btn.primary{background:linear-gradient(90deg,var(--accent),#7c3aed);color:#fff}
    .btn.ghost{background:transparent;border:1px solid rgba(15,23,42,0.06)}
    @media (prefers-color-scheme:dark){
      .btn{background:rgba(255,255,255,0.03);color:var(--text);border:1px solid rgba(255,255,255,0.03)}
      .btn.ghost{border:1px solid rgba(255,255,255,0.06)}
    }

    /* Stats */
    .stats-grid{display:grid;grid-template-columns:repeat(1,1fr);gap:12px}
    @media(min-width:640px){.stats-grid{grid-template-columns:repeat(2,1fr)}}
    @media(min-width:1024px){.stats-grid{grid-template-columns:repeat(4,1fr)}}
    .stat{
      background:var(--card);padding:14px;border-radius:12px;box-shadow:var(--shadow);display:flex;justify-content:space-between;align-items:center;
    }
    .stat .label{font-size:12px;color:var(--muted);text-transform:uppercase;letter-spacing:0.06em}
    .stat .value{font-size:22px;font-weight:700;margin-top:6px}
    .pill{padding:6px 8px;border-radius:999px;font-size:12px;font-weight:700}

    /* Content layout */
    .content-grid{display:grid;grid-template-columns:1fr;gap:16px}
    @media(min-width:1024px){.content-grid{grid-template-columns:2fr 1fr}}
    .card{background:var(--card);padding:16px;border-radius:12px;box-shadow:var(--shadow)}
    .card h3{margin:0 0 8px 0;font-size:14px}
    table{width:100%;border-collapse:collapse;font-size:14px}
    thead th{text-align:left;font-size:12px;color:var(--muted);text-transform:uppercase;padding:10px 8px}
    tbody td{padding:12px 8px;border-top:1px solid rgba(15,23,42,0.04)}
    @media (prefers-color-scheme:dark){
      tbody td{border-top:1px solid rgba(255,255,255,0.03)}
    }
    tr:hover td{background:rgba(99,102,241,0.03)}
    .owner-sub{font-size:12px;color:var(--muted);margin-top:6px}

    .avatar{
      width:40px;height:40px;border-radius:10px;background:linear-gradient(180deg,#eef2ff,#e0f2fe);display:inline-flex;align-items:center;justify-content:center;font-weight:700;color:var(--text)
    }
    @media (prefers-color-scheme:dark){
      .avatar{background:linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));color:var(--text)}
    }

    .stage{display:inline-flex;padding:6px 8px;border-radius:999px;font-weight:700;font-size:12px}
    .stage.neg{background:#fef3c7;color:#92400e}
    .stage.prop{background:#dbeafe;color:#1e40af}
    .stage.disc{background:#ede9fe;color:#3730a3}
    .stage.contract{background:#dcfce7;color:#065f46}
    .stage.qual{background:#f3e8ff;color:#6b21a8}
    .stage.other{background:#f3f4f6;color:#111827}

    .activity-item{display:flex;gap:12px;align-items:flex-start;padding:8px;border-radius:8px}
    .activity-item .meta{font-size:13px}
    .activity-item .time{font-size:12px;color:var(--muted);margin-top:6px}

    /* Footer spacer */
    .spacer{height:12px}

    /* Mobile: hide sidebar, show menu */
    .mobile-header{
      display:none;
    }
    .mobile-menu-btn{display:none}
    @media(max-width:1023px){
      .sidebar{display:none}
      .mobile-header{display:flex;align-items:center;gap:10px}
      .mobile-menu-btn{display:inline-flex}
      .container{padding:12px;}
      .layout{gap:12px;}
    }

    /* Offcanvas panel for mobile navigation */
    .offcanvas{
      position:fixed;inset:0;background:rgba(2,6,23,0.45);display:none;align-items:stretch;z-index:60;
    }
    .offcanvas.open{display:flex}
    .offcanvas .panel{
      width:260px;background:var(--card);padding:18px;border-radius:12px;margin:40px 12px;box-shadow:var(--shadow);height:calc(100% - 80px);overflow:auto;
    }
    .close-btn{background:transparent;border:0;color:var(--muted);font-weight:700;padding:8px;cursor:pointer}

    /* small helpers */
    .muted{color:var(--muted)}
    .right{margin-left:auto}
    .ks-sm{font-size:12px}

    /* Utility for overflow scrolling tables on small screens */
    .scroll-x{overflow:auto;-webkit-overflow-scrolling:touch}
  </style>
</head>
<body>
  <div class="container" role="application" aria-label="CRM Dashboard">
    <div class="layout">

      <!-- Sidebar (desktop) -->
      <aside class="sidebar" aria-label="Primary Navigation">
        <div class="brand">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 10.5L12 3l9 7.5" stroke="#7c3aed" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 22V12h6v10" stroke="#06b6d4" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <div>
            <h1>CRM</h1>
            <div class="ks-sm muted">Customer Relationship</div>
          </div>
          <div style="margin-left:auto"><span class="badge">Beta</span></div>
        </div>

        <nav>
          <ul>
            <li><a class="nav-link" href="/dashboard" aria-current="page"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.5L12 3l9 7.5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 22V12h6v10" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Overview</span></a></li>
            <li><a class="nav-link" href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke-width="1.6"/><circle cx="9" cy="7" r="4" stroke-width="1.6"/></svg><span>Contacts</span></a></li>
            <li><a class="nav-link" href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="7" width="20" height="14" rx="2" stroke-width="1.6"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke-width="1.6"/></svg><span>Deals</span></a></li>
            <li><a class="nav-link" href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9 11l3 3L22 4" stroke-width="1.6"/><path d="M2 20h7" stroke-width="1.6"/><path d="M2 14h7" stroke-width="1.6"/><path d="M2 8h7" stroke-width="1.6"/></svg><span>Tasks</span></a></li>
            <li><a class="nav-link" href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18" stroke-width="1.6"/><path d="M7 13l3-3 3 3 4-4" stroke-width="1.6"/></svg><span>Reports</span></a></li>
            <li><div class="separator" role="separator"></div></li>
            <li><a class="nav-link" href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke-width="1.6"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83" stroke-width="1.2"/></svg><span>Settings</span></a></li>
          </ul>
        </nav>
      </aside>

      <!-- Main content area -->
      <main class="main" role="main">
        <!-- Top header -->
        <header class="topbar" role="banner" aria-label="Top Bar">
          <div class="top-left">
            <div class="mobile-header" aria-hidden="true">
              <!-- Placeholder for mobile header controls if needed -->
            </div>
            <div>
              <div style="display:flex;align-items:center;gap:10px">
                <button class="mobile-menu-btn btn ghost" id="openMobileNav" aria-controls="mobile-navigation" aria-expanded="false" title="Open navigation" style="display:none">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
                </button>
                <div class="title">
                  <h2>Dashboard</h2>
                  <p>Overview of your CRM activity</p>
                </div>
              </div>
            </div>
          </div>

          <div class="actions" role="region" aria-label="Top Actions">
            <form class="search" role="search" aria-label="Search contacts and deals" onsubmit="return false;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M21 21l-4.35-4.35" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="11" cy="11" r="6" stroke="currentColor" stroke-width="1.6"/></svg>
              <input type="search" placeholder="Search contacts, deals..." aria-label="Search" />
            </form>
            <button class="btn ghost" title="Create new contact" aria-label="New Contact" style="display:none">New Contact</button>
            <button class="btn" title="Create new contact" aria-label="New Contact" style="display:inline-block">New Contact</button>
            <button class="btn primary" title="Create new deal" aria-label="New Deal">New Deal</button>
          </div>
        </header>

        <!-- Stats -->
        <section aria-label="Key metrics">
          <div class="stats-grid" role="list">
            <div class="stat" role="listitem">
              <div>
                <div class="label">Total Contacts</div>
                <div class="value">12,482</div>
              </div>
              <div aria-hidden="true">
                <span class="pill" style="background:#ecfdf5;color:#065f46">+3.1%</span>
              </div>
            </div>

            <div class="stat" role="listitem">
              <div>
                <div class="label">Open Deals</div>
                <div class="value">148</div>
              </div>
              <div aria-hidden="true">
                <span class="pill" style="background:#fff1f2;color:#991b1b">-1.2%</span>
              </div>
            </div>

            <div class="stat" role="listitem">
              <div>
                <div class="label">Monthly Revenue</div>
                <div class="value">$238k</div>
              </div>
              <div aria-hidden="true">
                <span class="pill" style="background:#ecfdf5;color:#065f46">+5.6%</span>
              </div>
            </div>

            <div class="stat" role="listitem">
              <div>
                <div class="label">Churn</div>
                <div class="value">1.8%</div>
              </div>
              <div aria-hidden="true">
                <span class="pill" style="background:#fff1f2;color:#991b1b">-0.2%</span>
              </div>
            </div>
          </div>
        </section>

        <section class="content-grid" aria-label="Main content panels">
          <!-- Deals table -->
          <article class="card" aria-labelledby="dealsHeading">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
              <h3 id="dealsHeading">Active Deals</h3>
              <div class="muted ks-sm">5 deals</div>
            </div>

            <div class="scroll-x" style="overflow:auto;">
              <table role="table" aria-describedby="dealsHeading">
                <thead>
                  <tr>
                    <th scope="col">Deal</th>
                    <th scope="col">Owner</th>
                    <th scope="col">Stage</th>
                    <th scope="col">Value</th>
                    <th scope="col">Updated</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div style="display:flex;gap:10px;align-items:center">
                        <div class="avatar" aria-hidden="true">AC</div>
                        <div>
                          <div style="font-weight:700">Acme Corp Renewal</div>
                          <div class="owner-sub muted">Acme</div>
                        </div>
                      </div>
                    </td>
                    <td>Alex Murphy</td>
                    <td><span class="stage neg" aria-hidden="true">Negotiation</span></td>
                    <td>$48,000</td>
                    <td class="muted">2h ago</td>
                  </tr>

                  <tr>
                    <td>
                      <div style="display:flex;gap:10px;align-items:center">
                        <div class="avatar" aria-hidden="true">GE</div>
                        <div>
                          <div style="font-weight:700">Globex Expansion</div>
                          <div class="owner-sub muted">Globex</div>
                        </div>
                      </div>
                    </td>
                    <td>Dana Scully</td>
                    <td><span class="stage prop" aria-hidden="true">Proposal</span></td>
                    <td>$96,500</td>
                    <td class="muted">4h ago</td>
                  </tr>

                  <tr>
                    <td>
                      <div style="display:flex;gap:10px;align-items:center">
                        <div class="avatar" aria-hidden="true">IP</div>
                        <div>
                          <div style="font-weight:700">Initech Pilot</div>
                          <div class="owner-sub muted">Initech</div>
                        </div>
                      </div>
                    </td>
                    <td>Peter Gibbons</td>
                    <td><span class="stage disc" aria-hidden="true">Discovery</span></td>
                    <td>$12,300</td>
                    <td class="muted">Today</td>
                  </tr>

                  <tr>
                    <td>
                      <div style="display:flex;gap:10px;align-items:center">
                        <div class="avatar" aria-hidden="true">SM</div>
                        <div>
                          <div style="font-weight:700">Soylent Migration</div>
                          <div class="owner-sub muted">Soylent</div>
                        </div>
                      </div>
                    </td>
                    <td>Ellen Ripley</td>
                    <td><span class="stage contract" aria-hidden="true">Contract</span></td>
                    <td>$210,000</td>
                    <td class="muted">Yesterday</td>
                  </tr>

                  <tr>
                    <td>
                      <div style="display:flex;gap:10px;align-items:center">
                        <div class="avatar" aria-hidden="true">US</div>
                        <div>
                          <div style="font-weight:700">Umbrella Support</div>
                          <div class="owner-sub muted">Umbrella</div>
                        </div>
                      </div>
                    </td>
                    <td>Jill Valentine</td>
                    <td><span class="stage qual" aria-hidden="true">Qualification</span></td>
                    <td>$7,800</td>
                    <td class="muted">Mon</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          <!-- Recent activity -->
          <aside class="card" aria-labelledby="activityHeading">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
              <h3 id="activityHeading">Recent Activity</h3>
              <button class="btn ghost" aria-label="View all activity">View All</button>
            </div>

            <div>
              <div class="activity-item">
                <div class="avatar" style="width:36px;height:36px;border-radius:999px;background:linear-gradient(90deg,#fef3c7,#fde68a)">SC</div>
                <div>
                  <div class="meta"><strong>Sam Carter</strong> <span class="muted">logged a call with</span> <strong>Acme Corp</strong></div>
                  <div class="time muted">1h ago</div>
                </div>
              </div>

              <div class="activity-item">
                <div class="avatar" style="width:36px;height:36px;border-radius:999px;background:linear-gradient(90deg,#e0f2fe,#bae6fd)">AM</div>
                <div>
                  <div class="meta"><strong>Alex Murphy</strong> <span class="muted">created a deal for</span> <strong>Globex</strong></div>
                  <div class="time muted">3h ago</div>
                </div>
              </div>

              <div class="activity-item">
                <div class="avatar" style="width:36px;height:36px;border-radius:999px;background:linear-gradient(90deg,#ede9fe,#ddd6fe)">DS</div>
                <div>
                  <div class="meta"><strong>Dana Scully</strong> <span class="muted">updated stage for</span> <strong>Initech Pilot</strong></div>
                  <div class="time muted">5h ago</div>
                </div>
              </div>

              <div class="activity-item">
                <div class="avatar" style="width:36px;height:36px;border-radius:999px;background:linear-gradient(90deg,#dcfce7,#bbf7d0)">PG</div>
                <div>
                  <div class="meta"><strong>Peter Gibbons</strong> <span class="muted">added a note to</span> <strong>Soylent Migration</strong></div>
                  <div class="time muted">Yesterday</div>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <div class="spacer" aria-hidden="true"></div>

        <footer class="muted ks-sm" role="contentinfo" aria-label="Footer">
          © <span id="year"></span> Your Company — Internal CRM. Built for productivity.
        </footer>
      </main>
    </div>
  </div>

  <!-- Mobile navigation offcanvas -->
  <div id="mobileNav" class="offcanvas" aria-hidden="true">
    <div class="panel" role="dialog" aria-modal="true" aria-label="Mobile navigation" id="mobile-navigation">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
        <h2 style="margin:0">Navigation</h2>
        <div style="margin-left:auto"><button class="close-btn" id="closeMobileNav" aria-label="Close navigation">Close ✕</button></div>
      </div>
      <nav>
        <ul>
          <li style="margin:8px 0"><a class="nav-link" href="/dashboard"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.5L12 3l9 7.5" stroke-width="1.6"/><path d="M9 22V12h6v10" stroke-width="1.6"/></svg>Overview</a></li>
          <li style="margin:8px 0"><a class="nav-link" href="#">Contacts</a></li>
          <li style="margin:8px 0"><a class="nav-link" href="#">Deals</a></li>
          <li style="margin:8px 0"><a class="nav-link" href="#">Tasks</a></li>
          <li style="margin:8px 0"><a class="nav-link" href="#">Reports</a></li>
          <li style="margin:12px 0"><div class="separator"></div></li>
          <li style="margin:8px 0"><a class="nav-link" href="#">Settings</a></li>
        </ul>
      </nav>
    </div>
  </div>

  <script>
    // Small scripts for interactivity — defensive checks to avoid runtime errors in environments where elements may not exist
    (function(){
      try {
        var yearEl = document.getElementById('year');
        if (yearEl) yearEl.textContent = new Date().getFullYear();

        var openBtn = document.getElementById('openMobileNav');
        var closeBtn = document.getElementById('closeMobileNav');
        var mobileNav = document.getElementById('mobileNav');

        function openNav(){
          if (!mobileNav) return;
          mobileNav.classList.add('open');
          mobileNav.setAttribute('aria-hidden','false');
          openBtn && openBtn.setAttribute('aria-expanded','true');
        }
        function closeNav(){
          if (!mobileNav) return;
          mobileNav.classList.remove('open');
          mobileNav.setAttribute('aria-hidden','true');
          openBtn && openBtn.setAttribute('aria-expanded','false');
        }

        if (openBtn){
          openBtn.addEventListener('click', function(){ openNav(); });
        }
        if (closeBtn){
          closeBtn.addEventListener('click', function(){ closeNav(); });
        }
        // close when clicking backdrop
        if (mobileNav){
          mobileNav.addEventListener('click', function(e){
            if (e.target === mobileNav) closeNav();
          });
        }

        // Show mobile menu button based on viewport
        function refreshMenuButton(){
          var mb = document.querySelector('.mobile-menu-btn');
          if(!mb) return;
          if(window.innerWidth < 1024){
            mb.style.display = 'inline-flex';
            mb.setAttribute('aria-hidden','false');
          } else {
            mb.style.display = 'none';
            mb.setAttribute('aria-hidden','true');
            closeNav();
          }
        }
        window.addEventListener('resize', refreshMenuButton);
        // Run once after load
        refreshMenuButton();
      } catch (err) {
        // Fail silently — keep page usable
        // eslint-disable-next-line no-console
        console.error('Dashboard script error', err);
      }
    })();
  </script>
</body>
</html>