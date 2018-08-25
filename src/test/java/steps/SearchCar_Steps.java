package steps;

import java.util.List;

import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.actions.CarGuideHomePageActions;
import page.actions.searchCarLocatorActions;
import utils.SeleniumDriver;

public class SearchCar_Steps {
	
	CarGuideHomePageActions CGHP_actions = new CarGuideHomePageActions();
	searchCarLocatorActions SCL_actions = new searchCarLocatorActions();
	
	
	@Given("^I am on the homePage \"([^\"]*)\" of CarsGuide Website$")
	public void i_am_on_the_homePage_of_CarsGuide_Website(String arg1) throws Throwable {
		
		SeleniumDriver.openPage("https://www.carsguide.com.au");
	}

	@When("^I move to the menu$")
	public void i_move_to_the_menu(List<String> list) throws Throwable {
		
		String menu = list.get(1);
		CGHP_actions.moveToCarForSaleMenu();
		
	}

	@When("^click on \"([^\"]*)\" link$")
	public void click_on_link(String searchCars) throws Throwable {
		
		CGHP_actions.clickOnSearchCars();
		
	}

	@When("^select CarBrand as \"([^\"]*)\" from AnyMake dropDown$")
	public void select_CarBrand_as_from_AnyMake_dropDown(String carBrand) throws Throwable {
		
		SCL_actions.gotoAnyMakeDropdown(carBrand);
	}

	@When("^select Model as \"([^\"]*)\" from Model dropDown$")
	public void select_Model_as_from_Model_dropDown(String carModel) throws Throwable {
		SCL_actions.gotoSelectModel(carModel);
	}

	@When("^select Location as \"([^\"]*)\" from Location dropDown$")
	public void select_Location_as_from_Location_dropDown(String carLocation) throws Throwable {
		SCL_actions.gotoSelectLocation(carLocation);
	
	}

	@When("^select Price as \"([^\"]*)\" from price dropDown$")
	public void select_Price_as_from_price_dropDown(String carPrice) throws Throwable {
		SCL_actions.gotoSelectPrice(carPrice);
	}

	@When("^click on Find_My_Next_Car button$")
	public void click_on_Find_My_Next_Car_button() throws Throwable {
		SCL_actions.gotoFindMyNextCarButton();
	}

	@Then("^I should see list of SearchedCars$")
	public void i_should_see_list_of_SearchedCars() throws Throwable {
		
		System.out.println("car list found");
		
	}

	@And("^Page title should be \"([^\"]*)\"$")
	public void page_title_should_be(String expected_title) throws Throwable {
	 
		String actual_title = SeleniumDriver.getDriver().getTitle();
		Assert.assertEquals(actual_title, expected_title);
	}

	 

}
