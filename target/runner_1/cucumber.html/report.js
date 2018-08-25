$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SearchCar.feature");
formatter.feature({
  "line": 2,
  "name": "To validate the searchCar is displayed in CarsForSale and to ensure SearchCars is working fine",
  "description": "",
  "id": "to-validate-the-searchcar-is-displayed-in-carsforsale-and-to-ensure-searchcars-is-working-fine",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Search-Cars"
    }
  ]
});
formatter.before({
  "duration": 2617677940,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Validate searchCars page",
  "description": "",
  "id": "to-validate-the-searchcar-is-displayed-in-carsforsale-and-to-ensure-searchcars-is-working-fine;validate-searchcars-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on the homePage \"https://www.carsguide.com.au\" of CarsGuide Website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I move to the menu",
  "rows": [
    {
      "cells": [
        "menu"
      ],
      "line": 8
    },
    {
      "cells": [
        "CarsForSale"
      ],
      "line": 9
    },
    {
      "cells": [
        "SellMyCar"
      ],
      "line": 10
    },
    {
      "cells": [
        "CarReviews"
      ],
      "line": 11
    },
    {
      "cells": [
        "CarNews"
      ],
      "line": 12
    },
    {
      "cells": [
        "Insurance"
      ],
      "line": 13
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "click on \"SearchCars\" link",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "select CarBrand as \"BMW\" from AnyMake dropDown",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "select Model as \"1 SERIES\" from Model dropDown",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "select Location as \"Australia\" from Location dropDown",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "select Price as \"$1,000\" from price dropDown",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click on Find_My_Next_Car button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see list of SearchedCars",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Page title should be \"Bmw 1 Series Under 1000 for Sale | carsguide\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au",
      "offset": 22
    }
  ],
  "location": "SearchCar_Steps.i_am_on_the_homePage_of_CarsGuide_Website(String)"
});
formatter.result({
  "duration": 24717351968,
  "status": "passed"
});
formatter.match({
  "location": "SearchCar_Steps.i_move_to_the_menu(String\u003e)"
});
formatter.result({
  "duration": 363819849,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchCars",
      "offset": 10
    }
  ],
  "location": "SearchCar_Steps.click_on_link(String)"
});
formatter.result({
  "duration": 15753512207,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 20
    }
  ],
  "location": "SearchCar_Steps.select_CarBrand_as_from_AnyMake_dropDown(String)"
});
formatter.result({
  "duration": 226889941,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 SERIES",
      "offset": 17
    }
  ],
  "location": "SearchCar_Steps.select_Model_as_from_Model_dropDown(String)"
});
formatter.result({
  "duration": 449191022,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Australia",
      "offset": 20
    }
  ],
  "location": "SearchCar_Steps.select_Location_as_from_Location_dropDown(String)"
});
formatter.result({
  "duration": 359793948,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$1,000",
      "offset": 17
    }
  ],
  "location": "SearchCar_Steps.select_Price_as_from_price_dropDown(String)"
});
formatter.result({
  "duration": 308316296,
  "status": "passed"
});
formatter.match({
  "location": "SearchCar_Steps.click_on_Find_My_Next_Car_button()"
});
formatter.result({
  "duration": 8458739772,
  "status": "passed"
});
formatter.match({
  "location": "SearchCar_Steps.i_should_see_list_of_SearchedCars()"
});
formatter.result({
  "duration": 1116168,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bmw 1 Series Under 1000 for Sale | carsguide",
      "offset": 22
    }
  ],
  "location": "SearchCar_Steps.page_title_should_be(String)"
});
formatter.result({
  "duration": 61646324,
  "status": "passed"
});
formatter.after({
  "duration": 2956439184,
  "status": "passed"
});
formatter.uri("UsedCarsSearch.feature");
formatter.feature({
  "line": 2,
  "name": "To validate the UsedCarSearch is displayed in CarsForSale",
  "description": "and to ensure UsedCarSearch is working fine",
  "id": "to-validate-the-usedcarsearch-is-displayed-in-carsforsale",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Used-Car-Search"
    }
  ]
});
formatter.before({
  "duration": 2151769036,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Validate UsedCarSearch page",
  "description": "",
  "id": "to-validate-the-usedcarsearch-is-displayed-in-carsforsale;validate-usedcarsearch-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Used-car-search-positive"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on the homePage \"https://www.carsguide.com.au\" of CarsGuide Website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I move to the menu",
  "rows": [
    {
      "cells": [
        "menu"
      ],
      "line": 9
    },
    {
      "cells": [
        "CarsForSale"
      ],
      "line": 10
    },
    {
      "cells": [
        "SellMyCar"
      ],
      "line": 11
    },
    {
      "cells": [
        "CarReviews"
      ],
      "line": 12
    },
    {
      "cells": [
        "CarNews"
      ],
      "line": 13
    },
    {
      "cells": [
        "Insurance"
      ],
      "line": 14
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "click on \"UsedCarSearch\" link on Used Car Search Page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "select CarBrand as \"AUDI\" from AnyMake dropDown on Used Car Search Page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "select car model on Used Car Search Page",
  "rows": [
    {
      "cells": [
        "model"
      ],
      "line": 18
    },
    {
      "cells": [
        "A4"
      ],
      "line": 19
    },
    {
      "cells": [
        "A5"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "select Model as \"A6\" from Model dropDown on Used Car Search Page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "select Location as \"Australia\" from Location dropDown on Used Car Search Page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "select Price as \"$5,000\" from price dropDown on Used Car Search Page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click on Find_My_Next_Car button on Used Car Search Page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should see list of SearchedCars on Used Car Search Page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Page title should be \"Used Audi A6 Under 5000 for sale | carsguide\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au",
      "offset": 22
    }
  ],
  "location": "SearchCar_Steps.i_am_on_the_homePage_of_CarsGuide_Website(String)"
});
formatter.result({
  "duration": 15177304386,
  "status": "passed"
});
formatter.match({
  "location": "SearchCar_Steps.i_move_to_the_menu(String\u003e)"
});
formatter.result({
  "duration": 204600459,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UsedCarSearch",
      "offset": 10
    }
  ],
  "location": "UsedCar_Steps.click_on_link_on_Used_Car_Search_Page(String)"
});
formatter.result({
  "duration": 5293684493,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AUDI",
      "offset": 20
    }
  ],
  "location": "UsedCar_Steps.select_CarBrand_as_from_AnyMake_dropDown_on_Used_Car_Search_Page(String)"
});
formatter.result({
  "duration": 287722361,
  "status": "passed"
});
formatter.match({
  "location": "UsedCar_Steps.select_car_model_on_Used_Car_Search_Page(String\u003e)"
});
formatter.result({
  "duration": 1072547,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A6",
      "offset": 17
    }
  ],
  "location": "UsedCar_Steps.select_Model_as_from_Model_dropDown_on_Used_Car_Search_Page(String)"
});
formatter.result({
  "duration": 460900776,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Australia",
      "offset": 20
    }
  ],
  "location": "UsedCar_Steps.select_Location_as_from_Location_dropDown_on_Used_Car_Search_Page(String)"
});
formatter.result({
  "duration": 314604810,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$5,000",
      "offset": 17
    }
  ],
  "location": "UsedCar_Steps.select_Price_as_from_price_dropDown_on_Used_Car_Search_Page(String)"
});
formatter.result({
  "duration": 283254099,
  "status": "passed"
});
formatter.match({
  "location": "UsedCar_Steps.click_on_Find_My_Next_Car_button_on_Used_Car_Search_Page()"
});
formatter.result({
  "duration": 7660029703,
  "status": "passed"
});
formatter.match({
  "location": "UsedCar_Steps.i_should_see_list_of_SearchedCars_on_Used_Car_Search_Page()"
});
formatter.result({
  "duration": 56963,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Audi A6 Under 5000 for sale | carsguide",
      "offset": 22
    }
  ],
  "location": "SearchCar_Steps.page_title_should_be(String)"
});
formatter.result({
  "duration": 12172129,
  "error_message": "java.lang.AssertionError: expected [Used Audi A6 Under 5000 for sale | carsguide] but found [Used Audi A6 Under 5000 for Sale | carsguide]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:135)\r\n\tat org.testng.Assert.assertEquals(Assert.java:116)\r\n\tat org.testng.Assert.assertEquals(Assert.java:190)\r\n\tat org.testng.Assert.assertEquals(Assert.java:200)\r\n\tat steps.SearchCar_Steps.page_title_should_be(SearchCar_Steps.java:80)\r\n\tat ✽.And Page title should be \"Used Audi A6 Under 5000 for sale | carsguide\"(UsedCarsSearch.feature:26)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 3437981107,
  "status": "passed"
});
});