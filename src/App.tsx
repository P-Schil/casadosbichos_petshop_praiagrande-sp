import { useState } from "react";
import {
  ArrowRight, Check, Clock3, Instagram, MapPin, Menu, MessageCircle,
  Package, Scissors, ShoppingBag, Sparkles, Truck, X
} from "lucide-react";

const WHATSAPP = "https://wa.me/5513988119039";
const INSTAGRAM = "https://www.instagram.com/petshopcasadosbichospg/";

const services = [
  { icon: Scissors, title: "Banho e Tosa", text: "Cuidados de higiene e estética com atenção ao conforto e às necessidades de cada pet.", cta: "Quero agendar atendimento" },
  { icon: Package, title: "Rações", text: "Opções de alimentação para a rotina do seu pet, com orientação para uma escolha adequada.", cta: "Quero produtos" },
  { icon: ShoppingBag, title: "Produtos e Acessórios", text: "Itens para alimentação, passeio, higiene, conforto e bem-estar em um só lugar.", cta: "Quero produtos" },
  { icon: Truck, title: "Entrega", text: "Mais praticidade para tutores da Vila Tupi e região, com atendimento direto pelo WhatsApp.", cta: "Quero Tirar Dúvidas" },
];

const differentials = [
  ["Atendimento próximo", "Conhecemos a importância de ouvir o tutor e entender a necessidade de cada pet."],
  ["Praticidade local", "Uma solução na Vila Tupi para reduzir deslocamentos e tornar a rotina mais simples."],
  ["Qualidade e ética", "Qualidade técnica e ética são prioridades e não devem ser sacrificadas por questões comerciais."],
  ["Relacionamento duradouro", "Construímos relações de confiança com tutores por meio de um atendimento consistente."],
];

function Header({ open, setOpen }: { open: boolean; setOpen: (value: boolean) => void }) {
  const links = [["sobre", "Sobre nós"], ["servicos", "Serviços"], ["diferenciais", "Diferenciais"], ["depoimentos", "Depoimentos"]];
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Casa dos Bichos - início">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#1D4ED8] text-lg font-black text-white">CB</span>
          <span className="leading-tight"><strong className="block text-lg text-slate-900">Casa dos Bichos</strong><small className="text-xs font-semibold uppercase tracking-[.18em] text-[#1D4ED8]">Pet Shop</small></span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {links.map(([id, label]) => <a key={id} href={`#${id}`} className="text-sm font-semibold text-slate-700 transition hover:text-[#1D4ED8]">{label}</a>)}
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="rounded-full bg-[#1D4ED8] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-700">Quero Tirar Dúvidas</a>
        </nav>
        <button className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-slate-800 lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav className="border-t border-slate-100 bg-white px-5 py-5 lg:hidden" aria-label="Menu mobile">
        {links.map(([id, label]) => <a key={id} href={`#${id`} } onClick={() => setOpen(false)} className="block border-b border-slate-100 py-3 font-semibold text-slate-700">{label}</a>)}
        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-4 block rounded-xl bg-[#1D4ED8] px-5 py-3 text-center font-bold text-white">Quero Tirar Dúvidas</a>
      </nav>}
    </header>
  );
}

