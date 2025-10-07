import java.awt.Robot;

class Robo {
    public static void main(String[] args) throws Exception {
        // Create instance of Robot class
        Robot robot = new Robot();
        // Attendre 2 secondes avant de commencer
        Thread.sleep(2000);

        // Déplacer la souris à différentes positions
        robot.mouseMove(0, 0);
        Thread.sleep(500);
        robot.mouseMove(200, 200);
        Thread.sleep(500);
        robot.mouseMove(400, 400);
    }
}
