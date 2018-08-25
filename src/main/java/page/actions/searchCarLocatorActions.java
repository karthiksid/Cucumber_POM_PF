package page.actions;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import page.locators.searchCarLocator;
import utils.SeleniumDriver;

public class searchCarLocatorActions {

	searchCarLocator SC_locator = null;

	public searchCarLocatorActions() {
		this.SC_locator = new searchCarLocator();
		PageFactory.initElements(SeleniumDriver.getDriver(), SC_locator);
	}

	public void gotoAnyMakeDropdown(String carBrand) {

		Select selectcar = new Select(SC_locator.AnyMakeDropdown);
		selectcar.selectByVisibleText(carBrand);
	}

	public void gotoSelectModel(String carModel) {

		Select selectcar = new Select(SC_locator.SelectModelDropdown);
		selectcar.selectByVisibleText(carModel);
	}

	public void gotoSelectLocation(String carLocation) {

		Select selectcar = new Select(SC_locator.SelectLocationDropdown);
		selectcar.selectByVisibleText(carLocation);
	}

	public void gotoSelectPrice(String carPrice) {

		Select selectcar = new Select(SC_locator.SelectPriceDropdown);
		selectcar.selectByVisibleText(carPrice);
	}
	
	public void gotoFindMyNextCarButton(){
		
		SC_locator.FindMyNextCarLink.click();
	}

}
