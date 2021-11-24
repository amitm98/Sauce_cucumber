package stepdefs;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import stepdefs.BaseClass;

public class select_product {
	
	WebDriver driver = BaseClass.driver;
	
		@And("^User should be clicks on \"([^\"]*)\"$")
	    public void user_should_be_clicks_on_something(String productname) throws Throwable {
	        
	    WebElement add_product = driver.findElement(By.xpath("//div[text()='"+ productname +"']/following::button"));
	    add_product.click();
		}

	    @Then("^Product should be added to cart$")
	    public void product_should_be_added_to_cart() throws Throwable {
	    	WebElement To_check = driver.findElement(By.xpath("//*[@class='shopping_cart_badge']"));
	    	
			Assert.assertEquals("1", To_check.getText());
	        
	    }

	  

	    

}