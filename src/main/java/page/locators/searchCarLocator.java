package page.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class searchCarLocator {

	@FindBy(how=How.CSS,using="#makes")
	public WebElement AnyMakeDropdown;
	
	@FindBy(how=How.CSS,using="#models")
	public WebElement SelectModelDropdown;

	@FindBy(how=How.CSS,using="#locations")
	public WebElement SelectLocationDropdown;
	
	@FindBy(how=How.CSS,using="#price-max")
	public WebElement SelectPriceDropdown;
	
	@FindBy(how=How.CSS,using="#search-submit")
	public WebElement FindMyNextCarLink;
}
