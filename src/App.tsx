import { useEffect, useState } from "react";
import {
  ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Clock3, Instagram,
  MapPin, Menu, MessageCircle, Package, Scissors, ShieldCheck, ShoppingBag, Star, Truck, X
} from "lucide-react";

const whatsapp = "https://wa.me/5513988119039";
const instagram = "https://www.instagram.com/petshopcasadosbichospg/";

const services = [
  { icon: Scissors, title: "Banho e tosa", text: "Cuidados de higiene realizados com atenção, conforto e respeito ao perfil de cada pet." },
  { icon: Package, title: "Rações", text: "Opções de alimentação para diferentes necessidades, com orientação para uma escolha adequada." },
  { icon: ShoppingBag, title: "Acessórios e produtos", text: "Produtos para rotina, conforto e bem-estar do seu pet, reunidos em um só lugar." },
  { icon: Truck, title: "Entregas", text: "Mais praticidade para tutores da Vila Tupi e região, com atendimento direto pelo WhatsApp." },
  { icon: ShieldCheck, title: "Orientação especializada", text: "Atendimento próximo para esclarecer dúvidas e ajudar você a escolher soluções com segurança." },
  { icon: CheckCircle2, title: "Cuidado completo", text: "Uma experiência pensada para facilitar a rotina e fortalecer o cuidado com seu companheiro." },
];

const testimonials = [
  { name: "Cliente Casa dos Bichos", role: "Tutor de pet", text: "Atendimento cuidadoso e uma experiência que transmite confiança desde o primeiro contato." },
  { name: "Cliente Casa dos Bichos", role: "Tutora de pet", text: "Foi muito mais prático resolver os cuidados e produtos do meu pet com atendimento próximo." },
  { name: "Cliente Casa dos Bichos", role: "Tutor de pet", text: "Gostei da atenção e da orientação. É importante saber que o pet está sendo tratado com cuidado." },
];

