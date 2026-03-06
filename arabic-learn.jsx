import { useState } from "react";

const LETTERS = [
  { letter: 'أ', arabicName: 'أَلِف', name: 'Alef', color: '#FF6B6B' },
  { letter: 'ب', arabicName: 'بَاء', name: 'Ba', color: '#FF9800' },
  { letter: 'ت', arabicName: 'تَاء', name: 'Ta', color: '#FFD600' },
  { letter: 'ث', arabicName: 'ثَاء', name: 'Tha', color: '#4CAF50' },
  { letter: 'ج', arabicName: 'جِيم', name: 'Jim', color: '#00BCD4' },
  { letter: 'ح', arabicName: 'حَاء', name: 'Ha', color: '#2196F3' },
  { letter: 'خ', arabicName: 'خَاء', name: 'Kha', color: '#9C27B0' },
  { letter: 'د', arabicName: 'دَال', name: 'Dal', color: '#E91E63' },
  { letter: 'ذ', arabicName: 'ذَال', name: 'Dhal', color: '#795548' },
  { letter: 'ر', arabicName: 'رَاء', name: 'Ra', color: '#FF5722' },
  { letter: 'ز', arabicName: 'زَاي', name: 'Zay', color: '#8BC34A' },
  { letter: 'س', arabicName: 'سِين', name: 'Sin', color: '#00BCD4' },
  { letter: 'ش', arabicName: 'شِين', name: 'Shin', color: '#9C27B0' },
  { letter: 'ص', arabicName: 'صَاد', name: 'Sad', color: '#FF5722' },
  { letter: 'ض', arabicName: 'ضَاد', name: 'Dad', color: '#607D8B' },
  { letter: 'ط', arabicName: 'طَاء', name: 'Ta', color: '#E91E63' },
  { letter: 'ظ', arabicName: 'ظَاء', name: 'Dha', color: '#FF6B6B' },
  { letter: 'ع', arabicName: 'عَيْن', name: 'Ayn', color: '#4CAF50' },
  { letter: 'غ', arabicName: 'غَيْن', name: 'Ghayn', color: '#9C27B0' },
  { letter: 'ف', arabicName: 'فَاء', name: 'Fa', color: '#2196F3' },
  { letter: 'ق', arabicName: 'قَاف', name: 'Qaf', color: '#FF9800' },
  { letter: 'ك', arabicName: 'كَاف', name: 'Kaf', color: '#00BCD4' },
  { letter: 'ل', arabicName: 'لَام', name: 'Lam', color: '#E91E63' },
  { letter: 'م', arabicName: 'مِيم', name: 'Mim', color: '#FF5722' },
  { letter: 'ن', arabicName: 'نُون', name: 'Nun', color: '#8BC34A' },
  { letter: 'ه', arabicName: 'هَاء', name: 'Ha', color: '#00BCD4' },
  { letter: 'و', arabicName: 'وَاو', name: 'Waw', color: '#9C27B0' },
  { letter: 'ي', arabicName: 'يَاء', name: 'Ya', color: '#FF6B6B' },
];

