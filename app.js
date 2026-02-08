const sections = Array.from(document.querySelectorAll('.panel__section'));
const homeButton = document.querySelector('#go-home');
const navButtons = document.querySelectorAll('[data-target]');
const backButtons = document.querySelectorAll('[data-back]');
const scriptButtons = document.querySelectorAll('[data-script]');
const practiceButtons = document.querySelectorAll('[data-practice]');

const learnTitle = document.querySelector('#learn-title');
const learnSubtitle = document.querySelector('#learn-subtitle');
const rowButtons = document.querySelector('#row-buttons');
const rowContent = document.querySelector('#row-content');
const startRowQuizButton = document.querySelector('#start-row-quiz');
const rowQuiz = document.querySelector('#row-quiz');
const rowQuizGlyph = document.querySelector('#row-quiz-glyph');
const rowQuizOptions = document.querySelector('#row-quiz-options');
const rowQuizFeedback = document.querySelector('#row-quiz-feedback');

const practiceTitle = document.querySelector('#practice-title');
const practiceBadge = document.querySelector('#practice-badge');
const practiceWord = document.querySelector('#practice-word');
const practiceMeaning = document.querySelector('#practice-meaning');
const practiceForm = document.querySelector('#practice-form');
const practiceInput = document.querySelector('#practice-input');
const practiceFeedback = document.querySelector('#practice-feedback');
const practiceCorrect = document.querySelector('#practice-correct');
const practiceTotal = document.querySelector('#practice-total');
const practiceNext = document.querySelector('#practice-next');

const scriptLabels = {
  hiragana: '히라가나',
  katakana: '가타카나',
};

const hiraganaRows = [
  {
    name: '아-오 행',
    tag: '기본 모음',
    characters: [
      { glyph: 'あ', sound: '아', mnemonic: '아기(あ) 손을 흔드는 모습' },
      { glyph: 'い', sound: '이', mnemonic: '이(い)빨 모양을 닮았어요' },
      { glyph: 'う', sound: '우', mnemonic: '우(う)산을 쓴 사람' },
      { glyph: 'え', sound: '에', mnemonic: '에어로빅(え) 하는 모습' },
      { glyph: 'お', sound: '오', mnemonic: '오(お)리의 몸통' },
    ],
  },
  {
    name: '카-코 행',
    tag: '가벼운 ㄱ 소리',
    characters: [
      { glyph: 'か', sound: '카', mnemonic: '카(か)트 바퀴처럼 보이는 곡선' },
      { glyph: 'き', sound: '키', mnemonic: '기(き)타 줄이 세 줄' },
      { glyph: 'く', sound: '쿠', mnemonic: '쿠(く)키 한 입' },
      { glyph: 'け', sound: '케', mnemonic: '케(け)익 위 촛불 두 개' },
      { glyph: 'こ', sound: '코', mnemonic: '코(こ)끼리의 다리' },
    ],
  },
  {
    name: '사-소 행',
    tag: '가벼운 ㅅ 소리',
    characters: [
      { glyph: 'さ', sound: '사', mnemonic: '사(さ)과를 베어 문 모양' },
      { glyph: 'し', sound: '시', mnemonic: '낚시(し)바늘처럼 굽은 선' },
      { glyph: 'す', sound: '스', mnemonic: '스(す)프링처럼 말린 선' },
      { glyph: 'せ', sound: '세', mnemonic: '세(せ)라믹 컵 손잡이' },
      { glyph: 'そ', sound: '소', mnemonic: '소(そ)라를 들고 있는 사람' },
    ],
  },
  {
    name: '타-토 행',
    tag: '가벼운 ㅌ 소리',
    characters: [
      { glyph: 'た', sound: '타', mnemonic: '타(た)조가 서 있는 다리' },
      { glyph: 'ち', sound: '치', mnemonic: '치(ち)아 벤치 모양' },
      { glyph: 'つ', sound: '츠', mnemonic: '도넛(つ)처럼 둥근 곡선' },
      { glyph: 'て', sound: '테', mnemonic: '테(て)이블 다리 두 개' },
      { glyph: 'と', sound: '토', mnemonic: '토(と)끼 귀와 얼굴' },
    ],
  },
  {
    name: '나-노 행',
    tag: 'ㄴ 소리',
    characters: [
      { glyph: 'な', sound: '나', mnemonic: '나(な)비가 날아가는 모습' },
      { glyph: 'に', sound: '니', mnemonic: '바구니(に) 손잡이' },
      { glyph: 'ぬ', sound: '누', mnemonic: '누(ぬ)엔 눈이 둥글어요' },
      { glyph: 'ね', sound: '네', mnemonic: '네(ね)모난 틀 안의 선' },
      { glyph: 'の', sound: '노', mnemonic: '노(の) 표시처럼 둥근 원' },
    ],
  },
  {
    name: '하-호 행',
    tag: 'ㅎ 소리',
    characters: [
      { glyph: 'は', sound: '하', mnemonic: '하(は)트 위에 선 두 개' },
      { glyph: 'ひ', sound: '히', mnemonic: '히(ひ)치하이크 손가락' },
      { glyph: 'ふ', sound: '후', mnemonic: '후(ふ)~ 바람이 나오는 모습' },
      { glyph: 'へ', sound: '헤', mnemonic: '헤(へ)어핀처럼 꺾인 선' },
      { glyph: 'ほ', sound: '호', mnemonic: '호(ほ)루라기 두 줄' },
    ],
  },
  {
    name: '마-모 행',
    tag: 'ㅁ 소리',
    characters: [
      { glyph: 'ま', sound: '마', mnemonic: '마(ま)우스 꼬리처럼 꼬불' },
      { glyph: 'み', sound: '미', mnemonic: '미(み)로 같은 길' },
      { glyph: 'む', sound: '무', mnemonic: '무(む)릎을 꿇은 사람' },
      { glyph: 'め', sound: '메', mnemonic: '메(め)모지에 펜을 꽂은 듯' },
      { glyph: 'も', sound: '모', mnemonic: '모(も)자처럼 곡선 세 개' },
    ],
  },
  {
    name: '야-요 행',
    tag: 'ㅑ/ㅛ 소리',
    characters: [
      { glyph: 'や', sound: '야', mnemonic: '야(や)구 배트 휘두르기' },
      { glyph: 'ゆ', sound: '유', mnemonic: '유(ゆ)리병 손잡이' },
      { glyph: 'よ', sound: '요', mnemonic: '요(よ)요가 두 겹으로' },
    ],
  },
  {
    name: '라-로 행',
    tag: 'ㄹ 소리',
    characters: [
      { glyph: 'ら', sound: '라', mnemonic: '라(ら)디오 안테나' },
      { glyph: 'り', sound: '리', mnemonic: '리(り)본 두 가닥' },
      { glyph: 'る', sound: '루', mnemonic: '루(る)프 모양' },
      { glyph: 'れ', sound: '레', mnemonic: '레(れ)일 위를 달리는 선' },
      { glyph: 'ろ', sound: '로', mnemonic: '로(ろ)봇 입 모양' },
    ],
  },
  {
    name: '와-오 행',
    tag: '와/오 소리',
    characters: [
      { glyph: 'わ', sound: '와', mnemonic: '와(わ)이어 선이 꼬여요' },
      { glyph: 'を', sound: '오', mnemonic: '오(を)프닝 된 문' },
      { glyph: 'ん', sound: '응', mnemonic: '응(ん) 하고 고개 끄덕이는 곡선' },
    ],
  },
];

