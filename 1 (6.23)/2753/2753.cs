// 연도가 윤년이면 1, 아니면 0 출력

using System;

namespace _2753 {
    class Program {
        public static void Main(String[] args) {
            int year = Convert.ToInt32(Console.ReadLine());

            if (year % 4 == 0 && (year % 100 != 0 || year %400 == 0)) {
                Console.WriteLine(1);
            } else {
                Console.WriteLine(0);
            }
        }
    }
}