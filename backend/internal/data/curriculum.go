package data

import "gomaster-daily/internal/models"

// GoCurriculum contains 100 days of Go learning content
// Organized by categories: Basics, Control Flow, Functions, Data Structures, Concurrency, etc.
var GoCurriculum = []models.Concept{
	// Week 1: Go Basics
	{
		ID: 1, Day: 1, Title: "Hello, Go!", Category: "basics",
		Description: "Go는 Google에서 개발한 정적 타입 컴파일 언어입니다. 간결하고 효율적인 코드 작성을 목표로 합니다.",
		CodeSnippet: `package main

import "fmt"

func main() {
    fmt.Println("Hello, Go!")
}`,
		Explanation: "모든 Go 프로그램은 package 선언으로 시작합니다. main 패키지의 main 함수가 프로그램의 진입점입니다.",
		KeyPoints:   []string{"package main은 실행 가능한 프로그램", "import로 패키지 가져오기", "fmt.Println으로 출력"},
	},
	{
		ID: 2, Day: 2, Title: "변수 선언", Category: "basics",
		Description: "Go에서 변수를 선언하는 여러 가지 방법을 알아봅니다.",
		CodeSnippet: `package main

import "fmt"

func main() {
    // var 키워드 사용
    var name string = "Gopher"
    var age int = 10

    // 짧은 선언 := (타입 추론)
    city := "Seoul"
    score := 95.5

    fmt.Println(name, age, city, score)
}`,
		Explanation: ":= 연산자는 함수 내부에서만 사용 가능하며, 타입을 자동으로 추론합니다.",
		KeyPoints:   []string{"var로 명시적 선언", ":=로 짧은 선언", "타입 추론 지원"},
	},
	{
		ID: 3, Day: 3, Title: "기본 데이터 타입", Category: "basics",
		Description: "Go의 기본 데이터 타입: 정수, 부동소수점, 문자열, 불리언을 학습합니다.",
		CodeSnippet: `package main

import "fmt"

func main() {
    var i int = 42
    var f float64 = 3.14
    var s string = "Hello"
    var b bool = true

    fmt.Printf("정수: %d, 실수: %.2f\n", i, f)
    fmt.Printf("문자열: %s, 불리언: %t\n", s, b)
}`,
		Explanation: "Go는 int, int8, int16, int32, int64와 같은 다양한 정수 타입을 제공합니다.",
		KeyPoints:   []string{"int, float64, string, bool", "Printf로 포맷 출력", "제로값(Zero Value) 개념"},
	},
	{
		ID: 4, Day: 4, Title: "상수(Constants)", Category: "basics",
		Description: "const 키워드로 변하지 않는 값을 정의합니다.",
		CodeSnippet: `package main

import "fmt"

const Pi = 3.14159
const (
    StatusOK = 200
    StatusNotFound = 404
)

func main() {
    const greeting = "Hello"
    fmt.Println(Pi, StatusOK, greeting)
}`,
		Explanation: "상수는 컴파일 시점에 값이 결정되며, 런타임에 변경할 수 없습니다.",
		KeyPoints:   []string{"const로 상수 선언", "그룹화 가능", "타입 없는 상수"},
	},
	{
		ID: 5, Day: 5, Title: "산술 연산자", Category: "basics",
		Description: "Go의 기본 산술 연산자를 학습합니다.",
		CodeSnippet: `package main

import "fmt"

func main() {
    a, b := 10, 3

    fmt.Println("덧셈:", a + b)
    fmt.Println("뺄셈:", a - b)
    fmt.Println("곱셈:", a * b)
    fmt.Println("나눗셈:", a / b)
    fmt.Println("나머지:", a % b)
}`,
		Explanation: "정수 나눗셈은 소수점을 버립니다. 실수 결과가 필요하면 float64로 변환하세요.",
		KeyPoints:   []string{"+, -, *, /, % 연산자", "정수 나눗셈은 내림", "++ -- 증감 연산자"},
	},
	{
		ID: 6, Day: 6, Title: "문자열 다루기", Category: "basics",
		Description: "Go에서 문자열을 생성하고 조작하는 방법을 배웁니다.",
		CodeSnippet: `package main

import (
    "fmt"
    "strings"
)

func main() {
    s := "Hello, Gopher!"

    fmt.Println("길이:", len(s))
    fmt.Println("대문자:", strings.ToUpper(s))
    fmt.Println("포함여부:", strings.Contains(s, "Go"))
    fmt.Println("분리:", strings.Split(s, ", "))
}`,
		Explanation: "strings 패키지는 문자열 조작을 위한 다양한 함수를 제공합니다.",
		KeyPoints:   []string{"len()으로 길이", "strings 패키지 활용", "문자열은 불변(immutable)"},
	},
	{
		ID: 7, Day: 7, Title: "사용자 입력 받기", Category: "basics",
		Description: "fmt.Scan을 사용하여 사용자 입력을 받습니다.",
		CodeSnippet: `package main

import "fmt"

func main() {
    var name string
    var age int

    fmt.Print("이름을 입력하세요: ")
    fmt.Scan(&name)

    fmt.Print("나이를 입력하세요: ")
    fmt.Scan(&age)

    fmt.Printf("%s님, %d살이시군요!\n", name, age)
}`,
		Explanation: "&는 변수의 주소를 나타내는 포인터 연산자입니다. Scan은 주소에 값을 저장합니다.",
		KeyPoints:   []string{"fmt.Scan으로 입력", "&로 주소 전달", "fmt.Printf로 포맷 출력"},
	},

	// Week 2: Control Flow
	{
		ID: 8, Day: 8, Title: "if 조건문", Category: "control-flow",
		Description: "조건에 따라 코드 실행을 제어하는 if문을 배웁니다.",
		CodeSnippet: `package main

import "fmt"

func main() {
    score := 85

    if score >= 90 {
        fmt.Println("A등급")
    } else if score >= 80 {
        fmt.Println("B등급")
    } else {
        fmt.Println("C등급")
    }

    // if에서 초기화문 사용
    if num := score / 10; num >= 8 {
        fmt.Println("우수!")
    }
}`,
		Explanation: "Go의 if문은 조건에 괄호가 필요 없으며, 초기화문을 포함할 수 있습니다.",
		KeyPoints:   []string{"괄호 없는 조건", "else if 체이닝", "if 초기화문"},
	},
	{
		ID: 9, Day: 9, Title: "for 반복문", Category: "control-flow",
		Description: "Go의 유일한 반복문인 for를 다양한 방식으로 사용합니다.",
		CodeSnippet: `package main

import "fmt"

func main() {
    // 기본 for
    for i := 0; i < 5; i++ {
        fmt.Println(i)
    }

    // while처럼 사용
    count := 0
    for count < 3 {
        fmt.Println("count:", count)
        count++
    }

    // 무한 루프
    // for { }
}`,
		Explanation: "Go에는 while문이 없습니다. for문이 모든 반복을 담당합니다.",
		KeyPoints:   []string{"for i := 0; i < n; i++", "while 스타일 for", "무한 루프 for {}"},
	},
	{
		ID: 10, Day: 10, Title: "switch문", Category: "control-flow",
		Description: "여러 조건을 깔끔하게 처리하는 switch문을 배웁니다.",
		CodeSnippet: `package main

import "fmt"

func main() {
    day := 3

    switch day {
    case 1:
        fmt.Println("월요일")
    case 2:
        fmt.Println("화요일")
    case 3:
        fmt.Println("수요일")
    default:
        fmt.Println("기타")
    }

    // 조건 없는 switch
    score := 85
    switch {
    case score >= 90:
        fmt.Println("A")
    case score >= 80:
        fmt.Println("B")
    }
}`,
		Explanation: "Go의 switch는 자동으로 break됩니다. fallthrough로 다음 case를 실행할 수 있습니다.",
		KeyPoints:   []string{"자동 break", "조건 없는 switch", "fallthrough 키워드"},
	},
	{
		ID: 11, Day: 11, Title: "break와 continue", Category: "control-flow",
		Description: "반복문 제어를 위한 break와 continue를 학습합니다.",
		CodeSnippet: `package main

import "fmt"

func main() {
    // break: 루프 종료
    for i := 0; i < 10; i++ {
        if i == 5 {
            break
        }
        fmt.Println(i)
    }

    // continue: 다음 반복으로
    for i := 0; i < 5; i++ {
        if i == 2 {
            continue
        }
        fmt.Println("값:", i)
    }
}`,
		Explanation: "break는 가장 가까운 루프를 종료하고, continue는 현재 반복을 건너뜁니다.",
		KeyPoints:   []string{"break로 루프 탈출", "continue로 건너뛰기", "레이블과 함께 사용 가능"},
	},
	{
		ID: 12, Day: 12, Title: "range 반복", Category: "control-flow",
		Description: "range를 사용하여 컬렉션을 순회합니다.",
		CodeSnippet: `package main

import "fmt"

func main() {
    nums := []int{10, 20, 30, 40}

    // 인덱스와 값
    for i, v := range nums {
        fmt.Printf("인덱스 %d: 값 %d\n", i, v)
    }

    // 값만 사용
    for _, v := range nums {
        fmt.Println(v)
    }

    // 문자열 순회
    for i, c := range "Go" {
        fmt.Printf("%d: %c\n", i, c)
    }
}`,
		Explanation: "range는 슬라이스, 맵, 문자열 등을 순회할 때 사용합니다. _로 불필요한 값을 무시합니다.",
		KeyPoints:   []string{"range로 인덱스, 값 얻기", "_로 값 무시", "문자열은 rune 반환"},
	},

	// Week 3: Functions
	{
		ID: 13, Day: 13, Title: "함수 기초", Category: "functions",
		Description: "Go에서 함수를 정의하고 호출하는 방법을 배웁니다.",
		CodeSnippet: `package main

import "fmt"

func greet(name string) {
    fmt.Println("Hello,", name)
}

func add(a, b int) int {
    return a + b
}

func main() {
    greet("Gopher")
    result := add(3, 5)
    fmt.Println("합:", result)
}`,
		Explanation: "func 키워드로 함수를 정의합니다. 매개변수 타입은 이름 뒤에 옵니다.",
		KeyPoints:   []string{"func 함수명(매개변수) 반환타입", "같은 타입은 한 번만 명시", "return으로 값 반환"},
	},
	{
		ID: 14, Day: 14, Title: "다중 반환값", Category: "functions",
		Description: "Go 함수는 여러 값을 반환할 수 있습니다.",
		CodeSnippet: `package main

import "fmt"

func divide(a, b int) (int, int) {
    return a / b, a % b
}

func getUser() (name string, age int) {
    name = "Gopher"
    age = 10
    return // naked return
}

func main() {
    q, r := divide(17, 5)
    fmt.Printf("몫: %d, 나머지: %d\n", q, r)

    n, a := getUser()
    fmt.Println(n, a)
}`,
		Explanation: "다중 반환은 에러 처리에 특히 유용합니다. 명명된 반환값으로 코드 가독성을 높입니다.",
		KeyPoints:   []string{"쉼표로 여러 값 반환", "명명된 반환값", "naked return"},
	},
	{
		ID: 15, Day: 15, Title: "가변 인자 함수", Category: "functions",
		Description: "가변 개수의 인자를 받는 함수를 만듭니다.",
		CodeSnippet: `package main

import "fmt"

func sum(nums ...int) int {
    total := 0
    for _, n := range nums {
        total += n
    }
    return total
}

func main() {
    fmt.Println(sum(1, 2))
    fmt.Println(sum(1, 2, 3, 4, 5))

    numbers := []int{10, 20, 30}
    fmt.Println(sum(numbers...))
}`,
		Explanation: "...타입으로 가변 인자를 정의합니다. 슬라이스를 전달할 때는 ...를 붙입니다.",
		KeyPoints:   []string{"...타입으로 가변 인자", "내부적으로 슬라이스", "슬라이스 전개 ..."},
	},
	{
		ID: 16, Day: 16, Title: "익명 함수와 클로저", Category: "functions",
		Description: "이름 없는 함수와 외부 변수를 캡처하는 클로저를 배웁니다.",
		CodeSnippet: `package main

import "fmt"

func main() {
    // 익명 함수
    add := func(a, b int) int {
        return a + b
    }
    fmt.Println(add(3, 4))

    // 클로저
    counter := func() func() int {
        count := 0
        return func() int {
            count++
            return count
        }
    }()

    fmt.Println(counter()) // 1
    fmt.Println(counter()) // 2
}`,
		Explanation: "클로저는 외부 변수를 '기억'합니다. 상태를 유지하는 함수를 만들 때 유용합니다.",
		KeyPoints:   []string{"func() 즉시 실행", "변수에 함수 할당", "클로저로 상태 캡처"},
	},
	{
		ID: 17, Day: 17, Title: "defer 키워드", Category: "functions",
		Description: "함수 종료 시 실행되는 defer를 학습합니다.",
		CodeSnippet: `package main

import "fmt"

func main() {
    defer fmt.Println("3. 마지막에 실행")
    defer fmt.Println("2. 두 번째로 실행")
    fmt.Println("1. 첫 번째로 실행")
}

// 리소스 정리 예시
// func readFile() {
//     f, _ := os.Open("file.txt")
//     defer f.Close()
//     // 파일 작업...
// }`,
		Explanation: "defer는 LIFO(후입선출) 순서로 실행됩니다. 리소스 정리에 주로 사용됩니다.",
		KeyPoints:   []string{"함수 끝에서 실행", "LIFO 순서", "리소스 정리에 유용"},
	},

	// Week 4: Data Structures
	{
		ID: 18, Day: 18, Title: "배열(Array)", Category: "data-structures",
		Description: "고정 크기의 배열을 선언하고 사용합니다.",
		CodeSnippet: `package main

import "fmt"

func main() {
    // 배열 선언
    var arr [5]int
    arr[0] = 10
    arr[1] = 20

    // 초기화와 함께 선언
    nums := [3]int{1, 2, 3}
    auto := [...]int{10, 20, 30, 40} // 크기 자동

    fmt.Println("배열:", nums)
    fmt.Println("길이:", len(auto))
}`,
		Explanation: "배열의 크기는 타입의 일부입니다. [3]int와 [5]int는 다른 타입입니다.",
		KeyPoints:   []string{"고정 크기", "크기가 타입의 일부", "[...]로 크기 추론"},
	},
	{
		ID: 19, Day: 19, Title: "슬라이스(Slice) 기초", Category: "data-structures",
		Description: "동적 크기의 슬라이스를 배웁니다.",
		CodeSnippet: `package main

import "fmt"

func main() {
    // 슬라이스 생성
    s := []int{1, 2, 3}
    fmt.Println("슬라이스:", s)

    // make로 생성
    s2 := make([]int, 3, 5) // len=3, cap=5
    fmt.Println("길이:", len(s2), "용량:", cap(s2))

    // append로 요소 추가
    s = append(s, 4, 5)
    fmt.Println("추가 후:", s)
}`,
		Explanation: "슬라이스는 배열의 일부를 참조하는 동적 뷰입니다. 가장 많이 사용되는 데이터 구조입니다.",
		KeyPoints:   []string{"동적 크기", "make로 생성", "append로 추가"},
	},
	{
		ID: 20, Day: 20, Title: "슬라이스 조작", Category: "data-structures",
		Description: "슬라이스의 부분 선택과 복사를 배웁니다.",
		CodeSnippet: `package main

import "fmt"

func main() {
    nums := []int{0, 1, 2, 3, 4, 5}

    // 슬라이싱 [시작:끝]
    fmt.Println(nums[1:4])  // [1 2 3]
    fmt.Println(nums[:3])   // [0 1 2]
    fmt.Println(nums[3:])   // [3 4 5]

    // 복사
    copied := make([]int, len(nums))
    copy(copied, nums)
    fmt.Println("복사:", copied)
}`,
		Explanation: "슬라이싱은 새 슬라이스를 만들지만 같은 배열을 참조합니다. copy로 독립적인 복사본을 만듭니다.",
		KeyPoints:   []string{"[start:end] 슬라이싱", "같은 배열 참조", "copy로 깊은 복사"},
	},
	{
		ID: 21, Day: 21, Title: "맵(Map) 기초", Category: "data-structures",
		Description: "키-값 쌍을 저장하는 맵을 학습합니다.",
		CodeSnippet: `package main

import "fmt"

func main() {
    // 맵 생성
    scores := make(map[string]int)
    scores["Alice"] = 95
    scores["Bob"] = 80

    // 리터럴로 생성
    ages := map[string]int{
        "Tom":  25,
        "Jane": 30,
    }

    fmt.Println(scores["Alice"])
    fmt.Println(ages)
}`,
		Explanation: "맵은 해시 테이블 기반의 키-값 저장소입니다. nil 맵에는 추가할 수 없으니 make로 초기화하세요.",
		KeyPoints:   []string{"make로 초기화", "map[키타입]값타입", "리터럴 초기화"},
	},
	{
		ID: 22, Day: 22, Title: "맵 조작", Category: "data-structures",
		Description: "맵의 조회, 삭제, 존재 확인을 배웁니다.",
		CodeSnippet: `package main

import "fmt"

func main() {
    m := map[string]int{"a": 1, "b": 2}

    // 존재 확인
    val, ok := m["a"]
    if ok {
        fmt.Println("a 존재:", val)
    }

    // 삭제
    delete(m, "b")
    fmt.Println("삭제 후:", m)

    // 순회
    for k, v := range m {
        fmt.Printf("%s: %d\n", k, v)
    }
}`,
		Explanation: "두 번째 반환값(ok)으로 키 존재 여부를 확인합니다. 맵 순회 순서는 보장되지 않습니다.",
		KeyPoints:   []string{"val, ok := m[key]", "delete로 삭제", "순회 순서 무작위"},
	},

	// Week 5: Structs and Methods
	{
		ID: 23, Day: 23, Title: "구조체(Struct) 기초", Category: "structs",
		Description: "여러 필드를 묶는 구조체를 정의합니다.",
		CodeSnippet: `package main

import "fmt"

type Person struct {
    Name string
    Age  int
    City string
}

func main() {
    // 구조체 생성
    p1 := Person{Name: "Gopher", Age: 10, City: "Seoul"}

    // 순서대로 초기화
    p2 := Person{"Alice", 25, "Busan"}

    // 필드 접근
    fmt.Println(p1.Name, p1.Age)
    p2.Age = 26
    fmt.Println(p2)
}`,
		Explanation: "구조체는 관련 데이터를 그룹화합니다. 필드명으로 초기화하면 순서에 상관없이 값을 설정할 수 있습니다.",
		KeyPoints:   []string{"type Name struct", "필드명: 값 초기화", ".으로 필드 접근"},
	},
	{
		ID: 24, Day: 24, Title: "메서드(Method)", Category: "structs",
		Description: "구조체에 메서드를 추가하는 방법을 배웁니다.",
		CodeSnippet: `package main

import "fmt"

type Rectangle struct {
    Width, Height float64
}

// 값 리시버 메서드
func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}

// 포인터 리시버 메서드
func (r *Rectangle) Scale(factor float64) {
    r.Width *= factor
    r.Height *= factor
}

func main() {
    rect := Rectangle{10, 5}
    fmt.Println("면적:", rect.Area())

    rect.Scale(2)
    fmt.Println("확대 후:", rect)
}`,
		Explanation: "포인터 리시버는 구조체를 수정할 수 있습니다. 값 리시버는 복사본으로 작업합니다.",
		KeyPoints:   []string{"func (r Type) 메서드", "값 vs 포인터 리시버", "*로 원본 수정"},
	},
	{
		ID: 25, Day: 25, Title: "구조체 임베딩", Category: "structs",
		Description: "구조체 안에 다른 구조체를 포함시킵니다.",
		CodeSnippet: `package main

import "fmt"

type Address struct {
    City, Street string
}

type Person struct {
    Name    string
    Age     int
    Address // 임베딩
}

func main() {
    p := Person{
        Name: "Gopher",
        Age:  10,
        Address: Address{
            City:   "Seoul",
            Street: "Gangnam",
        },
    }

    // 직접 접근 가능
    fmt.Println(p.City) // p.Address.City와 동일
}`,
		Explanation: "임베딩된 구조체의 필드와 메서드에 직접 접근할 수 있습니다. 일종의 상속과 유사합니다.",
		KeyPoints:   []string{"필드명 없이 타입만", "필드 승격", "메서드도 승격"},
	},

	// Week 6: Pointers
	{
		ID: 26, Day: 26, Title: "포인터 기초", Category: "pointers",
		Description: "메모리 주소를 다루는 포인터를 학습합니다.",
		CodeSnippet: `package main

import "fmt"

func main() {
    x := 10

    // & : 주소 얻기
    p := &x
    fmt.Println("주소:", p)

    // * : 값 접근 (역참조)
    fmt.Println("값:", *p)

    // 포인터로 값 변경
    *p = 20
    fmt.Println("x:", x) // 20
}`,
		Explanation: "&로 주소를 얻고, *로 해당 주소의 값에 접근합니다. Go에는 포인터 연산이 없습니다.",
		KeyPoints:   []string{"&로 주소 얻기", "*로 역참조", "포인터 연산 불가"},
	},
	{
		ID: 27, Day: 27, Title: "포인터와 함수", Category: "pointers",
		Description: "포인터를 사용해 함수에서 값을 수정합니다.",
		CodeSnippet: `package main

import "fmt"

// 값으로 전달 - 복사본 수정
func doubleValue(n int) {
    n *= 2
}

// 포인터로 전달 - 원본 수정
func doublePointer(n *int) {
    *n *= 2
}

func main() {
    num := 10

    doubleValue(num)
    fmt.Println("값 전달:", num) // 10

    doublePointer(&num)
    fmt.Println("포인터 전달:", num) // 20
}`,
		Explanation: "큰 구조체는 포인터로 전달하면 복사 비용을 줄일 수 있습니다.",
		KeyPoints:   []string{"값 전달은 복사", "포인터 전달은 참조", "new()로 포인터 생성"},
	},

	// Week 7: Interfaces
	{
		ID: 28, Day: 28, Title: "인터페이스 기초", Category: "interfaces",
		Description: "메서드 집합을 정의하는 인터페이스를 배웁니다.",
		CodeSnippet: `package main

import "fmt"

type Speaker interface {
    Speak() string
}

type Dog struct{ Name string }
type Cat struct{ Name string }

func (d Dog) Speak() string { return "멍멍!" }
func (c Cat) Speak() string { return "야옹!" }

func greet(s Speaker) {
    fmt.Println(s.Speak())
}

func main() {
    greet(Dog{"Max"})
    greet(Cat{"Kitty"})
}`,
		Explanation: "Go 인터페이스는 암묵적으로 구현됩니다. implements 키워드가 필요 없습니다.",
		KeyPoints:   []string{"암묵적 구현", "덕 타이핑", "다형성 지원"},
	},
	{
		ID: 29, Day: 29, Title: "빈 인터페이스", Category: "interfaces",
		Description: "모든 타입을 받을 수 있는 interface{}를 배웁니다.",
		CodeSnippet: `package main

import "fmt"

func printAny(v interface{}) {
    fmt.Printf("타입: %T, 값: %v\n", v, v)
}

func main() {
    printAny(42)
    printAny("Hello")
    printAny(3.14)
    printAny([]int{1, 2, 3})

    // any는 interface{}의 별칭
    var data any = "Go 1.18+"
    fmt.Println(data)
}`,
		Explanation: "interface{}(또는 any)는 어떤 타입도 받을 수 있습니다. 제네릭 이전에 많이 사용되었습니다.",
		KeyPoints:   []string{"모든 타입 수용", "any = interface{}", "타입 정보 손실"},
	},
	{
		ID: 30, Day: 30, Title: "타입 단언", Category: "interfaces",
		Description: "인터페이스에서 구체적인 타입을 추출합니다.",
		CodeSnippet: `package main

import "fmt"

func main() {
    var i interface{} = "hello"

    // 타입 단언
    s := i.(string)
    fmt.Println(s)

    // 안전한 타입 단언
    n, ok := i.(int)
    if !ok {
        fmt.Println("int가 아닙니다")
    }

    // 타입 스위치
    switch v := i.(type) {
    case string:
        fmt.Println("문자열:", v)
    case int:
        fmt.Println("정수:", v)
    }
}`,
		Explanation: "타입 단언 실패 시 패닉이 발생합니다. ok 패턴으로 안전하게 처리하세요.",
		KeyPoints:   []string{"i.(Type) 타입 단언", "ok 패턴", "타입 스위치"},
	},

	// Week 8-9: Error Handling
	{
		ID: 31, Day: 31, Title: "에러 처리 기초", Category: "errors",
		Description: "Go의 에러 처리 방식을 배웁니다.",
		CodeSnippet: `package main

import (
    "errors"
    "fmt"
)

func divide(a, b int) (int, error) {
    if b == 0 {
        return 0, errors.New("0으로 나눌 수 없습니다")
    }
    return a / b, nil
}

func main() {
    result, err := divide(10, 0)
    if err != nil {
        fmt.Println("에러:", err)
        return
    }
    fmt.Println("결과:", result)
}`,
		Explanation: "Go는 예외 대신 에러 값을 반환합니다. 항상 에러를 확인하는 것이 관례입니다.",
		KeyPoints:   []string{"error는 내장 인터페이스", "nil이면 성공", "if err != nil 패턴"},
	},
	{
		ID: 32, Day: 32, Title: "커스텀 에러", Category: "errors",
		Description: "사용자 정의 에러 타입을 만듭니다.",
		CodeSnippet: `package main

import "fmt"

type ValidationError struct {
    Field   string
    Message string
}

func (e ValidationError) Error() string {
    return fmt.Sprintf("%s: %s", e.Field, e.Message)
}

func validateAge(age int) error {
    if age < 0 {
        return ValidationError{"age", "음수일 수 없습니다"}
    }
    return nil
}

func main() {
    if err := validateAge(-5); err != nil {
        fmt.Println(err)
    }
}`,
		Explanation: "Error() string 메서드를 구현하면 error 인터페이스를 만족합니다.",
		KeyPoints:   []string{"Error() string 구현", "에러에 정보 추가", "타입 단언으로 추출"},
	},

	// Week 10-12: Concurrency
	{
		ID: 33, Day: 33, Title: "고루틴(Goroutine)", Category: "concurrency",
		Description: "경량 스레드인 고루틴을 배웁니다.",
		CodeSnippet: `package main

import (
    "fmt"
    "time"
)

func sayHello(name string) {
    for i := 0; i < 3; i++ {
        fmt.Println("Hello,", name)
        time.Sleep(100 * time.Millisecond)
    }
}

func main() {
    go sayHello("Gopher")  // 고루틴 시작
    go sayHello("World")   // 또 다른 고루틴

    time.Sleep(500 * time.Millisecond)
    fmt.Println("Done")
}`,
		Explanation: "go 키워드로 함수를 고루틴으로 실행합니다. 고루틴은 OS 스레드보다 훨씬 가볍습니다.",
		KeyPoints:   []string{"go 키워드", "수천 개 동시 실행 가능", "main 종료 시 모두 종료"},
	},
	{
		ID: 34, Day: 34, Title: "채널(Channel) 기초", Category: "concurrency",
		Description: "고루틴 간 통신을 위한 채널을 배웁니다.",
		CodeSnippet: `package main

import "fmt"

func main() {
    // 채널 생성
    ch := make(chan string)

    go func() {
        ch <- "Hello from goroutine!"
    }()

    // 채널에서 수신
    msg := <-ch
    fmt.Println(msg)

    // 버퍼 채널
    buffered := make(chan int, 2)
    buffered <- 1
    buffered <- 2
    fmt.Println(<-buffered, <-buffered)
}`,
		Explanation: "채널은 고루틴 간 동기화와 데이터 전달을 담당합니다. <- 연산자로 송수신합니다.",
		KeyPoints:   []string{"make(chan Type)", "<- 송수신", "버퍼 채널"},
	},
	{
		ID: 35, Day: 35, Title: "select문", Category: "concurrency",
		Description: "여러 채널을 동시에 대기하는 select를 배웁니다.",
		CodeSnippet: `package main

import (
    "fmt"
    "time"
)

func main() {
    ch1 := make(chan string)
    ch2 := make(chan string)

    go func() {
        time.Sleep(100 * time.Millisecond)
        ch1 <- "one"
    }()

    go func() {
        time.Sleep(200 * time.Millisecond)
        ch2 <- "two"
    }()

    for i := 0; i < 2; i++ {
        select {
        case msg1 := <-ch1:
            fmt.Println("ch1:", msg1)
        case msg2 := <-ch2:
            fmt.Println("ch2:", msg2)
        }
    }
}`,
		Explanation: "select는 여러 채널 중 준비된 것을 처리합니다. 동시에 준비되면 무작위 선택됩니다.",
		KeyPoints:   []string{"여러 채널 대기", "준비된 것 실행", "default로 비차단"},
	},
	{
		ID: 36, Day: 36, Title: "WaitGroup", Category: "concurrency",
		Description: "고루틴 완료를 기다리는 WaitGroup을 배웁니다.",
		CodeSnippet: `package main

import (
    "fmt"
    "sync"
)

func worker(id int, wg *sync.WaitGroup) {
    defer wg.Done()
    fmt.Printf("Worker %d 시작\n", id)
    // 작업 수행...
    fmt.Printf("Worker %d 완료\n", id)
}

func main() {
    var wg sync.WaitGroup

    for i := 1; i <= 3; i++ {
        wg.Add(1)
        go worker(i, &wg)
    }

    wg.Wait()
    fmt.Println("모든 작업 완료")
}`,
		Explanation: "WaitGroup은 모든 고루틴이 완료될 때까지 기다립니다. Add, Done, Wait를 사용합니다.",
		KeyPoints:   []string{"Add로 카운터 증가", "Done으로 완료 신호", "Wait로 대기"},
	},
	{
		ID: 37, Day: 37, Title: "Mutex", Category: "concurrency",
		Description: "공유 자원 보호를 위한 Mutex를 배웁니다.",
		CodeSnippet: `package main

import (
    "fmt"
    "sync"
)

type Counter struct {
    mu    sync.Mutex
    value int
}

func (c *Counter) Increment() {
    c.mu.Lock()
    defer c.mu.Unlock()
    c.value++
}

func (c *Counter) Value() int {
    c.mu.Lock()
    defer c.mu.Unlock()
    return c.value
}

func main() {
    counter := &Counter{}
    var wg sync.WaitGroup

    for i := 0; i < 1000; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            counter.Increment()
        }()
    }

    wg.Wait()
    fmt.Println("카운터:", counter.Value())
}`,
		Explanation: "Mutex는 한 번에 하나의 고루틴만 임계 영역에 접근하도록 합니다.",
		KeyPoints:   []string{"Lock/Unlock", "defer로 안전하게", "RWMutex도 있음"},
	},

	// Weeks 13-14: Packages and Modules
	{
		ID: 38, Day: 38, Title: "패키지 생성", Category: "packages",
		Description: "사용자 정의 패키지를 만들고 사용합니다.",
		CodeSnippet: `// mathutil/math.go
package mathutil

func Add(a, b int) int {
    return a + b
}

func subtract(a, b int) int { // 소문자는 비공개
    return a - b
}

// main.go
package main

import (
    "fmt"
    "myapp/mathutil"
)

func main() {
    result := mathutil.Add(3, 5)
    fmt.Println(result)
}`,
		Explanation: "대문자로 시작하는 이름만 외부에서 접근 가능합니다(공개). 소문자는 패키지 내부용입니다.",
		KeyPoints:   []string{"대문자 = 공개", "소문자 = 비공개", "모듈 경로로 import"},
	},
	{
		ID: 39, Day: 39, Title: "Go Modules", Category: "packages",
		Description: "Go 모듈 시스템으로 의존성을 관리합니다.",
		CodeSnippet: `// go.mod 파일
module myapp

go 1.21

require (
    github.com/gin-gonic/gin v1.9.1
)

// 명령어
// go mod init myapp        # 모듈 초기화
// go mod tidy              # 의존성 정리
// go get package@version   # 패키지 추가`,
		Explanation: "go.mod 파일이 모듈의 루트입니다. go mod tidy로 사용하지 않는 의존성을 정리합니다.",
		KeyPoints:   []string{"go mod init", "go.mod / go.sum", "go get으로 추가"},
	},

	// Additional days for more advanced topics
	{
		ID: 40, Day: 40, Title: "JSON 다루기", Category: "stdlib",
		Description: "JSON 인코딩/디코딩을 배웁니다.",
		CodeSnippet: `package main

import (
    "encoding/json"
    "fmt"
)

type User struct {
    Name  string ` + "`json:\"name\"`" + `
    Email string ` + "`json:\"email\"`" + `
    Age   int    ` + "`json:\"age,omitempty\"`" + `
}

func main() {
    // 구조체 -> JSON
    user := User{Name: "Gopher", Email: "go@example.com"}
    data, _ := json.Marshal(user)
    fmt.Println(string(data))

    // JSON -> 구조체
    jsonStr := ` + "`" + `{"name":"Alice","email":"alice@example.com","age":25}` + "`" + `
    var u User
    json.Unmarshal([]byte(jsonStr), &u)
    fmt.Printf("%+v\n", u)
}`,
		Explanation: "struct 태그로 JSON 키 이름을 지정합니다. omitempty는 빈 값을 생략합니다.",
		KeyPoints:   []string{"json.Marshal", "json.Unmarshal", "struct 태그"},
	},
}

// GetConceptByDay returns the concept for a specific day
func GetConceptByDay(day int) *models.Concept {
	for _, c := range GoCurriculum {
		if c.Day == day {
			return &c
		}
	}
	return nil
}

// GetAllConcepts returns all concepts
func GetAllConcepts() []models.Concept {
	return GoCurriculum
}
