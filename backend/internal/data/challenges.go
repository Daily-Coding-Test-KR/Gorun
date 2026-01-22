package data

import "gomaster-daily/internal/models"

// DailyChallenges contains coding challenges for each day
var DailyChallenges = []models.Challenge{
	{
		ID: 1, Day: 1, ConceptID: 1, Title: "첫 번째 Go 프로그램",
		Difficulty:  "easy",
		Description: "여러분의 이름을 출력하는 프로그램을 작성하세요. fmt.Println을 사용하여 \"Hello, [이름]!\" 형식으로 출력합니다.",
		InitialCode: `package main

import "fmt"

func main() {
    // TODO: 여러분의 이름을 출력하세요
    // 예: Hello, Gopher!

}`,
		SolutionCode: `package main

import "fmt"

func main() {
    fmt.Println("Hello, Gopher!")
}`,
		TestCases: []models.TestCase{
			{Input: "", Expected: "Hello,", Hidden: false},
		},
		Hints: []string{"fmt.Println() 함수를 사용하세요", "문자열은 큰따옴표로 감싸세요"},
	},
	{
		ID: 2, Day: 2, ConceptID: 2, Title: "변수 선언 연습",
		Difficulty:  "easy",
		Description: "이름(string)은 \"Gopher\", 나이(int)는 10, 키(float64)는 175.5로 변수를 선언하고 값을 할당한 뒤, 모두 출력하세요.",
		InitialCode: `package main

import "fmt"

func main() {
    // TODO: name, age, height 변수를 선언하고 값을 할당하세요



    // TODO: 모든 변수를 출력하세요

}`,
		SolutionCode: `package main

import "fmt"

func main() {
    name := "Gopher"
    age := 10
    height := 175.5

    fmt.Println(name, age, height)
}`,
		TestCases: []models.TestCase{
			{Input: "", Expected: "Gopher", Hidden: false},
		},
		Hints: []string{":= 짧은 선언을 사용해보세요", "여러 변수를 한 번에 출력할 수 있습니다"},
	},
	{
		ID: 3, Day: 3, ConceptID: 3, Title: "타입 변환",
		Difficulty:  "easy",
		Description: "정수 42를 float64로 변환하여 출력하고, 실수 3.7을 정수로 변환하여 출력하세요.",
		InitialCode: `package main

import "fmt"

func main() {
    i := 42
    f := 3.7

    // TODO: i를 float64로 변환하여 출력


    // TODO: f를 int로 변환하여 출력

}`,
		SolutionCode: `package main

import "fmt"

func main() {
    i := 42
    f := 3.7

    fmt.Printf("int to float64: %f\n", float64(i))
    fmt.Printf("float64 to int: %d\n", int(f))
}`,
		TestCases: []models.TestCase{
			{Input: "", Expected: "42.000000", Hidden: false},
			{Input: "", Expected: "3", Hidden: false},
		},
		Hints: []string{"float64(i)로 타입 변환", "int(f)로 정수 변환 (소수점 버림)"},
	},
	{
		ID: 4, Day: 4, ConceptID: 4, Title: "상수 정의",
		Difficulty:  "easy",
		Description: "원의 면적을 계산하는 프로그램을 작성하세요. Pi를 상수로 정의하고, 반지름 5인 원의 면적을 출력합니다.",
		InitialCode: `package main

import "fmt"

// TODO: Pi 상수를 정의하세요

func main() {
    radius := 5.0

    // TODO: 원의 면적을 계산하고 출력하세요
    // 면적 = Pi * radius * radius

}`,
		SolutionCode: `package main

import "fmt"

const Pi = 3.14159

func main() {
    radius := 5.0
    area := Pi * radius * radius
    fmt.Printf("면적: %.2f\n", area)
}`,
		TestCases: []models.TestCase{
			{Input: "", Expected: "78.53", Hidden: false},
		},
		Hints: []string{"const Pi = 3.14159", "면적 공식: π * r²"},
	},
	{
		ID: 5, Day: 5, ConceptID: 5, Title: "간단한 계산기",
		Difficulty:  "easy",
		Description: "두 정수 a=15, b=4에 대해 덧셈, 뺄셈, 곱셈, 나눗셈(몫), 나머지를 각각 출력하세요.",
		InitialCode: `package main

import "fmt"

func main() {
    a, b := 15, 4

    // TODO: 모든 연산 결과를 출력하세요

}`,
		SolutionCode: `package main

import "fmt"

func main() {
    a, b := 15, 4

    fmt.Println("덧셈:", a+b)
    fmt.Println("뺄셈:", a-b)
    fmt.Println("곱셈:", a*b)
    fmt.Println("나눗셈:", a/b)
    fmt.Println("나머지:", a%b)
}`,
		TestCases: []models.TestCase{
			{Input: "", Expected: "19", Hidden: false},
			{Input: "", Expected: "11", Hidden: false},
			{Input: "", Expected: "60", Hidden: false},
			{Input: "", Expected: "3", Hidden: false},
		},
		Hints: []string{"+, -, *, /, % 연산자 사용"},
	},
	{
		ID: 6, Day: 6, ConceptID: 6, Title: "문자열 조작",
		Difficulty:  "easy",
		Description: "문자열 \"hello, world\"를 대문자로 변환하고, 쉼표(,)를 기준으로 분리하여 출력하세요.",
		InitialCode: `package main

import (
    "fmt"
    "strings"
)

func main() {
    s := "hello, world"

    // TODO: 대문자로 변환하여 출력


    // TODO: 쉼표로 분리하여 출력

}`,
		SolutionCode: `package main

import (
    "fmt"
    "strings"
)

func main() {
    s := "hello, world"

    fmt.Println(strings.ToUpper(s))
    fmt.Println(strings.Split(s, ", "))
}`,
		TestCases: []models.TestCase{
			{Input: "", Expected: "HELLO, WORLD", Hidden: false},
			{Input: "", Expected: "[hello world]", Hidden: false},
		},
		Hints: []string{"strings.ToUpper()", "strings.Split(s, \", \")"},
	},
	{
		ID: 7, Day: 7, ConceptID: 7, Title: "입력 처리 (시뮬레이션)",
		Difficulty:  "easy",
		Description: "name과 age 변수에 값을 할당하고, \"이름: [name], 나이: [age]세\" 형식으로 출력하세요.",
		InitialCode: `package main

import "fmt"

func main() {
    // 실제로는 fmt.Scan으로 입력받지만, 여기서는 직접 할당
    name := ""  // TODO: 이름 할당
    age := 0    // TODO: 나이 할당

    // TODO: 포맷에 맞게 출력

}`,
		SolutionCode: `package main

import "fmt"

func main() {
    name := "Gopher"
    age := 10

    fmt.Printf("이름: %s, 나이: %d세\n", name, age)
}`,
		TestCases: []models.TestCase{
			{Input: "", Expected: "이름:", Hidden: false},
			{Input: "", Expected: "나이:", Hidden: false},
		},
		Hints: []string{"fmt.Printf 사용", "%s는 문자열, %d는 정수"},
	},
	{
		ID: 8, Day: 8, ConceptID: 8, Title: "성적 판별기",
		Difficulty:  "easy",
		Description: "점수(score=75)에 따라 등급을 출력하세요. 90점 이상 A, 80점 이상 B, 70점 이상 C, 그 외 D",
		InitialCode: `package main

import "fmt"

func main() {
    score := 75

    // TODO: if-else를 사용하여 등급 출력

}`,
		SolutionCode: `package main

import "fmt"

func main() {
    score := 75

    if score >= 90 {
        fmt.Println("A")
    } else if score >= 80 {
        fmt.Println("B")
    } else if score >= 70 {
        fmt.Println("C")
    } else {
        fmt.Println("D")
    }
}`,
		TestCases: []models.TestCase{
			{Input: "", Expected: "C", Hidden: false},
		},
		Hints: []string{"if-else if-else 체이닝", "조건은 위에서부터 순서대로 검사"},
	},
	{
		ID: 9, Day: 9, ConceptID: 9, Title: "1부터 10까지 합",
		Difficulty:  "easy",
		Description: "for 반복문을 사용하여 1부터 10까지의 합을 계산하고 출력하세요.",
		InitialCode: `package main

import "fmt"

func main() {
    sum := 0

    // TODO: for문으로 1~10 합계 계산


    fmt.Println("합계:", sum)
}`,
		SolutionCode: `package main

import "fmt"

func main() {
    sum := 0

    for i := 1; i <= 10; i++ {
        sum += i
    }

    fmt.Println("합계:", sum)
}`,
		TestCases: []models.TestCase{
			{Input: "", Expected: "55", Hidden: false},
		},
		Hints: []string{"for i := 1; i <= 10; i++", "sum += i"},
	},
	{
		ID: 10, Day: 10, ConceptID: 10, Title: "요일 출력기",
		Difficulty:  "easy",
		Description: "dayNum(1~7)에 따라 해당 요일을 출력하세요. switch문을 사용합니다.",
		InitialCode: `package main

import "fmt"

func main() {
    dayNum := 3

    // TODO: switch문으로 요일 출력

}`,
		SolutionCode: `package main

import "fmt"

func main() {
    dayNum := 3

    switch dayNum {
    case 1:
        fmt.Println("월요일")
    case 2:
        fmt.Println("화요일")
    case 3:
        fmt.Println("수요일")
    case 4:
        fmt.Println("목요일")
    case 5:
        fmt.Println("금요일")
    case 6:
        fmt.Println("토요일")
    case 7:
        fmt.Println("일요일")
    default:
        fmt.Println("잘못된 번호")
    }
}`,
		TestCases: []models.TestCase{
			{Input: "", Expected: "수요일", Hidden: false},
		},
		Hints: []string{"switch dayNum { case 1: ... }"},
	},
	{
		ID: 11, Day: 11, ConceptID: 11, Title: "3의 배수 건너뛰기",
		Difficulty:  "medium",
		Description: "1부터 15까지 숫자 중 3의 배수를 제외하고 출력하세요. continue를 사용합니다.",
		InitialCode: `package main

import "fmt"

func main() {
    // TODO: 1~15 중 3의 배수 제외하고 출력

}`,
		SolutionCode: `package main

import "fmt"

func main() {
    for i := 1; i <= 15; i++ {
        if i%3 == 0 {
            continue
        }
        fmt.Println(i)
    }
}`,
		TestCases: []models.TestCase{
			{Input: "", Expected: "1", Hidden: false},
			{Input: "", Expected: "2", Hidden: false},
			{Input: "", Expected: "4", Hidden: false},
		},
		Hints: []string{"i % 3 == 0 이면 continue"},
	},
	{
		ID: 12, Day: 12, ConceptID: 12, Title: "슬라이스 합계",
		Difficulty:  "easy",
		Description: "주어진 슬라이스 nums의 모든 요소의 합을 range를 사용하여 계산하세요.",
		InitialCode: `package main

import "fmt"

func main() {
    nums := []int{10, 20, 30, 40, 50}
    sum := 0

    // TODO: range를 사용하여 합계 계산


    fmt.Println("합계:", sum)
}`,
		SolutionCode: `package main

import "fmt"

func main() {
    nums := []int{10, 20, 30, 40, 50}
    sum := 0

    for _, v := range nums {
        sum += v
    }

    fmt.Println("합계:", sum)
}`,
		TestCases: []models.TestCase{
			{Input: "", Expected: "150", Hidden: false},
		},
		Hints: []string{"for _, v := range nums", "인덱스가 필요없으면 _로 무시"},
	},
	{
		ID: 13, Day: 13, ConceptID: 13, Title: "두 수의 최댓값 함수",
		Difficulty:  "easy",
		Description: "두 정수를 받아 더 큰 값을 반환하는 max 함수를 작성하세요.",
		InitialCode: `package main

import "fmt"

// TODO: max 함수 작성
func max(a, b int) int {

}

func main() {
    fmt.Println(max(10, 5))
    fmt.Println(max(3, 8))
}`,
		SolutionCode: `package main

import "fmt"

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

func main() {
    fmt.Println(max(10, 5))
    fmt.Println(max(3, 8))
}`,
		TestCases: []models.TestCase{
			{Input: "", Expected: "10", Hidden: false},
			{Input: "", Expected: "8", Hidden: false},
		},
		Hints: []string{"if a > b { return a } return b"},
	},
	{
		ID: 14, Day: 14, ConceptID: 14, Title: "몫과 나머지 반환",
		Difficulty:  "easy",
		Description: "두 정수를 받아 몫과 나머지를 동시에 반환하는 divMod 함수를 작성하세요.",
		InitialCode: `package main

import "fmt"

// TODO: 다중 반환값 함수 작성
func divMod(a, b int) (int, int) {

}

func main() {
    q, r := divMod(17, 5)
    fmt.Printf("몫: %d, 나머지: %d\n", q, r)
}`,
		SolutionCode: `package main

import "fmt"

func divMod(a, b int) (int, int) {
    return a / b, a % b
}

func main() {
    q, r := divMod(17, 5)
    fmt.Printf("몫: %d, 나머지: %d\n", q, r)
}`,
		TestCases: []models.TestCase{
			{Input: "", Expected: "몫: 3, 나머지: 2", Hidden: false},
		},
		Hints: []string{"return a / b, a % b"},
	},
	{
		ID: 15, Day: 15, ConceptID: 15, Title: "가변 인자 평균",
		Difficulty:  "medium",
		Description: "가변 개수의 정수를 받아 평균을 계산하는 average 함수를 작성하세요.",
		InitialCode: `package main

import "fmt"

// TODO: 가변 인자로 평균 계산
func average(nums ...int) float64 {

}

func main() {
    fmt.Printf("평균: %.2f\n", average(10, 20, 30))
    fmt.Printf("평균: %.2f\n", average(5, 15, 25, 35, 45))
}`,
		SolutionCode: `package main

import "fmt"

func average(nums ...int) float64 {
    if len(nums) == 0 {
        return 0
    }
    sum := 0
    for _, n := range nums {
        sum += n
    }
    return float64(sum) / float64(len(nums))
}

func main() {
    fmt.Printf("평균: %.2f\n", average(10, 20, 30))
    fmt.Printf("평균: %.2f\n", average(5, 15, 25, 35, 45))
}`,
		TestCases: []models.TestCase{
			{Input: "", Expected: "20.00", Hidden: false},
			{Input: "", Expected: "25.00", Hidden: false},
		},
		Hints: []string{"len(nums)로 개수 파악", "float64로 변환 후 나눗셈"},
	},
	{
		ID: 16, Day: 16, ConceptID: 16, Title: "카운터 클로저",
		Difficulty:  "medium",
		Description: "호출할 때마다 1씩 증가하는 값을 반환하는 카운터 함수를 클로저로 만드세요.",
		InitialCode: `package main

import "fmt"

// TODO: 클로저를 반환하는 함수 작성
func makeCounter() func() int {

}

func main() {
    counter := makeCounter()
    fmt.Println(counter()) // 1
    fmt.Println(counter()) // 2
    fmt.Println(counter()) // 3
}`,
		SolutionCode: `package main

import "fmt"

func makeCounter() func() int {
    count := 0
    return func() int {
        count++
        return count
    }
}

func main() {
    counter := makeCounter()
    fmt.Println(counter())
    fmt.Println(counter())
    fmt.Println(counter())
}`,
		TestCases: []models.TestCase{
			{Input: "", Expected: "1", Hidden: false},
			{Input: "", Expected: "2", Hidden: false},
			{Input: "", Expected: "3", Hidden: false},
		},
		Hints: []string{"외부 변수 count를 캡처", "내부 함수에서 count++ 후 반환"},
	},
	{
		ID: 17, Day: 17, ConceptID: 17, Title: "defer 순서 이해",
		Difficulty:  "easy",
		Description: "defer를 사용하여 \"시작\" -> \"중간\" -> \"끝\" 순서로 출력되도록 코드를 작성하세요.",
		InitialCode: `package main

import "fmt"

func main() {
    // TODO: defer를 사용하여 올바른 순서로 출력
    // 출력 순서: 시작 -> 중간 -> 끝

}`,
		SolutionCode: `package main

import "fmt"

func main() {
    defer fmt.Println("끝")
    fmt.Println("시작")
    fmt.Println("중간")
}`,
		TestCases: []models.TestCase{
			{Input: "", Expected: "시작", Hidden: false},
		},
		Hints: []string{"defer는 함수 끝에서 실행", "먼저 defer 등록, 나머지 순서대로"},
	},
	{
		ID: 18, Day: 18, ConceptID: 18, Title: "배열 뒤집기",
		Difficulty:  "medium",
		Description: "주어진 배열의 요소를 뒤집어서 출력하세요.",
		InitialCode: `package main

import "fmt"

func main() {
    arr := [5]int{1, 2, 3, 4, 5}

    // TODO: 배열을 뒤집어서 출력
    // 결과: [5 4 3 2 1]

    fmt.Println(arr)
}`,
		SolutionCode: `package main

import "fmt"

func main() {
    arr := [5]int{1, 2, 3, 4, 5}

    for i, j := 0, len(arr)-1; i < j; i, j = i+1, j-1 {
        arr[i], arr[j] = arr[j], arr[i]
    }

    fmt.Println(arr)
}`,
		TestCases: []models.TestCase{
			{Input: "", Expected: "[5 4 3 2 1]", Hidden: false},
		},
		Hints: []string{"양끝에서 시작하여 중앙으로", "swap: a, b = b, a"},
	},
	{
		ID: 19, Day: 19, ConceptID: 19, Title: "슬라이스 필터링",
		Difficulty:  "medium",
		Description: "주어진 슬라이스에서 짝수만 필터링하여 새 슬라이스를 만드세요.",
		InitialCode: `package main

import "fmt"

func main() {
    nums := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

    // TODO: 짝수만 포함하는 새 슬라이스 생성
    var evens []int


    fmt.Println(evens)
}`,
		SolutionCode: `package main

import "fmt"

func main() {
    nums := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

    var evens []int
    for _, n := range nums {
        if n%2 == 0 {
            evens = append(evens, n)
        }
    }

    fmt.Println(evens)
}`,
		TestCases: []models.TestCase{
			{Input: "", Expected: "[2 4 6 8 10]", Hidden: false},
		},
		Hints: []string{"n % 2 == 0 이면 짝수", "append로 추가"},
	},
	{
		ID: 20, Day: 20, ConceptID: 20, Title: "슬라이스 중복 제거",
		Difficulty:  "medium",
		Description: "슬라이스에서 중복을 제거하여 유일한 값만 남기세요.",
		InitialCode: `package main

import "fmt"

func main() {
    nums := []int{1, 2, 2, 3, 3, 3, 4, 5, 5}

    // TODO: 중복 제거
    var unique []int


    fmt.Println(unique)
}`,
		SolutionCode: `package main

import "fmt"

func main() {
    nums := []int{1, 2, 2, 3, 3, 3, 4, 5, 5}

    seen := make(map[int]bool)
    var unique []int
    for _, n := range nums {
        if !seen[n] {
            seen[n] = true
            unique = append(unique, n)
        }
    }

    fmt.Println(unique)
}`,
		TestCases: []models.TestCase{
			{Input: "", Expected: "[1 2 3 4 5]", Hidden: false},
		},
		Hints: []string{"map으로 이미 본 값 추적", "seen[n]이 false면 추가"},
	},
	{
		ID: 21, Day: 21, ConceptID: 21, Title: "단어 빈도수 세기",
		Difficulty:  "medium",
		Description: "문자열 슬라이스에서 각 단어의 출현 횟수를 맵으로 세어 출력하세요.",
		InitialCode: `package main

import "fmt"

func main() {
    words := []string{"apple", "banana", "apple", "cherry", "banana", "apple"}

    // TODO: 단어 빈도수 계산
    counts := make(map[string]int)


    fmt.Println(counts)
}`,
		SolutionCode: `package main

import "fmt"

func main() {
    words := []string{"apple", "banana", "apple", "cherry", "banana", "apple"}

    counts := make(map[string]int)
    for _, word := range words {
        counts[word]++
    }

    fmt.Println(counts)
}`,
		TestCases: []models.TestCase{
			{Input: "", Expected: "apple", Hidden: false},
			{Input: "", Expected: "3", Hidden: false},
		},
		Hints: []string{"counts[word]++로 카운트", "맵의 기본값은 0"},
	},
	{
		ID: 22, Day: 22, ConceptID: 22, Title: "맵 키 존재 확인",
		Difficulty:  "easy",
		Description: "맵에서 특정 키가 있는지 확인하고, 있으면 값을, 없으면 \"키 없음\"을 출력하세요.",
		InitialCode: `package main

import "fmt"

func main() {
    scores := map[string]int{
        "Alice": 95,
        "Bob":   80,
    }

    // TODO: "Alice" 키 확인


    // TODO: "Charlie" 키 확인

}`,
		SolutionCode: `package main

import "fmt"

func main() {
    scores := map[string]int{
        "Alice": 95,
        "Bob":   80,
    }

    if val, ok := scores["Alice"]; ok {
        fmt.Println("Alice:", val)
    } else {
        fmt.Println("키 없음")
    }

    if val, ok := scores["Charlie"]; ok {
        fmt.Println("Charlie:", val)
    } else {
        fmt.Println("키 없음")
    }
}`,
		TestCases: []models.TestCase{
			{Input: "", Expected: "Alice: 95", Hidden: false},
			{Input: "", Expected: "키 없음", Hidden: false},
		},
		Hints: []string{"val, ok := m[key]", "ok가 true면 존재"},
	},
	{
		ID: 23, Day: 23, ConceptID: 23, Title: "구조체 생성",
		Difficulty:  "easy",
		Description: "Book 구조체를 정의하고 (Title, Author, Pages), 책 정보를 출력하세요.",
		InitialCode: `package main

import "fmt"

// TODO: Book 구조체 정의


func main() {
    // TODO: Book 인스턴스 생성 및 출력

}`,
		SolutionCode: `package main

import "fmt"

type Book struct {
    Title  string
    Author string
    Pages  int
}

func main() {
    book := Book{
        Title:  "Go Programming",
        Author: "Gopher",
        Pages:  300,
    }
    fmt.Printf("%s by %s, %d pages\n", book.Title, book.Author, book.Pages)
}`,
		TestCases: []models.TestCase{
			{Input: "", Expected: "Go Programming", Hidden: false},
			{Input: "", Expected: "pages", Hidden: false},
		},
		Hints: []string{"type Book struct { ... }", "필드명: 값으로 초기화"},
	},
	{
		ID: 24, Day: 24, ConceptID: 24, Title: "구조체 메서드",
		Difficulty:  "medium",
		Description: "Circle 구조체에 면적(Area)과 둘레(Circumference)를 계산하는 메서드를 추가하세요.",
		InitialCode: `package main

import "fmt"

const Pi = 3.14159

type Circle struct {
    Radius float64
}

// TODO: Area 메서드

// TODO: Circumference 메서드

func main() {
    c := Circle{Radius: 5}
    fmt.Printf("면적: %.2f\n", c.Area())
    fmt.Printf("둘레: %.2f\n", c.Circumference())
}`,
		SolutionCode: `package main

import "fmt"

const Pi = 3.14159

type Circle struct {
    Radius float64
}

func (c Circle) Area() float64 {
    return Pi * c.Radius * c.Radius
}

func (c Circle) Circumference() float64 {
    return 2 * Pi * c.Radius
}

func main() {
    c := Circle{Radius: 5}
    fmt.Printf("면적: %.2f\n", c.Area())
    fmt.Printf("둘레: %.2f\n", c.Circumference())
}`,
		TestCases: []models.TestCase{
			{Input: "", Expected: "78.53", Hidden: false},
			{Input: "", Expected: "31.41", Hidden: false},
		},
		Hints: []string{"func (c Circle) Method() ReturnType", "면적: π*r², 둘레: 2πr"},
	},
	{
		ID: 25, Day: 25, ConceptID: 25, Title: "구조체 임베딩 활용",
		Difficulty:  "medium",
		Description: "Employee 구조체에 Person을 임베딩하고, 직원 정보를 출력하세요.",
		InitialCode: `package main

import "fmt"

type Person struct {
    Name string
    Age  int
}

// TODO: Employee 구조체 (Person 임베딩 + Position 필드)


func main() {
    // TODO: Employee 생성 및 출력

}`,
		SolutionCode: `package main

import "fmt"

type Person struct {
    Name string
    Age  int
}

type Employee struct {
    Person
    Position string
}

func main() {
    e := Employee{
        Person:   Person{Name: "Gopher", Age: 30},
        Position: "Developer",
    }
    fmt.Printf("%s (%d세) - %s\n", e.Name, e.Age, e.Position)
}`,
		TestCases: []models.TestCase{
			{Input: "", Expected: "Gopher", Hidden: false},
			{Input: "", Expected: "Developer", Hidden: false},
		},
		Hints: []string{"type Employee struct { Person; Position string }", "e.Name으로 직접 접근"},
	},
	{
		ID: 26, Day: 26, ConceptID: 26, Title: "포인터로 값 교환",
		Difficulty:  "medium",
		Description: "두 정수의 값을 교환하는 swap 함수를 포인터를 사용하여 작성하세요.",
		InitialCode: `package main

import "fmt"

// TODO: swap 함수 (포인터 사용)


func main() {
    a, b := 10, 20
    fmt.Printf("전: a=%d, b=%d\n", a, b)

    swap(&a, &b)

    fmt.Printf("후: a=%d, b=%d\n", a, b)
}`,
		SolutionCode: `package main

import "fmt"

func swap(a, b *int) {
    *a, *b = *b, *a
}

func main() {
    a, b := 10, 20
    fmt.Printf("전: a=%d, b=%d\n", a, b)

    swap(&a, &b)

    fmt.Printf("후: a=%d, b=%d\n", a, b)
}`,
		TestCases: []models.TestCase{
			{Input: "", Expected: "후: a=20, b=10", Hidden: false},
		},
		Hints: []string{"func swap(a, b *int)", "*a, *b = *b, *a"},
	},
	{
		ID: 27, Day: 27, ConceptID: 27, Title: "구조체 수정",
		Difficulty:  "medium",
		Description: "Person 구조체의 나이를 1 증가시키는 Birthday 메서드를 포인터 리시버로 작성하세요.",
		InitialCode: `package main

import "fmt"

type Person struct {
    Name string
    Age  int
}

// TODO: Birthday 메서드 (포인터 리시버)


func main() {
    p := Person{Name: "Gopher", Age: 10}
    fmt.Println("생일 전:", p.Age)

    p.Birthday()

    fmt.Println("생일 후:", p.Age)
}`,
		SolutionCode: `package main

import "fmt"

type Person struct {
    Name string
    Age  int
}

func (p *Person) Birthday() {
    p.Age++
}

func main() {
    p := Person{Name: "Gopher", Age: 10}
    fmt.Println("생일 전:", p.Age)

    p.Birthday()

    fmt.Println("생일 후:", p.Age)
}`,
		TestCases: []models.TestCase{
			{Input: "", Expected: "생일 후: 11", Hidden: false},
		},
		Hints: []string{"func (p *Person) Birthday()", "p.Age++"},
	},
	{
		ID: 28, Day: 28, ConceptID: 28, Title: "인터페이스 구현",
		Difficulty:  "medium",
		Description: "Shape 인터페이스(Area 메서드)를 정의하고, Rectangle과 Circle이 구현하도록 하세요.",
		InitialCode: `package main

import "fmt"

const Pi = 3.14159

// TODO: Shape 인터페이스 정의


type Rectangle struct {
    Width, Height float64
}

type Circle struct {
    Radius float64
}

// TODO: Rectangle의 Area 메서드


// TODO: Circle의 Area 메서드


func printArea(s Shape) {
    fmt.Printf("면적: %.2f\n", s.Area())
}

func main() {
    printArea(Rectangle{10, 5})
    printArea(Circle{7})
}`,
		SolutionCode: `package main

import "fmt"

const Pi = 3.14159

type Shape interface {
    Area() float64
}

type Rectangle struct {
    Width, Height float64
}

type Circle struct {
    Radius float64
}

func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}

func (c Circle) Area() float64 {
    return Pi * c.Radius * c.Radius
}

func printArea(s Shape) {
    fmt.Printf("면적: %.2f\n", s.Area())
}

func main() {
    printArea(Rectangle{10, 5})
    printArea(Circle{7})
}`,
		TestCases: []models.TestCase{
			{Input: "", Expected: "50.00", Hidden: false},
			{Input: "", Expected: "153.93", Hidden: false},
		},
		Hints: []string{"type Shape interface { Area() float64 }", "암묵적 구현"},
	},
	{
		ID: 29, Day: 29, ConceptID: 29, Title: "타입 판별",
		Difficulty:  "medium",
		Description: "interface{} 값의 타입을 판별하여 적절한 메시지를 출력하세요.",
		InitialCode: `package main

import "fmt"

func describe(i interface{}) {
    // TODO: 타입 스위치로 타입별 메시지 출력

}

func main() {
    describe(42)
    describe("hello")
    describe(3.14)
    describe(true)
}`,
		SolutionCode: `package main

import "fmt"

func describe(i interface{}) {
    switch v := i.(type) {
    case int:
        fmt.Printf("정수: %d\n", v)
    case string:
        fmt.Printf("문자열: %s\n", v)
    case float64:
        fmt.Printf("실수: %.2f\n", v)
    case bool:
        fmt.Printf("불리언: %t\n", v)
    default:
        fmt.Printf("알 수 없는 타입\n")
    }
}

func main() {
    describe(42)
    describe("hello")
    describe(3.14)
    describe(true)
}`,
		TestCases: []models.TestCase{
			{Input: "", Expected: "정수: 42", Hidden: false},
			{Input: "", Expected: "문자열: hello", Hidden: false},
		},
		Hints: []string{"switch v := i.(type)", "case int, string, ..."},
	},
	{
		ID: 30, Day: 30, ConceptID: 30, Title: "안전한 타입 단언",
		Difficulty:  "medium",
		Description: "interface{} 값을 안전하게 string으로 변환하고, 실패 시 기본값을 사용하세요.",
		InitialCode: `package main

import "fmt"

func toString(i interface{}) string {
    // TODO: 안전한 타입 단언으로 string 반환
    // 실패 시 "unknown" 반환

}

func main() {
    fmt.Println(toString("hello"))
    fmt.Println(toString(42))
}`,
		SolutionCode: `package main

import "fmt"

func toString(i interface{}) string {
    if s, ok := i.(string); ok {
        return s
    }
    return "unknown"
}

func main() {
    fmt.Println(toString("hello"))
    fmt.Println(toString(42))
}`,
		TestCases: []models.TestCase{
			{Input: "", Expected: "hello", Hidden: false},
			{Input: "", Expected: "unknown", Hidden: false},
		},
		Hints: []string{"s, ok := i.(string)", "ok가 false면 기본값"},
	},
}

// GetChallengeByDay returns the challenge for a specific day
func GetChallengeByDay(day int) *models.Challenge {
	for _, c := range DailyChallenges {
		if c.Day == day {
			return &c
		}
	}
	return nil
}

// GetAllChallenges returns all challenges
func GetAllChallenges() []models.Challenge {
	return DailyChallenges
}
