package steps;

import java.util.List;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import page.actions.CarGuideHomePageActions;
import page.actions.UsedCarSearchPageActions;

public class UsedCar_Steps {
	
	CarGuideHomePageActions CGHP_actions = new CarGuideHomePageActions();
	UsedCarSearchPageActions UCSP_Actions = new UsedCarSearchPageActions();
	
	@And("^click on \"([^\"]*)\" link on Used Car Search Page$")
	public void click_on_link_on_Used_Car_Search_Page(String arg1) throws Throwable {
		
		CGHP_actions.clickOnUsedCarSearch();
	}

	@And("^select CarBrand as \"([^\"]*)\" from AnyMake dropDown on Used Car Search Page$")
	public void select_CarBrand_as_from_AnyMake_dropDown_on_Used_Car_Search_Page(String carBrand) throws Throwable {
		UCSP_Actions.gotoAnyMakeDropdown(carBrand);  
	}

	@And("^select car model on Used Car Search Page$")
	public void select_car_model_on_Used_Car_Search_Page(List<String> list) throws Throwable {
		String menu = list.get(1);  
	}

	@And("^select Model as \"([^\"]*)\" from Model dropDown on Used Car Search Page$")
	public void select_Model_as_from_Model_dropDown_on_Used_Car_Search_Page(String carModel) throws Throwable {
		UCSP_Actions.gotoSelectModel(carModel);
	}

	@And("^select Location as \"([^\"]*)\" from Location dropDown on Used Car Search Page$")
	public void select_Location_as_from_Location_dropDown_on_Used_Car_Search_Page(String carLocation) throws Throwable {
		UCSP_Actions.gotoSelectLocation(carLocation);
	}

	@And("^select Price as \"([^\"]*)\" from price dropDown on Used Car Search Page$")
	public void select_Price_as_from_price_dropDown_on_Used_Car_Search_Page(String carPrice) throws Throwable {
		UCSP_Actions.gotoSelectPrice(carPrice);
	}

	@And("^click on Find_My_Next_Car button on Used Car Search Page$")
	public void click_on_Find_My_Next_Car_button_on_Used_Car_Search_Page() throws Throwable {
		UCSP_Actions.gotoFindMyNextCarButton();
	}

	@Then("^I should see list of SearchedCars on Used Car Search Page$")
	public void i_should_see_list_of_SearchedCars_on_Used_Car_Search_Page() throws Throwable {
	    
	}
}
