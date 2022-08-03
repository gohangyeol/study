const quotes = [
  {
    quote: "무엇인가 시작하려면 입을 다물고 몸을 움직여라.",
    author: "  -월트 디즈니-",
  },
  {
    quote: "삶은 당신이 다른 계획들을 하느라 바쁜 동안에 일어나는 것이다.",
    author: "   -싱어송라이터   존 레논-",
  },
  {
    quote: "세상은 한권의 책이다. 여행하지 않는 사람은 그 책의 단지 한 페이지만을 읽을 뿐이다.",
    author: "  -성직자  아우구스티누스-",
  },
  {
    quote: "인생은 과감한 모험이거나 아무것도 아니다.",
    author: "  -작가  헬렌 켈러-",
  },
  {
    quote: "여행이 곧 삶이다.",
    author: "  -작가   한스 크리스티안 안데르센-",
  },
  {
    quote: "오직 남을 위해 산 인생만이 가치 있는 것이다.",
    author: "  -알베르트 아인슈타인-",
  },
  {
    quote: "단 한번 살지만 바르게 산다면 충분하다.",
    author: "  -배우  메이 웨스트-",
  },
  {
    quote: "사랑하지 않는 사람과 여행은 절대 가지 마세요.",
    author: "  -소설가  어니스트 헤밍웨이-",
  },
  {
    quote: "우리는 주의를 산만하게 하기 위해 방황하지만 성취를 위해 여행합니다",
    author: "  -작가  힐레어 벨럭-",
  },
  {
    quote: "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해",
    author: "  -찰리 채플린-",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
