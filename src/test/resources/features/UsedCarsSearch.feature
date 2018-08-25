@Used-Car-Search
Feature: To validate the UsedCarSearch is displayed in CarsForSale
  and to ensure UsedCarSearch is working fine

  @Used-car-search-positive
  Scenario: Validate UsedCarSearch page
    Given I am on the homePage "https://www.carsguide.com.au" of CarsGuide Website
    When I move to the menu
      | menu        |
      | CarsForSale |
      | SellMyCar   |
      | CarReviews  |
      | CarNews     |
      | Insurance   |
    And click on "UsedCarSearch" link on Used Car Search Page
    And select CarBrand as "AUDI" from AnyMake dropDown on Used Car Search Page
    And select car model on Used Car Search Page
      | model |
      | A4    |
      | A5    |
    And select Model as "A6" from Model dropDown on Used Car Search Page
    And select Location as "Australia" from Location dropDown on Used Car Search Page
    And select Price as "$5,000" from price dropDown on Used Car Search Page
    And click on Find_My_Next_Car button on Used Car Search Page
    Then I should see list of SearchedCars on Used Car Search Page 
    And Page title should be "Used Audi A6 Under 5000 for sale | carsguide"