const katakanaRows = [
  {
    name: '아-오 행',
    tag: '기본 모음',
    characters: [
      { glyph: 'ア', sound: '아', mnemonic: '아이스크림을 먹는 옆 모습' },
      { glyph: 'イ', sound: '이', mnemonic: '이 씨 집의 “이”' },
      { glyph: 'ウ', sound: '우', mnemonic: '접힌 우산의 우' },
      { glyph: 'エ', sound: '에', mnemonic: '애를 눕혀 모음만 남긴 느낌' },
      { glyph: 'オ', sound: '오', mnemonic: '오거리의 오' },
    ],
  },
  {
    name: '카-코 행',
    tag: '가벼운 ㄱ 소리',
    characters: [
      { glyph: 'カ', sound: '카', mnemonic: '히라가나 か와 닮은 카' },
      { glyph: 'キ', sound: '키', mnemonic: '히라가나 き를 떠올리기' },
      { glyph: 'ク', sound: '쿠', mnemonic: '쿠크다스의 쿠' },
      { glyph: 'ケ', sound: '케', mnemonic: '영어 K를 오른쪽으로 기울이면 케' },
      { glyph: 'コ', sound: '코', mnemonic: '전기 코드의 코' },
    ],
  },
  {
    name: '사-소 행',
    tag: '가벼운 ㅅ 소리',
    characters: [
      { glyph: 'サ', sound: '사', mnemonic: '사다리의 사' },
      { glyph: 'シ', sound: '시', mnemonic: '꼬마가 “쉬~” 하는 모습' },
      { glyph: 'ス', sound: '스', mnemonic: '지읒을 쓰고 스라고 읽기' },
      { glyph: 'セ', sound: '세', mnemonic: '히라가나 せ를 연상' },
      { glyph: 'ソ', sound: '소', mnemonic: '소뿔의 소' },
    ],
  },
  {
    name: '타-토 행',
    tag: '가벼운 ㅌ 소리',
    characters: [
      { glyph: 'タ', sound: '타', mnemonic: '한자 多에서 부수를 가져온 타' },
      { glyph: 'チ', sound: '치', mnemonic: '한자 千에서 치가 나왔어요' },
      { glyph: 'ツ', sound: '츠', mnemonic: '히라가나 つ를 떠올리기' },
      { glyph: 'テ', sound: '테', mnemonic: '안테나의 테' },
      { glyph: 'ト', sound: '토', mnemonic: '토이레의 문과 손잡이' },
    ],
  },
  {
    name: '나-노 행',
    tag: 'ㄴ 소리',
    characters: [
      { glyph: 'ナ', sound: '나', mnemonic: '히라가나 な의 윗부분' },
      { glyph: 'ニ', sound: '니', mnemonic: '한자 二처럼 쓰고 니' },
      { glyph: 'ヌ', sound: '누', mnemonic: '누워있는 모습 연상' },
      { glyph: 'ネ', sound: '네', mnemonic: '네네치킨의 네' },
      { glyph: 'ノ', sound: '노', mnemonic: '노 스모킹의 노' },
    ],
  },
  {
    name: '하-호 행',
    tag: 'ㅎ 소리',
    characters: [
      { glyph: 'ハ', sound: '하', mnemonic: '하하 웃는 팔자주름' },
      { glyph: 'ヒ', sound: '히', mnemonic: '히프(hip)의 히' },
      { glyph: 'フ', sound: '후', mnemonic: '히라가나 ふ의 머리 부분' },
      { glyph: 'ヘ', sound: '헤', mnemonic: '히라가나 へ와 같아요' },
      { glyph: 'ホ', sound: '호', mnemonic: '호호 웃는 보조개' },
    ],
  },
  {
    name: '마-모 행',
    tag: 'ㅁ 소리',
    characters: [
      { glyph: 'マ', sound: '마', mnemonic: '“인마” 할 때 턱이 내려감' },
      { glyph: 'ミ', sound: '미', mnemonic: '줄이 세 개라 도레미' },
      { glyph: 'ム', sound: '무', mnemonic: '무릎 꿇어 무' },
      { glyph: 'メ', sound: '메', mnemonic: '메이크업의 메' },
      { glyph: 'モ', sound: '모', mnemonic: '히라가나 も와 비슷' },
    ],
  },
  {
    name: '야-요 행',
    tag: 'ㅑ/ㅛ 소리',
    characters: [
      { glyph: 'ヤ', sound: '야', mnemonic: '히라가나 や와 비슷' },
      { glyph: 'ユ', sound: '유', mnemonic: '“그래유~”의 그 글자' },
      { glyph: 'ヨ', sound: '요', mnemonic: '요트 연상' },
    ],
  },
  {
    name: '라-로 행',
    tag: 'ㄹ 소리',
    characters: [
      { glyph: 'ラ', sound: '라', mnemonic: '히라가나 ら를 딱딱하게' },
      { glyph: 'リ', sound: '리', mnemonic: '히라가나 り와 비슷' },
      { glyph: 'ル', sound: '루', mnemonic: '루루루의 루' },
      { glyph: 'レ', sound: '레', mnemonic: '레몬 L을 변형한 레' },
      { glyph: 'ロ', sound: '로', mnemonic: '로봇의 각진 얼굴' },
    ],
  },
  {
    name: '와-오 행',
    tag: '와/오 소리',
    characters: [
      { glyph: 'ワ', sound: '와', mnemonic: 'ウ에서 꼭지를 떼면 와' },
      { glyph: 'ヲ', sound: '오', mnemonic: '목적격 조사 강조의 오' },
      { glyph: 'ン', sound: '응', mnemonic: '받침처럼 응/ㄴ 느낌' },
    ],
  },
];

