package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = "src\\test\\java\\tests\\",
                 glue = "steps", 
                 monochrome = true, 
                 plugin = { "pretty","html:src\\test\\resources\\reports" }
 )
public class Runner extends AbstractTestNGCucumberTests {

}