const WORDS = {
  'أ': [
    { arabic: 'أسد', french: 'Lion', emoji: '🦁' },
    { arabic: 'أرنب', french: 'Lapin', emoji: '🐰' },
    { arabic: 'أخطبوط', french: 'Pieuvre', emoji: '🐙' },
    { arabic: 'أفعى', french: 'Serpent', emoji: '🐍' },
    { arabic: 'أخضر', french: 'Vert', emoji: '🟢' },
  ],
  'ب': [
    { arabic: 'بطة', french: 'Canard', emoji: '🦆' },
    { arabic: 'بيت', french: 'Maison', emoji: '🏠' },
    { arabic: 'بقرة', french: 'Vache', emoji: '🐮' },
    { arabic: 'بالون', french: 'Ballon', emoji: '🎈' },
    { arabic: 'برتقال', french: 'Orange', emoji: '🍊' },
  ],
  'ت': [
    { arabic: 'تفاح', french: 'Pomme', emoji: '🍎' },
    { arabic: 'تمساح', french: 'Crocodile', emoji: '🐊' },
    { arabic: 'تلفون', french: 'Téléphone', emoji: '📱' },
    { arabic: 'توت', french: 'Mûre', emoji: '🍇' },
    { arabic: 'تاج', french: 'Couronne', emoji: '👑' },
  ],
  'ث': [
    { arabic: 'ثعلب', french: 'Renard', emoji: '🦊' },
    { arabic: 'ثلج', french: 'Neige', emoji: '❄️' },
    { arabic: 'ثور', french: 'Taureau', emoji: '🐂' },
    { arabic: 'ثمرة', french: 'Fruit', emoji: '🍑' },
    { arabic: 'ثعبان', french: 'Serpent', emoji: '🐍' },
  ],
  'ج': [
    { arabic: 'جمل', french: 'Chameau', emoji: '🐪' },
    { arabic: 'جزرة', french: 'Carotte', emoji: '🥕' },
    { arabic: 'جبل', french: 'Montagne', emoji: '⛰️' },
    { arabic: 'جوز', french: 'Noix', emoji: '🥜' },
    { arabic: 'جاموس', french: 'Buffle', emoji: '🦬' },
  ],
  'ح': [
    { arabic: 'حصان', french: 'Cheval', emoji: '🐴' },
    { arabic: 'حوت', french: 'Baleine', emoji: '🐋' },
    { arabic: 'حديقة', french: 'Jardin', emoji: '🌳' },
    { arabic: 'حمار', french: 'Âne', emoji: '🫏' },
    { arabic: 'حقيبة', french: 'Sac', emoji: '👜' },
  ],
  'خ': [
    { arabic: 'خروف', french: 'Mouton', emoji: '🐑' },
    { arabic: 'خبز', french: 'Pain', emoji: '🍞' },
    { arabic: 'خيار', french: 'Concombre', emoji: '🥒' },
    { arabic: 'خفاش', french: 'Chauve-souris', emoji: '🦇' },
    { arabic: 'خريطة', french: 'Carte', emoji: '🗺️' },
  ],
  'د': [
    { arabic: 'دجاجة', french: 'Poule', emoji: '🐔' },
    { arabic: 'دب', french: 'Ours', emoji: '🐻' },
    { arabic: 'دلفين', french: 'Dauphin', emoji: '🐬' },
    { arabic: 'دراجة', french: 'Vélo', emoji: '🚲' },
    { arabic: 'دفتر', french: 'Cahier', emoji: '📓' },
  ],
  'ذ': [
    { arabic: 'ذئب', french: 'Loup', emoji: '🐺' },
    { arabic: 'ذرة', french: 'Maïs', emoji: '🌽' },
    { arabic: 'ذهب', french: 'Or', emoji: '✨' },
    { arabic: 'ذباب', french: 'Mouche', emoji: '🪰' },
    { arabic: 'ذيل', french: 'Queue', emoji: '🐈' },
  ],
  'ر': [
    { arabic: 'رمان', french: 'Grenade', emoji: '🍎' },
    { arabic: 'روبوت', french: 'Robot', emoji: '🤖' },
    { arabic: 'ربيع', french: 'Printemps', emoji: '🌸' },
    { arabic: 'ريح', french: 'Vent', emoji: '💨' },
    { arabic: 'رسام', french: 'Peintre', emoji: '🎨' },
  ],
  'ز': [
    { arabic: 'زرافة', french: 'Girafe', emoji: '🦒' },
    { arabic: 'زهرة', french: 'Fleur', emoji: '🌸' },
    { arabic: 'زيتون', french: 'Olive', emoji: '🫒' },
    { arabic: 'زبيب', french: 'Raisin sec', emoji: '🍇' },
    { arabic: 'زجاجة', french: 'Bouteille', emoji: '🍶' },
  ],
  'س': [
    { arabic: 'سمكة', french: 'Poisson', emoji: '🐟' },
    { arabic: 'سلحفاة', french: 'Tortue', emoji: '🐢' },
    { arabic: 'سيارة', french: 'Voiture', emoji: '🚗' },
    { arabic: 'سماء', french: 'Ciel', emoji: '☁️' },
    { arabic: 'سكين', french: 'Couteau', emoji: '🔪' },
  ],
  'ش': [
    { arabic: 'شمس', french: 'Soleil', emoji: '☀️' },
    { arabic: 'شجرة', french: 'Arbre', emoji: '🌲' },
    { arabic: 'شاحنة', french: 'Camion', emoji: '🚛' },
    { arabic: 'شاة', french: 'Brebis', emoji: '🐑' },
    { arabic: 'شوكولا', french: 'Chocolat', emoji: '🍫' },
  ],
  'ص': [
    { arabic: 'صقر', french: 'Faucon', emoji: '🦅' },
    { arabic: 'صاروخ', french: 'Fusée', emoji: '🚀' },
    { arabic: 'صبار', french: 'Cactus', emoji: '🌵' },
    { arabic: 'صندوق', french: 'Boîte', emoji: '📦' },
    { arabic: 'صحن', french: 'Assiette', emoji: '🍽️' },
  ],
  'ض': [
    { arabic: 'ضفدع', french: 'Grenouille', emoji: '🐸' },
    { arabic: 'ضوء', french: 'Lumière', emoji: '💡' },
    { arabic: 'ضبع', french: 'Hyène', emoji: '🐆' },
    { arabic: 'ضرس', french: 'Molaire', emoji: '🦷' },
    { arabic: 'ضباب', french: 'Brouillard', emoji: '🌫️' },
  ],
  'ط': [
    { arabic: 'طائر', french: 'Oiseau', emoji: '🐦' },
    { arabic: 'طاولة', french: 'Table', emoji: '🪑' },
    { arabic: 'طماطم', french: 'Tomate', emoji: '🍅' },
    { arabic: 'طيارة', french: 'Avion', emoji: '✈️' },
    { arabic: 'طفل', french: 'Enfant', emoji: '👶' },
  ],
  'ظ': [
    { arabic: 'ظرف', french: 'Enveloppe', emoji: '✉️' },
    { arabic: 'ظبي', french: 'Gazelle', emoji: '🦌' },
    { arabic: 'ظل', french: 'Ombre', emoji: '🌑' },
    { arabic: 'ظهر', french: 'Dos', emoji: '🏃' },
    { arabic: 'ظفر', french: 'Ongle', emoji: '💅' },
  ],
  'ع': [
    { arabic: 'عصفور', french: 'Moineau', emoji: '🐦' },
    { arabic: 'عنب', french: 'Raisin', emoji: '🍇' },
    { arabic: 'عقرب', french: 'Scorpion', emoji: '🦂' },
    { arabic: 'علم', french: 'Drapeau', emoji: '🚩' },
    { arabic: 'عسل', french: 'Miel', emoji: '🍯' },
  ],
  'غ': [
    { arabic: 'غزال', french: 'Gazelle', emoji: '🦌' },
    { arabic: 'غيمة', french: 'Nuage', emoji: '⛅' },
    { arabic: 'غوريلا', french: 'Gorille', emoji: '🦍' },
    { arabic: 'غراب', french: 'Corbeau', emoji: '🐦' },
    { arabic: 'غيتار', french: 'Guitare', emoji: '🎸' },
  ],
  'ف': [
    { arabic: 'فيل', french: 'Éléphant', emoji: '🐘' },
    { arabic: 'فراشة', french: 'Papillon', emoji: '🦋' },
    { arabic: 'فأر', french: 'Souris', emoji: '🐭' },
    { arabic: 'فيلم', french: 'Film', emoji: '🎬' },
    { arabic: 'فاكهة', french: 'Fruit', emoji: '🍓' },
  ],
  'ق': [
    { arabic: 'قط', french: 'Chat', emoji: '🐱' },
    { arabic: 'قمر', french: 'Lune', emoji: '🌙' },
    { arabic: 'قرد', french: 'Singe', emoji: '🐒' },
    { arabic: 'قنفذ', french: 'Hérisson', emoji: '🦔' },
    { arabic: 'قوس قزح', french: 'Arc-en-ciel', emoji: '🌈' },
  ],
  'ك': [
    { arabic: 'كلب', french: 'Chien', emoji: '🐶' },
    { arabic: 'كتاب', french: 'Livre', emoji: '📚' },
    { arabic: 'كعكة', french: 'Gâteau', emoji: '🎂' },
    { arabic: 'كرة', french: 'Ballon', emoji: '⚽' },
    { arabic: 'كرسي', french: 'Chaise', emoji: '🪑' },
  ],
  'ل': [
    { arabic: 'لبن', french: 'Lait', emoji: '🥛' },
    { arabic: 'لعبة', french: 'Jouet', emoji: '🧸' },
    { arabic: 'لون', french: 'Couleur', emoji: '🎨' },
    { arabic: 'ليمون', french: 'Citron', emoji: '🍋' },
    { arabic: 'لقلق', french: 'Cigogne', emoji: '🦩' },
  ],
  'م': [
    { arabic: 'منزل', french: 'Maison', emoji: '🏡' },
    { arabic: 'موزة', french: 'Banane', emoji: '🍌' },
    { arabic: 'مدرسة', french: 'École', emoji: '🏫' },
    { arabic: 'مطر', french: 'Pluie', emoji: '🌧️' },
    { arabic: 'مفتاح', french: 'Clé', emoji: '🔑' },
  ],
  'ن': [
    { arabic: 'نجمة', french: 'Étoile', emoji: '⭐' },
    { arabic: 'نملة', french: 'Fourmi', emoji: '🐜' },
    { arabic: 'نمر', french: 'Tigre', emoji: '🐯' },
    { arabic: 'نسر', french: 'Aigle', emoji: '🦅' },
    { arabic: 'نهر', french: 'Rivière', emoji: '🏞️' },
  ],
  'ه': [
    { arabic: 'هدية', french: 'Cadeau', emoji: '🎁' },
    { arabic: 'هرة', french: 'Chatte', emoji: '🐈' },
    { arabic: 'هاتف', french: 'Téléphone', emoji: '📞' },
    { arabic: 'هلال', french: 'Croissant', emoji: '🌙' },
    { arabic: 'هواء', french: 'Air', emoji: '💨' },
  ],
  'و': [
    { arabic: 'وردة', french: 'Rose', emoji: '🌹' },
    { arabic: 'ورقة', french: 'Feuille', emoji: '🍃' },
    { arabic: 'وحش', french: 'Monstre', emoji: '👹' },
    { arabic: 'ولد', french: 'Garçon', emoji: '👦' },
    { arabic: 'واحة', french: 'Oasis', emoji: '🏝️' },
  ],
  'ي': [
    { arabic: 'يد', french: 'Main', emoji: '✋' },
    { arabic: 'يمامة', french: 'Colombe', emoji: '🕊️' },
    { arabic: 'يسار', french: 'Gauche', emoji: '⬅️' },
    { arabic: 'ياقوت', french: 'Rubis', emoji: '💎' },
    { arabic: 'يرقة', french: 'Chenille', emoji: '🐛' },
  ],
};

