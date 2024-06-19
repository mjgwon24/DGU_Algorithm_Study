// input: A, B (자연수)
// output: A, B 사칙연산

using System;

namespace _10869 {
    class Program {
        public static void Main(String[] args) {
            // ReadLine()으로 입력받은 문자열을 ' ' 기준으로 나누어 저장
            string[] tokens = Console.ReadLine().Split(' ');

            // tokens 배열의 각 원소를 int형으로 변환하여 저장
            int A = Convert.ToInt32(tokens[0]);
            int B = Convert.ToInt32(tokens[1]);

            int sum = A + B;
            int sub = A - B;
            int mul = A * B;
            int div = A / B;
            int mod = A % B;

            Console.WriteLine(sum);
            Console.WriteLine(sub);
            Console.WriteLine(mul);
            Console.WriteLine(div);
            Console.WriteLine(mod);
        }
    }
}

/*

[ Convert.ToInt32()와 int.Parse()의 차이 ]

- Convert.ToInt32()는 null을 입력하면 0을 반환
- int.Parse()는 null을 입력하면 에러 발생

*/