const practiceWords = {
  hiragana: [
    { word: 'くうこう', reading: '쿠우코오', meaning: '공항 (空港)' },
    { word: 'えき', reading: '에키', meaning: '역 (駅)' },
    { word: 'ちず', reading: '치즈', meaning: '지도 (地図)' },
    { word: 'いりぐち', reading: '이리구치', meaning: '입구 (入口)' },
    { word: 'でぐち', reading: '데구치', meaning: '출구 (出口)' },
    { word: 'かいだん', reading: '카이단', meaning: '계단 (階段)' },
    { word: 'きっぷ', reading: '킷푸', meaning: '표 (切符)' },
    { word: 'つぎ', reading: '츠기', meaning: '다음 (次)' },
    { word: 'いま', reading: '이마', meaning: '지금 (今)' },
    { word: 'ひる', reading: '히루', meaning: '점심/낮 (昼)' },
    { word: 'よる', reading: '요루', meaning: '밤 (夜)' },
    { word: 'あさ', reading: '아사', meaning: '아침 (朝)' },
    { word: 'ばんごはん', reading: '방고한', meaning: '저녁밥 (晩ご飯)' },
    { word: 'みず', reading: '미즈', meaning: '물 (水)' },
    { word: 'のみもの', reading: '노미모노', meaning: '음료 (飲み物)' },
    { word: 'といれ', reading: '토이레', meaning: '화장실 (トイレ)' },
    { word: 'えんぴつ', reading: '엔피츠', meaning: '연필 (鉛筆)' },
    { word: 'でんしゃ', reading: '덴샤', meaning: '전철 (電車)' },
    { word: 'じかん', reading: '지칸', meaning: '시간 (時間)' },
    { word: 'やすみ', reading: '야스미', meaning: '휴식 (休み)' },
    { word: 'ちゅうしゃじょう', reading: '츄우샤조오', meaning: '주차장 (駐車場)' },
    { word: 'とおり', reading: '토오리', meaning: '거리/길 (通り)' },
    { word: 'はし', reading: '하시', meaning: '다리/젓가락 (橋)' },
    { word: 'やど', reading: '야도', meaning: '숙소 (宿)' },
    { word: 'おかね', reading: '오카네', meaning: '돈 (お金)' },
    { word: 'れしーと', reading: '레시이토', meaning: '영수증 (レシート)' },
    { word: 'かさ', reading: '카사', meaning: '우산 (傘)' },
    { word: 'あめ', reading: '아메', meaning: '비 (雨)' },
    { word: 'てんき', reading: '텐키', meaning: '날씨 (天気)' },
    { word: 'でんち', reading: '덴치', meaning: '배터리 (電池)' },
    { word: 'くうこうばす', reading: '쿠우코오바스', meaning: '공항버스' },
    { word: 'きた', reading: '키타', meaning: '북쪽 (北)' },
    { word: 'みなみ', reading: '미나미', meaning: '남쪽 (南)' },
    { word: 'ひがし', reading: '히가시', meaning: '동쪽 (東)' },
    { word: 'にし', reading: '니시', meaning: '서쪽 (西)' },
    { word: 'まえ', reading: '마에', meaning: '앞 (前)' },
    { word: 'うしろ', reading: '우시로', meaning: '뒤 (後ろ)' },
    { word: 'ひだり', reading: '히다리', meaning: '왼쪽 (左)' },
    { word: 'みぎ', reading: '미기', meaning: '오른쪽 (右)' },
    { word: 'とまれ', reading: '토마레', meaning: '정지 (止まれ)' },
    { word: 'はやい', reading: '하야이', meaning: '빠른 (早い)' },
    { word: 'おそい', reading: '오소이', meaning: '느린 (遅い)' },
    { word: 'おおきい', reading: '오오키이', meaning: '큰 (大きい)' },
    { word: 'ちいさい', reading: '치이사이', meaning: '작은 (小さい)' },
    { word: 'たかい', reading: '타카이', meaning: '비싼/높은 (高い)' },
    { word: 'やすい', reading: '야스이', meaning: '저렴한 (安い)' },
    { word: 'ながい', reading: '나가이', meaning: '긴 (長い)' },
    { word: 'みじかい', reading: '미지카이', meaning: '짧은 (短い)' },
    { word: 'あたたかい', reading: '아타타카이', meaning: '따뜻한 (暖かい)' },
    { word: 'さむい', reading: '사무이', meaning: '추운 (寒い)' },
    { word: 'あつい', reading: '아츠이', meaning: '더운/뜨거운 (暑い/熱い)' },
    { word: 'すずしい', reading: '스즈시이', meaning: '선선한 (涼しい)' },
    { word: 'にぎやか', reading: '니기야카', meaning: '붐비는 (賑やか)' },
    { word: 'しずか', reading: '시즈카', meaning: '조용한 (静か)' },
    { word: 'きれい', reading: '키레이', meaning: '깨끗한/예쁜 (綺麗)' },
    { word: 'くらい', reading: '쿠라이', meaning: '어두운 (暗い)' },
    { word: 'あかるい', reading: '아카루이', meaning: '밝은 (明るい)' },
    { word: 'あぶない', reading: '아부나이', meaning: '위험한 (危ない)' },
    { word: 'あんぜん', reading: '안젠', meaning: '안전 (安全)' },
    { word: 'おいしい', reading: '오이시이', meaning: '맛있는 (美味しい)' },
    { word: 'まずい', reading: '마즈이', meaning: '맛없는 (不味い)' },
    { word: 'すき', reading: '스키', meaning: '좋아함 (好き)' },
    { word: 'きらい', reading: '키라이', meaning: '싫어함 (嫌い)' },
    { word: 'たべもの', reading: '타베모노', meaning: '음식 (食べ物)' },
    { word: 'のみもの', reading: '노미모노', meaning: '음료 (飲み物)' },
    { word: 'あさごはん', reading: '아사고한', meaning: '아침밥 (朝ご飯)' },
    { word: 'ひるごはん', reading: '히루고한', meaning: '점심밥 (昼ご飯)' },
    { word: 'よるごはん', reading: '요루고한', meaning: '저녁밥 (夜ご飯)' },
    { word: 'ごはん', reading: '고한', meaning: '밥/식사 (ご飯)' },
    { word: 'ぱん', reading: '판', meaning: '빵 (パン)' },
    { word: 'さらだ', reading: '사라다', meaning: '샐러드 (サラダ)' },
    { word: 'すーぷ', reading: '스우푸', meaning: '수프 (スープ)' },
    { word: 'さら', reading: '사라', meaning: '접시 (皿)' },
    { word: 'はし', reading: '하시', meaning: '젓가락 (箸)' },
    { word: 'すぷーん', reading: '스푼', meaning: '스푼 (スプーン)' },
    { word: 'ふぉーく', reading: '포오쿠', meaning: '포크 (フォーク)' },
    { word: 'こっぷ', reading: '콧푸', meaning: '컵 (コップ)' },
    { word: 'ちゃ', reading: '차', meaning: '차/찻물 (茶)' },
    { word: 'こーひー', reading: '코오히이', meaning: '커피 (コーヒー)' },
    { word: 'みるく', reading: '미루쿠', meaning: '우유 (ミルク)' },
    { word: 'さとう', reading: '사토오', meaning: '설탕 (砂糖)' },
    { word: 'しお', reading: '시오', meaning: '소금 (塩)' },
    { word: 'しょうゆ', reading: '쇼오유', meaning: '간장 (醤油)' },
    { word: 'さけ', reading: '사케', meaning: '술/사케 (酒)' },
    { word: 'びーる', reading: '비이루', meaning: '맥주 (ビール)' },
    { word: 'くだもの', reading: '쿠다모노', meaning: '과일 (果物)' },
    { word: 'やさい', reading: '야사이', meaning: '채소 (野菜)' },
    { word: 'にく', reading: '니쿠', meaning: '고기 (肉)' },
    { word: 'さかな', reading: '사카나', meaning: '생선 (魚)' },
    { word: 'たまご', reading: '타마고', meaning: '달걀 (卵)' },
    { word: 'おちゃ', reading: '오차', meaning: '녹차 (お茶)' },
    { word: 'みせ', reading: '미세', meaning: '가게 (店)' },
    { word: 'こんびに', reading: '콤비니', meaning: '편의점 (コンビニ)' },
    { word: 'すーぱー', reading: '수우파아', meaning: '슈퍼마켓 (スーパー)' },
    { word: 'いちば', reading: '이치바', meaning: '시장 (市場)' },
    { word: 'ほてる', reading: '호테루', meaning: '호텔 (ホテル)' },
    { word: 'りょかん', reading: '료칸', meaning: '료칸 (旅館)' },
    { word: 'よやく', reading: '요야쿠', meaning: '예약 (予約)' },
    { word: 'きゃんせる', reading: '캰세루', meaning: '취소 (キャンセル)' },
    { word: 'へや', reading: '헤야', meaning: '방 (部屋)' },
    { word: 'かぎ', reading: '카기', meaning: '열쇠 (鍵)' },
    { word: 'かいだん', reading: '카이단', meaning: '계단 (階段)' },
    { word: 'えれべーたー', reading: '에레베에타아', meaning: '엘리베이터 (エレベーター)' },
    { word: 'えすかれーたー', reading: '에스카레에타아', meaning: '에스컬레이터 (エスカレーター)' },
    { word: 'ろびー', reading: '로비이', meaning: '로비 (ロビー)' },
    { word: 'れせぷしょん', reading: '레세푸숀', meaning: '리셉션 (レセプション)' },
    { word: 'ちぇっくいん', reading: '체쿠인', meaning: '체크인 (チェックイン)' },
    { word: 'ちぇっくあうと', reading: '체쿠아우토', meaning: '체크아웃 (チェックアウト)' },
    { word: 'ぱすぽーと', reading: '파스포오토', meaning: '여권 (パスポート)' },
    { word: 'びざ', reading: '비자', meaning: '비자 (ビザ)' },
    { word: 'けいたい', reading: '케이타이', meaning: '휴대폰 (携帯)' },
    { word: 'でんわ', reading: '덴와', meaning: '전화 (電話)' },
    { word: 'でんち', reading: '덴치', meaning: '배터리 (電池)' },
    { word: 'じゅうでん', reading: '주우덴', meaning: '충전 (充電)' },
    { word: 'ちゅうでんき', reading: '츄우덴키', meaning: '충전기 (充電器)' },
    { word: 'わいふぁい', reading: '와이파이', meaning: '와이파이 (Wi-Fi)' },
    { word: 'ぱそこん', reading: '파소콘', meaning: '노트북 (パソコン)' },
    { word: 'かめら', reading: '카메라', meaning: '카메라 (カメラ)' },
    { word: 'しゃしん', reading: '샤신', meaning: '사진 (写真)' },
    { word: 'ちずあぷり', reading: '치즈아푸리', meaning: '지도 앱' },
    { word: 'ばす', reading: '바스', meaning: '버스 (バス)' },
    { word: 'たくしー', reading: '타쿠시이', meaning: '택시 (タクシー)' },
    { word: 'くるま', reading: '쿠루마', meaning: '자동차 (車)' },
    { word: 'じてんしゃ', reading: '지텐샤', meaning: '자전거 (自転車)' },
    { word: 'しんかんせん', reading: '신칸센', meaning: '신칸센 (新幹線)' },
    { word: 'ちかてつ', reading: '치카테츠', meaning: '지하철 (地下鉄)' },
    { word: 'のりば', reading: '노리바', meaning: '승강장 (乗り場)' },
    { word: 'けんない', reading: '켄나이', meaning: '현내/지역 내 (県内)' },
    { word: 'けんがい', reading: '켄가이', meaning: '현외/지역 밖 (県外)' },
    { word: 'まち', reading: '마치', meaning: '마을/거리 (町)' },
    { word: 'こうえん', reading: '코오엔', meaning: '공원 (公園)' },
    { word: 'びょういん', reading: '뵤오인', meaning: '병원 (病院)' },
    { word: 'くすり', reading: '쿠스리', meaning: '약 (薬)' },
    { word: 'くすりや', reading: '쿠스리야', meaning: '약국 (薬屋)' },
    { word: 'ぽすと', reading: '포스토', meaning: '우체통 (ポスト)' },
    { word: 'ゆうびんきょく', reading: '유우빈쿄쿠', meaning: '우체국 (郵便局)' },
    { word: 'ぎんこう', reading: '긴코오', meaning: '은행 (銀行)' },
    { word: 'えーてぃーえむ', reading: '에이티이엠', meaning: 'ATM (ＡＴＭ)' },
    { word: 'かいもの', reading: '카이모노', meaning: '쇼핑 (買い物)' },
    { word: 'ぷれぜんと', reading: '푸레젠토', meaning: '선물 (プレゼント)' },
    { word: 'おみやげ', reading: '오미야게', meaning: '기념품 (お土産)' },
    { word: 'れじ', reading: '레지', meaning: '계산대 (レジ)' },
    { word: 'せーる', reading: '세에루', meaning: '세일 (セール)' },
    { word: 'かーど', reading: '카아도', meaning: '카드 (カード)' },
    { word: 'げんきん', reading: '겐킨', meaning: '현금 (現金)' },
    { word: 'つり', reading: '츠리', meaning: '거스름돈 (釣り)' },
    { word: 'きっさてん', reading: '킷사텐', meaning: '카페 (喫茶店)' },
    { word: 'れすとらん', reading: '레스토랑', meaning: '레스토랑 (レストラン)' },
    { word: 'めにゅー', reading: '메뉴우', meaning: '메뉴 (メニュー)' },
    { word: 'ちゅうもん', reading: '츄우몬', meaning: '주문 (注文)' },
    { word: 'おねがい', reading: '오네가이', meaning: '부탁 (お願いします)' },
    { word: 'ください', reading: '쿠다사이', meaning: '주세요 (ください)' },
    { word: 'ありがとう', reading: '아리가토오', meaning: '감사합니다 (ありがとう)' },
    { word: 'すみません', reading: '스미마센', meaning: '실례/죄송 (すみません)' },
    { word: 'だいじょうぶ', reading: '다이조오부', meaning: '괜찮아요 (大丈夫)' },
    { word: 'はい', reading: '하이', meaning: '네 (はい)' },
    { word: 'いいえ', reading: '이이에', meaning: '아니요 (いいえ)' },
    { word: 'どこ', reading: '도코', meaning: '어디 (どこ)' },
    { word: 'いつ', reading: '이츠', meaning: '언제 (いつ)' },
    { word: 'いくら', reading: '이쿠라', meaning: '얼마 (いくら)' },
    { word: 'なんじ', reading: '난지', meaning: '몇 시 (何時)' },
    { word: 'ひとつ', reading: '히토츠', meaning: '하나 (一つ)' },
    { word: 'ふたつ', reading: '후타츠', meaning: '둘 (二つ)' },
    { word: 'みっつ', reading: '밋츠', meaning: '셋 (三つ)' },
    { word: 'よっつ', reading: '욧츠', meaning: '넷 (四つ)' },
    { word: 'いつつ', reading: '이츠츠', meaning: '다섯 (五つ)' },
    { word: 'むっつ', reading: '뭇츠', meaning: '여섯 (六つ)' },
    { word: 'ななつ', reading: '나나츠', meaning: '일곱 (七つ)' },
    { word: 'やっつ', reading: '얏츠', meaning: '여덟 (八つ)' },
    { word: 'ここのつ', reading: '코코노츠', meaning: '아홉 (九つ)' },
    { word: 'とお', reading: '토오', meaning: '열 (十)' },
    { word: 'いち', reading: '이치', meaning: '1 (一)' },
    { word: 'に', reading: '니', meaning: '2 (二)' },
    { word: 'さん', reading: '산', meaning: '3 (三)' },
    { word: 'よん', reading: '욘', meaning: '4 (四)' },
    { word: 'ご', reading: '고', meaning: '5 (五)' },
    { word: 'ろく', reading: '로쿠', meaning: '6 (六)' },
    { word: 'なな', reading: '나나', meaning: '7 (七)' },
    { word: 'はち', reading: '하치', meaning: '8 (八)' },
    { word: 'きゅう', reading: '큐우', meaning: '9 (九)' },
    { word: 'じゅう', reading: '주우', meaning: '10 (十)' },
    { word: 'げつようび', reading: '게츠요오비', meaning: '월요일 (月曜日)' },
    { word: 'かようび', reading: '카요오비', meaning: '화요일 (火曜日)' },
    { word: 'すいようび', reading: '스이요오비', meaning: '수요일 (水曜日)' },
    { word: 'もくようび', reading: '모쿠요오비', meaning: '목요일 (木曜日)' },
    { word: 'きんようび', reading: '킨요오비', meaning: '금요일 (金曜日)' },
    { word: 'どようび', reading: '도요오비', meaning: '토요일 (土曜日)' },
    { word: 'にちようび', reading: '니치요오비', meaning: '일요일 (日曜日)' },
    { word: 'きょう', reading: '쿄오', meaning: '오늘 (今日)' },
    { word: 'あした', reading: '아시타', meaning: '내일 (明日)' },
    { word: 'きのう', reading: '키노오', meaning: '어제 (昨日)' },
    { word: 'らいしゅう', reading: '라이슈우', meaning: '다음 주 (来週)' },
    { word: 'こんしゅう', reading: '콘슈우', meaning: '이번 주 (今週)' },
    { word: 'せんしゅう', reading: '센슈우', meaning: '지난 주 (先週)' },
    { word: 'ごぜん', reading: '고젠', meaning: '오전 (午前)' },
    { word: 'ごご', reading: '고고', meaning: '오후 (午後)' },
    { word: 'ゆうがた', reading: '유우가타', meaning: '저녁 무렵 (夕方)' },
    { word: 'しゅうまつ', reading: '슈우마츠', meaning: '주말 (週末)' },
    { word: 'ちゅうしょく', reading: '츄우쇼쿠', meaning: '점심식사 (昼食)' },
    { word: 'ゆうしょく', reading: '유우쇼쿠', meaning: '저녁식사 (夕食)' },
  ],
  katakana: [
    { word: 'ホテル', reading: '호테루', meaning: '호텔' },
    { word: 'タクシー', reading: '타쿠시이', meaning: '택시' },
    { word: 'バス', reading: '바스', meaning: '버스' },
    { word: 'カード', reading: '카아도', meaning: '카드' },
    { word: 'チケット', reading: '치켓토', meaning: '티켓' },
    { word: 'レストラン', reading: '레스토랑', meaning: '레스토랑' },
    { word: 'メニュー', reading: '메뉴우', meaning: '메뉴' },
    { word: 'コーヒー', reading: '코오히이', meaning: '커피' },
    { word: 'ジュース', reading: '쥬우스', meaning: '주스' },
    { word: 'コンビニ', reading: '콤비니', meaning: '편의점' },
    { word: 'スーパー', reading: '수우파아', meaning: '슈퍼마켓' },
    { word: 'マップ', reading: '맙푸', meaning: '지도 앱/지도' },
    { word: 'エレベーター', reading: '에레베에타아', meaning: '엘리베이터' },
    { word: 'エスカレーター', reading: '에스카레에타아', meaning: '에스컬레이터' },
    { word: 'プラットフォーム', reading: '푸랏토호오무', meaning: '승강장' },
    { word: 'トイレ', reading: '토이레', meaning: '화장실' },
    { word: 'バゲージ', reading: '바게에지', meaning: '짐' },
    { word: 'リュック', reading: '류쿠', meaning: '배낭' },
    { word: 'スマホ', reading: '스마호', meaning: '스마트폰' },
    { word: 'カメラ', reading: '카메라', meaning: '카메라' },
    { word: 'チョコ', reading: '초코', meaning: '초콜릿' },
    { word: 'ベーカリー', reading: '베에카리이', meaning: '베이커리' },
    { word: 'ドラッグストア', reading: '도랏구스토아', meaning: '드럭스토어' },
    { word: 'ネイル', reading: '네이루', meaning: '네일' },
    { word: 'レンタカー', reading: '렌타카아', meaning: '렌터카' },
    { word: 'チェックイン', reading: '체쿠인', meaning: '체크인' },
    { word: 'チェックアウト', reading: '체쿠아우토', meaning: '체크아웃' },
    { word: 'シングル', reading: '싱구루', meaning: '싱글룸' },
    { word: 'ダブル', reading: '다부루', meaning: '더블룸' },
    { word: 'パスポート', reading: '파스포오토', meaning: '여권' },
    { word: 'セキュリティ', reading: '세큐리티', meaning: '보안검색' },
    { word: 'インフォメーション', reading: '인포메에숀', meaning: '안내소' },
    { word: 'バス停', reading: '바스테이', meaning: '버스정류장' },
    { word: 'ロビー', reading: '로비이', meaning: '로비' },
    { word: 'フロント', reading: '후론토', meaning: '프런트 데스크' },
    { word: 'ルーム', reading: '루우무', meaning: '객실' },
    { word: 'キー', reading: '키이', meaning: '열쇠' },
    { word: 'ベッド', reading: '벳도', meaning: '침대' },
    { word: 'シーツ', reading: '시이츠', meaning: '시트' },
    { word: 'タオル', reading: '타오루', meaning: '타월' },
    { word: 'シャワー', reading: '샤와아', meaning: '샤워' },
    { word: 'バスタブ', reading: '바스타부', meaning: '욕조' },
    { word: 'ドライヤー', reading: '도라이야아', meaning: '헤어드라이어' },
    { word: 'スリッパ', reading: '스릿파', meaning: '슬리퍼' },
    { word: 'パジャマ', reading: '파자마', meaning: '파자마' },
    { word: 'エアコン', reading: '에아콘', meaning: '에어컨' },
    { word: 'リモコン', reading: '리모콘', meaning: '리모컨' },
    { word: 'アメニティ', reading: '아메니티', meaning: '어메니티' },
    { word: 'シャンプー', reading: '샴푸우', meaning: '샴푸' },
    { word: 'リンス', reading: '린스', meaning: '린스' },
    { word: 'ボディソープ', reading: '보디이소오푸', meaning: '바디워시' },
    { word: 'ハンドソープ', reading: '한도소오푸', meaning: '핸드워시' },
    { word: 'ランドリー', reading: '란도리이', meaning: '세탁실' },
    { word: 'コインランドリー', reading: '코인란도리이', meaning: '코인 세탁소' },
    { word: 'クリーニング', reading: '쿠리이닝구', meaning: '드라이클리닝' },
    { word: 'タクシー乗り場', reading: '타쿠시이노리바', meaning: '택시 승강장' },
    { word: 'バス乗り場', reading: '바스노리바', meaning: '버스 승강장' },
    { word: 'バスターミナル', reading: '바스타아미나루', meaning: '버스터미널' },
    { word: 'ターミナル', reading: '타아미나루', meaning: '터미널' },
    { word: 'チケット売り場', reading: '치켓토우리바', meaning: '티켓 판매소' },
    { word: 'ロッカー', reading: '록카아', meaning: '보관함' },
    { word: 'コインロッカー', reading: '코인록카아', meaning: '코인 로커' },
    { word: 'プラットホーム', reading: '푸랏토호오무', meaning: '승강장' },
    { word: 'ホーム', reading: '호오무', meaning: '플랫폼/홈' },
    { word: 'デパート', reading: '데파아토', meaning: '백화점' },
    { word: 'ショッピング', reading: '쇼핑구', meaning: '쇼핑' },
    { word: 'ショップ', reading: '숍푸', meaning: '가게' },
    { word: 'アウトレット', reading: '아우토렛토', meaning: '아웃렛' },
    { word: 'セール', reading: '세에루', meaning: '세일' },
    { word: 'クーポン', reading: '쿠우폰', meaning: '쿠폰' },
    { word: 'ポイント', reading: '포인트', meaning: '포인트' },
    { word: 'レジ', reading: '레지', meaning: '계산대' },
    { word: 'レシート', reading: '레시이토', meaning: '영수증' },
    { word: 'サイン', reading: '사인', meaning: '서명' },
    { word: 'パスワード', reading: '파스와아도', meaning: '비밀번호' },
    { word: 'ユーザー', reading: '유우자아', meaning: '사용자' },
    { word: 'アカウント', reading: '아카운토', meaning: '계정' },
    { word: 'ログイン', reading: '로구인', meaning: '로그인' },
    { word: 'ログアウト', reading: '로구아우토', meaning: '로그아웃' },
    { word: 'ワイファイ', reading: '와이파이', meaning: '와이파이' },
    { word: 'ネット', reading: '넷토', meaning: '인터넷' },
    { word: 'オンライン', reading: '온라인', meaning: '온라인' },
    { word: 'オフライン', reading: '오후라인', meaning: '오프라인' },
    { word: 'アプリ', reading: '아푸리', meaning: '앱' },
    { word: 'アップデート', reading: '앗푸데에토', meaning: '업데이트' },
    { word: 'バッテリー', reading: '밧테리이', meaning: '배터리' },
    { word: 'チャージ', reading: '차아지', meaning: '충전' },
    { word: 'ケーブル', reading: '케에부루', meaning: '케이블' },
    { word: 'アダプター', reading: '아다푸타아', meaning: '어댑터' },
    { word: 'コンセント', reading: '콘센토', meaning: '콘센트' },
    { word: 'モバイル', reading: '모바이루', meaning: '모바일' },
    { word: 'ナビ', reading: '나비', meaning: '내비' },
    { word: 'ナビゲーション', reading: '나비게에숀', meaning: '내비게이션' },
    { word: 'マイレージ', reading: '마이레에지', meaning: '마일리지' },
    { word: 'カウンター', reading: '카운타아', meaning: '카운터' },
    { word: 'チェック', reading: '체쿠', meaning: '체크' },
    { word: 'キャンセル', reading: '캰세루', meaning: '취소' },
    { word: 'リザーブ', reading: '리자아부', meaning: '예약' },
    { word: 'キャンペーン', reading: '캰페엔', meaning: '캠페인' },
    { word: 'プロモーション', reading: '프로모오숀', meaning: '프로모션' },
    { word: 'イベント', reading: '이벤트', meaning: '이벤트' },
    { word: 'フェス', reading: '훼스', meaning: '페스티벌' },
    { word: 'ライブ', reading: '라이부', meaning: '라이브' },
    { word: 'ステージ', reading: '스테에지', meaning: '무대' },
    { word: 'ミュージアム', reading: '뮤우지아무', meaning: '박물관' },
    { word: 'ギャラリー', reading: '갸라리이', meaning: '갤러리' },
    { word: 'テーマパーク', reading: '테에마파아쿠', meaning: '테마파크' },
    { word: 'チケットレス', reading: '치켓토레스', meaning: '모바일티켓' },
    { word: 'チケットホルダー', reading: '치켓토호루다아', meaning: '티켓 홀더' },
    { word: 'パンフレット', reading: '판후렛토', meaning: '팸플릿' },
    { word: 'ガイド', reading: '가이도', meaning: '가이드' },
    { word: 'ガイドブック', reading: '가이도북쿠', meaning: '가이드북' },
    { word: 'ツアー', reading: '츠아아', meaning: '투어' },
    { word: 'ツアーガイド', reading: '츠아아가이도', meaning: '투어 가이드' },
    { word: 'バスツアー', reading: '바스츠아아', meaning: '버스 투어' },
    { word: 'クルーズ', reading: '쿠루우즈', meaning: '크루즈' },
    { word: 'クルー', reading: '쿠루우', meaning: '승무원' },
    { word: 'キャビン', reading: '캬빈', meaning: '캐빈/객실' },
    { word: 'スーツケース', reading: '수우츠케에스', meaning: '캐리어' },
    { word: 'キャリーケース', reading: '캬리이케에스', meaning: '캐리어' },
    { word: 'バックパック', reading: '밧쿠팟쿠', meaning: '백팩' },
    { word: 'ポーチ', reading: '포오치', meaning: '파우치' },
    { word: 'サングラス', reading: '산구라스', meaning: '선글라스' },
    { word: 'キャップ', reading: '캬푸', meaning: '모자' },
    { word: 'Tシャツ', reading: '티이샤츠', meaning: '티셔츠' },
    { word: 'ジャケット', reading: '자켓토', meaning: '재킷' },
    { word: 'コート', reading: '코오토', meaning: '코트' },
    { word: 'スニーカー', reading: '스니이카아', meaning: '운동화' },
    { word: 'サンダル', reading: '산다루', meaning: '샌들' },
    { word: 'ブーツ', reading: '부우츠', meaning: '부츠' },
    { word: 'サイズ', reading: '사이즈', meaning: '사이즈' },
    { word: 'カラー', reading: '카라아', meaning: '색상' },
    { word: 'デザイン', reading: '데자인', meaning: '디자인' },
    { word: 'ブランド', reading: '부란도', meaning: '브랜드' },
    { word: 'ノベルティ', reading: '노베루티', meaning: '노벨티' },
    { word: 'パッケージ', reading: '팟케에지', meaning: '포장' },
    { word: 'ラッピング', reading: '랏핑구', meaning: '포장 서비스' },
    { word: 'プレゼント', reading: '푸레젠토', meaning: '선물' },
    { word: 'おみやげ', reading: '오미야게', meaning: '기념품' },
    { word: 'スイーツ', reading: '스이츠', meaning: '디저트' },
    { word: 'アイス', reading: '아이스', meaning: '아이스크림' },
    { word: 'ケーキ', reading: '케에키', meaning: '케이크' },
    { word: 'パン', reading: '판', meaning: '빵' },
    { word: 'サンドイッチ', reading: '산도잇치', meaning: '샌드위치' },
    { word: 'ハンバーガー', reading: '함바아가아', meaning: '햄버거' },
    { word: 'ポテト', reading: '포테토', meaning: '감자튀김' },
    { word: 'ピザ', reading: '피자', meaning: '피자' },
    { word: 'パスタ', reading: '파스타', meaning: '파스타' },
    { word: 'ラーメン', reading: '라아멘', meaning: '라멘' },
    { word: 'カレー', reading: '카레에', meaning: '카레' },
    { word: 'サラダ', reading: '사라다', meaning: '샐러드' },
    { word: 'スープ', reading: '스우푸', meaning: '수프' },
    { word: 'ソース', reading: '소오스', meaning: '소스' },
    { word: 'スパイス', reading: '스파이스', meaning: '향신료' },
    { word: 'ソルト', reading: '소루토', meaning: '소금' },
    { word: 'ペッパー', reading: '펫파아', meaning: '후추' },
    { word: 'ジュースバー', reading: '쥬우스바아', meaning: '주스바' },
    { word: 'コーヒーショップ', reading: '코오히이숍푸', meaning: '커피숍' },
    { word: 'カフェ', reading: '카훼', meaning: '카페' },
    { word: 'バー', reading: '바아', meaning: '바' },
    { word: 'ラウンジ', reading: '라운지', meaning: '라운지' },
    { word: 'ビュッフェ', reading: '뷔훼', meaning: '뷔페' },
    { word: 'ランチ', reading: '란치', meaning: '런치' },
    { word: 'ディナー', reading: '디나아', meaning: '디너' },
    { word: 'ブレックファスト', reading: '부렛쿠화스토', meaning: '브렉퍼스트' },
    { word: 'ドリンク', reading: '도린쿠', meaning: '음료' },
    { word: 'ソーダ', reading: '소오다', meaning: '탄산' },
    { word: 'ミネラルウォーター', reading: '미네라루워아타아', meaning: '생수' },
    { word: 'エナジードリンク', reading: '에나지이도린쿠', meaning: '에너지 음료' },
    { word: 'スムージー', reading: '스무우지이', meaning: '스무디' },
    { word: 'カップ', reading: '캅푸', meaning: '컵' },
    { word: 'ストロー', reading: '스토로오', meaning: '빨대' },
    { word: 'テイクアウト', reading: '테이쿠아우토', meaning: '테이크아웃' },
    { word: 'イートイン', reading: '이이토인', meaning: '매장 식사' },
    { word: 'サービス', reading: '사아비스', meaning: '서비스' },
    { word: 'スタッフ', reading: '스타후', meaning: '직원' },
    { word: 'マネージャー', reading: '마네에자아', meaning: '매니저' },
    { word: 'クリアファイル', reading: '쿠리아화이루', meaning: '클리어파일' },
    { word: 'マスク', reading: '마스쿠', meaning: '마스크' },
    { word: 'アルコール', reading: '아루코오루', meaning: '소독용 알코올' },
    { word: 'ガス', reading: '가스', meaning: '가스' },
    { word: 'ガソリン', reading: '가소린', meaning: '가솔린' },
    { word: 'スタンド', reading: '스탄도', meaning: '주유소' },
    { word: 'パーキング', reading: '파아킹구', meaning: '주차장' },
    { word: 'チューン', reading: '츄운', meaning: '튜닝' },
    { word: 'レンタル', reading: '렌타루', meaning: '렌탈' },
    { word: 'レンタサイクル', reading: '렌타사이쿠루', meaning: '렌탈 자전거' },
    { word: 'サイクル', reading: '사이쿠루', meaning: '사이클' },
    { word: 'バイク', reading: '바이쿠', meaning: '바이크' },
    { word: 'ヘルメット', reading: '헤루멧토', meaning: '헬멧' },
    { word: 'プロテクター', reading: '프로테쿠타아', meaning: '보호대' },
    { word: 'ベンチ', reading: '벤치', meaning: '벤치' },
    { word: 'トイレットペーパー', reading: '토이렛토페에파아', meaning: '화장지' },
    { word: 'ティッシュ', reading: '텃슈', meaning: '티슈' },
    { word: 'ハンカチ', reading: '한카치', meaning: '손수건' },
    { word: 'タブレット', reading: '타부렛토', meaning: '태블릿' },
    { word: 'イヤホン', reading: '이야혼', meaning: '이어폰' },
    { word: 'ヘッドホン', reading: '헷도혼', meaning: '헤드폰' },
    { word: 'スピーカー', reading: '스피이카아', meaning: '스피커' },
    { word: 'ケア', reading: '케아', meaning: '케어' },
  ],
};

