/**
 * 2007년
 * 문제: 2007년 x월 y일은 무슨 요일인지 구하라
 * 입력: x, y (1 ≤ x ≤ 12, 1 ≤ y ≤ 31)
 * 출력: MON, TUE, WED, THU, FRI, SAT, SUN
 */

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int x = sc.nextInt();
        int y = sc.nextInt();
        int[] days = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
        Stirng[] dayOfWeek = {"MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"};
        int totalDays = 0;

        for (int i = 0; i < x - 1; i++) {
            totalDays += days[i];
        }
        totalDays += y;
        int day = totalDays % 7;

        System.out.println(dayOfWeek[day - 1]);
    }
}

/**
 * [요일을 구하는 방법]
 * 1. 1월 1일은 월요일이다.
 * 2. 1월 1일부터 x월 y일까지의 총 일수를 구한다.
 * 3. 총 일수를 7로 나눈 나머지를 구한다.
 * 4. 나머지가 1이면 MON, 2이면 TUE, 3이면 WED, 4이면 THU, 5이면 FRI, 6이면 SAT, 0이면 SUN
 */