// Cache audio pour éviter de re-télécharger
const audioCache = {};

function playArabic(text) {
  // Utilise Google Translate TTS — voix arabe naturelle et instantanée
  const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=ar&client=tw-ob&q=${encodeURIComponent(text)}`;

  if (audioCache[text]) {
    audioCache[text].currentTime = 0;
    audioCache[text].play();
    return;
  }

  const audio = new Audio(url);
  audio.crossOrigin = 'anonymous';
  audioCache[text] = audio;
  audio.play().catch(() => {
    // Fallback si Google bloque : speechSynthesis avec lang arabe
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'ar-SA';
    u.rate = 0.8;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  });
}

const COLORS = ['#FF6B6B','#FF9800','#4CAF50','#00BCD4','#9C27B0'];

export default function App() {
  const [screen, setScreen] = useState('letters');
  const [currentLetter, setCurrentLetter] = useState(null);
  const [playing, setPlaying] = useState(null);
  const [stars, setStars] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [qIndex, setQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const play = (text, id) => {
    setPlaying(id);
    playArabic(text);
    setTimeout(() => setPlaying(p => p === id ? null : p), 2000);
  };

  const selectLetter = (l) => {
    setCurrentLetter(l);
    play(l.arabicName, 'letter');
    setScreen('words');
  };

  const buildExercise = () => {
    const words = WORDS[currentLetter.letter] || [];
    const allWords = Object.values(WORDS).flat();
    const qs = words.map(w => {
      const wrong = allWords.filter(x => x.arabic !== w.arabic).sort(() => Math.random()-0.5).slice(0,3);
      const answers = [w, ...wrong].sort(() => Math.random()-0.5);
      return { correct: w, answers, type: Math.random() > 0.5 ? 'emoji' : 'word' };
    });
    setQuestions(qs); setQIndex(0); setScore(0);
    setAnswered(false); setSelectedAnswer(null); setFeedback(null);
    setScreen('exercise');
  };

  const checkAnswer = (answer) => {
    if (answered) return;
    setAnswered(true);
    setSelectedAnswer(answer);
    const q = questions[qIndex];
    const isCorrect = answer.arabic === q.correct.arabic;
    setFeedback(isCorrect ? 'correct' : 'wrong');
    if (isCorrect) { setScore(s => s+1); setStars(s => s+1); }
    play(q.correct.arabic, 'feedback');
  };

  const nextQuestion = () => {
    if (qIndex + 1 >= questions.length) { setScreen('results'); return; }
    setQIndex(i => i+1);
    setAnswered(false); setSelectedAnswer(null); setFeedback(null);
  };

  const pct = questions.length ? Math.round((score/questions.length)*100) : 0;

  return (
    <div style={{minHeight:'100vh', background:'linear-gradient(135deg,#FFE082 0%,#80DEEA 50%,#F48FB1 100%)', fontFamily:"'Nunito','Segoe UI',sans-serif", paddingBottom:40}}>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;700&family=Nunito:wght@700;900&display=swap" rel="stylesheet"/>
      <style>{`
        @keyframes pop{0%,100%{transform:scale(1)}40%{transform:scale(1.15)}70%{transform:scale(0.96)}}
        @keyframes bar{0%,100%{height:4px}50%{height:15px}}
        .lcard:hover{transform:translateY(-5px)!important;box-shadow:0 10px 0 rgba(0,0,0,0.1),0 12px 28px rgba(0,0,0,0.12)!important}
        .wcard:hover{transform:translateY(-5px) scale(1.02)!important}
      `}</style>

      {/* HEADER */}
      <div style={{textAlign:'center',padding:'16px 12px 8px'}}>
        <div style={{fontSize:22}}>⭐ 🌙 ⭐</div>
        <h1 style={{fontSize:'clamp(22px,5vw,44px)',fontWeight:900,color:'white',textShadow:'3px 3px 0 rgba(0,0,0,0.14)',margin:'4px 0',letterSpacing:2}}>
          تعلم العربية 🎉
        </h1>
        <div style={{color:'rgba(255,255,255,0.9)',fontWeight:700,fontSize:14}}>Apprends l'Arabe en t'amusant !</div>
        <div style={{display:'inline-flex',alignItems:'center',gap:6,background:'rgba(255,255,255,0.28)',borderRadius:50,padding:'5px 16px',marginTop:8,fontWeight:900,fontSize:16,color:'white'}}>
          ⭐ {stars} étoile{stars>1?'s':''}
        </div>
      </div>

      {/* ===== LETTRES ===== */}
      {screen==='letters' && (
        <div style={{padding:'0 10px'}}>
          <div style={{textAlign:'center',color:'white',fontWeight:900,fontSize:18,textShadow:'2px 2px 0 rgba(0,0,0,0.12)',marginBottom:14}}>
            🔤 Choisis une lettre !
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(82px,1fr))',gap:9,maxWidth:840,margin:'0 auto'}}>
            {LETTERS.map(l => (
              <button key={l.letter} className="lcard" onClick={() => selectLetter(l)}
                style={{background:'white',border:'none',borderRadius:16,padding:'12px 5px',cursor:'pointer',
                  textAlign:'center',boxShadow:'0 5px 0 rgba(0,0,0,0.1),0 6px 18px rgba(0,0,0,0.08)',
                  transition:'transform 0.13s ease, box-shadow 0.13s ease',position:'relative',overflow:'hidden'}}>
                <span style={{fontFamily:"'Noto Naskh Arabic',serif",fontSize:32,display:'block',lineHeight:1.3}}>{l.letter}</span>
                <span style={{fontSize:10,fontWeight:700,color:'#888'}}>{l.name}</span>
                <div style={{position:'absolute',bottom:0,left:0,right:0,height:4,background:l.color,borderRadius:'0 0 16px 16px'}}/>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ===== MOTS ===== */}
      {screen==='words' && currentLetter && (
        <div style={{padding:'0 10px'}}>
          <button onClick={() => setScreen('letters')} style={BB}>← Retour</button>

          <div style={{textAlign:'center',marginBottom:18}}>
            <button onClick={() => play(currentLetter.arabicName, 'letter')}
              style={{background:'none',border:'none',cursor:'pointer',padding:0,
                animation:playing==='letter'?'pop 0.5s ease':undefined,display:'inline-block'}}>
              <div style={{fontFamily:"'Noto Naskh Arabic',serif",fontSize:90,lineHeight:1,
                filter:'drop-shadow(0 4px 10px rgba(0,0,0,0.2))'}}>
                {currentLetter.letter}
              </div>
            </button>
            <div style={{color:'white',fontWeight:900,fontSize:18,textShadow:'2px 2px 0 rgba(0,0,0,0.14)'}}>
              <span style={{fontFamily:"'Noto Naskh Arabic',serif"}}>{currentLetter.arabicName}</span>
              {' '}— {currentLetter.name}
            </div>
            <div style={{color:'rgba(255,255,255,0.75)',fontSize:12,marginTop:4}}>
              🔊 Clique sur la lettre pour réécouter
            </div>
          </div>

          <div style={{textAlign:'center',color:'rgba(255,255,255,0.9)',fontWeight:700,fontSize:13,marginBottom:14}}>
            👆 Appuie sur une image pour entendre le mot en arabe !
          </div>

          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(140px,1fr))',gap:12,maxWidth:840,margin:'0 auto 24px'}}>
            {(WORDS[currentLetter.letter]||[]).map((w,i) => {
              const isP = playing === w.arabic;
              return (
                <button key={w.arabic} className="wcard" onClick={() => play(w.arabic, w.arabic)}
                  style={{background:'white',border:`3px solid ${isP?COLORS[i%COLORS.length]:'transparent'}`,
                    borderRadius:20,padding:'16px 10px',textAlign:'center',cursor:'pointer',
                    boxShadow: isP
                      ? `0 0 0 3px ${COLORS[i%COLORS.length]}44,0 8px 24px rgba(0,0,0,0.12)`
                      : '0 6px 0 rgba(0,0,0,0.09),0 8px 20px rgba(0,0,0,0.08)',
                    transition:'all 0.13s',position:'relative',overflow:'hidden',
                    animation:isP?'pop 0.5s ease':undefined}}>
                  <div style={{position:'absolute',top:0,left:0,right:0,height:5,background:COLORS[i%COLORS.length],borderRadius:'20px 20px 0 0'}}/>
                  <div style={{fontSize:50,marginBottom:8}}>{w.emoji}</div>
                  <div style={{fontFamily:"'Noto Naskh Arabic',serif",fontSize:22,fontWeight:700,direction:'rtl',marginBottom:3,color:'#222'}}>{w.arabic}</div>
                  <div style={{fontSize:11,color:'#bbb',fontWeight:600,marginBottom:isP?6:0}}>{w.french}</div>
                  {isP && (
                    <div style={{display:'flex',justifyContent:'center',gap:3}}>
                      {[0,1,2,3].map(j => (
                        <div key={j} style={{width:3,borderRadius:3,background:COLORS[i%COLORS.length],
                          animation:`bar 0.5s ${j*0.1}s ease-in-out infinite`}}/>
                      ))}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <div style={{textAlign:'center'}}>
            <button onClick={buildExercise}
              onMouseEnter={e=>e.currentTarget.style.transform='translateY(-3px)'}
              onMouseLeave={e=>e.currentTarget.style.transform='translateY(0)'}
              style={{background:'linear-gradient(135deg,#FF6B6B,#FF8E53)',color:'white',border:'none',
                borderRadius:50,padding:'15px 34px',fontWeight:900,fontSize:17,cursor:'pointer',
                boxShadow:'0 7px 0 rgba(255,107,107,0.4)',transition:'transform 0.13s'}}>
              ✏️ Faire l'exercice !
            </button>
          </div>
        </div>
      )}

      {/* ===== EXERCICE ===== */}
      {screen==='exercise' && questions.length > 0 && (() => {
        const q = questions[qIndex];
        return (
          <div style={{padding:'0 10px'}}>
            <button onClick={() => setScreen('words')} style={BB}>← Retour</button>
            <div style={{maxWidth:660,margin:'0 auto',background:'white',borderRadius:26,padding:'26px 22px',boxShadow:'0 8px 36px rgba(0,0,0,0.13)'}}>
              <div style={{textAlign:'center',marginBottom:18}}>
                <div style={{fontWeight:900,fontSize:18,color:'#444'}}>✏️ Question {qIndex+1} / {questions.length}</div>
                <div style={{background:'#eee',borderRadius:50,height:10,marginTop:10,overflow:'hidden'}}>
                  <div style={{height:'100%',borderRadius:50,background:'linear-gradient(90deg,#00BCD4,#4CAF50)',
                    width:`${(qIndex/questions.length)*100}%`,transition:'width 0.4s'}}/>
                </div>
              </div>

              <div style={{textAlign:'center'}}>
                {q.type==='emoji' ? (
                  <>
                    <div style={{fontSize:13,color:'#aaa',fontWeight:700,marginBottom:10}}>
                      Quel mot arabe correspond à cette image ?
                    </div>
                    <div style={{fontSize:76,marginBottom:6}}>{q.correct.emoji}</div>
                    <div style={{fontSize:13,color:'#ccc',marginBottom:18}}>{q.correct.french}</div>
                    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
                      {q.answers.map(a => {
                        const isSel = selectedAnswer?.arabic === a.arabic;
                        const isOk = a.arabic === q.correct.arabic;
                        let bg='#f5f5f5', brd='3px solid transparent';
                        if(answered && isOk){bg='#E8F5E9';brd='3px solid #4CAF50';}
                        else if(answered && isSel && !isOk){bg='#FFEBEE';brd='3px solid #FF6B6B';}
                        return (
                          <button key={a.arabic} onClick={() => checkAnswer(a)} style={{
                            background:bg,border:brd,borderRadius:14,padding:'14px 8px',
                            fontFamily:"'Noto Naskh Arabic',serif",fontSize:22,fontWeight:700,
                            cursor:answered?'default':'pointer',direction:'rtl',color:'#333',transition:'all 0.15s',
                          }}>{a.arabic}</button>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{fontSize:13,color:'#aaa',fontWeight:700,marginBottom:10}}>
                      Quelle image correspond à ce mot ?
                    </div>
                    <button onClick={() => play(q.correct.arabic,'q')}
                      style={{background:'none',border:'none',cursor:'pointer',
                        fontFamily:"'Noto Naskh Arabic',serif",fontSize:52,fontWeight:700,
                        direction:'rtl',marginBottom:4,display:'block',margin:'0 auto 4px'}}>
                      {q.correct.arabic} 🔊
                    </button>
                    <div style={{fontSize:13,color:'#ccc',marginBottom:18}}>{q.correct.french}</div>
                    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
                      {q.answers.map(a => {
                        const isSel = selectedAnswer?.arabic === a.arabic;
                        const isOk = a.arabic === q.correct.arabic;
                        let bg='#f5f5f5', brd='3px solid transparent';
                        if(answered && isOk){bg='#E8F5E9';brd='3px solid #4CAF50';}
                        else if(answered && isSel && !isOk){bg='#FFEBEE';brd='3px solid #FF6B6B';}
                        return (
                          <button key={a.arabic} onClick={() => checkAnswer(a)} style={{
                            background:bg,border:brd,borderRadius:14,padding:'14px',
                            fontSize:42,cursor:answered?'default':'pointer',transition:'all 0.15s',
                          }}>{a.emoji}</button>
                        );
                      })}
                    </div>
                  </>
                )}

                {feedback && (
                  <div style={{marginTop:14,padding:'12px 14px',borderRadius:14,
                    background:feedback==='correct'?'#E8F5E9':'#FFEBEE',
                    color:feedback==='correct'?'#2E7D32':'#C62828',fontWeight:700,fontSize:17}}>
                    {feedback==='correct'
                      ? '🎉 Bravo ! Super bonne réponse !'
                      : `😅 La bonne réponse : ${questions[qIndex].correct.arabic} ${questions[qIndex].correct.emoji}`}
                  </div>
                )}

                {answered && (
                  <button onClick={nextQuestion} style={{
                    marginTop:12,background:'linear-gradient(135deg,#00BCD4,#4CAF50)',
                    color:'white',border:'none',borderRadius:50,
                    padding:'12px 28px',fontWeight:900,fontSize:16,cursor:'pointer',
                    boxShadow:'0 5px 0 rgba(0,188,212,0.4)',
                  }}>
                    {qIndex+1 >= questions.length ? '🏁 Voir mon score !' : 'Suivant →'}
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })()}

      {/* ===== RÉSULTATS ===== */}
      {screen==='results' && (
        <div style={{padding:'20px 10px',textAlign:'center'}}>
          <div style={{background:'white',borderRadius:26,padding:'34px 22px',maxWidth:420,margin:'0 auto',boxShadow:'0 8px 40px rgba(0,0,0,0.13)'}}>
            <div style={{fontSize:76}}>{pct===100?'🏆':pct>=60?'🥇':'💪'}</div>
            <div style={{fontWeight:900,fontSize:26,color:'#333',margin:'10px 0 5px'}}>
              {pct===100?'Parfait !':pct>=60?'Très bien !':'Courage !'}
            </div>
            <div style={{fontSize:50,fontWeight:900,color:pct>=60?'#4CAF50':'#FF6B6B',margin:'10px 0'}}>
              {score} / {questions.length}
            </div>
            <div style={{color:'#aaa',fontSize:15,marginBottom:24}}>
              {pct===100?'Tu es champion(ne) ! 🌟':pct>=60?'Continue, tu es super ! ⭐':'Entraîne-toi encore ! 🌈'}
            </div>
            <div style={{display:'flex',gap:10,justifyContent:'center',flexWrap:'wrap'}}>
              <button onClick={buildExercise} style={{background:'linear-gradient(135deg,#FF6B6B,#FF8E53)',color:'white',border:'none',borderRadius:50,padding:'12px 20px',fontWeight:900,fontSize:14,cursor:'pointer'}}>
                🔄 Rejouer
              </button>
              <button onClick={() => setScreen('letters')} style={{background:'linear-gradient(135deg,#00BCD4,#26C6DA)',color:'white',border:'none',borderRadius:50,padding:'12px 20px',fontWeight:900,fontSize:14,cursor:'pointer'}}>
                🔤 Autres lettres
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const BB = {
  display:'inline-flex',alignItems:'center',gap:5,
  background:'white',border:'none',borderRadius:50,
  padding:'8px 16px',cursor:'pointer',fontWeight:700,fontSize:13,color:'#444',
  boxShadow:'0 4px 14px rgba(0,0,0,0.1)',marginBottom:16,transition:'transform 0.13s',
};