let activeScript = null;
let activeRows = [];
let activeRowIndex = 0;
let activePracticeList = [];
let practiceState = { correct: 0, total: 0, current: null, answered: false };
let rowQuizState = { active: false, remaining: [], current: null };

const showSection = (id) => {
  sections.forEach((section) => {
    section.classList.toggle('is-active', section.id === id);
  });
};

const buildRowButtons = () => {
  rowButtons.innerHTML = '';
  activeRows.forEach((row, index) => {
    const button = document.createElement('button');
    button.className = 'card';
    button.textContent = row.name;
    button.addEventListener('click', () => setActiveRow(index));
    rowButtons.appendChild(button);
  });
};

const renderRowContent = () => {
  rowContent.innerHTML = '';
  const row = activeRows[activeRowIndex];
  if (!row) return;
  row.characters.forEach((character) => {
    const card = document.createElement('div');
    card.className = 'row-card';
    card.innerHTML = `
      <div class="row-card__glyph">${character.glyph}</div>
      <div class="row-card__tag">${character.sound}</div>
      <div class="row-card__mnemonic">${character.mnemonic}</div>
    `;
    rowContent.appendChild(card);
  });
};

const setActiveRow = (index) => {
  activeRowIndex = index;
  const row = activeRows[index];
  learnSubtitle.textContent = `${row.name} • ${row.tag}`;
  renderRowContent();
  const buttons = Array.from(rowButtons.querySelectorAll('button'));
  buttons.forEach((button, idx) => {
    button.classList.toggle('is-selected', idx === index);
  });
  resetRowQuiz();
};

