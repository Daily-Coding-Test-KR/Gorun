# GoMaster Daily - Go 언어 학습 플랫폼

매일 하나씩, Go 언어를 마스터하세요! 100일 커리큘럼과 일일 코딩 챌린지로 Go를 체계적으로 학습할 수 있는 플랫폼입니다.

## 프로젝트 구조

```
gomaster-daily/
├── frontend/                 # React + TypeScript 프론트엔드
│   ├── components/
│   │   ├── Dashboard.tsx     # 메인 대시보드
│   │   ├── ConceptCard.tsx   # 개념 학습 카드
│   │   ├── CodeEditor.tsx    # 코드 에디터
│   │   └── Heatmap.tsx       # 활동 히트맵
│   ├── services/
│   │   ├── api.ts           # 백엔드 API 연동
│   │   └── geminiService.ts # Gemini AI 폴백
│   ├── types.ts             # TypeScript 타입 정의
│   └── App.tsx              # 메인 앱 컴포넌트
│
├── backend/                  # Go 백엔드
│   ├── cmd/
│   │   └── server/
│   │       └── main.go      # 서버 엔트리포인트
│   ├── internal/
│   │   ├── models/          # 데이터 모델
│   │   ├── handlers/        # HTTP 핸들러
│   │   ├── services/        # 비즈니스 로직
│   │   └── data/            # 커리큘럼 데이터
│   │       ├── curriculum.go  # 40+ 개념 데이터
│   │       └── challenges.go  # 30+ 코딩 챌린지
│   └── pkg/
│       └── runner/          # Go 코드 실행 엔진
│           └── runner.go
└── README.md
```

## 기능

### 1. 100일 Go 커리큘럼
- **Week 1-2**: 기초 (변수, 타입, 연산자, 문자열)
- **Week 3-4**: 제어 흐름 (if, for, switch, range)
- **Week 5-6**: 함수 (다중 반환, 가변 인자, 클로저, defer)
- **Week 7-8**: 자료구조 (배열, 슬라이스, 맵)
- **Week 9-10**: 구조체와 메서드
- **Week 11-12**: 포인터, 인터페이스
- **Week 13+**: 에러 처리, 동시성, 패키지 등

### 2. 일일 코딩 챌린지
- 각 개념에 맞는 실습 문제
- 난이도: Easy → Medium → Hard
- 힌트 시스템
- 자동 채점 및 피드백

### 3. 코드 실행 엔진
- 실시간 Go 코드 실행
- 테스트 케이스 검증
- 친절한 에러 메시지

## 실행 방법

### 백엔드 실행

```bash
cd backend
go run cmd/server/main.go
```

서버가 `http://localhost:8080`에서 실행됩니다.

### 프론트엔드 실행

```bash
cd frontend
npm install
npm run dev
```

개발 서버가 `http://localhost:5173`에서 실행됩니다.

## API 엔드포인트

| Method | Endpoint | 설명 |
|--------|----------|------|
| GET | `/api/health` | 헬스 체크 |
| GET | `/api/lessons/{day}` | 일일 레슨 조회 |
| GET | `/api/concepts` | 모든 개념 조회 |
| GET | `/api/concepts?category=basics` | 카테고리별 조회 |
| GET | `/api/categories` | 카테고리 목록 |
| POST | `/api/run` | 코드 실행 |
| POST | `/api/submit` | 솔루션 제출 |

## 기술 스택

### Frontend
- React 19
- TypeScript
- Vite
- TailwindCSS
- Lucide React (아이콘)

### Backend
- Go 1.21+
- 표준 라이브러리 (net/http)
- 코드 실행: os/exec

## 학습 플로우

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  Dashboard  │───>│ ConceptCard │───>│ CodeEditor  │
│   (시작)    │    │  (개념학습)  │    │ (코딩테스트) │
└─────────────┘    └─────────────┘    └─────────────┘
       │                                     │
       └──────────── 완료 후 ────────────────┘
```

1. **Dashboard**: 현재 진행 상황, 스트릭, 히트맵 확인
2. **ConceptCard**: 오늘의 Go 개념 학습 (코드 예제 + 설명)
3. **CodeEditor**: 배운 개념을 활용한 코딩 챌린지 풀기

## 환경 변수

### Frontend (.env.local)
```
VITE_API_URL=http://localhost:8080/api
API_KEY=your_gemini_api_key  # 선택: Gemini AI 폴백용
```

### Backend
```
PORT=8080  # 기본값
```

## 향후 계획

- [ ] 사용자 인증 및 진행 상황 저장
- [ ] 더 많은 개념 추가 (100일 완성)
- [ ] 리더보드 및 뱃지 시스템
- [ ] 다크 모드
- [ ] 모바일 앱

---

Made with 💙 for Go learners

Follow on X: [@Rayxxxxn](https://x.com/Rayxxxxn)
