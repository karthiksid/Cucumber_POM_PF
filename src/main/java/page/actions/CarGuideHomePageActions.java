package page.actions;

import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import page.locators.CarGuideHomePageLocator;
import utils.SeleniumDriver;

public class CarGuideHomePageActions {

	CarGuideHomePageLocator CGHP_locator = null;

	public CarGuideHomePageActions() {
		this.CGHP_locator = new CarGuideHomePageLocator();
		PageFactory.initElements(SeleniumDriver.getDriver(), CGHP_locator);
	}

	public void moveToCarForSaleMenu() {

		Actions action = new Actions(SeleniumDriver.getDriver());
		action.moveToElement(CGHP_locator.carsForSaleLink).perform();

	}

	public void clickOnSearchCars() {
		
		CGHP_locator.SearchCarsLink.click();

	}

	public void clickOnUsedCarSearch() {

		CGHP_locator.UsedCarsSearchLink.click();
	}

	public void moveToSellMyCarMenu() {

	}

}