const setLearningScript = (script) => {
  activeScript = script;
  activeRows = script === 'hiragana' ? hiraganaRows : katakanaRows;
  learnTitle.textContent = `${scriptLabels[script]} 행별 학습`;
  buildRowButtons();
  setActiveRow(0);
  showSection('learn-detail');
};

const shuffle = (list) => list.sort(() => Math.random() - 0.5);

const pickPracticeWord = () => {
  if (activePracticeList.length === 0) {
    activePracticeList = shuffle([...practiceWords[activeScript]]);
  }
  practiceState.current = activePracticeList.pop();
  practiceBadge.textContent = scriptLabels[activeScript];
  practiceWord.textContent = practiceState.current.word;
  practiceMeaning.textContent = '';
  practiceInput.value = '';
  practiceFeedback.textContent = '';
  practiceState.answered = false;
};

const setPracticeScript = (script) => {
  activeScript = script;
  activePracticeList = shuffle([...practiceWords[script]]);
  practiceState = { correct: 0, total: 0, current: null, answered: false };
  practiceTitle.textContent = `${scriptLabels[script]} 여행 단어 연습`;
  practiceCorrect.textContent = '0';
  practiceTotal.textContent = '0';
  pickPracticeWord();
  showSection('practice-detail');
};

const resetRowQuiz = () => {
  rowQuizState = { active: false, remaining: [], current: null };
  rowQuiz.hidden = true;
  rowQuizFeedback.textContent = '';
  rowQuizGlyph.textContent = '';
  rowQuizOptions.innerHTML = '';
};

