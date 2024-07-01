// 팩토리얼 함수 구현
// 0! = 1

using System;

namespace _10872 {
    class Program {
        public static void Main(String[] args) {
            int N = int.parse(Console.ReadLine());

            Console.WriteLine(Factorial(N));
        }

        public static int Factorial(int N) {
            if (N == 0) return 1;
            return N * Factorial(N - 1);
        }
    }
}