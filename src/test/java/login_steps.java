import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import sun.jvm.hotspot.utilities.Assert;

public class login_steps {

    @Given("^a user is on the umami website$")
    public void aUserIsOnTheUmamiWebsite() throws Throwable {
        LoginPage.visitUmamiSite();
    }

    @And("^a user is logged in$")
    public void aUserIsLoggedIn() throws Throwable {
        LoginPage.isUserLoggedIn();
    }

    @When("^the user clicks the log out button$")
    public void theUserClicksTheLogOutButton() throws Throwable {
        LoginPage.clickLogOutButton();
    }

    @Then("^the user will be logged out$")
    public void theUserWillBeLoggedOut() throws Throwable {
//        Assert.assertEquals
    }
}
