// 전공평점 계산

import java.util.Scanner;
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // HashMap: key-value 쌍으로 데이터를 저장하는 자료구조
        HashMap<String, Double> gradePoints = new HashMap<String, Double>();
        double total = 0;
        double totalCredits = 0;
        double yourGPA = 0;

        gradePoints.put("A+", 4.5);
        gradePoints.put("A0", 4.0);
        gradePoints.put("B+", 3.5);
        gradePoints.put("B0", 3.0);
        gradePoints.put("C+", 2.5);
        gradePoints.put("C0", 2.0);
        gradePoints.put("D+", 1.5);
        gradePoints.put("D0", 1.0);
        gradePoints.put("F", 0.0);

        for (int i = 0; i < 20; i++) {
            String[] inputs = sc.nextLine().split(" ");

            if (inputs[2].equals("P")) {
                continue;
            }

            total += Double.parseDouble(inputs[1]) * gradePoints.get(inputs[2]);
            totalCredits += Double.parseDouble(inputs[1]);
        }

        yourGPA = total / totalCredits;
        System.out.printf("%.6f", yourGPA);
    }
}

/**
 * - HashMap: key-value 쌍으로 데이터를 저장하는 자료구조
 * - '==' 연산자: 두 객체의 주소값을 비교
 * - equals(): 두 객체의 내용을 비교
 * - Double.parseDouble(): string -> double
 * - %.6f: 소수점 6자리까지 출력
 */