const renderRowQuizQuestion = () => {
  if (rowQuizState.remaining.length === 0) {
    rowQuizFeedback.textContent = '완료! 이 행의 글자를 모두 확인했어요.';
    rowQuizFeedback.style.color = '#1c7f52';
    rowQuizState.active = false;
    return;
  }
  rowQuizState.current = rowQuizState.remaining.pop();
  rowQuizGlyph.textContent = rowQuizState.current.glyph;
  rowQuizFeedback.textContent = '';
  rowQuizOptions.innerHTML = '';
  const options = shuffle(activeRows[activeRowIndex].characters.map((char) => char.sound));
  options.forEach((option) => {
    const button = document.createElement('button');
    button.className = 'card';
    button.type = 'button';
    button.textContent = option;
    button.addEventListener('click', () => {
      if (!rowQuizState.active) return;
      const isCorrect = option === rowQuizState.current.sound;
      rowQuizFeedback.textContent = isCorrect ? '정답입니다!' : '틀렸어요. 다시 선택해주세요.';
      rowQuizFeedback.style.color = isCorrect ? '#1c7f52' : '#cc2d2d';
      if (isCorrect) {
        renderRowQuizQuestion();
      }
    });
    rowQuizOptions.appendChild(button);
  });
};

homeButton.addEventListener('click', () => showSection('home'));

