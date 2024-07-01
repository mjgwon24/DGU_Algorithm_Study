// 달팽이가 높이 V미터인 나무 막대를올라간다.
// 낮에는 A미터 올라가고 밤에는 B미터 미끄러진다.
// 정상에 도달하려면 며칠이 걸리는지 구하시오.
// input: 2 1 5, output: 4
// input: 5 1 6, output: 2

using System;

namespace _2869 {
    class Program {
        public static void Main(String[] args) {
            string[] tokens = Console.ReadLine().Split(' ');

            int A = Convert.ToInt32(tokens[0]);
            int B = Convert.ToInt32(tokens[1]);
            int V = Convert.ToInt32(tokens[2]);

            int day = (V - B) / (A - B);       // 정상에 도달하기 위한 일수
            if ((V - B) % (A - B) != 0) day++; // 정상에 도달하기 직전에 미끄러지는 경우 +1일

            Console.WriteLine(day);
        }
    }
}