function App() {
  const [menu, setMenu] = useState(false);

  return (
    <div id="inicio" className="min-h-screen bg-white text-slate-900">
      <Header open={menu} setOpen={setMenu} />

      <main>
        <section className="relative isolate min-h-[720px] overflow-hidden pt-20">
          <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=2000&q=85" alt="Cães juntos em um ambiente acolhedor" className="absolute inset-0 -z-20 h-full w-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 -z-10 bg-slate-950/65" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/80 via-slate-950/45 to-[#1D4ED8]/20" />
          <div className="mx-auto flex min-h-[640px] max-w-7xl items-center px-5 py-20 lg:px-8">
            <div className="max-w-3xl text-white">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur"><Sparkles size={16} /> Cuidado, confiança e praticidade</div>
              <h1 className="text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">Resultados excepcionais para o bem-estar do seu pet.</h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">A Casa dos Bichos ajuda tutores da Vila Tupi e região com banho, tosa, alimentação, produtos e entrega — com atendimento próximo e foco no que realmente importa.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#eeff00] px-6 py-4 font-black text-slate-950 transition hover:-translate-y-1">Quero agendar atendimento <ArrowRight size={18} /></a>
                <a href="#servicos" className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-4 font-bold text-white backdrop-blur transition hover:bg-white/20">Conhecer serviços</a>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-white/85"><span className="flex items-center gap-2"><Check size={17} /> Atendimento personalizado</span><span className="flex items-center gap-2"><Check size={17} /> Vila Tupi e região</span><span className="flex items-center gap-2"><Check size={17} /> Qualidade e ética</span></div>
            </div>
          </div>
        </section>

        <section id="sobre" className="scroll-mt-20 bg-white py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-black uppercase tracking-[.18em] text-[#1D4ED8]">Sobre nós</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Qualidade e relacionamento duradouro são fundamentais para o sucesso.</h2>
              <p className="mt-7 text-lg leading-8 text-slate-600">A Casa dos Bichos foi pensada para oferecer aos tutores da Vila Tupi uma experiência mais prática, próxima e confiável para o cuidado dos seus animais.</p>
              <p className="mt-5 text-lg leading-8 text-slate-600">Nossa proposta é reunir serviços, alimentação e produtos em um atendimento que respeita o pet e orienta o tutor. Para nós, resultados excepcionais precisam caminhar junto com qualidade técnica e ética.</p>
              <div className="mt-9 grid gap-4 sm:grid-cols-2"><div className="rounded-2xl bg-blue-50 p-5"><strong className="block text-[#1D4ED8]">Cuidado próximo</strong><span className="mt-1 block text-sm leading-6 text-slate-600">Atendimento pensado para a realidade de cada tutor e pet.</span></div><div className="rounded-2xl bg-yellow-50 p-5"><strong className="block text-slate-900">Praticidade local</strong><span className="mt-1 block text-sm leading-6 text-slate-600">Serviços e produtos na Vila Tupi e região.</span></div></div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-2xl"><img loading="lazy" src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1200&q=85" alt="Pessoa cuidando de um cão com atenção" className="h-[520px] w-full object-cover" /></div>
              <div className="absolute -bottom-6 -left-4 max-w-xs rounded-2xl bg-white p-5 shadow-xl sm:-left-8"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#eeff00] text-slate-950"><Check size={20} /></span><span className="text-sm font-bold leading-5">Qualidade sem abrir mão da ética e do cuidado.</span></div></div>
            </div>
          </div>
        </section>

        <section id="servicos" className="scroll-mt-20 bg-slate-50 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-[.18em] text-[#1D4ED8]">Serviços e soluções</p><h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Tudo o que você precisa para facilitar o cuidado do seu pet.</h2><p className="mt-5 text-lg leading-8 text-slate-600">Soluções pensadas para reduzir deslocamentos, diminuir o estresse da rotina e deixar o cuidado mais simples.</p></div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {services.map(({ icon: Icon, title, text, cta }) => <article key={title} className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-[#1D4ED8] transition group-hover:bg-[#1D4ED8] group-hover:text-white"><Icon size={26} /></div>
                <h3 className="mt-7 text-xl font-black">{title}</h3><p className="mt-3 min-h-[96px] text-sm leading-6 text-slate-600">{text}</p>
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#1D4ED8]">{cta}<ArrowRight size={16} /></a>
              </article>)}
            </div>
            <div className="mt-8 rounded-3xl bg-[#1D4ED8] p-7 text-white sm:flex sm:items-center sm:justify-between sm:gap-8"><div><h3 className="text-2xl font-black">Não encontrou o que procura?</h3><p className="mt-2 text-white/80">Fale com a Casa dos Bichos e tire suas dúvidas sobre produtos e atendimento.</p></div><a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-5 inline-flex shrink-0 items-center gap-2 rounded-full bg-[#eeff00] px-5 py-3 font-black text-slate-950 sm:mt-0">Quero Tirar Dúvidas <MessageCircle size={17} /></a></div>
          </div>
        </section>

        <section id="diferenciais" className="scroll-mt-20 bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-3xl text-center"><p className="text-sm font-black uppercase tracking-[.18em] text-[#1D4ED8]">Diferenciais competitivos</p><h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Mais do que produtos e serviços: uma relação de confiança.</h2><p className="mt-5 text-lg leading-8 text-slate-600">A proposta da Casa dos Bichos combina atendimento próximo, praticidade e compromisso com qualidade.</p></div>
            <div className="mt-14 grid gap-5 md:grid-cols-2">{differentials.map(([title, text], i) => <div key={title} className="flex gap-5 rounded-3xl border border-slate-200 p-7 transition hover:border-blue-200 hover:shadow-lg"><span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${i % 2 === 0 ? "bg-blue-50 text-[#1D4ED8]" : "bg-yellow-50 text-slate-900"}`}><Check size={22} /></span><div><h3 className="text-xl font-black">{title}</h3><p className="mt-2 leading-7 text-slate-600">{text}</p></div></div>)}</div>
          </div>
        </section>

        <section id="depoimentos" className="scroll-mt-20 bg-[#1D4ED8] py-24 text-white lg:py-32">
          <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
            <p className="text-sm font-black uppercase tracking-[.18em] text-[#eeff00]">Depoimentos e prova social</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">A confiança começa no cuidado de cada atendimento.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80">Espaço preparado para apresentar experiências reais dos clientes da Casa dos Bichos.</p>
            <div className="mx-auto mt-12 max-w-3xl rounded-[2rem] bg-white p-8 text-left text-slate-900 shadow-2xl sm:p-12">
              <div className="flex gap-1 text-[#1D4ED8]" aria-label="Avaliação"><span>★★★★★</span></div>
              <blockquote className="mt-6 text-2xl font-bold leading-10">“Aqui serão apresentados depoimentos reais de clientes, conforme o material de prova social fornecido pela Casa dos Bichos.”</blockquote>
              <div className="mt-8 border-t border-slate-200 pt-5"><strong className="block">Prova social da empresa</strong><span className="text-sm text-slate-500">Depoimento real a inserir</span></div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-24 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
            <div><p className="text-sm font-black uppercase tracking-[.18em] text-[#1D4ED8]">Visite a loja</p><h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Seu pet merece cuidado. Sua rotina merece praticidade.</h2><p className="mt-6 text-lg leading-8 text-slate-600">Estamos na Vila Tupi, em Praia Grande, para atender tutores que buscam produtos, serviços e orientação em um só lugar.</p><a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1D4ED8] px-6 py-4 font-black text-white transition hover:bg-blue-700">Quero Tirar Dúvidas <MessageCircle size={18} /></a></div>
            <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
              <div className="flex gap-4"><MapPin className="mt-1 shrink-0 text-[#1D4ED8]" /><div><strong className="block">Endereço</strong><span className="mt-1 block leading-7 text-slate-600">Rua Nancyr Feliciano de Oliveira, 223<br />Vila Tupi, Praia Grande - SP<br />11719-130</span></div></div>
              <div className="my-6 border-t border-slate-100" />
              <div className="flex gap-4"><Clock3 className="mt-1 shrink-0 text-[#1D4ED8]" /><div><strong className="block">Horário de atendimento</strong><span className="mt-1 block leading-7 text-slate-600">Segunda a sábado: 09:00–19:00<br />Domingo: fechado</span></div></div>
              <div className="my-6 border-t border-slate-100" />
              <div className="flex gap-4"><MessageCircle className="mt-1 shrink-0 text-[#1D4ED8]" /><div><strong className="block">WhatsApp</strong><a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-1 block text-[#1D4ED8]">(13) 98811-9039</a></div></div>
              <div className="my-6 border-t border-slate-100" />
              <div className="flex gap-4"><Instagram className="mt-1 shrink-0 text-[#1D4ED8]" /><div><strong className="block">Instagram</strong><a href={INSTAGRAM} target="_blank" rel="noreferrer" className="mt-1 block text-[#1D4ED8]">@petshopcasadosbichospg</a></div></div>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-[.18em] text-[#eeff00]">Casa dos Bichos - Pet Shop</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">Entregar resultados excepcionais que superam expectativas e geram valor real.</h2><p className="mt-4 text-white/70">Fale conosco para agendar atendimento, consultar produtos ou tirar dúvidas.</p></div>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#eeff00] px-6 py-4 font-black text-slate-950">Quero agendar atendimento <ArrowRight size={18} /></a>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 border-t border-white/10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
          <div><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#1D4ED8] font-black">CB</span><strong>Casa dos Bichos</strong></div><p className="mt-4 max-w-sm text-sm leading-6 text-white/60">Qualidade e relacionamento duradouro para cuidar de quem faz parte da família.</p></div>
          <div><strong>Contato</strong><p className="mt-4 text-sm text-white/70">(13) 98811-9039</p><p className="mt-2 text-sm text-white/70">casadosbichos@petshop</p></div>
          <div><strong>Redes sociais</strong><a href={INSTAGRAM} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"><Instagram size={18} /> @petshopcasadosbichospg</a></div>
        </div>
        <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/50">© {new Date().getFullYear()} Casa dos Bichos - Pet Shop. Todos os direitos reservados.</div>
      </footer>

      <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Falar com a Casa dos Bichos pelo WhatsApp" className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#1D4ED8] text-white shadow-xl ring-4 ring-white transition hover:scale-105"><MessageCircle size={27} /></a>
    </div>
  );
}

export default App;
