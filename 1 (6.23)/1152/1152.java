// 문자열의 단어 개수 세기
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int count = 0;
        String[] str = sc.nextLine().trim().split(" ");

        for (int i = 0; i < str.length; i++) {
            if (!str[i].equals("")) {
                count++;
            }
        }

        System.out.print(count);
    }
}