navButtons.forEach((button) => {
  button.addEventListener('click', () => {
    showSection(button.dataset.target);
  });
});

backButtons.forEach((button) => {
  button.addEventListener('click', () => {
    showSection(button.dataset.back);
  });
});

scriptButtons.forEach((button) => {
  button.addEventListener('click', () => setLearningScript(button.dataset.script));
});

practiceButtons.forEach((button) => {
  button.addEventListener('click', () => setPracticeScript(button.dataset.practice));
});

practiceForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const answer = practiceInput.value.trim();
  if (!practiceState.current || !answer) {
    practiceFeedback.textContent = '발음을 입력해주세요.';
    practiceFeedback.style.color = '#cc2d2d';
    return;
  }
  if (practiceState.answered) {
    practiceFeedback.textContent = '이 문제는 이미 제출했어요. 다음 문제로 넘어가세요.';
    practiceFeedback.style.color = '#cc2d2d';
    return;
  }
  const isCorrect = answer === practiceState.current.reading;
  practiceState.total += 1;
  if (isCorrect) {
    practiceState.correct += 1;
  }
  practiceState.answered = true;
  practiceCorrect.textContent = practiceState.correct.toString();
  practiceTotal.textContent = practiceState.total.toString();
  practiceFeedback.textContent = isCorrect
    ? '정답입니다!'
    : `틀렸어요. 정답: ${practiceState.current.reading}`;
  practiceFeedback.style.color = isCorrect ? '#1c7f52' : '#cc2d2d';
  practiceMeaning.textContent = practiceState.current.meaning;
});

practiceInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && practiceState.answered) {
    event.preventDefault();
    pickPracticeWord();
  }
});

startRowQuizButton.addEventListener('click', () => {
  const row = activeRows[activeRowIndex];
  if (!row) return;
  rowQuizState = {
    active: true,
    remaining: shuffle([...row.characters]),
    current: null,
  };
  rowQuiz.hidden = false;
  renderRowQuizQuestion();
});

practiceNext.addEventListener('click', pickPracticeWord);

showSection('home');
