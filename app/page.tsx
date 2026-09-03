import Image from "next/image";

const services = [
	{
		icon: "engine",
		title: "Engine Repair",
		text: "Diagnostics, tune-ups, and complete engine care.",
	},
	{
		icon: "oil",
		title: "Oil & Filters",
		text: "Premium oils and filters for a smoother drive.",
	},
	{
		icon: "brake",
		title: "Brake Service",
		text: "Pads, rotors, and full brake system inspection.",
	},
	{
		icon: "tire",
		title: "Tires & Alignment",
		text: "Precision alignment, balancing, and tire fitting.",
	},
	{
		icon: "battery",
		title: "Battery & Electric",
		text: "Testing, replacement, and electrical diagnosis.",
	},
	{
		icon: "ac",
		title: "A/C Service",
		text: "Cooling checks, re-gas, and climate control repair.",
	},
];

const parts = [
	{
		icon: "disc",
		title: "Brake Pads",
		meta: "Bosch • Brembo • Akebono",
		price: "Nu.0.00",
	},
	{
		icon: "plug",
		title: "Spark Plugs",
		meta: "NGK • Denso • Bosch",
		price: "Nu. 0.00",
	},
	{
		icon: "filter",
		title: "Oil Filters",
		meta: "MANN • Mobil 1 • K&N",
		price: "Nu. 0.00",
	},
	{
		icon: "battery",
		title: "Car Batteries",
		meta: "Varta • Exide • Bosch",
		price: "Nu. 0.00",
	},
];

function Mark({ name }: { name: string }) {
	const paths: Record<string, React.ReactNode> = {
		engine: (
			<>
				<path d="M7 8h9l3 3v7H7z" />
				<path d="M10 8V5h5v3M5 11H2v5h3m14-3h3v5" />
			</>
		),
		oil: (
			<>
				<path d="m6 10 5-5h6l4 4-7 7H7z" />
				<path d="M16 7V3m-7 13v3h9" />
				<path d="M4 13c0 2-2 4-2 4s-2-2-2-4a2 2 0 0 1 4 0Z" />
			</>
		),
		brake: (
			<>
				<circle cx="12" cy="12" r="8" />
				<circle cx="12" cy="12" r="3" />
				<path d="M18 5v5h-4" />
			</>
		),
		tire: (
			<>
				<circle cx="12" cy="12" r="9" />
				<circle cx="12" cy="12" r="4" />
				<path d="m12 8 2-4m2 6 4-1m-4 5 3 3M8 14l-3 3m3-7L4 9" />
			</>
		),
		battery: (
			<>
				<rect x="3" y="7" width="18" height="12" rx="2" />
				<path d="M7 7V4h3v3m5 0V4h3v3M7 13h4m-2-2v4m6-2h3" />
			</>
		),
		ac: (
			<>
				<path d="M12 2v20M4 7l16 10M4 17 20 7" />
				<circle cx="12" cy="12" r="2" />
			</>
		),
		disc: (
			<>
				<circle cx="12" cy="12" r="9" />
				<circle cx="12" cy="12" r="3" />
				<path d="M17 5c2 2 3 4 3 7h-5" />
			</>
		),
		plug: (
			<>
				<path d="m14 3 5 5-8 8-5-5zM6 11l-3 3 7 7 3-3M16 5l2-2m-4 0 5 5" />
			</>
		),
		filter: (
			<>
				<path d="M5 4h14l-2 4v10l-5 3-5-3V8z" />
				<path d="M7 8h10M9 12h6" />
			</>
		),
	};
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true">
			{paths[name]}
		</svg>
	);
}

