:root {
    --bg-dark-app: #0b0f19;
    --bg-dark-card: #131a2e;
    --bg-dark-hover: #1e2642;
    --accent-blue: #3b82f6;
    --accent-glow: #2563eb;
    --accent-green: #10b981;
    --text-main: #f1f5f9;
    --text-muted: #94a3b8;
    --border-soft: rgba(255, 255, 255, 0.06);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background-color: var(--bg-dark-app);
    color: var(--text-main);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    overflow-x: hidden;
}

.anim-entrada {
    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px) scale(0.98); }
    to { opacity: 1; transform: translateY(0) scale(1); }
}

.app-container {
    width: 100%;
    max-width: 1100px;
    height: 680px;
    background: rgba(19, 26, 46, 0.4);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid var(--border-soft);
    border-radius: 24px;
    display: flex;
    overflow: hidden;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
}

.sidebar {
    width: 240px;
    background: #0f1424;
    border-right: 1px solid var(--border-soft);
    display: flex;
    flex-direction: column;
    padding: 25px 15px;
}

.branding { text-align: center; margin-bottom: 35px; }

.logo-wrapper {
    width: 85px; height: 85px; margin: 0 auto 12px;
    border-radius: 50%; position: relative; cursor: pointer;
    overflow: hidden; background: #fff; border: 2px solid var(--accent-blue);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.logo-wrapper:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
}

.logo-wrapper img { width: 100%; height: 100%; object-fit: contain; }

.logo-overlay {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(11, 15, 25, 0.8); display: flex;
    justify-content: center; align-items: center; opacity: 0; transition: opacity 0.2s ease;
}

.logo-overlay span { font-size: 0.75rem; color: #fff; font-weight: 500; }
.logo-wrapper:hover .logo-overlay { opacity: 1; }
.siglas-ia { font-size: 1.2rem; font-weight: 700; letter-spacing: 1px; }
.siglas-ia span { color: var(--accent-blue); }

.menu-navegacion { display: flex; flex-direction: column; gap: 8px; }

.menu-btn {
    background: transparent; border: none; color: var(--text-muted);
    padding: 12px 16px; text-align: left; font-size: 0.9rem; border-radius: 12px;
    cursor: pointer; display: flex; align-items: center; gap: 12px; transition: all 0.25s ease;
}

.menu-btn:hover { background: var(--bg-dark-hover); color: var(--text-main); transform: translateX(4px); }

.menu-btn.activo {
    background: linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-glow) 100%);
    color: #fff; font-weight: 500; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}

.sidebar-footer { margin-top: auto; text-align: center; font-size: 0.7rem; color: var(--text-muted); }
.main-content { flex: 1; padding: 30px; position: relative; background: radial-gradient(circle at 90% 10%, rgba(59, 130, 246, 0.05) 0%, transparent 50%); }

.tab-content { display: none; height: 100%; flex-direction: column; }
.tab-content.activo { display: flex; animation: fadeIn 0.4s ease forwards; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

.content-header h1 {
    font-size: 1.6rem; margin-bottom: 4px;
    background: linear-gradient(to right, #fff, var(--text-muted));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
}
.tagline { font-size: 0.85rem; color: var(--accent-blue); margin-bottom: 25px; font-weight: 500; }

.grid-info, .grid-conocimiento { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; }
.tarjeta-info, .bloque-modulo { background: var(--bg-dark-card); border: 1px solid var(--border-soft); padding: 20px; border-radius: 16px; transition: transform 0.3s ease; }
.tarjeta-info:hover, .bloque-modulo:hover { transform: translateY(-3px); border-color: rgba(59, 130, 246, 0.2); }
.tarjeta-info h3, .bloque-modulo h4 { color: var(--accent-blue); margin-bottom: 8px; font-size: 1rem; }
.tarjeta-info p, .bloque-modulo p { font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; }
.completo { grid-column: span 2; }

.chat-wrapper { display: flex; flex-direction: column; height: 100%; background: #0d1222; border: 1px solid var(--border-soft); border-radius: 16px; overflow: hidden; }
.chat-header { background: var(--bg-dark-card); padding: 12px 20px; border-bottom: 1px solid var(--border-soft); }
.indicador-estado { display: flex; align-items: center; gap: 12px; }
.punto-verde { width: 10px; height: 10px; background: var(--accent-green); border-radius: 50%; box-shadow: 0 0 10px var(--accent-green); }
.indicador-estado h4 { font-size: 0.9rem; }
.indicador-estado small { font-size: 0.75rem; color: var(--text-muted); }

.chat-box { flex: 1; padding: 20px; overflow-y: auto; display: flex; flex-direction: column; gap: 12px; background: radial-gradient(rgba(59, 130, 246, 0.02) 1px, transparent 0); background-size: 16px 16px; }
.mensaje { display: flex; gap: 12px; animation: msgSlide 0.3s ease forwards; }
@keyframes msgSlide { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

.mensaje.bot .avatar { background: var(--accent-blue); width: 32px; height: 32px; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 0.7rem; font-weight: 700; }
.mensaje.usuario { flex-direction: row-reverse; }
.mensaje.usuario .avatar { background: var(--bg-dark-hover); width: 32px; height: 32px; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 0.7rem; }

.contenido { background: var(--bg-dark-card); border: 1px solid var(--border-soft); padding: 12px 16px; border-radius: 0 16px 16px 16px; max-width: 75%; font-size: 0.85rem; line-height: 1.4; }
.mensaje.usuario .contenido { background: var(--accent-blue); border-radius: 16px 0 16px 16px; }

.acciones-rapidas { display: flex; gap: 8px; padding: 10px 15px; overflow-x: auto; }
.pregunta { background: var(--bg-dark-card); border: 1px solid var(--border-soft); color: var(--text-main); padding: 6px 14px; border-radius: 20px; font-size: 0.75rem; cursor: pointer; white-space: nowrap; transition: all 0.2s ease; }
.pregunta:hover { background: var(--accent-blue); border-color: var(--accent-blue); transform: scale(1.04); }

.input-area { display: flex; padding: 12px 15px; gap: 8px; background: #090d16; border-top: 1px solid var(--border-soft); }
#user-input { flex: 1; background: var(--bg-dark-card); border: 1px solid var(--border-soft); padding: 10px 16px; border-radius: 10px; color: #fff; outline: none; font-size: 0.85rem; }
#user-input:focus { border-color: var(--accent-blue); }

#mic-btn, #send-btn { background: var(--bg-dark-hover); border: 1px solid var(--border-soft); color: white; width: 42px; border-radius: 10px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s; }
#mic-btn.recording { background: #ef4444; animation: pulseMic 1.5s infinite; }
#mic-btn:hover { background: var(--accent-blue); }
#send-btn:hover { background: var(--accent-green); }

@keyframes pulseMic {
    0% { box-shadow: 0 0 0 0 rgba(239, 64, 64, 0.4); }
    70% { box-shadow: 0 0 0 8px rgba(239, 64, 64, 0); }
    100% { box-shadow: 0 0 0 0 rgba(239, 64, 64, 0); }
}
