package utils;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SeleniumDriver {

	private static SeleniumDriver seleniumDriver;

	// Initialise webDriver
	private static WebDriver driver;

	private static WebDriverWait waitdriver;
	private static int TIMEOUT = 30;
	private static int PAGE_LOAD_TIMEOUT = 50;

	private SeleniumDriver() {

		System.setProperty("webdriver.chrome.driver",
				"E:\\previous E backup\\Automation_Projects\\My_FrameWorks\\Cucumber_POM_PF\\src\\test\\resources\\Browser_Drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();

		waitdriver = new WebDriverWait(driver, TIMEOUT);
		driver.manage().timeouts().implicitlyWait(TIMEOUT, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);

	}

	public static void openPage(String url) {
		driver.get(url);
	}

	public static WebDriver getDriver() {
		return driver;

	}

	public static void setUpDriver() {
		if (seleniumDriver == null) {
			seleniumDriver = new SeleniumDriver();
		}

	}

	public static void tearDown() {
		if (driver != null) {
			driver.close();
			driver.quit();
		}
		seleniumDriver = null;
	}
}
