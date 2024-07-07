/**
 * 2007년
 * 문제: 2007년 x월 y일은 무슨 요일인지 구하라
 * 입력: x, y (1 ≤ x ≤ 12, 1 ≤ y ≤ 31)
 * 출력: MON, TUE, WED, THU, FRI, SAT, SUN
 */

using System;

namespace _1924 {
    class Program {
        public static void Main(String[] args) {
            string[] tokens = Console.ReadLine().Split(' ');
            int x = Convert.ToInt32(tokens[0]);
            int y = Convert.ToInt32(tokens[1]);
            int[] days = { 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };
            string[] weeks = { "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT" };
            int total = 0;

            for (int i = 0; i < x - 1; i++) {
                total += days[i];
            }
            total += y;

            Console.WriteLine(weeks[total % 7]);
        }
    }
}