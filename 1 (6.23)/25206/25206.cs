// 전공평점 계산

using System;
using System.Collections.Generic;

namespace _25206 {
    class Program {
        public static void Main(String[] args) {
            Dictionary<string, double> gradePoint = new Dictionary<string, double> {
                {"A+", 4.5},
                {"A0", 4.0},
                {"B+", 3.5},
                {"B0", 3.0},
                {"C+", 2.5},
                {"C0", 2.0},
                {"D+", 1.5},
                {"D0", 1.0},
                {"F", 0.0}
            };

            double total = 0;
            double totalCredits = 0;

            for (int i = 0; i < 20; i++) {
                string[] inputs = Console.ReadLine().Split(' ');

                if (inputs[2] == "P") {
                    continue;
                }

                total += double.Parse(inputs[1]) * gradePoint[inputs[2]];
                totalCredits += double.Parse(inputs[1]);
            }

            double yourGPA = total / totalCredits;

            Console.WriteLine("{0:F6}", yourGPA);
        }
    }
}

/*
double.Parse(): 문자열을 double형으로 변환
*/
