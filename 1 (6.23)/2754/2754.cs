// 성적의 평점 출력

using System;
using System.Collections.Generic;

namespace _2754 {
    class Program {
        public static void Main(String[] args) {
            string grade = Console.ReadLine();

            // key: 성적, value: 평점
            Dictionary<string, double> GPA = new Dictionary<string, double> {
                {"A+", 4.3},
                {"A0", 4.0},
                {"A-", 3.7},
                {"B+", 3.3},
                {"B0", 3.0},
                {"B-", 2.7},
                {"C+", 2.3},
                {"C0", 2.0},
                {"C-", 1.7},
                {"D+", 1.3},
                {"D0", 1.0},
                {"D-", 0.7},
                {"F", 0.0}
            };

            Console.WriteLine("{0:F1}", GPA[grade]);
        }
    }
}

/*
[ Dictionary ]
- key와 value를 한 쌍으로 저장
- key를 통해 value에 접근
- key는 중복될 수 없음

[포맷 문자열]
- {index[,alignment][:formatString]}
    - index: 출력할 인수의 인덱스
    - alignment: 출력할 문자열의 길이
    - formatString: 출력 형식
        [ Standard Numeric Format Strings ]
        - D: 10진수
        - F: 고정 소수점
        - E: 지수 표기법
        - P: 백분율
        - C: 통화
- {0:F1}: 소수점 첫째 자리까지 출력
*/
