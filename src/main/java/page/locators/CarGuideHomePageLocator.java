package page.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class CarGuideHomePageLocator {
	
	@FindBy(how=How.LINK_TEXT,using="Cars For Sale")
	public WebElement carsForSaleLink;
	
	@FindBy(how=How.LINK_TEXT,using="Sell My Car")
	public WebElement SellMyCarLink;

	@FindBy(how=How.LINK_TEXT,using="Car Reviews")
	public WebElement CarReviewsLink;

	@FindBy(how=How.LINK_TEXT,using="Car News")
	public WebElement CarsNewsLink;

	@FindBy(how=How.LINK_TEXT,using="Insurance")
	public WebElement InsuranceLink;
	
	@FindBy(how=How.LINK_TEXT,using="Car Advice")
	public WebElement CarAdviceLink;
	
	@FindBy(how=How.LINK_TEXT,using="Search Cars")
	public WebElement SearchCarsLink;
	
	@FindBy(how=How.LINK_TEXT,using="Used Cars Search")
	public WebElement UsedCarsSearchLink;
	
	

	
	

}
