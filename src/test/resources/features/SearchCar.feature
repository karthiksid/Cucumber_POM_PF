@Search-Cars
Feature: To validate the searchCar is displayed in CarsForSale and to ensure SearchCars is working fine

  Scenario: Validate searchCars page
    
    Given I am on the homePage "https://www.carsguide.com.au" of CarsGuide Website
    When I move to the menu
    |menu|
    |CarsForSale|
    |SellMyCar|
    |CarReviews|
    |CarNews|
    |Insurance|
    
    And click on "SearchCars" link 
    And select CarBrand as "BMW" from AnyMake dropDown
    And select Model as "1 SERIES" from Model dropDown
    And select Location as "Australia" from Location dropDown
    And select Price as "$1,000" from price dropDown
    And click on Find_My_Next_Car button
    
    Then I should see list of SearchedCars
    And Page title should be "Bmw 1 Series Under 1000 for Sale | carsguide"

