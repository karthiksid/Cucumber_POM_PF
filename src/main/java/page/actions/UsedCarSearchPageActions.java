package page.actions;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import page.locators.UsedCarSearchLocators;
import utils.SeleniumDriver;

public class UsedCarSearchPageActions {

	 UsedCarSearchLocators UCS_Locators = null;
	
public UsedCarSearchPageActions (){
	this.UCS_Locators = new UsedCarSearchLocators();
	PageFactory.initElements(SeleniumDriver.getDriver(), UCS_Locators);
}

public void gotoAnyMakeDropdown(String carBrand) {

	Select selectcar = new Select(UCS_Locators.AnyMakeDropdown);
	selectcar.selectByVisibleText(carBrand);
}

public void gotoSelectModel(String carModel) {

	Select selectcar = new Select(UCS_Locators.SelectModelDropdown);
	selectcar.selectByVisibleText(carModel);
}

public void gotoSelectLocation(String carLocation) {

	Select selectcar = new Select(UCS_Locators.SelectLocationDropdown);
	selectcar.selectByVisibleText(carLocation);
}

public void gotoSelectPrice(String carPrice) {

	Select selectcar = new Select(UCS_Locators.SelectPriceDropdown);
	selectcar.selectByVisibleText(carPrice);
}

public void gotoFindMyNextCarButton(){
	
	UCS_Locators.FindMyNextCarLink.click();
}

	

}