export default function Home() {
	return (
		<main>
			<div className="topbar">
				<div className="shell topbar-inner">
					<span>Certified technicians. Honest service.</span>
					<span className="top-links">
						<a href="tel:+975 17461152">☎ &nbsp; +975 17461152</a>
						<i />
						Mon–Sat: 8:00 AM–6:00 PM
					</span>
				</div>
			</div>
			<header className="nav shell">
				<a className="logo" href="#top" aria-label="KP home">
					<Image
						src="/kp_logo.png"
						alt="KP Autotech Workshop"
						width={1536}
						height={1024}
						className="logo-image"
						priority
					/>
				</a>
				<nav aria-label="Main navigation">
					<a className="active" href="#top">
						Home
					</a>
					<a href="#services">Services</a>
					<a href="#parts">Spare Parts</a>
					<a href="#why-us">About Us</a>
					<a href="#contact">Contact</a>
				</nav>
				<a className="nav-cta" href="#booking">
					Book a service <span>→</span>
				</a>
				<details className="mobile-menu">
					<summary aria-label="Open menu">☰</summary>
					<div>
						<a href="#services">Services</a>
						<a href="#parts">Spare Parts</a>
						<a href="#why-us">About Us</a>
						<a href="#contact">Contact</a>
					</div>
				</details>
			</header>

			<section className="hero" id="top">
				<Image
					src="/garage-hero.png"
					alt="Technician servicing a performance car in the KP workshop"
					fill
					priority
					sizes="100vw"
				/>
				<div className="hero-shade" />
				<div className="shell hero-content">
					<div className="eyebrow">
						<span />
						Driven by care. Built on trust.
					</div>
					<h1>
						Your car deserves
						<br />
						<em>the best care.</em>
					</h1>
					<p>
						Expert service, honest advice, and trusted spare parts—everything
						your car needs, all under one roof.
					</p>
					<div className="hero-actions">
						<a className="button primary" href="#booking">
							Book an appointment <span>→</span>
						</a>
						<a className="button ghost" href="#services">
							Explore our services
						</a>
					</div>
					<div className="trust-row">
						<span>
							<b>12+</b> Years experience
						</span>
						<span>
							<b>4.9</b> ★ Customer rating
						</span>
						<span>
							<b>8k+</b> Cars serviced
						</span>
					</div>
				</div>
			</section>

			<section className="section shell" id="services">
				<div className="section-head">
					<div>
						<div className="kicker">WHAT WE DO</div>
						<h2>
							Complete care for
							<br />
							every part of your car.
						</h2>
					</div>
					<p>
						From routine maintenance to complex repairs, our certified team
						keeps you moving safely and confidently.
					</p>
				</div>
				<div className="service-grid">
					{services.map((service, i) => (
						<article className="service-card" key={service.title}>
							<span className="number">0{i + 1}</span>
							<div className="icon-box">
								<Mark name={service.icon} />
							</div>
							<h3>{service.title}</h3>
							<p>{service.text}</p>
							<a
								href="#booking"
								aria-label={`Learn more about ${service.title}`}
							>
								Learn more <span>↗</span>
							</a>
						</article>
					))}
				</div>
			</section>

			<section className="parts-section" id="parts">
				<div className="shell">
					<div className="section-head light">
						<div>
							<div className="kicker">SPARE PARTS</div>
							<h2>
								Quality parts.
								<br />
								Made to last.
							</h2>
						</div>
						<div>
							<p>
								Genuine and trusted aftermarket parts for all major makes and
								models. Backed by warranty.
							</p>
							<a href="#contact" className="text-link">
								View all parts <span>→</span>
							</a>
						</div>
					</div>
					<div className="parts-grid">
						{parts.map((part) => (
							<article className="part-card" key={part.title}>
								<div className="part-art">
									<div className="part-glow" />
									<Mark name={part.icon} />
									<span className="tag">IN STOCK</span>
								</div>
								<div className="part-info">
									<div>
										<h3>{part.title}</h3>
										<p>{part.meta}</p>
									</div>
									<strong>
										From <b>{part.price}</b>
									</strong>
								</div>
							</article>
						))}
					</div>
					<div className="brands">
						<span>TRUSTED BRANDS</span>
						<b>BOSCH</b>
						<b>BREMBO</b>
						<b>Mobil 1</b>
						<b>VARTA</b>
						<b>NGK</b>
						<b>Castrol</b>
					</div>
				</div>
			</section>

			<section className="why shell" id="why-us">
				<div className="why-copy">
					<div className="kicker">WHY KP AUTO SERVICES</div>
					<h2>
						Good service is more
						<br />
						than just a repair.
					</h2>
					<p>
						It’s clarity, care, and confidence every time you hand us the keys.
					</p>
					<div className="benefits">
						<div>
							<span>✓</span>
							<section>
								<h3>Transparent pricing</h3>
								<p>
									Clear estimates before any work begins. No hidden surprises.
								</p>
							</section>
						</div>
						<div>
							<span>✓</span>
							<section>
								<h3>Certified expertise</h3>
								<p>
									Skilled technicians using modern diagnostics and proven
									methods.
								</p>
							</section>
						</div>
						<div>
							<span>✓</span>
							<section>
								<h3>Warranty-backed work</h3>
								<p>
									Our repairs and fitted parts are protected for your peace of
									mind.
								</p>
							</section>
						</div>
					</div>
				</div>
				<div className="quote-card">
					<div className="quote-top">
						<span>“</span>
						<div className="rating">
							★★★★★ <small>4.9 / 5</small>
						</div>
					</div>
					<blockquote>
						“The team explained everything clearly, finished ahead of time, and
						the bill matched the quote. Finally, a workshop I can trust.”
					</blockquote>
					<div className="reviewer">
						<span>PD</span>
						<div>
							<b>Pee Dorji.</b>
							<small>Verified customer</small>
						</div>
					</div>
					<div className="quote-line" />
				</div>
			</section>

			<section className="booking" id="booking">
				<div className="shell booking-inner">
					<div>
						<div className="kicker">READY WHEN YOU ARE</div>
						<h2>
							Let’s get you
							<br />
							back on the road.
						</h2>
						<p>
							Book your service today. We’ll confirm your slot within 30
							minutes.
						</p>
					</div>
					<div className="booking-options">
						<a
							className="booking-option whatsapp"
							href="https://wa.me/+97517461152?text=Hello%20KP%20Auto%20Care%2C%20I%27d%20like%20to%20book%20a%20service%20appointment."
							target="_blank"
							rel="noopener noreferrer"
						>
							<span className="booking-icon" aria-hidden="true">
								✆
							</span>
							<span>
								<small>Message us on</small>
								<strong>WhatsApp</strong>
							</span>
							<b aria-hidden="true">→</b>
						</a>
						<a className="booking-option phone" href="tel:+975 17461152">
							<span className="booking-icon" aria-hidden="true">
								☎
							</span>
							<span>
								<small>Call to book</small>
								<strong>+975 17461152</strong>
							</span>
							<b aria-hidden="true">→</b>
						</a>
						<p className="booking-note ">
							Available Monday–Saturday during workshop hours.
						</p>
					</div>
				</div>
			</section>

			<footer id="contact">
				<div className="shell footer-main">
					<div>
						<a
							className="logo footer-logo"
							href="#top"
							aria-label="KP Autotech Workshop home"
						>
							<Image
								src="/kp_logo.png"
								alt="KP Autotech Workshop"
								width={1536}
								height={1024}
								className="logo-image"
							/>
						</a>
						<p>Reliable care for every road ahead.</p>
					</div>
					<div>
						<h4>Visit us</h4>
						<a
							className="map-link "
							href="https://www.google.com/maps/search/?api=1&query=KP+Autotech+Workshop+Babesa+Zero+Thimphu+Bhutan"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Open KP Autotech Workshop location in Google Maps"
						>
							<span aria-hidden="true">⌖</span>
							<span>
								Babesa Zero
								<small>Thimphu, Bhutan</small>
							</span>
							<b aria-hidden="true">↗</b>
						</a>
					</div>
					<div>
						<h4>Contact</h4>
						<p>
							<a href="tel:++975 17461152">+975 17461152</a>
							<br />
							<a href="mailto:kpautotechworkshop2024@gmail.com">
								kpautotechworkshop2024@gmail.com
							</a>
						</p>
					</div>
					<div>
						<h4>Hours</h4>
						<p>
							Mon–Fri &nbsp;8:00–6:00
							<br />
							Saturday &nbsp;8:00–4:00
						</p>
					</div>
				</div>
				<div className="shell footer-bottom">
					<span>© 2026 KP Auto Care. All rights reserved.</span>
					<span>
						<a href="#">Privacy</a>
						<a href="#">Terms</a>
					</span>
				</div>
			</footer>
		</main>
	);
}
