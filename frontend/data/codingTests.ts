import { CodingTest } from '../types';

// 각 Day별 코딩테스트 - 기본 문제 + 도전 문제 (모두 함수 기반, Go Playground 호환)
export const codingTestsData: CodingTest[] = [
  // ========== Day 1: Hello World ==========
  {
    id: 1,
    day: 1,
    title: "Hello World",
    platform: "custom",
    problemId: "1",
    url: "#",
    difficulty: "Bronze V",
    category: "입출력",
    description: "Hello World!를 출력하세요.",
    tags: ["출력", "기초"],
    hint: "fmt.Println을 사용해보세요.",
    problemStatement: "Hello World!를 출력하는 프로그램을 작성하세요.",
    inputDescription: "없음",
    outputDescription: "Hello World!를 출력합니다.",
    examples: [{ input: "", output: "Hello World!" }],
    testCases: [{ input: "", expected: "Hello World!\n", isHidden: false }],
    initialCode: `package main

import "fmt"

func main() {
    // Hello World!를 출력하세요
}`,
  },
  {
    id: 101,
    day: 1,
    title: "인사 함수 만들기",
    platform: "custom",
    problemId: "101",
    url: "#",
    difficulty: "Bronze IV",
    category: "함수",
    description: "이름을 받아서 인사말을 반환하는 함수를 만드세요.",
    tags: ["함수", "문자열"],
    hint: "문자열 연결은 + 연산자를 사용합니다.",
    problemStatement: `이름을 받아서 "Hello, {이름}!"을 반환하는 greet 함수를 완성하세요.

예: greet("Go") → "Hello, Go!"`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "인사말을 출력합니다.",
    examples: [{ input: 'greet("Go")', output: "Hello, Go!" }, { input: 'greet("World")', output: "Hello, World!" }],
    testCases: [{ input: "", expected: "Hello, Go!\nHello, World!\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// greet 함수를 완성하세요
func greet(name string) string {
    // 여기에 코드를 작성하세요
    return ""
}

// main 함수는 수정하지 마세요
func main() {
    fmt.Println(greet("Go"))
    fmt.Println(greet("World"))
}`,
  },

  // ========== Day 2: 변수와 자료형 ==========
  {
    id: 2,
    day: 2,
    title: "두 수의 합",
    platform: "custom",
    problemId: "2",
    url: "#",
    difficulty: "Bronze V",
    category: "연산자",
    description: "두 정수의 합을 반환하세요.",
    tags: ["함수", "연산자"],
    hint: "a + b를 반환하세요.",
    problemStatement: `두 정수 A와 B가 주어질 때, A+B를 반환하는 함수를 완성하세요.

add 함수를 완성하면 됩니다. main 함수는 수정하지 마세요.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "A+B 값을 출력합니다.",
    examples: [{ input: "add(1, 2)", output: "3" }, { input: "add(5, 3)", output: "8" }],
    testCases: [{ input: "", expected: "3\n8\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// add 함수를 완성하세요
func add(a, b int) int {
    // 여기에 코드를 작성하세요
    return 0
}

// main 함수는 수정하지 마세요
func main() {
    fmt.Println(add(1, 2))
    fmt.Println(add(5, 3))
}`,
  },
  {
    id: 102,
    day: 2,
    title: "온도 변환기",
    platform: "custom",
    problemId: "102",
    url: "#",
    difficulty: "Bronze III",
    category: "연산자",
    description: "섭씨를 화씨로 변환하세요.",
    tags: ["함수", "연산자", "형변환"],
    hint: "화씨 = 섭씨 * 9/5 + 32",
    problemStatement: `섭씨 온도를 화씨로 변환하는 함수를 완성하세요.

공식: F = C × 9/5 + 32

결과는 소수점 첫째 자리까지 반올림하여 반환하세요.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "화씨 온도를 출력합니다.",
    examples: [{ input: "celsiusToFahrenheit(0)", output: "32.0" }, { input: "celsiusToFahrenheit(100)", output: "212.0" }],
    testCases: [{ input: "", expected: "32.0\n212.0\n98.6\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// celsiusToFahrenheit 함수를 완성하세요
func celsiusToFahrenheit(celsius float64) float64 {
    // 여기에 코드를 작성하세요
    return 0
}

// main 함수는 수정하지 마세요
func main() {
    fmt.Printf("%.1f\\n", celsiusToFahrenheit(0))
    fmt.Printf("%.1f\\n", celsiusToFahrenheit(100))
    fmt.Printf("%.1f\\n", celsiusToFahrenheit(37))
}`,
  },

  // ========== Day 3: 연산자 ==========
  {
    id: 3,
    day: 3,
    title: "두 수의 차",
    platform: "custom",
    problemId: "3",
    url: "#",
    difficulty: "Bronze V",
    category: "연산자",
    description: "두 정수의 차를 반환하세요.",
    tags: ["함수", "연산자"],
    hint: "a - b를 반환하세요.",
    problemStatement: `두 정수 A와 B가 주어질 때, A-B를 반환하는 함수를 완성하세요.

sub 함수를 완성하면 됩니다.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "A-B 값을 출력합니다.",
    examples: [{ input: "sub(3, 2)", output: "1" }],
    testCases: [{ input: "", expected: "1\n5\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// sub 함수를 완성하세요
func sub(a, b int) int {
    // 여기에 코드를 작성하세요
    return 0
}

// main 함수는 수정하지 마세요
func main() {
    fmt.Println(sub(3, 2))
    fmt.Println(sub(10, 5))
}`,
  },
  {
    id: 103,
    day: 3,
    title: "사칙연산 계산기",
    platform: "custom",
    problemId: "103",
    url: "#",
    difficulty: "Bronze II",
    category: "연산자",
    description: "두 수의 사칙연산 결과를 모두 반환하세요.",
    tags: ["함수", "연산자", "다중반환"],
    hint: "Go는 여러 값을 반환할 수 있습니다: return a+b, a-b, a*b, a/b, a%b",
    problemStatement: `두 정수가 주어질 때, +, -, *, /, % 연산 결과를 모두 반환하는 함수를 완성하세요.

Go에서는 함수가 여러 값을 반환할 수 있습니다.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "각 연산 결과를 출력합니다.",
    examples: [{ input: "calculate(7, 3)", output: "10 4 21 2 1" }],
    testCases: [{ input: "", expected: "10 4 21 2 1\n13 7 30 3 1\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// calculate 함수를 완성하세요 - 5개의 값을 반환해야 합니다
func calculate(a, b int) (int, int, int, int, int) {
    // 여기에 코드를 작성하세요
    // +, -, *, /, % 순서로 반환
    return 0, 0, 0, 0, 0
}

// main 함수는 수정하지 마세요
func main() {
    add, sub, mul, div, mod := calculate(7, 3)
    fmt.Println(add, sub, mul, div, mod)
    add, sub, mul, div, mod = calculate(10, 3)
    fmt.Println(add, sub, mul, div, mod)
}`,
  },

  // ========== Day 4: 자료형 변환 ==========
  {
    id: 4,
    day: 4,
    title: "두 수의 곱",
    platform: "custom",
    problemId: "4",
    url: "#",
    difficulty: "Bronze V",
    category: "연산자",
    description: "두 수의 곱셈 결과를 반환하세요.",
    tags: ["함수", "연산자"],
    hint: "a * b를 반환하세요.",
    problemStatement: `두 정수 A와 B가 주어질 때, A*B를 반환하는 함수를 완성하세요.

multiply 함수를 완성하면 됩니다.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "A*B 값을 출력합니다.",
    examples: [{ input: "multiply(3, 5)", output: "15" }],
    testCases: [{ input: "", expected: "15\n24\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// multiply 함수를 완성하세요
func multiply(a, b int) int {
    // 여기에 코드를 작성하세요
    return 0
}

// main 함수는 수정하지 마세요
func main() {
    fmt.Println(multiply(3, 5))
    fmt.Println(multiply(4, 6))
}`,
  },
  {
    id: 104,
    day: 4,
    title: "정수와 실수 변환",
    platform: "custom",
    problemId: "104",
    url: "#",
    difficulty: "Bronze III",
    category: "자료형",
    description: "실수를 정수로, 정수를 실수로 변환하세요.",
    tags: ["자료형", "형변환"],
    hint: "int(f)로 실수→정수, float64(n)으로 정수→실수 변환",
    problemStatement: `실수를 정수로 변환하면 소수점 이하가 버려집니다.
정수를 실수로 변환하면 .0이 붙습니다.

두 변환 함수를 완성하세요.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "변환된 값을 출력합니다.",
    examples: [{ input: "toInt(3.7)", output: "3" }, { input: "toFloat(5)", output: "5.0" }],
    testCases: [{ input: "", expected: "3\n-2\n5.0\n10.0\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// toInt: 실수를 정수로 변환
func toInt(f float64) int {
    // 여기에 코드를 작성하세요
    return 0
}

// toFloat: 정수를 실수로 변환
func toFloat(n int) float64 {
    // 여기에 코드를 작성하세요
    return 0
}

// main 함수는 수정하지 마세요
func main() {
    fmt.Println(toInt(3.7))
    fmt.Println(toInt(-2.9))
    fmt.Printf("%.1f\\n", toFloat(5))
    fmt.Printf("%.1f\\n", toFloat(10))
}`,
  },

  // ========== Day 5: fmt 패키지 ==========
  {
    id: 5,
    day: 5,
    title: "나눗셈과 나머지",
    platform: "custom",
    problemId: "5",
    url: "#",
    difficulty: "Bronze V",
    category: "연산자",
    description: "나눗셈의 몫과 나머지를 반환하세요.",
    tags: ["함수", "연산자"],
    hint: "몫: a/b, 나머지: a%b",
    problemStatement: `두 정수 A와 B가 주어질 때, A를 B로 나눈 몫과 나머지를 반환하는 함수를 완성하세요.

divMod 함수는 두 개의 값(몫, 나머지)을 반환합니다.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "몫과 나머지를 출력합니다.",
    examples: [{ input: "divMod(7, 3)", output: "2 1" }],
    testCases: [{ input: "", expected: "2 1\n3 1\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// divMod 함수를 완성하세요 - 몫과 나머지를 반환
func divMod(a, b int) (int, int) {
    // 여기에 코드를 작성하세요
    return 0, 0
}

// main 함수는 수정하지 마세요
func main() {
    q, r := divMod(7, 3)
    fmt.Println(q, r)
    q, r = divMod(10, 3)
    fmt.Println(q, r)
}`,
  },
  {
    id: 105,
    day: 5,
    title: "포맷 문자열",
    platform: "custom",
    problemId: "105",
    url: "#",
    difficulty: "Bronze III",
    category: "fmt",
    description: "다양한 형식으로 값을 출력하세요.",
    tags: ["fmt", "포맷"],
    hint: "fmt.Sprintf를 사용하세요.",
    problemStatement: `fmt.Sprintf를 사용하여 다양한 형식의 문자열을 만드세요.

- formatInt: 정수를 3자리마다 0으로 채워서 반환 (예: 42 → "042")
- formatFloat: 실수를 소수점 2자리까지 반환 (예: 3.14159 → "3.14")
- formatBinary: 정수를 2진수로 반환 (예: 10 → "1010")`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "포맷된 문자열을 출력합니다.",
    examples: [{ input: "formatInt(42)", output: "042" }],
    testCases: [{ input: "", expected: "042\n007\n3.14\n2.72\n1010\n1111\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// formatInt: 3자리 0패딩 (예: 42 → "042")
func formatInt(n int) string {
    // fmt.Sprintf와 %03d 사용
    return ""
}

// formatFloat: 소수점 2자리 (예: 3.14159 → "3.14")
func formatFloat(f float64) string {
    // fmt.Sprintf와 %.2f 사용
    return ""
}

// formatBinary: 2진수 (예: 10 → "1010")
func formatBinary(n int) string {
    // fmt.Sprintf와 %b 사용
    return ""
}

// main 함수는 수정하지 마세요
func main() {
    fmt.Println(formatInt(42))
    fmt.Println(formatInt(7))
    fmt.Println(formatFloat(3.14159))
    fmt.Println(formatFloat(2.71828))
    fmt.Println(formatBinary(10))
    fmt.Println(formatBinary(15))
}`,
  },

  // ========== Day 6: 문자열 기초 ==========
  {
    id: 6,
    day: 6,
    title: "문자열 길이",
    platform: "custom",
    problemId: "6",
    url: "#",
    difficulty: "Bronze V",
    category: "문자열",
    description: "문자열의 길이를 반환하세요.",
    tags: ["문자열", "len"],
    hint: "len(s)를 사용하세요.",
    problemStatement: `문자열이 주어질 때, 그 길이를 반환하는 함수를 완성하세요.

Go에서 len() 함수는 문자열의 바이트 수를 반환합니다.
영어는 1글자=1바이트이지만, 한글은 1글자=3바이트입니다.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "문자열의 길이(바이트 수)를 출력합니다.",
    examples: [{ input: 'strLen("hello")', output: "5" }],
    testCases: [{ input: "", expected: "5\n2\n0\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// strLen 함수를 완성하세요
func strLen(s string) int {
    // 여기에 코드를 작성하세요
    return 0
}

// main 함수는 수정하지 마세요
func main() {
    fmt.Println(strLen("hello"))
    fmt.Println(strLen("Go"))
    fmt.Println(strLen(""))
}`,
  },
  {
    id: 106,
    day: 6,
    title: "문자열 뒤집기",
    platform: "custom",
    problemId: "106",
    url: "#",
    difficulty: "Bronze II",
    category: "문자열",
    description: "문자열을 뒤집어서 반환하세요.",
    tags: ["문자열", "rune"],
    hint: "문자열을 []rune으로 변환 후 뒤집으세요.",
    problemStatement: `문자열이 주어질 때, 뒤집은 문자열을 반환하세요.

예: "hello" → "olleh"

힌트: 영어만 고려하면 []byte를, 유니코드를 고려하면 []rune을 사용하세요.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "뒤집은 문자열을 출력합니다.",
    examples: [{ input: 'reverse("hello")', output: "olleh" }],
    testCases: [{ input: "", expected: "olleh\noG\ndlrow\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// reverse 함수를 완성하세요
func reverse(s string) string {
    // 힌트: []rune(s)로 변환 후 뒤집기
    return ""
}

// main 함수는 수정하지 마세요
func main() {
    fmt.Println(reverse("hello"))
    fmt.Println(reverse("Go"))
    fmt.Println(reverse("world"))
}`,
  },

  // ========== Day 7: 문자열 조작 ==========
  {
    id: 7,
    day: 7,
    title: "대문자 변환",
    platform: "custom",
    problemId: "7",
    url: "#",
    difficulty: "Bronze V",
    category: "문자열",
    description: "문자열을 대문자로 변환하세요.",
    tags: ["문자열", "strings"],
    hint: "strings.ToUpper를 사용하세요.",
    problemStatement: `문자열이 주어질 때, 모든 문자를 대문자로 변환하여 반환하세요.

Go의 strings 패키지를 사용할 수 있습니다.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "대문자로 변환된 문자열을 출력합니다.",
    examples: [{ input: 'toUpper("hello")', output: "HELLO" }],
    testCases: [{ input: "", expected: "HELLO\nGOLANG\nWORLD123\n", isHidden: false }],
    initialCode: `package main

import (
    "fmt"
    "strings"
)

// toUpper 함수를 완성하세요
func toUpper(s string) string {
    // strings.ToUpper 사용
    return ""
}

// main 함수는 수정하지 마세요
func main() {
    fmt.Println(toUpper("hello"))
    fmt.Println(toUpper("GoLang"))
    fmt.Println(toUpper("World123"))
}`,
  },
  {
    id: 107,
    day: 7,
    title: "팰린드롬 검사",
    platform: "custom",
    problemId: "107",
    url: "#",
    difficulty: "Bronze I",
    category: "문자열",
    description: "문자열이 팰린드롬인지 검사하세요.",
    tags: ["문자열", "팰린드롬"],
    hint: "문자열을 뒤집어서 원본과 비교하세요.",
    problemStatement: `팰린드롬은 앞으로 읽어도 뒤로 읽어도 같은 문자열입니다.

문자열이 팰린드롬이면 true, 아니면 false를 반환하세요.

예: "level" → true, "hello" → false`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "팰린드롬 여부를 출력합니다.",
    examples: [{ input: 'isPalindrome("level")', output: "true" }],
    testCases: [{ input: "", expected: "true\nfalse\ntrue\ntrue\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// isPalindrome 함수를 완성하세요
func isPalindrome(s string) bool {
    // 문자열을 뒤집어서 원본과 비교
    return false
}

// main 함수는 수정하지 마세요
func main() {
    fmt.Println(isPalindrome("level"))
    fmt.Println(isPalindrome("hello"))
    fmt.Println(isPalindrome("racecar"))
    fmt.Println(isPalindrome("a"))
}`,
  },

  // ========== Day 8: 조건문 (if) ==========
  {
    id: 8,
    day: 8,
    title: "짝수 홀수 판별",
    platform: "custom",
    problemId: "8",
    url: "#",
    difficulty: "Bronze V",
    category: "조건문",
    description: "숫자가 짝수인지 홀수인지 판별하세요.",
    tags: ["if문", "조건문"],
    hint: "n % 2 == 0이면 짝수입니다.",
    problemStatement: `정수가 주어질 때, 짝수면 "even", 홀수면 "odd"를 반환하세요.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "even 또는 odd를 출력합니다.",
    examples: [{ input: "evenOdd(4)", output: "even" }],
    testCases: [{ input: "", expected: "even\nodd\neven\nodd\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// evenOdd 함수를 완성하세요
func evenOdd(n int) string {
    // 여기에 코드를 작성하세요
    return ""
}

// main 함수는 수정하지 마세요
func main() {
    fmt.Println(evenOdd(4))
    fmt.Println(evenOdd(7))
    fmt.Println(evenOdd(0))
    fmt.Println(evenOdd(-3))
}`,
  },
  {
    id: 108,
    day: 8,
    title: "세 수 중 최댓값",
    platform: "custom",
    problemId: "108",
    url: "#",
    difficulty: "Bronze III",
    category: "조건문",
    description: "세 수 중 가장 큰 값을 반환하세요.",
    tags: ["if문", "비교"],
    hint: "if-else를 중첩하거나 여러 조건을 사용하세요.",
    problemStatement: `세 정수가 주어질 때, 가장 큰 값을 반환하세요.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "가장 큰 값을 출력합니다.",
    examples: [{ input: "max3(1, 5, 3)", output: "5" }],
    testCases: [{ input: "", expected: "5\n7\n10\n5\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// max3 함수를 완성하세요
func max3(a, b, c int) int {
    // 여기에 코드를 작성하세요
    return 0
}

// main 함수는 수정하지 마세요
func main() {
    fmt.Println(max3(1, 5, 3))
    fmt.Println(max3(7, 2, 4))
    fmt.Println(max3(3, 10, 1))
    fmt.Println(max3(5, 5, 5))
}`,
  },

  // ========== Day 9: 조건문 (switch) ==========
  {
    id: 9,
    day: 9,
    title: "요일 반환",
    platform: "custom",
    problemId: "9",
    url: "#",
    difficulty: "Bronze V",
    category: "조건문",
    description: "숫자를 요일로 변환하세요.",
    tags: ["switch문"],
    hint: "switch문을 사용하세요.",
    problemStatement: `숫자(1-7)가 주어질 때, 해당하는 요일을 반환하세요.
1=월요일, 2=화요일, ..., 7=일요일
범위를 벗어나면 "Invalid"를 반환하세요.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "요일을 출력합니다.",
    examples: [{ input: "getDay(1)", output: "월요일" }],
    testCases: [{ input: "", expected: "월요일\n수요일\n일요일\nInvalid\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// getDay 함수를 완성하세요
func getDay(n int) string {
    // switch문 사용
    return ""
}

// main 함수는 수정하지 마세요
func main() {
    fmt.Println(getDay(1))
    fmt.Println(getDay(3))
    fmt.Println(getDay(7))
    fmt.Println(getDay(0))
}`,
  },
  {
    id: 109,
    day: 9,
    title: "학점 계산기",
    platform: "custom",
    problemId: "109",
    url: "#",
    difficulty: "Bronze II",
    category: "조건문",
    description: "점수를 학점으로 변환하세요.",
    tags: ["switch문", "조건문"],
    hint: "switch문에서 조건식을 사용할 수 있습니다.",
    problemStatement: `점수(0-100)가 주어질 때, 학점을 반환하세요.
90-100: A
80-89: B
70-79: C
60-69: D
0-59: F
범위 밖: Invalid`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "학점을 출력합니다.",
    examples: [{ input: "getGrade(95)", output: "A" }],
    testCases: [{ input: "", expected: "A\nB\nC\nD\nF\nInvalid\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// getGrade 함수를 완성하세요
func getGrade(score int) string {
    // switch문 사용 (switch true { case score >= 90: ... })
    return ""
}

// main 함수는 수정하지 마세요
func main() {
    fmt.Println(getGrade(95))
    fmt.Println(getGrade(85))
    fmt.Println(getGrade(75))
    fmt.Println(getGrade(65))
    fmt.Println(getGrade(55))
    fmt.Println(getGrade(-1))
}`,
  },

  // ========== Day 10: 반복문 (for) ==========
  {
    id: 10,
    day: 10,
    title: "1부터 N까지 합",
    platform: "custom",
    problemId: "10",
    url: "#",
    difficulty: "Bronze V",
    category: "반복문",
    description: "1부터 N까지의 합을 구하세요.",
    tags: ["for문"],
    hint: "for i := 1; i <= n; i++ 사용",
    problemStatement: `정수 N이 주어질 때, 1부터 N까지의 합을 반환하세요.

예: sumTo(5) = 1+2+3+4+5 = 15`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "합계를 출력합니다.",
    examples: [{ input: "sumTo(5)", output: "15" }],
    testCases: [{ input: "", expected: "15\n55\n1\n0\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// sumTo 함수를 완성하세요
func sumTo(n int) int {
    // for문으로 1부터 n까지 합계
    return 0
}

// main 함수는 수정하지 마세요
func main() {
    fmt.Println(sumTo(5))
    fmt.Println(sumTo(10))
    fmt.Println(sumTo(1))
    fmt.Println(sumTo(0))
}`,
  },
  {
    id: 110,
    day: 10,
    title: "구구단 N단",
    platform: "custom",
    problemId: "110",
    url: "#",
    difficulty: "Bronze III",
    category: "반복문",
    description: "N단 구구단을 문자열로 반환하세요.",
    tags: ["for문", "문자열"],
    hint: "fmt.Sprintf로 문자열을 만들고 누적하세요.",
    problemStatement: `정수 N이 주어질 때, N단 구구단을 문자열로 반환하세요.
각 줄은 "N * i = 결과" 형식입니다.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "구구단을 출력합니다.",
    examples: [{ input: "gugudan(2)", output: "2 * 1 = 2\\n2 * 2 = 4\\n..." }],
    testCases: [{ input: "", expected: "2 * 1 = 2\n2 * 2 = 4\n2 * 3 = 6\n2 * 4 = 8\n2 * 5 = 10\n2 * 6 = 12\n2 * 7 = 14\n2 * 8 = 16\n2 * 9 = 18\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// gugudan 함수를 완성하세요
func gugudan(n int) string {
    result := ""
    // for문으로 1~9까지 반복
    // fmt.Sprintf로 문자열 만들기
    return result
}

// main 함수는 수정하지 마세요
func main() {
    fmt.Print(gugudan(2))
}`,
  },

  // ========== Day 11: 반복문 (while 스타일) ==========
  {
    id: 11,
    day: 11,
    title: "카운트다운",
    platform: "custom",
    problemId: "11",
    url: "#",
    difficulty: "Bronze V",
    category: "반복문",
    description: "N부터 1까지 카운트다운하세요.",
    tags: ["for문", "while"],
    hint: "for n > 0 { ... n-- }",
    problemStatement: `정수 N이 주어질 때, N부터 1까지 카운트다운한 문자열을 반환하세요.
각 숫자는 공백으로 구분합니다.

예: countdown(5) → "5 4 3 2 1"`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "카운트다운 문자열을 출력합니다.",
    examples: [{ input: "countdown(5)", output: "5 4 3 2 1" }],
    testCases: [{ input: "", expected: "5 4 3 2 1\n3 2 1\n1\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// countdown 함수를 완성하세요
func countdown(n int) string {
    result := ""
    // for문을 while처럼 사용: for n > 0 { ... }
    return result
}

// main 함수는 수정하지 마세요
func main() {
    fmt.Println(countdown(5))
    fmt.Println(countdown(3))
    fmt.Println(countdown(1))
}`,
  },
  {
    id: 111,
    day: 11,
    title: "소수 판별",
    platform: "custom",
    problemId: "111",
    url: "#",
    difficulty: "Bronze I",
    category: "반복문",
    description: "숫자가 소수인지 판별하세요.",
    tags: ["소수", "반복문"],
    hint: "2부터 sqrt(n)까지 나눠보세요.",
    problemStatement: `정수가 주어질 때, 소수이면 true, 아니면 false를 반환하세요.

소수: 1과 자기 자신만으로 나누어지는 1보다 큰 자연수`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "소수 여부를 출력합니다.",
    examples: [{ input: "isPrime(7)", output: "true" }],
    testCases: [{ input: "", expected: "false\ntrue\ntrue\nfalse\ntrue\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// isPrime 함수를 완성하세요
func isPrime(n int) bool {
    // 2부터 sqrt(n)까지 나눠서 확인
    return false
}

// main 함수는 수정하지 마세요
func main() {
    fmt.Println(isPrime(1))
    fmt.Println(isPrime(2))
    fmt.Println(isPrime(7))
    fmt.Println(isPrime(10))
    fmt.Println(isPrime(17))
}`,
  },

  // ========== Day 12: break, continue ==========
  {
    id: 12,
    day: 12,
    title: "첫 번째 음수 찾기",
    platform: "custom",
    problemId: "12",
    url: "#",
    difficulty: "Bronze IV",
    category: "반복문",
    description: "슬라이스에서 첫 번째 음수의 인덱스를 찾으세요.",
    tags: ["break", "반복문"],
    hint: "음수를 찾으면 break로 루프 탈출",
    problemStatement: `정수 슬라이스가 주어질 때, 첫 번째 음수의 인덱스를 반환하세요.
음수가 없으면 -1을 반환하세요.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "첫 번째 음수의 인덱스를 출력합니다.",
    examples: [{ input: "findNegative([]int{1, 2, -3, 4})", output: "2" }],
    testCases: [{ input: "", expected: "2\n0\n-1\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// findNegative 함수를 완성하세요
func findNegative(nums []int) int {
    // for range로 순회하면서 음수 찾기
    // 찾으면 break
    return -1
}

// main 함수는 수정하지 마세요
func main() {
    fmt.Println(findNegative([]int{1, 2, -3, 4}))
    fmt.Println(findNegative([]int{-1, 2, 3}))
    fmt.Println(findNegative([]int{1, 2, 3}))
}`,
  },
  {
    id: 112,
    day: 12,
    title: "홀수만 합하기",
    platform: "custom",
    problemId: "112",
    url: "#",
    difficulty: "Bronze III",
    category: "반복문",
    description: "슬라이스에서 홀수만 합하세요.",
    tags: ["continue", "반복문"],
    hint: "짝수면 continue로 건너뛰기",
    problemStatement: `정수 슬라이스가 주어질 때, 홀수만 합한 값을 반환하세요.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "홀수의 합을 출력합니다.",
    examples: [{ input: "sumOdds([]int{1, 2, 3, 4, 5})", output: "9" }],
    testCases: [{ input: "", expected: "9\n0\n25\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// sumOdds 함수를 완성하세요
func sumOdds(nums []int) int {
    sum := 0
    // 짝수면 continue로 건너뛰기
    return sum
}

// main 함수는 수정하지 마세요
func main() {
    fmt.Println(sumOdds([]int{1, 2, 3, 4, 5}))
    fmt.Println(sumOdds([]int{2, 4, 6}))
    fmt.Println(sumOdds([]int{1, 3, 5, 7, 9}))
}`,
  },

  // ========== Day 13: 함수 기초 ==========
  {
    id: 13,
    day: 13,
    title: "절댓값 함수",
    platform: "custom",
    problemId: "13",
    url: "#",
    difficulty: "Bronze V",
    category: "함수",
    description: "정수의 절댓값을 반환하세요.",
    tags: ["함수", "조건문"],
    hint: "음수면 -n 반환",
    problemStatement: `정수가 주어질 때, 그 절댓값을 반환하는 함수를 완성하세요.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "절댓값을 출력합니다.",
    examples: [{ input: "abs(-5)", output: "5" }],
    testCases: [{ input: "", expected: "5\n3\n0\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// abs 함수를 완성하세요
func abs(n int) int {
    // 음수면 부호 바꾸기
    return 0
}

// main 함수는 수정하지 마세요
func main() {
    fmt.Println(abs(-5))
    fmt.Println(abs(3))
    fmt.Println(abs(0))
}`,
  },
  {
    id: 113,
    day: 13,
    title: "팩토리얼",
    platform: "custom",
    problemId: "113",
    url: "#",
    difficulty: "Bronze II",
    category: "함수",
    description: "N!을 계산하세요.",
    tags: ["함수", "재귀", "반복문"],
    hint: "n! = n × (n-1)!",
    problemStatement: `정수 N이 주어질 때, N! (팩토리얼)을 반환하세요.

0! = 1, 1! = 1, n! = n × (n-1)!`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "팩토리얼 값을 출력합니다.",
    examples: [{ input: "factorial(5)", output: "120" }],
    testCases: [{ input: "", expected: "1\n1\n120\n720\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// factorial 함수를 완성하세요 (재귀 또는 반복문)
func factorial(n int) int {
    // 재귀: if n <= 1 { return 1 }; return n * factorial(n-1)
    return 0
}

// main 함수는 수정하지 마세요
func main() {
    fmt.Println(factorial(0))
    fmt.Println(factorial(1))
    fmt.Println(factorial(5))
    fmt.Println(factorial(6))
}`,
  },

  // ========== Day 14: 다중 반환값 ==========
  {
    id: 14,
    day: 14,
    title: "최솟값과 최댓값",
    platform: "custom",
    problemId: "14",
    url: "#",
    difficulty: "Bronze IV",
    category: "함수",
    description: "슬라이스의 최솟값과 최댓값을 반환하세요.",
    tags: ["함수", "다중반환"],
    hint: "return min, max",
    problemStatement: `정수 슬라이스가 주어질 때, 최솟값과 최댓값을 함께 반환하세요.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "최솟값과 최댓값을 출력합니다.",
    examples: [{ input: "minMax([]int{3, 1, 4, 1, 5})", output: "1 5" }],
    testCases: [{ input: "", expected: "1 5\n-3 7\n5 5\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// minMax 함수를 완성하세요 - 두 개의 값을 반환
func minMax(nums []int) (int, int) {
    // 슬라이스를 순회하며 min, max 찾기
    return 0, 0
}

// main 함수는 수정하지 마세요
func main() {
    min1, max1 := minMax([]int{3, 1, 4, 1, 5})
    fmt.Println(min1, max1)
    min2, max2 := minMax([]int{-3, 0, 7, 2})
    fmt.Println(min2, max2)
    min3, max3 := minMax([]int{5})
    fmt.Println(min3, max3)
}`,
  },
  {
    id: 114,
    day: 14,
    title: "나눗셈 결과와 에러",
    platform: "custom",
    problemId: "114",
    url: "#",
    difficulty: "Bronze II",
    category: "함수",
    description: "나눗셈 결과와 성공 여부를 반환하세요.",
    tags: ["함수", "다중반환", "에러"],
    hint: "0으로 나누면 false 반환",
    problemStatement: `두 정수가 주어질 때, 나눗셈 결과와 성공 여부를 반환하세요.
0으로 나누면 결과는 0, 성공은 false입니다.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "결과와 성공 여부를 출력합니다.",
    examples: [{ input: "safeDivide(10, 2)", output: "5 true" }],
    testCases: [{ input: "", expected: "5 true\n0 false\n3 true\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// safeDivide 함수를 완성하세요
func safeDivide(a, b int) (int, bool) {
    // b가 0이면 (0, false) 반환
    return 0, false
}

// main 함수는 수정하지 마세요
func main() {
    r1, ok1 := safeDivide(10, 2)
    fmt.Println(r1, ok1)
    r2, ok2 := safeDivide(5, 0)
    fmt.Println(r2, ok2)
    r3, ok3 := safeDivide(10, 3)
    fmt.Println(r3, ok3)
}`,
  },

  // ========== Day 15: 가변 인자 함수 ==========
  {
    id: 15,
    day: 15,
    title: "여러 수의 합",
    platform: "custom",
    problemId: "15",
    url: "#",
    difficulty: "Bronze IV",
    category: "함수",
    description: "여러 개의 정수를 받아 합을 반환하세요.",
    tags: ["가변인자", "함수"],
    hint: "func sum(nums ...int) int",
    problemStatement: `가변 인자를 사용하여 여러 정수의 합을 반환하는 함수를 완성하세요.

Go에서 ...을 사용하면 가변 인자를 받을 수 있습니다.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "합계를 출력합니다.",
    examples: [{ input: "sum(1, 2, 3)", output: "6" }],
    testCases: [{ input: "", expected: "6\n15\n0\n5\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// sum 함수를 완성하세요 - 가변 인자 사용
func sum(nums ...int) int {
    // nums는 []int 슬라이스처럼 사용
    return 0
}

// main 함수는 수정하지 마세요
func main() {
    fmt.Println(sum(1, 2, 3))
    fmt.Println(sum(1, 2, 3, 4, 5))
    fmt.Println(sum())
    fmt.Println(sum(5))
}`,
  },
  {
    id: 115,
    day: 15,
    title: "여러 수의 평균",
    platform: "custom",
    problemId: "115",
    url: "#",
    difficulty: "Bronze II",
    category: "함수",
    description: "여러 정수의 평균을 반환하세요.",
    tags: ["가변인자", "함수"],
    hint: "합을 구한 뒤 개수로 나누기",
    problemStatement: `가변 인자를 사용하여 여러 정수의 평균을 반환하세요.
인자가 없으면 0.0을 반환하세요.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "평균을 출력합니다.",
    examples: [{ input: "average(1, 2, 3)", output: "2.00" }],
    testCases: [{ input: "", expected: "2.00\n3.00\n0.00\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// average 함수를 완성하세요
func average(nums ...int) float64 {
    // 인자가 없으면 0.0 반환
    // 합을 구한 뒤 float64로 변환하여 나누기
    return 0.0
}

// main 함수는 수정하지 마세요
func main() {
    fmt.Printf("%.2f\\n", average(1, 2, 3))
    fmt.Printf("%.2f\\n", average(1, 2, 3, 4, 5))
    fmt.Printf("%.2f\\n", average())
}`,
  },

  // ========== Day 16: 클로저 ==========
  {
    id: 16,
    day: 16,
    title: "카운터 만들기",
    platform: "custom",
    problemId: "16",
    url: "#",
    difficulty: "Bronze III",
    category: "함수",
    description: "호출할 때마다 1씩 증가하는 카운터를 만드세요.",
    tags: ["클로저", "함수"],
    hint: "함수 안에서 함수를 반환하고, 외부 변수를 캡처",
    problemStatement: `클로저를 사용하여 호출할 때마다 1씩 증가하는 카운터 함수를 반환하세요.

예:
counter := makeCounter()
counter() → 1
counter() → 2
counter() → 3`,
    inputDescription: "없음",
    outputDescription: "카운터 값을 출력합니다.",
    examples: [{ input: "counter()", output: "1, 2, 3..." }],
    testCases: [{ input: "", expected: "1\n2\n3\n1\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// makeCounter 함수를 완성하세요 - 함수를 반환
func makeCounter() func() int {
    count := 0
    // 클로저: count를 캡처하는 함수 반환
    return func() int {
        return 0
    }
}

// main 함수는 수정하지 마세요
func main() {
    counter1 := makeCounter()
    fmt.Println(counter1())
    fmt.Println(counter1())
    fmt.Println(counter1())

    counter2 := makeCounter()
    fmt.Println(counter2())
}`,
  },
  {
    id: 116,
    day: 16,
    title: "누적기 만들기",
    platform: "custom",
    problemId: "116",
    url: "#",
    difficulty: "Bronze I",
    category: "함수",
    description: "값을 누적하는 함수를 만드세요.",
    tags: ["클로저", "함수"],
    hint: "sum 변수를 캡처하여 누적",
    problemStatement: `클로저를 사용하여 값을 누적하는 함수를 반환하세요.

예:
acc := makeAccumulator()
acc(5)  → 5
acc(3)  → 8
acc(2)  → 10`,
    inputDescription: "없음",
    outputDescription: "누적 값을 출력합니다.",
    examples: [{ input: "acc(5); acc(3)", output: "5, 8" }],
    testCases: [{ input: "", expected: "5\n8\n10\n100\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// makeAccumulator 함수를 완성하세요
func makeAccumulator() func(int) int {
    sum := 0
    return func(n int) int {
        // sum에 n을 더하고 반환
        return 0
    }
}

// main 함수는 수정하지 마세요
func main() {
    acc1 := makeAccumulator()
    fmt.Println(acc1(5))
    fmt.Println(acc1(3))
    fmt.Println(acc1(2))

    acc2 := makeAccumulator()
    fmt.Println(acc2(100))
}`,
  },

  // ========== Day 17: defer ==========
  {
    id: 17,
    day: 17,
    title: "defer 순서",
    platform: "custom",
    problemId: "17",
    url: "#",
    difficulty: "Bronze III",
    category: "함수",
    description: "defer의 실행 순서를 이해하세요.",
    tags: ["defer", "함수"],
    hint: "defer는 LIFO(후입선출) 순서로 실행",
    problemStatement: `defer는 함수가 끝날 때 역순으로 실행됩니다.
주어진 코드에서 출력 순서를 예측하고, 올바른 순서로 출력되도록 함수를 완성하세요.

출력 순서: "start", "middle", "end", "third", "second", "first"`,
    inputDescription: "없음",
    outputDescription: "올바른 순서로 출력합니다.",
    examples: [{ input: "", output: "start\\nmiddle\\nend\\nthird\\nsecond\\nfirst" }],
    testCases: [{ input: "", expected: "start\nmiddle\nend\nthird\nsecond\nfirst\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// deferOrder 함수를 완성하세요
func deferOrder() {
    // defer를 사용해서 "first", "second", "third"가 역순으로 출력되게
    // 먼저 "start", "middle", "end"를 출력
    fmt.Println("start")

    // 여기에 defer 추가

    fmt.Println("middle")

    // 여기에 defer 추가

    fmt.Println("end")

    // 여기에 defer 추가
}

// main 함수는 수정하지 마세요
func main() {
    deferOrder()
}`,
  },
  {
    id: 117,
    day: 17,
    title: "피보나치 수열",
    platform: "custom",
    problemId: "117",
    url: "#",
    difficulty: "Silver V",
    category: "함수",
    description: "N번째 피보나치 수를 반환하세요.",
    tags: ["재귀", "함수", "DP"],
    hint: "F(n) = F(n-1) + F(n-2)",
    problemStatement: `피보나치 수열의 N번째 값을 반환하세요.

F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2)

효율적인 방법(반복문 또는 메모이제이션)을 사용하세요.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "피보나치 수를 출력합니다.",
    examples: [{ input: "fib(10)", output: "55" }],
    testCases: [{ input: "", expected: "0\n1\n55\n6765\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// fib 함수를 완성하세요 (반복문 권장)
func fib(n int) int {
    // 반복문으로 구현 (재귀는 느림)
    return 0
}

// main 함수는 수정하지 마세요
func main() {
    fmt.Println(fib(0))
    fmt.Println(fib(1))
    fmt.Println(fib(10))
    fmt.Println(fib(20))
}`,
  },

  // ========== Day 18: 배열 ==========
  {
    id: 18,
    day: 18,
    title: "배열 합계",
    platform: "custom",
    problemId: "18",
    url: "#",
    difficulty: "Bronze V",
    category: "배열",
    description: "배열의 모든 요소 합을 구하세요.",
    tags: ["배열", "반복문"],
    hint: "for range로 순회",
    problemStatement: `정수 배열이 주어질 때, 모든 요소의 합을 반환하세요.

Go의 배열은 크기가 고정됩니다.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "배열 합계를 출력합니다.",
    examples: [{ input: "sumArray([5]int{1,2,3,4,5})", output: "15" }],
    testCases: [{ input: "", expected: "15\n0\n6\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// sumArray 함수를 완성하세요
func sumArray(arr [5]int) int {
    sum := 0
    // for range로 순회
    return sum
}

// main 함수는 수정하지 마세요
func main() {
    fmt.Println(sumArray([5]int{1, 2, 3, 4, 5}))
    fmt.Println(sumArray([5]int{0, 0, 0, 0, 0}))
    fmt.Println(sumArray([5]int{1, 1, 1, 1, 2}))
}`,
  },
  {
    id: 118,
    day: 18,
    title: "배열 역순 복사",
    platform: "custom",
    problemId: "118",
    url: "#",
    difficulty: "Bronze III",
    category: "배열",
    description: "배열을 역순으로 복사하세요.",
    tags: ["배열"],
    hint: "새 배열에 역순으로 복사",
    problemStatement: `정수 배열이 주어질 때, 역순으로 된 새 배열을 반환하세요.

원본 배열은 변경하지 마세요.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "역순 배열을 출력합니다.",
    examples: [{ input: "reverseArray([5]int{1,2,3,4,5})", output: "[5 4 3 2 1]" }],
    testCases: [{ input: "", expected: "[5 4 3 2 1]\n[1 1 1 1 1]\n[3 2 1 0 0]\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// reverseArray 함수를 완성하세요
func reverseArray(arr [5]int) [5]int {
    var result [5]int
    // arr을 역순으로 result에 복사
    return result
}

// main 함수는 수정하지 마세요
func main() {
    fmt.Println(reverseArray([5]int{1, 2, 3, 4, 5}))
    fmt.Println(reverseArray([5]int{1, 1, 1, 1, 1}))
    fmt.Println(reverseArray([5]int{0, 0, 1, 2, 3}))
}`,
  },

  // ========== Day 19: 슬라이스 기초 ==========
  {
    id: 19,
    day: 19,
    title: "슬라이스 합계",
    platform: "custom",
    problemId: "19",
    url: "#",
    difficulty: "Bronze V",
    category: "슬라이스",
    description: "슬라이스의 모든 요소 합을 구하세요.",
    tags: ["슬라이스", "반복문"],
    hint: "배열과 동일하게 for range 사용",
    problemStatement: `정수 슬라이스가 주어질 때, 모든 요소의 합을 반환하세요.

슬라이스는 배열과 달리 크기가 동적입니다.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "슬라이스 합계를 출력합니다.",
    examples: [{ input: "sumSlice([]int{1,2,3})", output: "6" }],
    testCases: [{ input: "", expected: "6\n0\n100\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// sumSlice 함수를 완성하세요
func sumSlice(nums []int) int {
    sum := 0
    // for range로 순회
    return sum
}

// main 함수는 수정하지 마세요
func main() {
    fmt.Println(sumSlice([]int{1, 2, 3}))
    fmt.Println(sumSlice([]int{}))
    fmt.Println(sumSlice([]int{10, 20, 30, 40}))
}`,
  },
  {
    id: 119,
    day: 19,
    title: "슬라이스 필터링",
    platform: "custom",
    problemId: "119",
    url: "#",
    difficulty: "Bronze II",
    category: "슬라이스",
    description: "조건에 맞는 요소만 필터링하세요.",
    tags: ["슬라이스", "append"],
    hint: "append로 새 슬라이스에 추가",
    problemStatement: `정수 슬라이스가 주어질 때, 양수만 포함한 새 슬라이스를 반환하세요.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "양수만 포함한 슬라이스를 출력합니다.",
    examples: [{ input: "filterPositive([]int{-1, 2, -3, 4})", output: "[2 4]" }],
    testCases: [{ input: "", expected: "[2 4]\n[1 2 3]\n[]\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// filterPositive 함수를 완성하세요
func filterPositive(nums []int) []int {
    result := []int{}
    // 양수면 append
    return result
}

// main 함수는 수정하지 마세요
func main() {
    fmt.Println(filterPositive([]int{-1, 2, -3, 4}))
    fmt.Println(filterPositive([]int{1, 2, 3}))
    fmt.Println(filterPositive([]int{-1, -2, -3}))
}`,
  },

  // ========== Day 20: 슬라이스 조작 ==========
  {
    id: 20,
    day: 20,
    title: "슬라이스 추가",
    platform: "custom",
    problemId: "20",
    url: "#",
    difficulty: "Bronze IV",
    category: "슬라이스",
    description: "슬라이스 끝에 요소를 추가하세요.",
    tags: ["슬라이스", "append"],
    hint: "append(slice, element)",
    problemStatement: `슬라이스와 추가할 요소가 주어질 때, 요소를 끝에 추가한 새 슬라이스를 반환하세요.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "요소가 추가된 슬라이스를 출력합니다.",
    examples: [{ input: "appendElement([]int{1,2,3}, 4)", output: "[1 2 3 4]" }],
    testCases: [{ input: "", expected: "[1 2 3 4]\n[5]\n[1 2 3 4 5 6]\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// appendElement 함수를 완성하세요
func appendElement(nums []int, n int) []int {
    // append 사용
    return nil
}

// main 함수는 수정하지 마세요
func main() {
    fmt.Println(appendElement([]int{1, 2, 3}, 4))
    fmt.Println(appendElement([]int{}, 5))
    fmt.Println(appendElement([]int{1, 2, 3, 4, 5}, 6))
}`,
  },
  {
    id: 120,
    day: 20,
    title: "중복 제거",
    platform: "custom",
    problemId: "120",
    url: "#",
    difficulty: "Silver V",
    category: "슬라이스",
    description: "슬라이스에서 중복을 제거하세요.",
    tags: ["슬라이스", "맵"],
    hint: "맵을 사용해 중복 체크",
    problemStatement: `정수 슬라이스가 주어질 때, 중복을 제거한 새 슬라이스를 반환하세요.
순서는 첫 등장 순서를 유지하세요.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "중복이 제거된 슬라이스를 출력합니다.",
    examples: [{ input: "removeDuplicates([]int{1,2,2,3,1})", output: "[1 2 3]" }],
    testCases: [{ input: "", expected: "[1 2 3]\n[1]\n[3 1 2]\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// removeDuplicates 함수를 완성하세요
func removeDuplicates(nums []int) []int {
    seen := make(map[int]bool)
    result := []int{}
    // 이미 본 숫자가 아니면 추가
    return result
}

// main 함수는 수정하지 마세요
func main() {
    fmt.Println(removeDuplicates([]int{1, 2, 2, 3, 1}))
    fmt.Println(removeDuplicates([]int{1, 1, 1}))
    fmt.Println(removeDuplicates([]int{3, 1, 2, 1, 3}))
}`,
  },

  // ========== Day 21: 맵 기초 ==========
  {
    id: 21,
    day: 21,
    title: "맵 생성과 조회",
    platform: "custom",
    problemId: "21",
    url: "#",
    difficulty: "Bronze V",
    category: "맵",
    description: "맵에서 값을 조회하세요.",
    tags: ["맵", "map"],
    hint: "value, ok := m[key]",
    problemStatement: `문자열-정수 맵과 키가 주어질 때, 해당 키의 값을 반환하세요.
키가 없으면 -1을 반환하세요.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "조회된 값을 출력합니다.",
    examples: [{ input: 'getValue(map, "a")', output: "1" }],
    testCases: [{ input: "", expected: "1\n2\n-1\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// getValue 함수를 완성하세요
func getValue(m map[string]int, key string) int {
    // value, ok := m[key] 패턴 사용
    return -1
}

// main 함수는 수정하지 마세요
func main() {
    m := map[string]int{"a": 1, "b": 2, "c": 3}
    fmt.Println(getValue(m, "a"))
    fmt.Println(getValue(m, "b"))
    fmt.Println(getValue(m, "d"))
}`,
  },
  {
    id: 121,
    day: 21,
    title: "단어 빈도 세기",
    platform: "custom",
    problemId: "121",
    url: "#",
    difficulty: "Silver V",
    category: "맵",
    description: "문자열 슬라이스에서 각 단어의 빈도를 세세요.",
    tags: ["맵", "카운팅"],
    hint: "m[word]++",
    problemStatement: `문자열 슬라이스가 주어질 때, 각 단어의 등장 횟수를 맵으로 반환하세요.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "단어 빈도 맵을 출력합니다.",
    examples: [{ input: 'wordCount([]string{"a","b","a"})', output: "a:2 b:1" }],
    testCases: [{ input: "", expected: "2\n1\n3\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// wordCount 함수를 완성하세요
func wordCount(words []string) map[string]int {
    counts := make(map[string]int)
    // 각 단어의 빈도 세기
    return counts
}

// main 함수는 수정하지 마세요
func main() {
    counts := wordCount([]string{"apple", "banana", "apple", "cherry", "banana", "apple"})
    fmt.Println(counts["apple"])
    fmt.Println(counts["cherry"])
    fmt.Println(counts["banana"] + counts["cherry"] + counts["grape"])
}`,
  },

  // ========== Day 22: 맵 조작 ==========
  {
    id: 22,
    day: 22,
    title: "맵 키 존재 확인",
    platform: "custom",
    problemId: "22",
    url: "#",
    difficulty: "Bronze IV",
    category: "맵",
    description: "맵에 키가 존재하는지 확인하세요.",
    tags: ["맵"],
    hint: "_, ok := m[key]",
    problemStatement: `맵과 키가 주어질 때, 키가 존재하면 true, 없으면 false를 반환하세요.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "존재 여부를 출력합니다.",
    examples: [{ input: 'hasKey(map, "a")', output: "true" }],
    testCases: [{ input: "", expected: "true\nfalse\ntrue\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// hasKey 함수를 완성하세요
func hasKey(m map[string]int, key string) bool {
    // _, ok := m[key] 패턴 사용
    return false
}

// main 함수는 수정하지 마세요
func main() {
    m := map[string]int{"x": 10, "y": 20}
    fmt.Println(hasKey(m, "x"))
    fmt.Println(hasKey(m, "z"))
    fmt.Println(hasKey(m, "y"))
}`,
  },
  {
    id: 122,
    day: 22,
    title: "두 맵 병합",
    platform: "custom",
    problemId: "122",
    url: "#",
    difficulty: "Silver IV",
    category: "맵",
    description: "두 맵을 하나로 병합하세요.",
    tags: ["맵"],
    hint: "두 번째 맵의 값이 우선",
    problemStatement: `두 개의 맵이 주어질 때, 하나로 병합한 맵을 반환하세요.
같은 키가 있으면 두 번째 맵의 값이 우선합니다.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "병합된 맵의 값들을 출력합니다.",
    examples: [{ input: "mergeMaps(m1, m2)", output: "merged map" }],
    testCases: [{ input: "", expected: "2\n20\n30\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// mergeMaps 함수를 완성하세요
func mergeMaps(m1, m2 map[string]int) map[string]int {
    result := make(map[string]int)
    // m1의 모든 키-값을 복사
    // m2의 모든 키-값을 복사 (덮어쓰기)
    return result
}

// main 함수는 수정하지 마세요
func main() {
    m1 := map[string]int{"a": 1, "b": 2}
    m2 := map[string]int{"b": 20, "c": 30}
    merged := mergeMaps(m1, m2)
    fmt.Println(merged["a"] + merged["b"]/10)  // 1 + 2 = 3? No, b=20, so 1+2=2
    fmt.Println(merged["b"])
    fmt.Println(merged["c"])
}`,
  },

  // ========== Day 23: 구조체 기초 ==========
  {
    id: 23,
    day: 23,
    title: "구조체 생성",
    platform: "custom",
    problemId: "23",
    url: "#",
    difficulty: "Bronze IV",
    category: "구조체",
    description: "Person 구조체를 생성하고 정보를 출력하세요.",
    tags: ["구조체", "struct"],
    hint: "Person{Name: ..., Age: ...}",
    problemStatement: `Person 구조체(Name string, Age int)가 주어질 때,
"이름: {Name}, 나이: {Age}" 형식의 문자열을 반환하세요.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "포맷된 문자열을 출력합니다.",
    examples: [{ input: 'formatPerson(Person{"Kim", 25})', output: "이름: Kim, 나이: 25" }],
    testCases: [{ input: "", expected: "이름: Kim, 나이: 25\n이름: Lee, 나이: 30\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// Person 구조체
type Person struct {
    Name string
    Age  int
}

// formatPerson 함수를 완성하세요
func formatPerson(p Person) string {
    // fmt.Sprintf 사용
    return ""
}

// main 함수는 수정하지 마세요
func main() {
    p1 := Person{Name: "Kim", Age: 25}
    p2 := Person{Name: "Lee", Age: 30}
    fmt.Println(formatPerson(p1))
    fmt.Println(formatPerson(p2))
}`,
  },
  {
    id: 123,
    day: 23,
    title: "구조체 슬라이스 정렬",
    platform: "custom",
    problemId: "123",
    url: "#",
    difficulty: "Silver III",
    category: "구조체",
    description: "구조체 슬라이스를 나이순으로 정렬하세요.",
    tags: ["구조체", "정렬"],
    hint: "sort.Slice 사용",
    problemStatement: `Person 슬라이스가 주어질 때, 나이(Age) 오름차순으로 정렬하여 반환하세요.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "정렬된 이름들을 출력합니다.",
    examples: [{ input: "sortByAge(people)", output: "[sorted names]" }],
    testCases: [{ input: "", expected: "Charlie\nAlice\nBob\n", isHidden: false }],
    initialCode: `package main

import (
    "fmt"
    "sort"
)

type Person struct {
    Name string
    Age  int
}

// sortByAge 함수를 완성하세요
func sortByAge(people []Person) []Person {
    // sort.Slice 사용
    // sort.Slice(people, func(i, j int) bool { ... })
    return people
}

// main 함수는 수정하지 마세요
func main() {
    people := []Person{
        {"Alice", 30},
        {"Bob", 35},
        {"Charlie", 25},
    }
    sorted := sortByAge(people)
    for _, p := range sorted {
        fmt.Println(p.Name)
    }
}`,
  },

  // ========== Day 24: 구조체 메서드 ==========
  {
    id: 24,
    day: 24,
    title: "직사각형 넓이",
    platform: "custom",
    problemId: "24",
    url: "#",
    difficulty: "Bronze III",
    category: "구조체",
    description: "직사각형의 넓이를 계산하는 메서드를 만드세요.",
    tags: ["구조체", "메서드"],
    hint: "func (r Rectangle) Area() int",
    problemStatement: `Rectangle 구조체(Width, Height int)에 넓이를 반환하는 Area() 메서드를 추가하세요.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "넓이를 출력합니다.",
    examples: [{ input: "Rectangle{3, 4}.Area()", output: "12" }],
    testCases: [{ input: "", expected: "12\n100\n7\n", isHidden: false }],
    initialCode: `package main

import "fmt"

type Rectangle struct {
    Width  int
    Height int
}

// Area 메서드를 완성하세요
func (r Rectangle) Area() int {
    // 넓이 = 가로 × 세로
    return 0
}

// main 함수는 수정하지 마세요
func main() {
    r1 := Rectangle{Width: 3, Height: 4}
    r2 := Rectangle{Width: 10, Height: 10}
    r3 := Rectangle{Width: 1, Height: 7}
    fmt.Println(r1.Area())
    fmt.Println(r2.Area())
    fmt.Println(r3.Area())
}`,
  },
  {
    id: 124,
    day: 24,
    title: "은행 계좌",
    platform: "custom",
    problemId: "124",
    url: "#",
    difficulty: "Silver IV",
    category: "구조체",
    description: "은행 계좌 구조체에 입금/출금 메서드를 추가하세요.",
    tags: ["구조체", "메서드", "포인터"],
    hint: "포인터 리시버 사용: func (a *Account)",
    problemStatement: `Account 구조체(Balance int)에 다음 메서드를 추가하세요:
- Deposit(amount int): 입금 (잔액 증가)
- Withdraw(amount int) bool: 출금 (잔액 부족 시 false 반환)`,
    inputDescription: "없음",
    outputDescription: "거래 결과를 출력합니다.",
    examples: [{ input: "account.Deposit(100)", output: "잔액 증가" }],
    testCases: [{ input: "", expected: "100\n150\ntrue\n50\nfalse\n50\n", isHidden: false }],
    initialCode: `package main

import "fmt"

type Account struct {
    Balance int
}

// Deposit 메서드를 완성하세요 (포인터 리시버)
func (a *Account) Deposit(amount int) {
    // 잔액에 amount 추가
}

// Withdraw 메서드를 완성하세요 (포인터 리시버)
func (a *Account) Withdraw(amount int) bool {
    // 잔액 부족하면 false, 성공하면 true
    return false
}

// main 함수는 수정하지 마세요
func main() {
    acc := &Account{Balance: 0}
    acc.Deposit(100)
    fmt.Println(acc.Balance)
    acc.Deposit(50)
    fmt.Println(acc.Balance)
    fmt.Println(acc.Withdraw(100))
    fmt.Println(acc.Balance)
    fmt.Println(acc.Withdraw(100))
    fmt.Println(acc.Balance)
}`,
  },

  // ========== Day 25: 구조체 임베딩 ==========
  {
    id: 25,
    day: 25,
    title: "구조체 임베딩 기초",
    platform: "custom",
    problemId: "25",
    url: "#",
    difficulty: "Bronze II",
    category: "구조체",
    description: "구조체 임베딩을 사용하세요.",
    tags: ["구조체", "임베딩"],
    hint: "임베딩된 필드는 직접 접근 가능",
    problemStatement: `Employee 구조체가 Person을 임베딩합니다.
Employee의 정보를 포맷하는 함수를 완성하세요.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "직원 정보를 출력합니다.",
    examples: [{ input: "formatEmployee(emp)", output: "Kim (25) - Developer" }],
    testCases: [{ input: "", expected: "Kim (25) - Developer\nLee (30) - Manager\n", isHidden: false }],
    initialCode: `package main

import "fmt"

type Person struct {
    Name string
    Age  int
}

type Employee struct {
    Person  // 임베딩
    Title string
}

// formatEmployee 함수를 완성하세요
func formatEmployee(e Employee) string {
    // e.Name, e.Age, e.Title 접근 가능 (임베딩 덕분)
    return ""
}

// main 함수는 수정하지 마세요
func main() {
    e1 := Employee{Person: Person{Name: "Kim", Age: 25}, Title: "Developer"}
    e2 := Employee{Person: Person{Name: "Lee", Age: 30}, Title: "Manager"}
    fmt.Println(formatEmployee(e1))
    fmt.Println(formatEmployee(e2))
}`,
  },
  {
    id: 125,
    day: 25,
    title: "도형 계층 구조",
    platform: "custom",
    problemId: "125",
    url: "#",
    difficulty: "Silver III",
    category: "구조체",
    description: "임베딩을 사용한 도형 계층 구조를 만드세요.",
    tags: ["구조체", "임베딩", "메서드"],
    hint: "Point를 임베딩하고 메서드 오버라이드",
    problemStatement: `Point 구조체를 임베딩한 Circle 구조체를 만들고,
원의 정보를 문자열로 반환하는 메서드를 추가하세요.`,
    inputDescription: "없음",
    outputDescription: "도형 정보를 출력합니다.",
    examples: [{ input: "circle.Info()", output: "Circle at (0,0) with radius 5" }],
    testCases: [{ input: "", expected: "Circle at (0, 0) with radius 5\nCircle at (3, 4) with radius 10\n", isHidden: false }],
    initialCode: `package main

import "fmt"

type Point struct {
    X, Y int
}

type Circle struct {
    Point  // 임베딩
    Radius int
}

// Circle의 Info 메서드를 완성하세요
func (c Circle) Info() string {
    // "Circle at (X, Y) with radius R" 형식
    return ""
}

// main 함수는 수정하지 마세요
func main() {
    c1 := Circle{Point: Point{X: 0, Y: 0}, Radius: 5}
    c2 := Circle{Point: Point{X: 3, Y: 4}, Radius: 10}
    fmt.Println(c1.Info())
    fmt.Println(c2.Info())
}`,
  },

  // ========== Day 26: 포인터 기초 ==========
  {
    id: 26,
    day: 26,
    title: "값 교환",
    platform: "custom",
    problemId: "26",
    url: "#",
    difficulty: "Bronze IV",
    category: "포인터",
    description: "포인터를 사용해 두 값을 교환하세요.",
    tags: ["포인터"],
    hint: "*a, *b = *b, *a",
    problemStatement: `포인터를 사용하여 두 정수의 값을 교환하는 함수를 완성하세요.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "교환된 값을 출력합니다.",
    examples: [{ input: "swap(&a, &b)", output: "a와 b가 교환됨" }],
    testCases: [{ input: "", expected: "20 10\n200 100\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// swap 함수를 완성하세요
func swap(a, b *int) {
    // 포인터를 통해 값 교환
}

// main 함수는 수정하지 마세요
func main() {
    x, y := 10, 20
    swap(&x, &y)
    fmt.Println(x, y)

    p, q := 100, 200
    swap(&p, &q)
    fmt.Println(p, q)
}`,
  },
  {
    id: 126,
    day: 26,
    title: "슬라이스 요소 수정",
    platform: "custom",
    problemId: "126",
    url: "#",
    difficulty: "Bronze II",
    category: "포인터",
    description: "포인터로 슬라이스 요소를 수정하세요.",
    tags: ["포인터", "슬라이스"],
    hint: "슬라이스 자체는 참조 타입이지만, 요소 수정 학습",
    problemStatement: `슬라이스의 특정 인덱스 요소를 새 값으로 수정하는 함수를 완성하세요.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "수정된 슬라이스를 출력합니다.",
    examples: [{ input: "modify(nums, 0, 100)", output: "[100 2 3]" }],
    testCases: [{ input: "", expected: "[100 2 3]\n[1 200 3]\n[1 2 300]\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// modify 함수를 완성하세요
func modify(nums []int, index, value int) {
    // 인덱스 범위 확인 후 수정
}

// main 함수는 수정하지 마세요
func main() {
    nums1 := []int{1, 2, 3}
    modify(nums1, 0, 100)
    fmt.Println(nums1)

    nums2 := []int{1, 2, 3}
    modify(nums2, 1, 200)
    fmt.Println(nums2)

    nums3 := []int{1, 2, 3}
    modify(nums3, 2, 300)
    fmt.Println(nums3)
}`,
  },

  // ========== Day 27: 포인터 활용 ==========
  {
    id: 27,
    day: 27,
    title: "새 구조체 생성",
    platform: "custom",
    problemId: "27",
    url: "#",
    difficulty: "Bronze III",
    category: "포인터",
    description: "구조체 포인터를 반환하는 함수를 만드세요.",
    tags: ["포인터", "구조체"],
    hint: "return &Person{...}",
    problemStatement: `Person 구조체의 포인터를 생성하여 반환하는 함수를 완성하세요.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "생성된 구조체 정보를 출력합니다.",
    examples: [{ input: 'newPerson("Kim", 25)', output: "&{Kim 25}" }],
    testCases: [{ input: "", expected: "Kim 25\nLee 30\n", isHidden: false }],
    initialCode: `package main

import "fmt"

type Person struct {
    Name string
    Age  int
}

// newPerson 함수를 완성하세요
func newPerson(name string, age int) *Person {
    // 새 Person 포인터 반환
    return nil
}

// main 함수는 수정하지 마세요
func main() {
    p1 := newPerson("Kim", 25)
    fmt.Println(p1.Name, p1.Age)
    p2 := newPerson("Lee", 30)
    fmt.Println(p2.Name, p2.Age)
}`,
  },
  {
    id: 127,
    day: 27,
    title: "링크드 리스트 노드",
    platform: "custom",
    problemId: "127",
    url: "#",
    difficulty: "Silver IV",
    category: "포인터",
    description: "간단한 링크드 리스트를 구현하세요.",
    tags: ["포인터", "자료구조"],
    hint: "Node가 다음 Node를 가리킴",
    problemStatement: `Node 구조체(Value int, Next *Node)를 사용하여
링크드 리스트의 모든 값을 더하는 함수를 완성하세요.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "모든 노드 값의 합을 출력합니다.",
    examples: [{ input: "sumList(head)", output: "6 (1+2+3)" }],
    testCases: [{ input: "", expected: "6\n15\n", isHidden: false }],
    initialCode: `package main

import "fmt"

type Node struct {
    Value int
    Next  *Node
}

// sumList 함수를 완성하세요
func sumList(head *Node) int {
    sum := 0
    // head부터 nil까지 순회하며 합계
    return sum
}

// main 함수는 수정하지 마세요
func main() {
    // 1 -> 2 -> 3 -> nil
    n3 := &Node{Value: 3, Next: nil}
    n2 := &Node{Value: 2, Next: n3}
    n1 := &Node{Value: 1, Next: n2}
    fmt.Println(sumList(n1))

    // 1 -> 2 -> 3 -> 4 -> 5 -> nil
    n5 := &Node{Value: 5, Next: nil}
    n4 := &Node{Value: 4, Next: n5}
    n3b := &Node{Value: 3, Next: n4}
    n2b := &Node{Value: 2, Next: n3b}
    n1b := &Node{Value: 1, Next: n2b}
    fmt.Println(sumList(n1b))
}`,
  },

  // ========== Day 28: 인터페이스 기초 ==========
  {
    id: 28,
    day: 28,
    title: "Stringer 인터페이스",
    platform: "custom",
    problemId: "28",
    url: "#",
    difficulty: "Bronze III",
    category: "인터페이스",
    description: "String() 메서드를 구현하세요.",
    tags: ["인터페이스", "Stringer"],
    hint: "func (p Person) String() string",
    problemStatement: `Person 구조체에 String() 메서드를 추가하여
fmt.Stringer 인터페이스를 구현하세요.

출력 형식: "Person{Name: ..., Age: ...}"`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "포맷된 문자열을 출력합니다.",
    examples: [{ input: "fmt.Println(person)", output: "Person{Name: Kim, Age: 25}" }],
    testCases: [{ input: "", expected: "Person{Name: Kim, Age: 25}\nPerson{Name: Lee, Age: 30}\n", isHidden: false }],
    initialCode: `package main

import "fmt"

type Person struct {
    Name string
    Age  int
}

// String 메서드를 완성하세요 (fmt.Stringer 인터페이스 구현)
func (p Person) String() string {
    // "Person{Name: ..., Age: ...}" 형식
    return ""
}

// main 함수는 수정하지 마세요
func main() {
    p1 := Person{Name: "Kim", Age: 25}
    p2 := Person{Name: "Lee", Age: 30}
    fmt.Println(p1)
    fmt.Println(p2)
}`,
  },
  {
    id: 128,
    day: 28,
    title: "도형 인터페이스",
    platform: "custom",
    problemId: "128",
    url: "#",
    difficulty: "Silver III",
    category: "인터페이스",
    description: "Shape 인터페이스를 구현하세요.",
    tags: ["인터페이스", "다형성"],
    hint: "Rectangle과 Circle 모두 Area() 구현",
    problemStatement: `Shape 인터페이스(Area() float64)를 정의하고,
Rectangle과 Circle이 이를 구현하도록 하세요.`,
    inputDescription: "없음",
    outputDescription: "각 도형의 넓이를 출력합니다.",
    examples: [{ input: "printArea(rect)", output: "넓이: 12.00" }],
    testCases: [{ input: "", expected: "12.00\n78.54\n100.00\n", isHidden: false }],
    initialCode: `package main

import (
    "fmt"
    "math"
)

// Shape 인터페이스
type Shape interface {
    Area() float64
}

type Rectangle struct {
    Width, Height float64
}

type Circle struct {
    Radius float64
}

// Rectangle의 Area 메서드를 완성하세요
func (r Rectangle) Area() float64 {
    return 0
}

// Circle의 Area 메서드를 완성하세요
func (c Circle) Area() float64 {
    // math.Pi 사용
    return 0
}

// printArea 함수를 완성하세요
func printArea(s Shape) {
    fmt.Printf("%.2f\\n", s.Area())
}

// main 함수는 수정하지 마세요
func main() {
    rect := Rectangle{Width: 3, Height: 4}
    circle := Circle{Radius: 5}
    square := Rectangle{Width: 10, Height: 10}

    printArea(rect)
    printArea(circle)
    printArea(square)

    _ = math.Pi // 사용하지 않으면 에러 방지
}`,
  },

  // ========== Day 29: 인터페이스 활용 ==========
  {
    id: 29,
    day: 29,
    title: "빈 인터페이스",
    platform: "custom",
    problemId: "29",
    url: "#",
    difficulty: "Bronze II",
    category: "인터페이스",
    description: "interface{}를 사용하여 다양한 타입을 처리하세요.",
    tags: ["인터페이스", "any"],
    hint: "switch v := value.(type)",
    problemStatement: `빈 인터페이스(interface{})를 받아서 타입에 따라 다른 문자열을 반환하세요.
- int: "정수: {값}"
- string: "문자열: {값}"
- bool: "불리언: {값}"
- 그 외: "알 수 없는 타입"`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "타입별 문자열을 출력합니다.",
    examples: [{ input: "describe(42)", output: "정수: 42" }],
    testCases: [{ input: "", expected: "정수: 42\n문자열: hello\n불리언: true\n알 수 없는 타입\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// describe 함수를 완성하세요
func describe(value interface{}) string {
    // switch v := value.(type) 사용
    return ""
}

// main 함수는 수정하지 마세요
func main() {
    fmt.Println(describe(42))
    fmt.Println(describe("hello"))
    fmt.Println(describe(true))
    fmt.Println(describe(3.14))
}`,
  },
  {
    id: 129,
    day: 29,
    title: "타입 단언",
    platform: "custom",
    problemId: "129",
    url: "#",
    difficulty: "Silver IV",
    category: "인터페이스",
    description: "타입 단언을 안전하게 사용하세요.",
    tags: ["인터페이스", "타입단언"],
    hint: "value, ok := i.(Type)",
    problemStatement: `interface{} 값이 string인지 확인하고,
맞으면 대문자로 변환, 아니면 "not a string"을 반환하세요.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "변환 결과를 출력합니다.",
    examples: [{ input: 'toUpperIfString("hello")', output: "HELLO" }],
    testCases: [{ input: "", expected: "HELLO\nnot a string\nWORLD\nnot a string\n", isHidden: false }],
    initialCode: `package main

import (
    "fmt"
    "strings"
)

// toUpperIfString 함수를 완성하세요
func toUpperIfString(value interface{}) string {
    // 타입 단언: str, ok := value.(string)
    return ""
}

// main 함수는 수정하지 마세요
func main() {
    fmt.Println(toUpperIfString("hello"))
    fmt.Println(toUpperIfString(123))
    fmt.Println(toUpperIfString("world"))
    fmt.Println(toUpperIfString(true))

    _ = strings.ToUpper // 사용
}`,
  },

  // ========== Day 30: 인터페이스 조합 ==========
  {
    id: 30,
    day: 30,
    title: "Reader 인터페이스",
    platform: "custom",
    problemId: "30",
    url: "#",
    difficulty: "Silver V",
    category: "인터페이스",
    description: "간단한 Reader 인터페이스를 구현하세요.",
    tags: ["인터페이스"],
    hint: "Read() string 메서드 구현",
    problemStatement: `Reader 인터페이스(Read() string)를 정의하고,
FileReader와 StringReader가 이를 구현하도록 하세요.`,
    inputDescription: "없음",
    outputDescription: "읽은 내용을 출력합니다.",
    examples: [{ input: "reader.Read()", output: "내용 반환" }],
    testCases: [{ input: "", expected: "File: data.txt\nString: Hello World\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// Reader 인터페이스
type Reader interface {
    Read() string
}

type FileReader struct {
    Filename string
}

type StringReader struct {
    Content string
}

// FileReader의 Read 메서드를 완성하세요
func (f FileReader) Read() string {
    // "File: {Filename}" 반환
    return ""
}

// StringReader의 Read 메서드를 완성하세요
func (s StringReader) Read() string {
    // "String: {Content}" 반환
    return ""
}

// readAll 함수를 완성하세요
func readAll(r Reader) string {
    return r.Read()
}

// main 함수는 수정하지 마세요
func main() {
    fr := FileReader{Filename: "data.txt"}
    sr := StringReader{Content: "Hello World"}
    fmt.Println(readAll(fr))
    fmt.Println(readAll(sr))
}`,
  },
  {
    id: 130,
    day: 30,
    title: "인터페이스 조합",
    platform: "custom",
    problemId: "130",
    url: "#",
    difficulty: "Silver III",
    category: "인터페이스",
    description: "여러 인터페이스를 조합하세요.",
    tags: ["인터페이스", "조합"],
    hint: "type ReadWriter interface { Reader; Writer }",
    problemStatement: `Reader와 Writer 인터페이스를 조합한 ReadWriter 인터페이스를 만들고,
이를 구현하는 구조체를 완성하세요.`,
    inputDescription: "없음",
    outputDescription: "읽기/쓰기 결과를 출력합니다.",
    examples: [{ input: "rw.Read(); rw.Write(data)", output: "읽기/쓰기 동작" }],
    testCases: [{ input: "", expected: "Buffer: Hello\nBuffer: Hello World\n", isHidden: false }],
    initialCode: `package main

import "fmt"

type Reader interface {
    Read() string
}

type Writer interface {
    Write(data string)
}

// ReadWriter 인터페이스를 정의하세요 (Reader + Writer)
type ReadWriter interface {
    Reader
    Writer
}

type Buffer struct {
    data string
}

// Buffer의 Read 메서드를 완성하세요
func (b *Buffer) Read() string {
    return ""
}

// Buffer의 Write 메서드를 완성하세요
func (b *Buffer) Write(data string) {
    // b.data에 data 추가
}

// main 함수는 수정하지 마세요
func main() {
    var rw ReadWriter = &Buffer{}
    rw.Write("Hello")
    fmt.Println("Buffer:", rw.Read())
    rw.Write(" World")
    fmt.Println("Buffer:", rw.Read())
}`,
  },

  // ========== Day 31: 에러 처리 기초 ==========
  {
    id: 31,
    day: 31,
    title: "에러 반환",
    platform: "custom",
    problemId: "31",
    url: "#",
    difficulty: "Bronze III",
    category: "에러",
    description: "에러를 반환하는 함수를 만드세요.",
    tags: ["에러", "error"],
    hint: "errors.New() 사용",
    problemStatement: `나눗셈 함수에서 0으로 나누면 에러를 반환하세요.
성공하면 결과와 nil, 실패하면 0과 에러를 반환합니다.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "결과 또는 에러 메시지를 출력합니다.",
    examples: [{ input: "divide(10, 2)", output: "5 <nil>" }],
    testCases: [{ input: "", expected: "5 <nil>\n0 division by zero\n3 <nil>\n", isHidden: false }],
    initialCode: `package main

import (
    "errors"
    "fmt"
)

// divide 함수를 완성하세요
func divide(a, b int) (int, error) {
    // b가 0이면 에러 반환
    // errors.New("division by zero")
    return 0, nil
}

// main 함수는 수정하지 마세요
func main() {
    r1, e1 := divide(10, 2)
    fmt.Println(r1, e1)
    r2, e2 := divide(5, 0)
    fmt.Println(r2, e2)
    r3, e3 := divide(10, 3)
    fmt.Println(r3, e3)

    _ = errors.New // 사용
}`,
  },
  {
    id: 131,
    day: 31,
    title: "에러 검사",
    platform: "custom",
    problemId: "131",
    url: "#",
    difficulty: "Silver V",
    category: "에러",
    description: "에러를 검사하고 처리하세요.",
    tags: ["에러", "에러처리"],
    hint: "if err != nil { ... }",
    problemStatement: `여러 연산을 수행하고, 에러가 발생하면 즉시 에러 메시지를 반환하세요.
모든 연산이 성공하면 "success"를 반환합니다.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "결과 또는 에러 메시지를 출력합니다.",
    examples: [{ input: "process(10, 2)", output: "success" }],
    testCases: [{ input: "", expected: "success: 5\nerror: division by zero\nerror: negative result\n", isHidden: false }],
    initialCode: `package main

import (
    "errors"
    "fmt"
)

func divide(a, b int) (int, error) {
    if b == 0 {
        return 0, errors.New("division by zero")
    }
    return a / b, nil
}

func checkPositive(n int) error {
    if n < 0 {
        return errors.New("negative result")
    }
    return nil
}

// process 함수를 완성하세요
func process(a, b int) string {
    // 1. divide 호출, 에러 있으면 "error: {메시지}" 반환
    // 2. checkPositive 호출, 에러 있으면 "error: {메시지}" 반환
    // 3. 성공하면 "success: {결과}" 반환
    return ""
}

// main 함수는 수정하지 마세요
func main() {
    fmt.Println(process(10, 2))
    fmt.Println(process(10, 0))
    fmt.Println(process(-10, 2))
}`,
  },

  // ========== Day 32: 커스텀 에러 ==========
  {
    id: 32,
    day: 32,
    title: "커스텀 에러 타입",
    platform: "custom",
    problemId: "32",
    url: "#",
    difficulty: "Silver IV",
    category: "에러",
    description: "커스텀 에러 타입을 만드세요.",
    tags: ["에러", "커스텀에러"],
    hint: "Error() string 메서드 구현",
    problemStatement: `ValidationError 타입을 만들고 error 인터페이스를 구현하세요.
Field와 Message를 포함해야 합니다.`,
    inputDescription: "없음",
    outputDescription: "에러 메시지를 출력합니다.",
    examples: [{ input: "ValidationError{}", output: "validation error" }],
    testCases: [{ input: "", expected: "name: 이름은 필수입니다\nage: 나이는 양수여야 합니다\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// ValidationError 구조체를 정의하세요
type ValidationError struct {
    Field   string
    Message string
}

// Error 메서드를 구현하세요 (error 인터페이스)
func (e ValidationError) Error() string {
    // "{Field}: {Message}" 형식
    return ""
}

// validate 함수를 완성하세요
func validate(name string, age int) error {
    if name == "" {
        return ValidationError{Field: "name", Message: "이름은 필수입니다"}
    }
    if age < 0 {
        return ValidationError{Field: "age", Message: "나이는 양수여야 합니다"}
    }
    return nil
}

// main 함수는 수정하지 마세요
func main() {
    err1 := validate("", 25)
    fmt.Println(err1)
    err2 := validate("Kim", -5)
    fmt.Println(err2)
}`,
  },
  {
    id: 132,
    day: 32,
    title: "에러 래핑",
    platform: "custom",
    problemId: "132",
    url: "#",
    difficulty: "Silver III",
    category: "에러",
    description: "에러를 래핑하여 컨텍스트를 추가하세요.",
    tags: ["에러", "fmt.Errorf"],
    hint: "fmt.Errorf(\"%w\", err)",
    problemStatement: `하위 함수의 에러에 컨텍스트를 추가하여 래핑하세요.
fmt.Errorf와 %w 동사를 사용합니다.`,
    inputDescription: "없음",
    outputDescription: "래핑된 에러 메시지를 출력합니다.",
    examples: [{ input: "processFile()", output: "process failed: open failed: file not found" }],
    testCases: [{ input: "", expected: "파일 처리 실패: 파일 열기 실패: 파일을 찾을 수 없습니다\n성공\n", isHidden: false }],
    initialCode: `package main

import (
    "errors"
    "fmt"
)

func openFile(name string) error {
    if name == "" {
        return errors.New("파일을 찾을 수 없습니다")
    }
    return nil
}

// readFile 함수를 완성하세요
func readFile(name string) error {
    err := openFile(name)
    if err != nil {
        // 에러 래핑: "파일 열기 실패: {원본 에러}"
        return nil
    }
    return nil
}

// processFile 함수를 완성하세요
func processFile(name string) error {
    err := readFile(name)
    if err != nil {
        // 에러 래핑: "파일 처리 실패: {원본 에러}"
        return nil
    }
    return nil
}

// main 함수는 수정하지 마세요
func main() {
    err := processFile("")
    if err != nil {
        fmt.Println(err)
    }
    err = processFile("data.txt")
    if err != nil {
        fmt.Println(err)
    } else {
        fmt.Println("성공")
    }
}`,
  },

  // ========== Day 33: 고루틴 기초 ==========
  {
    id: 33,
    day: 33,
    title: "고루틴 실행",
    platform: "custom",
    problemId: "33",
    url: "#",
    difficulty: "Bronze II",
    category: "동시성",
    description: "고루틴의 기본 동작을 이해하세요.",
    tags: ["고루틴", "goroutine"],
    hint: "go func() { ... }()",
    problemStatement: `고루틴은 Go의 경량 스레드입니다.
고루틴과 메인 함수의 실행 순서를 이해하세요.

참고: Go Playground에서는 고루틴이 실제 병렬로 실행되지 않을 수 있습니다.`,
    inputDescription: "없음",
    outputDescription: "실행 순서를 출력합니다.",
    examples: [{ input: "", output: "순차 실행 결과" }],
    testCases: [{ input: "", expected: "1\n2\n3\n4\n5\nsum: 15\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// printNumbers 함수를 완성하세요
func printNumbers() {
    for i := 1; i <= 5; i++ {
        fmt.Println(i)
    }
}

// sumNumbers 함수를 완성하세요
func sumNumbers() int {
    sum := 0
    for i := 1; i <= 5; i++ {
        sum += i
    }
    return sum
}

// main 함수는 수정하지 마세요
func main() {
    printNumbers()
    fmt.Println("sum:", sumNumbers())
}`,
  },
  {
    id: 133,
    day: 33,
    title: "WaitGroup 사용",
    platform: "custom",
    problemId: "133",
    url: "#",
    difficulty: "Silver IV",
    category: "동시성",
    description: "sync.WaitGroup으로 고루틴 동기화하세요.",
    tags: ["고루틴", "WaitGroup"],
    hint: "wg.Add(), wg.Done(), wg.Wait()",
    problemStatement: `WaitGroup을 사용하여 모든 고루틴이 완료될 때까지 기다리세요.

참고: 결과 순서는 동일하게 출력됩니다.`,
    inputDescription: "없음",
    outputDescription: "작업 완료 메시지를 출력합니다.",
    examples: [{ input: "", output: "모든 작업 완료" }],
    testCases: [{ input: "", expected: "작업 1 완료\n작업 2 완료\n작업 3 완료\n모든 작업 완료\n", isHidden: false }],
    initialCode: `package main

import (
    "fmt"
    "sync"
)

// worker 함수를 완성하세요
func worker(id int, wg *sync.WaitGroup) {
    // 작업 완료 후 wg.Done() 호출
    fmt.Printf("작업 %d 완료\\n", id)
}

// main 함수를 완성하세요
func main() {
    var wg sync.WaitGroup

    for i := 1; i <= 3; i++ {
        // wg.Add(1) 호출
        // worker 호출 (고루틴 대신 직접 호출)
        worker(i, &wg)
    }

    // wg.Wait() 호출
    fmt.Println("모든 작업 완료")
}`,
  },

  // ========== Day 34: 채널 기초 ==========
  {
    id: 34,
    day: 34,
    title: "채널 송수신",
    platform: "custom",
    problemId: "34",
    url: "#",
    difficulty: "Bronze II",
    category: "동시성",
    description: "채널로 데이터를 주고받으세요.",
    tags: ["채널", "channel"],
    hint: "ch <- value, value := <-ch",
    problemStatement: `채널을 사용하여 데이터를 송수신하세요.

참고: 버퍼가 있는 채널을 사용하면 동기 문제를 피할 수 있습니다.`,
    inputDescription: "없음",
    outputDescription: "채널에서 받은 값을 출력합니다.",
    examples: [{ input: "", output: "받은 값: 42" }],
    testCases: [{ input: "", expected: "받은 값: 42\n받은 값: hello\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// sendInt 함수를 완성하세요
func sendInt(ch chan int, value int) {
    // 채널에 value 전송
}

// sendString 함수를 완성하세요
func sendString(ch chan string, value string) {
    // 채널에 value 전송
}

// main 함수는 수정하지 마세요
func main() {
    intCh := make(chan int, 1)
    strCh := make(chan string, 1)

    sendInt(intCh, 42)
    sendString(strCh, "hello")

    fmt.Println("받은 값:", <-intCh)
    fmt.Println("받은 값:", <-strCh)
}`,
  },
  {
    id: 134,
    day: 34,
    title: "채널로 합계 계산",
    platform: "custom",
    problemId: "134",
    url: "#",
    difficulty: "Silver IV",
    category: "동시성",
    description: "채널을 사용하여 결과를 수집하세요.",
    tags: ["채널", "동시성"],
    hint: "각 작업의 결과를 채널로 전송",
    problemStatement: `슬라이스를 분할하여 각 부분의 합을 계산하고,
채널을 통해 결과를 수집하세요.`,
    inputDescription: "없음",
    outputDescription: "최종 합계를 출력합니다.",
    examples: [{ input: "sumParts([]int{1,2,3,4})", output: "10" }],
    testCases: [{ input: "", expected: "15\n55\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// sumSlice 함수를 완성하세요 - 슬라이스 합계를 채널로 전송
func sumSlice(nums []int, ch chan int) {
    sum := 0
    for _, n := range nums {
        sum += n
    }
    // 채널에 sum 전송
}

// totalSum 함수를 완성하세요
func totalSum(nums []int) int {
    ch := make(chan int, 2)
    mid := len(nums) / 2

    // 두 부분으로 나눠서 합계 계산
    sumSlice(nums[:mid], ch)
    sumSlice(nums[mid:], ch)

    // 두 결과를 합산
    return <-ch + <-ch
}

// main 함수는 수정하지 마세요
func main() {
    fmt.Println(totalSum([]int{1, 2, 3, 4, 5}))
    fmt.Println(totalSum([]int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}))
}`,
  },

  // ========== Day 35: 버퍼 채널 ==========
  {
    id: 35,
    day: 35,
    title: "버퍼 채널",
    platform: "custom",
    problemId: "35",
    url: "#",
    difficulty: "Bronze I",
    category: "동시성",
    description: "버퍼가 있는 채널을 사용하세요.",
    tags: ["채널", "버퍼"],
    hint: "make(chan int, bufferSize)",
    problemStatement: `버퍼가 있는 채널은 송신자를 차단하지 않고
버퍼 크기만큼 데이터를 저장할 수 있습니다.`,
    inputDescription: "없음",
    outputDescription: "채널에서 받은 값들을 출력합니다.",
    examples: [{ input: "", output: "1 2 3" }],
    testCases: [{ input: "", expected: "1\n2\n3\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// fillChannel 함수를 완성하세요
func fillChannel(ch chan int, values []int) {
    for _, v := range values {
        // 채널에 v 전송
    }
}

// main 함수는 수정하지 마세요
func main() {
    ch := make(chan int, 3)
    fillChannel(ch, []int{1, 2, 3})

    fmt.Println(<-ch)
    fmt.Println(<-ch)
    fmt.Println(<-ch)
}`,
  },
  {
    id: 135,
    day: 35,
    title: "채널 닫기",
    platform: "custom",
    problemId: "135",
    url: "#",
    difficulty: "Silver IV",
    category: "동시성",
    description: "채널을 닫고 range로 수신하세요.",
    tags: ["채널", "close", "range"],
    hint: "close(ch), for v := range ch",
    problemStatement: `채널을 닫으면 수신자에게 더 이상 데이터가 없음을 알립니다.
range를 사용하면 채널이 닫힐 때까지 값을 받습니다.`,
    inputDescription: "없음",
    outputDescription: "채널에서 받은 모든 값을 출력합니다.",
    examples: [{ input: "", output: "1 2 3 4 5" }],
    testCases: [{ input: "", expected: "1\n2\n3\n4\n5\ndone\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// producer 함수를 완성하세요
func producer(ch chan int, n int) {
    for i := 1; i <= n; i++ {
        ch <- i
    }
    // 채널 닫기
}

// consumer 함수를 완성하세요
func consumer(ch chan int) {
    // range로 채널에서 값 받기
    for v := range ch {
        fmt.Println(v)
    }
    fmt.Println("done")
}

// main 함수는 수정하지 마세요
func main() {
    ch := make(chan int, 5)
    producer(ch, 5)
    consumer(ch)
}`,
  },

  // ========== Day 36: select 문 ==========
  {
    id: 36,
    day: 36,
    title: "select 기초",
    platform: "custom",
    problemId: "36",
    url: "#",
    difficulty: "Silver V",
    category: "동시성",
    description: "select로 여러 채널을 처리하세요.",
    tags: ["select", "채널"],
    hint: "select { case v := <-ch1: ... case v := <-ch2: ... }",
    problemStatement: `select문은 여러 채널 연산 중 준비된 것을 처리합니다.
두 채널에서 값을 받아 처리하세요.`,
    inputDescription: "없음",
    outputDescription: "받은 값들을 출력합니다.",
    examples: [{ input: "", output: "채널별 값" }],
    testCases: [{ input: "", expected: "숫자: 1\n문자: a\n숫자: 2\n문자: b\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// process 함수를 완성하세요
func process(intCh chan int, strCh chan string, count int) {
    for i := 0; i < count; i++ {
        select {
        case n := <-intCh:
            fmt.Println("숫자:", n)
        case s := <-strCh:
            fmt.Println("문자:", s)
        }
    }
}

// main 함수는 수정하지 마세요
func main() {
    intCh := make(chan int, 2)
    strCh := make(chan string, 2)

    intCh <- 1
    strCh <- "a"
    intCh <- 2
    strCh <- "b"

    process(intCh, strCh, 4)
}`,
  },
  {
    id: 136,
    day: 36,
    title: "select와 default",
    platform: "custom",
    problemId: "136",
    url: "#",
    difficulty: "Silver III",
    category: "동시성",
    description: "select의 default 케이스를 사용하세요.",
    tags: ["select", "default"],
    hint: "default: 준비된 채널이 없을 때 실행",
    problemStatement: `select의 default 케이스는 어떤 채널도 준비되지 않았을 때 실행됩니다.
논블로킹 채널 연산에 사용됩니다.`,
    inputDescription: "없음",
    outputDescription: "채널 상태에 따른 출력을 합니다.",
    examples: [{ input: "", output: "값 또는 empty" }],
    testCases: [{ input: "", expected: "값: 42\n비어있음\n값: 100\n", isHidden: false }],
    initialCode: `package main

import "fmt"

// tryReceive 함수를 완성하세요
func tryReceive(ch chan int) string {
    select {
    case v := <-ch:
        return fmt.Sprintf("값: %d", v)
    default:
        return "비어있음"
    }
}

// main 함수는 수정하지 마세요
func main() {
    ch := make(chan int, 1)

    ch <- 42
    fmt.Println(tryReceive(ch))
    fmt.Println(tryReceive(ch))
    ch <- 100
    fmt.Println(tryReceive(ch))
}`,
  },

  // ========== Day 37: Mutex ==========
  {
    id: 37,
    day: 37,
    title: "Mutex로 동기화",
    platform: "custom",
    problemId: "37",
    url: "#",
    difficulty: "Silver IV",
    category: "동시성",
    description: "Mutex로 공유 자원을 보호하세요.",
    tags: ["Mutex", "동기화"],
    hint: "mu.Lock(), mu.Unlock()",
    problemStatement: `Mutex를 사용하여 여러 고루틴이 안전하게 공유 변수에 접근하도록 하세요.

참고: Go Playground에서는 순차 실행됩니다.`,
    inputDescription: "없음",
    outputDescription: "안전하게 계산된 결과를 출력합니다.",
    examples: [{ input: "", output: "최종 값: 100" }],
    testCases: [{ input: "", expected: "카운터: 10\n", isHidden: false }],
    initialCode: `package main

import (
    "fmt"
    "sync"
)

type Counter struct {
    mu    sync.Mutex
    value int
}

// Increment 메서드를 완성하세요
func (c *Counter) Increment() {
    // Lock, value++, Unlock
}

// Value 메서드를 완성하세요
func (c *Counter) Value() int {
    c.mu.Lock()
    defer c.mu.Unlock()
    return c.value
}

// main 함수는 수정하지 마세요
func main() {
    counter := &Counter{}

    for i := 0; i < 10; i++ {
        counter.Increment()
    }

    fmt.Println("카운터:", counter.Value())
}`,
  },
  {
    id: 137,
    day: 37,
    title: "RWMutex",
    platform: "custom",
    problemId: "137",
    url: "#",
    difficulty: "Silver II",
    category: "동시성",
    description: "RWMutex로 읽기/쓰기를 분리하세요.",
    tags: ["RWMutex", "동기화"],
    hint: "RLock/RUnlock (읽기), Lock/Unlock (쓰기)",
    problemStatement: `RWMutex는 여러 읽기는 동시에, 쓰기는 단독으로 허용합니다.
읽기가 많은 경우 성능이 향상됩니다.`,
    inputDescription: "없음",
    outputDescription: "안전하게 읽고 쓴 결과를 출력합니다.",
    examples: [{ input: "", output: "캐시 값" }],
    testCases: [{ input: "", expected: "a: 1\na: 10\nb: 2\n", isHidden: false }],
    initialCode: `package main

import (
    "fmt"
    "sync"
)

type Cache struct {
    mu   sync.RWMutex
    data map[string]int
}

// Get 메서드를 완성하세요 (읽기 잠금)
func (c *Cache) Get(key string) (int, bool) {
    c.mu.RLock()
    defer c.mu.RUnlock()
    val, ok := c.data[key]
    return val, ok
}

// Set 메서드를 완성하세요 (쓰기 잠금)
func (c *Cache) Set(key string, value int) {
    // Lock, 값 설정, Unlock
}

// main 함수는 수정하지 마세요
func main() {
    cache := &Cache{data: make(map[string]int)}

    cache.Set("a", 1)
    if v, ok := cache.Get("a"); ok {
        fmt.Println("a:", v)
    }

    cache.Set("a", 10)
    cache.Set("b", 2)

    if v, ok := cache.Get("a"); ok {
        fmt.Println("a:", v)
    }
    if v, ok := cache.Get("b"); ok {
        fmt.Println("b:", v)
    }
}`,
  },

  // ========== Day 38: 패키지 ==========
  {
    id: 38,
    day: 38,
    title: "strings 패키지",
    platform: "custom",
    problemId: "38",
    url: "#",
    difficulty: "Bronze III",
    category: "패키지",
    description: "strings 패키지를 활용하세요.",
    tags: ["strings", "패키지"],
    hint: "strings.Split, Join, Contains, Replace 등",
    problemStatement: `strings 패키지의 함수들을 사용하여
문자열을 조작하는 함수들을 완성하세요.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "조작된 문자열을 출력합니다.",
    examples: [{ input: 'splitAndJoin("a,b,c", ",")', output: "a-b-c" }],
    testCases: [{ input: "", expected: "a-b-c\ntrue\nhello world\n", isHidden: false }],
    initialCode: `package main

import (
    "fmt"
    "strings"
)

// splitAndJoin: 문자열을 delim으로 분리 후 "-"로 다시 합침
func splitAndJoin(s, delim string) string {
    // strings.Split과 strings.Join 사용
    return ""
}

// containsWord: 문자열에 단어가 포함되어 있는지 확인
func containsWord(s, word string) bool {
    // strings.Contains 사용
    return false
}

// replaceAll: old를 new로 모두 교체
func replaceAll(s, old, new string) string {
    // strings.ReplaceAll 사용
    return ""
}

// main 함수는 수정하지 마세요
func main() {
    fmt.Println(splitAndJoin("a,b,c", ","))
    fmt.Println(containsWord("hello world", "world"))
    fmt.Println(replaceAll("hello go go", "go", "world"))

    _ = strings.Split // 사용
}`,
  },
  {
    id: 138,
    day: 38,
    title: "strconv 패키지",
    platform: "custom",
    problemId: "138",
    url: "#",
    difficulty: "Silver V",
    category: "패키지",
    description: "문자열과 숫자 변환을 하세요.",
    tags: ["strconv", "패키지"],
    hint: "strconv.Atoi, Itoa, ParseFloat, FormatFloat",
    problemStatement: `strconv 패키지를 사용하여 문자열과 숫자 사이의 변환을 수행하세요.`,
    inputDescription: "없음 (함수의 매개변수로 주어짐)",
    outputDescription: "변환된 값을 출력합니다.",
    examples: [{ input: 'stringToInt("42")', output: "42" }],
    testCases: [{ input: "", expected: "42\n100\n3.14\n", isHidden: false }],
    initialCode: `package main

import (
    "fmt"
    "strconv"
)

// stringToInt: 문자열을 정수로 변환 (에러 시 0 반환)
func stringToInt(s string) int {
    // strconv.Atoi 사용
    return 0
}

// intToString: 정수를 문자열로 변환
func intToString(n int) string {
    // strconv.Itoa 사용
    return ""
}

// stringToFloat: 문자열을 실수로 변환 (에러 시 0.0 반환)
func stringToFloat(s string) float64 {
    // strconv.ParseFloat 사용
    return 0.0
}

// main 함수는 수정하지 마세요
func main() {
    fmt.Println(stringToInt("42"))
    fmt.Println(intToString(100))
    fmt.Println(stringToFloat("3.14"))

    _ = strconv.Atoi // 사용
}`,
  },

  // ========== Day 39: time 패키지 ==========
  {
    id: 39,
    day: 39,
    title: "시간 다루기",
    platform: "custom",
    problemId: "39",
    url: "#",
    difficulty: "Bronze II",
    category: "패키지",
    description: "time 패키지로 시간을 다루세요.",
    tags: ["time", "패키지"],
    hint: "time.Now(), Format(), Add()",
    problemStatement: `time 패키지를 사용하여 시간을 포맷하고 계산하세요.

Go의 시간 포맷은 "2006-01-02 15:04:05"를 기준으로 합니다.`,
    inputDescription: "없음",
    outputDescription: "포맷된 시간을 출력합니다.",
    examples: [{ input: "", output: "2024-01-15" }],
    testCases: [{ input: "", expected: "2024-01-15\n2024-01-22\n168h0m0s\n", isHidden: false }],
    initialCode: `package main

import (
    "fmt"
    "time"
)

// formatDate: 시간을 "YYYY-MM-DD" 형식으로 포맷
func formatDate(t time.Time) string {
    // t.Format("2006-01-02") 사용
    return ""
}

// addWeek: 1주일 후 날짜 반환
func addWeek(t time.Time) time.Time {
    // t.Add(time.Hour * 24 * 7) 또는 t.AddDate(0, 0, 7)
    return t
}

// duration: 두 시간 사이의 차이
func duration(start, end time.Time) time.Duration {
    // end.Sub(start)
    return 0
}

// main 함수는 수정하지 마세요
func main() {
    t := time.Date(2024, 1, 15, 0, 0, 0, 0, time.UTC)
    fmt.Println(formatDate(t))
    fmt.Println(formatDate(addWeek(t)))
    fmt.Println(duration(t, addWeek(t)))
}`,
  },
  {
    id: 139,
    day: 39,
    title: "시간 파싱",
    platform: "custom",
    problemId: "139",
    url: "#",
    difficulty: "Silver IV",
    category: "패키지",
    description: "문자열을 시간으로 파싱하세요.",
    tags: ["time", "파싱"],
    hint: "time.Parse(layout, value)",
    problemStatement: `문자열을 time.Time으로 파싱하고,
날짜 차이를 계산하세요.`,
    inputDescription: "없음",
    outputDescription: "파싱된 시간 정보를 출력합니다.",
    examples: [{ input: 'parseDate("2024-01-15")', output: "2024년 1월 15일" }],
    testCases: [{ input: "", expected: "2024\n1\n15\n10\n", isHidden: false }],
    initialCode: `package main

import (
    "fmt"
    "time"
)

// parseDate: "YYYY-MM-DD" 형식 문자열을 파싱
func parseDate(s string) (time.Time, error) {
    // time.Parse("2006-01-02", s)
    return time.Time{}, nil
}

// daysBetween: 두 날짜 사이의 일수
func daysBetween(date1, date2 string) int {
    t1, _ := parseDate(date1)
    t2, _ := parseDate(date2)
    diff := t2.Sub(t1)
    return int(diff.Hours() / 24)
}

// main 함수는 수정하지 마세요
func main() {
    t, _ := parseDate("2024-01-15")
    fmt.Println(t.Year())
    fmt.Println(int(t.Month()))
    fmt.Println(t.Day())
    fmt.Println(daysBetween("2024-01-01", "2024-01-11"))
}`,
  },

  // ========== Day 40: JSON 처리 ==========
  {
    id: 40,
    day: 40,
    title: "JSON 인코딩",
    platform: "custom",
    problemId: "40",
    url: "#",
    difficulty: "Silver V",
    category: "패키지",
    description: "구조체를 JSON으로 인코딩하세요.",
    tags: ["JSON", "encoding/json"],
    hint: "json.Marshal(v)",
    problemStatement: `구조체를 JSON 문자열로 변환하세요.
json 태그를 사용하여 필드 이름을 지정할 수 있습니다.`,
    inputDescription: "없음",
    outputDescription: "JSON 문자열을 출력합니다.",
    examples: [{ input: "toJSON(person)", output: '{"name":"Kim","age":25}' }],
    testCases: [{ input: "", expected: "{\"name\":\"Kim\",\"age\":25}\n{\"name\":\"Lee\",\"age\":30}\n", isHidden: false }],
    initialCode: `package main

import (
    "encoding/json"
    "fmt"
)

type Person struct {
    Name string \`json:"name"\`
    Age  int    \`json:"age"\`
}

// toJSON: 구조체를 JSON 문자열로 변환
func toJSON(p Person) string {
    // json.Marshal 사용
    return ""
}

// main 함수는 수정하지 마세요
func main() {
    p1 := Person{Name: "Kim", Age: 25}
    p2 := Person{Name: "Lee", Age: 30}
    fmt.Println(toJSON(p1))
    fmt.Println(toJSON(p2))

    _ = json.Marshal // 사용
}`,
  },
  {
    id: 140,
    day: 40,
    title: "JSON 디코딩",
    platform: "custom",
    problemId: "140",
    url: "#",
    difficulty: "Silver III",
    category: "패키지",
    description: "JSON을 구조체로 디코딩하세요.",
    tags: ["JSON", "encoding/json"],
    hint: "json.Unmarshal([]byte, &v)",
    problemStatement: `JSON 문자열을 구조체로 변환하세요.
json.Unmarshal을 사용합니다.`,
    inputDescription: "없음",
    outputDescription: "디코딩된 구조체 필드를 출력합니다.",
    examples: [{ input: 'fromJSON("{\\"name\\":\\"Kim\\"}")', output: "Kim" }],
    testCases: [{ input: "", expected: "Kim 25\nLee 30\nPark 0\n", isHidden: false }],
    initialCode: `package main

import (
    "encoding/json"
    "fmt"
)

type Person struct {
    Name string \`json:"name"\`
    Age  int    \`json:"age"\`
}

// fromJSON: JSON 문자열을 Person으로 변환
func fromJSON(s string) Person {
    var p Person
    // json.Unmarshal([]byte(s), &p)
    return p
}

// main 함수는 수정하지 마세요
func main() {
    p1 := fromJSON(\`{"name":"Kim","age":25}\`)
    fmt.Println(p1.Name, p1.Age)

    p2 := fromJSON(\`{"name":"Lee","age":30}\`)
    fmt.Println(p2.Name, p2.Age)

    // 필드가 없으면 기본값
    p3 := fromJSON(\`{"name":"Park"}\`)
    fmt.Println(p3.Name, p3.Age)

    _ = json.Unmarshal // 사용
}`,
  },
];

// Day별 코딩테스트 가져오기
export function getCodingTestsByDay(day: number): CodingTest[] {
  return codingTestsData.filter((test) => test.day === day);
}

// 모든 코딩테스트 가져오기
export function getAllCodingTests(): CodingTest[] {
  return codingTestsData;
}
