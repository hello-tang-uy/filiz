import { useEffect, useId, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navItems } from "../data/nav.js";

const CLOSE_DELAY = 150;
const MOBILE_BREAKPOINT = 1024;
const megaItems = navItems.filter((item) => item.type === "mega");

function Icon({ name }) {
  if (!name) return null;
  return (
    <span className="mega-icon" aria-hidden="true">
      <span className="material-symbols-outlined">{name}</span>
    </span>
  );
}

function Chevron({ open }) {
  return (
    <svg className={`chevron ${open ? "is-open" : ""}`} viewBox="0 0 12 12" width="10" height="10" aria-hidden="true">
      <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function Header() {
  const [openId, setOpenId] = useState(null);
  const [visibleId, setVisibleId] = useState(null);
  const [leaving, setLeaving] = useState(null);
  const [motion, setMotion] = useState("");
  const [panelHeight, setPanelHeight] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const wrapRef = useRef(null);
  const viewportRef = useRef(null);
  const contentRef = useRef(null);
  const triggerRefs = useRef({});
  const openIdRef = useRef(null);
  const closeTimer = useRef(0);
  const panelId = useId();
  const location = useLocation();

  openIdRef.current = openId;

  const clearTimer = () => window.clearTimeout(closeTimer.current);

  const scheduleClose = () => {
    clearTimer();
    closeTimer.current = window.setTimeout(() => setOpenId(null), CLOSE_DELAY);
  };

  const openMega = (id) => {
    clearTimer();
    const from = openIdRef.current;
    if (from === id) {
      setOpenId(id);
      return;
    }
    if (from) {
      const order = navItems.map((item) => item.id);
      const goingRight = order.indexOf(id) > order.indexOf(from);
      setMotion(goingRight ? "from-end" : "from-start");
      setLeaving({ id: from, motion: goingRight ? "to-start" : "to-end" });
    } else {
      setMotion("");
      setLeaving(null);
    }
    setOpenId(id);
    setVisibleId(id);
  };

  useEffect(() => {
    if (openId) {
      setVisibleId(openId);
      return undefined;
    }
    setPanelHeight(0);
    setLeaving(null);
    const hide = window.setTimeout(() => setVisibleId(null), 300);
    return () => window.clearTimeout(hide);
  }, [openId]);

  useEffect(() => {
    if (!leaving) return undefined;
    const hide = window.setTimeout(() => setLeaving(null), 300);
    return () => window.clearTimeout(hide);
  }, [leaving]);

  useEffect(() => {
    const panel = contentRef.current;
    if (!openId || !panel) return undefined;
    const measure = () => {
      setPanelHeight(panel.scrollHeight);
    };
    const frame = window.requestAnimationFrame(measure);
    const observer = new ResizeObserver(measure);
    observer.observe(panel);
    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [openId, visibleId]);

  useEffect(() => {
    const onResize = () => {
      const mobile = window.innerWidth < MOBILE_BREAKPOINT;
      setIsMobile(mobile);
      if (!mobile) setMobileOpen(false);
      else setOpenId(null);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    setOpenId(null);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key !== "Escape") return;
      setOpenId(null);
      setMobileOpen(false);
      if (openId && triggerRefs.current[openId]) triggerRefs.current[openId].focus();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      clearTimer();
    };
  }, [openId]);

  useEffect(() => {
    if (!openId || isMobile || !viewportRef.current) return undefined;
    const panel = viewportRef.current;
    const trigger = triggerRefs.current[openId];
    const getFocusable = () =>
      [trigger, ...panel.querySelectorAll('a[href], button:not([disabled])')].filter(Boolean);

    const onKeyDown = (event) => {
      if (event.key !== "Tab") return;
      const items = getFocusable();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [openId, isMobile]);

  const onTriggerKeyDown = (event, item) => {
    if (item.type !== "mega") return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      const next = openId === item.id ? null : item.id;
      if (next) openMega(next);
      else setOpenId(null);
    }
  };

  const visibleItem = megaItems.find((item) => item.id === visibleId);
  const leavingItem = leaving ? megaItems.find((item) => item.id === leaving.id) : null;

  return (
    <header className={`site-header ${openId ? "is-open" : ""}`}>
      <div className="nav-shell" ref={wrapRef} onMouseLeave={!isMobile ? scheduleClose : undefined}>
        <div className="nav-bar">
          <Link className="logo" to="/" onMouseEnter={!isMobile ? scheduleClose : undefined}>
            filiz
          </Link>

          <nav className="nav-desktop" aria-label="Principale">
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.id}>
                  {item.type === "mega" ? (
                    <button
                      ref={(node) => {
                        triggerRefs.current[item.id] = node;
                      }}
                      className={`nav-trigger ${openId === item.id ? "is-open" : ""}`}
                      aria-expanded={openId === item.id}
                      aria-controls={panelId}
                      aria-haspopup="true"
                      onMouseEnter={() => !isMobile && openMega(item.id)}
                      onFocus={() => !isMobile && openMega(item.id)}
                      onClick={() => !isMobile && (openId === item.id ? setOpenId(null) : openMega(item.id))}
                      onKeyDown={(event) => onTriggerKeyDown(event, item)}
                    >
                      {item.label}
                      <Chevron open={openId === item.id} />
                    </button>
                  ) : (
                    <NavLink
                      className="nav-link"
                      to={item.href}
                      onMouseEnter={() => !isMobile && scheduleClose()}
                    >
                      {item.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-actions">
            <Link className="btn-ghost" to="/login">
              Se connecter
            </Link>
            <Link className="btn-dark" to="/demo">
              Demander une démo
            </Link>
            <button
              className={`burger ${mobileOpen ? "is-open" : ""}`}
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((value) => !value)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>

        {!isMobile && (
          <div className="mega-slot">
            <div
              id={panelId}
              ref={viewportRef}
              className={`mega-viewport ${openId ? "is-open" : ""}`}
              style={{ height: openId ? panelHeight : 0 }}
              onMouseEnter={() => openId && openMega(openId)}
            >
              {leavingItem && leavingItem.id !== visibleId ? (
                <div
                  key={`leave-${leaving.id}`}
                  className={`mega-panel ${leaving.motion}`}
                  aria-hidden="true"
                  inert
                >
                  <MegaPanel item={leavingItem} />
                </div>
              ) : null}
              {visibleItem ? (
                <div
                  key={visibleId}
                  ref={contentRef}
                  className={`mega-panel is-active ${motion}`}
                  aria-hidden={!openId}
                  inert={!openId ? true : undefined}
                >
                  <MegaPanel item={visibleItem} />
                </div>
              ) : null}
            </div>
          </div>
        )}
      </div>

      {isMobile && mobileOpen && (
        <div className="mobile-sheet" role="dialog" aria-modal="true" aria-label="Navigation">
          {navItems.map((item) =>
            item.type === "mega" ? (
              <div key={item.id} className="mobile-block">
                <button
                  className="mobile-section"
                  aria-expanded={mobileSection === item.id}
                  onClick={() =>
                    setMobileSection((current) => (current === item.id ? null : item.id))
                  }
                >
                  {item.label}
                  <Chevron open={mobileSection === item.id} />
                </button>
                {mobileSection === item.id && (
                  <div className="mobile-panel">
                    {item.columns.map((column) => (
                      <div key={column.title} className="mobile-col">
                        <p>{column.title}</p>
                        {column.items.map((link) => (
                          <Link
                            key={link.href}
                            className="mega-item"
                            data-tone={column.tone}
                            to={link.href}
                            onClick={() => setMobileOpen(false)}
                          >
                            <Icon name={link.icon} />
                            <span>
                              <strong>{link.label}</strong>
                              <em>{link.description}</em>
                            </span>
                          </Link>
                        ))}
                      </div>
                    ))}
                    {item.features?.map((feature) => (
                      <FeatureCard
                        key={feature.href}
                        feature={feature}
                        onClick={() => setMobileOpen(false)}
                      />
                    ))}
                    {item.banner && (
                      <Link className="mobile-banner" to={item.banner.href} onClick={() => setMobileOpen(false)}>
                        <strong>{item.banner.title}</strong>
                        {item.banner.subtitle}
                      </Link>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.id}
                className="mobile-link"
                to={item.href}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
          <div className="mobile-cta">
            <Link to="/login" onClick={() => setMobileOpen(false)}>
              Se connecter
            </Link>
            <Link className="btn-dark" to="/demo" onClick={() => setMobileOpen(false)}>
              Demander une démo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function MegaPanel({ item }) {
  const slots = item.columns.length + (item.features?.length || 0);

  return (
    <div className="mega-inner" role="region" aria-label={item.label}>
      <div className={`mega-grid cols-${slots}`}>
        {item.columns.map((column) => (
          <div key={column.title} className="mega-col">
            <p className="mega-col-title">{column.title}</p>
            {column.items.map((link) => (
              <Link key={link.href} className="mega-item" data-tone={column.tone} to={link.href}>
                <Icon name={link.icon} />
                <span>
                  <strong>{link.label}</strong>
                  {link.description && <em>{link.description}</em>}
                </span>
              </Link>
            ))}
          </div>
        ))}
        {item.features?.map((feature) => (
          <FeatureCard key={feature.href} feature={feature} />
        ))}
      </div>
      {item.banner && (
        <Link className="mega-banner" data-tone={item.banner.tone} to={item.banner.href}>
          <span className="mega-banner-copy">
            <Icon name={item.banner.icon} />
            <span>
              <strong>{item.banner.title}</strong>
              <em>{item.banner.subtitle}</em>
            </span>
          </span>
          <span className="mega-banner-cta">
            {item.banner.cta} <Arrow />
          </span>
        </Link>
      )}
    </div>
  );
}

function FeatureCard({ feature, onClick }) {
  return (
    <Link className="mega-feature" data-tone={feature.tone} to={feature.href} onClick={onClick}>
      <span className="mega-feature-media">
        <span className="mega-feature-copy">
          {feature.kicker && <span className="mega-feature-kicker">{feature.kicker}</span>}
          <strong>{feature.title}</strong>
        </span>
        {feature.description && <em>{feature.description}</em>}
      </span>
    </Link>
  );
}
