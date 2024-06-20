// 성적의 평점 출력

import java.util.Scanner;
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String grade = sc.next();

        HashMap<String, Double> GPA = new HashMap<String, Double>();

        GPA.put("A+", 4.3);
        GPA.put("A0", 4.0);
        GPA.put("A-", 3.7);
        GPA.put("B+", 3.3);
        GPA.put("B0", 3.0);
        GPA.put("B-", 2.7);
        GPA.put("C+", 2.3);
        GPA.put("C0", 2.0);
        GPA.put("C-", 1.7);
        GPA.put("D+", 1.3);
        GPA.put("D0", 1.0);
        GPA.put("D-", 0.7);
        GPA.put("F", 0.0);

        System.out.print(GPA.get(grade));

    }
}

/**
 * HashMap: key-value 쌍으로 데이터를 저장하는 자료구조
 */