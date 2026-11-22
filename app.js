/* Biblioteca Sonora · 5.º Ano — Aplicação Web (PWA / Microsoft Teams) */

(() => {
  'use strict';

  // ---- Fallback catalog (used if opened via file:// where fetch may be blocked) ----
  const FALLBACK_CATALOG = {
    classTitle: 'OP 2.º Ciclo · Biblioteca',
    classSubtitle: 'Escolhe uma história, põe os auscultadores e deixa a imaginação viajar.',
    stories: [
      {
        id: 'o-falcao-que-nao-voava',
        title: 'O Falcão que Não Voava',
        narrator: 'Diretor de Turma · 5.º Ano',
        category: 'Inspiração',
        duration: '1 min',
        coverTheme: 'amber',
        icon: '🦅',
        description: 'Um rei oferece uma recompensa a quem fizer voar um falcão que nunca saiu do seu ramo — até um simples camponês encontrar a resposta.',
        audioType: 'dual',
        audioUrl: '',
        audioFemaleUrl: './audio/o-falcao-que-nao-voava-female.mp3',
        audioMaleUrl: './audio/o-falcao-que-nao-voava-male.mp3',
        createdAt: '2026-11-21',
        text: 'Um dia, o rei levou ao mestre da falcoaria duas magníficas crias de falcão que lhe tinham oferecido. Com grandes expectativas, ordenou-lhe que as treinasse para a caça.\n\nPassados alguns meses, o instrutor entregou ao rei um falcão perfeitamente amestrado, mas comunicou-lhe que o outro tinha um defeito e não conseguia aprender. Não se movera do ramo desde o dia em que chegara, não caçava e era necessário pôr-lhe os alimentos na boca para que se alimentasse.\n\nO rei convocou todos os curandeiros do reino, mas nenhum conseguiu fazer voar a ave. Enraivecido, publicou um edital oferecendo uma recompensa a quem fosse capaz de o fazer.\n\nNa manhã seguinte, da janela dos seus aposentos, o rei viu o falcão voar graciosamente pelos jardins do palácio.\n\n— Traz-me o autor deste milagre! — solicitou o rei.\n\nE, para sua surpresa, encontrou-se perante um simples camponês.\n\n— Como fizeste voar o falcão? Utilizaste algum tipo de magia?\n\nIntimidado, o homem respondeu:\n\n— Não foi difícil, Vossa Majestade. Limitei-me a cortar o ramo e, antes de cair no chão, o pássaro começou a voar.'
      },
      {
        id: 'o-bom-grande',
        title: 'O Bom Grande',
        narrator: 'Diretor de Turma · 5.º Ano',
        category: 'Inspiração',
        duration: '1 min',
        coverTheme: 'terracotta',
        icon: '💛',
        description: 'A história de Maria, uma aluna de 11 anos cujo desejo simples mudou para sempre a forma como se via a si própria.',
        audioType: 'tts',
        audioUrl: '',
        createdAt: '2026-11-21',
        text: 'Maria, uma aluna de 11 anos, era vista como uma criança triste, pouco atraente e sem aproveitamento escolar de relevo. Apresentava constantemente dificuldades que não conseguia superar autonomamente e o seu contexto familiar não dispunha de recursos académicos para apoiar nos trabalhos de casa.\n\nO seu olhar expressivo permanecia habitualmente oculto e resignado ao insucesso. Ao ser questionada pela diretora de turma sobre a sua tristeza, Maria revelou que o seu desejo era simples: "Nunca tive um Bom, nem sequer um Bom pequeno. Gostava de ter um."\n\nSensibilizada, a professora desenhou uma avaliação atenta às capacidades e barreiras de Maria. Após a realização da prova, devolveu-lhe a folha onde havia escrito, com letras de grande dimensão, a classificação de "Bom Grande".\n\nEste gesto transformou a perceção da aluna sobre si própria, elevou a sua autoestima perante a família e a comunidade, e converteu a docente numa figura de referência na sua vida.'
      },
      {
        id: 'lenda-serra-estrela',
        title: 'A Lenda da Serra da Estrela',
        narrator: 'Professor · Exemplo em Leitura Automática',
        category: 'Lendas',
        duration: '2 min',
        coverTheme: 'indigo',
        icon: '✨',
        description: 'A antiga história de um pastor curioso e de uma estrela brilhante que mudou para sempre a montanha mais alta de Portugal.',
        audioType: 'tts',
        audioUrl: '',
        createdAt: '2026-11-21',
        text: 'Há muitos, muitos anos, nas encostas frias da serra mais alta de Portugal, vivia um jovem pastor chamado Estêvão. Todas as noites, depois de recolher o seu rebanho de ovelhas, gostava de se deitar na relva húmida e observar o céu escuro.\n\nEntre milhares de pontos luminosos, havia uma estrela que parecia piscar-lhe o olho com mais força do que todas as outras. O pastor sentia uma vontade enorme de descobrir se aquela luz era feita de prata, de fogo ou de sonhos.\n\nUm dia, o rei da região ouviu falar da curiosidade do rapaz e decidiu testar a sua coragem. Ofereceu-lhe riquezas, roupas finas e um lugar no palácio, mas Estêvão recusou tudo. Disse apenas que nada no mundo brilhava mais do que a liberdade da montanha e a companhia fiel do seu cão.\n\nNa noite seguinte, quando subiu ao ponto mais alto da serra, a estrela desceu um pouco mais perto do cume e iluminou todo o vale com um brilho prateado. Desde esse dia, o povo começou a chamar àquela montanha a Serra da Estrela, lembrando que há tesouros que não cabem em cofres, apenas no olhar de quem sabe sonhar.'
      },
      {
        id: 'segredo-biblioteca-fechada',
        title: 'O Segredo da Biblioteca Fechada',
        narrator: 'Professor · Exemplo em Leitura Automática',
        category: 'Mistério',
        duration: '2 min',
        coverTheme: 'plum',
        icon: '🔎',
        description: 'Numa tarde de chuva na escola, dois colegas do 5.º ano descobrem um mapa escondido dentro de um livro antigo.',
        audioType: 'tts',
        audioUrl: '',
        createdAt: '2026-11-21',
        text: 'Eram quase cinco da tarde e a chuva batia com força nas janelas da escola. Inês e Tomás tinham ficado mais uns minutos na biblioteca para terminar um trabalho sobre os Descobrimentos, quando ouviram um pequeno estalido vindo da última estante.\n\nCuriosos, aproximaram-se devagar. Um livro grosso de capa verde tinha escorregado ligeiramente para fora da prateleira. Quando Inês o abriu com cuidado, caiu no chão uma folha amarelada, dobrada em quatro partes.\n\nNão era uma página normal. Era um mapa desenhado à mão com os corredores da própria escola, cheio de setas pequenas e uma frase escrita a tinta azul: onde o silêncio guarda histórias, procura a terceira janela virada a sul.\n\nCom o coração a bater depressa, correram até à terceira janela da biblioteca. No peitoril de madeira, escondida atrás de um vaso de fetos, estava uma pequena caixa metálica. Lá dentro não havia ouro, mas sim dez cartas escritas por alunos de há vinte anos, cheias de conselhos, desenhos e desafios de leitura para as turmas do futuro.'
      },
      {
        id: 'viagem-fundo-atlantico',
        title: 'Viagem ao Fundo do Atlântico',
        narrator: 'Professor · Exemplo em Leitura Automática',
        category: 'Aventura',
        duration: '2 min',
        coverTheme: 'ocean',
        icon: '🌊',
        description: 'A bordo de um pequeno submarino amarelo, uma equipa de jovens exploradores mergulha ao encontro das criaturas luminosas do mar.',
        audioType: 'tts',
        audioUrl: '',
        createdAt: '2026-11-21',
        text: 'As escotilhas fecharam-se com um som firme e o pequeno submarino Mergulhão começou a descer pelas águas azuis do Oceano Atlântico, ao largo da costa portuguesa.\n\nNos primeiros metros, a luz do sol atravessava o mar em raios dourados. Cardumes de sardinhas prateadas passavam em curvas perfeitas, como se estivessem a dançar ao som de uma música invisível.\n\nÀ medida que desciam mais fundo, o azul claro transformou-se num azul escuro quase mágico. Foi então que o capitão desligou os holofotes exteriores por cinco segundos. De repente, pequenas luzes azuis e verdes acenderam-se à volta do vidro.\n\nEram medusas e peixes bioluminescentes que produzem a sua própria luz no escuro do oceano. Naquele instante, os jovens exploradores perceberam que o fundo do mar guarda tantos mistérios quanto o espaço, e que proteger o oceano é proteger um mundo inteiro de maravilhas.'
      },
      {
        id: 'cinco-minutos-calma',
        title: 'A Floresta do Vento Calmo',
        narrator: 'Professor · Exemplo em Leitura Automática',
        category: 'Calma',
        duration: '2 min',
        coverTheme: 'emerald',
        icon: '🌿',
        description: 'Uma história serena para abrandar o ritmo depois do recreio ou antes de dormir, acompanhada de pausas tranquilas.',
        audioType: 'tts',
        audioUrl: '',
        createdAt: '2026-11-21',
        text: 'Imagina que estás num caminho macio coberto de folhas douradas, no coração de uma floresta tranquila. O ar está fresco e tem cheiro a pinheiro e a terra depois da chuva.\n\nRespira fundo devagar pelo nariz, contando até três, e solta o ar suavemente pela boca. Sente os ombros ficarem mais leves, como se pousasses uma mochila pesada ao lado de uma árvore antiga.\n\nAo longe, um ribeiro desliza sobre pedras redondas, fazendo um som regular e calmo. Um pequeno esquilo observa-te de um ramo alto, mexe as orelhas com curiosidade e continua o seu passeio sem pressa.\n\nNesta floresta não há testes, nem campainhas, nem corridas. Há apenas o ritmo calmo da tua respiração e o tempo certo para descansar a mente antes da próxima aventura.'
      }
    ]
  };

  const CATEGORIES = ['Todas', 'Inspiração', 'História', 'Aventura', 'Lendas', 'Mistério', 'Calma', 'Poesia', 'Vozes da Turma', '⭐ Favoritas'];
  const DEFAULT_PIN_HASH = '3a68daab953450e426f8b946bef1642534c1c3eec54599aa7bea507f0e6e899d';

  async function hashPin(pin) {
    const raw = `bs2c-pin:${String(pin || '').trim()}`;
    if (window.crypto && window.crypto.subtle) {
      const buf = new TextEncoder().encode(raw);
      const digest = await window.crypto.subtle.digest('SHA-256', buf);
      return [...new Uint8Array(digest)].map(b => b.toString(16).padStart(2, '0')).join('');
    }
    return '';
  }

  // ---- IndexedDB wrapper for local teacher stories & audio blobs ----
  const DB_NAME = 'BibliotecaSonora5AnoDB';
  const DB_VERSION = 1;
  const STORE_STATE = 'catalog_state';

  function openDB() {
    return new Promise((resolve, reject) => {
      if (!window.indexedDB) {
        resolve(null);
        return;
      }
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains(STORE_STATE)) {
          db.createObjectStore(STORE_STATE);
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  async function idbGet(key) {
    try {
      const db = await openDB();
      if (!db) return null;
      return await new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_STATE, 'readonly');
        const req = tx.objectStore(STORE_STATE).get(key);
        req.onsuccess = () => resolve(req.result ?? null);
        req.onerror = () => reject(req.error);
      });
    } catch {
      return null;
    }
  }

  async function idbSet(key, value) {
    try {
      const db = await openDB();
      if (!db) return false;
      return await new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_STATE, 'readwrite');
        tx.objectStore(STORE_STATE).put(value, key);
        tx.oncomplete = () => resolve(true);
        tx.onerror = () => reject(tx.error);
      });
    } catch {
      return false;
    }
  }

  // ---- Application State ----
  const state = {
    classTitle: 'OP 2.º Ciclo · Biblioteca',
    classSubtitle: 'Escolhe o teu ano, põe os auscultadores e deixa a imaginação viajar.',
    pinHash: DEFAULT_PIN_HASH,
    stories: [],
    activeGrade: null, // null = home menu, '5' = 5.º Ano, '6' = 6.º Ano
    selectedCategory: 'Todas',
    searchQuery: '',
    listenedIds: new Set(),
    favoriteIds: new Set(),
    dyslexiaMode: false,
    storyFontSize: 1.08,

    // Active player state
    activeStory: null,
    isPlaying: false,
    playbackRate: 1,
    voiceGender: 'female',
    ambientMode: 'off',
    textVisible: true,

    // HTML5 Audio
    audioEl: new Audio(),
    activeObjectUrl: null,

    // TTS Engine state
    ttsSentences: [],
    ttsCurrentIdx: 0,
    ttsSessionId: 0,
    ttsPaused: false,

    // Teacher form draft audio
    selectedTheme: 'emerald',
    selectedSource: 'record',
    draftAudioData: '', // data URL from recording or file upload
    mediaRecorder: null,
    recordChunks: [],
    recordTimerInterval: null,
    recordSeconds: 0
  };

  // ---- Ambient Soundscape Engine (Web Audio API) ----
  const ambient = {
    ctx: null,
    node: null,
    gain: null,
    lfo: null,
    start(mode) {
      this.stop();
      if (mode === 'off') return;
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;

      this.ctx = new AudioCtx();
      const bufferSize = this.ctx.sampleRate * 3;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);

      // Generate warm pink/brown noise
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        data[i] = (lastOut + 0.02 * white) / 1.02;
        lastOut = data[i];
        data[i] *= mode === 'rain' ? 2.4 : 1.8;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      noise.loop = true;

      const filter = this.ctx.createBiquadFilter();
      filter.type = mode === 'rain' ? 'bandpass' : 'lowpass';
      filter.frequency.value = mode === 'rain' ? 850 : 340;
      filter.Q.value = mode === 'rain' ? 0.6 : 0.9;

      const gain = this.ctx.createGain();
      gain.gain.value = mode === 'rain' ? 0.038 : 0.045;

      if (mode === 'forest') {
        const lfo = this.ctx.createOscillator();
        const lfoGain = this.ctx.createGain();
        lfo.frequency.value = 0.14;
        lfoGain.gain.value = 140;
        lfo.connect(lfoGain);
        lfoGain.connect(filter.frequency);
        lfo.start();
        this.lfo = lfo;
      }

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start();

      this.node = noise;
      this.gain = gain;
    },
    stop() {
      try {
        if (this.lfo) this.lfo.stop();
        if (this.node) this.node.stop();
        if (this.ctx) this.ctx.close();
      } catch {
        // Ignore already stopped audio nodes
      }
      this.ctx = null;
      this.node = null;
      this.gain = null;
      this.lfo = null;
    }
  };

  // ---- DOM References ----
  const dom = {
    classTitle: document.getElementById('classTitle'),
    classSubtitle: document.getElementById('classSubtitle'),
    gradeSwitcher: document.getElementById('gradeSwitcher'),
    btnBackToMenu: document.getElementById('btnBackToMenu'),
    topGradePills: document.getElementById('topGradePills'),
    progressPill: document.getElementById('progressPill'),
    progressText: document.getElementById('progressText'),
    btnDyslexiaGlobal: document.getElementById('btnDyslexiaGlobal'),
    btnTeacherMode: document.getElementById('btnTeacherMode'),
    homeMenu: document.getElementById('homeMenu'),
    countGrade5: document.getElementById('countGrade5'),
    countGrade6: document.getElementById('countGrade6'),
    libraryView: document.getElementById('libraryView'),
    categoryPills: document.getElementById('categoryPills'),
    searchInput: document.getElementById('searchInput'),
    storiesGrid: document.getElementById('storiesGrid'),
    emptyState: document.getElementById('emptyState'),
    emptyStateTitle: document.getElementById('emptyStateTitle'),
    emptyStateDesc: document.getElementById('emptyStateDesc'),
    btnResetFilters: document.getElementById('btnResetFilters'),

    // Player Modal
    playerModal: document.getElementById('playerModal'),
    playerCategory: document.getElementById('playerCategory'),
    playerAudioBadge: document.getElementById('playerAudioBadge'),
    btnFavoritePlayer: document.getElementById('btnFavoritePlayer'),
    btnClosePlayer: document.getElementById('btnClosePlayer'),
    playerCover: document.getElementById('playerCover'),
    playerIcon: document.getElementById('playerIcon'),
    playerEqualizer: document.getElementById('playerEqualizer'),
    playerTitle: document.getElementById('playerTitle'),
    playerNarrator: document.getElementById('playerNarrator'),
    playerDescription: document.getElementById('playerDescription'),
    timeCurrent: document.getElementById('timeCurrent'),
    timeTotal: document.getElementById('timeTotal'),
    progressSlider: document.getElementById('progressSlider'),
    btnSkipBack: document.getElementById('btnSkipBack'),
    btnPlayPause: document.getElementById('btnPlayPause'),
    playPauseIcon: document.getElementById('playPauseIcon'),
    btnSkipForward: document.getElementById('btnSkipForward'),
    voiceGenderGroup: document.getElementById('voiceGenderGroup'),
    voiceGenderSelector: document.getElementById('voiceGenderSelector'),
    speedSelector: document.getElementById('speedSelector'),
    ambientSelect: document.getElementById('ambientSelect'),
    btnToggleListened: document.getElementById('btnToggleListened'),
    playerNotice: document.getElementById('playerNotice'),
    readAlongBox: document.getElementById('readAlongBox'),
    btnToggleText: document.getElementById('btnToggleText'),
    textTools: document.getElementById('textTools'),
    btnFontSmaller: document.getElementById('btnFontSmaller'),
    btnFontLarger: document.getElementById('btnFontLarger'),
    btnDyslexiaPlayer: document.getElementById('btnDyslexiaPlayer'),
    storyTextContainer: document.getElementById('storyTextContainer'),

    // PIN Modal
    pinModal: document.getElementById('pinModal'),
    pinForm: document.getElementById('pinForm'),
    pinInput: document.getElementById('pinInput'),
    pinError: document.getElementById('pinError'),
    btnClosePin: document.getElementById('btnClosePin'),
    btnCancelPin: document.getElementById('btnCancelPin'),

    // Teacher Modal
    teacherModal: document.getElementById('teacherModal'),
    btnCloseTeacher: document.getElementById('btnCloseTeacher'),
    teacherTabs: document.querySelectorAll('.teacher-tab'),
    teacherTabAdd: document.getElementById('teacherTabAdd'),
    teacherTabManage: document.getElementById('teacherTabManage'),
    teacherTabPublish: document.getElementById('teacherTabPublish'),
    storyForm: document.getElementById('storyForm'),
    editingStoryId: document.getElementById('editingStoryId'),
    inputTitle: document.getElementById('inputTitle'),
    inputNarrator: document.getElementById('inputNarrator'),
    inputGrade: document.getElementById('inputGrade'),
    inputCategory: document.getElementById('inputCategory'),
    inputDuration: document.getElementById('inputDuration'),
    inputIcon: document.getElementById('inputIcon'),
    inputDescription: document.getElementById('inputDescription'),
    inputText: document.getElementById('inputText'),
    themePicker: document.getElementById('themePicker'),
    audioSourceTabs: document.getElementById('audioSourceTabs'),
    sourceRecordPanel: document.getElementById('sourceRecordPanel'),
    sourceUploadPanel: document.getElementById('sourceUploadPanel'),
    sourceTtsPanel: document.getElementById('sourceTtsPanel'),
    btnRecordToggle: document.getElementById('btnRecordToggle'),
    recordTimer: document.getElementById('recordTimer'),
    recordStatus: document.getElementById('recordStatus'),
    recordPreview: document.getElementById('recordPreview'),
    inputAudioFile: document.getElementById('inputAudioFile'),
    uploadInfo: document.getElementById('uploadInfo'),
    uploadPreview: document.getElementById('uploadPreview'),
    btnResetStoryForm: document.getElementById('btnResetStoryForm'),
    btnSaveStory: document.getElementById('btnSaveStory'),
    manageStoriesList: document.getElementById('manageStoriesList'),
    btnExportCatalog: document.getElementById('btnExportCatalog'),
    inputImportCatalog: document.getElementById('inputImportCatalog'),
    exportStatus: document.getElementById('exportStatus'),
    settingsForm: document.getElementById('settingsForm'),
    settingClassTitle: document.getElementById('settingClassTitle'),
    settingClassSubtitle: document.getElementById('settingClassSubtitle'),
    settingPin: document.getElementById('settingPin'),
    toast: document.getElementById('toast')
  };

  // ---- Helpers ----
  function escapeHtml(str) {
    return String(str ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function formatTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  let toastTimeout = null;
  function showToast(msg) {
    dom.toast.textContent = msg;
    dom.toast.classList.remove('hidden');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      dom.toast.classList.add('hidden');
    }, 3000);
  }

  function estimateDurationFromText(text) {
    const words = (text || '').trim().split(/\s+/).filter(Boolean).length;
    const mins = Math.max(1, Math.round(words / 135));
    return `${mins} min`;
  }

  function splitIntoParagraphsAndSentences(text) {
    const paragraphs = (text || '')
      .split(/\n\s*\n/)
      .map(p => p.trim())
      .filter(Boolean);

    const flatSentences = [];
    const structured = paragraphs.map(p => {
      const parts = p.match(/[^.!?…]+[.!?…]*/g) || [p];
      return parts
        .map(s => s.trim())
        .filter(Boolean)
        .map(s => {
          const idx = flatSentences.length;
          flatSentences.push(s);
          return { idx, text: s };
        });
    });
    return { structured, flatSentences };
  }

  function getStoryAudioSrc(story, gender = state.voiceGender) {
    if (!story) return '';
    if (story.audioFemaleUrl || story.audioMaleUrl) {
      return gender === 'male'
        ? (story.audioMaleUrl || story.audioFemaleUrl)
        : (story.audioFemaleUrl || story.audioMaleUrl);
    }
    if (story.audioType !== 'tts') {
      return story.audioData || story.audioUrl || '';
    }
    return '';
  }

  function storyHasRecordedAudio(story) {
    return Boolean(getStoryAudioSrc(story));
  }

  function storySupportsGenderSwitch(story) {
    if (!story) return false;
    if (story.audioFemaleUrl && story.audioMaleUrl) return true;
    return !storyHasRecordedAudio(story);
  }

  // ---- Persistence ----
  function loadStudentPrefs() {
    try {
      const listened = JSON.parse(localStorage.getItem('bs5_listened') || '[]');
      const favs = JSON.parse(localStorage.getItem('bs5_favorites') || '[]');
      state.listenedIds = new Set(listened);
      state.favoriteIds = new Set(favs);
      state.dyslexiaMode = localStorage.getItem('bs5_dyslexia') === '1';
      const vg = localStorage.getItem('bs5_voice_gender');
      if (vg === 'female' || vg === 'male') state.voiceGender = vg;
      const fs = parseFloat(localStorage.getItem('bs5_fontsize') || '1.08');
      if (fs >= 0.85 && fs <= 1.6) state.storyFontSize = fs;
    } catch {
      // Ignore storage errors
    }
    applyAccessibilityPrefs();
  }

  function saveStudentPrefs() {
    try {
      localStorage.setItem('bs5_listened', JSON.stringify([...state.listenedIds]));
      localStorage.setItem('bs5_favorites', JSON.stringify([...state.favoriteIds]));
      localStorage.setItem('bs5_dyslexia', state.dyslexiaMode ? '1' : '0');
      localStorage.setItem('bs5_voice_gender', state.voiceGender);
      localStorage.setItem('bs5_fontsize', String(state.storyFontSize));
    } catch {
      // Ignore
    }
  }

  function applyAccessibilityPrefs() {
    document.body.classList.toggle('dyslexia-mode', state.dyslexiaMode);
    dom.btnDyslexiaGlobal.setAttribute('aria-pressed', String(state.dyslexiaMode));
    dom.btnDyslexiaPlayer.setAttribute('aria-pressed', String(state.dyslexiaMode));
    document.documentElement.style.setProperty('--story-font-size', `${state.storyFontSize}rem`);
  }

  async function loadCatalog() {
    let remote = null;
    try {
      const res = await fetch('./stories.json', { cache: 'no-store' });
      if (res.ok) remote = await res.json();
    } catch {
      // Likely opened via file://; fall back gracefully
    }
    const base = remote && Array.isArray(remote.stories) ? remote : FALLBACK_CATALOG;
    const localOverride = await idbGet('catalog');

    if (localOverride && Array.isArray(localOverride.stories)) {
      // Merge: keep teacher local edits/stories, enrich with published dual-voice tracks if newly generated, and pull in brand-new published stories
      const deletedSet = new Set(localOverride.deletedIds || []);
      const baseMap = new Map(base.stories.map(s => [s.id, s]));
      const localMap = new Map();
      const merged = localOverride.stories.map(localStory => {
        const remoteMatch = baseMap.get(localStory.id);
        let finalStory = localStory;
        if (
          remoteMatch &&
          !localStory.audioData &&
          !localStory.audioFemaleUrl &&
          (remoteMatch.audioFemaleUrl || remoteMatch.audioMaleUrl)
        ) {
          finalStory = {
            ...localStory,
            audioType: remoteMatch.audioType || 'dual',
            audioFemaleUrl: remoteMatch.audioFemaleUrl,
            audioMaleUrl: remoteMatch.audioMaleUrl
          };
        }
        localMap.set(finalStory.id, finalStory);
        return finalStory;
      });
      for (const s of base.stories) {
        if (!localMap.has(s.id) && !deletedSet.has(s.id)) {
          merged.push(s);
        }
      }
      state.stories = merged;
      state.classTitle = localOverride.classTitle || base.classTitle || FALLBACK_CATALOG.classTitle;
      state.classSubtitle = localOverride.classSubtitle || base.classSubtitle || FALLBACK_CATALOG.classSubtitle;
      state.pinHash = localOverride.pinHash || base.pinHash || DEFAULT_PIN_HASH;
      state.deletedIds = deletedSet;
    } else {
      state.stories = [...base.stories];
      state.classTitle = base.classTitle || FALLBACK_CATALOG.classTitle;
      state.classSubtitle = base.classSubtitle || FALLBACK_CATALOG.classSubtitle;
      state.pinHash = base.pinHash || DEFAULT_PIN_HASH;
      state.deletedIds = new Set();
    }

    applyHashGrade();
    renderView();
  }

  function getStoryGrade(story) {
    return String(story && story.grade ? story.grade : '5');
  }

  function getGradeStories(grade) {
    const g = String(grade || '5');
    return state.stories.filter(s => getStoryGrade(s) === g);
  }

  function applyHashGrade() {
    const h = (window.location.hash || '').toLowerCase();
    if (h === '#5ano' || h === '#5') state.activeGrade = '5';
    else if (h === '#6ano' || h === '#6') state.activeGrade = '6';
    else state.activeGrade = null;
  }

  function selectGrade(grade, updateHash = true) {
    state.activeGrade = grade === '5' || grade === '6' ? grade : null;
    state.selectedCategory = 'Todas';
    state.searchQuery = '';
    if (dom.searchInput) dom.searchInput.value = '';
    if (updateHash) {
      const targetHash = state.activeGrade ? `#${state.activeGrade}ano` : '';
      if (window.location.hash !== targetHash) {
        if (targetHash) window.location.hash = targetHash;
        else history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    }
    renderView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderView() {
    const isMenu = !state.activeGrade;
    dom.homeMenu.classList.toggle('hidden', !isMenu);
    dom.libraryView.classList.toggle('hidden', isMenu);
    dom.gradeSwitcher.classList.toggle('hidden', isMenu);
    dom.progressPill.classList.toggle('hidden', isMenu);

    const count5 = getGradeStories('5').length;
    const count6 = getGradeStories('6').length;
    dom.countGrade5.textContent = count5 === 1 ? '1 história' : `${count5} histórias`;
    dom.countGrade6.textContent = count6 === 0 ? 'Em breve novas histórias' : count6 === 1 ? '1 história' : `${count6} histórias`;

    if (dom.topGradePills) {
      dom.topGradePills.querySelectorAll('button[data-grade]').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.grade === state.activeGrade);
      });
    }

    renderHeader();
    if (!isMenu) {
      renderCategories();
      renderStories();
    }
  }

  async function persistTeacherCatalog() {
    const payload = {
      classTitle: state.classTitle,
      classSubtitle: state.classSubtitle,
      pinHash: state.pinHash,
      stories: state.stories,
      deletedIds: [...(state.deletedIds || [])]
    };
    await idbSet('catalog', payload);
  }

  // ---- Rendering ----
  function renderHeader() {
    const baseTitle = (state.classTitle || 'OP 2.º Ciclo · Biblioteca').replace(/\s*·\s*5\.º\s*Ano/i, '').trim() || 'OP 2.º Ciclo · Biblioteca';
    if (state.activeGrade) {
      const title = `${baseTitle} · ${state.activeGrade}.º Ano`;
      dom.classTitle.textContent = title;
      dom.classSubtitle.textContent = 'Escolhe uma história, põe os auscultadores e deixa a imaginação viajar.';
      document.title = title;

      const gradeStories = getGradeStories(state.activeGrade);
      const total = gradeStories.length;
      const listenedCount = gradeStories.filter(s => state.listenedIds.has(s.id)).length;
      dom.progressText.textContent = `${listenedCount} de ${total} ouvidas`;
    } else {
      dom.classTitle.textContent = baseTitle;
      dom.classSubtitle.textContent = state.classSubtitle || 'Escolhe o teu ano, põe os auscultadores e deixa a imaginação viajar.';
      document.title = `${baseTitle} · 5.º e 6.º Ano`;
    }
  }

  function renderCategories() {
    dom.categoryPills.innerHTML = CATEGORIES.map(cat => {
      const active = state.selectedCategory === cat ? 'active' : '';
      return `<button type="button" class="cat-pill ${active}" data-cat="${escapeHtml(cat)}" role="tab" aria-selected="${active ? 'true' : 'false'}">${escapeHtml(cat)}</button>`;
    }).join('');
  }

  function getFilteredStories() {
    const q = state.searchQuery.trim().toLowerCase();
    const gradeStories = state.activeGrade ? getGradeStories(state.activeGrade) : state.stories;
    return gradeStories.filter(story => {
      if (state.selectedCategory === '⭐ Favoritas') {
        if (!state.favoriteIds.has(story.id)) return false;
      } else if (state.selectedCategory !== 'Todas') {
        if (story.category !== state.selectedCategory) return false;
      }

      if (!q) return true;
      const hay = `${story.title} ${story.description || ''} ${story.narrator || ''} ${story.category || ''}`.toLowerCase();
      return hay.includes(q);
    });
  }

  function renderStories() {
    const list = getFilteredStories();
    const gradeTotal = state.activeGrade ? getGradeStories(state.activeGrade).length : state.stories.length;
    renderHeader();

    if (list.length === 0) {
      dom.storiesGrid.innerHTML = '';
      dom.emptyState.classList.remove('hidden');
      if (gradeTotal === 0 && state.activeGrade) {
        dom.emptyStateTitle.textContent = `Biblioteca · ${state.activeGrade}.º Ano pronta!`;
        dom.emptyStateDesc.textContent = `Ainda não foram adicionadas histórias ao ${state.activeGrade}.º ano. Em breve o professor vai publicar as primeiras histórias aqui.`;
        dom.btnResetFilters.classList.add('hidden');
      } else {
        dom.emptyStateTitle.textContent = 'Ainda não há histórias nesta categoria';
        dom.emptyStateDesc.textContent = 'Tenta escolher outro tema ou pede ao professor para adicionar uma nova história.';
        dom.btnResetFilters.classList.remove('hidden');
      }
      return;
    }

    dom.emptyState.classList.add('hidden');
    dom.storiesGrid.innerHTML = list.map(story => {
      const listened = state.listenedIds.has(story.id);
      const fav = state.favoriteIds.has(story.id);
      const hasDual = Boolean(story.audioFemaleUrl && story.audioMaleUrl);
      const hasAudio = storyHasRecordedAudio(story);
      const theme = escapeHtml(story.coverTheme || 'emerald');

      return `
        <article class="story-card" data-id="${escapeHtml(story.id)}">
          <div class="card-cover theme-${theme}">
            <div class="card-cover-top">
              <span class="card-cat-badge">${escapeHtml(story.category || 'História')}</span>
              <div class="card-status-badges">
                ${listened ? '<span class="card-badge-circle" title="Já ouvida">✓ Ouvida</span>' : ''}
                ${fav ? '<span class="card-badge-circle" title="Favorita">★</span>' : ''}
              </div>
            </div>
            <div class="card-cover-icon" aria-hidden="true">${escapeHtml(story.icon || '🎧')}</div>
          </div>
          <div class="card-body">
            <h2 class="card-title">${escapeHtml(story.title)}</h2>
            <p class="card-meta">
              <span>⏱ ${escapeHtml(story.duration || '2 min')}</span>
              <span>·</span>
              <span>${hasDual ? '🎙️ Vozes PT-PT (F/M)' : hasAudio ? '🎙️ Áudio' : '🗣️ Voz PT'}</span>
              ${story.text ? '<span>· 📖 Texto</span>' : ''}
            </p>
            <p class="card-desc">${escapeHtml(story.description || 'Clica em Ouvir para começar esta história.')}</p>
            <div class="card-footer">
              <button type="button" class="btn btn-primary btn-listen" data-action="open" data-id="${escapeHtml(story.id)}">
                ▶ Ouvir história
              </button>
              <button type="button" class="icon-btn ${fav ? 'fav-active' : ''}" data-action="fav" data-id="${escapeHtml(story.id)}" title="Guardar nas favoritas" aria-label="Favorita">
                ${fav ? '★' : '☆'}
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // ---- Player Logic ----
  function openPlayer(storyId) {
    const story = state.stories.find(s => s.id === storyId);
    if (!story) return;

    stopPlayback();
    state.activeStory = story;
    state.ttsCurrentIdx = 0;
    state.ttsPaused = false;

    const hasRecorded = storyHasRecordedAudio(story);
    const hasDualTracks = Boolean(story.audioFemaleUrl && story.audioMaleUrl);

    dom.playerCategory.textContent = story.category || 'História';
    dom.playerAudioBadge.textContent = hasDualTracks
      ? (state.voiceGender === 'male' ? '🎙️ Voz PT-PT · Duarte' : '🎙️ Voz PT-PT · Raquel')
      : hasRecorded
      ? '🎙️ Áudio Gravado'
      : '🗣️ Voz Automática PT';
    dom.voiceGenderGroup.classList.toggle('hidden', !storySupportsGenderSwitch(story));
    dom.voiceGenderSelector.querySelectorAll('button').forEach(b => {
      b.classList.toggle('active', b.dataset.gender === state.voiceGender);
    });
    dom.playerTitle.textContent = story.title;
    dom.playerNarrator.textContent = story.narrator || 'Biblioteca da Turma';
    dom.playerDescription.textContent = story.description || '';
    dom.playerIcon.textContent = story.icon || '🎧';
    dom.playerCover.className = `player-cover theme-${story.coverTheme || 'emerald'}`;
    dom.playerNotice.classList.add('hidden');
    dom.progressSlider.value = 0;
    dom.timeCurrent.textContent = '0:00';
    dom.timeTotal.textContent = story.duration || '0:00';

    updatePlayerFavAndListenedButtons();

    // Render Read-Along text if available
    if (story.text && story.text.trim()) {
      const { structured, flatSentences } = splitIntoParagraphsAndSentences(story.text);
      state.ttsSentences = flatSentences;
      dom.readAlongBox.classList.remove('hidden');
      dom.storyTextContainer.innerHTML = structured
        .map(para =>
          `<p class="story-paragraph">${para
            .map(s => `<span class="story-sentence" data-idx="${s.idx}">${escapeHtml(s.text)}</span> `)
            .join('')}</p>`
        )
        .join('');
      state.textVisible = true;
      dom.storyTextContainer.classList.remove('hidden');
      dom.textTools.classList.remove('hidden');
      dom.btnToggleText.textContent = '📖 Esconder texto';
      dom.btnToggleText.setAttribute('aria-expanded', 'true');
    } else {
      state.ttsSentences = [];
      dom.readAlongBox.classList.add('hidden');
    }

    // Prepare audio source
    if (hasRecorded) {
      dom.progressSlider.max = 100;
      state.audioEl.src = getStoryAudioSrc(story, state.voiceGender);
      state.audioEl.playbackRate = state.playbackRate;
      state.audioEl.load();
    } else {
      dom.progressSlider.max = Math.max(1, state.ttsSentences.length);
      dom.timeCurrent.textContent = `0/${state.ttsSentences.length}`;
      dom.timeTotal.textContent = `${state.ttsSentences.length} frases`;
    }

    dom.playerModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closePlayer() {
    stopPlayback();
    state.activeStory = null;
    dom.playerModal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  function updatePlayerFavAndListenedButtons() {
    if (!state.activeStory) return;
    const id = state.activeStory.id;
    const isFav = state.favoriteIds.has(id);
    const isListened = state.listenedIds.has(id);

    dom.btnFavoritePlayer.textContent = isFav ? '★' : '☆';
    dom.btnFavoritePlayer.classList.toggle('fav-active', isFav);

    dom.btnToggleListened.classList.toggle('active', isListened);
    dom.btnToggleListened.textContent = isListened ? '✓ Já ouvida!' : '✓ Marcar como ouvida';
  }

  function setPlayingUI(playing) {
    state.isPlaying = playing;
    dom.playPauseIcon.textContent = playing ? '⏸' : '▶';
    dom.btnPlayPause.setAttribute('aria-label', playing ? 'Pausar história' : 'Ouvir história');
    dom.playerEqualizer.classList.toggle('playing', playing);
    if (playing && state.ambientMode !== 'off') {
      ambient.start(state.ambientMode);
    } else if (!playing) {
      ambient.stop();
    }
  }

  function stopPlayback() {
    // Stop HTML5 Audio
    state.audioEl.pause();
    state.audioEl.currentTime = 0;

    // Stop TTS
    state.ttsSessionId++;
    state.ttsPaused = false;
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }

    ambient.stop();
    setPlayingUI(false);
    clearSentenceHighlight();
  }

  function markStoryFinished(story) {
    if (!story) return;
    if (!state.listenedIds.has(story.id)) {
      state.listenedIds.add(story.id);
      saveStudentPrefs();
      updatePlayerFavAndListenedButtons();
      renderStories();
      showToast(`⭐ Bravo! Terminaste "${story.title}"!`);
    }
  }

  // ---- HTML5 Audio Listeners ----
  state.audioEl.addEventListener('loadedmetadata', () => {
    if (!state.activeStory || !storyHasRecordedAudio(state.activeStory)) return;
    if (Number.isFinite(state.audioEl.duration)) {
      dom.progressSlider.max = state.audioEl.duration;
      dom.timeTotal.textContent = formatTime(state.audioEl.duration);
    }
  });

  state.audioEl.addEventListener('timeupdate', () => {
    if (!state.activeStory || !storyHasRecordedAudio(state.activeStory)) return;
    dom.progressSlider.value = state.audioEl.currentTime;
    dom.timeCurrent.textContent = formatTime(state.audioEl.currentTime);
  });

  state.audioEl.addEventListener('ended', () => {
    setPlayingUI(false);
    markStoryFinished(state.activeStory);
  });

  state.audioEl.addEventListener('error', () => {
    setPlayingUI(false);
    dom.playerNotice.textContent = 'Não foi possível carregar o ficheiro de áudio desta história.';
    dom.playerNotice.classList.remove('hidden');
  });

  // ---- Portuguese Web Speech Synthesis Engine (Fallback) ----
  const MALE_VOICE_RE = /duarte|cristiano|ant[oó]nio|daniel|felipe|henrique|tiago|paulo|jorge|donato|f[aá]bio|nicolau|male|homem|masculin/i;
  const FEMALE_VOICE_RE = /raquel|joana|fernanda|catarina|in[eê]s|francisca|maria|luciana|thalita|vit[oó]ria|camila|female|mulher|feminin/i;
  const NATURAL_VOICE_RE = /natural|neural|online|premium|enhanced|melhorada/i;

  function pickPortugueseVoice(gender = state.voiceGender) {
    if (!('speechSynthesis' in window)) return { voice: null, matchedGender: false };
    const voices = (window.speechSynthesis.getVoices() || []).filter(v =>
      v.lang.toLowerCase().startsWith('pt')
    );
    if (voices.length === 0) return { voice: null, matchedGender: false };

    const targetRe = gender === 'male' ? MALE_VOICE_RE : FEMALE_VOICE_RE;
    const otherRe = gender === 'male' ? FEMALE_VOICE_RE : MALE_VOICE_RE;

    let best = null;
    let bestScore = -1;
    let bestMatchedGender = false;

    for (const v of voices) {
      const lang = v.lang.toLowerCase();
      let score = 0;
      if (lang === 'pt-pt') score += 120;
      else score += 20;

      if (NATURAL_VOICE_RE.test(v.name)) score += 70;
      const matchesTarget = targetRe.test(v.name);
      if (matchesTarget) score += 50;
      else if (otherRe.test(v.name)) score -= 15;

      if (score > bestScore) {
        bestScore = score;
        best = v;
        bestMatchedGender = matchesTarget;
      }
    }
    return { voice: best, matchedGender: bestMatchedGender };
  }

  function highlightSentence(idx) {
    clearSentenceHighlight();
    const el = dom.storyTextContainer.querySelector(`.story-sentence[data-idx="${idx}"]`);
    if (el) {
      el.classList.add('active-sentence');
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  function clearSentenceHighlight() {
    dom.storyTextContainer.querySelectorAll('.story-sentence.active-sentence').forEach(el => {
      el.classList.remove('active-sentence');
    });
  }

  function speakSentenceAt(idx) {
    if (!('speechSynthesis' in window)) {
      dom.playerNotice.textContent = 'Este navegador não suporta leitura automática de texto. Podes gravar ou carregar um ficheiro MP3 no Modo Professor.';
      dom.playerNotice.classList.remove('hidden');
      setPlayingUI(false);
      return;
    }

    if (idx < 0) idx = 0;
    if (idx >= state.ttsSentences.length) {
      setPlayingUI(false);
      clearSentenceHighlight();
      dom.progressSlider.value = state.ttsSentences.length;
      dom.timeCurrent.textContent = `${state.ttsSentences.length}/${state.ttsSentences.length}`;
      markStoryFinished(state.activeStory);
      return;
    }

    state.ttsCurrentIdx = idx;
    state.ttsPaused = false;
    const mySession = ++state.ttsSessionId;
    window.speechSynthesis.cancel();

    const sentence = state.ttsSentences[idx];
    const utter = new SpeechSynthesisUtterance(sentence);
    const { voice, matchedGender } = pickPortugueseVoice(state.voiceGender);
    if (voice) utter.voice = voice;
    utter.lang = voice ? voice.lang : 'pt-PT';
    utter.rate = state.playbackRate;
    if (!matchedGender && state.voiceGender === 'male') {
      utter.pitch = 0.82;
    } else {
      utter.pitch = 1.0;
    }

    highlightSentence(idx);
    dom.progressSlider.value = idx + 1;
    dom.timeCurrent.textContent = `${idx + 1}/${state.ttsSentences.length}`;

    utter.onend = () => {
      if (mySession !== state.ttsSessionId) return;
      if (!state.isPlaying) return;
      speakSentenceAt(idx + 1);
    };

    utter.onerror = (e) => {
      if (mySession !== state.ttsSessionId) return;
      if (e.error === 'interrupted' || e.error === 'canceled') return;
      setPlayingUI(false);
    };

    setPlayingUI(true);
    window.speechSynthesis.speak(utter);
  }

  function togglePlayPause() {
    if (!state.activeStory) return;

    if (storyHasRecordedAudio(state.activeStory)) {
      if (state.isPlaying) {
        state.audioEl.pause();
        setPlayingUI(false);
      } else {
        state.audioEl.playbackRate = state.playbackRate;
        state.audioEl.play().then(() => {
          setPlayingUI(true);
        }).catch(() => {
          dom.playerNotice.textContent = 'Clica novamente em Ouvir para iniciar o áudio.';
          dom.playerNotice.classList.remove('hidden');
        });
      }
      return;
    }

    // TTS Mode
    if (state.ttsSentences.length === 0) {
      dom.playerNotice.textContent = 'Esta história ainda não tem texto nem áudio associado.';
      dom.playerNotice.classList.remove('hidden');
      return;
    }

    if (state.isPlaying) {
      state.ttsSessionId++;
      state.ttsPaused = true;
      window.speechSynthesis.cancel();
      setPlayingUI(false);
    } else {
      const startIdx = state.ttsCurrentIdx >= state.ttsSentences.length ? 0 : state.ttsCurrentIdx;
      speakSentenceAt(startIdx);
    }
  }

  function skipBy(deltaSeconds) {
    if (!state.activeStory) return;
    if (storyHasRecordedAudio(state.activeStory)) {
      const next = Math.max(0, Math.min(state.audioEl.duration || 0, state.audioEl.currentTime + deltaSeconds));
      state.audioEl.currentTime = next;
    } else {
      const step = deltaSeconds < 0 ? -1 : 1;
      const nextIdx = Math.max(0, Math.min(state.ttsSentences.length - 1, state.ttsCurrentIdx + step));
      state.ttsCurrentIdx = nextIdx;
      if (state.isPlaying) {
        speakSentenceAt(nextIdx);
      } else {
        highlightSentence(nextIdx);
        dom.progressSlider.value = nextIdx + 1;
        dom.timeCurrent.textContent = `${nextIdx + 1}/${state.ttsSentences.length}`;
      }
    }
  }

  // ---- Teacher Mode & Recorder ----
  function openPinModal() {
    dom.pinInput.value = '';
    dom.pinError.classList.add('hidden');
    dom.pinModal.classList.remove('hidden');
    setTimeout(() => dom.pinInput.focus(), 50);
  }

  function closePinModal() {
    dom.pinModal.classList.add('hidden');
  }

  function openTeacherModal() {
    dom.settingClassTitle.value = state.classTitle;
    dom.settingClassSubtitle.value = state.classSubtitle;
    dom.settingPin.value = '';
    if (dom.inputGrade && !dom.editingStoryId.value) {
      dom.inputGrade.value = state.activeGrade || '5';
    }
    renderManageList();
    dom.teacherModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeTeacherModal() {
    stopRecordingIfActive();
    dom.teacherModal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  function switchTeacherTab(tabName) {
    dom.teacherTabs.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabName);
    });
    dom.teacherTabAdd.classList.toggle('hidden', tabName !== 'add');
    dom.teacherTabManage.classList.toggle('hidden', tabName !== 'manage');
    dom.teacherTabPublish.classList.toggle('hidden', tabName !== 'publish');
    if (tabName === 'manage') renderManageList();
  }

  function setAudioSourceMode(mode) {
    state.selectedSource = mode;
    dom.audioSourceTabs.querySelectorAll('.source-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.source === mode);
    });
    dom.sourceRecordPanel.classList.toggle('hidden', mode !== 'record');
    dom.sourceUploadPanel.classList.toggle('hidden', mode !== 'upload');
    dom.sourceTtsPanel.classList.toggle('hidden', mode !== 'tts');
  }

  function setSelectedTheme(theme) {
    state.selectedTheme = theme;
    dom.themePicker.querySelectorAll('.theme-swatch').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.theme === theme);
    });
  }

  function resetStoryForm() {
    stopRecordingIfActive();
    dom.storyForm.reset();
    dom.editingStoryId.value = '';
    state.draftAudioData = '';
    dom.recordPreview.src = '';
    dom.recordPreview.classList.add('hidden');
    dom.uploadPreview.src = '';
    dom.uploadPreview.classList.add('hidden');
    dom.recordTimer.textContent = '00:00';
    dom.recordStatus.textContent = 'Pronto para gravar a tua voz';
    dom.uploadInfo.textContent = 'Aceita MP3, WAV, M4A ou OGG. Dica: gravações até ~4–5 MB ficam fáceis de exportar num único ficheiro.';
    dom.btnSaveStory.textContent = 'Guardar história na biblioteca';
    setSelectedTheme('emerald');
    setAudioSourceMode('record');
  }

  function stopRecordingIfActive() {
    if (state.mediaRecorder && state.mediaRecorder.state === 'recording') {
      state.mediaRecorder.stop();
    }
    clearInterval(state.recordTimerInterval);
    dom.btnRecordToggle.classList.remove('recording');
    dom.btnRecordToggle.textContent = '● Começar a gravar';
  }

  async function toggleRecording() {
    if (state.mediaRecorder && state.mediaRecorder.state === 'recording') {
      stopRecordingIfActive();
      return;
    }

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      dom.recordStatus.textContent = 'Gravação de microfone indisponível neste navegador. Usa "Carregar ficheiro MP3/WAV".';
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
        ? 'audio/webm;codecs=opus'
        : MediaRecorder.isTypeSupported('audio/mp4')
        ? 'audio/mp4'
        : '';

      const recorder = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);
      state.mediaRecorder = recorder;
      state.recordChunks = [];
      state.recordSeconds = 0;

      recorder.ondataavailable = e => {
        if (e.data && e.data.size > 0) state.recordChunks.push(e.data);
      };

      recorder.onstop = () => {
        stream.getTracks().forEach(t => t.stop());
        clearInterval(state.recordTimerInterval);
        const blob = new Blob(state.recordChunks, { type: recorder.mimeType || 'audio/webm' });
        const reader = new FileReader();
        reader.onloadend = () => {
          state.draftAudioData = reader.result;
          dom.recordPreview.src = state.draftAudioData;
          dom.recordPreview.classList.remove('hidden');
          const mins = Math.max(1, Math.round(state.recordSeconds / 60));
          if (!dom.inputDuration.value.trim()) {
            dom.inputDuration.value = state.recordSeconds < 60 ? `${state.recordSeconds} seg` : `${mins} min`;
          }
          dom.recordStatus.textContent = 'Gravação concluída! Podes ouvir abaixo antes de guardar.';
        };
        reader.readAsDataURL(blob);
      };

      recorder.start();
      dom.btnRecordToggle.classList.add('recording');
      dom.btnRecordToggle.textContent = '■ Parar gravação';
      dom.recordStatus.textContent = 'A gravar... fala normalmente para o microfone.';
      dom.recordTimer.textContent = '00:00';

      state.recordTimerInterval = setInterval(() => {
        state.recordSeconds++;
        const m = String(Math.floor(state.recordSeconds / 60)).padStart(2, '0');
        const s = String(state.recordSeconds % 60).padStart(2, '0');
        dom.recordTimer.textContent = `${m}:${s}`;
      }, 1000);
    } catch {
      dom.recordStatus.textContent = 'Sem permissão de microfone. Permite o acesso no navegador ou carrega um ficheiro de áudio.';
    }
  }

  function handleAudioFileUpload(file) {
    if (!file) return;
    const sizeMb = (file.size / (1024 * 1024)).toFixed(2);
    const reader = new FileReader();
    reader.onloadend = () => {
      state.draftAudioData = reader.result;
      dom.uploadPreview.src = state.draftAudioData;
      dom.uploadPreview.classList.remove('hidden');
      dom.uploadInfo.textContent = `Ficheiro carregado: ${file.name} (${sizeMb} MB).`;
    };
    reader.readAsDataURL(file);
  }

  async function saveStoryFromForm(e) {
    e.preventDefault();
    const title = dom.inputTitle.value.trim();
    if (!title) return;

    const text = dom.inputText.value.trim();
    const editingId = dom.editingStoryId.value.trim();
    const existing = editingId ? state.stories.find(s => s.id === editingId) : null;

    let audioType = state.selectedSource === 'tts' ? 'tts' : 'recorded';
    let audioData = '';
    let audioUrl = existing ? existing.audioUrl || '' : '';

    if (audioType === 'recorded') {
      audioData = state.draftAudioData || (existing ? existing.audioData || '' : '');
      if (!audioData && !audioUrl) {
        if (text) {
          audioType = 'tts';
          showToast('Sem áudio gravado — guardada com Leitura Automática em PT.');
        } else {
          showToast('Grava um áudio, carrega um ficheiro ou escreve o texto da história.');
          return;
        }
      }
    } else if (!text) {
      showToast('Escreve ou cola o texto para usar a Leitura Automática.');
      return;
    }

    const duration =
      dom.inputDuration.value.trim() ||
      (existing && existing.duration) ||
      (text ? estimateDurationFromText(text) : '2 min');

    const storyObj = {
      id: existing ? existing.id : `historia-${Date.now()}`,
      grade: dom.inputGrade ? dom.inputGrade.value || '5' : (existing ? getStoryGrade(existing) : state.activeGrade || '5'),
      title,
      narrator: dom.inputNarrator.value.trim() || 'Professor',
      category: dom.inputCategory.value || 'Aventura',
      duration,
      coverTheme: state.selectedTheme,
      icon: dom.inputIcon.value || '🎧',
      description: dom.inputDescription.value.trim() || (text ? `${text.slice(0, 120)}...` : 'História em áudio para a turma.'),
      audioType,
      audioUrl,
      audioData,
      text,
      createdAt: existing ? existing.createdAt : new Date().toISOString().slice(0, 10)
    };

    if (existing) {
      state.stories = state.stories.map(s => (s.id === existing.id ? storyObj : s));
      showToast(`História "${title}" atualizada!`);
    } else {
      state.stories.unshift(storyObj);
      showToast(`História "${title}" adicionada ao ${storyObj.grade}.º Ano!`);
    }

    await persistTeacherCatalog();
    resetStoryForm();
    renderView();
    renderManageList();
  }

  function renderManageList() {
    if (state.stories.length === 0) {
      dom.manageStoriesList.innerHTML = '<p class="muted">Ainda não existem histórias na biblioteca.</p>';
      return;
    }

    dom.manageStoriesList.innerHTML = state.stories
      .map(s => {
        const hasAudio = storyHasRecordedAudio(s);
        const g = getStoryGrade(s);
        return `
          <div class="manage-item">
            <div class="manage-item-info">
              <div class="manage-thumb theme-${escapeHtml(s.coverTheme || 'emerald')}">${escapeHtml(s.icon || '🎧')}</div>
              <div>
                <h4>${escapeHtml(s.title)}</h4>
                <p><strong>${escapeHtml(g)}.º Ano</strong> · ${escapeHtml(s.category)} · ${escapeHtml(s.duration || '2 min')} · ${hasAudio ? 'Áudio gravado' : 'Voz automática PT'}</p>
              </div>
            </div>
            <div class="manage-actions">
              <button type="button" class="btn btn-outline btn-sm" data-manage="edit" data-id="${escapeHtml(s.id)}">Editar</button>
              <button type="button" class="btn btn-ghost btn-sm" data-manage="delete" data-id="${escapeHtml(s.id)}">Apagar</button>
            </div>
          </div>
        `;
      })
      .join('');
  }

  function editStory(storyId) {
    const s = state.stories.find(item => item.id === storyId);
    if (!s) return;

    resetStoryForm();
    dom.editingStoryId.value = s.id;
    dom.inputTitle.value = s.title || '';
    dom.inputNarrator.value = s.narrator || '';
    if (dom.inputGrade) dom.inputGrade.value = getStoryGrade(s);
    dom.inputCategory.value = s.category || 'Aventura';
    dom.inputDuration.value = s.duration || '';
    dom.inputIcon.value = s.icon || '🎧';
    dom.inputDescription.value = s.description || '';
    dom.inputText.value = s.text || '';
    setSelectedTheme(s.coverTheme || 'emerald');

    if (storyHasRecordedAudio(s)) {
      state.draftAudioData = s.audioData || '';
      setAudioSourceMode('upload');
      if (s.audioData || s.audioUrl) {
        dom.uploadPreview.src = s.audioData || s.audioUrl;
        dom.uploadPreview.classList.remove('hidden');
        dom.uploadInfo.textContent = 'Áudio atual mantido (podes substituir carregando um novo ficheiro).';
      }
    } else {
      setAudioSourceMode('tts');
    }

    dom.btnSaveStory.textContent = 'Guardar alterações';
    switchTeacherTab('add');
  }

  async function deleteStory(storyId) {
    const s = state.stories.find(item => item.id === storyId);
    if (!s) return;
    if (!window.confirm(`Tens a certeza de que queres apagar "${s.title}"?`)) return;

    state.stories = state.stories.filter(item => item.id !== storyId);
    state.deletedIds = state.deletedIds || new Set();
    state.deletedIds.add(storyId);
    await persistTeacherCatalog();
    renderStories();
    renderManageList();
    showToast('História removida da biblioteca.');
  }

  function exportCatalogJson() {
    const exportData = {
      classTitle: state.classTitle,
      classSubtitle: state.classSubtitle,
      stories: state.stories
    };
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'stories.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    dom.exportStatus.textContent = `Ficheiro stories.json descarregado com ${state.stories.length} história(s)! Substitui o ficheiro na pasta e publica.`;
    showToast('stories.json descarregado!');
  }

  function importCatalogJson(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const parsed = JSON.parse(reader.result);
        if (!parsed || !Array.isArray(parsed.stories)) {
          throw new Error('Formato inválido');
        }
        state.stories = parsed.stories;
        if (parsed.classTitle) state.classTitle = parsed.classTitle;
        if (parsed.classSubtitle) state.classSubtitle = parsed.classSubtitle;
        state.deletedIds = new Set();
        await persistTeacherCatalog();
        renderStories();
        renderManageList();
        showToast(`Importadas ${state.stories.length} histórias com sucesso!`);
      } catch {
        showToast('Ficheiro JSON inválido. Escolhe um backup stories.json válido.');
      }
    };
    reader.readAsText(file);
  }

  // ---- Event Wiring ----
  function bindEvents() {
    // Category filters
    dom.categoryPills.addEventListener('click', e => {
      const btn = e.target.closest('.cat-pill');
      if (!btn) return;
      state.selectedCategory = btn.dataset.cat;
      renderCategories();
      renderStories();
    });

    // Search
    dom.searchInput.addEventListener('input', e => {
      state.searchQuery = e.target.value;
      renderStories();
    });

    dom.btnResetFilters.addEventListener('click', () => {
      state.selectedCategory = 'Todas';
      state.searchQuery = '';
      dom.searchInput.value = '';
      renderCategories();
      renderStories();
    });

    // Story Card clicks
    dom.storiesGrid.addEventListener('click', e => {
      const btn = e.target.closest('[data-action]');
      if (!btn) return;
      const id = btn.dataset.id;
      if (btn.dataset.action === 'open') {
        openPlayer(id);
      } else if (btn.dataset.action === 'fav') {
        if (state.favoriteIds.has(id)) {
          state.favoriteIds.delete(id);
        } else {
          state.favoriteIds.add(id);
        }
        saveStudentPrefs();
        renderStories();
      }
    });

    // Dyslexia global & player toggles
    const toggleDyslexia = () => {
      state.dyslexiaMode = !state.dyslexiaMode;
      applyAccessibilityPrefs();
      saveStudentPrefs();
      showToast(state.dyslexiaMode ? 'Modo Leitura Fácil ativado' : 'Modo Leitura Fácil desativado');
    };
    dom.btnDyslexiaGlobal.addEventListener('click', toggleDyslexia);
    dom.btnDyslexiaPlayer.addEventListener('click', toggleDyslexia);

    // Player controls
    dom.btnClosePlayer.addEventListener('click', closePlayer);
    dom.playerModal.addEventListener('click', e => {
      if (e.target === dom.playerModal) closePlayer();
    });

    dom.btnPlayPause.addEventListener('click', togglePlayPause);
    dom.btnSkipBack.addEventListener('click', () => skipBy(-10));
    dom.btnSkipForward.addEventListener('click', () => skipBy(10));

    dom.progressSlider.addEventListener('input', e => {
      const val = parseFloat(e.target.value);
      if (!state.activeStory) return;
      if (storyHasRecordedAudio(state.activeStory)) {
        state.audioEl.currentTime = val;
        dom.timeCurrent.textContent = formatTime(val);
      } else {
        const idx = Math.max(0, Math.min(state.ttsSentences.length - 1, Math.round(val) - 1));
        state.ttsCurrentIdx = idx;
        if (state.isPlaying) {
          speakSentenceAt(idx);
        } else {
          highlightSentence(idx);
          dom.timeCurrent.textContent = `${idx + 1}/${state.ttsSentences.length}`;
        }
      }
    });

    dom.voiceGenderSelector.addEventListener('click', e => {
      const btn = e.target.closest('button[data-gender]');
      if (!btn || !state.activeStory) return;
      const nextGender = btn.dataset.gender;
      if (nextGender === state.voiceGender) return;
      state.voiceGender = nextGender;
      saveStudentPrefs();
      dom.voiceGenderSelector.querySelectorAll('button').forEach(b => b.classList.toggle('active', b === btn));

      const hasDualTracks = Boolean(state.activeStory.audioFemaleUrl && state.activeStory.audioMaleUrl);
      if (hasDualTracks) {
        const wasPlaying = state.isPlaying;
        const prevTime = state.audioEl.currentTime || 0;
        const prevDuration = state.audioEl.duration || 0;
        const ratio = prevDuration > 0 ? prevTime / prevDuration : 0;

        dom.playerAudioBadge.textContent = nextGender === 'male' ? '🎙️ Voz PT-PT · Duarte' : '🎙️ Voz PT-PT · Raquel';
        state.audioEl.src = getStoryAudioSrc(state.activeStory, nextGender);
        state.audioEl.playbackRate = state.playbackRate;
        state.audioEl.load();

        const resumeAtPos = () => {
          state.audioEl.removeEventListener('loadedmetadata', resumeAtPos);
          if (Number.isFinite(state.audioEl.duration) && ratio > 0) {
            state.audioEl.currentTime = Math.min(state.audioEl.duration - 0.2, ratio * state.audioEl.duration);
          }
          if (wasPlaying) {
            state.audioEl.play().then(() => setPlayingUI(true)).catch(() => setPlayingUI(false));
          }
        };
        state.audioEl.addEventListener('loadedmetadata', resumeAtPos);
      } else if (!storyHasRecordedAudio(state.activeStory) && state.isPlaying) {
        speakSentenceAt(state.ttsCurrentIdx);
      }
      showToast(nextGender === 'male' ? 'Voz alterada para Masculina (PT-PT)' : 'Voz alterada para Feminina (PT-PT)');
    });

    dom.speedSelector.addEventListener('click', e => {
      const btn = e.target.closest('button[data-speed]');
      if (!btn) return;
      state.playbackRate = parseFloat(btn.dataset.speed);
      dom.speedSelector.querySelectorAll('button').forEach(b => b.classList.toggle('active', b === btn));
      if (state.activeStory && storyHasRecordedAudio(state.activeStory)) {
        state.audioEl.playbackRate = state.playbackRate;
      } else if (state.isPlaying) {
        speakSentenceAt(state.ttsCurrentIdx);
      }
    });

    dom.ambientSelect.addEventListener('change', e => {
      state.ambientMode = e.target.value;
      if (state.isPlaying) {
        ambient.start(state.ambientMode);
      } else if (state.ambientMode === 'off') {
        ambient.stop();
      }
    });

    dom.btnFavoritePlayer.addEventListener('click', () => {
      if (!state.activeStory) return;
      const id = state.activeStory.id;
      if (state.favoriteIds.has(id)) state.favoriteIds.delete(id);
      else state.favoriteIds.add(id);
      saveStudentPrefs();
      updatePlayerFavAndListenedButtons();
      renderStories();
    });

    dom.btnToggleListened.addEventListener('click', () => {
      if (!state.activeStory) return;
      const id = state.activeStory.id;
      if (state.listenedIds.has(id)) state.listenedIds.delete(id);
      else state.listenedIds.add(id);
      saveStudentPrefs();
      updatePlayerFavAndListenedButtons();
      renderStories();
    });

    // Click sentence to jump in TTS mode
    dom.storyTextContainer.addEventListener('click', e => {
      const span = e.target.closest('.story-sentence');
      if (!span || !state.activeStory) return;
      if (!storyHasRecordedAudio(state.activeStory)) {
        const idx = parseInt(span.dataset.idx, 10);
        if (!Number.isNaN(idx)) speakSentenceAt(idx);
      }
    });

    dom.btnToggleText.addEventListener('click', () => {
      state.textVisible = !state.textVisible;
      dom.storyTextContainer.classList.toggle('hidden', !state.textVisible);
      dom.textTools.classList.toggle('hidden', !state.textVisible);
      dom.btnToggleText.textContent = state.textVisible ? '📖 Esconder texto' : '📖 Mostrar texto (Ler e Ouvir)';
      dom.btnToggleText.setAttribute('aria-expanded', String(state.textVisible));
    });

    dom.btnFontSmaller.addEventListener('click', () => {
      state.storyFontSize = Math.max(0.88, +(state.storyFontSize - 0.1).toFixed(2));
      applyAccessibilityPrefs();
      saveStudentPrefs();
    });

    dom.btnFontLarger.addEventListener('click', () => {
      state.storyFontSize = Math.min(1.58, +(state.storyFontSize + 0.1).toFixed(2));
      applyAccessibilityPrefs();
      saveStudentPrefs();
    });

    // PIN & Teacher Mode
    dom.btnTeacherMode.addEventListener('click', openPinModal);
    dom.btnClosePin.addEventListener('click', closePinModal);
    dom.btnCancelPin.addEventListener('click', closePinModal);
    dom.pinModal.addEventListener('click', e => {
      if (e.target === dom.pinModal) closePinModal();
    });

    dom.pinForm.addEventListener('submit', async e => {
      e.preventDefault();
      const enteredHash = await hashPin(dom.pinInput.value);
      if (enteredHash && enteredHash === state.pinHash) {
        closePinModal();
        openTeacherModal();
      } else {
        dom.pinError.classList.remove('hidden');
        dom.pinInput.select();
      }
    });

    dom.btnCloseTeacher.addEventListener('click', closeTeacherModal);
    dom.teacherModal.addEventListener('click', e => {
      if (e.target === dom.teacherModal) closeTeacherModal();
    });

    dom.teacherTabs.forEach(btn => {
      btn.addEventListener('click', () => switchTeacherTab(btn.dataset.tab));
    });

    dom.themePicker.addEventListener('click', e => {
      const btn = e.target.closest('.theme-swatch');
      if (btn) setSelectedTheme(btn.dataset.theme);
    });

    dom.audioSourceTabs.addEventListener('click', e => {
      const btn = e.target.closest('.source-btn');
      if (btn) setAudioSourceMode(btn.dataset.source);
    });

    dom.btnRecordToggle.addEventListener('click', toggleRecording);
    dom.inputAudioFile.addEventListener('change', e => handleAudioFileUpload(e.target.files[0]));
    dom.btnResetStoryForm.addEventListener('click', resetStoryForm);
    dom.storyForm.addEventListener('submit', saveStoryFromForm);

    dom.manageStoriesList.addEventListener('click', e => {
      const btn = e.target.closest('[data-manage]');
      if (!btn) return;
      if (btn.dataset.manage === 'edit') editStory(btn.dataset.id);
      if (btn.dataset.manage === 'delete') deleteStory(btn.dataset.id);
    });

    dom.btnExportCatalog.addEventListener('click', exportCatalogJson);
    dom.inputImportCatalog.addEventListener('change', e => {
      importCatalogJson(e.target.files[0]);
      e.target.value = '';
    });

    dom.settingsForm.addEventListener('submit', async e => {
      e.preventDefault();
      state.classTitle = dom.settingClassTitle.value.trim() || FALLBACK_CATALOG.classTitle;
      state.classSubtitle = dom.settingClassSubtitle.value.trim() || FALLBACK_CATALOG.classSubtitle;
      const newPin = dom.settingPin.value.trim();
      if (newPin.length >= 4) {
        const hashed = await hashPin(newPin);
        if (hashed) state.pinHash = hashed;
        dom.settingPin.value = '';
      }
      await persistTeacherCatalog();
      renderHeader();
      showToast('Definições guardadas com sucesso!');
    });

    // Home menu & Grade navigation
    dom.homeMenu.addEventListener('click', e => {
      const card = e.target.closest('[data-enter-grade]');
      if (card) selectGrade(card.dataset.enterGrade);
    });

    dom.btnBackToMenu.addEventListener('click', () => selectGrade(null));

    dom.topGradePills.addEventListener('click', e => {
      const btn = e.target.closest('button[data-grade]');
      if (btn) selectGrade(btn.dataset.grade);
    });

    window.addEventListener('hashchange', () => {
      applyHashGrade();
      renderView();
    });

    // Keyboard Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        if (!dom.playerModal.classList.contains('hidden')) closePlayer();
        else if (!dom.pinModal.classList.contains('hidden')) closePinModal();
        else if (!dom.teacherModal.classList.contains('hidden')) closeTeacherModal();
      }
    });

    // Warm up speechSynthesis voices list
    if ('speechSynthesis' in window) {
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
    }
  }

  // ---- Init ----
  loadStudentPrefs();
  bindEvents();
  loadCatalog();
})();