export default function App() {
  const [menu, setMenu] = useState(false);
  const [testimonial, setTestimonial] = useState(0);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("visible");
    }), { threshold: 0.12 });
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="site">
      <header className="header">
        <div className="container nav">
          <button className="brand" onClick={() => go("inicio")} aria-label="Casa dos Bichos - início">
            <span className="brand-mark">CB</span>
            <span>Casa dos Bichos<small>Pet Shop</small></span>
          </button>
          <nav className={menu ? "nav-links open" : "nav-links"} aria-label="Navegação principal">
            <button onClick={() => go("sobre")}>Sobre nós</button>
            <button onClick={() => go("servicos")}>Serviços</button>
            <button onClick={() => go("diferenciais")}>Diferenciais</button>
            <button onClick={() => go("depoimentos")}>Depoimentos</button>
            <a className="nav-cta" href={whatsapp} target="_blank" rel="noreferrer">Quero Tirar Dúvidas</a>
          </nav>
          <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label={menu ? "Fechar menu" : "Abrir menu"}>
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero">
          <img className="hero-bg" src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1800&q=85" alt="Cães em ambiente pet friendly" fetchPriority="high" />
          <div className="hero-overlay" />
          <div className="container hero-content reveal">
            <span className="eyebrow light">Cuidado, confiança e praticidade</span>
            <h1>Resultados excepcionais para o bem-estar do seu pet.</h1>
            <p>Banho, tosa, rações, acessórios e entregas com atendimento próximo para tutores da Vila Tupi e região.</p>
            <div className="hero-actions">
              <a className="button primary" href={whatsapp} target="_blank" rel="noreferrer">Quero agendar atendimento <ArrowRight size={18}/></a>
              <a className="button yellow" href="#servicos">Conhecer serviços</a>
            </div>
            <div className="trust-row"><span><CheckCircle2 size={17}/> Atendimento personalizado</span><span><CheckCircle2 size={17}/> Foco no bem-estar</span><span><CheckCircle2 size={17}/> Vila Tupi</span></div>
          </div>
        </section>

        <section id="sobre" className="section">
          <div className="container split reveal">
            <div>
              <span className="eyebrow">Sobre a Casa dos Bichos</span>
              <h2>Cuidado completo, atendimento próximo e confiança em cada escolha.</h2>
              <p>Na Casa dos Bichos, acreditamos que qualidade e relacionamento duradouro são fundamentais para o sucesso. Por isso, cada atendimento é pensado para facilitar a rotina do tutor e oferecer uma experiência segura e acolhedora.</p>
              <p>Unimos serviços de higiene, produtos, alimentação e praticidade em um atendimento personalizado, com foco real no bem-estar dos animais e nas necessidades de seus tutores.</p>
              <div className="stats">
                <div><strong>100%</strong><span>Foco no cuidado</span></div>
                <div><strong>1 só</strong><span>lugar para sua rotina</span></div>
                <div><strong>Local</strong><span>Vila Tupi</span></div>
              </div>
            </div>
            <div className="image-card">
              <img loading="lazy" src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1000&q=80" alt="Profissional cuidando de um cão em ambiente pet shop" />
              <div className="image-badge"><Star fill="currentColor" size={18}/><span>Qualidade sem abrir mão do cuidado</span></div>
            </div>
          </div>
        </section>

        <section id="servicos" className="section soft">
          <div className="container">
            <div className="section-head reveal"><div><span className="eyebrow">Serviços e soluções</span><h2>Tudo para tornar o cuidado do seu pet mais simples.</h2></div><p>Atendimento próximo, produtos e serviços pensados para quem procura qualidade e confiança.</p></div>
            <div className="service-grid">
              {services.map(({icon: Icon, title, text}) => <article className="card reveal" key={title}><div className="icon-box"><Icon size={24}/></div><h3>{title}</h3><p>{text}</p><a href={whatsapp} target="_blank" rel="noreferrer" className="card-link">Quero produtos <ArrowRight size={16}/></a></article>)}
            </div>
          </div>
        </section>

        <section id="diferenciais" className="section">
          <div className="container">
            <div className="center-head reveal"><span className="eyebrow">Diferenciais</span><h2>Uma escolha profissional começa pela confiança.</h2><p>Experiência de atendimento construída para reduzir dúvidas e facilitar decisões.</p></div>
            <div className="diff-grid">
              {[
                ["Atendimento personalizado","Entendemos a necessidade antes de indicar uma solução."],
                ["Foco em resultados","O objetivo é entregar praticidade e cuidado que façam diferença na rotina."],
                ["Transparência","Informações claras para você decidir com segurança."],
                ["Praticidade local","Serviços e produtos na Vila Tupi, com opção de contato e entrega."],
                ["Qualidade técnica","A qualidade do cuidado vem antes de qualquer questão comercial."],
                ["Relacionamento duradouro","Queremos construir confiança em cada atendimento."]
              ].map(([title,text]) => <div className="diff-item reveal" key={title}><div className="check"><CheckCircle2 size={21}/></div><div><h3>{title}</h3><p>{text}</p></div></div>)}
            </div>
          </div>
        </section>

        <section id="depoimentos" className="section testimonials">
          <div className="container testimonial-wrap reveal">
            <div className="center-head"><span className="eyebrow light">Prova social</span><h2>Confiança que começa no atendimento.</h2><p>Uma experiência acolhedora e profissional para você e seu pet.</p></div>
            <div className="testimonial-card">
              <div className="stars">{[1,2,3,4,5].map(n => <Star key={n} fill="currentColor" size={19}/>)}</div>
              <blockquote>“{testimonials[testimonial].text}”</blockquote>
              <strong>{testimonials[testimonial].name}</strong><span>{testimonials[testimonial].role}</span>
              <div className="slider-controls">
                <button onClick={() => setTestimonial((testimonial - 1 + testimonials.length) % testimonials.length)} aria-label="Depoimento anterior"><ChevronLeft/></button>
                {testimonials.map((_, i) => <button key={i} className={i === testimonial ? "dot active" : "dot"} onClick={() => setTestimonial(i)} aria-label={`Ir para depoimento ${i + 1}`}/>)}
                <button onClick={() => setTestimonial((testimonial + 1) % testimonials.length)} aria-label="Próximo depoimento"><ChevronRight/></button>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact">
          <div className="container contact-grid reveal">
            <div><span className="eyebrow">Visite ou fale conosco</span><h2>Seu pet merece cuidado. Sua rotina merece praticidade.</h2><p>Estamos na Rua Nancyr Feliciano de Oliveira, 223, Vila Tupi, Praia Grande - SP.</p><a className="button primary" href={whatsapp} target="_blank" rel="noreferrer">Quero Tirar Dúvidas <MessageCircle size={18}/></a></div>
            <div className="info-list">
              <div><MapPin/><span><strong>Endereço</strong>Rua Nancyr Feliciano de Oliveira, 223<br/>Vila Tupi, Praia Grande - SP, 11719-130</span></div>
              <div><Clock3/><span><strong>Horário</strong>Segunda a sábado, 09:00–19:00<br/>Domingo: fechado</span></div>
              <div><MessageCircle/><span><strong>WhatsApp</strong>(13) 98811-9039</span></div>
              <div><Instagram/><span><strong>Instagram</strong>@petshopcasadosbichospg</span></div>
            </div>
          </div>
        </section>

        <section className="final-cta reveal">
          <div className="container cta-inner"><div><span className="eyebrow light">Casa dos Bichos - Pet Shop</span><h2>Entregar resultados excepcionais que superam expectativas e geram valor real.</h2><p>Fale conosco e encontre a solução ideal para o cuidado do seu pet.</p></div><a className="button yellow" href={whatsapp} target="_blank" rel="noreferrer">Quero agendar atendimento <ArrowRight size={18}/></a></div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid"><div><div className="brand footer-brand"><span className="brand-mark">CB</span><span>Casa dos Bichos<small>Pet Shop</small></span></div><p>Qualidade e relacionamento duradouro para cuidar de quem faz parte da família.</p></div><div><h3>Contato</h3><p>(13) 98811-9039</p><p>casadosbichos@petshop</p></div><div><h3>Endereço</h3><p>Rua Nancyr Feliciano de Oliveira, 223<br/>Vila Tupi, Praia Grande - SP</p><a href={instagram} target="_blank" rel="noreferrer" aria-label="Instagram Casa dos Bichos"><Instagram size={21}/></a></div></div>
        <div className="container copyright">© {new Date().getFullYear()} Casa dos Bichos - Pet Shop. Todos os direitos reservados.</div>
      </footer>
      <a className="whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Falar com a Casa dos Bichos pelo WhatsApp"><MessageCircle size={27}/></a>
    </div>
  );
}
